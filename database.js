const sqlite3 = require('sqlite3').verbose();

// Connexion à la base de données SQLite
const db = new sqlite3.Database('./maBaseDeDonnees.sqlite', sqlite3.OPEN_READWRITE |
sqlite3.OPEN_CREATE, (err) => {
if (err) {
console.error(err.message);
} else {
console.log('Connecté à la base de données SQLite.');
db.run(`CREATE TABLE IF NOT EXISTS personnes (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    nom TEXT NOT NULL,
    adresse TEXT NOT NULL
)`, (err) => {
if (err) {
    console.error(err.message);
} else {
// Insertion de données initiales
const personnes = [
    {nom: 'Bob',adresse:'New York'},
    {nom:'Alice' , adresse:'France'},
    {nom:'Charlie',adresse:'Berlin'}];
    personnes.forEach(personne => {
        db.run(`INSERT INTO personnes (nom, adresse) VALUES (?,?)`, [personne.nom, personne.adresse]);
        });
        

}
});
}
});

module.exports = db;
