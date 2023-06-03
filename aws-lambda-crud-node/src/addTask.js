// Código para crear una nueva tarea en la base de datos
const { v4 } = require("uuid"); // Modulo para generar un id único
const AWS = require("aws-sdk"); // Modulo para conectarse a DynamoDB

const addTask = async (event) => {
    try {
        const dynamoDB = new AWS.DynamoDB.DocumentClient();
        // Los datos que se envían desde el cliente se encuentran en el body del evento
        const { title, description } = JSON.parse(event.body);
        // Fecha de creación de la tarea
        const createdAt = new Date();
        const id = v4();

        const newTask = {
            id,
            title,
            description,
            createdAt,
            done: false
        };

        await dynamoDB.put({
            TableName: "TaskTable",
            Item: newTask,
        }).promise();

        return {
            status: 200,
            body: newTask
        };
    } catch (error) {
        console.log(error);
    }
};

module.exports = {
    addTask
};
