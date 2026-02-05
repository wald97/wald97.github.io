---
title: "Operation LOCKERGOGA"
date: 2025-12-17
categories: [Osint Industries]
tags: [europol, socmint, voiture]
description: "Identifier le véhicule lié à un cybercriminel recherché par Europol via des sources OSINT publiques."
image:
  path: /assets/img/covers/operation-lockergoga.webp
---

**Catégorie :** OSINT  
**Difficulté :** Medium  
**Flag :** OSINT{AB6637IE, PORSCHE, CAYENNE, 2019, 36921KM}

---

## Énoncé du challenge

>### Operation LOCKERGOGA
>
>Important :  
>Ce challenge repose sur une **vraie fiche Europol Most Wanted**, publiée par **EVO7**.  
>Les informations peuvent être vérifiées sur le site officiel d’Europol.
>
>Cible :  
>- Nom : **TYMOSHCHUK (ТИМОЩУК), Volodymyr Viktorovych**  
>- Date de naissance : **02/10/1996**  
>- Pays liés : **France, Ukraine**
>
>Recherché par la France pour :  
>- Cybercriminalité  
>- Participation à une organisation criminelle  
>- Extorsion et racket
>
>Contexte :  
>Entre **2018 et 2020**, l’individu et ses complices ont participé au déploiement du ransomware **LOCKERGOGA**, causant plus de **18 milliards de dollars de dommages** à l’échelle mondiale.
>
>Objectif :  
>Identifier, via des méthodes **OSINT légales**, les informations suivantes :
>- Plaque d’immatriculation du véhicule  
>- Marque  
>- Modèle  
>- Année de fabrication  
>- Kilométrage connu
>
>Format attendu :  
>OSINT{[plaque], [marque], [modèle], [année], [kilométrage]}
>
>Règles :  
>- OSINT uniquement  
>- Aucun contact avec la cible  
>- Aucune intrusion ou contournement
{: .prompt-info }

---

## Démarche OSINT

### 1. Point de départ : fiche Europol
- Consultation de la fiche [**Europol Most Wanted**](https://eumostwanted.eu/de#/tymoshchuk-timoschuk-volodymyr-viktorovych-volodimir-viktorovich).
- Récupération des alias, de l’âge et du contexte criminel.
- Hypothèse : présence active sur les **réseaux sociaux**, cohérente avec un individu né en 1996.

<figure>
  <img src="/assets/img/osint.industries/lockergoga/ficheeuropol.png" alt="Fiche europol de Volodymyr Viktorovych">
</figure>

---

### 2. Recherche de pseudonymes sur les réseaux sociaux
- Tests sur plusieurs plateformes : Instagram, X, TikTok, VK, Facebook.
- Pseudonymes testés :  
  - `Deadforz` → non concluant  
  - `Boba`, `farnetwork` → aucun résultat pertinent  
  - `Volotmsk` → **résultat prometteur**

---

### 3. Profil Instagram pertinent
- Découverte du compte [**@volotmsk___**](https://www.instagram.com/volotmsk___/).
- Indices cohérents :
  - Bio contenant **UA** (Ukraine)
  - Mention du prénom **Вова**, correspondant à Volodymyr
- Contenu limité mais exploitable (posts + stories).

<figure>
  <img src="/assets/img/osint.industries/lockergoga/volotmskinta.png" alt="Instagram de Volodymyr Viktorovych">
</figure>

---

### 4. Identification du véhicule
- Un post montre clairement un **véhicule Porsche noir**.
- Plaque visible : [**AB 6637 IE**](https://www.instagram.com/p/Cd_TDJUKnLE/)
- Plusieurs bases publiques de plaques permettent le recoupement :
  - Bases ukrainiennes d’immatriculation
  - Sites d’information automobile européens

<figure>
  <img src="/assets/img/osint.industries/lockergoga/carplaque.png" alt="Plaque de la voiture AB 6637 IE">
</figure>

Résultat sur [**E-DATA**](https://www.e-data.com.ua/vin/view/1263870/) :
- **Plaque :** AB6637IE  
- **Marque :** Porsche  
- **Modèle :** Cayenne  
- **Année :** 2019  

<figure>
  <img src="/assets/img/osint.industries/lockergoga/car.png" alt="Informations sur le véhicule">
</figure>

---

### 5. Confirmation visuelle et kilométrage
- Une story Instagram montre une vidéo depuis le [**poste de conduite**](https://www.instagram.com/stories/highlights/18168874528095588/).
- Le tableau de bord est visible. J’ai téléchargé la vidéo pour zoomer dessus.
- Kilométrage affiché : **36 921 km**

{%
  include embed/video.html
  src='/assets/video/LOCKERGOGA/car.mp4'
  autoplay=true
  loop=true
  muted=true
%}

<figure>
  <img src="/assets/img/osint.industries/lockergoga/story.png" alt="Story dans la voiture">
</figure>

<figure>
  <img src="/assets/img/osint.industries/lockergoga/storykm.png" alt="Kilométrage de la voiture 36 921 km">
</figure>


---

## Flag

`OSINT{AB6637IE, PORSCHE, CAYENNE, 2019, 36921KM}`
