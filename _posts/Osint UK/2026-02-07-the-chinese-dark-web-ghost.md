---
title: "The Chinese Dark Web Ghost"
date: 2026-02-07
categories: [Osint UK]
tags: [darkweb, telegram, socmint, qq, weibo, telephone]
description: "Chaîne d’investigation OSINT en 13 défis reliant CSDN, dark web, Telegram, QQ, Weibo et métadonnées mobiles."
image:
  path: /assets/img/covers/darkchinese.png
---

**Catégorie :** OSINT  
**Difficulté :** Easy → Medium  
**Flags :**
1. `osintuk{cabyceogpsji73sske5nvo45mdrkbz4m3qd3iommf3zaaa6izg3j2cqd.onion}`
2. `osintuk{174308472}`
3. `osintuk{751247452}`
4. `osintuk{danbaosw_没钱最可怕}`
5. `osintuk{13537259958_13713693580}`
6. `osintuk{huyuntech.com}`
7. `osintuk{Huyun_Technology_Chengdu_Co_Ltd}`
8. `osintuk{355549779}`
9. `osintuk{13634717841}`
10. `osintuk{中国移动_内蒙古 呼和浩特}`
11. `osintuk{猪头肉肉1314}`
12. `osintuk{年轻就要嗨}`
13. `osintuk{iphone_7_plus}`

---

## Introduction

Ce scénario regroupe **13 défis OSINT en chaîne**, résolus dans un **seul flux d’investigation**.  
La progression suit le chemin suivant :

**CSDN → .ONION → TELEGRAM → QQ → PHONE → WEIBO → TARGET**

Chaque étape repose exclusivement sur des **sources ouvertes**, sans interaction avec des individus ni des comptes réels.  
L’approche est strictement **passive, analytique et éthique**.

<figure>
  <img src="/assets/img/osint.uk/the-chinese-dark-web-gosht/allldefis.png" alt="Liste des défis">
</figure>

---

## Challenge 1 – Bypassing the Gate

>Veuillez lire le document Briefing.txt ci-joint avant de commencer les défis.
>
>Un blog de développeurs chinois sur CSDN contient des informations sur un forum actif du dark web. Cependant, l'article complet est protégé par un compte.
>
>Rendez-vous à : https://blog.csdn.net/Key_book/article/details/141686982
>
>Vous devez rechercher le lien .onion. Si vous utilisez la fonction « F » (Ctrl+F) de votre clavier pour trouver « .onion », vous trouverez un résultat, mais il est invisible car l'article complet nécessite un numéro de téléphone commençant par +86 pour accéder au contenu ou créer un compte.
>
>Lorsque vous cliquez sur « Suivre l'auteur pour lire l'article complet » (« 关注博主即可阅读全文 »), une fenêtre de connexion s'affiche et semble impossible à contourner au premier abord.
>
>Cependant, nos informations indiquent qu'il existe une méthode pour contourner cette protection et accéder à l'intégralité de l'article. Trouvez l'adresse .onion du forum du dark web.
>
>Quelle est l'URL .onion complète du forum du dark web ?
>
>Format de réponse :
>
>- Saisissez le domaine complet se terminant par .onion.
>
>- Utilisez le format osintuk{réponse}.
>
>Exemple : osintuk{aud90ud9u12quhsuxid92q0ue902que.onion}
{: .prompt-info }

<div class="my-4 p-4 rounded-4 d-flex align-items-center justify-content-between gap-3 flex-wrap"
     style="
       background-color: rgba(255,255,255,0.04);
       border: 1px solid rgba(255,255,255,0.08);
     ">

  <!-- Bloc gauche : icône + infos -->
  <div class="d-flex align-items-center gap-3">
    <!-- Icône -->
    <div style="font-size: 2.4rem; opacity: 0.9;">
      📦
    </div>

    <!-- Infos fichier -->
    <div>
      <div class="fw-semibold">Briefing.txt</div>
      <div class="text-muted small">
        Texte • 2.12 Ko
      </div>
    </div>
  </div>

  <!-- Bouton avec marge -->
  <div style="padding-right: 0.5rem;">
    <a href="/assets/img/osint.uk/the-chinese-dark-web-gosht/Briefing.txt"
       class="btn btn-outline-secondary px-4"
       style="
         color: inherit;
         border-color: rgba(255,255,255,0.25);
       "
       download>
      Télécharger
    </a>
  </div>
