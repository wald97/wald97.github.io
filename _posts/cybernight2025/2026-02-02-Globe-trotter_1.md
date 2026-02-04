---
title: "Globe-Trotter [1/3]:Plantastique Revival"
date: 2025-11-22
categories: [Cybernight2025, OSINT (Cybernight2025)] 
tags: [image, geoint]
description: "Identifier un lieu à partir d’une simple scène du quotidien et retrouver le prix exact d’une glace."
image:
    path: /assets/img/covers/glace.png
---

- **Catégorie** : OSINT  
- **Difficulté** : Easy  
- **Flag** : CYBN{rabaçal-nature-spot-cafe_5.50}

---

## Énoncé du challenge

>### Globe-Trotter [1/3]
>
>Ceux qui me connaissent savent mon amour du voyage et de la découverte. Je souhaitais donc vous emmener un
>peu dans mes valises pour cette CyberNight 2025 ! C'est en vadrouillant en nature peu après la campagne
>BDE de cette année que mon regard fut attiré par cette brouette, alors que je dégustais deux boules de
>glace pour me reposer un peu. Plantastique ne meurt jamais ! J'ai pris cette petite vidéo pour garder un
>souvenir de la présence de CTFREI dans ce joli lieu. 
>À vous de retrouver :
>1. Le nom de l'établissement où se situe cette brouette
>2. Le prix de ma glace
>
>Flag : CYBN{new-industry-kitchen-restaurant_9.60}
{: .prompt-info }

{%
  include embed/video.html
  src='/assets/video/cybernight2025/plantastique-revival.mp4'
  autoplay=true
  loop=true
  muted=true
%}

---

## Démarche OSINT

### Analyse de la vidéo

- Vidéo montrant une **brouette bleue**
- Sticker **CTFREI** visible
- Dézoom progressif → **plan large du lieu**
- Environnement naturel, café/restauration extérieure

Capture d’écran effectuée au moment du plan large.

<figure>
  <img src="/assets/img/cybernight2025/glace1.webp" alt="Photo bâtiment">
</figure>

---

### Recherche inversée d’image

- Utilisation d’une recherche inversée sur la capture : 
- Outil recommandé :
  - [**search by image**](https://chromewebstore.google.com/detail/search-by-image/cnojnbdhbhnkbcieeekonklommdnndci) via le module Chrome, il est sur GitHub, Firefox et Brave.
- Résultat récurrent :
  - [**Rabaçal Nature Spot Cafe**](https://www.tripadvisor.fr/Restaurant_Review-g1178726-d13478114-Reviews-Rabacal_Nature_Spot_Cafe-Calheta_Madeira_Madeira_Islands.html)
  - Portugal

Le lieu revient sur plusieurs moteurs et plateformes.

<figure>
  <img src="/assets/img/cybernight2025/glace2.jpg" alt="Rabaçal Nature Spot Cafe">
</figure>

---

### Recherche du prix de la glace

- Pas de site web officiel
- Aucun menu disponible en ligne
- Pas de mention directe du prix des glaces

Méthode efficace :
- Ouvrir **Google Maps**
- Aller sur la fiche du lieu
- Scroller **avis** des utilisateurs
- Repérer une **glacière visible sur une photo**
- Prix affichés directement dessus

<figure>
  <img src="/assets/img/cybernight2025/glace5.jpg" alt="Avis google">
</figure>

<figure>
  <img src="/assets/img/cybernight2025/glace3.webp" alt="Prix glace">
</figure>

| Nbr boule | Prix |
|------|--------|
| 1 boule | 2,50 € |
| 2 boules | 5,50 € |
| 3 boules | 7,00 € |

Deux boules de glace = **5,50 €**  
La **cédille doit être conservée** dans le nom de l’établissement.

---

## Flag

`CYBN{rabaçal-nature-spot-cafe_5.50}`