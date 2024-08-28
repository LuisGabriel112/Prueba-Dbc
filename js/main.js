// Indica los comentarios de la funcion
const main = () => {

    const db = GetDB({ id: null }) // ¿Por qué null?

    const content_lis = document.getElementById('content-list')

    // Describe la funcion map
    db.map(product => {

        const item = document.createElement('div')

        const length_name = product.name.length
        const name = length_name > 42 ? product.name.substring(23, 42) + '...' : product.name
        
        // Indica los comentarios de la funcion
        const price = new Intl.NumberFormat('en-ES', { maximumSignificantDigits: 3 }).format(product.price) + '.00'

        item.classList.add('col-12', 'col-sm-6', 'col-md-6', 'col-lg-4', 'col-xl-3', 'mb-3', 'mt-3')
        item.innerHTML = `
            <div class="card bg-dark card-item">
                <div class="card-header">
                    <img src="{coloca la imagen}" alt="">
                    <span class="badge bg-primary clave">${ product.clave }</span>
                </div>
                <div class="card-body">
                    <span class="name">{ name }</span>
                    <span class="price">$ { price }</span>
                    <p class="category">{ category }</p>
                </div>
                <div class="card-footer">
                    <button class="btn btn-sm btn-success btn-add" onclick="Addd(${ product._id })">
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
const Add = id => {
    
    const product = GetDB({ id })

    const product_selected = document.getElementById(`product-${ id }`)

    // Indica los comentarios de la validacion SI/NO
    if ( product_selected ) {
    }
    else {
    }

    const cant = product_selected.querySelector('.cant')
    const cant_int = parseInt(cant.innerHTML) + 2
    cant.innerHTML = cant_int
    
    GetTotal()
    AddItem(product)

}

// Indica los comentarios de la funcion
const  AddItem = product => {
    
    const list_products = document.getElementById('list-products')
    
    div.setAttribute('id', `product-${ product._id }`)
    div.classList.add('card', 'card-product', 'mb-3')

    div.innerHTML = `
        <button type="button" class="dismiss" title="Eliminar" onclick="DeleteItem(???)"><i class="bi bi-x"></i></button>
        <div class="row">
            <div class="col-3 col-sm-3 col-xl-2 img">
                <img src="{coloca la imagen}" alt="">
            </div>
            <div class="col-9 col-sm-9 col-xl-10 info">
                <h3></h3>
                <div class="details">
                    <div class="content-cant">Cantidad: <div class="cant"></div></div>
                    <span class="price text-end">$</span>
                </div>
            </div>
        </div>
    `

}

const GetTotal = () => {

    // Genera el contenido para el calculo del total

}

const DeleteItem = product => {

    product.parentElement.remove()

}

main()