</div>

### Démarche

- Accès à l’article :  <https://blog.csdn.net/Key_book/article/details/141686982>
- Affichage du code source (**Ctrl+U**)
- Recherche du mot-clé `.onion` (**Ctrl+F**)
- Le lien est présent mais invisible dans l’interface utilisateur

<figure>
  <img src="/assets/img/osint.uk/the-chinese-dark-web-gosht/codesource.png" alt="Code source CSDN">
</figure>

### Flag 1

`osintuk{cabyceogpsji73sske5nvo45mdrkbz4m3qd3iommf3zaaa6izg3j2cqd.onion}`

---

## Challenge 2 – Into the Shadows

>### Énoncé
>Les communautés clandestines chinoises utilisent souvent des canaux de communication parallèles sur des plateformes clearnet telles que Telegram afin de faciliter l'accès et les discussions en temps réel.
>
>Trouvez le canal Telegram associé à ce forum.
>
>Quel est le nom d'utilisateur du canal Telegram ?
>
>Format de la réponse :
>- Utilisez le format osintuk{réponse}
>- La réponse est le nom/nom d'utilisateur du groupe.
>- Pas de ponctuation.
>
>Par exemple : osintuk{nomdugroupe}
{: .prompt-info }

### Démarche

- Accès au forum via [**Tor Browser**](https://www.torproject.org/download/)
- Présence visible d’un pseudo et compte Telegram  
- Le canal référencé est **@cabyc**

<figure>
  <img src="/assets/img/osint.uk/the-chinese-dark-web-gosht/darknet.png" alt="Forum dark web">
</figure>

<figure>
  <img src="/assets/img/osint.uk/the-chinese-dark-web-gosht/telegram.png" alt="Compte Telegram">
</figure>

### Flag 2

`osintuk{cabyc}`

---

## Challenge 3 – The Promoter

>### Énoncé
>Au sein de la chaîne Telegram, les utilisateurs font la promotion de divers services illégaux. Une personne fait la publicité de ce qui semble être des plateformes de jeux d'argent illégales, en utilisant un langage marketing professionnel :
>
>- « 最全多种游戏高质量 » (Le plus complet, plusieurs jeux, haute qualité)
>- « 品质保证 » (Qualité garantie)
>- « 完整售后无忧虑 » (Service après-vente complet, pas de souci)
>
>Ils ont inclus les coordonnées des personnes intéressées.
>
>Quel est le numéro QQ fourni par ce promoteur ?
>
>Format de la réponse :
>- Utilisez le format osintuk{réponse}.
>
>Par exemple : osintuk{174308472}
{: .prompt-info }

### Démarche

- Recherche Telegram : `最全多种游戏高质量`
- Message promotionnel avec contact QQ
- Numéro trouvé : **751247452**

<figure>
  <img src="/assets/img/osint.uk/the-chinese-dark-web-gosht/recherchetelegram.png" alt="Recherche dans Telegram 最全多种游戏高质量">
</figure>

<figure>
  <img src="/assets/img/osint.uk/the-chinese-dark-web-gosht/qq.png" alt="QQ identifié">
</figure>

### Flag 3

`osintuk{751247452}`

---

## Challenge 4 – The Username Trail

>### Énoncé
>Le promoteur dispose d'un nom d'utilisateur et d'une biographie Telegram qui peuvent fournir des informations supplémentaires pour une vérification complémentaire.
>
>Quel est le nom d'utilisateur Telegram du promoteur et que dit sa biographie ?
>
>Format de la réponse :
>- Utilisez le format osintuk{réponse}.
>- La biographie reste en chinois.
>- Utilisez un trait de soulignement entre le nom d'utilisateur et la biographie.
>
>Par exemple : osintuk{nom d'utilisateur_exemple de réponse}
{: .prompt-info }

### Démarche

- On clique sur le profil Telegram qu'on a trouvé: **数码宝贝小丑皇**
- Username : `@danbaosw`
- Bio : `没钱最可怕`

<figure>
  <img src="/assets/img/osint.uk/the-chinese-dark-web-gosht/profiltelegram.png" alt="Profil Telegram">
</figure>

### Flag 3

`osintuk{danbaosw_没钱最可怕}`

---

## Challenge 5 – QQ ID to Phone Pivot

>### Énoncé
>Passez de l'identifiant QQ au numéro de téléphone de la cible. Les identifiants QQ sont enregistrés au nom de personnes dont l'identité peut parfois être corrélée à l'aide de bases de données divulguées et d'outils de recherche.
>
>L'infrastructure OSINT chinoise comprend des outils qui corréle les numéros QQ aux numéros de téléphone associés. L'un de ces outils utilise le modèle de point de terminaison suivant :
>
>DOMAINE : commence par « av » — pensez aux formats de données courants   
>POINT DE TERMINAISON : [PLATEFORME]_tel.html   
>CAPACITÉ : CORRÉLATION QQ ↔ MOBILE   
>REMARQUE : prend en charge la recherche de numéros QQ personnels   
>Reconstruisez le domaine source et le point de terminaison. Saisissez le numéro d'identifiant QQ. L'outil peut renvoyer plusieurs numéros de téléphone associés à la cible.
>
>Quels numéros de téléphone sont renvoyés ?
>
>Format de la réponse :
>- Utilisez le format osintuk{réponse}.
>- Saisissez les deux numéros de téléphone renvoyés séparés par un trait de soulignement.
>
>Par exemple : osintuk{1368478158_1354871880}
{: .prompt-info }

### Démarche

- Pour trouver le site des QQ, j'ai dork avec  ` inurl:qq_tel.html`. On tombe que  sur un résultat et il a bien **av** dans l'URL.
- Outil identifié : <https://avsov.com/qq_tel.html>
- Recherche QQ : `751247452`
- Deux numéros retournés `13537259958 et 13713693580`

<figure>
  <img src="/assets/img/osint.uk/the-chinese-dark-web-gosht/numero.png" alt="Téléphones associés">
</figure>

### Flag 5

`osintuk{13537259958_13713693580}`

---

## Challenge 6 – The Corporate Connection

>### Énoncé
>L'un des numéros de téléphone apparaît à des endroits inattendus. Effectuez des recherches open source sur les numéros de téléphone renvoyés.
>
>Un numéro mène à une infrastructure d'entreprise, à savoir le site web d'une société technologique où ce numéro est indiqué comme moyen de contact.
>
>Quel est le nom de domaine du site web de cette société ?
>
>Format de la réponse :
>- Utilisez le format osintuk{réponse}.
>- Entrez uniquement le domaine (sans https://)
>Par exemple : osintuk{domain.tld}
{: .prompt-info }

### Info
Le site n'est plus indexé on ne le trouve plus sur Google avec une simple recherche du dork `"13537259958" OR "13713693580"`.

### Démarche

- Recherche Google + dorks
- Site hors ligne
- Utilisation de [**Wayback Machine**](https://web.archive.org/web/20250803072459/http://www.huyuntech.com/)
- Domaine identifié : **huyuntech.com**

<figure>
  <img src="/assets/img/osint.uk/the-chinese-dark-web-gosht/sitenumero.webp" alt="Site archivé">
</figure>

### Flag 6

`osintuk{huyuntech.com}`

---

## Challenge 7 – Archive Recovery

>### Énoncé
>Le site web archivé contient des coordonnées différentes de celles publiées sur Telegram. Cela est courant lorsque des individus tentent de séparer leurs activités « légitimes » et clandestines, mais laissent des traces qui les relient.
>
>Extrayez le numéro QQ indiqué sur le site web archivé de l'entreprise.
>
>Quel est le numéro QQ indiqué dans les coordonnées de l'entreprise ?
>
>Format de la réponse :
>- Utilisez le format osintuk{réponse}
>
>Par exemple : osintuk{358229681}
{: .prompt-info }

### Démarche

- Snapshot [**Wayback du site**](https://web.archive.org/web/20250803072459/http://www.huyuntech.com/)
- Nom affiché : *Huyun Technology Chengdu Co., Ltd*

<figure>
  <img src="/assets/img/osint.uk/the-chinese-dark-web-gosht/nomentreprise.png" alt="Nom entreprise">
</figure>

### Flag 7

`osintuk{Huyun_Technology_Chengdu_Co_Ltd}`

---

## Challenge 8 – Secondary QQ Extraction

>### Énoncé
>Le site web archivé contient des coordonnées différentes de celles publiées sur Telegram. Cela est courant lorsque des individus tentent de séparer leurs activités « légitimes » et clandestines, mais laissent des traces qui les relient.
>
>Extrayez le numéro QQ indiqué sur le site web archivé de l'entreprise.
>
>Quel est le numéro QQ indiqué dans les coordonnées de l'entreprise ?
>
>Format de la réponse :
>- Utilisez le format osintuk{réponse}
>
>Par exemple : osintuk{358229681}
{: .prompt-info }

### Démarche

- Sur la page contact du [**Wayback**](https://web.archive.org/web/20250803072459/http://www.huyuntech.com/)
- Nouveau QQ identifié : **355549779**

<figure>
  <img src="/assets/img/osint.uk/the-chinese-dark-web-gosht/sitewebentreprise.png" alt="Nouveau QQ">
</figure>

### Flag 8

`osintuk{355549779}`

---

## Challenge 9 – QQ to Phone (Secondary)

>### Énoncé
>À l'aide de la même ressource OSINT que dans l'objectif 5, recherchez le nouveau numéro QQ pour trouver les numéros de téléphone associés.
>
>Quel numéro de téléphone est lié au QQ 355549779 ?
>
>Format de la réponse :
>- Utilisez le format osintuk{réponse}
>
>Par exemple : osintuk{13572971459}
{: .prompt-info }

### Démarche

- Même outil pour les [**QQ**](https://avsov.com/qq_tel.html)
- QQ : `355549779`
- Numéro obtenu : **13634717841**

<figure>
  <img src="/assets/img/osint.uk/the-chinese-dark-web-gosht/numeronewqq.png" alt="Nouveau numéro de téléphone 13634717841">
</figure>

### Flag 9

`osintuk{13634717841}`

---

## Challenge 10 – Phone Region Analysis

>### Énoncé
>Les numéros de téléphone mobile chinois contiennent des informations régionales dans leur préfixe. Les 7 premiers chiffres indiquent l'opérateur et la province/ville d'enregistrement.
>
>Analysez le numéro de téléphone 13634717841.
>
>À quel opérateur et à quelle région ce numéro est-il enregistré ?
>
>Format de la réponse :
>- Utilisez le format osintuk{réponse}
>- Toutes les réponses doivent être en chinois
>- Opérateur, suivi d'un trait de soulignement, suivi de la région
>
>Par exemple : osintuk{中国联通_广东 深圳}
{: .prompt-info }

### Démarche
On peux voir déjà la constitution d'un [**numéro de téléphone chinois sur wikipédia**](https://fr.wikipedia.org/wiki/Plan_de_num%C3%A9rotation_t%C3%A9l%C3%A9phonique_en_Chine)
- Préfixe `136` → il est donc chez l'opérateur `China Mobile` qui s'ecrit en chinois `中国移动`
- Pour la recherche régionale, je suis passer sur un [**site**](http://so.qqdna.com/nub/13634717841.html) qui indique tout les préfixes avec la zone géographique. On obtient `Hohhot, Mongolie-Intérieure` en chinois`内蒙古 呼和浩特`

<figure>
  <img src="/assets/img/osint.uk/the-chinese-dark-web-gosht/lieunum.png" alt="Lieu du numéro">
</figure>

### Flag 10

`osintuk{中国移动_内蒙古 呼和浩特}`

---

## Challenge 11 – QQ to Weibo Pivot

>### Énoncé
>Passez maintenant du numéro QQ secondaire à l'identité Weibo. Utilisez des ressources OSINT similaires :
>
>POINT FINAL : tel_[PLATFORM].html    
>CAPACITÉ : CORRÉLATION MOBILE ↔ WEIBO    
>Le modèle de point final est tel_[PLATFORM].html, où platform est l'abréviation en deux lettres de la plateforme de réseau social chinoise.
>
>Certains outils permettent également une corrélation directe entre QQ et Weibo.
>
>Quel est le nom d'utilisateur Weibo associé au numéro QQ 355549779 ?
>
>Format de la réponse :
>- Utilisez le format osintuk{réponse}
>- Ne traduisez pas le nom d'utilisateur
>
>Par exemple : osintuk{蓝天白云5678}
{: .prompt-info }

### Démarche

J'ai pu voir qu'on pouvait faire d'autres manipulations sur le site <https://avsov.com/>, dont une où on peut rechercher un Weibo à l'aide d'un numéro de téléphone, on va donc l'utiliser.
J'ai utilisé l'option de recherche d'**UID Weibo** via un numéro de téléphone.

<figure>
  <img src="/assets/img/osint.uk/the-chinese-dark-web-gosht/avsocwiebo.png" alt="Weibo option sur avsov">
</figure>

On rentre le numéro de téléphone `13634717841`. On obtient l'UID suivant `5599047671`.

<figure>
  <img src="/assets/img/osint.uk/the-chinese-dark-web-gosht/weiboid.png" alt="UID 5599047671">
</figure>

J'ai donc pris l'adresse **weibo** et rajouté l'**UID** à la fin.

- Profil : https://weibo.com/5599047671
- Username : **猪头肉肉1314**

<figure>
  <img src="/assets/img/osint.uk/the-chinese-dark-web-gosht/utilisateur.png" alt="Compte Weibo">
</figure>

### Flag 11

`osintuk{猪头肉肉1314}`

---

## Challenge 12 – Profile Analysis

>### Énoncé
>Analysez le profil Weibo et extrayez les informations clés pour la vérification finale.
>
>Quelle est leur biographie/slogan Weibo ?
>
>Format de la réponse :
>- Utilisez osintuk{réponse}
>- Répondez en chinois
>Par exemple : osintuk{快乐每一天}
{: .prompt-info }

### Démarche

Toujours sur le [**Weibo**](https://weibo.com/5599047671), on regarde le slogan : `年轻就要嗨` (La jeunesse, c'est avant tout s'amuser !)

- Slogan affiché sur le profil
- Texte : **年轻就要嗨**

<figure>
  <img src="/assets/img/osint.uk/the-chinese-dark-web-gosht/slogan.png" alt="Slongan sur le compte Weibo 年轻就要嗨 ">
</figure>

### Flag 12

`osintuk{年轻就要嗨}`

---

## Challenge 13 – Device Metadata

>### Énoncé
>Quel modèle de téléphone ont-ils utilisé récemment sur ce réseau social ?
>
>Format de la réponse :
>- Utilisez le format osintuk{réponse}
>- Modèle de téléphone spécifique requis
>- Remplacez les espaces par des traits de soulignement
>
>Par exemple : osintuk{nokia_3310}
>
>REMARQUE : une fois que vous aurez terminé ce dernier défi, vous pourrez demander un certificat. Rendez-vous dans l'onglet « Solution » une fois cette tâche terminée pour obtenir des instructions sur la manière de le demander.
{: .prompt-info }

### Démarche
On peut voir des photo sur son profil

<figure>
  <img src="/assets/img/osint.uk/the-chinese-dark-web-gosht/photodeprofil.png" alt="Photo sur le profil weibo">
</figure>

- Téléchargement d’une image Weibo sur le profil
- Analyse EXIF via [**Exiftool Online**](https://exif.tools/)
- Champ `Camera Model Name` : on peut lire `iPhone 7 Plus`

<figure>
  <img src="/assets/img/osint.uk/the-chinese-dark-web-gosht/telechargerphoto.png" alt="Téléchargement de la photo">
</figure>

<figure>
  <img src="/assets/img/osint.uk/the-chinese-dark-web-gosht/exiftool.png" alt="EXIF iPhone">
</figure>

### Flag final 13

`osintuk{iphone_7_plus}`