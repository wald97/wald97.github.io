---
title: "Y2K Bug Hunting"
date: 2026-01-25
categories: [HackDay2026, OSINT (HackDay2026)]
tags: [patent, googleint]
description: "Retrouver la date de publication d’un brevet lié au bug de l’an 2000."
image:
  path: /assets/img/covers/y2k-bug-hunting.png
---

**Catégorie :** OSINT  
**Difficulté :** Intro  
**Flag :** HACKDAY{2003-04-15}

---

## Énoncé du challenge

<figure>
  <img src="/assets/img/hackday2026/Y2k bug hunting.jpg" alt="Photo énoncé">
</figure>

>### Y2K Bug Hunting 
>
>⚠️ **Attention : cette histoire est fictive, mais basée sur des faits réels.**
>
>Notre équipe de détectives a identifié une fraude fiscale à grande échelle impliquant **Mr. X**.  
>Dans les années 90, cet individu aurait infiltré une entreprise informatique afin de tirer profit du **bug de l’an 2000 (Y2K)** et de pratiques marketing douteuses.
>
>En **1999**, cette entreprise, nommée **EMC Corp**, a dévoilé un brevet concernant la  
>**sauvegarde des données informatiques** (*Computer data storage backup*).
>
>Retrouvez le brevet portant le code **US6549992B1** et donnez-nous sa **date de publication**.
>
>**Format du flag :** `HACKDAY{YYYY-MM-DD}`
{: .prompt-info }

---

## Démarche OSINT

### Analyse des indices
Le challenge fournit directement :
- Le **nom de l’entreprise** : EMC Corp
- Le **sujet du brevet** : Computer data storage backup
- Le **code exact du brevet** : US6549992B1

---

### Recherche du brevet
Deux approches possibles :
- Recherche Google classique  
- Recherche ciblée sur la base officielle des brevets

La méthode propre consiste à utiliser [**Google Patents**](https://patents.google.com/).

---

### Consultation sur Google Patents
- Accès direct au brevet via son identifiant :
  - <https://patents.google.com/patent/US6549992B1/>

Sur la page du brevet, plusieurs dates sont affichées :
- Filing date
- Priority date
- **Publication date**
- Grant date

---

### Identification de la bonne date
- Le challenge demande explicitement la **date de publication**
- Sur la fiche du brevet **US6549992B1**, la date de publication indiquée est : **2003-04-15**

<figure>
  <img src="/assets/img/hackday2026/patent.png" alt="Date de publication">
</figure>

---

## Flag

`HACKDAY{2003-04-15}`
