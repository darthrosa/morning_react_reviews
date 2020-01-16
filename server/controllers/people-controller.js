const people = require('../data.json');
let id = 21;

module.exports = {
    getPeople: (req,res) => {
        res.status(200).send(people)
    },

    deletePerson: (req, res) => {
        const {id} = req.params
        const indexToDelete = people.findIndex(element => element.id === +id)
        people.splice(indexToDelete, 1)
        res.status(200).send(people)
    },

    createPerson: (req, res) => {
        const {first_name, last_name, email, gender, ip_address} = req.body
        const person = {
            id: id,
            first_name: first_name,
            last_name: last_name,
            email: email,
            gender: gender,
            ip_address: ip_address
        }
        people.push(person)
        id++
        res.status(200).send(people)
    },

    editPerson: (req, res) => {
        const {id} = req.params
        const {first_name, last_name, email, gender, ip_address} = req.body
        const indexToUpdate = people.findIndex(indvidual => indvidual.id === +id)
        const editedPerson = {
            id: +id,
            first_name: first_name,
            last_name: last_name,
            email: email,
            gender: gender,
            ip_address: ip_address
        };
        people.splice(indexToUpdate, 1, editedPerson)
        res.status(200).send(people)
    }
}