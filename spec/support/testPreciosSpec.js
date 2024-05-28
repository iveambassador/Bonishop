const fs = require('fs');
const path = require('path');

// Cargar el archivo JSON de productos
const productosPath = path.resolve(__dirname, '../../js/productos.json');
const productos = JSON.parse(fs.readFileSync(productosPath, 'utf8'));

describe('Verificación de precios de productos', () => {
    // Lista de precios esperados para cada producto
    const preciosEsperados = {
        "abrigo-01": 210,
        "abrigo-02": 220,
        "abrigo-03": 200,
        "abrigo-04": 180,
        "abrigo-05": 120,
        "camiseta-01": 250,
        "camiseta-02": 190,
        "camiseta-03": 200,
        "camiseta-04": 150,
        "camiseta-05": 100,
        "camiseta-06": 90,
        "camiseta-07": 80,
        "camiseta-08": 70,
        "pantalon-01": 180,
        "pantalon-02": 260,
        "pantalon-03": 250,
        "pantalon-04": 220,
        "pantalon-05": 270
    };

    it('los precios están correctos', () => {
        productos.forEach(producto => {
            expect(producto.precio).toBe(preciosEsperados[producto.id]);
        });
    });
});

describe('Verificación de imágenes de productos', () => {
    // Lista de imágenes esperadas para cada producto
    const imagenesEsperadas = {
        "abrigo-01": "./img/abrigos/abrigochica.png",
        "abrigo-02": "./img/abrigos/abrigochica2.png",
        "abrigo-03": "./img/abrigos/abrigochica3.png",
        "abrigo-04": "./img/abrigos/abrigochica4.png",
        "abrigo-05": "./img/abrigos/05.jpg",
        "camiseta-01": "./img/camisetas/01.jpg",
        "camiseta-02": "./img/camisetas/02.jpg",
        "camiseta-03": "./img/camisetas/camisetachica1.png",
        "camiseta-04": "./img/camisetas/04.jpg",
        "camiseta-05": "./img/camisetas/05.jpg",
        "camiseta-06": "./img/camisetas/06.jpg",
        "camiseta-07": "./img/camisetas/07.jpg",
        "camiseta-08": "./img/camisetas/08.jpg",
        "pantalon-01": "./img/pantalones/01.jpg",
        "pantalon-02": "./img/pantalones/02.jpg",
        "pantalon-03": "./img/pantalones/03.jpg",
        "pantalon-04": "./img/pantalones/04.jpg",
        "pantalon-05": "./img/pantalones/05.jpg"
    };

    it('las imágenes están correctas', () => {
        productos.forEach(producto => {
            expect(producto.imagen).toBe(imagenesEsperadas[producto.id]);
        });
    });
});

