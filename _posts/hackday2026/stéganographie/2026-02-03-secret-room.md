---
title: "Secret Room"
date: 2026-01-25
categories: [HackDay2026, Stéganographie (HackDay2026)]
tags: [blender]
description: "Explorer une scène Blender pour retrouver un message caché en trois mots dans une pièce secrète."
image:
  path: /assets/img/covers/secret-room.png
---

**Catégorie :** Stéganographie  
**Difficulté :** Hard  
**Flag :** HACKDAY{UNDER_HIDDEN_CONGRATULATIONS}

---

<figure>
  <img src="/assets/img/hackday2026/Secret room.jpg" alt="Photo enoncé">
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
      <div class="fw-semibold">Room.zip</div>
      <div class="text-muted small">
        Archive • 4.33 MB
      </div>
    </div>
  </div>

  <!-- Bouton avec marge -->
  <div style="padding-right: 0.5rem;">
    <a href="/assets/files/hackday2026/Room.zip"
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

>### Secret Room
>
>A teenager spends most of his time in his bedroom: chatting on MSN, listening to CDs, and customising his space.  
>Paranoid and obsessed with privacy, he starts hiding messages in his secret room, carefully writing clues and leaving them behind.  
>You are not supposed to be here, but what can you do when you are so curious…
>
>The hidden message is made of three words.  
>Format du flag : **HACKDAY{WORD1_WORD2_WORD3}**
>
>SHA1 Room.zip : 57e18650a1c4799c265c392b3d35d2671152d2ad
{: .prompt-info }

---

## Démarche Stéganographie

### Ouverture de la scène

Après extraction de l’archive, on ouvre le fichier `.blend` dans [**Blender**](https://www.blender.org/).

Au premier abord, on se retrouve dans **Room A**, une chambre classique sans élément suspect.

En inspectant la **Scene Collection**, on remarque :
- plusieurs collections,
- des objets masqués,
- une seconde pièce désactivée par défaut.

---

### Accès à la pièce secrète

En désactivant l’affichage de Room A et en activant les objets cachés, on accède à **Room B**, la pièce secrète mentionnée dans le lore.

<figure>
  <img src="/assets/img/hackday2026/room2.jpg" alt="Collections Blender montrant la pièce cachée">
</figure>

---

### Indices visibles (post-it)

Dans Room B, plusieurs **post-it** sont visibles.

En observant attentivement :
- les **noms des objets** dans Blender sur les post-it, on peut voir des lettres.
- Il faut suivre l'ordre d'affichage en 3D. 

on récupère la première partie du message : `0. UNDER`

<figure>
  <img src="/assets/img/hackday2026/postit.jpg" alt="Mot under post-it">
</figure>

---

### Mode Wireframe
Si on va dans les logos ronds en bas on prend le Wireframe il permet de voir en rayon X.
On regarde sous le lit de la première chambre. 
On peut lire  : `1. HIDDEN`

<figure>
  <img src="/assets/img/hackday2026/hidden.webp" alt="Mot sous le lit en rayon X">
</figure>

---

### Dernier mot (inspection UV)

Le dernier mot est dissimulé des les **images de textures**.

On va dans : **Render > Render Image > mattress Base Color (logo carré et triangle au milieu)**.

<figure>
  <img src="/assets/img/hackday2026/congratulations.webp" alt="On peux voir le render des images">
</figure>

Mot final obtenu : `2. CONGRATULATIONS`

### Reconstruction du flag

Les trois mots trouvés sont :

- UNDER  
- HIDDEN  
- CONGRATULATIONS  

---

### Flag

`HACKDAY{UNDER_HIDDEN_CONGRATULATIONS}`