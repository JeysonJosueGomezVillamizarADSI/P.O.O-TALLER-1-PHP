let ventaMen=0,ventaMed=0,ventaSup=0,canMen=0,canMed=0,canSup=0,ventaTotal=0;

function sumaVentas(precio){
    precio<=500?
        (ventaMen+=precio,canMen++):
            precio<=1000 && precio>500?
                (ventaMed+=precio,canMed++):
                (ventaSup+=precio,canSup++);
    ventaTotal=ventaMen+ventaMed+ventaSup;
}

addEventListener("DOMContentLoaded", (e) => {
    document.querySelector("#cantidad").removeAttribute("disabled");
    document.querySelector("#cantidad").addEventListener("keyup", (e) => {
        let precio = document.querySelector("#precio");
        if (e.target.value > 0) {
            precio.removeAttribute("disabled");
        } else {
            precio.disabled = true;
        }
    })
    let con = 1;
    let myform = document.querySelector("#form");
    myform.addEventListener("submit", async (e) => {
        e.preventDefault();
        let cantidad = document.querySelector("#cantidad").value;
        let precio = parseInt( document.querySelector("#precio").value);
        document.querySelector("#cantidad").disabled = true;
        if (con < cantidad) {
            document.querySelector("#precio").value = "";
            con += 1;
            sumaVentas(precio);
        } else {
            document.querySelector("#res").innerHTML = "";
            sumaVentas(precio);
            document.querySelector("#res").insertAdjacentHTML
                ("beforeend",`La cantidad de ventas superiores a 1000 son ${canSup} y su monto respectivo es ${ventaSup} <br>`+
                `La cantidad de ventas superiores a 500 y menores a 1000 son ${canMed} y su monto respectivo es ${ventaMed} <br>`+
                `La cantidad de ventas menores a 500 son ${canMen} y su monto respectivo es ${ventaMen} <br>`+
                `La venta total es de ${ventaTotal}`);
        }
    })
})