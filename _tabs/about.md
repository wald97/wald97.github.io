---
# the default layout is 'page'
icon: fas fa-info-circle
order: 4
---

Bienvenue dans mon **playground OSINT**.

Ici, je démonte des défis, je teste des hypothèses, je pivote, je recoupe…
Parfois ça marche du premier coup, parfois non et c'est justement ça qui est intéressant.

Ce site n'est pas une vitrine, c'est un **carnet de terrain**.

---

## Ce que tu trouveras ici
- Des **write-ups OSINT / STEGANORAPHY / ENQUETE**
- Des challenges CTF analysés étape par étape
- Des raisonnements concrets, pas magiques
- Des méthodes reproductibles

L'objectif n'est pas d'impressionner, mais de **comprendre comment on arrive à une réponse**.

---

## Ma façon de voir l'OSINT
L'OSINT, ce n'est pas juste "chercher sur Google".

C'est :
- relier des indices faibles
- exploiter le contexte
- accepter l'incertitude
- faire des hypothèses raisonnables
- savoir quand une piste est morte
- un escape game sur internet

J'aime bien appeler ça de la **guesstimation contrôlée** :
pas parfaite, pas juridique, mais souvent efficace en CTF.

---

## Pourquoi ce site existe
- Centraliser mes write-ups
- Structurer ma progression
- Partager une approche réaliste de l'OSINT
- Donner envie d'aller creuser plus loin

Si une page t'a fait dire *"ah ouais, j'aurais pas pensé à ça"*, alors le contrat est rempli.

---

<style>
/* ── Rankings & Certifications ───────────────────────── */
.section-title {
  font-size: 1.4rem;
  font-weight: 700;
  margin: 2rem 0 1.2rem;
  padding-bottom: .5rem;
  border-bottom: 2px solid #2f3241;
  display: flex;
  align-items: center;
  gap: .5rem;
}

