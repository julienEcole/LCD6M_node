const express = require('express');
//---------------------------------------------------------------------------------------------------
//partie mysql connexion, peut être a changer (l'histoire que ce soit pas trop facile de casser le site)
const mysql = require("mysql");

console.log('construction de la route...');

var conn = mysql.createConnection({ //les attributs de cinnexion a changer quand BDD prête
    database: 'LCD6M',
    host: "localhost",
    user: "root",
    password: ""
});

conn.connect(function(err,next) {    //on tente de se connecter, si C le cas alors C bon
    if (err) throw err;
    console.log("Route construite !");
    next();});
//faire ainsi peut provoquer une erreur, je testerai + tard avec une BDD improvisé, si C le cas yauras des manip a faire
//----------------------------------------------------------------------------------------------
const app = express();

app.use((req,res,next) => {
    console.log("requete recue\n");
    next();//a appeler si on veut que cette fonction ne soit pas la dernière exécuté
});

app.use((req, res) => {
    res.status(201);
    next();
});

app.use((req, res) => { //réponse du server avec use est pour tous les types de requete, a adapter
    res.json({message : "voici la repponse de mon serveur"})
    next();
});

app.use((req, res, next) => {   //pour gérer les autorisation, a adapter
    res.setHeader('Access-Control-Allow-Origin', '*');  //permet a n'importe quel source d'emmetre une requete
    res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content, Accept, Content-Type, Authorization'); //ajoute les headers mentionnés aux requêtes envoyées vers notre API
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, PATCH, OPTIONS');    //envoies des requêtes avec les méthodes mentionnées
    next();
  });

app.use((req, res) => {
    console.log("reponse envoye avec succes");
});

module.exports = app;



