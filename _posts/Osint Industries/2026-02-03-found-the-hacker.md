---
title: "Found the HACKER"
date: 2025-12-28
categories: [Osint Industries]
tags: [darkweb, socmint, username, archive]
description: "Attribuer l’auteur d’un message de forum cybercriminel de 2018 via corrélation OSINT inter-plateformes."
image:
  path: /assets/img/covers/find-the-hacker.webp
---

**Catégorie :** OSINT  
**Difficulté :** Insane  
**Flag :** OSINT{roneyads1@gmail.com-ii_ney-morocco-saad}

---

## Énoncé du challenge

>### Défi n°12 – J’ai trouvé le pirate informatique
>
>**Contexte :**  
>Lors d’une enquête OSINT, un ancien message publié sur un **forum clandestin bien connu** a été identifié.  
>L’auteur de ce message est soupçonné d’avoir distribué des **identifiants de comptes compromis** via un lien monétisé.
>
>**Informations connues :**
>- URL du sujet :  
>  `https://[REDACTED]/Thread-New-User-pass-40k-gmail-prmuim-netflix-hulu-steam-uplay-spotify`
>- Date de publication : **11 mai 2018 – 15h38**
>- Contenu du message :  
>  `Just Do it : http://[REDACTED]`
>
>Les domaines du forum et du lien monétisé ont été volontairement masqués.
>
>**Objectif :**  
>Identifier le cybercriminel à l’origine du message via des méthodes **OSINT strictement passives**.
>
>Vous devez déterminer :
>1. L’adresse e-mail utilisée par l’individu  
>2. Le compte Twitter associé  
>3. Le pays de résidence (en anglais)  
>4. Le prénom de la personne
>
>**Format attendu :**  
>OSINT{email_nomutilisateur-twitter_pays_en_anglais-prénom}
>
>**Règles :**
>- OSINT passif uniquement  
>- Aucune interaction avec des comptes ou individus  
>- Aucune exploitation active
{: .prompt-info }

---

## Démarche OSINT

### 1. Analyse initiale du message

- Le titre du sujet suit une **convention typique des forums cybercriminels** :
  - annonces de *combolists*
  - volumes élevés (`40K`)
  - services populaires (Gmail, Netflix, Steam, Spotify)
- La structure de l’URL indique clairement un **fil de discussion de forum**.
- L’horodatage précis (**11/05/2018 – 15h38**) permet un **filtrage temporel** fiable.
- Le défi précise une **réutilisation d’identifiants**, suggérant une OPSEC faible.

---

### 2. Identification du forum d’origine

- Forums actifs et publics en 2018 analysés ont été :
  - **Cracked** 
  - **Nulled**  
  - **RaidForums**
- Comparaison des **structures d’URL archivées** via Wayback Machine.
- Résultat :
  - Cracked : navigation instable (protections DDoS)
  - Nulled : structure incompatible
  - **RaidForums : correspondance exacte**

RaidForums est identifié comme le forum source le plus probable.

---

### 3. Recherche dans les archives Wayback

- Utilisation de **Wayback Machine** avec [**https://raidforums.com/**](https://web.archive.org/web/*/https://raidforums.com/*). 
- Recherche ciblée avec mots-clés :
  - `combolist`
- Navigation chronologique par date.

<figure>
  <img src="/assets/img/osint.industries/found the hacker/combolist.png" alt="Filtre raidforum combolist">
</figure>

On cherche une capture avec :
- même horodatage le **11 mai 2018 à 15h38**
- même structure d’URL
- même convention de titre

On finit par trouver la [**page suivante**](https://raidforums.com/Forum-Combolist-Removed-Content?page=3) à la capture du 24 septembre 2020.

**Auteur du sujet :** `RoNey` ou juste au-dessus `iiRoNey`

<figure>
  <img src="/assets/img/osint.industries/found the hacker/recherche.png" alt="Page raidforum trouvé">
</figure>

---

### 4. Corrélation via la fuite RaidForums

- RaidForums a subi une fuite majeure en [**2023**](https://haveibeenpwned.com/Breach/RaidForums) :
  - 400 000 utilisateurs exposés
  - événement documenté par Have I Been Pwned

Corrélation passive :
- **Username :** RoNey  
- **Email associé :** `roneyads1@gmail.com`

J'ai pris l'outil suivant pour voir les leaks : [**OSINTleak**](https://osintleak.com/fr).

<figure>
  <img src="/assets/img/osint.industries/found the hacker/raidfoumleak.png" alt="Leak RaidForums identifié">
</figure>

---

### 5. Pivot OSINT à partir de l’email

- Recherche Google sur l’adresse e-mail.
- Découverte d’une [**chaîne YouTube**](https://www.youtube.com/@iiRoNeyGaMes) associée.
- Indices cohérents :
  - contenu gaming (Minecraft)
  - descriptions majoritairement en arabe

<figure>
  <img src="/assets/img/osint.industries/found the hacker/email.png" alt="Recherche de l'adresse email sur google">
</figure>

Dans la section *À propos* :
- **Prénom déclaré :** Saad
- **Pays indiqué :** Maroc

<figure>
  <img src="/assets/img/osint.industries/found the hacker/youtubechannel.png" alt="Prénom et lieu dans la section À propos">
</figure>

---

### 6. Identification du compte Twitter

- Vérification de l’email via Have I Been Pwned :
  - **14 violations historiques**
  - présence dans la [**fuite Twitter 2022**](https://haveibeenpwned.com/breach/twitter200m)
- Corrélation des données de breach.

**Compte Twitter identifié :** `ii_ney`

<figure>
  <img src="/assets/img/osint.industries/found the hacker/twitter.png" alt="Leak twitter">
</figure>

---

## Flag

`OSINT{roneyads1@gmail.com-ii_ney-morocco-saad}`
