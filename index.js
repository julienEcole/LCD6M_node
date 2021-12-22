const express = require('express');

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



