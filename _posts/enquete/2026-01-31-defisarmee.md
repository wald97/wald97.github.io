---
title: "Armée de terre — Enquête TikTok (Louis Warcell)"
date: 2025-09-22
categories: [Enquête]
tags: [tiktok, youtube, steganographie, crypto, what3words, qrcode, enquête]
description: "Une campagne de recrutement de l'armée de Terre, déguisée en faux piratage, mêlant enquête OSINT, stégano et crypto."

image:
  path: /assets/img/covers/armee.png
---

## Intro

Ce défi s’inscrit dans une opération de communication unique de l’Armée de Terre, mêlant enquête OSINT, énigmes et immersion cyber.
J’ai participé à cette traque grandeur nature et je suis arrivé dans le **top 20** parmi plus de 500 participants.
À l’issue du challenge, j’ai reçu une **lettre de félicitations privée**, accompagnée de deux patchs militaires, en reconnaissance de la réussite.
Ce write-up retrace ce qu’il reste de **l’œuvre de Louis Warcell** et la démarche mise en place pour suivre ses traces.

---

## Osintracker

<figure>
  <img src="/assets/img/armee/osinttracker.png" alt="Osintracker">
</figure>

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
      <div class="fw-semibold">louis_warcell osintracker</div>
      <div class="text-muted small">
        archive • 378 Ko
      </div>
    </div>
  </div>

  <!-- Bouton avec marge -->
  <div style="padding-right: 0.5rem;">
    <a href="/assets/files/armee/louis_warcell.osintracker"
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

---

## Contexte

Tout débute par une vidéo intrigante publiée sur TikTok par un compte lié à l’Armée de terre.  
Un homme masqué y apparaît et donne des instructions.

Un premier pivot ressort rapidement : **l’adresse IP 186.91.129.35**.  
Un WHOIS donne un lieu, sans informations réellement exploitables.

En revanche, cette IP est réutilisée comme identifiant TikTok, ce qui déclenche une piste beaucoup plus intéressante.

<figure>
  <img src="/assets/img/armee/piratage.jpg" alt="Piratage départ">
</figure>

---

## Chaîne de comptes — *Follow the white rabbit*

Sur TikTok, plusieurs comptes se suivent et utilisent une symbolique de cartes :

