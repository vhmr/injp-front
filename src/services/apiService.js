import React from 'react'
export const UrlServer = "http://127.0.0.1:8000/api/"

export const Post = () => {

}

export const Get = (url, resp) => {

    let IntentosPost = 0;

    fetch(url, {
        method: 'GET', 
        headers:{'Content-Type' : 'application/json', 'charset' : 'UTF-8'},
        /* credentials: "same-origin" */})
    .then(response => {response.text().then(respuesta);
        function respuesta(data) {
            resp (data);
        }
    },error => {
        console.error('Ocurrió un error al cargar. Reintentando. ', error);
    })
    
}
