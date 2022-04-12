/* Gestionnaire de Contact */

//Variables, contacts et tableau les contenant

let choix = document.getElementById('selection')
let btnChoix = document.getElementById('valider')

let affichageDesContacts = document.querySelector('#contacts')
//Instanciation des objets Contact
const contact1 = new Contact('Lévisse', 'Carole')
const contact2 = new Contact('Nelsonne', 'Mélodie')
const contact3 = new Contact('Vallot', 'Christophe')
// tableau d'objets Contact
const contacts = [contact1, contact2]
contacts.push(contact3)

// Ajout d'un écouteur sur le bouton
btnChoix.addEventListener('click', executerChoix)

function executerChoix () {
  let valeur = choix.value // Je récupère la valeur de l'option active sur le select
  console.log('Le choix est : ', valeur)

  switch (valeur) {
    case '1':
      affichageDesContacts.innerHTML =
        '<h2>Voici la liste de tous les contacts :</h2>'
      // boucle d'affichage des contacts
      contacts.forEach(function (contact) {
        // Appel de la méthode d'affichage du contact pour chaque objet Contact
        affichageDesContacts.innerHTML += contact.afficheContact();
      })
      affichageDesContacts.style.display = 'block';

      break;
    case '2':
      let nom = prompt('Entrez le nom du nouveau contact :');
      let prenom = prompt('Entrez le prénom du nouveau contact :');
      const nouveauContact = new Contact(nom, prenom);
      nouveauContact.ajouteContact(contacts);
      console.log('Le nouveau contact a été ajouté');
      break;

    case '0':
      if (window.confirm('Êtes-vous sûr de vouloir quitter ?')) {
        window.close();
      }
      break;
  }
}