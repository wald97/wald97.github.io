---
title: "Procédure de drapeau"
date: 2025-11-22
categories: [Cybernight2025, Stéganographie (Cybernight2025)]
tags: [pdf]
description: "Identifier un message dissimulé dans un document PDF décrivant la procédure de conception d’un drapeau."
image:
  path: /assets/img/covers/procedure-de-drapeau.png
---

**Catégorie :** Stéganographie  
**Difficulté :** Intro  
**Flag :** CYBN{F4Ites-Nou5_uN_DR4p3aU}

---

## Énoncé du challenge

>### Procédure de drapeau
>
>L'art d'imaginer, concevoir et fabriquer un drapeau remonte à la naissance des civilisations.
>
>Aujourd'hui, nous vous partageons une procédure détaillant brièvement le mécanisme de conception d'un drapeau.
>
>Qui sait, peut-être que ce document contient à lui seul un drapeau ?
>
>Format du flag : `CYBN{...}`
{: .prompt-info }

<div class="my-4 p-4 rounded-4 d-flex align-items-center justify-content-between gap-3 flex-wrap"
     style="
       background-color: rgba(255,255,255,0.04);
       border: 1px solid rgba(255,255,255,0.08);
     ">

  <div class="d-flex align-items-center gap-3">
    <div style="font-size: 2.4rem; opacity: 0.9;">
      📄
    </div>
    <div>
      <div class="fw-semibold">drapeaux.pdf</div>
      <div class="text-muted small">
        PDF . 56 Ko
      </div>
    </div>
  </div>

  <div style="padding-right: 0.5rem;">
    <a href="/assets/files/cybernight2025/drapeaux.pdf"
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

---

## Démarche Stéganographie

### Analyse du document

- Le fichier fourni est un **PDF**
- Aucun élément suspect visible à première vue
- Le contenu semble purement informatif

Première étape logique :
- Ouvrir le PDF avec un lecteur classique
- Inspecter le **texte sélectionnable**

---

### Inspection du texte

Actions réalisées :
- `Ctrl + A` pour sélectionner l’ensemble du texte
- Lecture attentive du **pied de page**

On remarque alors :
- La présence d’un **texte discret**
- Non visible sans sélection complète

Il s’agit d’un **texte caché** intégré directement dans le document.

<figure>
  <img src="/assets/img/cybernight2025/steganographie/pieddepage.jpg" alt="Message secret en pied de page">
</figure>

---

### Extraction du flag

Le texte dissimulé en bas de page contient directement le flag. Il faut faire un simple copier coller du texte. 

### Flag

`CYBN{F4Ites-Nou5_uN_DR4p3aU}`
