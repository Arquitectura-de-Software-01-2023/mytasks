// Código para actualizar una tarea de la base de datos
const AWS = require("aws-sdk"); // Modulo para conectarse a DynamoDB

const updateTask = async (event) => {
    try {
        const dynamoDB = new AWS.DynamoDB.DocumentClient();
        const {id} = event.pathParameters; // Se obtiene el id de la tarea a actualizar
        const { done } = JSON.parse(event.body); // Se obtiene el estado de la tarea a actualizar

        await dynamoDB.update({
            TableName: "TaskTable",
            Key: { id },
            UpdateExpression: "set done = :done",
            ExpressionAttributeValues: {
                ":done": done,
            },
            ReturnValues: "ALL_NEW"
        }).promise(); // Se actualiza la tarea en la base de datos

        return {
            status: 200,
            body: {
                message: "Tarea actualizada correctamente"
            }
        };
    } catch (error) {
        console.log(error);
    }
};

module.exports = {
    updateTask
};