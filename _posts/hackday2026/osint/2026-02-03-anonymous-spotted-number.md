---
title: "Anonymous Spotted Number"
date: 2026-01-25
categories: [HackDay2026, OSINT (HackDay2026)]
tags: [shodan, ASN]
description: "Trouver le produit le plus courant associé à un ASN via Shodan."
image:
  path: /assets/img/covers/asn-15238.png
---

**Catégorie :** OSINT  
**Difficulté :** Easy  
**Flag :** HACKDAY{ntpd}

---

## Énoncé du challenge

<figure>
  <img src="/assets/img/hackday2026/Anonymous spotted number.jpg" alt="Photo énoncé">
</figure>


>### Anonymous Spotted Number 
>
> Lors de l'examen des journaux, un analyste de votre équipe a identifié un identifiant : **ASN 15238**.  
> Les résultats associés à cet identifiant indiquent qu'un produit est plus répandu que les autres.  
> Quel est le nom du produit principal utilisé ?  
>
> Format du drapeau : `HACKDAY{nomduproduit}`
{: .prompt-info }

---

## Démarche OSINT

### Comprendre l’identifiant (ASN)
- Un [**ASN**](https://en.wikipedia.org/wiki/Autonomous_system_(Internet)) (Autonomous System Number) représente un réseau / opérateur.
- Ici on travaille sur **ANS 15238**.

**Vérif rapide de l’ASN (optionnel)**
- IPinfo / BGP.tools confirment l’ASN et donnent du contexte réseau.

---

### Recherche dans Shodan avec le filtre ASN
Sur [**Shodan**](https://www.shodan.io/), on peut filtrer par ASN avec `asn:ASxxxx`.  
- La recherche avancée liste explicitement le filtre **asn**.

**Requête utilisée**
- `asn:AS15238`

<figure>
  <img src="/assets/img/hackday2026/anonymous.png" alt="Shodan ASN filtre">
</figure>

---

### Identifier le “Top Product”
- Une fois la recherche lancée, Shodan affiche des facettes de résultats (dont **Top Products**).
- On regarde le classement : le produit le plus fréquent ressort en tête.

**Résultat**
- Le produit le plus courant pour `asn:AS15238` est : **ntpd**

---

## Flag

`HACKDAY{ntpd}`