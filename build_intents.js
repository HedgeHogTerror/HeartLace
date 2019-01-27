const data = require('./data.js');

var fs = require('fs');
var util = require('util');
var log_file = fs.createWriteStream(__dirname + '/built_intents.js', {flags : 'w'});
var log_stdout = process.stdout;

console.log = function(d) { //
  log_file.write(util.format(d) + '\n');
  log_stdout.write(util.format(d) + '\n');
};

data.filter(el => el.iteration === 0).forEach(element => {
    console.log(
        "const "+ element.topic +"IntentHandler = {\n" +
        "   canHandle(handlerInput) { return (handlerInput.requestEnvelope.request.type === 'IntentRequest'\n" +
        "       || handlerInput.requestEnvelope.request.type === 'LaunchRequest')\n" +
        "       && handlerInput.requestEnvelope.request.intent.name === '"+ element.topic +"'; \n" +
        "   },\n" +
        "   handle(handlerInput) {\n" +
        "       let speechText = \""+ element.StageZerotext +"\" \n" +
        "       return new Promise((resolve, reject) => {\n" +
        "           handlerInput.attributesManager.getPersistentAttributes()\n" +
        "           .then((attributes) => {\n" +
        "               let topic = data.filter(el => el.topic === '"+ element.topic +"');\n" +
        "               let iteration = topic.find(el => el.iteration === attributes."+ element.topic +");\n" +
        "               switch( attributes.gameState ){\n" +
        "                   case 1:\n" +
        "                       speechText = iteration.StageOnetext;\n" +
        "                       break;\n" +
        "                   case 2:\n" +
        "                       speechText = iteration.StageTwotext;\n" +
        "                       break;\n" +
        "                   default: \n" +
        "                       speechText = iteration.StageZerotext;\n" +
        "               }\n" +
        "               if(attributes."+ element.topic +" < (topic.length-1)){ // set ++ if lower than max\n" +
        "                   attributes."+ element.topic +"++;\n" +
        "                   handlerInput.attributesManager.setPersistentAttributes(attributes);\n" +
        "                   return handlerInput.attributesManager.savePersistentAttributes();\n" +
        "               } else return true;\n" +
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
        "};\n"
    );
});

data.filter(el => el.iteration === 0).forEach(element => {
    console.log(element.topic + "IntentHandler,\n")
});

//generator template

// const buttsIntentHandler = {
//     canHandle(handlerInput) {
//         return ( handlerInput.requestEnvelope.request.type === 'IntentRequest'
//         || handlerInput.requestEnvelope.request.type === 'LaunchRequest' )
//         && handlerInput.requestEnvelope.request.intent.name === 'butts';
//     },
//     handle(handlerInput) {
//         let speechText = 'butts default';
//         return new Promise((resolve, reject) => {
//             handlerInput.attributesManager.getPersistentAttributes()
//             .then((attributes) => {
//                 let topic = data.filter(el => el.topic === 'butts');
//                 let iteration = topic.find(el => el.iteration === attributes.butts);
//                 switch( attributes.gameState ){
//                     case 1:
//                         speechText = iteration.StageOnetext;
//                         break;
//                     case 2:
//                         speechText = iteration.StageTwotext;
//                         break;
//                     default: 
//                         speechText = iteration.StageZerotext;
//                 }
//                 if(attributes.butts < (topic.length-1)){ // set ++ if lower than max
//                     attributes.butts++;
//                     handlerInput.attributesManager.setPersistentAttributes(attributes);
//                     return handlerInput.attributesManager.savePersistentAttributes();
//                 } else return true;
//             })
//             .then(() => {
//                 resolve(handlerInput.responseBuilder
//                 .speak(speechText)
//                 .withSimpleCard('butts', speechText)
//                 .withShouldEndSession(false)
//                 .getResponse());
//             })
//             .catch((error) => {
//                 reject(error);
//             });
//         });
//     }
// };