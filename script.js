

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
      
      let conteneur = document.getElementById("navBar");
      console.log(conteneur);
      
      let div1 = document.getElementById("div1")
      console.log(div1);


      
      

      let logo = document.createElement("img");
      logo.src = "images/logo.jpg";
      console.log(logo);

      let JournalName = document.createElement("h1");
      JournalName.textContent = data.journal.nomJournal;
      
      console.log(JournalName);
      
      let listenav = document.getElementById("listeNav");
      console.log(listenav);

      let liste = document.createElement("li");
      console.log(liste);
      
      let acceuil = document.createElement ("a");
      acceuil.textContent = "Acceuil"
      acceuil.href = "#"
      console.log(acceuil);

      let liste2 = document.createElement("li");
      console.log(liste2);

      let news = document.createElement ("a");
      news.textContent = "News"
      news.href = "#"
      console.log(news);
      
      
      

      
      

























      

       /// FIN DU CODE
     })
     .catch((error) => console.error('Erreur lors de la lecture des données :', error));
 }
 
 getData();

 ///ON écrit les fonctions ici

