const data = require('./data_Topics.json');
const ask = require('ask-sdk-core');

var fs = require('fs');
var util = require('util');
var log_file = fs.createWriteStream(__dirname + '/built_intents.js', {flags : 'w'});
var log_stdout = process.stdout;

console.log = function(d) { //
  log_file.write(util.format(d) );
  log_stdout.write(util.format(d) );
};

// console.log("module.exports = [")
console.log("const data = require('./data_Topics.json');\n\n");
console.log("const questionData = require('./data_Questions.json');\n\n");


// Main Intent code generator
data.filter(el => el.iteration === 0).forEach( (element,index) => {
        //"\n"+
    console.log(
        "// This is generated from build_intents.js\n " +
        "exports." + element.topic + "IntentHandler = {\n" +

        "   canHandle(handlerInput) { return new Promise((resolve, reject) => {\n" +
        "       handlerInput.attributesManager.getPersistentAttributes()\n" +
        "           .then((attributes) => {\n" +
        "               resolve( ( handlerInput.requestEnvelope.request.type === 'IntentRequest'\n" +
        "               || handlerInput.requestEnvelope.request.type === 'LaunchRequest')\n" +
        "               && handlerInput.requestEnvelope.request.intent.name === '"+ element.topic +"' \n" +
        "               && attributes.questionState === 0);\n" +
        "           })\n" +
        "           .catch( error => {\n" +
        "               reject(error);\n" +
        "           });\n" +
        "       });\n" +
        "   },\n" +
        "   handle(handlerInput){\n" +
        "       let speechText = \""+ element.StageZerotext +"\" \n" +
        "       return new Promise((resolve, reject) => {\n" +
        "           handlerInput.attributesManager.getPersistentAttributes()\n" +
        "           .then((attributes) => {\n" +
        "               let topic = data.filter(el => el.topic === '"+ element.topic +"');\n" +
        "               let iteration = topic.find(el => el.iteration === attributes."+ element.topic +");\n" +
        "               let voiceLine = (iteration.StageZerovoice.length !== 0 ); \n" + 
        "               let redirect2Question = ''; \n" + 
        "               switch( attributes.gameState ){\n" +
        "                   case 1:\n" +
        "                       speechText = voiceLine ? '<audio src=\\'' + iteration.StageOnevoice + '\\'/>' : iteration.StageOnetext;\n" +
        "                       redirect2Question = iteration.StageOneredirect;\n" +
        "                       break;\n" +
        "                   case 2:\n" +
        "                       speechText = voiceLine ? '<audio src=\\'' + iteration.StageTwovoice + '\\'/>' : iteration.StageTwotext;\n" +
        "                       redirect2Question = iteration.StageTworedirect;\n" +
        "                       break;\n" +
        "                   default: \n" +
        "                       speechText = voiceLine ? '<audio src=\\'' + iteration.StageZerovoice + '\\'/>' : iteration.StageZerotext;\n" +
        "                       redirect2Question = iteration.StageZeroredirect;\n" +
        "               }\n" +
        "               if ( redirect2Question.length !==0) {// secret question\n" +
        "                   attributes.questionState = 1;\n" +
        "                   attributes.question = redirect2Question;\n" +
        "                   speechText += questionData.find(el => el['q-id'] === redirect2Question)['q-text'];    \n" +
        "               }\n" +
        "               if ( attributes."+ element.topic +" < (topic.length-1)){ // set ++ if lower than max\n" +
        "                   attributes."+ element.topic +"++;\n" +
        "                   handlerInput.attributesManager.setPersistentAttributes(attributes);\n" +
        "                   return handlerInput.attributesManager.savePersistentAttributes();\n" +
        "               } else return true;\n" +
        "\n" +
        "           })\n" +
        "           .then(() => {\n" +
        "               resolve(handlerInput.responseBuilder\n" +
        "               .speak(speechText)\n" +
        "               .withSimpleCard('"+ element.topic +"', speechText)\n" +
        "               .withShouldEndSession(false)\n" +
        "               .getResponse());\n" +
        "           })\n" +
        "           .catch((error) => {\n" +
        "               reject(error);\n" +
        "           });\n" +
        "       });\n" +
        "   }\n" +
        "}\n"
    );
    // if(index < data.filter(el => el.iteration === 0).length - 1 ) console.log(",\n");
    // else console.log("\n");
});

console.log("/*\n " +
    "   Copy these handlers to the addRequestHandlers method in index.js \n\n" );
    //"exports.addRequestHandlers = this.addRequestHandlers(")
data.filter(el => el.iteration === 0).forEach((element, index) => {
    if(index < data.filter(el => el.iteration === 0).length ) console.log("generated."+element.topic + "IntentHandler,\n");
    //else console.log("generated."+element.topic + "IntentHandler\n");
    
});
console.log("*/\n")
//console.log(")*/\n")