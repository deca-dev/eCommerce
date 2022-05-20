
// console.log(navbar)

// evento directamente en el html
// <button onclick="alert('hola')" id="navbarBtn" class="navbar__btn-link">

// navbarBtn.onclick = function () {
//   alert('desde una propiedad del elemento en el html')
// }

// handler
// const fn = function (e) {
//   console.log(navbarNav)
//   navbarNav.classList.toggle('active')
// }

// start navbar btn menu
const navbarBtn = document.getElementById('navbarBtn')
const navbarNav = document.querySelector('.navbar__nav')

navbarBtn.addEventListener('click', function (e) {
  console.log(navbarNav)
  navbarNav.classList.toggle('active')
})
// end navbar btn menu

// start cart menu
const navbarBtnCart = document.getElementById('navbarBtnCart')
const navbarNavCart = document.querySelector('.wrapper__sidebar')

navbarBtnCart.addEventListener('click', function (f) {
  console.log(navbarNavCart)
  navbarNavCart.classList.toggle('active')
})
// end navbar cart menu

// navbarBtn.removeEventListener('click', fn)

// Arreglo de Productos
const products = [
  {
    id: 1,
    name: 'Metallica T-Shirt',
    price: 100,
    image: 'https://www.metallica.com/dw/image/v2/BCPJ_PRD/on/demandware.static/-/Sites-met-master/default/dwbc6e0af8/images/hi-res/New%20One%20Tshirt.jpg?sw=350&sh=350&sm=cut',
    description: 'Playera oversized en punto suave de algodón orgánico con diseño estampado al frente. Modelo de cuello redondo con borde acanalado y hombros caídos.',
    quantity: 1
  },
  {
    id: 2,
    name: 'Nirvana T-Shirt',
    price: 200,
    image: 'https://www.billboard.com/wp-content/uploads/2022/01/Nirvana-One-Sided-Smile-T-Shirt.jpg?w=839',
    description: 'Playera oversized en punto suave de algodón orgánico con diseño estampado al frente. Modelo de cuello redondo con borde acanalado y hombros caídos.',
    quantity: 1
  },
  {
    id: 3,
    name: 'Rolling Stones T-Shirt',
    price: 300,
    image: 'https://www.band-tees.com/wp-content/uploads/2018/09/p-R_00800_103BRVDO-1-300x300.jpg',
    description: 'Playera oversized en punto suave de algodón orgánico con diseño estampado al frente. Modelo de cuello redondo con borde acanalado y hombros caídos.',
    quantity: 1
  },
  {
    id: 4,
    name: 'Slipknot T-Shirt',
    price: 300,
    image: 'https://media.altpress.com/uploads/2020/07/slipknot-shirt.jpg',
    description: 'Playera oversized en punto suave de algodón orgánico con diseño estampado al frente. Modelo de cuello redondo con borde acanalado y hombros caídos.',
    quantity: 1
  }
]

const wrapperProducts = document.getElementById('wrapper-products')

let productsHTML = ''

// Bucle
// for (let i = 0; i < products.length; i++) {
//   console.log('bucle: ',products[i])
// }

// Iteradores for of
for (let product of products) {
  productsHTML += `
  <div class="wrapper__product">
    <div class="wrapper__product-img">
      <img src="${product.image}" alt="${product.name}" class="wrapper__product-img-item">
    </div>
    <div class="wrapper__product-content">
      <h3 class="wrapper__product-title">${product.name}</h3>
      <p class="wrapper__product-text">
      ${product.description}
      </p>
      <div class="wrapper__product-btn">
      <span class="wrapper__product-btn-text">$ ${product.price}</span>
        <button class="wrapper__product-btn-item" data-id="${product.id}">
          <i class='bx bx-shopping-bag'></i>
          <span class="wrapper__product-btn-text">Add to Cart</span>
        </button>
      </div>
    </div>
    </div>
  `
}

wrapperProducts.insertAdjacentHTML('beforeend', productsHTML)

let cart = []

function find(id) {
  for (let product of products) {
    if (product.id === id) {
      return product
    }
  }
}

function addToCart(id) {
  const product = find(id)
  const cartProduct = cart.find((cart)=> cart.id == id)

    if(cartProduct){
      cartProduct.quantity++
    } else{
      cart.push(product)
    }
  }
  

wrapperProducts.addEventListener('click', function (e) {
  if (e.target.closest('.wrapper__product-btn-item')) {
    const id = e.target.closest('.wrapper__product-btn-item').dataset.id
    addToCart(+id)
    // subTotal(+id)
    renderCart()
  }
})

const wrapperCart = document.getElementById('wrapper-cart')

function renderCart() {
  let cartHTML = ''

  for (let product of cart) {

    cartHTML += `
    <div class="cart__item">
    <div class="cart__item-img">
    <img src="${product?.image}" alt="${product.name}" class="cart__item-img-item">
    </div>
    <div class="cart__item-content">
    <h3 class="cart__item-title">${product.name}</h3>
    <p class="cart__item-text">
    ${product.description}
    </p>
    <div class="cart__item-btn">
    <div class="cart__item-btn-text">Price: $ ${product.price}</div>
    <span>Qty: <buton><i class='bx bx-minus' ></i></buton> ${product.quantity}</span>
    <buton><i class='bx bx-plus' id="plusBtnCart"></i></buton>
    <div id="subtotal-cart"></div>
    <button class="cart__item-btn-item" data-id="${product.id}">
    <i class='bx bx-trash'></i>
    </button>
    </div>
    </div>
    </div>
    <hr>
    `
  }
  const cartTotal = document.getElementById('cart-total')
  const cartCounter = document.getElementById('cart-counter')
  const cartNotify = document.getElementById('cart-notify')
  const cartSubtotal = document.getElementById('subtotal-cart')

  wrapperCart.innerHTML = cartHTML.length > 0 ? cartHTML : '<p>No hay productos</p>'
  cartTotal.innerHTML = `$ ${sumTotal()}`

  cartCounter.innerHTML = `# items: ${countEachId()}`
  cartNotify.innerHTML = countEachId()
  // cartSubtotal.innerHTML = `Subtotal: $${subTotal()}`
}

renderCart()

function sumTotal() {
  let sum = 0
  for(let i=0; i<cart.length; i++){
    sum += cart[i].quantity * cart[i].price
  }
  return sum
}

function subTotal(id){
  let subtotal = 0
  for (let product of cart) {
    if (product.id === id) {
      subtotal = product.quantity * product.price
    }
  }
  console.log(subtotal)
  return subtotal
}


function countEachId() {
 let totalItems = 0
 for(let i=0; i<cart.length; i++){
   totalItems += cart[i].quantity
 }
 return totalItems
}


function removeFromCart(id) {
  let newArr = []
  for (let product of cart) {
    if (product.id !== id) {

      newArr.push(product)
    }
  }
  cart = newArr
}

wrapperCart.addEventListener('click', function (e) {
  if (e.target.closest('.cart__item-btn-item')) {
    const id = e.target.closest('.cart__item-btn-item').dataset.id
   removeFromCart(+id)

    renderCart()
  }
})

const checkout = document.getElementById('checkout')

checkout.addEventListener('click', function (e) {
  if (e.target.closest('.wrapper__sidebar-cart-btn-link')) {
    alert('Gracias por tu compra')
    cart = []
    renderCart()
    document.location.reload()
  }
})
