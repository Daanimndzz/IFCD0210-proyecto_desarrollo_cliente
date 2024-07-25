let nombre = document.getElementById('product-name')
let precio = document.getElementById('product-price')
let imagen = document.getElementById('product-image')
let lista = document.getElementById('listaProductos')
let formulario = document.getElementById('add-product-form')

formulario.onsubmit=nuevoProducto



// Añadir Producto
function nuevoProducto(ev){
    ev.preventDefault()
    console.log(imagen.value)
    console.log('formulario')

    let producto = document.createElement('div')
    producto.innerHTML = `<h2>${nombre.value}</h2> <h2>${precio.value}</h2> <img src= ${imagen.value}>`
    console.log(imagen.value);
    lista.append(producto)
}


// Quitar Producto
let botonQuitar = document.getElementById('quitar-producto')

botonQuitar.onclick = quitarProducto


function quitarProducto(ev){
    ev.preventDefault()
    console.log('formulario')
    console.log(nombre)

    let producto = document.getElementById('listaProductos')
    producto.innerHTML = `<h2>${nombre.value}</h2> <h2>${precio.value}</h2> <h2>${imagen.value}</h2>`
    lista.append(producto)
}

quitarProducto(ev)



//borramos lo que se haya escrito en el formulario
formulario.reset()
formulario.focus()






