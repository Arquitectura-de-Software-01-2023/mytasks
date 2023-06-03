// Código para obtener todas las tareas de la base de datos
const AWS = require("aws-sdk"); // Modulo para conectarse a DynamoDB

const getTasks = async (event) => {
    try {
        const dynamoDB = new AWS.DynamoDB.DocumentClient();

        const result = await dynamoDB.scan({
            TableName: "TaskTable"
        }).promise(); // Se obtienen todas las tareas de la base de datos

        const tasks = result.Items; // Se obtienen las tareas de la respuesta

        return {
            status: 200,
            body: {
                tasks
            }
        }
    } catch (error) {
        console.log(error);
    }
}

module.exports = {
    getTasks
}