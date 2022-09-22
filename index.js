const express = require('express')
const app = express()
const port = 3000
const exphbs = require('express-handlebars')
const Veiculo = require('./routes/vehicleRouter')
const conn = require('./db/conn')
const veiculoModel = require('./model/veiculos')


//configurar template handlebars
app.engine('handlebars', exphbs.engine())
app.set('view engine', 'handlebars')

//parser para leitura do body
app.use(
    express.urlencoded({
        extended: true
    })
)

app.use(express.json())

//adicionando rotas de veiculos
app.use('/veiculo', Veiculo)


//adicionando css
app.use(express.static('public'))

//página inicial
app.get('/', (req, res) => {
    res.render('home')
})

conn
    .sync()
    .then(() => {
        app.listen(3000)
        console.log('Server started')
    })
    .catch((error) => {
        console.log('server not started')
    })