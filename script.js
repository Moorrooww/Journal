

function getData() {
   fetch('data.json')
     .then((response) => {
       if (!response.ok) {
         throw new Error('Network response was not ok');
       }
       return response.json();
     })
     .then((data) => {
       // Traitez les données comme vous le souhaitez
       console.log('Données récupérées du fichier JSON :', data);
       /// ON ECRIT LE CODE ICI ! 
      





      let logo = document.createElement("img");
      logo.src = "images/logo.jpg";
      console.log(logo);

      let JournalName = document.createElement("h1");
      JournalName.textContent = data.journal.nomJournal;
      console.log(JournalName);

      let conteneur = document.querySelector("nav");
      console.log(conteneur);
      
      let div1 = document.getElementById("div1")
      
      let listenav = document.getElementById("listeNav");
      

      let liste = document.createElement("li");
      
      
      let acceuil = document.createElement ("a");
      acceuil.textContent = "Acceuil"
      acceuil.href = "#"
      

      let liste2 = document.createElement("li");
      

      let news = document.createElement ("a");
      news.textContent = "News"
      news.href = "#"
      
      
      let liste3 = document.createElement ("li");
      

      let special = document.createElement ("a");
      special.href = "#"
      special.textContent = "Lebron?"
      

      liste.appendChild(acceuil);

      liste2.appendChild(news);
      
      liste3.appendChild(special);

      listenav.append(liste,liste2,liste3);
      
      div1.appendChild(listenav);

      conteneur.append(logo,JournalName,div1);
      


      let themes = data.journal.themes
      console.log(themes);
      
      themes.forEach(theme => {
        
        // Pour chaque theme
        // 1. créer un bouton
        let bouton = document.createElement("button");
        bouton.className = "themes";

        // 2. textcontent du bouton => le nom du theme
        bouton.textContent = theme.nom;

        // dire que les boutons sont les enfants d'un élément plus grand => id="button-container"
        let buttoncontain = document.getElementById("button-container");

          buttoncontain.appendChild(bouton);
          console.log(buttoncontain);

      //////////////////////////////////AJOUTER LE IF HOVER




      });

      


///////////////////////

      let articleConteneur = document.getElementById("cartes-conteneur");
      console.log(articleConteneur);

      let phraseAccro = document.createElement("h1");
      phraseAccro.textContent = data.journal.phraseAccroche
      console.log(phraseAccro);

      let conteurPr = document.createElement("div");
      conteurPr.id = "conteur-pr";
      console.log(conteurPr);

      let articlePrImage = document.createElement("img");
      articlePrImage.src = data.journal.articlePrincipal.image
      console.log(articlePrImage);
      
      let articlePrTheme = document.createElement("p");
      articlePrTheme.textContent = data.journal.articlePrincipal.theme
      console.log(articlePrTheme);
      
      let articlePrTitre = document.createElement("h2");
      articlePrTitre.textContent = data.journal.articlePrincipal.titre
      console.log(articlePrTitre);
      
      let articlePrDesc = document.createElement("p");
      articlePrDesc.textContent = data.journal.articlePrincipal.description
      console.log(articlePrDesc);
      
      let articlePrDate = document.createElement("h3");
      articlePrDate.textContent = data.journal.articlePrincipal.date
      console.log(articlePrDate);
      

      conteurPr.append(articlePrTheme,articlePrTitre,articlePrDesc,articlePrDate);

      articleConteneur.append(articlePrImage,conteurPr)

      let test = document.getElementById("test");

      test.append(phraseAccro,articleConteneur);

////////////////

      let conteneurPart = document.getElementById("conteneur");
      console.log(conteneurPart);


      

      let divPart = document.getElementById("cartes-conteneurs");
      console.log(divPart);


  

      let conteneurP1 = document.createElement("div")
      conteneurP1.className = "contentarticle";
      console.log(conteneurP1);


      function afficherArticles(article, divPart, conteneurPart) {
          let conteneurP1 = document.createElement("div");
          conteneurP1.className = "contentarticle";
          console.log(conteneurP1);

          let articlePtext = document.createElement("div");
          articlePtext.className = "contentText";

          let articlePimg = document.createElement("img");
          articlePimg.src = article.image;
          console.log(articlePimg);

          let articlePtheme = document.createElement("p");
          articlePtheme.textContent = article.theme;
          console.log(articlePtheme);

          let articlePtitre = document.createElement("h2");
          articlePtitre.textContent = article.titre;
          console.log(articlePtitre);

          let articlePdate = document.createElement("h3");
          articlePdate.textContent = article.date;
          console.log(articlePdate);

          articlePtext.append(articlePtheme, articlePtitre,articlePdate);

          conteneurP1.append(articlePimg,articlePtext);

          divPart.appendChild(conteneurP1);
       

        conteneurPart.appendChild(divPart);
        console.log(conteneurPart);
      }

       data.journal.articles.forEach(article => {
        afficherArticles(article, divPart, conteneurPart)
       });

//////////////////////

       let containAuteur = document.getElementById("auteurcontain");
       console.log(containAuteur);

       let divAuteur = document.createElement("div")
       divAuteur.className = "Auteurdiv";
       console.log(divAuteur);




////////////////
      function afficherAuteurs(auteur,containAuteur) {

      let divParAuteur = document.createElement("div");
      divParAuteur.className = "DivParAuteur";

      let divInfoAuteur = document.createElement("div");
      divInfoAuteur.className = "InfoAuteur";

      let auteurPp = document.createElement("img")
      auteurPp.src = auteur.image;
      console.log(auteurPp);
      

      let prenom = document.createElement("h4");
      prenom.textContent = auteur.prenom;

      let presentation = document.createElement("p")
      presentation.textContent = auteur.presentation;

      let experience = document.createElement("h5")
      experience.textContent = auteur.typeExperience;
      console.log(experience);
      


       divInfoAuteur.append(prenom,experience,presentation);

       divParAuteur.append(auteurPp,divInfoAuteur)

       containAuteur.appendChild(divParAuteur)
       console.log(containAuteur);
       }

       data.journal.auteurs.forEach(auteur => {
        afficherAuteurs(auteur,containAuteur)
       });





       























      
      

























      

       /// FIN DU CODE
 })
     .catch((error) => console.error('Erreur lors de la lecture des données :', error));
 }
 
 getData();

 ///ON écrit les fonctions ici




