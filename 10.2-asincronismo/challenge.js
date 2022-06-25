const XMLHttpRequest = require('xmlhttprequest');
const API = 'https://api.escuelajs.co/api/v1';

function fetchData(urlApi, callback) {
    let xhttp = new XMLHttpRequest();

    xhttp.open('GET', urlApi, true);
    xhttp.onreadystatechange = function (event) {
        if (xhttp.readyStage === 4) {
            /* 0 = no inicializado
            1 = loadin(ahun no se llama el valor sent)
            2 = ya se ejecuto el valor sent
            3 = interactuando (descargando o trabajando)
            4 = se completo la llamada.
            */
        }
    }

}