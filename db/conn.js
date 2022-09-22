const { Sequelize } = require('sequelize')

const sequelize = new Sequelize('cadastroveiculos', 'root', '', {
    host: 'localhost',
    dialect: 'mysql'
})

try {
    sequelize.authenticate()
    console.log('Database started')
} catch (error) {
    console.log('Database not started', error)
}

module.exports = sequelize