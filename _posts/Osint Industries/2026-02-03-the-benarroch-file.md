---
title: "The Benarroch File"
date: 2025-12-07
categories: [Osint Industries]
tags: [interpol, pappers]
description: "Identifier la dernière adresse connue en 2015 d’un individu mentionné dans une notice rouge Interpol à l’aide de sources OSINT légales."
image:
  path: /assets/img/covers/benarroch-file.webp
---

**Catégorie :** OSINT  
**Difficulté :** Easy  
**Flag :** OSINT{95, Rue Sedaine, 75011 Paris}

---

## Énoncé du challenge

>### The Benarroch File
>
>Important :  
>Ceci est une **véritable notice rouge Interpol**. Les informations peuvent être vérifiées sur le site officiel d’Interpol.
>
>Cible :  
>- Nom : **BENARROCH, INONE**  
>- Date de naissance : **19/05/1978**  
>- Pays liés : **Israël, France**  
>- Recherché par la France pour :  
>  - Fraude en bande organisée  
>  - Blanchiment d’argent  
>  - Participation à une association de malfaiteurs (jusqu’à 10 ans d’emprisonnement)
>
>Objectif :  
>À l’aide **exclusive de méthodes OSINT légales**, identifier la **dernière adresse connue de l’individu en 2015**.
>
>Format attendu :  
>OSINT{[numéro], [rue], [code postal] [ville]}
>
>Règles :  
>- OSINT uniquement  
>- Aucun contact avec la cible  
>- Aucune intrusion ou contournement de contrôle d’accès
{: .prompt-info }

---

## Démarche OSINT

### 1. Analyse du contexte Interpol
- La notice rouge indique que les faits reprochés relèvent de la **fraude organisée** et du **blanchiment**.
- Ce type d’infraction implique généralement l’usage d’une **structure légale** (société, gérance, documents administratifs).

---

### 2. Hypothèse de travail
- L’individu étant **recherché par la France**, une société immatriculée en France est un pivot logique.
- Recherche du nom **INONE BENARROCH** dans des bases de données d’entreprises françaises.

---

### 3. Pivot entreprise via Pappers
- Le moteur [**Pappers**](https://www.pappers.fr/) permet l’accès gratuit aux données légales françaises (SIREN, dirigeants, documents).
- La recherche retourne [**deux entreprises**](https://www.pappers.fr/recherche-dirigeants?q=Inone+Benarroch&date_de_naissance_dirigeant_min=19-05-1978&date_de_naissance_dirigeant_max=19-05-1978) associées à Inone Benarroch.
- La société [**PRESTIGE CONSEIL HABITAT**](https://www.pappers.fr/entreprise/mampa-prestige-conseil-habitat-801530148), créée en **2014**, est cohérente avec l’objectif temporel “2015”.

<figure>
  <img src="/assets/img/osint.industries/benarroch/entreprise.jpg" alt="Entreprise de Inone Benarroch">
</figure>

---

### 4. Preuve temporelle (année 2015)
- La fiche Pappers de la société contient des [**documents juridiques datés du 09/12/2015**](https://www.pappers.fr/entreprise/mampa-prestige-conseil-habitat-801530148#_).
- Ces documents constituent une preuve exploitable pour déterminer une adresse valide à cette période.

<figure>
  <img src="/assets/img/osint.industries/benarroch/document2015.jpg" alt="Document de 2015">
</figure>

---

### 5. Extraction de l’adresse
- Un document juridique de la société mentionne explicitement :
- **“demeurant au 95 RUE SEDAINE 75011 PARIS”**
- Cette adresse est associée nominativement à **Monsieur Inone Benarroch**.

<figure>
  <img src="/assets/img/osint.industries/benarroch/adresse.jpg" alt="Document adresse de Benarroch">
</figure>

---

## Flag

`OSINT{95, Rue Sedaine, 75011 Paris}`
