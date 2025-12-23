# Audit et Plan de Sécurisation - Les p'tits Babadins

Ce document résume les actions de sécurité mises en place et les recommandations pour garantir un niveau de protection optimal.

## 1. Actions Réalisées (Sécurité Front-End)

### Protection contre les injections (XSS)
- **Mise en place de la Content Security Policy (CSP)** via balises `<meta>` sur les pages clés (`index.html`, `contact.html`, `pre-inscription.html`, `creches.html`).
- **Configuration :**
  - Scripts autorisés : Self, Google (Maps, Fonts), Gstatic.
  - Styles autorisés : Self, Google Fonts (unsafe-inline nécessaire pour le moment).
  - Iframes autorisées : Google Maps uniquement.
  - Objets (Flash, Java) : Bloqués (`object-src 'none'`).
- **Vérification du code JavaScript (`main.js`)** : Les manipulations du DOM (notamment `innerHTML` et `value`) ont été auditées. L'utilisation de `crecheSelect.value` est sûre car elle ne permet pas l'exécution de scripts arbitraires.

### Protection et Confidentialité
- **Referrer Policy** : Définie sur `strict-origin-when-cross-origin` pour ne pas fuiter d'informations sensibles dans les URLs vers des sites tiers.
- **X-XSS-Protection** : Forcée à `1; mode=block` pour les vieux navigateurs.
- **Robots.txt** : Créé pour guider les bots et préparer le sitemap.

## 2. Risques Identifiés et Recommandations (Sécurité Serveur)

Ces mesures doivent être configurées au niveau de votre hébergeur (Apache, Nginx, Vercel, Netlify, etc.) car elles ne peuvent pas être totalement gérées via le code HTML.

### A. Sécurisation des Connexions (HTTPS)
**Criticité : HAUTE**
- **Action requise :** Forcer le HTTPS sur tout le site.
- **En-tête HSTS (HTTP Strict Transport Security) :**
  - Ajouter l'en-tête : `Strict-Transport-Security: max-age=31536000; includeSubDomains; preload`
  - Cela protège contre les attaques de type "downgrade" (Mitm).

### B. Protections Anti-Clickjacking
**Criticité : MOYENNE**
- **Action requise :** Empêcher votre site d'être affiché dans une iframe sur un autre site (vol de clics).
- **En-tête :** `X-Frame-Options: SAMEORIGIN` (ou via CSP `frame-ancestors 'self'`).

### C. Sécurisation des Formulaires
**Criticité : HAUTE**
- Actuellement, les formulaires sont en "demo" (JavaScript alert).
- **Pour la production :**
  - Utilisez un service de backend sécurisé (ex: Formspree, Netlify Forms) ou votre propre API.
  - **Ne jamais** envoyer d'emails directement depuis le front-end sans passer par un serveur sécurisé.
  - Mettre en place un **Captcha** (ex: Cloudflare Turnstile ou Google reCAPTCHA v3) pour éviter le spam.

### D. Permissions Fichiers
- Assurez-vous que les fichiers systèmes (`.DS_Store`, `.git`, fichiers de config) ne sont pas accessibles publiquement.
- Votre hébergeur doit bloquer l'accès à ces extensions.

## 3. Plan d'Actions SEO & Monitoring

- **Sitemap.xml** : À générer et soumettre à la Google Search Console.
- **Monitoring** :
  - Créer une alerte Google Search Console pour être notifié immédiatement en cas de pénalité ou de détection de malware.
  - Utiliser un outil de monitoring d'uptime (ex: UptimeRobot) pour vérifier la disponibilité du site.

## 4. Maintenance
- Mettre à jour régulièrement les dépendances si le projet évolue vers du Node.js/React.
- Revoir la CSP périodiquement pour la durcir (supprimer `'unsafe-inline'` en refactorisant les attributs `onclick` vers des `addEventListener` dans `main.js`).
