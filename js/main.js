function simulador() {
    const contPre = document.getElementById("pre-simulation");
    const contPost = document.getElementById("post-simulation");

    contPost.classList.remove('disabled');
    contPre.classList.add('disabled');

    //Variables que capturan los valores de los campos
    let clNombres = document.getElementById('nombres').values;
    let clTelefono = document.getElementById('telefono').values;
    let clEmail = document.getElementById('email').values;
    let clMonto = document.getElementById('monto').values;
    let clTiempo = document.getElementById('tiempo').values;

    //Constantes que capturan las etiquetas span, en las que se muestran los valores (show)
    const showTiempo = document.getElementById('showTiempo');
    const showInteres = document.getElementById('showInteres');
    const showTotal = document.getElementById('showTotal');
    const showGanancia = document.getElementById('showGanancia');
    const showNombres = document.getElementById('showNombres');
    const showCorreo = document.getElementById('showCorreo')
}

document.addEventListener('DOMContentLoaded', function () {
    document.getElementById('calcular').addEventListener('click', simulador);
});

