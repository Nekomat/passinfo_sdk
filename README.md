
# ![PASSEINFO](https://api.passinfo.net/content/logo.png)

# PasseInfo API - SDK Node.js

## 📌 Description
Le **SDK Node.js** pour l'API **PASSEINFO** permet d'interagir facilement avec l'API PASSEINFO en utilisant `axios`.  
Il facilite l'envoi de messages, la gestion des contacts, des groupes et bien plus encore.

## 🚀 Installation

```bash
npm install passeinfo-api
```

## 📖 Utilisation

### 1️⃣ Importation et Initialisation
```javascript
const PasseInfoAPI = require('passeinfo-api');

// Initialisation avec vos clés API
const api = new PasseInfoAPI('YOUR_API_KEY', 'YOUR_CLIENT_ID');
```

### 2️⃣ Envoi de Messages en Masse
```javascript
async function sendBulkMessage() {
    try {
        const response = await api.send_bulk_contacts_messages({
            message: "Bonjour, ceci est un test !",
            senderName: "MonEntreprise",
            contacts: ["612....", "623....."]
        });
        console.log("Réponse API:", response);
    } catch (error) {
        console.error("Erreur API:", error);  
    }
}

sendBulkMessage();
```

### 3️⃣ Envoi de Messages 
```javascript
async function sendSingleMessage(){
    try {
      const response = await api.single_message({
        message:"Bonjour, ceci est un test !",
        senderName:"MonEntreprise",
        contact:"612345678"
      })
      console.log("Réponse API" , response)
    } catch (error){
      console.error("Erreur API:", error);
    }
}
sendSingleMessage()
```

### 4️⃣ Récupération de la Liste des Contacts
```javascript
async function getContacts() {
    try {
        const contacts = await api.contact_all_my_contacts();
        console.log("Contacts :", contacts);
    } catch (error) {
        console.error("Erreur API :", error);
    }
}

getContacts();
```

### 5️⃣ Création d'un Groupe de Contacts
```javascript
async function createGroup() {
    try {
        const response = await api.groupe_create({
            name: "Clients VIP"
        });
        console.log("Groupe créé :", response);
    } catch (error) {
        console.error("Erreur API :", error);
    }
}

createGroup();
```

###  Récupération du Solde de l'Utilisateur
```javascript
async function getBalance() {
    try {
        const balance = await api.user_get_solde();
        console.log("Solde :", balance);
    } catch (error) {
        console.error("Erreur API :", error);
    }
}

getBalance();
```

## 📜 Méthodes Disponibles

| 📌 Méthode | 🛠️ Description |
|-----------|--------------|
| `send_bulk_contacts_messages(data)` | Envoie un message en masse |
| `get_all_my_contacts()` | Récupère tous les contacts |
| `add_contact(data)` | Ajoute un nouveau contact |
| `single_message(data)` | Envoie un message à un seul destinataire |
| `get_all_my_groupes()` | Récupère la liste des groupes |
| `groupe_create(data)` | Crée un groupe de contacts |
| `groupe_add_contacts(data)` | Ajoute des contacts à un groupe |
| `user_get_solde()` | Récupère le solde SMS de l'utilisateur |
| `user_renew_api_key(data)` | Renouvelle la clé API de l'utilisateur |

## 📃 Licence
Ce projet est sous licence **MIT**.

---
🚀 **Développé par l'équipe PASSEINFO** | [Site Web](https://passinfo.net)
