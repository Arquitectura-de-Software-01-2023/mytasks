const AWS = require("aws-sdk");

const updateTask = async (event) => {

    const dynamoDB = new AWS.DynamoDB.DocumentClient();
    const {id} = event.pathParameters;
    const { done } = JSON.parse(event.body);

    await dynamoDB.update({
        TableName: "TaskTable",
        Key: { id },
        UpdateExpression: "set done = :done",
        ExpressionAttributeValues: {
            ":done": done,
        },
        ReturnValues: "ALL_NEW"
    }).promise();

    return {
        status: 200,
        body: {
            message: "Tarea actualizada correctamente"
        }
    };

};

module.exports = {
    updateTask
};