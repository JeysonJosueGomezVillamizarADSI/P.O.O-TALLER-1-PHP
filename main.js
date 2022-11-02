addEventListener("DOMContentLoaded", (e)=>{
    let myForm = document.querySelector("#Formulario");
    myForm.addEventListener("submit", async(e)=>{
        e.preventDefault();
        let Formulario = e.target;
        let data = Object.fromEntries(new FormData(Formulario));
        let config = {
            method :Formulario.method,
            body: JSON.stringify(data)
        };
        let peticion = await fetch(Formulario.action,config);
        let resultado = await peticion.text();
        document.querySelector("#resultado").insertAdjacentElement ("beforeend",resultado);
    })
})