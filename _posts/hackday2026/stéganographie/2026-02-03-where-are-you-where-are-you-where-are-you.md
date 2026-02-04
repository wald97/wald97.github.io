---
title: "Where are you ? Where are you ? Where are you ?"
date: 2026-01-25
categories: [HackDay2026, Stéganographie (HackDay2026)]
tags: [image, visuel]
description: "Retrouver une adresse cachée dans une image en exploitant la position des mots."
image:
  path: /assets/img/covers/where-are-you.png
---

**Catégorie :** Stéganographie  
**Difficulté :** Medium  
**Flag :** HACKDAY{42rueDesSirenes99999PortAzurFrance}

---

<figure>
  <img src="/assets/img/hackday2026/Where are you .jpg" alt="Image maritime du challenge Where are you">
</figure>

<div class="my-4 p-4 rounded-4 d-flex align-items-center justify-content-between gap-3 flex-wrap"
     style="
       background-color: rgba(255,255,255,0.04);
       border: 1px solid rgba(255,255,255,0.08);
     ">

  <!-- Bloc gauche : icône + infos -->
  <div class="d-flex align-items-center gap-3">
    <!-- Icône -->
    <div style="font-size: 2.4rem; opacity: 0.9;">
      📦
    </div>

    <!-- Infos fichier -->
    <div>
      <div class="fw-semibold">Habibi.png</div>
      <div class="text-muted small">
        PDF • 14.6 MB
      </div>
    </div>
  </div>

  <!-- Bouton avec marge -->
  <div style="padding-right: 0.5rem;">
    <a href="/assets/files/hackday2026/Habibi.jpg"
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

>### Where are you ? Where are you ? Where are you ?
>
>1999. In a maritime zone never fully charted, several vessels stop transmitting.  
>No distress call. No wreckage. Only images, analyzed too late.  
>Even today, some believe the address of the last passage is still there —  
>visible only to those who know where to look.
>
>**Format du flag :** HACKDAY{abcdef} (tous les mots collés)
>
>sha256 Habibi.png : a7eddf74ac79329646d76e5323b96f51cbf57bf6d69258469bb9a9fb09705a81
{: .prompt-info }

---

## Démarche Stéganographie

### Analyse initiale

Le défi repose uniquement sur une **image** et une narration évoquant :
- une disparition maritime,
- l’absence de signaux ou de débris,
- un message « visible uniquement pour ceux qui savent où regarder ».

Cela oriente clairement vers une **stéganographie visuelle**, sans outil lourd.

---

### Observation de l’image

En inspectant attentivement l’image :

- **En bas à droite**, une **bouteille** est visible.
- En zoomant, on distingue une **phrase écrite dessus**.

Texte lisible :

`ALFA INDIA 42 SIERRA TANGO Rue OSCAR PAPA des DELTA OSCAR Sirenes,NOVEMBER OSCAR 99999 TANGO UNIFORM Port-Azur, SIERRA ECHO France.`


<figure>
  <img src="/assets/img/hackday2026/bouteille.jpg" alt="Bouteille message">
</figure>

---

### Analyse du message

- Les mots en majuscules correspondent à l’[**alphabet phonétique de l’OTAN**](https://fr.wikipedia.org/wiki/Alphabet_radiot%C3%A9l%C3%A9phonique_international).
- l'indice qui m'a aidé et qu'on chercher un lieu le 99 999 et Port-France mon fait direct pensé à une adresse. 

J'ai donc retiré tous les mots de l'OTAN: `ALFA INDIA SIERRA TANGO OSCAR PAPA DELTA OSCAR NOVEMBER OSCAR TANGO UNIFORM SIERRA ECHO`
Après sélection, on obtient :  

- 42  
- Rue  
- des  
- Sirenes  
- 99999  
- Port-Azur  
- France  

Ce qui forme l’adresse complète :

**42 Rue des Sirenes, 99999 Port-Azur, France**

### Flag

`HACKDAY{42rueDesSirenes99999PortAzurFrance}`