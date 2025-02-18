
# ![PASSEINFO](https://api.passeinfo.com/v1/content/logo.png)

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

### 4️⃣ Voir le statut d'un message
```javascript
async function getStatus() {
    try {
        const response = await api.get_single_status(messageId);
        console.log("statut :", response);
    } catch (error) {
        console.error("Erreur API :", error);
    }
}

getStatus();
```

### 5️⃣ Voir le statut de plusieurs messages
```javascript
async function getBulkStatus(bulk_id) {
    try {
        const response = await api.get_bulk_status(bulk_id);
        console.log("statut :", response);
    } catch (error) {  
        console.error("Erreur API :", error); 
    }
}

getBulkStatus();
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

### Renouvelle la clé API de l'utilisateur
```javascript
async function renewApi(){
    try {
        const new_api_key = await api.user_renew_api_key()
        console.log('new API Key' , new_api_key) 
    } catch (error){
     console.error("Erreur API :", error);
    }
   
}
renewApi()
```

## 📜 Méthodes Disponibles

| 📌 Méthode | 🛠️ Description |
|-----------|--------------|
| `send_bulk_contacts_messages(data)` | Envoie un message en masse |
| `single_message(data)` | Envoie un message à un seul destinataire |
| `get_single_status()` | Prendre le statut d'un message |
| `get_bulk_status()` | Prendre le statut en groupe |
| `user_get_solde()` | Récupère le solde SMS de l'utilisateur |
| `user_renew_api_key(data)` | Renouvelle la clé API de l'utilisateur |

## 📃 Licence
Ce projet est sous licence **MIT**.

---
🚀 **Développé par l'équipe PASSEINFO** | [Site Web](https://passeinfo.com) 
