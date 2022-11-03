let sumA=0
let sumB=0
let sumC=0
let canA=0
let canB=0
let canC=0;

function sumarPromedio(sexo, carrera, edad) {
    if(sexo=="M"){
        if(carrera=="a"){
            sumA= sumA+edad;
            canA +=1;
        }else if (carrera=="b"){
            sumB= sumB+edad;
            canB +=1;
        }else{
            sumC= sumC+edad;
            canC +=1;
        }
    } else{
        null
    }
}
addEventListener("DOMContentLoaded", (e)=>{
    document.querySelector("#alumnos").removeAttribute("disabled");
   
    document.querySelector("#alumnos").addEventListener("keyup", (e) => {
        let sexo = document.querySelector("#sexo");
        let edad = document.querySelector("#edad");
        let carrera = document.querySelector("#carrera");
        if (e.target.value > 0) {
            sexo.removeAttribute("disabled");
            edad.removeAttribute("disabled");
            carrera.removeAttribute("disabled");
        } else {
            sex0.disabled = true;
            edad.disabled = true;
            carrera.disabled = true;
        }
    })
    let con = 1;
    let lista = [];
    let myform = document.querySelector("#formulario");
    myform.addEventListener("submit", async (e) => {
        e.preventDefault();
        let alumnos = document.querySelector("#alunmos").value;
        document.querySelector("#alumnos").disabled = true;
        if (con < alumnos) {
            let data = Object.fromEntries(new FormData(formulario));
            sumaPro(data["sexo"], data["carrera"], parseInt(data["edad"]));
            document.querySelector("#sexo").selectedIndex = 0;
            document.querySelector("#edad").value = "";
            document.querySelector("#carrera").selectedIndex = 0;
            con += 1;

        } else {
            let form = e.target;
            let data = Object.fromEntries(new FormData(formulario));
            sumaPro(data["sexo"], data["carrera"], parseInt(data["edad"]));
            document.querySelector("#resultado").innerHTML = "";
            lista.push(sumaA);
            lista.push(canA);
            lista.push(sumaB);
            lista.push(canB);
            lista.push(sumaC);
            lista.push(canC);

            let config = {
                method: form.method,
                body: JSON.stringify(lista)
            };

            let peticion = await fetch(formulario.action, config);
            let respuesta = await peticion.text();
            document.querySelector("#resultado").insertAdjacentHTML("beforeend", respuesta);
            document.querySelector("#sexo").selectedIndex = 0;
            document.querySelector("#edad").value = "";
            document.querySelector("#carrera").selectedIndex = 0;
            sexo.disabled = true;
            edad.disabled = true;
            carrera.disabled = true;
        }

    })
})    


