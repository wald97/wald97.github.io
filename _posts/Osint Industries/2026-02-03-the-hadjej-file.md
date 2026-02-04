---
title: "THE HADJEJ FILE"
date: 2025-12-05
categories: [Osint Industries]
tags: [breach, email, interpol]
description: "Identifier une adresse email potentiellement liée à une cible figurant sur une Red Notice Interpol."
image:
  path: /assets/img/covers/the-hadjej-file.webp
---

**Catégorie :** OSINT  
**Difficulté :** Hard  
**Flag :** OSINT{olivierhadjej@hotmail.com}

---

## Énoncé du challenge

>### The Hadjej File
>
>Description :  
>Ce défi repose sur une **véritable Red Notice Interpol**.  
>Les participants peuvent vérifier les informations directement sur le site officiel d’Interpol :
>
>https://www.interpol.int/How-we-work/Notices/Red-Notices/View-Red-Notices#2025-86873
>
>Informations cible :
>• **Nom :** Olivier HADJEJ  
>• **Date de naissance :** 17/07/1967  
>• **Pays liés :** France, Israël  
>
>Recherché par la France pour :
>• Escroquerie en bande organisée  
>• Blanchiment d’argent lié à une fraude organisée  
>• Participation à une association de malfaiteurs (jusqu’à 10 ans de prison)
>
>Objectif :
>À l’aide **exclusivement de méthodes OSINT légales**, identifier **une adresse email pouvant raisonnablement être liée** à l’individu mentionné ci-dessus.
>
>Format du drapeau :
>
>`OSINT{email}`
>
>Règles :
>• OSINT légal uniquement  
>• Aucun contact direct  
>• Aucune intrusion ou contournement de protections  
{: .prompt-info }

<figure>
  <img src="/assets/img/osint.industries/hadjej/interpol.png" alt="Red Notice Interpol">
</figure>

---

## Démarche OSINT

### 1. Analyse du contexte
- Cible impliquée dans des affaires financières
- Lien avec **l’ingénierie** et **l’informatique**
- Forte probabilité d’usage d’outils numériques et de services en ligne

---

### 2. Recherche d’empreinte numérique
- Recherche du nom **Olivier Hadjej** sur les réseaux sociaux
- Découverte d’un compte Facebook portant ce nom

<figure>
  <img src="/assets/img/osint.industries/hadjej/facebook.png" alt="Profil Facebook">
</figure>

---

### 3. Vérification de l’identité
- Analyse des photos publiées
- Présence d’un permis de conduire partagé publiquement
- Date de naissance **identique** à celle de la Red Notice Interpol

Conclusion :
➡️ Forte probabilité qu’il s’agisse du **bon individu**

<figure>
  <img src="/assets/img/osint.industries/hadjej/id.png" alt="Date de naissance confirmée">
</figure>

---

### 4. Guesstimation contrôlée
- Hypothèses basées sur :
  - Année de naissance : 1967
  - Pays : Israël → France
  - Profil technique / ingénierie
- Utilisation d’un prompt IA pour proposer des domaines d’emails plausibles

<figure>
  <img src="/assets/img/osint.industries/hadjej/ai.png" alt="Prompt IA">
</figure>

Domaines retenus :
- `@hotmail.com`
- `@walla.co.il`
- `@netvision.net.il`
- `@012.net.il`

Usernames probables :
- `olivierhadjej`
- `olivier.hadjej`

---

### 5. Vérification via Have I Been Pwned
- Utilisation du service **Have I Been Pwned**
- Méthode légale et éthique
- Recherche de correspondances email ↔ fuites de données connues

Pourquoi cet outil est acceptable :
- Pas de stockage des données recherchées
- Basé sur des fuites **publiquement documentées**
- Utilisé à des fins de **cybersécurité et prévention**
- Consentement implicite via usage volontaire

<figure>
  <img src="/assets/img/osint.industries/hadjej/hibp.png" alt="Have I Been Pwned">
</figure>

---

### 6. Résultat
- Une des adresses testées apparaît dans l’historique de violations
- Présence dans des fuites connues → forte probabilité d’existence réelle
- Cette adresse est retenue comme **pivot OSINT crédible**

---

## Flag

`OSINT{olivierhadjej@hotmail.com}`
