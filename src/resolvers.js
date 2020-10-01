const User = require('./models/User')
const db = require('../config/db')


// MYSQL
// module.exports = {
//     Query: {
//         users: async () => {
//             let response = await db.query('SELECT * FROM users')
//             return response[0]
//         },
//         user: async (_, { id }) => {
//             let response = await db.query(`SELECT * FROM users WHERE id = ?`, id)
//             return response[0][0]
//         },
//     },

//     Mutation: {
//         createUser: async (_, { name, email } ) => {
//             let data = {name: name, email: email};
//             let response = await db.query(`INSERT INTO users SET ?`, [data])
//             console.log(response[0])
//             return {id: response[0].insertId}
//         },
//         deleteUser: async (_, { id }) => {
//             let response = await db.query(`DELETE FROM users WHERE id = ?`, id)
//             console.log(response[0])
//             return response[0]
//         }
//     },
// };

//MONGODB
module.exports = {
    Query: {
        users: () => User.find(),
        user: (_, { id }) => User.findById(id),
    },

    Mutation: {
        createUser: (_, { name, email } ) => User.create({ name, email }),
        deleteUser: (_, { id }) => User.findOneAndDelete(id)
    },
};