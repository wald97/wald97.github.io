---
title: "The Glitch in the Matrix"
date: 2026-01-25
categories: [HackDay2026, Stéganographie (HackDay2026)]
tags: [lsb, png, xor]
description: "Extraire un message caché dans les bits LSB du canal rouge avec une obfuscation XOR."
image:
  path: /assets/img/covers/matrix-glitch.png
---

**Catégorie :** Stéganographie  
**Difficulté :** Medium  
**Flag :** HACKDAY{e3a12b9383038b0c6d755bcb39d3bf879cac3750588226ba1c52d64fde0a7c96}

---

<figure>
  <img src="/assets/img/hackday2026/The glitch in the matrix.jpg" alt="Image du challenge The Glitch in the Matrix">
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
      <div class="fw-semibold">Matrix_challenge.png</div>
      <div class="text-muted small">
        PNG • 1.49 Mo
      </div>
    </div>
  </div>

  <div style="padding-right: 0.5rem;">
    <a href="/assets/files/hackday2026/Matrix_challenge.png"
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

>### The Glitch in the Matrix
>
>The simulation is starting to fracture, and Neo can finally see the raw data stream behind reality.  
>The truth is not hidden in the whole image, but scattered within the tiniest fragments of the **red signals**.
>
>Morpheus left a final message:  
>*“Collect its smallest units of information and regroup them 8 by 8.  
>The signal is distorted — only the Answer to the Ultimate Question can reveal the truth.”*
>
>Format du flag : HACKDAY{flag}  
>SHA1 : 4bbab076a0aa488761cd216a82bf4e508a2953ab
{: .prompt-info }

---

## Démarche Stéganographie

### Analyse initiale
- Image PNG classique.
- Aucun résultat direct avec `zsteg`.
- Indices clairs :
  - **Red pill** → canal Rouge.
  - **8 by 8** → regroupement par octets.
  - **Ultimate Question (42)** → clé XOR `0x42`.

---

### Extraction des LSB du canal rouge
On extrait le bit de poids faible (LSB) du canal Rouge pour chaque pixel.
Pour cela j'utilise sois [**Stegonline**](https://georgeom.net/StegOnline/upload).
On **upload** l'image, on clique sur **extract Files/data** colonne des rouges et bits 0 puis go. 
On copie l'**hexadécimal** en bas. 

<figure>
  <img src="/assets/img/hackday2026/stegonline.jpg" alt="Stegonline extract Files/data">
</figure>

<figure>
  <img src="/assets/img/hackday2026/extractR.jpg" alt="Extraction bit0 red">
</figure>

### Pipeline CyberChef
on va maitenant sur cyberchef pour nous donnéer un flag lisible.
- 1 : **From Hex**
- 2	: **XOR	Key : 42 (hex)**
- 3	: **To Text	UTF-8**

<figure>
  <img src="/assets/img/hackday2026/matrix flag.jpg" alt="Flag final cyberchef">
</figure>

### Flag
`HACKDAY{e3a12b9383038b0c6d755bcb39d3bf879cac3750588226ba1c52d64fde0a7c96}`