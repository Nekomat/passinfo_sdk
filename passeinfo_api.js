
const axios = require('axios');

class PasseInfoAPI {
    constructor(apiKey, clientId) {
        this.apiKey = apiKey;
        this.clientId = clientId;
        this.baseUrl = "https://api.passeinfo.com/v1";
        this.client = axios.create({
            baseURL: this.baseUrl,
            headers: {
                'Content-Type': 'application/json',
            },
        });
    }

    #setAuthHeaders() {
        return {
            'api-key': this.apiKey,
            'client-id': this.clientId,
        };
    }

    /**
     * Envoie un message en masse à plusieurs contacts.
     *
     * @param {Object} data - Les paramètres de l'envoi du message.
     * @param {string} data.message - Contenu du message à envoyer.
     * @param {string} data.senderName - Nom de l'expéditeur du message.
     * @param {string[]} data.contacts - Liste des numéros de téléphone des destinataires (format sans +224).
     *
     * @returns {Promise<Object>} - Réponse de l'API contenant le statut de l'envoi.
     * @throws {Error} - Retourne une erreur si l'envoi échoue.
     */
    async send_bulk_contacts_messages(data) {
        try {
            const response = await this.client.post(`/message/send_bulk_contacts_messages`, data, {
                headers: this.#setAuthHeaders(),
            });
            return response.data;
        } catch (error) {
            throw error;
        }
    }

    /**
     * Récupère tous les contacts de l'utilisateur.
     *
     * @returns {Promise<Object[]>} - Liste des contacts enregistrés.
     * @throws {Error} - Retourne une erreur si la récupération échoue.
     */
    // async get_all_my_contacts() {
    //     try {
    //         const response = await this.client.get(`/contact/all_my_contacts`, {
    //             headers: this.setAuthHeaders(),
    //         });
    //         return response.data;
    //     } catch (error) {
    //         throw error;
    //     }
    // }

    /**
     * Ajoute un nouveau contact.
     *
     * @param {Object} data - Informations du contact à ajouter.
     * @param {string} data.first_name - Prénom du contact.
     * @param {string} data.last_name - Nom de famille du contact.
     * @param {string} data.phone_number - Numéro de téléphone du contact.
     *
     * @returns {Promise<Object>} - Réponse de l'API indiquant si l'ajout a réussi.
     * @throws {Error} - Retourne une erreur si l'ajout échoue.
     */
    // async add_contact(data) {
    //     try {
    //         const response = await this.client.post(`/contact/add_contact`, data, {
    //             headers: this.setAuthHeaders(),
    //         });
    //         return response.data;
    //     } catch (error) {
    //         throw error;
    //     }
    // }

    /**
     * Envoie un message unique à un destinataire.
     *
     * @param {Object} data - Informations du message.
     * @param {string} data.message - Contenu du message.
     * @param {string} data.senderName - Nom de l'expéditeur.
     * @param {string} data.contact - Numéro du destinataire.
     *
     * @returns {Promise<Object>} - Réponse de l'API avec le statut de l'envoi.
     * @throws {Error} - Retourne une erreur si l'envoi échoue.
     */
    async single_message(data) {
        try {
            const response = await this.client.post(`/message/single_message`, data, {
                headers: this.#setAuthHeaders(),
            });
            return response.data;
        } catch (error) {
            throw error;
        }
    }

    /**
     * Récupère tous les groupes de contacts.
     *
     * @returns {Promise<Object[]>} - Liste des groupes enregistrés.
     * @throws {Error} - Retourne une erreur si la récupération échoue.
     */
    // async get_all_my_groupes() {
    //     try {
    //         const response = await this.client.get(`/groupe/get_all_my_groupes`, {
    //             headers: this.setAuthHeaders(),
    //         });
    //         return response.data;
    //     } catch (error) {
    //         throw error;
    //     }
    // }

    /**
     * Crée un nouveau groupe de contacts.
     *
     * @param {Object} data - Informations du groupe.
     * @param {string} data.name - Nom du groupe.
     *
     * @returns {Promise<Object>} - Réponse de l'API avec les détails du groupe créé.
     * @throws {Error} - Retourne une erreur si la création échoue.
     */
    // async groupe_create(data) {
    //     try {
    //         const response = await this.client.post(`/groupe/create`, data, {
    //             headers: this.setAuthHeaders(),
    //         });
    //         return response.data;
    //     } catch (error) {
    //         throw error;
    //     }
    // }

    /**
     * Récupère le solde SMS de l'utilisateur.
     *
     * @returns {Promise<Object>} - Solde actuel de l'utilisateur.
     * @throws {Error} - Retourne une erreur si la récupération échoue.
     */
    async user_get_solde() {
        try {
            const response = await this.client.get(`/user/get_solde`, {
                headers: this.#setAuthHeaders(),
            });
            return response.data;
        } catch (error) {
            throw error;
        }
    }

    /**
     * Renouvelle la clé API de l'utilisateur.
     *
     * @returns {Promise<Object>} - Nouvelle clé API générée.
     * @throws {Error} - Retourne une erreur si l'opération échoue.
     */
    async user_renew_api_key() {
        try {
            const response = await this.client.post(`/user/renew_api_key`, {}, {
                headers: this.#setAuthHeaders(),
            });
            return response.data;
        } catch (error) {
            throw error; 
        }
    }
    /**
     * Prendre le statut d'un message unitaire.
     * 
     * @param {string} messageId - l'id du message pour voir le status
     * @throws {Error} au cas ou les informations envoyés sont invalides
     */
    async get_single_status(messageId){
        try {
            const response = await this.client.get(`/message/get_single_status/${messageId}`,{
                headers: this.#setAuthHeaders(),
            })
            return response.data
        } catch (error) {
            throw error;
        }
       
    }
   /**
     * Prendre les statuts de plusieurs messages.
     * 
     * @param {string} bulk_id - l'id  pour voir les statuts
     * @throws {Error} au cas ou les informations envoyés sont invalides
     */
   async get_bulk_status(bulk_id){
    try {
        const response = await this.client.get(`/message/get_bulk_status/${bulk_id}`,{
            headers: this.#setAuthHeaders(),
        })
        return response.data
    } catch (error) {
        throw error
    }
   }


}

module.exports = PasseInfoAPI;
