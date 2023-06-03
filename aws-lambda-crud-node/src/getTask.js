// Código para obtener una tarea de la base de datos
const AWS = require("aws-sdk"); // Modulo para conectarse a DynamoDB

const getTask = async (event) => {
    try {
        const dynamoDB = new AWS.DynamoDB.DocumentClient();
        const {id} = event.pathParameters; // Se obtiene el id de la tarea a obtener

        const result = await dynamoDB.get({
            TableName: "TaskTable",
            Key: {
                id
            }
        }).promise(); // Se obtiene la tarea de la base de datos

        const task = result.Item; // Se obtiene la tarea de la respuesta

        return {
            status: 200,
            body: task
        }
    } catch (error) {
        console.log(error);
    }
}

module.exports = {
    getTask
}