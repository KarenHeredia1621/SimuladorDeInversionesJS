function simulador() {
    const contPre = document.getElementById("pre-simulation");
    const contPost = document.getElementById("post-simulation");

    contPost.classList.remove('disabled');
    contPre.classList.add('disabled');

    //Variables que capturan los valores de los campos
    let clNombres = document.getElementById('clNombres').value;
    let clTelefono = document.getElementById('clTelefono').value;
    let clEmail = document.getElementById('clEmail').value;
    let clMonto = document.getElementById('clMonto').value;
    let clTiempo = document.getElementById('clTiempo').value;

    //Constantes que capturan las etiquetas span, en las que se muestran los valores (show)
    const showTiempo = document.getElementById('showTiempo');
    const showInteres = document.getElementById('showInteres');
    const showTotal = document.getElementById('showTotal');
    const showGanancia = document.getElementById('showGanancia');
    const showNombres = document.getElementById('showNombres');
    const showCorreo = document.getElementById('showCorreo')

    //Variables para realizar los calculos
    let ganancia = 0
    let total = 0

    switch (clTiempo) {
        case '1':
            //en este caso realizaremos el calculo si el tiempo corresponde a un año
        ganancia = (clMonto*0.008)*12;
        total = parseInt(clMonto) + parseInt(ganancia);
        showInteres.textContent = '0.8%';
        showTiempo.textContent = '12 MESES';

            break;

        case '2':
            //en este caso realizaremos el calculo si el tiempo corresponde a dos años
        ganancia = (clMonto*0.013)*24;
        total = parseInt(clMonto) + parseInt(ganancia);
        showInteres.textContent = '1.3%';
        showTiempo.textContent = '24 MESES';
            break;

        case '3':
            //en este caso realizaremos el calculo si el tiempo corresponde a tres años
        ganancia = (clMonto*0.017)*36;
        total = parseInt(clMonto) + parseInt(ganancia);
        showInteres.textContent = '1.7%';
        showTiempo.textContent = '36 MESES';
            break;
        
    }

  

    showTotal.textContent = total;
    showGanancia.textContent = ganancia;
    showNombres.textContent = clNombres;
    showCorreo.textContent = clEmail;

}

    document.addEventListener('DOMContentLoaded', function () {
    document.getElementById('calcular').addEventListener('click', simulador);
});

