---
title: "Globe-Trotter [3/3] — Sur les flots"
date: 2025-11-22
categories: [Cybernight2025, OSINT (Cybernight2025)]
tags: [bateau, video, geoint]
description: "Analyse d’une vidéo maritime pour identifier un navire, son port d’attache et l’entreprise propriétaire."
image:
    path: /assets/img/covers/bateau.png
---

- **Catégorie** : OSINT  
- **Difficulté** : Medium  
- **Flag** : CYBN{nauset_loparto-lobster}

---

## Énoncé du challenge

>Nous voilà désormais au bord de l'eau, pour clôturer notre périple. La quiétude des vagues se mêle au
>ballet des navires, il fallait absolument que je vous partage cela avec une petite vidéo !
>Juste à la fin de l'extrait il y a ce bateau avec un toit bleu ciel qui m'intrigue un peu. Aidez-moi à
>retrouver son port d'attache ainsi que le nom de l'entreprise qui le possède.
>
>Flag : CYBN{cardiff_velargo-prawn}
{: .prompt-info }

{%
  include embed/video.html
  src='/assets/video/cybernight2025/flots.mp4'
  autoplay=true
  loop=true
  muted=true
%}

---

## Démarche OSINT

### Analyse de la vidéo

- Lecture du fichier **MP4** avec **VLC**
- Outils → Effets et filtres → Effets vidéo → **Zoom**
- Zoom manuel sur la coque du bateau

Information extraite :
- **Vessel Number : 1299572**

<figure>
  <img src="/assets/img/cybernight2025/bateau.webp" alt="Vessel number 1299572">
</figure>

---

### Localisation du lieu

- Capture d’écran sur un **plan large**
- Recherche inversée via **Google Lens**

Lieu identifié :
- **Chatham, cape cod**

<figure>
  <img src="/assets/img/cybernight2025/bateau2.webp" alt="Vessel number 1299572">
</figure>

---

### Identification du navire

- Recherche Google avec en anglais :
  - `vessel identification usa`

Le premier lien correspond à notre recherche.

<figure>
  <img src="/assets/img/cybernight2025/bateau1.jpg" alt="Vessel recherche">
</figure>

On se rend sur le site [**cgmix.uscg.mil**](https://cgmix.uscg.mil/psix/psixsearch.aspx).

<figure>
  <img src="/assets/img/cybernight2025/bateau9.jpg" alt="Vessel recherche">
</figure>

On rentre le numéro du bateau dans **Primary Vessel Number**

<figure>
  <img src="/assets/img/cybernight2025/bateau10.jpg" alt="Vessel recherche">
</figure>

Résultat :
- **Nom du bateau : Heather Renee**

<figure>
  <img src="/assets/img/cybernight2025/bateau4.webp" alt="HEATHER RENEE">
</figure>

---

### Recherche du port d’attache

- Sur la page du bateau on va sur **click here** après avoir **changé la date** j'ai écrit 1999 pour être large. Cela nous permet de voir les incidents qui sont survenus pour le bateau.

Puis on clique sur [**View Investigation Details**](https://cgmix.uscg.mil/IIR/IIRSearchResults.aspx?ActID=gOpXDhbv4F9hmbM%2b5hsfOg%3d%3d)

<figure>
  <img src="/assets/img/cybernight2025/bateau12.jpg" alt="Investigation">
</figure>

Une page d’incident apparaît  
En faisant défiler la page :
- Section [**Involved Vessel**](https://cgmix.uscg.mil/IIR/IIRSearchResults.aspx?ActID=gOpXDhbv4F9hmbM%2b5hsfOg%3d%3d).
- Détails complets du navire

<figure>
  <img src="/assets/img/cybernight2025/bateau13.jpg" alt="Involved vessel">
</figure>

Port d’attache identifié :
- **Nauset**

<figure>
  <img src="/assets/img/cybernight2025/bateau14.jpg" alt="Nauset">
</figure>

---

### Identification de l’entreprise propriétaire

- Google dork utilisé :

```bash
"1299572" "Heather Renee"
```

On a plusieurs résultats **PDF**

<figure>
  <img src="/assets/img/cybernight2025/bateau5.webp" alt="Dork">
</figure>

Recherche interne **(CTRL + F)** avec le numéro du navire **1299572**.

Entreprise trouvée :
`Loparto Lobster`

<figure>
  <img src="/assets/img/cybernight2025/bateau7.webp" alt="Dork">
</figure>

<figure>
  <img src="/assets/img/cybernight2025/bateau8.webp" alt="Dork">
</figure>

## Flag

`CYBN{nauset_loparto-lobster}`