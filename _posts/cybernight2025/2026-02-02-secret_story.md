---
title: "Secret Story"
date: 2025-11-22
categories: [Cybernight2025, OSINT (Cybernight2025)]
tags: [username, github, socmint]
description: "Un pseudo, des réseaux liés et un mot de passe laissé en clair dans un commit GitHub."
image:
    path: /assets/img/covers/secret_story.png
---

- **Catégorie** : OSINT  
- **Difficulté** : Easy  
- **Flag** : CYBN{n3Ver_g0nNa_le4k_y0u_uP} 

---

## Énoncé du challenge

>### Secret Story
>
>Coucou mes loulous ! 
>Vous en pensez quoi de ma dernière publication ???? Elle est trooooop belle, la vue mer depuis mon
>"bureau" ! J'ai été très inspiré par ce magnifique paysage d'été, j'ai beaucoup écrit de nouvelles
>réflexions *Holidays #GoodVibes #InnerPeace. Trop dommage que vous ne puissiez pas les lire, mais pour
>l'instant, je suis trop timide pour les révéler au grand public. D'ailleurs, j'ai découvert tout un tas de
>chansons géniales, faudra que je vous les fasse écouter !
>
>Bisouuuuuuus
{: .prompt-info }

<figure>
  <img src="/assets/img/cybernight2025/secret-story.png" alt="Photo de départ">
</figure>

---

## Démarche OSINT

### Identification du pseudo

- Le pseudo visible sur l'image : **`Meyriu63`**

<figure>
  <img src="/assets/img/cybernight2025/secret1.jpg" alt="Pseudo">
</figure>

---

### Recherche multi-plateformes

- Utilisation de [**whatsmyname.me**](https://whatsmyname.me/)
- Recherche du pseudo : `Meyriu63`
- Résultats pertinents :
  - [**Reddit**](https://www.reddit.com/user/Meyriu63/)
  - [**GitHub**](https://github.com/Meyriu63)

<figure>
  <img src="/assets/img/cybernight2025/secret2.webp" alt="Whatsmyname">
</figure>

### Analyse de Reddit

On a un [**post sur Reddit**](https://www.reddit.com/user/Meyriu63/comments/1mphdh4/writingislife_journalintime_memyselfandi/).

<figure>
  <img src="/assets/img/cybernight2025/secret2.jpg" alt="Reddit post lien">
</figure>

Un lien attire l'attention : [**document CryptPad protégé par mot de passe**](https://cryptpad.fr/pad/#/2/pad/view/b-cTiYUuQm7ibkavJShwbuoMpO3lw4xeHyHVrkStMJ0/p/).

<figure>
  <img src="/assets/img/cybernight2025/secret3.jpg" alt="Lien cryptpad">
</figure>

On va regarder si on ne trouve pas le mot de passe quelque part. 

---

### Analyse du GitHub

- Consultation du profil GitHub [**Meyriu63**](https://github.com/Meyriu63)
- Inspection du [**dernier commit**](https://github.com/Meyriu63/Eurovision-ranking/commit/bb89d8ef9476672ff39eb68344eda087d2e8c5b7)
- Message de commit révélateur :
`Mdp: tung_tung_tung_tung_tung_tung_tung_sahur`

<figure>
  <img src="/assets/img/cybernight2025/secret4.jpg" alt="Dernier commit">
</figure>

---

### Accès au document chiffré

- Mot de passe du GitHub utilisé sur CryptPad
- Déchiffrement réussi
- Message caché découvert dans le journal

<figure>
  <img src="/assets/img/cybernight2025/secret5.jpg" alt="Fichier déchiffré">
</figure>

---

## Flag

`CYBN{n3Ver_g0nNa_le4k_y0u_uP}`
