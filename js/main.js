// Indica los comentarios de la funcion
const main = () => {

    const db = GetDB({ id: null}) // ¿Por qué null?, Para que no pase ningun producto 

    const content_lis = document.getElementById('content-list')

    // Describe la funcion map
    // lo que hace es iterar todos los elementos de la base de datos e imprimirlos en el DOM dando a cada uno un div
    db.map(product => {

        const item = document.createElement('div')

        const length_name = product.name.length
        const name = length_name > 42 ? product.name.substring(42 , 0) + '...' : product.name
        
        // Indica los comentarios de la funcion
        const price = new Intl.NumberFormat('en-ES', { maximumSignificantDigits: 3 }).format(product.price) + '.00' //formato de los precios

        item.classList.add('col-12', 'col-sm-6', 'col-md-6', 'col-lg-4', 'col-xl-3', 'mb-3', 'mt-3')
        //template de las cartas
        item.innerHTML = ` 
            <div class="card bg-dark card-item">
                <div class="card-header">
                    <img src="${product.image}" alt="">
                    <span class="badge bg-primary clave">${ product.clave }</span>
                </div>
                <div class="card-body">
                    <span class="name">${ product.name }</span>
                    <span class="price">$ ${ product.price }</span>
                    <p class="category">${ product.category }</p>
                </div>
                <div class="card-footer">
                    <button class="btn btn-sm btn-success btn-add" onclick="Add(${ product._id })">
                        <i class="bi bi-cart3"></i> Agregar al carrito
                    </button>
                </div>
            </div>
        `

        // Indica los comentarios de la funcion
        content_lis.appendChild(item)

    })

}

// Indica los comentarios de la funcion
// la funcion va generando la lista de cosas que metes al carrito
const Add = id => {
    
    const product = GetDB({ id })

    const product_selected = document.getElementById(`product-${ id }`) // extrae el ID del objeto seleccionado

    // Indica los comentarios de la validacion SI/NO
    if ( product_selected ) { //si el ID esta dentro del carrito
        const cant = product_selected.querySelector('.cant')
        const cant_int = parseInt(cant.innerHTML) + 1
        cant.innerHTML = cant_int
        //selecciona la cantidad de veces que diste click y lo imprime en el DOM
    }
    else {
        AddItem(product)
        //Si no añade un nuevo producto
    }

    
    GetTotal()//imprime la cantidad total 

}

// Indica los comentarios de la funcion
const AddItem = product => {
    
    const list_products = document.getElementById('list-products')
    // Crear un nuevo div para el producto
    const producto = document.createElement('div')
    
    producto.setAttribute('id', `product-${ product._id }`)
    producto.classList.add('card', 'card-product', 'mb-3')

    producto.innerHTML = `
    <button type="button" class="dismiss" title="Eliminar" onclick="DeleteItem(this.closest('.card-product'))"><i class="bi bi-x"></i></button>
        <div class="row">
            <div class="col-3 col-sm-3 col-xl-2 img">
                <img src="${ product.image }" alt="">
            </div>
            <div class="col-9 col-sm-9 col-xl-10 info">
                <h3>${ product.name }</h3>
                <div class="details">
                    <div class="content-cant">Cantidad: <div class="cant">1</div></div>
                    <span class="price text-end">$ ${ product.price }</span>
                </div>        
            </div>
            <div class="col-9 col-sm-9 col-xl-10 info">
            </div>
        </div>
        </div>
    `
    
    // Añadir el nuevo div al contenedor de productos
    list_products.appendChild(producto)

}

const GetTotal = () => { //Funcion para calcular el precio total
    const list_products = document.getElementById('list-products') //selecciona el div donde estan los articulos
    const products = list_products.getElementsByClassName('card-product')//selecciona  el articulo por su clase

    let total = 0 //incializo su valor total

    // Iterar sobre todos los productos en el carrito
    Array.from(products).forEach(product => {
        const priceElement = product.querySelector('.price')
        const price = parseFloat(priceElement.innerText.replace('$', '').replace(',', ''))
        
        const cantElement = product.querySelector('.cant')
        const quantity = parseInt(cantElement.innerText)
        
        total += price * quantity // suma el total con el price por la cantidad
    })

    // Mostrar el total en el elemento correspondiente
    const totalElement = document.getElementById('total')
    totalElement.innerText = `$ ${total.toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}`;
}


const DeleteItem = element => {
    // Verifica que el elemento pasado no sea null o undefined
    if (element) {
        element.remove(); // Esto elimina el contenedor del producto del DOM
    }
    GetTotal()
}


main()