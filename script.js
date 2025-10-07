let btnver = document.querySelector('.btn');
let fech = document.querySelector('.buscador');
let calcular = document.querySelector('.calcular p');

btnver.addEventListener("click", () => {
    let cumple = new Date(fech.value);
    let today = new Date();

    let y1 = cumple.getFullYear();
    let y2 = today.getFullYear();
    let años = y2 - y1;

    
    let meses = today.getMonth() - cumple.getMonth();
    if (meses < 0) {
        meses += 12;
        años--;
    }

    let dias = today.getDate() - cumple.getDate();
    if (dias < 0) {
        meses--;
        let mesult = new Date(today.getFullYear(), today.getMonth(), 0).getDate();
        dias += mesult;
    }

   
    calcular.textContent = `Edad: ${años} años, ${meses} meses, ${dias} días`;
});  
  