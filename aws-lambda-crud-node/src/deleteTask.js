// Código para eliminar una tarea de la base de datos
const AWS = require("aws-sdk"); // Modulo para conectarse a DynamoDB

const deleteTask = async (event) => {
    try {
        const dynamoDB = new AWS.DynamoDB.DocumentClient();
        const {id} = event.pathParameters; // Se obtiene el id de la tarea a eliminar

        await dynamoDB.delete({
            TableName: "TaskTable",
            Key: {
                id
            }
        }).promise(); // Se elimina la tarea de la base de datos

        return {
            status: 200,
            body: {
                message: "Tarea eliminada correctamente"
            }
        };
    } catch (error) {
        console.log(error);
    }
};

module.exports = {
    deleteTask
};