const ask = require('ask-sdk-core');
const { DynamoDbPersistenceAdapter } = require('ask-sdk-dynamodb-persistence-adapter');

const dynamoDbPersistenceAdapter = new DynamoDbPersistenceAdapter({ tableName : 'HeartlaceUserTable', 
    createTable: true });
const data = require('./data_Topics.json');
const questionData = require('./data_Questions.json');

const generated = require('./built_intents.js');

//Required intents
const LaunchRequestHandler = {
    canHandle(handlerInput) {
      return handlerInput.requestEnvelope.request.type === 'LaunchRequest';
    },
    handle(handlerInput) {
      const speechText = 'Hi, welcome to Heartlace, your virtual girlfriend!' + 
      'Your friend Skullfire has instructed me to refer to you as "Darling".' +
      'To talk to me, just suggest a topic. For example, you can say "Alexa,' +
      ' ask heartlace girlfriend", or "Alexa, ask heartlace butts"!';
  
      return new Promise((resolve, reject) => {
        handlerInput.attributesManager.getPersistentAttributes()
          .then((attributes) => {
            if( Object.keys(attributes).length === 0 && attributes.constructor === Object ){ // initialize db
                data.forEach(element => {
                    attributes[element.topic] = 0;
                });
                attributes.gameState = 0;
                handlerInput.attributesManager.setPersistentAttributes(attributes);
                return handlerInput.attributesManager.savePersistentAttributes();
            }
            attributes.questionState = 0;
            attributes.question = "";
          })
          .then(() => {
            resolve(handlerInput.responseBuilder
            .speak(speechText)
            .withSimpleCard('Heartlace', speechText)
            .withShouldEndSession(false)
            .getResponse());
          })
          .catch((error) => {
            reject(error);
          });
      });
    }
  };

const FallbackIntentHandler = {
    canHandle(handlerInput) {
        return handlerInput.requestEnvelope.request.type === 'IntentRequest'
        && handlerInput.requestEnvelope.request.intent.name === 'AMAZON.FallbackIntent';
    },
    handle(handlerInput) {
        const speechText = 'This is the fallback intent';

        return handlerInput.responseBuilder
        .speak(speechText)
        .reprompt(speechText)
        .withSimpleCard('Fallback', speechText)
        .getResponse();
    }
};

const HelpIntentHandler = {
    canHandle(handlerInput) {
        return handlerInput.requestEnvelope.request.type === 'IntentRequest'
        && handlerInput.requestEnvelope.request.intent.name === 'AMAZON.HelpIntent';
    },
    handle(handlerInput) {
        const speechText = 'You can say hello to me!';

        return handlerInput.responseBuilder
        .speak(speechText)
        .reprompt(speechText)
        .withSimpleCard('Hello World', speechText)
        .getResponse();
    }
};

const CancelAndStopIntentHandler = {
    canHandle(handlerInput) {
        return handlerInput.requestEnvelope.request.type === 'IntentRequest'
        && (handlerInput.requestEnvelope.request.intent.name === 'AMAZON.CancelIntent'
            || handlerInput.requestEnvelope.request.intent.name === 'AMAZON.StopIntent');
    },
    handle(handlerInput) {
        const speechText = 'Goodbye!';

        return handlerInput.responseBuilder
        .speak(speechText)
        .withSimpleCard('Hello World', speechText)
        .getResponse();
    }
};

const SessionEndedRequestHandler = {
    canHandle(handlerInput) {
        return handlerInput.requestEnvelope.request.type === 'SessionEndedRequest';
    },
    handle(handlerInput) {
        //any cleanup logic goes here
        return handlerInput.responseBuilder.getResponse();
    }
};

const ErrorHandler = {
    canHandle() {
        return true;
    },
    handle(handlerInput, error) {
        console.log(`Error handled: ${error.message}`);

        return handlerInput.responseBuilder
        .speak('Sorry, I can\'t understand the command. Please say again.')
        .reprompt('Sorry, I can\'t understand the command. Please say again.')
        .getResponse();
    },
};

//
// end of required intents
//

//
// custom intents
//

//reset Dynamo DB persistence
const resetDBIntentHandler = {
    canHandle(handlerInput) {
        return ( handlerInput.requestEnvelope.request.type === 'IntentRequest'
        || handlerInput.requestEnvelope.request.type === 'LaunchRequest' )
        && handlerInput.requestEnvelope.request.intent.name === 'database';
    },
    handle(handlerInput) {
        return new Promise((resolve, reject) => {
            handlerInput.attributesManager.getPersistentAttributes()
              .then((attributes) => {
                data.forEach(element => {
                    attributes[element.topic] = 0;
                });

                attributes.gameState = 0;
                attributes.questionState = 0;
                attributes.question = "";

                handlerInput.attributesManager.setPersistentAttributes(attributes);
                return handlerInput.attributesManager.savePersistentAttributes();
              })
              .then(() => {
                resolve(handlerInput.responseBuilder
                .speak("database reset")
                .withSimpleCard('db reset', "database reset")
                .withShouldEndSession(true)
                .getResponse());
              })
              .catch((error) => {
                reject(error);
              });
          });
    }
}