1- **As de pique** : [**`@186.91.129.35`**](https://www.tiktok.com/@186.91.129.35)  
Sur la vidéo, on peut voir un `@ 1869` puis `follow`.

Si on tape **@1869follow**, on obtient un autre compte.

2- **As de cœur** : [**`@1869follow`**](https://www.tiktok.com/@1869follow)  
Même chose : une vidéo sur le compte, on peut voir `1869` puis `thewhite`.

Si on tape **@1869thewhite**, on obtient un autre compte.

3- **As de carreau** : [**`@1869thewhite`**](https://www.tiktok.com/@1869thewhite)  
Même processus : une vidéo avec `1869` et `rabbit`.

On tape **@1869rabbit**, on obtient un dernier compte.

4- **As de trèfles** : [**`@1869rabbit`**](https://www.tiktok.com/@1869rabbit)

Les vidéos, mises bout à bout, permettent d’identifier un nom clé :

> **Louis Warcell**

<figure>
  <img src="/assets/img/armee/louiswarcell.png" alt="Louis Warcell">
</figure>

Un nouveau compte devient alors central dans l’enquête : [**`@louiswarcell`**](https://www.tiktok.com/@louiswarcell).

---

## Pivot Louis Warcell

Le compte contient :
- des tâches codées,
- des indices visuels et textuels,
- des références littéraires,
- des coordonnées géographiques,
- un lien vers un [**Discord**](https://discord.gg/58YWesnWCM).

On rentre dans un ARG, sur le thème d’Alice au pays des merveilles.

Le compte TikTok de Louis Warcell publiera au fur et à mesure des vidéos avec des missions à réaliser et à valider sur le Discord en rentrant le flag.

Voici la vidéo qu'on appercois quand o nrentre la premerie fois sur le tiktok

{%
  include embed/video.html
  src='/assets/video/armee/louis1.mp4'
  autoplay=true
  loop=true
  muted=true
%}

---

## Mission 1 — Trouve l’endroit où je suis

### Première vidéo TikTok

{%
  include embed/video.html
  src='/assets/video/armee/louis2.mp4'
  autoplay=true
  loop=true
  muted=true
%}

### Indices fournis
On va examiner la vidéo en détail. On peut voir plein d’indices et la première task à réaliser.

<figure>
  <img src="/assets/img/armee/task1.jpg" alt="Task 1">
</figure>

Des indices dans le décor de la vidéo.

<figure>
  <img src="/assets/img/armee/indicetask1.jpg" alt="Indices dans le décor">
</figure>

On a donc tout ceci :
- `RES-YE-881`
- `17V`
- annotation `EOF FF ij`
- présence du nombre **1621**
- image récurrente d’une **fontaine**

Ces éléments mènent à une piste littéraire claire : **Jean de La Fontaine**, né en **1621**.

### Démarche OSINT

- La recherche de `RES-YE-881` mène à un recueil de fables sur [**Gallica**](https://gallica.bnf.fr/ark:/12148/btv1b8610825d/f287.item.r=BnF,%20R%C3%A9serve%20des%20livres%20rares,%20RES-YE-881).
- `17V` correspond à la **17ᵉ fable du livre V** : *Le lièvre et la perdrix*.
- Le dernier mot du titre est extrait : **perdrix**.
- Le token central `.tournure.` est indiqué comme **fixe**.
- L’indice météo + coordonnées (entre 23°27’ nord et sud) désignent l’`alizé`, qui se rapproche de **Azile**, le mot de fin de la fable, à côté de **Ff ij**.

Ce qui nous donne : `///perdrix.tournure.alizé`

Le format attendu correspond à un [**what3words**](https://what3words.com/perdrix.tournure.aliz%C3%A9).

### Résolution mission 1

La position What3words nous donne l’emplacement de l’hôtel **l’Ortega** à Saint-Jacques-de-la-Lande.

### Flag 1

`///perdrix.tournure.alizé`

---
## Phase de transition — Vers la mission 2

Les phases de transition étaient des défis à faire pour nous faire patienter jusqu’à la prochaine mission.

### Nouveau pivot identifié

Un nouveau compte apparaît dans les abonnements de **@louiswarcell** :

- [**@1869lechapelier**](https://www.tiktok.com/@1869lechapelier)

Le compte semble jouer un rôle de **joker / attente**, probablement destiné à faire patienter avant la suite du scénario.

### Une vidéo est présente

{%
  include embed/video.html
  src='/assets/video/armee/chapelier1.mp4'
  autoplay=true
  loop=true
  muted=true
%}

### Message chiffré (ROT13)

Un texte est visible en haut d’une vidéo du compte.

- Texte chiffré : ROT13
- Résultat :
  
> **« je vous vois même la nuit »**

### Décryptage du message vidéo

La description de la vidéo contient plusieurs phrases.  
Méthode utilisée :

- Récupération de **la première lettre de chaque phrase**
- Hypothèse : *seules les premières comptent*

| Phrase | Lettre |
|------|--------|
| hélas, seules les premières comptent. | h |
| Regarder les heures passer. | R |
| vite, les minutes s’enchaînent. | v |
| Aujourd’hui devient hier. | A |
| zone après zone, la lumière change. | z |
| garder une trace. | g |
| observer le temps qui file. | o |
| une journée, puis une autre. | u |
| garder la mémoire. | g |
| Week-end ou semaine, tout s’écoule. | W |
| Yeux fermés, on recule. | Y |

**Chaîne obtenue :**

`hRvAzgougWY`

### Pivot vers YouTube

La chaîne de caractères mène à une [**vidéo YouTube**](https://www.youtube.com/watch?v=hRvAzgougWY) car la chaîne de caractères fait 11.

Le titre est :

> **« C'est pour bientôt mais quand »**

Indice clair : **la temporalité est centrale**  
La question n’est pas *quoi*, mais **quand**.

{% include embed/youtube.html id='hRvAzgougWY' %}

### Analyse audio (spectrale)

Une analyse spectrale de l’audio de la vidéo révèle un message caché :

> **« ne pas oublier l'alchimiste d'acier 310 »**

<figure>
  <img src="/assets/img/armee/spectre.png" alt="Résultat spectral">
</figure>

### Hypothèses OSINT

- **Temps / attente / date** = axe principal
- **Alchimiste d’acier 310** :
  - Référence à *Fullmetal Alchemist*
- **Ne pas oublier** :
  - Fait référence à *Don't forget 3 oct*

<figure>
  <img src="/assets/img/armee/fullmetal.jpg" alt="Don't forget 3 oct">
</figure>

Transition confirmée vers la **mission 2**, pour le **3 octobre 2025**.

---

## Mission 2 — Devine ce que je veux ?

Nous avons une nouvelle mission : deviner ce que veut Louis Warcell. On a aussi une nouvelle vidéo qui est bien sortie le 3 octobre 2025 sur son compte.

### Nouvelle vidéo – Task 2

Une nouvelle vidéo apparaît sur le compte TikTok [**@louiswarcell**](https://www.tiktok.com/@louiswarcell/video/7556995549212462339).  
Elle introduit officiellement la **mission 2**.

{%
  include embed/video.html
  src='/assets/video/armee/louis3.mp4'
  autoplay=true
  loop=true
  muted=true
%}

<figure>
  <img src="/assets/img/armee/task2.png" alt="Task 2">
</figure>

Indice principal :
> `Visit the past` > faire un retour dans le passé  
> `check diff` > voir la différence  
> un ordre précis à mettre `4 ; 1 ; 3 ; 2`  
> `r/&username` > ceci nous donnera un username ; le `r/&` renvoie à *Reddit*  
> `resolve A + B + C` > additionner quelque chose

### Retour historique

Point de départ identifié :

On peut voir sur Maps qu’en 2018 l’hôtel s’appelait **La ville en pierre**, puis en 2019 **l’Ortega**.

- Hôtel [**L’Ortega**](https://www.google.com/maps/place/H%C3%B4tel+L'Ortega/@48.0892794,-1.7058932,3a,75y,159.9h,96.5t/data=!3m8!1e1!3m6!1sYiuAFon1Hf1uSNvvmneaxQ!2e0!5s20190601T000000!6shttps:%2F%2Fstreetviewpixels-pa.googleapis.com%2Fv1%2Fthumbnail%3Fcb_client%3Dmaps_sv.tactile%26w%3D900%26h%3D600%26pitch%3D-6.495774271440894%26panoid%3DYiuAFon1Hf1uSNvvmneaxQ%26yaw%3D159.9004504354082!7i16384!8i8192!4m9!3m8!1s0x480ee06d44e08a6d:0xa880728cdd63c90!5m2!4m1!1i2!8m2!3d48.0890343!4d-1.7056753!16s%2Fg%2F1tj5754x?entry=ttu&g_ep=EgoyMDI2MDEyOC4wIKXMDSoASAFQAw%3D%3D)
- Ancien nom : [**La ville en pierre**](https://www.google.com/maps/place/H%C3%B4tel+L'Ortega/@48.0893042,-1.7058574,3a,75y,159.9h,96.5t/data=!3m8!1e1!3m6!1sDtmeAhraOZ9zSRghMnnQpw!2e0!5s20180801T000000!6shttps:%2F%2Fstreetviewpixels-pa.googleapis.com%2Fv1%2Fthumbnail%3Fcb_client%3Dmaps_sv.tactile%26w%3D900%26h%3D600%26pitch%3D-6.495774271440894%26panoid%3DDtmeAhraOZ9zSRghMnnQpw%26yaw%3D159.9004504354082!7i13312!8i6656!4m9!3m8!1s0x480ee06d44e08a6d:0xa880728cdd63c90!5m2!4m1!1i2!8m2!3d48.0890343!4d-1.7056753!16s%2Fg%2F1tj5754x?entry=ttu&g_ep=EgoyMDI2MDEyOC4wIKXMDSoASAFQAw%3D%3D)

Une suite numérique est fournie :  
4 ; 1 ; 3 ; 2

Application sur *La ville en pierre* : `PierreLaEnVille`

On peut faire une recherche de username avec [**WhatsMyName**](https://whatsmyname.me/).

<figure>
  <img src="/assets/img/armee/whatmyname.jpg" alt="Reddit profil">
</figure>

Correspond à un [**nom d’utilisateur Reddit**](https://www.reddit.com/user/PierreLaEnVille/).

### Analyse du Reddit de PierreLaEnVille

On a pas mal de posts avec des photos.

On a une photo sur un [**Google Drive**](https://drive.google.com/file/d/1wdz4AZG-dMvSyMsjQ5PSnjObZl2kGiKp/view).  
Une photo de [**tableau**](https://www.reddit.com/r/ArtCrit/comments/1nuekfx/comment_am%C3%A9liorer_leffet_chromatique_pour/#lightbox) avec pas mal de couleurs.  
Une photo d’un [**poème**](https://www.reddit.com/r/Poesie/comments/1nue064/l%C3%A8re_du_temps_inconnu/#lightbox).

On va analyser chaque image avec de la **stéganographie**.

### Stéganographie (StegSeek)

La photo du Google Drive va nous fournir une grosse info. Pour extraire les données de celle-ci, j’ai dû faire un brute force.

<figure>
  <img src="/assets/img/armee/meme_de_pierre.jpg" alt="Meme de pierre">
</figure>

J’ai pris l’outil [**StegSeek**](https://github.com/RickdeJager/stegseek) avec la wordlist [**rockyou**](https://weakpass.com/wordlists/rockyou.txt) :

On tape la commande suivante :
```bash
stegseek meme_de_pierre.jpg /usr/share/wordlists/rockyou.txt StegSeek 0.6 
[i] Found passphrase: "AZERTY123" 
[i] Original filename: "reddit.txt". 
[i] Extracting to "meme_de_pierre.jpg.out".

cat reddit.txt
jexsm://ancr.zthhyutgpxpuv.gt/gy/qdj/rphhci-gy-lptolxlit-dadpv-vwumckci-hn-rfu-cnxlitt-_1093458?uelphWuovtzp=iurtg&otrlGgq=hcwwh&misqnwAkykmBqzq=iurtg&bzspWuovtzp=qorm&gftxPijf=fkdeefke&oqciFitutqw=jdfyf&uglvfbIppvcso=hamn&vtphfgzgtdGrhzsqn=yyof&kndgoGrhzsqn=yyof&jbvcwebyxtEqyxuir=ownw&sqFubfRlrhf=ibrvtsq&wgqvkzrEux=gcndi&fuvukqyQhhat=hcwwh&xgucnlchly=2e78213c-59ho-4g53-9fy7-57j7b74e5435&jzqhWuovtzp=iurtg&hfpomisggyGrhzsqn=yyof&ibrvtsqWuovtzp=qorm#6/46.355/2.791
```

On a extrait les données de la photo via le mot de passe `AZERTY123`, ce qui nous a donné un fichier `reddit.txt`.

On va sur [**dcode**](https://www.dcode.fr/chiffre-vigenere) pour pouvoir déchiffrer l’adresse. On va sur le `chiffre de Vigenère`.
On rajoute [**CLEDUGBC**](https://www.reddit.com/r/AskFrance/comments/1nus85o/estce_quon_peut_faire_une_galerie_dimages_sur/) qu’on trouve dans le Reddit en dessous du post du Drive.

<figure>
  <img src="/assets/img/armee/cledubgp.png" alt="Décodage adresse">
</figure>

Nous avons une adresse qui pointe vers [**L'offre de formation cyber scolaire et les actions de sensibilisation et de formation 2023-2024**](https://umap.openstreetmap.fr/en/map/loffre-de-formation-cyber-scolaire-et-les-actions-_1093458?scaleControl=false&miniMap=false&scrollWheelZoom=false&zoomControl=null&editMode=disabled&moreControl=false&searchControl=null&tilelayersControl=null&embedControl=null&datalayersControl=null&onLoadPanel=caption&captionBar=false&captionMenus=false&datalayers=2d78213a-59fd-4c53-9ce7-57d7a74c5435&homeControl=false&fullscreenControl=null&captionControl=null#6/46.355000/2.791000).

### Analyse visuelle

- Deux images supplémentaires
- Même format
- Même palette de couleurs
- Logos et chiffres cohérents
- Carte bloquée sur le zoom

Le blocage du zoom est plutôt intrigant. On peut voir que la photo du tableau se rapproche fortement des points sur la map et le poème a exactement la même taille que le tableau.

Si on reprend *Résoudre A + B + C*, on va devoir superposer les images ; les chiffres vont nous donner l’ordre des mots à prendre dans le poème.

<figure>
  <img src="/assets/img/armee/abc.jpg" alt="ABC">
</figure>

### Résolution task 2

J’ai utilisé [**WindowTop**](https://windowtop.info/) pour superposer les images. On combine tout ; je vous montre pour les premiers mots.

<figure>
  <img src="/assets/img/armee/abc3.jpg" alt="Solution">
</figure>

La phrase complète nous donne :

`Mission première localiser les lieux où s'élèvent les élites du champ numérique. Mission seconde détecter, approcher et rallier les futurs talents à ma cause.`

### Flag 2

`Mission première localiser les lieux où s'élèvent les élites du champ numérique. Mission seconde détecter, approcher et rallier les futurs talents à ma cause.`

---
## Phase de transition — Vers la mission 3

Une nouvelle vidéo apparaît sur le compte TikTok [**@1869lechapelier**](https://www.tiktok.com/@1869lechapelier/photo/7557510640152087830). Elle contient **6 images** distinctes, chacune apportant un élément à l’enquête.

<figure>
  <img src="/assets/img/armee/qrcode.jpg" alt="6 images">
</figure>

### Analyse des images

**Image 1** : la scène représente une salle d’attente. Aucun élément exploitable n’y est identifié.

**Image 2** : un labyrinthe est visible, avec au centre un terrier contenant un QR code. En modifiant les contrastes de l’image, un message caché apparaît :

<figure>
  <img src="/assets/img/armee/qrcodenothing.jpg" alt="QR code">
</figure>

`Nothing%20to%20see%20here`

**Image 3** : un QR code est clairement visible. Il renvoie vers le message suivant : **« Je te vois »**

<figure>
  <img src="/assets/img/armee/qrcodejetevois.jpg" alt="QR code">
</figure>

**Image 4** : présence de braille (format 2×3) et de binaire sur les côtés. Le braille se décode en : **XPTDRLOLMDR**  
Le binaire sur les rebords de l'image renvoie vers une [**vidéo YouTube**](https://www.youtube.com/watch?v=dQw4w9WgXcQ).

**Image 5** : un nouveau QR code est présent. Il redirige vers le site suivant, probablement fourni comme aide méthodologique pour la suite de l’enquête :  <https://ctf-journey.github.io/notes/guides/forensics>

<figure>
  <img src="/assets/img/armee/qrcodectf.jpg" alt="QR code">
</figure>

**Image 6** : l’élément le plus important. Cette image mène vers un [**Google Drive**](https://drive.google.com/drive/folders/1yhn-YlxjlwX9zT7cEE3zrSy6RqmXol3G) contenant une série de fichiers.

Le QR code est au milieu de l'image ; il faut aussi changer le contraste.

<figure>
  <img src="/assets/img/armee/qrcodedrive.jpg" alt="QR code">
</figure>

### Analyse du drive

Le drive contient **5 fichiers**.

<figure>
  <img src="/assets/img/armee/drivelouis.jpg" alt="Drive de Louis">
</figure>

Le plus intéressant est [**changelog.log**](https://drive.google.com/drive/folders/1yhn-YlxjlwX9zT7cEE3zrSy6RqmXol3G), qui contient notamment la ligne suivante :

```bash
203.0.113.77-[04/Oct/2025:08:18:44+0200]"GET/contactHTTP/1.1"200410"-""Coffee-Crawler/1.1"3lisEXJgm6DQ6FN-t-cLWqM1HJVwadkr1/sredlof/evird/moc.elgoog.evird//:sptth”
```

Cette ligne correspond à une **URL HTTPS écrite à l’envers**. Une fois inversée, elle donne :

<https://drive.google.com/drive/folders/1rkdawVJH1MqWLc-t-NF6QD6mgJXEsil3>

Dans le drive, la vidéo **Ce lapin est merveilleux.mp4** contient également un QR code caché dans l’œil du lapin. Il est nécessaire d’analyser la vidéo **frame par frame** pour le repérer.

{%
  include embed/video.html
  src='/assets/video/armee/ce_lapin_est_merveilleux.mp4'
  autoplay=true
  loop=true
  muted=true
%}

<figure>
  <img src="/assets/img/armee/qrcodelapin.png" alt="QR code Lapin">
</figure>

Ce QR code mène à une [**vidéo d’environ 1 heure**](https://www.youtube.com/watch?v=2nsoFpfcWqI), montrant un feu de camp. Au cours de la vidéo, des **symboles templiers** apparaissent à l’écran :  
- 28 symboles au total  
- 2 apparitions d’un lapin

{% include embed/youtube.html id='2nsoFpfcWqI&t' %}

Lors de la seconde apparition du lapin, un **QR code est visible dans son oreille**. Celui-ci redirige vers une [**vidéo YouTube sur les Templiers**](https://www.youtube.com/watch?v=tgj3nZWtOfA), confirmant le **mode de chiffrement** utilisé.

<figure>
  <img src="/assets/img/armee/lapinvideoyoutube.png" alt="QR code Lapin YouTube">
</figure>

En visionnant la vidéo en **vitesse ×2**, on obtient les symboles templiers suivants :

<figure>
  <img src="/assets/img/armee/templier.jpg" alt="Symboles templiers">
</figure>

On obtient la chaîne suivante via [**Dcode Chiffre des Templiers**](https://www.dcode.fr/chiffre-templiers) : `QAVBDAQALCEEQLADDCQLADDBQABE`

Cette chaîne est analysée via un outil de reconnaissance de chiffrement. Le résultat suggère un **chiffrement de Collon**. Le mot *colloc* = *collon* est également présent dans un autre fichier du drive :  
[**Last-logged-LW-session.txt**](https://drive.google.com/drive/folders/1yhn-YlxjlwX9zT7cEE3zrSy6RqmXol3G), contenant le texte :

```bash



                                                                                   
                                                                                   
                                                                                   
                                                                                   
                                                                                   
                                      .......                                      
                                  .....-----.....                                  
                                ...--.........--...                                
                              ...--..............-...                              
                             ...-.................-...                             
                            ..--...................--..                            
                            ..-.....................-..                            
                           ..-.......................-..                           
                          ..-.........................-..                          
                          ..-.........................-......                      
                      .----..............................---                       
                      .-...................................-.                      
                       -....................................                       
                       .....................................                       
                       .....................................                       
                       .....................................                       
                       .....................................                       
                       .....................................                       
                       .....................................                       
                       .....................................                       
                       .....................................                       
                       .....................................                       
                       .....................................                       
                       .....................................                       
                       .....................................                       
                       .....................................                       
                       .....................................                       
                       .....................................                       
                       .....................................                       
                       .....................................                       
                     .......................................-.                     
                   .-.  .................................... .-.                   
                  ...............................................                  
                  --...........................................--                  
                                                                                   


 ____  ___ ____    __  __  ___  _   _       _                                       
|  _ \|_ _|  _ \  |  \/  |/ _ \| \ | |     | |                                      
| |_) || || |_) | | |\/| | | | |  \| |  _  | |                                      
|  _ < | ||  __/  | |  | | |_| | |\  | | |_| |                                      
|_| \_\___|_|     |_|  |_|\___/|_| \_|  \___/        _ _                            
| | | |_ __    ___ _   _ _ __   ___ _ __    ___ ___ | | | ___   ___                 
| | | | '_ \  / __| | | | '_ \ / _ \ '__|  / __/ _ \| | |/ _ \ / __|                
| |_| | | | | \__ \ |_| | |_) |  __/ |    | (_| (_) | | | (_) | (__                 
 \___/|_| |_| |___/\__,_| .__/ \___|_|     \___\___/|_|_|\___/ \___|                
   / \  _   _    __| | _|_| ___ ___ _   _ ___    __| |_   _    ___ ___  _   _ _ __  
  / _ \| | | |  / _` |/ _ \/ __/ __| | | / __|  / _` | | | |  / __/ _ \| | | | '_ \ 
 / ___ \ |_| | | (_| |  __/\__ \__ \ |_| \__ \ | (_| | |_| | | (_| (_) | |_| | |_) |
/_/   \_\__,_|  \__,_|\___||___/___/\__,_|___/  \__,_|\__,_|  \___\___/ \__,_| .__/ 
 ___ _   _ _ __  | |_ ___  _ __    _ __ (_) ___  __| | ___  ___| |_ __ _| |  |_|    
/ __| | | | '__| | __/ _ \| '_ \  | '_ \| |/ _ \/ _` |/ _ \/ __| __/ _` | |         
\__ \ |_| | |    | || (_) | | | | | |_) | |  __/ (_| |  __/\__ \ || (_| | |         
|___/\__,_|_|     \__\___/|_| |_| | .__/|_|\___|\__,_|\___||___/\__\__,_|_|         
                                  |_|                                                
```

Le `RIP MON J` indique qu’il faut **retirer la lettre J** de la grille de chiffrement **5×5** utilisée par le chiffrement *collon*.

Après application de cette méthode, la conclusion est claire :  **nous sommes conviés le 7 octobre 2025 pour la mission 3**.

<figure>
  <img src="/assets/img/armee/collon.png" alt="Collon dcode">
</figure>

---
## Mission 3 — Découvre mon plan

Dernière partie de l’enquête.

### Dernière vidéo TikTok

{%
  include embed/video.html
  src='/assets/video/armee/louis4.mp4'
  autoplay=true
  loop=true
  muted=true
%}

### Indices fournis

- **http://github.com** : un compte GitHub à trouver
- **Compile to the end** : on va devoir aller jusqu’au bout pour avoir le flag
- **logo youtube** : sûrement un lien YouTube à avoir
- lettre qui s’affiche dans la vidéo : `etNKxyjEkdM`

### Analyse vidéo Recettes de sushis

On a une suite de chiffres qui fait 11 caractères, on sait que ça va être un lien YouTube : [**Recettes de sushis**](https://www.youtube.com/watch?v=etNKxyjEkdM)

{% include embed/youtube.html id='etNKxyjEkdM' %}

La vidéo comprend des logos en `sushi` comme dans `Matrix`. Si on pivote, on supprime les chiffres en miroir ; on obtient :
`57 61 72 63 65 49 49 49 2F 54 68 65 54 72 75 74 68 40 61 68 65 72`

<figure>
  <img src="/assets/img/armee/matrix.jpg" alt="Matrix sushi decode">
</figure>

On a de l’hexadécimal, go sur [**Dcode ASCII Code**](https://www.dcode.fr/ascii-code).

<figure>
  <img src="/assets/img/armee/dcodehexa.jpg" alt="Décoda hexadécimal">
</figure>

On obtient `WarceIII/TheTruthMaker`, notre fameuse fin pour le compte [**GitHub**](https://github.com/WarceIII/TheTruthMaker).

#### Analyse GitHub de WarceIII

On a deux repositories :
- <https://github.com/WarceIII/TheTruthMaker>
- <https://github.com/WarceIII/sous-surveillance>

#### Analyse repository TheTruthMaker
- Un projet **monprojetHTMLv1_encours_copie_def_v2_final_ok_defdef**
- **Readme.mmd** avec une recette de blanquette

On pouvait remonter le projet pour jouer au mini-jeu ou directement aller voir l’[**index.html**](https://github.com/WarceIII/TheTruthMaker/blob/main/monprojetHTMLv1_encours_copie_def_v2_final_ok_defdef/index.html.).

Si on termine le jeu ou qu’on regarde l’index, on tombe sur : `INCROYABLE. Une fiche sur chacun`

#### Analyse repository sous_surveillance

- Des **photos de plusieurs lapins** qui représentent des joueurs de l’ARG
- Une **overmap.jpg**
- Des **descriptions** pour chacun des joueurs

Il fallait trouver dans chacun des lapins présents sur l’overmap leurs photos et leurs descriptions. À partir de là, on pouvait extraire avec un mot spécifique un fichier texte dans chacune des photos.

Pour cela, on va réutiliser le mot `INCROYABLE` pour la passphrase et [**steghide extract**](https://www.kali.org/tools/steghide/).

J’ai testé chacune des photos des lapins.

On arrive à extraire un fichier texte avec le mot `INCROYABLE`.

On commence par [**Fake_Panda**](https://github.com/WarceIII/sous-surveillance/blob/main/Dossier%20Fake_Panda/Fake_Panda.jpg) avec le mot `INCROYABLE` :
```bash
steghide extract -sf Fake_Panda.jpg  -p INCROYABLE
wrote extracted data to "Fantastique.txt".
cat Fantastique.txt
Fantastique, bientôt des cartes pour tous les lapins
```

[**ElPeche**](https://github.com/WarceIII/sous-surveillance/blob/main/Dossier%20ElPeche/ElPeche.jpg) avec le mot `Fantastique` :
```bash
steghide extract -sf ElPeche.jpg  -p Fantastique
wrote extracted data to "elpecheok.txt".
cat elpecheok.txt
Insupportable, il met son nez partout
```

[**Gregouin**](https://github.com/WarceIII/sous-surveillance/blob/main/Dossier%20Gregouin/Gregouin.jpg) avec le mot `Insupportable` :
```bash
steghide extract -sf Gregouin.jpg  -p Insupportable 
wrote extracted data to "Symbolique.txt".
cat Symbolique.txt
Symbolique, comme les efforts désespérés  
```

[**Abyssego**](https://github.com/WarceIII/sous-surveillance/blob/main/Dossier%20Abyssego/Abyssego.jpg) avec le mot `Symbolique` :
```bash
steghide extract -sf Abyssego.jpg  -p Symbolique 
wrote extracted data to "Renommé.txt".
cat Renommé.txt
Renommé, qui es-tu renommé ?  
```

[**Papike**](https://github.com/WarceIII/sous-surveillance/blob/main/Dossier%20Papike/Papike.jpg) avec le mot `Renomm\xE9` :
```bash
steghide extract -sf Papike.jpg -p "$(printf "Renomm\xE9")"
wrote extracted data to "Tolérance.txt".
cat Tolérance.txt
Tolérance, la reptilo-curiosité n’est pas critiquable
```

[**Walkyrya**](https://github.com/WarceIII/sous-surveillance/blob/main/Dossier%20Walkyrya/Walkyrya.jpg) avec le mot `Tol\xE9rance` :
```bash
steghide extract -sf Walkyrya.jpg -p "$(printf 'Tol\xE9rance')" 
wrote extracted data to "Astrostoppeuse.txt".
cat Astrostoppeuse.txt
Astrostoppeuse, toujours dans l’air du temps
```

[**Stegoreilles**](https://github.com/WarceIII/sous-surveillance/blob/main/Dossier%20Stegoreilles/Stegoreilles.jpg) avec le mot `Astrostoppeuse` :
```bash
steghide extract -sf Stegoreilles.jpg -p Astrostoppeuse
wrote extracted data to "Stego.txt".
cat Stego.txt
Pédagogie, l’art de remplir la tête sans déformer l’esprit
```

[**MereCastor**](https://github.com/WarceIII/sous-surveillance/blob/main/Dossier%20M%C3%A8re%20Castor/MereCastor.jpg) avec le mot `P\xE9dagogie` :
```bash
steghide extract -sf MereCastor.jpg -p "$(printf 'P\xE9dagogie')"
wrote extracted data to "CastorOk.txt".
cat CastorOk.txt
OOF3S4K4IQ5NZ23PYITEMAHOPK59PT872N7WWDE57S76Z50O634UNFMCU0IR1ZP9YQPR2RCT9X35LXA0H4YP2XU4LM9J0KJ0XIPIW5AAHM8Z4KRG1LX34LA88
```

Le chiffrement du dernier texte est du [**Pollux**](https://www.dcode.fr/chiffre-pollux) :
`OOF3S4K4IQ5NZ23PYITEMAHOPK59PT872N7WWDE57S76Z50O634UNFMCU0IR1ZP9YQPR2RCT9X35LXA0H4YP2XU4LM9J0KJ0XIPIW5AAHM8Z4KRG1LX34LA88`

On obtient ceci : `HTTPSBITLYRELAXEZVOUSDETENDEZVOUS`. On le retranscrit en adresse classique : <https://bit.ly/RELAXEZVOUSDETENDEZVOUS> qui renvoie vers la vidéo [**YouTube**](https://www.youtube.com/watch?v=IemeZucd58g).

Nouvelle vidéo YouTube :
{% include embed/youtube.html id='IemeZucd58g' %}

### Analyse vidéo YouTube It’s summer 1955. You're traveling to Alistembourg 🐰

On a des passages d’arbres au fond. C’est du [**morse**](https://www.dcode.fr/code-morse).
```bash
... --- ..- -. -.. -.-. .-.. --- ..- -..
```
<figure>
  <img src="/assets/img/armee/soudcloud.jpg" alt="Morse">
</figure>

On se dit qu’on va devoir trouver un **SoundCloud**.

La vidéo montre aussi une partie musicale spécifique à la **flûte**. On va l’analyser.

J’ai d’abord analysé l’audio pour extraire avec [**Audacity**](https://www.audacityteam.org/) la partie qui nous intéresse.
On peut voir sur la photo qu’elle est différente sous spectrogramme.

<figure>
  <img src="/assets/img/armee/flute.jpg" alt="Spectrogramme Audacity">
</figure>

On va utiliser [AnthemScore](https://www.lunaverus.com/download), ça va nous écrire la partition de musique.

<figure>
  <img src="/assets/img/armee/partition.jpg" alt="Écriture partition">
</figure>

On décode la partition avec [**Dcode Chiffre par Partition Musicale**](https://www.dcode.fr/chiffre-partition-musicale).

<figure>
  <img src="/assets/img/armee/decodemusique.jpg" alt="Dcode partition">
</figure>

Voici le résultat `HTTPSBITLY1869UNSIBEAUVOYAGE`, on retranscrit sous un format d’adresse : <https://bitly/1869UNSIBEAUVOYAGE> qui nous redirige vers un [**Google Drive Carnet de voyage - LW**](https://photos.google.com/share/AF1QipNPGC8MEMjnbyiwNhAoqpdIwgLEEXBmnziBEVDgATcr0W_iu3elfEmrUJMvM3-6Dw?pli=1&key=SHpBUWN5REs5ekY0TTlJVnhUdTRFRVVVZWZDLUN3).

### Analyse du Google Drive Carnet de voyage - LW

On a 10 photos.

Après analyse, seules 3 peuvent nous servir.

<figure>
  <img src="/assets/img/armee/carnet.jpg" alt="Carnet de voyage">
</figure>

J’ai tout déchiffré : il y avait du [**Chiffre templier**](https://www.dcode.fr/chiffre-templiers), de la [**Nyctographie Lewis Carroll**](https://www.dcode.fr/nyctographie-lewis-carroll) et du [**Chiffre par Partition Musicale**](https://www.dcode.fr/chiffre-partition-musicale).

On peut voir aussi la superposition possible du **menhir** avec la **carte**.

<figure>
  <img src="/assets/img/armee/menhir.jpg" alt="Superposition menhir carte">
</figure>

On peut lire la partie sélectionnée `pays des merveilles` ; si on l’utilise avec un lien [**SoundCloud**](https://soundcloud.com/paysdesmerveilles), on arrive bien sur le SoundCloud de *Roswell Carli*.

### Analyse du SoundCloud de Roswell Carli

On peut voir plusieurs musiques.  
Celle qui va nous intéresser est [**H3LLO_W0RLD**](https://soundcloud.com/paysdesmerveilles/h3llo_w0rld?in=paysdesmerveilles/sets/eplouis).

Il y a les paroles ; on peut voir des majuscules sur des mots inhabituels en plein milieu de phrase. Si on récupère chacune d’elles, on peut lire `Proton drive`.

```bash
Sous la neige d’un champ sanglant,
Dix Porte-étendards flamboyants.
Un Roulement gronde sous les sabots,
Un Ouragan de cuirasses au galop.

Les Trompettes hurlent sans répit,
12 000 Ombres chargent les rangs ennemis.
Le Nébuleux colonel Chabert, spectre ardent,
Ne nous laissa point dévorés par ces gens.

La Danse macabre virevolte, la ligne se brise,
Un Requiem s’élève sur l’immense plaine conquise.
L'Intrépide capitaine Hugo entraîne ses frères,
Dix Vortex de feu s’abattent sur la terre.

L’Éclair frappe le sol, le ciel sombre rugit.
Le son des sabres qui s’entrechoquent dans la nuit.
Un souffle court, un cri s’élance au loin,
L’honneur sauf et la victoire enfin.
```

On cherche donc un Proton Drive.  
En bas, la ligne du *P-line* paraît bizarre. Elle ressemble à une adresse Proton Drive car il y a un `#` qui divise deux parties.

```bash
P-line:
ℹ Bat1 State SYZTAZ FE4R 4# Gamedelbar KoyKa Vee x Uma JltJlt
```

On a eu un indice sur le Discord qui dit : `arrêtez de vous mettre Martel en tête, ça vous éclaircira les idées`.

Si on retire les lettres M, A, R, T, E, L, on obtient bien une adresse Proton Drive :
`B1SSYZZF44#GdbKoyKVxUJJ`

On peut aller sur le [**Proton Drive**](https://drive.proton.me/urls/B1SSYZZF44#GdbKoyKVxUJJ).

### Analyse du Proton Drive

- un fichier texte **congratulations.txt**
- un fichier **Dump.dat**

Le fichier **congratulations.txt** :
```bash
BRAVO ! Tu as réussi !

C'est formidable, va prendre un peu de repos.
Bravo, bravo, tu es très très fort.

Avant de partir, on m'a dit de te dire : "Comprendre les pitres saouls, c'est apprendre à décrypter l'univers. Regarde attentivement ce qui se raconte en dessous depuis le début."

Si quelqu'un te le demande, tu diras que tu n'en sais rien.
```

Le fichier **Dump.dat**, on va check le fichier.

```bash
file Dump.dat      
Dump.dat: Zip archive data, at least v5.1 to extract, compression method=AES Encrypted
```

On sait que c’est une archive `ZIP`. Maintenant on peut faire :

```bash
mv Dump.dat Dump.zip
```

On a un fichier archive mais il est protégé par un mot de passe.  
Juste avant, on a vu dans le fichier texte : `Regarde attentivement ce qui se raconte en dessous depuis le début.`

Si on reprend chaque vidéo TikTok, il y avait des chiffres à la place de lettres. Si on récupère chacun des chiffres, on obtient `19315181691514`.

C’est **le mot de passe de l’archive**.

### Analyse du fichier ZIP

On a 23 photos. Elles comportent des mots cachés sur un texte.

On distingue finalement du morse.

<figure>
  <img src="/assets/img/armee/morsefinal.jpg" alt="Documents">
</figure>

On saute de ligne à chaque page et on fait un espace à chaque retour à la ligne. On écrit bien les courts et longs.

<figure>
  <img src="/assets/img/armee/morsefinal2.jpg" alt="Morse final">
</figure>

```bash
--- .--. . .-. .- - .. --- -. / ..-. --- .-.. .-.. --- .-- / - .... . / .-- .... .. - . / .-. .- -... -... .. - / -.. . - . -.-. - . .-. / . - / .. -.. . -. - .. ..-. .. . .-. / .-.. . ... / - .- .-.. . -. - ... / -.. . / -.. . -- .- .. -. / .--. --- ..- .-. / -.-. .-. . . .-. / ..- -. . / ..-. --- .-. -.-. . / --- .--. . .-. .- - .. --- -. -. . .-.. .-.. . / .--. .-. . - . / .- / .-.. / .- -.-. - .. --- -. / ... .. / ...- --- ..- ... / .-.. .. ... . --.. / -.-. . / - . -..- - . / ...- --- ..- ... / .- ...- . --.. / -.. . -.-. --- ..- ...- . .-. - / -- --- -. / .--. .-.. .- -. / ...- --- ..- ... / . -. / ..-. .- .. - . ... / -- . -- . / .--. .- .-. - .. . / ...- --- ..- ... / -- / .- ...- . --.. / .- .. -.. . / .- / .- -.-. -.-. --- -- .--. .-.. .. .-. / -- .- / -- .. ... ... .. --- -. / -- . .-. -.-. .. / .--. ... / .- ...- .- -. - / -.. . / - --- ..- - / .-. .- ... . .-. / .-- .. -.- .. .--. . -.. .. .- / -... .- .-. -... . / ....- ..---
```

On le passe dans [**Dcode Code Morse**](https://www.dcode.fr/code-morse).

<figure>
  <img src="/assets/img/armee/morse.jpg" alt="Flag final">
</figure>

### Flag final
`OPERATION FOLLOW THE WHITE RABBIT DETECTER ET IDENTIFIER LES TALENTS DE DEMAIN POUR CREER UNE FORCE OPERATIONNELLE PRETE A L ACTION SI VOUS LISEZ CE TEXTE VOUS AVEZ DECOUVERT MON PLAN VOUS EN FAITES MEME PARTIE VOUS M AVEZ AIDE A ACCOMPLIR MA MISSION MERCI PS AVANT DE TOUT RASER WIKIPEDIA BARBE 42`


## Vidéo final 

{%
  include embed/video.html
  src='/assets/video/armee/ARG_video-bravo_light.mp4'
  autoplay=true
  loop=true
  muted=true
%}