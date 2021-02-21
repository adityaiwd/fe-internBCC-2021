import axios from 'axios'

export default axios.create({
    baseURL:"http://ec2-100-26-255-230.compute-1.amazonaws.com:8080",
    header:{
        "Access-Control-Allow-Origin" : "*",
        "Access-Control-Allow-Methods": "GET,PUT,POST,DELETE,PATCH,OPTIONS"
    }
})