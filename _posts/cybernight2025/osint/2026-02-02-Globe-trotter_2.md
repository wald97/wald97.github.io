---
title: "Globe-Trotter [2/3]:Ondes internationales"
date: 2025-11-22
categories: [Cybernight2025, OSINT (Cybernight2025)]
tags: [image, geoint, archive]
description: "Identifier un lieu à partir d’une simple photo et identifier une archive de 1997"
image:
    path: /assets/img/covers/tower.png
---



**Catégorie :** OSINT  
**Difficulté :** Medium  
**Flag :** CYBN{tour-namsan_598361}

---

## Énoncé du challenge

>### Globe-Trotter [2/3] – Ondes internationales
>
>"Je crois capter les ondes venues d'un autre monde" disait Daniel Balavoine dans une de ses célèbres
>chansons (oui, mes références ne datent pas d'hier ), il semblerait qu'ici cette tour en soit capable
>également !
>Du moins c'est ce que suggèrent les multiples stickers collés en face de cette dernière, je n'ai donc pas
>pu m'empêcher d'ajouter ma pierre à l'édifice. Bien entendu, cela mérite une photo souvenir ! À vous de
>retrouver le nom de la célèbre tour qui se trouve derrière moi au moment où j'ai pris ce cliché. Pour
>accéder à ce lieu j'ai d'ailleurs dû emprunter un certain moyen de transport, pourrais-tu me dire le
>nombre de personnes l'ayant utilisé en 1997 ?
{: .prompt-info }

<figure>
  <img src="/assets/img/cybernight2025/ondes.webp" alt="Image départ">
</figure>

---

## Démarche OSINT

## Analyse de l’image

Indices visibles
- Multiples **messages en coréen** sur les stickers.
- Présence d’un **drapeau malaisien**.
- Structure métallique orange et blanche rappelant une **tour Eiffel**.
- On a aussi **une antenne micro-ondes directionnelle** (le tambour blanc ^^).

---

## Identification de la tour
On va faire un [**search by image**](https://chromewebstore.google.com/detail/search-by-image/cnojnbdhbhnkbcieeekonklommdnndci) via le module chrome , il est sur github, firefox et brave.

Je me focus sur la tour avec les couleur et l'antenne directionnelle. 

<figure>
  <img src="/assets/img/cybernight2025/tower2.jpg" alt="Reverse image tour">
</figure>

### Vérification visuelle
- Présence d’une structure orange et blanche.
- Correspondance parfaite avec l’environnement.
- Plusieurs antenne directionelle

**Tour identifiée : Tower of Seoul Namsan transmitting station**

On va quand même identifier la tour située juste derrière lui sur **google map**.

<figure>
  <img src="/assets/img/cybernight2025/tower3.jpg" alt="Tour google map">
</figure>

C'est la [**N Seoul Tower**](https://www.google.com/maps/place/%EC%A0%9C%EC%A3%BC%EB%A9%B4%EC%9E%A5+%EB%82%A8%EC%82%B0%EC%84%9C%EC%9A%B8%ED%83%80%EC%9B%8C%EC%A0%90/@37.5512869,126.9884134,3a,86.5y,279.41h,85.6t/data=!3m8!1e1!3m6!1sCIHM0ogKEICAgID4sd-REQ!2e10!3e11!6shttps:%2F%2Flh3.googleusercontent.com%2Fgpms-cs-s%2FAFfmt2aBwplqc5MDtPAXVpxqQYD-jKZMcJrgqQ_HZ0SnzC_gJM8NNJSBOEVyjLA--HFF9vlMN50OL6OCtbzHc5C3F4Ju2xK7MbM0L0PYcaZREQgXrn0UJDDdhr5LUF1Js4KJ78O52W3a%3Dw900-h600-k-no-pi4.396523751271985-ya99.407260559284-ro0-fo100!7i5376!8i2688!4m6!3m5!1s0x357ca3cb36ae9a45:0x2e873bd0ffd49c84!8m2!3d37.5511334!4d126.98805!16s%2Fg%2F11rv3h3n16?entry=ttu&g_ep=EgoyMDI2MDEyOC4wIKXMDSoASAFQAw%3D%3D)

---

## Moyen d’accès à la tour

- Recherche : **how to access Namsan Tower**
- Plusieurs options possibles :
  - Bus
  - Marche
  - [**Téléphérique**](https://www.koreatodo.com/namsan-seoul-tower)

Le moyen correspondant le mieux au contexte :  
**Namsan Cable Car**

<figure>
  <img src="/assets/img/cybernight2025/tower4.jpg" alt="Moyen de transport">
</figure>

---

## Recherche du nombre de passagers (1997)

### Problème
- Wikipedia ne fournit [**aucune donnée précise**](https://en.wikipedia.org/wiki/Namsan_cable_car) pour l’année 1997.

On regarde les **sources** de la page Wikipedia.

<figure>
  <img src="/assets/img/cybernight2025/tower5.jpg" alt="Source wiki">
</figure>

On a des sources archivées:
- 3 sites disponibles via [**Wayback Machine**](https://web.archive.org/)
- Sélection du site : [**Cable Car Story**](https://web.archive.org/web/20070928210953/http://www.cablecar.co.kr/english/story.html)

---

## Donnée clé trouvée

Sur une ancienne page archivée :
- Statistiques passagers **1997–1999**
- Valeur pour **1997** :

 **598 361 passagers**

<figure>
  <img src="/assets/img/cybernight2025/tower6.jpg" alt="Nombre de passagé">
</figure>

---

## Conclusion

- Tour derrière la photo : **Namsan Tower**
- Moyen de transport : **Namsan Cable Car**
- Nombre de passagers en 1997 : **598361**

---

## Flag

`CYBN{tour-namsan_598361}`