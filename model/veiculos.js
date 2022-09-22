const { DataTypes } = require('sequelize')
const db = require('../db/conn')

const Veiculo = db.define('Veiculo', {
    nome: {
        type: DataTypes.STRING,
        require: true
    },
    modelo: {
        type: DataTypes.STRING,
        require: true
    },
    cor: {
        type: DataTypes.STRING,
        require: true
    },
    ano: {
        type: DataTypes.INTEGER,
        require: true
    },
    fabricante: {
        type: DataTypes.STRING,
        require: true
    },
    valor: {
        type: DataTypes.DOUBLE,
        require: true
    },
    chassi: {
        type: DataTypes.STRING,
        require: true
    },
    placa: {
        type: DataTypes.STRING,
        require: true
    },
})

module.exports = Veiculo