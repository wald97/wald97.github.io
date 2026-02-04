---
title: "HOLEHE & THE SECRET EMAIL"
date: 2025-12-03
categories: [Osint Industries]
tags: [github, email]
description: "Identifier l’email public du créateur de Holehe et retrouver la date exacte de création du compte."
image:
  path: /assets/img/covers/holehe-secret-email.webp
---

**Catégorie :** OSINT  
**Difficulté :** Medium  
**Flag :** OSINT{14-01-2021}

---

## Énoncé du challenge

>### Holehe & The Secret Email
>
>Description :  
>Vous enquêtez sur l’origine d’un outil OSINT populaire permettant de faire du pivot à partir d’adresses email : **Holehe**.  
>Derrière chaque outil se cache un créateur, et derrière ce créateur, une adresse email.
>
>Votre mission est de retrouver **la toute première apparition publique de l’adresse email du créateur** et d’en déterminer **la date exacte de création**.
>
>Objectifs :
>1. Identifier le créateur de Holehe  
>2. Identifier l’adresse email publique associée à Holehe  
>3. Déterminer la date exacte de création de cette adresse email  
>
>Format du drapeau :  
>Le drapeau doit être basé uniquement sur la date de création de l’email.
>
>`OSINT{DD-MM-YYYY}`
>
>Règles :
>• OSINT uniquement  
>• Aucune prise de contact avec le développeur  
>• Pas d’exploitation ni d’intrusion  
>• Sources autorisées :
>  - Dépôts de code  
>  - Profils publics  
>  - Archives  
>  - Sources OSINT légales
{: .prompt-info }

---

## Démarche OSINT

### 1. Identification du créateur
- L’outil [**Holehe**](https://github.com/megadose/holehe) est hébergé sur GitHub  
- Le créateur identifié est **PALENATH**, également connu sous le pseudonyme [**megadose**](https://github.com/megadose)

<figure>
  <img src="/assets/img/osint.industries/Holehe/createur.jpg" alt="Profil GitHub de megadose">
</figure>

---

### 2. Recherche de l’adresse email
- Sur son profil GitHub, une adresse email publique est indiquée :
  - `megadose@protonmail.com`
- Hypothèse : une adresse plus ancienne peut apparaître dans les commits ou les projets

---

### 3. Analyse des dépôts GitHub
- Recherche des premières contributions du compte [**megadose**](https://github.com/megadose)
- Premier dépôt identifié : [**Fl0wj0b**](https://github.com/megadose/Fl0wj0b)
  - Aucun email trouvé
- Deuxième dépôt analysé : [**toutatis**](https://github.com/megadose/toutatis)
---

### 4. Historique des fichiers
- Le [**29 décembre 2023**](https://github.com/megadose/toutatis/commit/7fca328e6e8e90923b10dd93b38cf11b586eb84c), le fichier `README.md` est mis à jour avec l’email `megadose@protonmail.com`
- Analyse plus approfondie du dépôt :
  - Le fichier `CODE_OF_CONDUCT.md` contient la même adresse
  - Cette mention est présente dès les premières versions du dépôt

<figure>
  <img src="/assets/img/osint.industries/Holehe/email_commit.jpg" alt="Email commit">
</figure>

---

### 5. Datation du compte ProtonMail
L’adresse étant hébergée sur **protonmail.com**, il est possible de récupérer la date via l'api proton `<https://api.protonmail.ch/pks/lookup?op=index&search=megadose@protonmail.com>`.
Cela nous donne 

```bash
info: 1:1
pub : b2e401ef07705693aOccd8d1bOe29d2cac738595 : 22 : : 1610617266 : :
uid : megadose@protonmail.com <megadose@protonmail.com> : 1610617266: :
```
- Timestamp identifié : `1610617266`
- Conversion du timestamp en date lisible via le site [**Epoch converter**](https://www.epochconverter.com/)

<figure>
  <img src="/assets/img/osint.industries/Holehe/time_validation.jpg" alt="Conversion timestamp">
</figure>

---

### 6. Résultat final
- Date obtenue : **14 janvier 2021**

---

## Flag

`OSINT{14-01-2021}`