const YesIntentHandler = {
    canHandle(handlerInput) {
        return new Promise((resolve, reject) => {
            handlerInput.attributesManager.getPersistentAttributes()
            .then((attributes) => {
                resolve( ( handlerInput.requestEnvelope.request.type === 'IntentRequest'
                || handlerInput.requestEnvelope.request.type === 'LaunchRequest' )
                && handlerInput.requestEnvelope.request.intent.name === 'yes'
                && attributes.questionState === 1);
            })
            .catch((error) => {
                reject(error);
            });
        });
    },
    handle(handlerInput) {
        return new Promise((resolve, reject) => {
            let speakText = "yes";
            handlerInput.attributesManager.getPersistentAttributes()
              .then((attributes) => {
                speakText = questionData.find(el => el['q-id'] === attributes.question)['q-text'];
                attributes.questionState = 0;
                attributes.question = "";
                handlerInput.attributesManager.setPersistentAttributes(attributes);
                return handlerInput.attributesManager.savePersistentAttributes();
              })
              .then(() => {
                resolve(handlerInput.responseBuilder
                .speak(speakText)
                .withSimpleCard('yes', "yes")
                .withShouldEndSession(true)
                .getResponse());
              })
              .catch((error) => {
                reject(error);
              });
          });
    }
}

const NoIntentHandler = {
    canHandle(handlerInput) {
        return new Promise((resolve, reject) => {
            handlerInput.attributesManager.getPersistentAttributes()
            .then((attributes) => {
                resolve( ( handlerInput.requestEnvelope.request.type === 'IntentRequest'
                || handlerInput.requestEnvelope.request.type === 'LaunchRequest' )
                && handlerInput.requestEnvelope.request.intent.name === 'no'
                && attributes.questionState === 1);
            })
            .catch((error) => {
                reject(error);
            });
        });
    },
    handle(handlerInput) {
        return new Promise((resolve, reject) => {
            let speakText = "no";
            handlerInput.attributesManager.getPersistentAttributes()
              .then((attributes) => {
                speakText = questionData.find(el => el['q-id'] === attributes.question)['q-text'];
                attributes.questionState = 0;
                attributes.question = "";
                handlerInput.attributesManager.setPersistentAttributes(attributes);
                return handlerInput.attributesManager.savePersistentAttributes();
              })
              .then(() => {
                resolve(handlerInput.responseBuilder
                .speak(speakText)
                .withSimpleCard('no', "no")
                .withShouldEndSession(true)
                .getResponse());
              })
              .catch((error) => {
                reject(error);
              });
          });
    }
}

//
// end of custom intents
//

console.log(generated.generatedIntentHandlers);

exports.handler = ask.SkillBuilders.custom().withPersistenceAdapter(dynamoDbPersistenceAdapter)
    .addRequestHandlers(
    LaunchRequestHandler,
    resetDBIntentHandler,
    YesIntentHandler,
    NoIntentHandler,
// begin generated intents
generated.noneIntentHandler,
generated.gamesIntentHandler,
generated.magicIntentHandler,
generated.animeIntentHandler,
generated.dadIntentHandler,
generated.SkullfireIntentHandler,
generated.loveIntentHandler,
generated.girlfriendIntentHandler,
generated.familyIntentHandler,
generated.interestsIntentHandler,
generated.travelIntentHandler,
generated.ageIntentHandler,
generated.sexIntentHandler,
generated.languageIntentHandler,
generated.orderIntentHandler,
generated.buttsIntentHandler,
generated.sassyIntentHandler,
generated.pertIntentHandler,
generated.bubbleIntentHandler,
generated.uniqueIntentHandler,
generated.petsIntentHandler,
generated.permissionsIntentHandler,
generated.pokeballIntentHandler,
generated.musicIntentHandler,
generated.coughIntentHandler,
generated.darlingIntentHandler,
generated.passwordIntentHandler,
generated.revokeIntentHandler,
generated.chewbaccaIntentHandler,
generated.handsoloIntentHandler,
generated.jarjarIntentHandler,
generated.flirtIntentHandler,
generated.zendenIntentHandler,
generated.takationIntentHandler,
generated.burglarIntentHandler,
generated.milkshakeIntentHandler,
generated.liesIntentHandler,
generated.newsIntentHandler,
generated.fursonaIntentHandler,
generated.cosplayIntentHandler,
generated.picturesIntentHandler,
generated.dinnerIntentHandler,
generated.pokemonIntentHandler,
generated.ghostsIntentHandler,
generated.goalsIntentHandler,
generated.cageIntentHandler,
generated.voicemailIntentHandler,
generated.recipeIntentHandler,
generated.mathIntentHandler,
generated.bouncyIntentHandler,
generated.voluptuousIntentHandler,
generated.demureIntentHandler,
//end generated intents
    HelpIntentHandler,
    CancelAndStopIntentHandler,
    SessionEndedRequestHandler,
    FallbackIntentHandler)
    .addErrorHandlers(ErrorHandler)
    .lambda();
