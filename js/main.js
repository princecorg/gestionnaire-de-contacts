/* Gestionnaire de Contact */

//Variables, contacts et tableau les contenant

let choix = document.getElementById('selection')
let btnChoix = document.getElementById('valider')
let formulaire = document.getElementById('ajoutContact')
let formPrenom = document.getElementById('firstName')
let formNom = document.getElementById('lastName')
let formBtn = document.getElementById('tdButton')
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
        affichageDesContacts.innerHTML += contact.afficheContact()
      })
      masquer(formulaire);
      afficher(affichageDesContacts);
      break
    case '2':
      afficher(formulaire);
      masquer(affichageDesContacts);
      formBtn.addEventListener('click', ajouterContact);
      break

    case '0':
      if (window.confirm('Êtes-vous sûr de vouloir quitter ?')) {
        window.close()
      }
      break
  }
}

function masquer (element) {
  element.style.display = 'none'
}

function afficher (element) {
  element.style.display = 'block'
}

function ajouterContact() {
  let nom = formNom.value;
  let prenom = formPrenom.value;
  const nouveauContact = new Contact(nom, prenom);
  nouveauContact.ajouteContact(contacts);
  alert('le contact '+prenom+' '+nom+' a été ajouté');
}