const express = require('express')
const router = express.Router()
const veiculoController = require('../controllers/veiculoController')

router.get('/cadastrar', veiculoController.novoVeiculo)
router.post('/cadastrar', veiculoController.novoVeiculoSalvar)
router.get('/listaVeiculos', veiculoController.todosVeiculos)
router.get('/editar/:id', veiculoController.editarVeiculo)
router.post('/remover', veiculoController.removerVeiculo)
router.post('/editar', veiculoController.editarVeiculoSalvar)
router.get('/', veiculoController.home)

module.exports = router