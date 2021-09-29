const templateCarrito = document.getElementById("template-carrito").content;

const fragment = document.createDocumentFragment();

function render_carrito() {
  let carrito_render = JSON.parse(localStorage.getItem("carrito"));
  console.log(carrito_render);

  Object.values(carrito_render).forEach((producto) => {
    templateCarrito.querySelector("th").textContent = producto.id;
    templateCarrito.querySelectorAll("td")[0].textContent = producto.title;
   //templateCarrito.querySelector("td").textContent = producto.precio;
   templateCarrito.querySelector("td input[id='cantidadTabla']").setAttribute("value",producto.cantidad);
    templateCarrito.querySelector("span").textContent =
    producto.precio * producto.cantidad;

    const clone = templateCarrito.cloneNode(true);
    fragment.appendChild(clone);
  });
  items.appendChild(fragment);
}

render_carrito();
