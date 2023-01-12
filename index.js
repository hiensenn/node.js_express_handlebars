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
        img : 'https://www.pngall.com/wp-content/uploads/5/Samsung-TV-PNG.png',
        titulo : 'Tv',
        marca : 'sansung',
        preco : 1200,
         
    },
    {
        id : '2',
        img : 'https://castelodosmoveis.com.br/wp-content/uploads/2022/08/mesa2-1.png',
        titulo : 'mesa',
        marca : 'madera madera',
        preco : 600,
        
    },
    {
        id : '3',
        img :'https://i.dell.com/is/image/DellContent//content/dam/ss2/product-images/dell-client-products/notebooks/latitude-notebooks/14-3420/media-gallery/peripherals_laptop_latitude_3420nt_gallery_3.psd?fmt=png-alpha&pscan=auto&scl=1&hei=402&wid=573&qlt=100,1&resMode=sharp2&size=573,402&chrss=full',
        titulo : 'laptop',
        marca : 'dell',
        preco : 2200,
         
    },
    {
        id : '4',
        img :'https://ssl-product-images.www8-hp.com/digmedialib/prodimg/lowres/c03818417.png',
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