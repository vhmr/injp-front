import React from 'react'
import axios from 'axios'
export const UrlServer = "http://127.0.0.1:8000/api/"
export const UrlImages= "http://localhost/injp-back/public/"


export const Get = (url) => {
    
    axios.get(`${UrlServer}${url}`).then((res) => {
        let data = res.data
        //console.log(data)
        return data
    }).catch(err => console.log(err))
}

export const Post = (url, values) => {

}

