---
title: "Deep Filter"
date: 2026-01-25
categories: [HackDay2026, Stéganographie (HackDay2026)]
tags: [png, compression, filter]
description: "Analyser les filtres PNG pour extraire un message caché dans les données d’image."
image:
  path: /assets/img/covers/deep-filter.png
---

**Catégorie :** Stéganographie  
**Difficulté :** Medium  
**Flag :** HACKDAY{S0_MuCh_D4T4_!N_PnG}

---

<figure>
  <img src="/assets/img/hackday2026/Deep Filter.jpg" alt="Image PNG du challenge">
</figure>

<div class="my-4 p-4 rounded-4 d-flex align-items-center justify-content-between gap-3 flex-wrap"
     style="
       background-color: rgba(255,255,255,0.04);
       border: 1px solid rgba(255,255,255,0.08);
     ">

  <div class="d-flex align-items-center gap-3">
    <div style="font-size: 2.4rem; opacity: 0.9;">
      📦
    </div>

    <div>
      <div class="fw-semibold">logo.png</div>
      <div class="text-muted small">
        PNG • 8.42 ko
      </div>
    </div>
  </div>

  <div style="padding-right: 0.5rem;">
    <a href="/assets/files/hackday2026/logo.png"
       class="btn btn-outline-secondary px-4"
       style="
         color: inherit;
         border-color: rgba(255,255,255,0.25);
       "
       download>
      Télécharger
    </a>
  </div>
</div>

## Énoncé du challenge

>### Deep Filter
>
>Un ancien membre de la Tecktonik Krew aurait disparu après avoir servi de simple coursier de données
>pour une organisation obscure.  
>Son dernier upload : une image PNG étrangement compressée.
>
>Format du flag : HACKDAY{flag}
>
>sha256 logo.png : 3339ce838ca957942caa346850aeb8c89554991b193bfbe02521f911c4116a9b
{: .prompt-info }

---

## Démarche Stéganographie

### Rappel sur le format PNG
Le format PNG applique un **filtre par ligne** avant la compression (zlib).

Filtres possibles :
- 0 → None  
- 1 → Sub  
- 2 → Up  
- 3 → Average  
- 4 → Paeth  

Ces filtres sont stockés **octet par octet**, ligne par ligne, avant les données compressées.

---

### Extraction des filtres PNG
On va faire un script qui lit la structure du fichier PNG, extrait et décompresse les données IDAT, récupère le filtre appliqué à chaque ligne de l’image, transforme ces filtres en bits puis en ASCII.

```python
import struct
import zlib

# Lit tout le fichier PNG en binaire
with open("logo.png", "rb") as f:
    data = f.read()

# Saute la signature PNG (8 octets)
pos = 8
idat_data = b""

# Parcourt les chunks PNG et récupère/concatène tous les IDAT
while pos < len(data):
    length = struct.unpack(">I", data[pos:pos+4])[0]      # taille du chunk
    chunk_type = data[pos+4:pos+8]                        # type (IHDR/IDAT/IEND)
    chunk_data = data[pos+8:pos+8+length]                 # données du chunk

    if chunk_type == b"IDAT":
        idat_data += chunk_data                           # ajoute les données compressées

    pos += 12 + length                                    # passe au chunk suivant (len+type+data+crc)

# Décompresse le flux IDAT (zlib) -> données brutes (filtres + pixels)
raw = zlib.decompress(idat_data)

# Paramètres de l’image : 250px de large, RGB => 3 octets/pixel
width = 250
bpp = 3
stride = width * bpp + 1                                  # +1 octet = filtre de ligne

# Extrait 1 octet de filtre au début de chaque ligne
filters = [raw[i] for i in range(0, len(raw), stride)]

# Affiche la liste des filtres (doit être surtout 1 et 2 sur ce chall)
print(filters)

# Convertit les filtres PNG en bits (1 → 0, 2 → 1)
bits = "".join("0" if f == 1 else "1" for f in filters)

flag = ""

# Parcourt la chaîne binaire par blocs de 8 bits (1 octet)
for i in range(0, len(bits), 8):
    # Convertit l’octet binaire en caractère ASCII
    flag += chr(int(bits[i:i+8], 2))

# Affiche le message décodé
print(flag)
```

on exécute le script 

```bash
python3 extract_filters.py

[1, 2, 1, 1, 2, 1, 1, 1, 1, 2, 1, 1, 1, 1, 1, 2, 1, 2, 1, 1, 1, 1, 2, 2, 1, 2, 1, 1, 2, 1, 2, 2, 1, 2, 1, 1, 1, 2, 1, 1, 1, 2, 1, 1, 1, 1, 1, 2, 1, 2, 1, 2, 2, 1, 1, 2, 1, 2, 2, 2, 2, 1, 2, 2, 1, 2, 1, 2, 1, 1, 2, 2, 1, 1, 2, 2, 1, 1, 1, 1, 1, 2, 1, 2, 2, 2, 2, 2, 1, 2, 1, 1, 2, 2, 1, 2, 1, 2, 2, 2, 1, 2, 1, 2, 1, 2, 1, 1, 1, 1, 2, 2, 1, 2, 2, 1, 2, 1, 1, 1, 1, 2, 1, 2, 2, 2, 2, 2, 1, 2, 1, 1, 1, 2, 1, 1, 1, 1, 2, 2, 1, 2, 1, 1, 1, 2, 1, 2, 1, 2, 1, 1, 1, 1, 2, 2, 1, 2, 1, 1, 1, 2, 1, 2, 2, 2, 2, 2, 1, 1, 2, 1, 1, 1, 1, 2, 1, 2, 1, 1, 2, 2, 2, 1, 1, 2, 1, 2, 2, 2, 2, 2, 1, 2, 1, 2, 1, 1, 1, 1, 1, 2, 2, 1, 2, 2, 2, 1, 1, 2, 1, 1, 1, 2, 2, 2, 1, 2, 2, 2, 2, 2, 1, 2, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1]
HACKDAY{S0_MuCh_D4T4_!N_PnG}
```

--

### Flag
`HACKDAY{S0_MuCh_D4T4_!N_PnG}`
