---
title: "Patent-stealer…"
date: 2026-01-25
categories: [HackDay2026, OSINT (HackDay2026)]
tags: [patent, googleint]
description: "Identifier l’inventeur japonais d’un brevet antérieur en analysant les citations d’un brevet américain."
image:
  path: /assets/img/covers/patent-stealer.png
---

**Catégorie :** OSINT  
**Difficulté :** Medium  
**Flag :** HACKDAY{Nobuyuki}

---

## Énoncé du challenge

<figure>
  <img src="/assets/img/hackday2026/Patent-stealer.jpg" alt="Photo énoncé">
</figure>

>### Patent-stealer…
>
>Le brevet utilisé par **Finch** comme couverture n’était pas une invention originale.  
>L’analyse des **citations** de ce document révèle qu’il s’appuie fortement sur une technologie de **copie distante / sauvegarde** développée par le géant japonais **Hitachi**.
>
>Finch aurait volé le code source original directement au Japon avant la validation du brevet américain.
>
>Pour prouver l’antériorité et le vol, nous devons retrouver le **document source original déposé au Japon**.
>
>L’un des inventeurs possède un nom contenant une **marque automobile**.
>
>Quelle est son **prénom** ?
>
>**Format :** `HACKDAY{Prénom}`
{: .prompt-info }

---

## Démarche OSINT

### Identifier le brevet clé
Le challenge fait clairement référence au brevet du challenge [**Y2K Bug Hunting**]({% post_url hackday2026/osint/2026-02-03-y2k-bug-hunting %}) :

- **US6549992B1**

---

### Analyse des citations
Sur la page Google Patents du brevet [**US6549992B1**](https://patents.google.com/patent/US6549992B1/en?oq=US6549992B1):
- On fait défiler jusqu’à la section **Patent Citations**
- On observe **25 brevets cités**

<figure>
  <img src="/assets/img/hackday2026/patentcitation.png" alt="Citation patent">
</figure>

---

### Filtrer sur Hitachi
En utilisant une recherche rapide (`CTRL + F` → *Hitachi*), on identifie uniquement **3 brevets développés par Hitachi** :

- [**Data replication among storage systems**](https://patents.google.com/patent/US20040019615A1/en?oq=US6549992B1&peid=649e946f08398%3A15c%3Af42b059)
- [**Method for backing up a disk array system**](https://patents.google.com/patent/US20040019615A1/en?oq=US6549992B1&peid=649e943ba2058%3A155%3A6533ef0c)
- [**Highly reliable online system**](https://patents.google.com/patent/US5596706A/en?oq=US6549992B1&peid=649e94644a398%3A15a%3A1433c707)

Ces brevets correspondent bien au thème :
- Copie distante
- Sauvegarde
- Réplication de données

---

### Identifier l’inventeur avec une “marque automobile”
Deux approches possibles :

1. 🔴 **Approche technique**  
   Analyser en détail chaque brevet pour déterminer lequel repose spécifiquement sur la copie distante / backup.
   - Long
   - Peu utile ici

2. ✅ **Approche pragmatique (la bonne)**  
   - Ouvrir chaque brevet
   - Lire la liste des **inventeurs**
   - Chercher un nom contenant une **marque automobile**

---

### Résultat de l'analyse

On peut voir sur le patent [**Highly reliable online system**](https://patents.google.com/patent/US5596706A/en?oq=US6549992B1&peid=649e94644a398%3A15a%3A1433c707).
- **Suzuki** est bien un marque de voiture.

L’inventeur concerné est donc :
- **Nobuyuki Suzuki**

<figure>
  <img src="/assets/img/hackday2026/patent2.png" alt="Nobuyuki Suzuki">
</figure>

---

## Flag

`HACKDAY{Nobuyuki}`