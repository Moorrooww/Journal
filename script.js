

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


      });








     





      let boutton = document.getElementsByClassName("themes");
      boutton.textContent = data.journal.themes[0].nom;
      console.log(boutton);
      


      
      

























      

       /// FIN DU CODE
     })
     .catch((error) => console.error('Erreur lors de la lecture des données :', error));
 }
 
 getData();

 ///ON écrit les fonctions ici






//   <header></header>
///  <div id="divslog"></div>
//// <div id="div2"></div>