TP2 : Création d’une API Restful avec Express JS

OBJECTIF(S):
• Création d’une API Rest avec Express JS
• Utilisation des bonnes pratiques pour les API Restful

OUTILS UTILISÉS :
Nodejs, Express js, SQLite3

1/configuration de SQLite3:
-on a créé le fichier database.js pour configurer la connexion à la base de données SQLite3
- puis on  a ajouté une nouvel attribut adresse à la table personnes :
  db.run(`CREATE TABLE IF NOT EXISTS personnes (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    nom TEXT NOT NULL,
    adresse TEXT NOT NULL
  ...
-on a ajouté les données initiales :

const personnes = [
    {nom: 'Bob',adresse:'New York'},
    {nom:'Alice' , adresse:'France'},
    {nom:'Charlie',adresse:'Berlin'}];
    personnes.forEach(personne => {
        db.run(`INSERT INTO personnes (nom, adresse) VALUES (?,?)`, [personne.nom, personne.adresse]);
        });

2/Mise en Place de l'API :

- on a créé le fichier index.js pour définir les routes API
- les routes qu'on a faits sont :
    *GET /personnes : Récupère toutes les personnes.
    *GET /personnes/:id : Récupère une personne par ID.
    *POST /personnes : Crée une nouvelle personne.
    *PUT /personnes/:id : Met à jour une personne.
    *DELETE /personnes/:id : Supprime une personne.
3/Test avec Postman :
les captures de test sont valable dans le dossier

3/Sécurisation de l'API avec OAuth 2.0 et Keycloak (optionnel) :
- on a Installé keycloak-connect avec npm install keycloak-connect.
- on a Configuré Keycloak pour gérer l'authentification et l'autorisation.
- Pour Protéger  les  routes avec Keycloak , on a ajouté  "keycloak.protect()" dans le paramétre de chaque route .
