//aqui se hacen las funciones

const { request, response } = require('../app');

const getAllStudents = async(request,response)=>{
    
    response.status(200).json({

        'status':200,
        message: "hello from server"

    })
}

module.exports={getAllStudents}