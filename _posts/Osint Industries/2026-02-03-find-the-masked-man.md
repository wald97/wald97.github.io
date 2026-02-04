---
title: "FIND THE MASKED MAN"
date: 2025-12-1
categories: [Osint Industries]
tags: [geoint]
description: "Identifier une station de métro parisienne à partir d’indices visuels et d’une photo masquée."
image:
  path: /assets/img/covers/FIND THE MASKED MAN.webp
---

**Catégorie :** GEOINT  
**Difficulté :** Easy  
**Flag :** OSINT{SAINT_PHILIPPE_DU_ROULE}

---

## Énoncé du challenge

>### Find the Masked Man
>
>Description : 
>Une photographie a été prise à Paris le 3 décembre 2023, vers 18h00.
>Votre mission consiste à identifier la station de métro la plus proche du lieu où l'homme masqué a été photographié.
>Ce défi repose sur l'application des techniques de GEOINT et d'OSINT pour analyser la structure urbaine, les conditions d'éclairage, les indices >environnementaux et l'agencement du réseau de transports parisiens.
>
>Contexte
>Les enquêteurs ont reçu une image montrant un individu masqué dans un quartier central et huppé de Paris.
>Les métadonnées et les observations environnementales indiquent :
>• La photo a été prise le 3 décembre 2023
>• L'heure approximative était 18h00 (début de soirée)
>• Le lieu se situe à Paris, dans un quartier central et huppé
>• La scène se situe près de l'intersection d'une rue et d'une avenue
>Votre objectif est de déterminer la station de métro la plus proche du lieu de la prise de vue, en utilisant uniquement les indices contextuels et visuels >fournis.
>
>Mission
>Analysez les informations données et identifiez la station de métro parisienne la plus proche. La réponse finale doit respecter un format de drapeau strict.
>
>Format du drapeau :
>Le drapeau correspond simplement au nom de la station de métro la plus proche du lieu de l’événement.
>Les participants doivent soumettre le drapeau exactement comme suit :
>OSINT{NOM_DE_LA_STATION}
>
>Règles :
>• En majuscules uniquement
>• Sans accents
>• Utilisez des tirets bas entre les mots
{: .prompt-info }

<figure>
  <img src="/assets/img/osint.industries/Find the masked man/mask.jpeg" alt="Photo de l’homme masqué">
</figure>

---

## Démarche OSINT / GEOINT

### Analyse de la photo
- Environnement urbain dense
- Architecture haussmannienne  
- Quartier animé, commerces, bars  
- Indice fort : **julien** sur un restaurant ou boulangerie

<figure>
  <img src="/assets/img/osint.industries/Find the masked man/julien.jpeg" alt="Julien">
</figure>

---

### Recherche google
J'ai pensé d'abord à un restaurant, j'ai donc tapé `julien restaurant Paris`, mais aucun dans le 8ème arrondissement.
J'ai donc pensé à une devanture de boulangerie, j'ai donc tapé `julien boulangerie Paris` beaucoup plus de résultat dans le 8ème arrondissement. 

<figure>
  <img src="/assets/img/osint.industries/Find the masked man/boulangerie.jpg" alt="Boulangerie 8ème">
</figure>

---

### 3. Vérification cartographique
- Croisement rue / avenue  
- Intersection typique du **8ᵉ arrondissement**  
- Confirmation via Google Maps

<figure>
  <img src="/assets/img/osint.industries/Find the masked man/googlemap.jpg" alt="Carte de localisation">
</figure>

---

### 4. Identification de la station la plus proche
- Stations autour :
  - Miromesnil  
  - Franklin D. Roosevelt  
  - **Saint-Philippe-du-Roule**

La plus proche à pied : **Saint-Philippe-du-Roule** avec la vue des transports sur google map.

<figure>
  <img src="/assets/img/osint.industries/Find the masked man/station metro.jpg" alt="Station de métro la plus proche">
</figure>

---

## Flag

`OSINT{SAINT_PHILIPPE_DU_ROULE}`
