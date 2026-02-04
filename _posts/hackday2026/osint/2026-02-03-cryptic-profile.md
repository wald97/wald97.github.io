---
title: "Cryptic Profile"
date: 2026-01-25
categories: [HackDay2026, OSINT (HackDay2026)]
tags: [crypto, ethereum, facebook]
description: "Relier un profil de forum à une activité crypto pour identifier une transaction Ethereum et un domaine ENS."
image:
  path: /assets/img/covers/cryptic-profile.png
---

**Catégorie :** OSINT  
**Difficulté :** Insane  
**Flag :** HACKDAY{14034531_2031-12-05}

---

## Énoncé du challenge

<figure>
  <img src="/assets/img/hackday2026/Cryptic Profile.jpg" alt="Recherche google pseudo">
</figure>

>### Cryptic Profile
>
>En parcourant un ancien forum d’informatique, dont l’activité décline progressivement, je suis tombé sur un post publié par un utilisateur nommé **Huf48500**.
>
>À première vue, il semble s’agir d’un jeune passionné d’informatique.  
>Cependant, certains éléments laissent penser qu’il cache davantage de choses et qu’il pourrait être lié au monde des **cryptomonnaies**.
>
>Votre objectif :
>- Identifier le **numéro de bloc** de la plus grosse transaction sortante de Huf48500
>- Trouver la **date d’expiration du domaine** associé à son adresse
>
>**Format :** `HACKDAY{blocknumber_YYYY-MM-DD}`
{: .prompt-info }

---

## Démarche OSINT

### Recherche du pseudo
- Recherche du pseudo **Huf48500**
- Présence trouvée sur un forum historique de l’informatique : [**StackOverflow**](https://stackoverflow.com/questions/79874952/how-to-add-a-smooth-color-fade-animation-to-text).
Le profil contient un post technique avec du code.

<figure>
  <img src="/assets/img/hackday2026/Huf48500.png" alt="Recherche google pseudo">
</figure>

---

### Analyse du contenu du post
- Inspection du code du post
- Présence d’un lien vers un [**GitHub**](https://github.com/HufHuf48?tab=projects)

<figure>
  <img src="/assets/img/hackday2026/Huf48500liengithub.png" alt="Lien github sur Stack Overflow ">
</figure>

---

### Pivot via GitHub
Depuis GitHub [**HufHuf48**](https://github.com/HufHuf48?tab=projects), lien vers un profil Facebook [**Cosnau Henri**](https://www.facebook.com/jean.passepartout.5/).

<figure>
  <img src="/assets/img/hackday2026/Hufhuf48.png" alt="Lien github sur Stack Overflow ">
</figure>

### Pivot via Facebook
- Le profil Facebook contient [**un seul post**](https://www.facebook.com/photo/?fbid=25299810516387076&set=a.25295707030130758)
- Clic droit → *Inspecter l’élément*
- Analyse du texte alternatif (alt)

On découvre une **adresse Ethereum** explicitement mentionnée : `0x12154e064d46FDd888C768A0f919c8d177714C39 ETH thanks for the donation :)`

<figure>
  <img src="/assets/img/hackday2026/hufhuffacebook.png" alt="Alt photo donate facebook Cosnau Henri">
</figure>

---

### Analyse blockchain (Ethereum)
- Passage de l’adresse sur [**Etherscan**](https://etherscan.io/)
- Filtre sur les **transactions sortantes**
- Une seule transaction significative (> 1 ETH)

<figure>
  <img src="/assets/img/hackday2026/filtretransaction.png" alt="Filtrage transactions sortantes">
</figure>

Détails :
- Montant : **2.5 ETH**
- Numéro de bloc : **14034531**

<figure>
  <img src="/assets/img/hackday2026/transaction.png" alt="Transaction de 2.5 eth">
</figure>

---

### Recherche du domaine associé
- Dork de l’adresse Ethereum `"0x12154e064d46FDd888C768A0f919c8d177714C39"`
- Résultat sur [**NFTGo**](https://goalert.nftgo.io/account/ETH/0x12154e064d46fdd888c768a0f919c8d177714c39/NFT)
- Pseudonyme associé : **hacker-man.eth**

 Il s’agit d’un **domaine ENS**.
 Ethereum Name Service (ENS) est un service de nom de domaine décentralisé basé sur la blockchain Ethereum. Il permet aux utilisateurs de transformer leurs adresses Ethereum complexes en noms de domaine lisibles et faciles à retenir, similaires aux adresses de sites web.

---

### Vérification ENS
- Recherche sur <https://app.ens.domains>
- Consultation du domaine [**hacker-man.eth**](https://app.ens.domains/hacker-man.eth)

 Date d’expiration du domaine :
- **2031-12-05**

<figure>
  <img src="/assets/img/hackday2026/expiration domaine.png" alt="Domain ENS hacker-man">
</figure>

---

## Flag

`HACKDAY{14034531_2031-12-05}`
