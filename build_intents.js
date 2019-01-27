const data = require('data');

const gameState = [ "open", "question" ];
exports.init = data.forEach(element => {

    console.log(
        "const "+ element.topic +"IntentHandler = {\n" +
        "canHandle(handlerInput) { return handlerInput.requestEnvelope.request.type === 'IntentRequest'\n" +
        "&& handlerInput.requestEnvelope.request.intent.name === '"+ element.topic +"' \n" +
        "&& gameState === '"+ gameState[0] +"';\n" +
        "},\n" +
        "handle(handlerInput) {\n" +
        "  const speechText = "+ element.eval(element.iteration) +"\n" +
        "\n" +
        "\n" +
        "\n" +
        "\n" +
        "\n" +
        "\n" +
        "\n"
    );
});