# Mon Portfolio Professionnel

Portfolio en ligne. Un espace épuré, performant et moderne qui présente mes compétences, mes projets récents ainsi que mon parcours académique et professionnel en tant que Développeuse Full Stack.

---

## Technologies Utilisées

Ce projet a été conçu pour être extrêmement rapide, sécurisé et agréable à l'œil grâce aux outils suivants :

- **Framework :** Next.js (Version 16.2+ avec Turbopack pour des builds instantanés)
- **Langage :** TypeScript (Type-safe robuste pour éviter les bugs)
- **Styles :** CSS-in-JS (Styles natifs optimisés) & Tailwind CSS
- **Composants graphiques :** Next.js Image Component (avec gestion des flux externes sécurisés et optimisés en performance)

---

## Fonctionnalités Clés

- **Design Sombre & Moderne (Dark Mode) :** Une interface premium inspirée des meilleurs standards de l'industrie (Vercel, Linear).
- **Composants Génériques Réutilisables :** Implémentation d'un composant d'historique partagé (`TimelineSection`) configuré dynamiquement pour afficher à la fois les **Expériences** et les **Formations** sans duplication de code.
- **Navigation Fluide (Sticky Nav) :** Une barre de navigation fixe avec effet de flou arrière (`backdrop-filter`) qui gère intelligemment les décalages d'ancres de page via `scroll-margin-top`.
- **Bypass d'Optimisation d'Image :** Gestion avancée des sources d'images tierces (LinkedIn, serveurs distants) avec protection contre le rechargement de page.

---

## 🚀 Déploiement Continu (CI/CD)

Ce portfolio est configuré avec un pipeline de déploiement automatisé via **GitHub Actions**. À chaque push sur la branche `main`, le code est automatiquement testé, packagé, puis déployé.

### Architecture du Pipeline

Le workflow GitHub Actions réalise les étapes suivantes :

1. **Build & Package :** Construction de l'application et création d'une image Docker optimisée (utilisant un serveur de production Nginx).
2. **Transfert :** Connexion sécurisée au serveur.
3. **Déploiement :** Arrêt de l'ancien conteneur, récupération de la nouvelle image et redémarrage du service à chaud.
