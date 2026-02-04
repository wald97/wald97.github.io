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

---

## Démarche OSINT

### 1. Analyse du contexte
- Cible impliquée dans des affaires financières
- Lien avec **l’ingénierie** et **l’informatique**
- Forte probabilité d’usage d’outils numériques et de services en ligne

---

### 2. Recherche d’empreinte numérique
- Recherche du nom **Olivier Hadjej** sur les réseaux sociaux
- Découverte de plusieurs comptes Facebook portant ce nom

<figure>
  <img src="/assets/img/osint.industries/hadjej/olivier.jpg" alt="Profils Facebook">
</figure>

---

### 3. Vérification de l’identité
- Analyse des photos publiées
- Présence d’un [**permis de conduire**](https://www.facebook.com/photo.php?fbid=758231784196560&set=pb.100000292372379.-2207520000&type=3&locale=fr_FR) partagé publiquement
- Date de naissance **identique** à celle de la Red Notice Interpol

Conclusion :
 Forte probabilité qu’il s’agisse du **bon individu** sur le compte facebook [**olivier.hadje**](https://www.facebook.com/olivier.hadjej?locale=fr_FR)

On peut aussi confirmer avec la photo de son collier qu'on trouve sur Interpol.

<figure>
  <img src="/assets/img/osint.industries/hadjej/confirmation.jpg" alt="Profils Facebook">
</figure>

---

### Analyse de la page facebook 
Si on scroll bien dans la page on peut voir le 22 octobre 2011, qu'il a posté son adresse email.

<figure>
  <img src="/assets/img/osint.industries/hadjej/email.jpg" alt="Adresse email">
</figure>

---

## Flag

`OSINT{olivierhadjej@hotmail.com}`
