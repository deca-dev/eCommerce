const products = [
    {
        id: 1,
        name: 'Product 1',
        price: 100,
        image: 'https://picsum.photos/250/250?random=1',
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quidem.'
    },
    {
        id: 2,
        name: 'Product 2',
        price: 200,
        image: 'https://picsum.photos/250/250?random=2',
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quidem.'
    },
    {
        id: 3,
        name: 'Product 3',
        price: 300,
        image: 'https://picsum.photos/250/250?random=3',
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quidem.'
    }
]


let cart = [];
// let id = 1;
/* =========================== Buscando el producto por id =========================== */
function find(id) {
    for (let product of products) {
        if (product.id === id) {
            return product
        }
    }
}
//   console.log(find(id));

/* =========================== Agregando al carrito por id =========================== */
function addToCart(id) {
    const product1 = find(1);
    console.log(product1);
    cart.push(product1);
    return cart;
}
console.log(addToCart(1));

/* =========================== Agregando 2do item al carrito por id =========================== */

function addToCart2(id) {
    const product1 = find(2);
    console.log(product1);
    cart.push(product1);
    return cart;
}
console.log(addToCart2(2));


/* =========================== Agregando 3er item al carrito por id =========================== */

function addToCart3(id) {
    const product1 = find(3);
    console.log(product1);
    cart.push(product1);
    return cart;
}
console.log(addToCart3(3));

/* =========================== Agregando 4to item al carrito por id =========================== */

function addToCart4(id) {
    const product1 = find(1);
    console.log(product1);
    cart.push(product1);
    return cart;
  
}
console.log(addToCart4(1));

/* =========================== Contador por items =========================== */
// Resumen
let counterItem = {}
for (let i = 0; i<cart.length; i++) {
    if (counterItem[cart[i].name]){
        counterItem[cart[i].name]++
    } else {
        counterItem[cart[i].name] = 1

    }
}
console.log(counterItem);

// Por id especificado
let counter = 0;

for(const obj of cart){
    if(obj.id === 1) counter++
}

console.log(counter)

// Total de items
console.log(cart.length);

/* =========================== Eliminar items =========================== */


const indexOfObject = cart.findIndex(object =>{
    return object.id === 1;
});

cart.splice(indexOfObject,1);
console.log(cart);