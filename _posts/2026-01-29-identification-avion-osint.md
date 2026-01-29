---
title: "Identification d’un avion militaire par caractéristiques visuelles"
date: 2024-10-10 15:00:00 +0100
categories: [OSINT, CTFREI]
tags: [CTFREI, avion]
excerpt: >
  Challenge visant à identifier un avion militaire
  grâce à l’observation de ses caractéristiques externes.

image:
  path: /assets/img/covers/avion.jpg
---

**Catégorie :** OSINT  
**Difficulté :** Easy  
**Flag :** `CTFREI{Xian_Y-20}`

---

## Énoncé du challenge

{% hint style="info" %}
#### Avion

***

Lors d’un passage aérien au-dessus de mon domicile, j’ai aperçu un avion particulièrement imposant.  
Je n’ai pas pu le photographier, mais plusieurs caractéristiques visuelles m’ont marqué :

- Quatre moteurs à réaction positionnés sous les ailes  
- Des ailes en flèche, fixées en hauteur sur le fuselage  
- Un empennage en T avec une configuration classique  
- Un nez fin, non bosselé, avec une roue de train d’atterrissage visible  
- Un drapeau rouge présent sur la dérive  

À partir de ces seuls éléments, l’objectif est d’identifier précisément le modèle de cet avion.

**Format attendu :** `CTFREI{Mark_A-60}`
{% endhint %}
---

## Démarche OSINT

Pour cette recherche, j’ai utilisé un outil de reconnaissance d’aéronefs basé sur des critères visuels et techniques :

- [**Aircraft recognition guide**](https://www.aircraftrecognitionguide.com/identify-aircraft/identify-by-airplane-characteristics)

La méthode consiste à filtrer progressivement les modèles existants à partir des caractéristiques observables.

### Critères sélectionnés

- **Number + type of engines** : 4 jets  
- **Location of engines** : Under the wings 
- **Wing shape** : Swept wings  
- **Wing attachment** : High, on top of fuselage  
- **Landing gear configuration** : Nose wheel landing gear
- **Tailplane configuration** : T-tail, horizontal stabiliser on top of the vertical stabiliser

---

## Analyse des résultats

Après application de l’ensemble des filtres, seuls **six modèles** correspondent à ces critères.

Parmi eux, un seul appareil présente un **drapeau rouge sur la dérive**, élément distinctif mentionné dans l’énoncé.

Le modèle identifié est :

**Xian Y-20**

<figure>  <img src="/assets/img/ctfrei/xian-y-20.jpg" alt="Xian Y-20 – avion de transport militaire chinois">
</figure>

---

## Flag

CTFREI{Xian_Y-20}