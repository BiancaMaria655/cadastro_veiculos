const Veiculo = require('../model/veiculos')

module.exports = class veiculoController {
    // inserir veiculo
    static novoVeiculo(req, res) {
        res.render('veiculos/novo')
    }
    static async novoVeiculoSalvar(req, res) {
            const veiculo = {
                nome: req.body.inputNome,
                modelo: req.body.inputModelo,
                cor: req.body.inputCor,
                ano: req.body.inputAno,
                fabricante: req.body.inputFabricante,
                valor: req.body.inputValor,
                chassi: req.body.inputChassi,
                placa: req.body.inputPlaca,
            }
            await Veiculo.create(veiculo)
                .then(() => {
                    this.todosVeiculos()
                }).catch((error) => {
                    console.log(error)
                })
            res.redirect('/veiculo/listaVeiculos')
        }
        // home
    static async home(req, res) {
            res.render('veiculos/home')
        }
        //visualizar todos os veículos
    static async todosVeiculos(req, res) {
            const veiculos = await Veiculo.findAll({ raw: true })
            res.render('veiculos/visualizarLista', { veiculos })
        }
        // editar veiculos
    static async editarVeiculo(req, res) {
        const id = req.params.id
        const veiculo = await Veiculo.findOne({ where: { id: id }, raw: true })
        res.render('veiculos/editar', { veiculo })
    }

    static async editarVeiculoSalvar(req, res) {
        const id = req.body.id
        const veiculo = {
            nome: req.body.inputNome,
            modelo: req.body.inputModelo,
            cor: req.body.inputCor,
            ano: req.body.inputAno,
            fabricante: req.body.inputFabricante,
            valor: req.body.inputValor,
            chassi: req.body.inputChassi,
            placa: req.body.inputPlaca,
        }
        await Veiculo.update(veiculo, {
                where: { id: id }
            })
            .then(res.redirect('/veiculo/listaVeiculos'))
            .catch((erro) => {
                console.log(erro)
            })
    }
    static async removerVeiculo(req, res) {
        const id = req.body.id
        await Veiculo.destroy({ where: { id: id } })
            .then(res.redirect('/veiculo/listaVeiculos'))
            .catch((err) => {
                console.log(err)
            })
    }

}