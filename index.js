const express = require('express');
const exphbs = require("express-handlebars");

const app = express();


app.engine('handlebars', exphbs.engine());
app.set('view engine', 'handlebars');
app.use(express.static('public'))

//iniciando array de produtos de forma global

const produto = [
    {
        id : '1',
        titulo : 'Tv',
        marca : 'sansung',
        preco : 1200,
         
    },
    {
        id : '2',
        titulo : 'mesa',
        marca : 'madera madera',
        preco : 600,
        
    },
    {
        id : '3',
        titulo : 'laptop',
        marca : 'dell',
        preco : 2200,
         
    },
    {
        id : '4',
        titulo : 'Mouse',
        marca : 'multilaser',
        preco : 200,
        
    }
]


app.get('/', (req, res) => {

    res.render('home', {produto})
})

app.get('/produtos/:id', (req, res) => {

    const produtos = produto[parseInt(req.params.id) - 1]

    res.render('produto', {produtos})
})

app.listen(3000, () => {
    console.log('Funcionando na porta 3000')
})