/* ── Rankings grid ───────────────────────────────────── */
.rankings-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  gap: 1rem;
  margin-bottom: 2.5rem;
}
.rank-card {
  background: #1a1d27;
  border: 1px solid #2f3241;
  border-radius: 10px;
  padding: 1rem 1.1rem;
  display: flex;
  flex-direction: column;
  gap: .5rem;
  transition: transform .2s, border-color .2s;
}
.rank-card:hover {
  transform: translateY(-3px);
  border-color: #4a6fa5;
}
.rank-card-header {
  display: flex;
  align-items: center;
  gap: .55rem;
}
.rank-logo {
  width: 28px;
  height: 28px;
  object-fit: contain;
  border-radius: 4px;
  flex-shrink: 0;
}
.rank-platform {
  font-weight: 600;
  font-size: .92rem;
  color: #d0d6e4;
}
.rank-row {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: .5rem;
}
.rank-value {
  font-size: .82rem;
  color: #9aa0b4;
}
.rank-badge {
  font-size: .68rem;
  font-weight: 700;
  padding: .18em .55em;
  border-radius: 20px;
  letter-spacing: .03em;
  text-transform: uppercase;
  display: inline-flex;
  align-items: center;
  gap: .3em;
}
.badge-gold   { background: #ffd70018; color: #ffd700; border: 1px solid #ffd70050; }
.badge-silver { background: #c0c0c018; color: #b8c0ce; border: 1px solid #c0c0c050; }
.badge-blue   { background: #4a9eff18; color: #6eb4ff; border: 1px solid #4a9eff50; }
.badge-default{ background: #55606618; color: #8a909e; border: 1px solid #55606650; }

.live-dot {
  display: inline-block;
  width: 7px;
  height: 7px;
  border-radius: 50%;
  background: #22c55e;
  box-shadow: 0 0 0 0 #22c55e88;
  animation: pulse-dot 1.6s infinite;
  flex-shrink: 0;
}
@keyframes pulse-dot {
  0%   { box-shadow: 0 0 0 0 #22c55e88; }
  70%  { box-shadow: 0 0 0 6px #22c55e00; }
  100% { box-shadow: 0 0 0 0 #22c55e00; }
}

/* ── Certifications grid ─────────────────────────────── */
.certs-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
  gap: 1.1rem;
  margin-bottom: 2rem;
}
.cert-card {
  background: #1a1d27;
  border: 1px solid #2f3241;
  border-radius: 12px;
  padding: 1.1rem;
  display: flex;
  gap: .9rem;
  align-items: flex-start;
  transition: transform .2s, border-color .2s;
}
.cert-card:hover {
  transform: translateY(-3px);
  border-color: #4a6fa5;
}
.cert-badge-img {
  width: 64px;
  height: 64px;
  object-fit: contain;
  border-radius: 50%;
  flex-shrink: 0;
  background: #12141c;
  border: 1px solid #2f3241;
}
.cert-badge-emoji {
  width: 64px;
  height: 64px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 2rem;
  border-radius: 50%;
  flex-shrink: 0;
  background: #12141c;
  border: 1px solid #2f3241;
}
.cert-info {
  flex: 1;
  min-width: 0;
}
.cert-name {
  font-weight: 700;
  font-size: .88rem;
  color: #d0d6e4;
  margin-bottom: .2rem;
  line-height: 1.3;
}
.cert-issuer {
  font-size: .76rem;
  color: #6eb4ff;
  margin-bottom: .2rem;
}
.cert-meta {
  font-size: .73rem;
  color: #7a8096;
  margin-bottom: .35rem;
  line-height: 1.4;
}
.cert-verify {
  display: inline-flex;
  align-items: center;
  gap: .3em;
  font-size: .7rem;
  font-weight: 600;
  color: #22c55e;
  text-decoration: none;
  border: 1px solid #22c55e55;
  border-radius: 20px;
  padding: .15em .55em;
  transition: background .2s;
}
.cert-verify:hover {
  background: #22c55e22;
  text-decoration: none;
  color: #22c55e;
}

.rank-link {
  display: inline-flex;
  align-items: center;
  gap: .25em;
  font-size: .68rem;
  font-weight: 600;
  color: #6eb4ff;
  text-decoration: none;
  border: 1px solid #4a6fa555;
  border-radius: 20px;
  padding: .15em .5em;
  transition: background .2s;
  margin-top: .1rem;
  align-self: flex-start;
}
.rank-link:hover {
  background: #4a6fa522;
  text-decoration: none;
  color: #6eb4ff;
}

@media (max-width: 600px) {
  .rankings-grid { grid-template-columns: 1fr 1fr; }
  .certs-grid    { grid-template-columns: 1fr; }
}
</style>

## Classements & Certifications

<h3 class="section-title">🏅 Classements CTF &amp; OSINT</h3>

<div class="rankings-grid">

  <div class="rank-card">
    <div class="rank-card-header">
      <img class="rank-logo" src="/assets/badges/Oscar%20zulu.png" alt="Oscar Zulu">
      <span class="rank-platform">Oscar Zulu</span>
    </div>
    <div class="rank-row">
      <span class="rank-value">Top 2</span>
      <span class="rank-badge badge-gold">⭐ Or</span>
    </div>
  </div>

  <div class="rank-card">
    <div class="rank-card-header">
      <span class="rank-platform">iOzint</span>
    </div>
    <div class="rank-row">
      <span class="rank-value">Top 6</span>
      <span class="rank-badge badge-silver">🥈 Argent</span>
    </div>
    <a class="rank-link" href="https://iosint.fr/classement_general.cgi" target="_blank" rel="noopener">🔗 Profil</a>
  </div>

  <div class="rank-card">
    <div class="rank-card-header">
      <span class="rank-platform">OsintForFun</span>
    </div>
    <div class="rank-row">
      <span class="rank-value">Top 3</span>
      <span class="rank-badge badge-gold">⭐ Or</span>
    </div>
    <a class="rank-link" href="https://en.osint4fun.eu/user/a0d7502406a4cca8/" target="_blank" rel="noopener">🔗 Profil</a>
  </div>

  <div class="rank-card">
    <div class="rank-card-header">
      <span class="rank-platform">Osintopia</span>
    </div>
    <div class="rank-row">
      <span class="rank-value">Top 3</span>
      <span class="rank-badge badge-gold">⭐ Or</span>
    </div>
    <a class="rank-link" href="https://challenges.osintopia.fr/teams/49" target="_blank" rel="noopener">🔗 Profil</a>
  </div>

  <div class="rank-card">
    <div class="rank-card-header">
      <span class="rank-platform">OSINT Industries</span>
    </div>
    <div class="rank-row">
      <span class="rank-value">Top 5</span>
      <span class="rank-badge badge-silver">🥈 Argent</span>
    </div>
    <a class="rank-link" href="https://ctf.osint.industries/users/57" target="_blank" rel="noopener">🔗 Profil</a>
  </div>

  <div class="rank-card">
    <div class="rank-card-header">
      <span class="rank-platform">OSINT Newsletter</span>
    </div>
    <div class="rank-row">
      <span class="rank-value">Top 7</span>
      <span class="rank-badge badge-silver">🥈 Argent</span>
    </div>
    <a class="rank-link" href="https://ctf.osintnewsletter.com/users/445" target="_blank" rel="noopener">🔗 Profil</a>
  </div>

  <div class="rank-card">
    <div class="rank-card-header">
      <span class="rank-platform">OSINT UK</span>
    </div>
    <div class="rank-row">
      <span class="rank-value">Top 7</span>
      <span class="rank-badge badge-silver">🥈 Argent</span>
    </div>
    <a class="rank-link" href="https://ctf.osint.uk/users/451" target="_blank" rel="noopener">🔗 Profil</a>
  </div>

  <div class="rank-card">
    <div class="rank-card-header">
      <span class="rank-platform">OsintFR</span>
    </div>
    <div class="rank-row">
      <span class="rank-value">Top 17</span>
      <span class="rank-badge badge-blue">🔵 Bleu</span>
    </div>
    <a class="rank-link" href="https://ctf.challenge-osint.fr/teams#5d284c69-9589-434c-879c-702d9830fae2" target="_blank" rel="noopener">🔗 Profil</a>
  </div>

  <div class="rank-card">
    <div class="rank-card-header">
      <span class="rank-platform">RootMe</span>
    </div>
    <div class="rank-row">
      <span class="rank-value">19017e 🔵</span>
      <span class="rank-badge badge-default"><span class="live-dot"></span> Actif</span>
    </div>
  </div>

  <div class="rank-card">
    <div class="rank-card-header">
      <span class="rank-platform">Hack'Olyte</span>
    </div>
    <div class="rank-row">
      <span class="rank-value">Actif</span>
      <span class="rank-badge badge-default"><span class="live-dot"></span> Actif</span>
    </div>
  </div>

</div>

<h3 class="section-title">🎖️ Certifications &amp; Badges</h3>

<div class="certs-grid">

  <div class="cert-card">
    <img class="cert-badge-img" src="/assets/badges/bellatrix.png" alt="Opération Bellatrix">
    <div class="cert-info">
      <div class="cert-name">Opération Bellatrix</div>
      <div class="cert-issuer">COMCYBER ORION 26</div>
      <div class="cert-meta">13e/1006 · National · Mars 2026</div>
    </div>
  </div>

  <div class="cert-card">
    <img class="cert-badge-img" src="/assets/badges/Mission_verite_Badge_hackolyte.png" alt="Mission Vérité">
    <div class="cert-info">
      <div class="cert-name">Mission Vérité</div>
      <div class="cert-issuer">BPIFrance iO · Hack'Olyte</div>
      <div class="cert-meta">21e/225 · BPIFrance iO · Hack'Olyte</div>
      <a class="cert-verify" href="https://badges.parchment.eu/public/assertions/E0NZC1jRReKSfj7ShZRoGA?identity__email=lirada97@gmail.com" target="_blank" rel="noopener">✓ Vérifier</a>
    </div>
  </div>

  <div class="cert-card">
    <img class="cert-badge-img" src="/assets/badges/advent-osint-2025.jpg" alt="Advent of OSINT 2025">
    <div class="cert-info">
      <div class="cert-name">Advent of OSINT 2025</div>
      <div class="cert-issuer">OSINT4Fun</div>
      <div class="cert-meta">FINISHER · 24/24 challenges · 01/01/2026</div>
      <a class="cert-verify" href="https://www.badgeforge.eu/verify/451cf379f493ad8e77c7a96db12bd35c86ac4dbfcd00c13f23fed20e6800aac1" target="_blank" rel="noopener">✓ Vérifier</a>
    </div>
  </div>

  <div class="cert-card">
    <div class="cert-badge-emoji">🕵️</div>
    <div class="cert-info">
      <div class="cert-name">OSINT Specialist</div>
      <div class="cert-issuer">OSINT Industries</div>
      <div class="cert-meta">250 points</div>
      <a class="cert-verify" href="/assets/badges/4867b058-1b0a-481e-83cf-f3a60063cd57.pdf" target="_blank" rel="noopener">🖼️ Voir</a>
    </div>
  </div>

  <div class="cert-card">
    <div class="cert-badge-emoji">🔎</div>
    <div class="cert-info">
      <div class="cert-name">OSINT Analyst</div>
      <div class="cert-issuer">OSINT Industries</div>
      <div class="cert-meta">100 points</div>
      <a class="cert-verify" href="/assets/badges/78e9a046-b61d-4030-8592-e04c3a39e84e.pdf" target="_blank" rel="noopener">🖼️ Voir</a>
    </div>
  </div>

  <div class="cert-card">
    <div class="cert-badge-emoji">🌱</div>
    <div class="cert-info">
      <div class="cert-name">OSINT Rookie</div>
      <div class="cert-issuer">OSINT Industries</div>
      <div class="cert-meta">50 points</div>
      <a class="cert-verify" href="/assets/badges/830290ce-1c52-4024-aeb6-a0690f177244.pdf" target="_blank" rel="noopener">🖼️ Voir</a>
    </div>
  </div>

  <div class="cert-card">
    <div class="cert-badge-emoji">🇨🇳</div>
    <div class="cert-info">
      <div class="cert-name">Intro Chinese OSINT</div>
      <div class="cert-issuer">Hacktoria</div>
      <div class="cert-meta">Certificate of Competence</div>
      <a class="cert-verify" href="/assets/badges/intro_chinese_osint_Hacktoria.pdf" target="_blank" rel="noopener">🖼️ Voir</a>
    </div>
  </div>

  <div class="cert-card">
    <div class="cert-badge-emoji">⚡</div>
    <div class="cert-info">
      <div class="cert-name">CTF ENEDIS Inter-Écoles</div>
      <div class="cert-issuer">HackTheBox</div>
      <div class="cert-meta">12e/34 équipes · 15/20 challenges · 6600 pts · 28/11/2025</div>
      <a class="cert-verify" href="/assets/badges/Certificate%20ENEDIS%20CTF.pdf" target="_blank" rel="noopener">🖼️ Voir</a>
    </div>
  </div>

  <div class="cert-card">
    <img class="cert-badge-img" src="/assets/badges/hates-challenge.jpg" alt="Hates Challenge Finisher">
    <div class="cert-info">
      <div class="cert-name">Hates Challenge Finisher</div>
      <div class="cert-issuer">OsintForFun</div>
      <a class="cert-verify" href="https://www.badgeforge.eu/verify/b73ba7340be7cdc3185b8d77706b6ee576731de93f7082583ab3d78493ebf51e" target="_blank" rel="noopener">✓ Vérifier</a>
    </div>
  </div>

  <div class="cert-card">
    <img class="cert-badge-img" src="/assets/badges/canelea-2025.jpg" alt="CTF Canéléa 2025 Finisher">
    <div class="cert-info">
      <div class="cert-name">CTF Canéléa 2025 Finisher</div>
      <div class="cert-issuer">OsintForFun</div>
      <a class="cert-verify" href="https://www.badgeforge.eu/verify/3137b4006f9fd5e331696448940db50079eaf695fe8e94aa5325593e130613b9" target="_blank" rel="noopener">✓ Vérifier</a>
    </div>
  </div>

  <div class="cert-card">
    <img class="cert-badge-img" src="/assets/badges/osint-practical-basics.jpg" alt="OSINT Practical Basics">
    <div class="cert-info">
      <div class="cert-name">OSINT Practical Basics</div>
      <div class="cert-issuer">OsintForFun</div>
      <a class="cert-verify" href="https://www.badgeforge.eu/verify/3fd9eb7d02be10b5f9a9ae7b5bbdb6a246aba8553db104135260f58d074010fa" target="_blank" rel="noopener">✓ Vérifier</a>
    </div>
  </div>

  <div class="cert-card">
    <img class="cert-badge-img" src="/assets/badges/gnosint-2025.jpg" alt="GNOSINT 2025 Finisher">
    <div class="cert-info">
      <div class="cert-name">GNOSINT 2025 Finisher</div>
      <div class="cert-issuer">OsintForFun</div>
    </div>
  </div>

  <div class="cert-card">
    <img class="cert-badge-img" src="/assets/badges/adoption_2026_finisher.jpg" alt="ADOPTION 2026-FINISHER">
    <div class="cert-info">
      <div class="cert-name">ADOPTION 2026-FINISHER</div>
      <div class="cert-issuer">OsintForFun</div>
      <a class="cert-verify" href="https://www.badgeforge.eu/verify/e435363e04ba6cb3e6eea61e12c4cddee4f04e6791e25cfe9fb91ed6cda08cba" target="_blank" rel="noopener">✓ Vérifier</a>
    </div>
  </div>

  <div class="cert-card">
    <img class="cert-badge-img" src="/assets/badges/Bases_de_lIA_generative_EFREI.png" alt="EFREI Generative AI Basics">
    <div class="cert-info">
      <div class="cert-name">Generative AI Basics</div>
      <div class="cert-issuer">EFREI Paris</div>
    </div>
  </div>

</div>
