// Ejemplo de código para crear una función lambda en AWS
module.exports.handler = async (event) => {
  return {
    statusCode: 200,
    body: JSON.stringify(
      {
        message: "Hello World!",
        input: event,
      },
      null,
      2
    ),
  };
};
