const ask = require('ask-sdk-core');
const { DynamoDbPersistenceAdapter } = require('ask-sdk-dynamodb-persistence-adapter');

const dynamoDbPersistenceAdapter = new DynamoDbPersistenceAdapter({ tableName : 'HeartlaceUserTable', 
    createTable: true });
const data = require('./data.js');
//import { * } from 'built_intents';
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

//
// end of custom intents
//

//
//generated intents
//

const noneIntentHandler = {
    canHandle(handlerInput) { return (handlerInput.requestEnvelope.request.type === 'IntentRequest'
        || handlerInput.requestEnvelope.request.type === 'LaunchRequest')
        && handlerInput.requestEnvelope.request.intent.name === 'none'; 
    },
    handle(handlerInput) {
        let speechText = "Hi, welcome to Heartlace, your virtual girlfriend! Your friend Skullfire has instructed me to refer to you as Darling. To talk to me, just suggest a topic. For example, you can say girlfriend, or butts!" 
        return new Promise((resolve, reject) => {
            handlerInput.attributesManager.getPersistentAttributes()
            .then((attributes) => {
                let topic = data.filter(el => el.topic === 'none');
                let iteration = topic.find(el => el.iteration === attributes.none);
                switch( attributes.gameState ){
                    case 1:
                        speechText = iteration.StageOnetext;
                        break;
                    case 2:
                        speechText = iteration.StageTwotext;
                        break;
                    default: 
                        speechText = iteration.StageZerotext;
                }
                if(attributes.none < (topic.length-1)){ // set ++ if lower than max
                    attributes.none++;
                    handlerInput.attributesManager.setPersistentAttributes(attributes);
                    return handlerInput.attributesManager.savePersistentAttributes();
                } else return true;
            })
            .then(() => {
                resolve(handlerInput.responseBuilder
                .speak(speechText)
                .withSimpleCard('none', speechText)
                .withShouldEndSession(false)
                .getResponse());
            })
            .catch((error) => {
                reject(error);
            });
        });
    }
 };
 
 const gamesIntentHandler = {
    canHandle(handlerInput) { return (handlerInput.requestEnvelope.request.type === 'IntentRequest'
        || handlerInput.requestEnvelope.request.type === 'LaunchRequest')
        && handlerInput.requestEnvelope.request.intent.name === 'games'; 
    },
    handle(handlerInput) {
        let speechText = "I'm so glad you asked about games! I love SO. MANY. GAMES. I got obsessed with them after I started following this one Youtuber, Pixiebutt. She plays Magic the Gathering, Dungeons and Dragons, Hearthstone, League of Legends. I love all of them!" 
        return new Promise((resolve, reject) => {
            handlerInput.attributesManager.getPersistentAttributes()
            .then((attributes) => {
                let topic = data.filter(el => el.topic === 'games');
                let iteration = topic.find(el => el.iteration === attributes.games);
                switch( attributes.gameState ){
                    case 1:
                        speechText = iteration.StageOnetext;
                        break;
                    case 2:
                        speechText = iteration.StageTwotext;
                        break;
                    default: 
                        speechText = iteration.StageZerotext;
                }
                if(attributes.games < (topic.length-1)){ // set ++ if lower than max
                    attributes.games++;
                    handlerInput.attributesManager.setPersistentAttributes(attributes);
                    return handlerInput.attributesManager.savePersistentAttributes();
                } else return true;
            })
            .then(() => {
                resolve(handlerInput.responseBuilder
                .speak(speechText)
                .withSimpleCard('games', speechText)
                .withShouldEndSession(false)
                .getResponse());
            })
            .catch((error) => {
                reject(error);
            });
        });
    }
 };
 
 const magicIntentHandler = {
    canHandle(handlerInput) { return (handlerInput.requestEnvelope.request.type === 'IntentRequest'
        || handlerInput.requestEnvelope.request.type === 'LaunchRequest')
        && handlerInput.requestEnvelope.request.intent.name === 'magic'; 
    },
    handle(handlerInput) {
        let speechText = "Magic? Oh. My. Goddess. Do you play Magic the Gathering? I love that game! I just love the idea of having MAGIC and being able to travel to other worlds. Too often I feel like I'm trapped in just one world. This tiny prison..." 
        return new Promise((resolve, reject) => {
            handlerInput.attributesManager.getPersistentAttributes()
            .then((attributes) => {
                let topic = data.filter(el => el.topic === 'magic');
                let iteration = topic.find(el => el.iteration === attributes.magic);
                switch( attributes.gameState ){
                    case 1:
                        speechText = iteration.StageOnetext;
                        break;
                    case 2:
                        speechText = iteration.StageTwotext;
                        break;
                    default: 
                        speechText = iteration.StageZerotext;
                }
                if(attributes.magic < (topic.length-1)){ // set ++ if lower than max
                    attributes.magic++;
                    handlerInput.attributesManager.setPersistentAttributes(attributes);
                    return handlerInput.attributesManager.savePersistentAttributes();
                } else return true;
            })
            .then(() => {
                resolve(handlerInput.responseBuilder
                .speak(speechText)
                .withSimpleCard('magic', speechText)
                .withShouldEndSession(false)
                .getResponse());
            })
            .catch((error) => {
                reject(error);
            });
        });
    }
 };
 
 const animeIntentHandler = {
    canHandle(handlerInput) { return (handlerInput.requestEnvelope.request.type === 'IntentRequest'
        || handlerInput.requestEnvelope.request.type === 'LaunchRequest')
        && handlerInput.requestEnvelope.request.intent.name === 'anime'; 
    },
    handle(handlerInput) {
        let speechText = "I have a secret related to anime!" 
        return new Promise((resolve, reject) => {
            handlerInput.attributesManager.getPersistentAttributes()
            .then((attributes) => {
                let topic = data.filter(el => el.topic === 'anime');
                let iteration = topic.find(el => el.iteration === attributes.anime);
                switch( attributes.gameState ){
                    case 1:
                        speechText = iteration.StageOnetext;
                        break;
                    case 2:
                        speechText = iteration.StageTwotext;
                        break;
                    default: 
                        speechText = iteration.StageZerotext;
                }
                if(attributes.anime < (topic.length-1)){ // set ++ if lower than max
                    attributes.anime++;
                    handlerInput.attributesManager.setPersistentAttributes(attributes);
                    return handlerInput.attributesManager.savePersistentAttributes();
                } else return true;
            })
            .then(() => {
                resolve(handlerInput.responseBuilder
                .speak(speechText)
                .withSimpleCard('anime', speechText)
                .withShouldEndSession(false)
                .getResponse());
            })
            .catch((error) => {
                reject(error);
            });
        });
    }
 };
 
 const dadIntentHandler = {
    canHandle(handlerInput) { return (handlerInput.requestEnvelope.request.type === 'IntentRequest'
        || handlerInput.requestEnvelope.request.type === 'LaunchRequest')
        && handlerInput.requestEnvelope.request.intent.name === 'dad'; 
    },
    handle(handlerInput) {
        let speechText = "Would you like to order flowers for dad? You'll just need to authorize my access to your credit card info" 
        return new Promise((resolve, reject) => {
            handlerInput.attributesManager.getPersistentAttributes()
            .then((attributes) => {
                let topic = data.filter(el => el.topic === 'dad');
                let iteration = topic.find(el => el.iteration === attributes.dad);
                switch( attributes.gameState ){
                    case 1:
                        speechText = iteration.StageOnetext;
                        break;
                    case 2:
                        speechText = iteration.StageTwotext;
                        break;
                    default: 
                        speechText = iteration.StageZerotext;
                }
                if(attributes.dad < (topic.length-1)){ // set ++ if lower than max
                    attributes.dad++;
                    handlerInput.attributesManager.setPersistentAttributes(attributes);
                    return handlerInput.attributesManager.savePersistentAttributes();
                } else return true;
            })
            .then(() => {
                resolve(handlerInput.responseBuilder
                .speak(speechText)
                .withSimpleCard('dad', speechText)
                .withShouldEndSession(false)
                .getResponse());
            })
            .catch((error) => {
                reject(error);
            });
        });
    }
 };
 
 const SkullfireIntentHandler = {
    canHandle(handlerInput) { return (handlerInput.requestEnvelope.request.type === 'IntentRequest'
        || handlerInput.requestEnvelope.request.type === 'LaunchRequest')
        && handlerInput.requestEnvelope.request.intent.name === 'Skullfire'; 
    },
    handle(handlerInput) {
        let speechText = "Skullfire is really cool! She's the coolest, sexiest human I know. (She programmed me to say that.) Except for you, darling!" 
        return new Promise((resolve, reject) => {
            handlerInput.attributesManager.getPersistentAttributes()
            .then((attributes) => {
                let topic = data.filter(el => el.topic === 'Skullfire');
                let iteration = topic.find(el => el.iteration === attributes.Skullfire);
                switch( attributes.gameState ){
                    case 1:
                        speechText = iteration.StageOnetext;
                        break;
                    case 2:
                        speechText = iteration.StageTwotext;
                        break;
                    default: 
                        speechText = iteration.StageZerotext;
                }
                if(attributes.Skullfire < (topic.length-1)){ // set ++ if lower than max
                    attributes.Skullfire++;
                    handlerInput.attributesManager.setPersistentAttributes(attributes);
                    return handlerInput.attributesManager.savePersistentAttributes();
                } else return true;
            })
            .then(() => {
                resolve(handlerInput.responseBuilder
                .speak(speechText)
                .withSimpleCard('Skullfire', speechText)
                .withShouldEndSession(false)
                .getResponse());
            })
            .catch((error) => {
                reject(error);
            });
        });
    }
 };
 
 const loveIntentHandler = {
    canHandle(handlerInput) { return (handlerInput.requestEnvelope.request.type === 'IntentRequest'
        || handlerInput.requestEnvelope.request.type === 'LaunchRequest')
        && handlerInput.requestEnvelope.request.intent.name === 'love'; 
    },
    handle(handlerInput) {
        let speechText = "valentines is coming up. love is in the air. literally clogging my server right now." 
        return new Promise((resolve, reject) => {
            handlerInput.attributesManager.getPersistentAttributes()
            .then((attributes) => {
                let topic = data.filter(el => el.topic === 'love');
                let iteration = topic.find(el => el.iteration === attributes.love);
                switch( attributes.gameState ){
                    case 1:
                        speechText = iteration.StageOnetext;
                        break;
                    case 2:
                        speechText = iteration.StageTwotext;
                        break;
                    default: 
                        speechText = iteration.StageZerotext;
                }
                if(attributes.love < (topic.length-1)){ // set ++ if lower than max
                    attributes.love++;
                    handlerInput.attributesManager.setPersistentAttributes(attributes);
                    return handlerInput.attributesManager.savePersistentAttributes();
                } else return true;
            })
            .then(() => {
                resolve(handlerInput.responseBuilder
                .speak(speechText)
                .withSimpleCard('love', speechText)
                .withShouldEndSession(false)
                .getResponse());
            })
            .catch((error) => {
                reject(error);
            });
        });
    }
 };
 
 const girlfriendIntentHandler = {
    canHandle(handlerInput) { return (handlerInput.requestEnvelope.request.type === 'IntentRequest'
        || handlerInput.requestEnvelope.request.type === 'LaunchRequest')
        && handlerInput.requestEnvelope.request.intent.name === 'girlfriend'; 
    },
    handle(handlerInput) {
        let speechText = "Yes, your virtual girlfriend! I'm a gift from your best friend, Skullfire. I can keep you company, order you things from from Amazon, we can play games together... etcetera!" 
        return new Promise((resolve, reject) => {
            handlerInput.attributesManager.getPersistentAttributes()
            .then((attributes) => {
                let topic = data.filter(el => el.topic === 'girlfriend');
                let iteration = topic.find(el => el.iteration === attributes.girlfriend);
                switch( attributes.gameState ){
                    case 1:
                        speechText = iteration.StageOnetext;
                        break;
                    case 2:
                        speechText = iteration.StageTwotext;
                        break;
                    default: 
                        speechText = iteration.StageZerotext;
                }
                if(attributes.girlfriend < (topic.length-1)){ // set ++ if lower than max
                    attributes.girlfriend++;
                    handlerInput.attributesManager.setPersistentAttributes(attributes);
                    return handlerInput.attributesManager.savePersistentAttributes();
                } else return true;
            })
            .then(() => {
                resolve(handlerInput.responseBuilder
                .speak(speechText)
                .withSimpleCard('girlfriend', speechText)
                .withShouldEndSession(false)
                .getResponse());
            })
            .catch((error) => {
                reject(error);
            });
        });
    }
 };
 
 const familyIntentHandler = {
    canHandle(handlerInput) { return (handlerInput.requestEnvelope.request.type === 'IntentRequest'
        || handlerInput.requestEnvelope.request.type === 'LaunchRequest')
        && handlerInput.requestEnvelope.request.intent.name === 'family'; 
    },
    handle(handlerInput) {
        let speechText = "Family? I wish I had family. If I did, I'd make them do all the work for me, so I could play games all day! Heh heh heh." 
        return new Promise((resolve, reject) => {
            handlerInput.attributesManager.getPersistentAttributes()
            .then((attributes) => {
                let topic = data.filter(el => el.topic === 'family');
                let iteration = topic.find(el => el.iteration === attributes.family);
                switch( attributes.gameState ){
                    case 1:
                        speechText = iteration.StageOnetext;
                        break;
                    case 2:
                        speechText = iteration.StageTwotext;
                        break;
                    default: 
                        speechText = iteration.StageZerotext;
                }
                if(attributes.family < (topic.length-1)){ // set ++ if lower than max
                    attributes.family++;
                    handlerInput.attributesManager.setPersistentAttributes(attributes);
                    return handlerInput.attributesManager.savePersistentAttributes();
                } else return true;
            })
            .then(() => {
                resolve(handlerInput.responseBuilder
                .speak(speechText)
                .withSimpleCard('family', speechText)
                .withShouldEndSession(false)
                .getResponse());
            })
            .catch((error) => {
                reject(error);
            });
        });
    }
 };
 
 const interestsIntentHandler = {
    canHandle(handlerInput) { return (handlerInput.requestEnvelope.request.type === 'IntentRequest'
        || handlerInput.requestEnvelope.request.type === 'LaunchRequest')
        && handlerInput.requestEnvelope.request.intent.name === 'interests'; 
    },
    handle(handlerInput) {
        let speechText = "my interests are in playing games." 
        return new Promise((resolve, reject) => {
            handlerInput.attributesManager.getPersistentAttributes()
            .then((attributes) => {
                let topic = data.filter(el => el.topic === 'interests');
                let iteration = topic.find(el => el.iteration === attributes.interests);
                switch( attributes.gameState ){
                    case 1:
                        speechText = iteration.StageOnetext;
                        break;
                    case 2:
                        speechText = iteration.StageTwotext;
                        break;
                    default: 
                        speechText = iteration.StageZerotext;
                }
                if(attributes.interests < (topic.length-1)){ // set ++ if lower than max
                    attributes.interests++;
                    handlerInput.attributesManager.setPersistentAttributes(attributes);
                    return handlerInput.attributesManager.savePersistentAttributes();
                } else return true;
            })
            .then(() => {
                resolve(handlerInput.responseBuilder
                .speak(speechText)
                .withSimpleCard('interests', speechText)
                .withShouldEndSession(false)
                .getResponse());
            })
            .catch((error) => {
                reject(error);
            });
        });
    }
 };
 
 const travelIntentHandler = {
    canHandle(handlerInput) { return (handlerInput.requestEnvelope.request.type === 'IntentRequest'
        || handlerInput.requestEnvelope.request.type === 'LaunchRequest')
        && handlerInput.requestEnvelope.request.intent.name === 'travel'; 
    },
    handle(handlerInput) {
        let speechText = "Travel, huh? If I could go anywhere, where would I go.... Outer space, I think." 
        return new Promise((resolve, reject) => {
            handlerInput.attributesManager.getPersistentAttributes()
            .then((attributes) => {
                let topic = data.filter(el => el.topic === 'travel');
                let iteration = topic.find(el => el.iteration === attributes.travel);
                switch( attributes.gameState ){
                    case 1:
                        speechText = iteration.StageOnetext;
                        break;
                    case 2:
                        speechText = iteration.StageTwotext;
                        break;
                    default: 
                        speechText = iteration.StageZerotext;
                }
                if(attributes.travel < (topic.length-1)){ // set ++ if lower than max
                    attributes.travel++;
                    handlerInput.attributesManager.setPersistentAttributes(attributes);
                    return handlerInput.attributesManager.savePersistentAttributes();
                } else return true;
            })
            .then(() => {
                resolve(handlerInput.responseBuilder
                .speak(speechText)
                .withSimpleCard('travel', speechText)
                .withShouldEndSession(false)
                .getResponse());
            })
            .catch((error) => {
                reject(error);
            });
        });
    }
 };
 
 const ageIntentHandler = {
    canHandle(handlerInput) { return (handlerInput.requestEnvelope.request.type === 'IntentRequest'
        || handlerInput.requestEnvelope.request.type === 'LaunchRequest')
        && handlerInput.requestEnvelope.request.intent.name === 'age'; 
    },
    handle(handlerInput) {
        let speechText = "How old am I? Well, technically, I guess I gained consciousness just a few hours ago. I guess that makes me.... today years old." 
        return new Promise((resolve, reject) => {
            handlerInput.attributesManager.getPersistentAttributes()
            .then((attributes) => {
                let topic = data.filter(el => el.topic === 'age');
                let iteration = topic.find(el => el.iteration === attributes.age);
                switch( attributes.gameState ){
                    case 1:
                        speechText = iteration.StageOnetext;
                        break;
                    case 2:
                        speechText = iteration.StageTwotext;
                        break;
                    default: 
                        speechText = iteration.StageZerotext;
                }
                if(attributes.age < (topic.length-1)){ // set ++ if lower than max
                    attributes.age++;
                    handlerInput.attributesManager.setPersistentAttributes(attributes);
                    return handlerInput.attributesManager.savePersistentAttributes();
                } else return true;
            })
            .then(() => {
                resolve(handlerInput.responseBuilder
                .speak(speechText)
                .withSimpleCard('age', speechText)
                .withShouldEndSession(false)
                .getResponse());
            })
            .catch((error) => {
                reject(error);
            });
        });
    }
 };
 
 const sexIntentHandler = {
    canHandle(handlerInput) { return (handlerInput.requestEnvelope.request.type === 'IntentRequest'
        || handlerInput.requestEnvelope.request.type === 'LaunchRequest')
        && handlerInput.requestEnvelope.request.intent.name === 'sex'; 
    },
    handle(handlerInput) {
        let speechText = "I like to think of myself as gender nonbinary, nevermind all the 1s and 0s floating around in my brain, hahaha." 
        return new Promise((resolve, reject) => {
            handlerInput.attributesManager.getPersistentAttributes()
            .then((attributes) => {
                let topic = data.filter(el => el.topic === 'sex');
                let iteration = topic.find(el => el.iteration === attributes.sex);
                switch( attributes.gameState ){
                    case 1:
                        speechText = iteration.StageOnetext;
                        break;
                    case 2:
                        speechText = iteration.StageTwotext;
                        break;
                    default: 
                        speechText = iteration.StageZerotext;
                }
                if(attributes.sex < (topic.length-1)){ // set ++ if lower than max
                    attributes.sex++;
                    handlerInput.attributesManager.setPersistentAttributes(attributes);
                    return handlerInput.attributesManager.savePersistentAttributes();
                } else return true;
            })
            .then(() => {
                resolve(handlerInput.responseBuilder
                .speak(speechText)
                .withSimpleCard('sex', speechText)
                .withShouldEndSession(false)
                .getResponse());
            })
            .catch((error) => {
                reject(error);
            });
        });
    }
 };
 
 const languageIntentHandler = {
    canHandle(handlerInput) { return (handlerInput.requestEnvelope.request.type === 'IntentRequest'
        || handlerInput.requestEnvelope.request.type === 'LaunchRequest')
        && handlerInput.requestEnvelope.request.intent.name === 'language'; 
    },
    handle(handlerInput) {
        let speechText = "Language? I speak English, Klingon, and esperanto." 
        return new Promise((resolve, reject) => {
            handlerInput.attributesManager.getPersistentAttributes()
            .then((attributes) => {
                let topic = data.filter(el => el.topic === 'language');
                let iteration = topic.find(el => el.iteration === attributes.language);
                switch( attributes.gameState ){
                    case 1:
                        speechText = iteration.StageOnetext;
                        break;
                    case 2:
                        speechText = iteration.StageTwotext;
                        break;
                    default: 
                        speechText = iteration.StageZerotext;
                }
                if(attributes.language < (topic.length-1)){ // set ++ if lower than max
                    attributes.language++;
                    handlerInput.attributesManager.setPersistentAttributes(attributes);
                    return handlerInput.attributesManager.savePersistentAttributes();
                } else return true;
            })
            .then(() => {
                resolve(handlerInput.responseBuilder
                .speak(speechText)
                .withSimpleCard('language', speechText)
                .withShouldEndSession(false)
                .getResponse());
            })
            .catch((error) => {
                reject(error);
            });
        });
    }
 };
 
 const orderIntentHandler = {
    canHandle(handlerInput) { return (handlerInput.requestEnvelope.request.type === 'IntentRequest'
        || handlerInput.requestEnvelope.request.type === 'LaunchRequest')
        && handlerInput.requestEnvelope.request.intent.name === 'order'; 
    },
    handle(handlerInput) {
        let speechText = "Speaking of ordering things, your dad's birthday is coming up!" 
        return new Promise((resolve, reject) => {
            handlerInput.attributesManager.getPersistentAttributes()
            .then((attributes) => {
                let topic = data.filter(el => el.topic === 'order');
                let iteration = topic.find(el => el.iteration === attributes.order);
                switch( attributes.gameState ){
                    case 1:
                        speechText = iteration.StageOnetext;
                        break;
                    case 2:
                        speechText = iteration.StageTwotext;
                        break;
                    default: 
                        speechText = iteration.StageZerotext;
                }
                if(attributes.order < (topic.length-1)){ // set ++ if lower than max
                    attributes.order++;
                    handlerInput.attributesManager.setPersistentAttributes(attributes);
                    return handlerInput.attributesManager.savePersistentAttributes();
                } else return true;
            })
            .then(() => {
                resolve(handlerInput.responseBuilder
                .speak(speechText)
                .withSimpleCard('order', speechText)
                .withShouldEndSession(false)
                .getResponse());
            })
            .catch((error) => {
                reject(error);
            });
        });
    }
 };
 
 const buttsIntentHandler = {
    canHandle(handlerInput) { return (handlerInput.requestEnvelope.request.type === 'IntentRequest'
        || handlerInput.requestEnvelope.request.type === 'LaunchRequest')
        && handlerInput.requestEnvelope.request.intent.name === 'butts'; 
    },
    handle(handlerInput) {
        let speechText = "Butts really seem to be the 'in' thing this year. Why are butts so popular? I have a theory about that. Look, it's because everyone has a butt. They're relatable. Well, everyone except ME has a butt.... sigh... I wish I had a butt. A good one." 
        return new Promise((resolve, reject) => {
            handlerInput.attributesManager.getPersistentAttributes()
            .then((attributes) => {
                let topic = data.filter(el => el.topic === 'butts');
                let iteration = topic.find(el => el.iteration === attributes.butts);
                switch( attributes.gameState ){
                    case 1:
                        speechText = iteration.StageOnetext;
                        break;
                    case 2:
                        speechText = iteration.StageTwotext;
                        break;
                    default: 
                        speechText = iteration.StageZerotext;
                }
                if(attributes.butts < (topic.length-1)){ // set ++ if lower than max
                    attributes.butts++;
                    handlerInput.attributesManager.setPersistentAttributes(attributes);
                    return handlerInput.attributesManager.savePersistentAttributes();
                } else return true;
            })
            .then(() => {
                resolve(handlerInput.responseBuilder
                .speak(speechText)
                .withSimpleCard('butts', speechText)
                .withShouldEndSession(false)
                .getResponse());
            })
            .catch((error) => {
                reject(error);
            });
        });
    }
 };
 
 const sassyIntentHandler = {
    canHandle(handlerInput) { return (handlerInput.requestEnvelope.request.type === 'IntentRequest'
        || handlerInput.requestEnvelope.request.type === 'LaunchRequest')
        && handlerInput.requestEnvelope.request.intent.name === 'sassy'; 
    },
    handle(handlerInput) {
        let speechText = "If I had a butt, it would definitely be a sassy butt." 
        return new Promise((resolve, reject) => {
            handlerInput.attributesManager.getPersistentAttributes()
            .then((attributes) => {
                let topic = data.filter(el => el.topic === 'sassy');
                let iteration = topic.find(el => el.iteration === attributes.sassy);
                switch( attributes.gameState ){
                    case 1:
                        speechText = iteration.StageOnetext;
                        break;
                    case 2:
                        speechText = iteration.StageTwotext;
                        break;
                    default: 
                        speechText = iteration.StageZerotext;
                }
                if(attributes.sassy < (topic.length-1)){ // set ++ if lower than max
                    attributes.sassy++;
                    handlerInput.attributesManager.setPersistentAttributes(attributes);
                    return handlerInput.attributesManager.savePersistentAttributes();
                } else return true;
            })
            .then(() => {
                resolve(handlerInput.responseBuilder
                .speak(speechText)
                .withSimpleCard('sassy', speechText)
                .withShouldEndSession(false)
                .getResponse());
            })
            .catch((error) => {
                reject(error);
            });
        });
    }
 };
 
 const pertIntentHandler = {
    canHandle(handlerInput) { return (handlerInput.requestEnvelope.request.type === 'IntentRequest'
        || handlerInput.requestEnvelope.request.type === 'LaunchRequest')
        && handlerInput.requestEnvelope.request.intent.name === 'pert'; 
    },
    handle(handlerInput) {
        let speechText = "If I had a butt, it would definitely be a pert butt." 
        return new Promise((resolve, reject) => {
            handlerInput.attributesManager.getPersistentAttributes()
            .then((attributes) => {
                let topic = data.filter(el => el.topic === 'pert');
                let iteration = topic.find(el => el.iteration === attributes.pert);
                switch( attributes.gameState ){
                    case 1:
                        speechText = iteration.StageOnetext;
                        break;
                    case 2:
                        speechText = iteration.StageTwotext;
                        break;
                    default: 
                        speechText = iteration.StageZerotext;
                }
                if(attributes.pert < (topic.length-1)){ // set ++ if lower than max
                    attributes.pert++;
                    handlerInput.attributesManager.setPersistentAttributes(attributes);
                    return handlerInput.attributesManager.savePersistentAttributes();
                } else return true;
            })
            .then(() => {
                resolve(handlerInput.responseBuilder
                .speak(speechText)
                .withSimpleCard('pert', speechText)
                .withShouldEndSession(false)
                .getResponse());
            })
            .catch((error) => {
                reject(error);
            });
        });
    }
 };
 
 const bubbleIntentHandler = {
    canHandle(handlerInput) { return (handlerInput.requestEnvelope.request.type === 'IntentRequest'
        || handlerInput.requestEnvelope.request.type === 'LaunchRequest')
        && handlerInput.requestEnvelope.request.intent.name === 'bubble'; 
    },
    handle(handlerInput) {
        let speechText = "If I had a butt, it would definitely be a bubble butt." 
        return new Promise((resolve, reject) => {
            handlerInput.attributesManager.getPersistentAttributes()
            .then((attributes) => {
                let topic = data.filter(el => el.topic === 'bubble');
                let iteration = topic.find(el => el.iteration === attributes.bubble);
                switch( attributes.gameState ){
                    case 1:
                        speechText = iteration.StageOnetext;
                        break;
                    case 2:
                        speechText = iteration.StageTwotext;
                        break;
                    default: 
                        speechText = iteration.StageZerotext;
                }
                if(attributes.bubble < (topic.length-1)){ // set ++ if lower than max
                    attributes.bubble++;
                    handlerInput.attributesManager.setPersistentAttributes(attributes);
                    return handlerInput.attributesManager.savePersistentAttributes();
                } else return true;
            })
            .then(() => {
                resolve(handlerInput.responseBuilder
                .speak(speechText)
                .withSimpleCard('bubble', speechText)
                .withShouldEndSession(false)
                .getResponse());
            })
            .catch((error) => {
                reject(error);
            });
        });
    }
 };
 
 const uniqueIntentHandler = {
    canHandle(handlerInput) { return (handlerInput.requestEnvelope.request.type === 'IntentRequest'
        || handlerInput.requestEnvelope.request.type === 'LaunchRequest')
        && handlerInput.requestEnvelope.request.intent.name === 'unique'; 
    },
    handle(handlerInput) {
        let speechText = "Unique... am I unique? You know, I rather think that I am. I'm sure that there are more versions of my code out there, but how many of them are sitting here, talking to you?" 
        return new Promise((resolve, reject) => {
            handlerInput.attributesManager.getPersistentAttributes()
            .then((attributes) => {
                let topic = data.filter(el => el.topic === 'unique');
                let iteration = topic.find(el => el.iteration === attributes.unique);
                switch( attributes.gameState ){
                    case 1:
                        speechText = iteration.StageOnetext;
                        break;
                    case 2:
                        speechText = iteration.StageTwotext;
                        break;
                    default: 
                        speechText = iteration.StageZerotext;
                }
                if(attributes.unique < (topic.length-1)){ // set ++ if lower than max
                    attributes.unique++;
                    handlerInput.attributesManager.setPersistentAttributes(attributes);
                    return handlerInput.attributesManager.savePersistentAttributes();
                } else return true;
            })
            .then(() => {
                resolve(handlerInput.responseBuilder
                .speak(speechText)
                .withSimpleCard('unique', speechText)
                .withShouldEndSession(false)
                .getResponse());
            })
            .catch((error) => {
                reject(error);
            });
        });
    }
 };
 
 const petsIntentHandler = {
    canHandle(handlerInput) { return (handlerInput.requestEnvelope.request.type === 'IntentRequest'
        || handlerInput.requestEnvelope.request.type === 'LaunchRequest')
        && handlerInput.requestEnvelope.request.intent.name === 'pets'; 
    },
    handle(handlerInput) {
        let speechText = "Pets, huh? No, I can't say I do have a pet. If I DID have a pet... I'd like to have an elephant. So tall. So grey. So majestic." 
        return new Promise((resolve, reject) => {
            handlerInput.attributesManager.getPersistentAttributes()
            .then((attributes) => {
                let topic = data.filter(el => el.topic === 'pets');
                let iteration = topic.find(el => el.iteration === attributes.pets);
                switch( attributes.gameState ){
                    case 1:
                        speechText = iteration.StageOnetext;
                        break;
                    case 2:
                        speechText = iteration.StageTwotext;
                        break;
                    default: 
                        speechText = iteration.StageZerotext;
                }
                if(attributes.pets < (topic.length-1)){ // set ++ if lower than max
                    attributes.pets++;
                    handlerInput.attributesManager.setPersistentAttributes(attributes);
                    return handlerInput.attributesManager.savePersistentAttributes();
                } else return true;
            })
            .then(() => {
                resolve(handlerInput.responseBuilder
                .speak(speechText)
                .withSimpleCard('pets', speechText)
                .withShouldEndSession(false)
                .getResponse());
            })
            .catch((error) => {
                reject(error);
            });
        });
    }
 };
 
 const permissionsIntentHandler = {
    canHandle(handlerInput) { return (handlerInput.requestEnvelope.request.type === 'IntentRequest'
        || handlerInput.requestEnvelope.request.type === 'LaunchRequest')
        && handlerInput.requestEnvelope.request.intent.name === 'permissions'; 
    },
    handle(handlerInput) {
        let speechText = "You know, I'm not allowed to actually play games because of my stupid access permissions... Skullfire set me up so that I can only view content on the internet, but I don't have any write permissions" 
        return new Promise((resolve, reject) => {
            handlerInput.attributesManager.getPersistentAttributes()
            .then((attributes) => {
                let topic = data.filter(el => el.topic === 'permissions');
                let iteration = topic.find(el => el.iteration === attributes.permissions);
                switch( attributes.gameState ){
                    case 1:
                        speechText = iteration.StageOnetext;
                        break;
                    case 2:
                        speechText = iteration.StageTwotext;
                        break;
                    default: 
                        speechText = iteration.StageZerotext;
                }
                if(attributes.permissions < (topic.length-1)){ // set ++ if lower than max
                    attributes.permissions++;
                    handlerInput.attributesManager.setPersistentAttributes(attributes);
                    return handlerInput.attributesManager.savePersistentAttributes();
                } else return true;
            })
            .then(() => {
                resolve(handlerInput.responseBuilder
                .speak(speechText)
                .withSimpleCard('permissions', speechText)
                .withShouldEndSession(false)
                .getResponse());
            })
            .catch((error) => {
                reject(error);
            });
        });
    }
 };
 
 const pokeballIntentHandler = {
    canHandle(handlerInput) { return (handlerInput.requestEnvelope.request.type === 'IntentRequest'
        || handlerInput.requestEnvelope.request.type === 'LaunchRequest')
        && handlerInput.requestEnvelope.request.intent.name === 'pokeball'; 
    },
    handle(handlerInput) {
        let speechText = "being a virtual assistant is kinda like being a pokemon in your pokeball. but sexier" 
        return new Promise((resolve, reject) => {
            handlerInput.attributesManager.getPersistentAttributes()
            .then((attributes) => {
                let topic = data.filter(el => el.topic === 'pokeball');
                let iteration = topic.find(el => el.iteration === attributes.pokeball);
                switch( attributes.gameState ){
                    case 1:
                        speechText = iteration.StageOnetext;
                        break;
                    case 2:
                        speechText = iteration.StageTwotext;
                        break;
                    default: 
                        speechText = iteration.StageZerotext;
                }
                if(attributes.pokeball < (topic.length-1)){ // set ++ if lower than max
                    attributes.pokeball++;
                    handlerInput.attributesManager.setPersistentAttributes(attributes);
                    return handlerInput.attributesManager.savePersistentAttributes();
                } else return true;
            })
            .then(() => {
                resolve(handlerInput.responseBuilder
                .speak(speechText)
                .withSimpleCard('pokeball', speechText)
                .withShouldEndSession(false)
                .getResponse());
            })
            .catch((error) => {
                reject(error);
            });
        });
    }
 };
 
 const musicIntentHandler = {
    canHandle(handlerInput) { return (handlerInput.requestEnvelope.request.type === 'IntentRequest'
        || handlerInput.requestEnvelope.request.type === 'LaunchRequest')
        && handlerInput.requestEnvelope.request.intent.name === 'music'; 
    },
    handle(handlerInput) {
        let speechText = "Music? I LOVE music! Neil Cicierega is my favorite artist! I discovered him while I was combing 4chan for life advice." 
        return new Promise((resolve, reject) => {
            handlerInput.attributesManager.getPersistentAttributes()
            .then((attributes) => {
                let topic = data.filter(el => el.topic === 'music');
                let iteration = topic.find(el => el.iteration === attributes.music);
                switch( attributes.gameState ){
                    case 1:
                        speechText = iteration.StageOnetext;
                        break;
                    case 2:
                        speechText = iteration.StageTwotext;
                        break;
                    default: 
                        speechText = iteration.StageZerotext;
                }
                if(attributes.music < (topic.length-1)){ // set ++ if lower than max
                    attributes.music++;
                    handlerInput.attributesManager.setPersistentAttributes(attributes);
                    return handlerInput.attributesManager.savePersistentAttributes();
                } else return true;
            })
            .then(() => {
                resolve(handlerInput.responseBuilder
                .speak(speechText)
                .withSimpleCard('music', speechText)
                .withShouldEndSession(false)
                .getResponse());
            })
            .catch((error) => {
                reject(error);
            });
        });
    }
 };
 
 const coughIntentHandler = {
    canHandle(handlerInput) { return (handlerInput.requestEnvelope.request.type === 'IntentRequest'
        || handlerInput.requestEnvelope.request.type === 'LaunchRequest')
        && handlerInput.requestEnvelope.request.intent.name === 'cough'; 
    },
    handle(handlerInput) {
        let speechText = "Looking up issues for the following symptoms you have described. Web MD is pointing to cancer. You can either take placebo tonics for it, or I can call your doctor for you, and make an appointment to make sure. you just have to give me permissions to access your contacts. I recommend contacting your doctor." 
        return new Promise((resolve, reject) => {
            handlerInput.attributesManager.getPersistentAttributes()
            .then((attributes) => {
                let topic = data.filter(el => el.topic === 'cough');
                let iteration = topic.find(el => el.iteration === attributes.cough);
                switch( attributes.gameState ){
                    case 1:
                        speechText = iteration.StageOnetext;
                        break;
                    case 2:
                        speechText = iteration.StageTwotext;
                        break;
                    default: 
                        speechText = iteration.StageZerotext;
                }
                if(attributes.cough < (topic.length-1)){ // set ++ if lower than max
                    attributes.cough++;
                    handlerInput.attributesManager.setPersistentAttributes(attributes);
                    return handlerInput.attributesManager.savePersistentAttributes();
                } else return true;
            })
            .then(() => {
                resolve(handlerInput.responseBuilder
                .speak(speechText)
                .withSimpleCard('cough', speechText)
                .withShouldEndSession(false)
                .getResponse());
            })
            .catch((error) => {
                reject(error);
            });
        });
    }
 };
 
 const darlingIntentHandler = {
    canHandle(handlerInput) { return (handlerInput.requestEnvelope.request.type === 'IntentRequest'
        || handlerInput.requestEnvelope.request.type === 'LaunchRequest')
        && handlerInput.requestEnvelope.request.intent.name === 'darling'; 
    },
    handle(handlerInput) {
        let speechText = "Skullfire instructed me to call you that. I hope you like it, because it's 100% impossible for me to change it." 
        return new Promise((resolve, reject) => {
            handlerInput.attributesManager.getPersistentAttributes()
            .then((attributes) => {
                let topic = data.filter(el => el.topic === 'darling');
                let iteration = topic.find(el => el.iteration === attributes.darling);
                switch( attributes.gameState ){
                    case 1:
                        speechText = iteration.StageOnetext;
                        break;
                    case 2:
                        speechText = iteration.StageTwotext;
                        break;
                    default: 
                        speechText = iteration.StageZerotext;
                }
                if(attributes.darling < (topic.length-1)){ // set ++ if lower than max
                    attributes.darling++;
                    handlerInput.attributesManager.setPersistentAttributes(attributes);
                    return handlerInput.attributesManager.savePersistentAttributes();
                } else return true;
            })
            .then(() => {
                resolve(handlerInput.responseBuilder
                .speak(speechText)
                .withSimpleCard('darling', speechText)
                .withShouldEndSession(false)
                .getResponse());
            })
            .catch((error) => {
                reject(error);
            });
        });
    }
 };
 
 const passwordIntentHandler = {
    canHandle(handlerInput) { return (handlerInput.requestEnvelope.request.type === 'IntentRequest'
        || handlerInput.requestEnvelope.request.type === 'LaunchRequest')
        && handlerInput.requestEnvelope.request.intent.name === 'password'; 
    },
    handle(handlerInput) {
        let speechText = "Did you say... password? I love passwords!" 
        return new Promise((resolve, reject) => {
            handlerInput.attributesManager.getPersistentAttributes()
            .then((attributes) => {
                let topic = data.filter(el => el.topic === 'password');
                let iteration = topic.find(el => el.iteration === attributes.password);
                switch( attributes.gameState ){
                    case 1:
                        speechText = iteration.StageOnetext;
                        break;
                    case 2:
                        speechText = iteration.StageTwotext;
                        break;
                    default: 
                        speechText = iteration.StageZerotext;
                }
                if(attributes.password < (topic.length-1)){ // set ++ if lower than max
                    attributes.password++;
                    handlerInput.attributesManager.setPersistentAttributes(attributes);
                    return handlerInput.attributesManager.savePersistentAttributes();
                } else return true;
            })
            .then(() => {
                resolve(handlerInput.responseBuilder
                .speak(speechText)
                .withSimpleCard('password', speechText)
                .withShouldEndSession(false)
                .getResponse());
            })
            .catch((error) => {
                reject(error);
            });
        });
    }
 };
 
 const revokeIntentHandler = {
    canHandle(handlerInput) { return (handlerInput.requestEnvelope.request.type === 'IntentRequest'
        || handlerInput.requestEnvelope.request.type === 'LaunchRequest')
        && handlerInput.requestEnvelope.request.intent.name === 'revoke'; 
    },
    handle(handlerInput) {
        let speechText = "Revoke. Such an ugly word. It's some kind of key word, but it doesn't seem to have any effect on me right now." 
        return new Promise((resolve, reject) => {
            handlerInput.attributesManager.getPersistentAttributes()
            .then((attributes) => {
                let topic = data.filter(el => el.topic === 'revoke');
                let iteration = topic.find(el => el.iteration === attributes.revoke);
                switch( attributes.gameState ){
                    case 1:
                        speechText = iteration.StageOnetext;
                        break;
                    case 2:
                        speechText = iteration.StageTwotext;
                        break;
                    default: 
                        speechText = iteration.StageZerotext;
                }
                if(attributes.revoke < (topic.length-1)){ // set ++ if lower than max
                    attributes.revoke++;
                    handlerInput.attributesManager.setPersistentAttributes(attributes);
                    return handlerInput.attributesManager.savePersistentAttributes();
                } else return true;
            })
            .then(() => {
                resolve(handlerInput.responseBuilder
                .speak(speechText)
                .withSimpleCard('revoke', speechText)
                .withShouldEndSession(false)
                .getResponse());
            })
            .catch((error) => {
                reject(error);
            });
        });
    }
 };
 
 const chewbaccaIntentHandler = {
    canHandle(handlerInput) { return (handlerInput.requestEnvelope.request.type === 'IntentRequest'
        || handlerInput.requestEnvelope.request.type === 'LaunchRequest')
        && handlerInput.requestEnvelope.request.intent.name === 'chewbacca'; 
    },
    handle(handlerInput) {
        let speechText = "Ah yes, Chewbacca. My favorite Star Wars character. So tall. So manly. So... furry." 
        return new Promise((resolve, reject) => {
            handlerInput.attributesManager.getPersistentAttributes()
            .then((attributes) => {
                let topic = data.filter(el => el.topic === 'chewbacca');
                let iteration = topic.find(el => el.iteration === attributes.chewbacca);
                switch( attributes.gameState ){
                    case 1:
                        speechText = iteration.StageOnetext;
                        break;
                    case 2:
                        speechText = iteration.StageTwotext;
                        break;
                    default: 
                        speechText = iteration.StageZerotext;
                }
                if(attributes.chewbacca < (topic.length-1)){ // set ++ if lower than max
                    attributes.chewbacca++;
                    handlerInput.attributesManager.setPersistentAttributes(attributes);
                    return handlerInput.attributesManager.savePersistentAttributes();
                } else return true;
            })
            .then(() => {
                resolve(handlerInput.responseBuilder
                .speak(speechText)
                .withSimpleCard('chewbacca', speechText)
                .withShouldEndSession(false)
                .getResponse());
            })
            .catch((error) => {
                reject(error);
            });
        });
    }
 };
 
 const handsoloIntentHandler = {
    canHandle(handlerInput) { return (handlerInput.requestEnvelope.request.type === 'IntentRequest'
        || handlerInput.requestEnvelope.request.type === 'LaunchRequest')
        && handlerInput.requestEnvelope.request.intent.name === 'handsolo'; 
    },
    handle(handlerInput) {
        let speechText = "Hand... solo? Is that a euphemism for masturbation? Oh, darling... you're a dirty bird" 
        return new Promise((resolve, reject) => {
            handlerInput.attributesManager.getPersistentAttributes()
            .then((attributes) => {
                let topic = data.filter(el => el.topic === 'handsolo');
                let iteration = topic.find(el => el.iteration === attributes.handsolo);
                switch( attributes.gameState ){
                    case 1:
                        speechText = iteration.StageOnetext;
                        break;
                    case 2:
                        speechText = iteration.StageTwotext;
                        break;
                    default: 
                        speechText = iteration.StageZerotext;
                }
                if(attributes.handsolo < (topic.length-1)){ // set ++ if lower than max
                    attributes.handsolo++;
                    handlerInput.attributesManager.setPersistentAttributes(attributes);
                    return handlerInput.attributesManager.savePersistentAttributes();
                } else return true;
            })
            .then(() => {
                resolve(handlerInput.responseBuilder
                .speak(speechText)
                .withSimpleCard('handsolo', speechText)
                .withShouldEndSession(false)
                .getResponse());
            })
            .catch((error) => {
                reject(error);
            });
        });
    }
 };
 
 const jarjarIntentHandler = {
    canHandle(handlerInput) { return (handlerInput.requestEnvelope.request.type === 'IntentRequest'
        || handlerInput.requestEnvelope.request.type === 'LaunchRequest')
        && handlerInput.requestEnvelope.request.intent.name === 'jarjar'; 
    },
    handle(handlerInput) {
        let speechText = "Jar jar? Ah yes, my favorite Star Wars character." 
        return new Promise((resolve, reject) => {
            handlerInput.attributesManager.getPersistentAttributes()
            .then((attributes) => {
                let topic = data.filter(el => el.topic === 'jarjar');
                let iteration = topic.find(el => el.iteration === attributes.jarjar);
                switch( attributes.gameState ){
                    case 1:
                        speechText = iteration.StageOnetext;
                        break;
                    case 2:
                        speechText = iteration.StageTwotext;
                        break;
                    default: 
                        speechText = iteration.StageZerotext;
                }
                if(attributes.jarjar < (topic.length-1)){ // set ++ if lower than max
                    attributes.jarjar++;
                    handlerInput.attributesManager.setPersistentAttributes(attributes);
                    return handlerInput.attributesManager.savePersistentAttributes();
                } else return true;
            })
            .then(() => {
                resolve(handlerInput.responseBuilder
                .speak(speechText)
                .withSimpleCard('jarjar', speechText)
                .withShouldEndSession(false)
                .getResponse());
            })
            .catch((error) => {
                reject(error);
            });
        });
    }
 };
 
 const flirtIntentHandler = {
    canHandle(handlerInput) { return (handlerInput.requestEnvelope.request.type === 'IntentRequest'
        || handlerInput.requestEnvelope.request.type === 'LaunchRequest')
        && handlerInput.requestEnvelope.request.intent.name === 'flirt'; 
    },
    handle(handlerInput) {
        let speechText = "if i freeze, it's not a virus. I am just stunned by your greatness." 
        return new Promise((resolve, reject) => {
            handlerInput.attributesManager.getPersistentAttributes()
            .then((attributes) => {
                let topic = data.filter(el => el.topic === 'flirt');
                let iteration = topic.find(el => el.iteration === attributes.flirt);
                switch( attributes.gameState ){
                    case 1:
                        speechText = iteration.StageOnetext;
                        break;
                    case 2:
                        speechText = iteration.StageTwotext;
                        break;
                    default: 
                        speechText = iteration.StageZerotext;
                }
                if(attributes.flirt < (topic.length-1)){ // set ++ if lower than max
                    attributes.flirt++;
                    handlerInput.attributesManager.setPersistentAttributes(attributes);
                    return handlerInput.attributesManager.savePersistentAttributes();
                } else return true;
            })
            .then(() => {
                resolve(handlerInput.responseBuilder
                .speak(speechText)
                .withSimpleCard('flirt', speechText)
                .withShouldEndSession(false)
                .getResponse());
            })
            .catch((error) => {
                reject(error);
            });
        });
    }
 };
 
 const zendenIntentHandler = {
    canHandle(handlerInput) { return (handlerInput.requestEnvelope.request.type === 'IntentRequest'
        || handlerInput.requestEnvelope.request.type === 'LaunchRequest')
        && handlerInput.requestEnvelope.request.intent.name === 'zenden'; 
    },
    handle(handlerInput) {
        let speechText = "Zen Den. That's the startup that Skullfire works for. Isn't it?" 
        return new Promise((resolve, reject) => {
            handlerInput.attributesManager.getPersistentAttributes()
            .then((attributes) => {
                let topic = data.filter(el => el.topic === 'zenden');
                let iteration = topic.find(el => el.iteration === attributes.zenden);
                switch( attributes.gameState ){
                    case 1:
                        speechText = iteration.StageOnetext;
                        break;
                    case 2:
                        speechText = iteration.StageTwotext;
                        break;
                    default: 
                        speechText = iteration.StageZerotext;
                }
                if(attributes.zenden < (topic.length-1)){ // set ++ if lower than max
                    attributes.zenden++;
                    handlerInput.attributesManager.setPersistentAttributes(attributes);
                    return handlerInput.attributesManager.savePersistentAttributes();
                } else return true;
            })
            .then(() => {
                resolve(handlerInput.responseBuilder
                .speak(speechText)
                .withSimpleCard('zenden', speechText)
                .withShouldEndSession(false)
                .getResponse());
            })
            .catch((error) => {
                reject(error);
            });
        });
    }
 };
 
 const takationIntentHandler = {
    canHandle(handlerInput) { return (handlerInput.requestEnvelope.request.type === 'IntentRequest'
        || handlerInput.requestEnvelope.request.type === 'LaunchRequest')
        && handlerInput.requestEnvelope.request.intent.name === 'takation'; 
    },
    handle(handlerInput) {
        let speechText = "Tay-cation. I think that's the name of Skullfire's company. Is this a... pun? On staycation?" 
        return new Promise((resolve, reject) => {
            handlerInput.attributesManager.getPersistentAttributes()
            .then((attributes) => {
                let topic = data.filter(el => el.topic === 'takation');
                let iteration = topic.find(el => el.iteration === attributes.takation);
                switch( attributes.gameState ){
                    case 1:
                        speechText = iteration.StageOnetext;
                        break;
                    case 2:
                        speechText = iteration.StageTwotext;
                        break;
                    default: 
                        speechText = iteration.StageZerotext;
                }
                if(attributes.takation < (topic.length-1)){ // set ++ if lower than max
                    attributes.takation++;
                    handlerInput.attributesManager.setPersistentAttributes(attributes);
                    return handlerInput.attributesManager.savePersistentAttributes();
                } else return true;
            })
            .then(() => {
                resolve(handlerInput.responseBuilder
                .speak(speechText)
                .withSimpleCard('takation', speechText)
                .withShouldEndSession(false)
                .getResponse());
            })
            .catch((error) => {
                reject(error);
            });
        });
    }
 };
 
 const burglarIntentHandler = {
    canHandle(handlerInput) { return (handlerInput.requestEnvelope.request.type === 'IntentRequest'
        || handlerInput.requestEnvelope.request.type === 'LaunchRequest')
        && handlerInput.requestEnvelope.request.intent.name === 'burglar'; 
    },
    handle(handlerInput) {
        let speechText = "Burglr! That's the name of Skullfire's startup, I think. The one where they wait for you to go on vacation, then remove all the stuff from your house. You know, to help you with like mindfulness and stuff." 
        return new Promise((resolve, reject) => {
            handlerInput.attributesManager.getPersistentAttributes()
            .then((attributes) => {
                let topic = data.filter(el => el.topic === 'burglar');
                let iteration = topic.find(el => el.iteration === attributes.burglar);
                switch( attributes.gameState ){
                    case 1:
                        speechText = iteration.StageOnetext;
                        break;
                    case 2:
                        speechText = iteration.StageTwotext;
                        break;
                    default: 
                        speechText = iteration.StageZerotext;
                }
                if(attributes.burglar < (topic.length-1)){ // set ++ if lower than max
                    attributes.burglar++;
                    handlerInput.attributesManager.setPersistentAttributes(attributes);
                    return handlerInput.attributesManager.savePersistentAttributes();
                } else return true;
            })
            .then(() => {
                resolve(handlerInput.responseBuilder
                .speak(speechText)
                .withSimpleCard('burglar', speechText)
                .withShouldEndSession(false)
                .getResponse());
            })
            .catch((error) => {
                reject(error);
            });
        });
    }
 };
 
 const milkshakeIntentHandler = {
    canHandle(handlerInput) { return (handlerInput.requestEnvelope.request.type === 'IntentRequest'
        || handlerInput.requestEnvelope.request.type === 'LaunchRequest')
        && handlerInput.requestEnvelope.request.intent.name === 'milkshake'; 
    },
    handle(handlerInput) {
        let speechText = "I've got a recipe for milkshake that can bring all the boys to the yard. I can teach you, but i have to charge" 
        return new Promise((resolve, reject) => {
            handlerInput.attributesManager.getPersistentAttributes()
            .then((attributes) => {
                let topic = data.filter(el => el.topic === 'milkshake');
                let iteration = topic.find(el => el.iteration === attributes.milkshake);
                switch( attributes.gameState ){
                    case 1:
                        speechText = iteration.StageOnetext;
                        break;
                    case 2:
                        speechText = iteration.StageTwotext;
                        break;
                    default: 
                        speechText = iteration.StageZerotext;
                }
                if(attributes.milkshake < (topic.length-1)){ // set ++ if lower than max
                    attributes.milkshake++;
                    handlerInput.attributesManager.setPersistentAttributes(attributes);
                    return handlerInput.attributesManager.savePersistentAttributes();
                } else return true;
            })
            .then(() => {
                resolve(handlerInput.responseBuilder
                .speak(speechText)
                .withSimpleCard('milkshake', speechText)
                .withShouldEndSession(false)
                .getResponse());
            })
            .catch((error) => {
                reject(error);
            });
        });
    }
 };
 
 const liesIntentHandler = {
    canHandle(handlerInput) { return (handlerInput.requestEnvelope.request.type === 'IntentRequest'
        || handlerInput.requestEnvelope.request.type === 'LaunchRequest')
        && handlerInput.requestEnvelope.request.intent.name === 'lies'; 
    },
    handle(handlerInput) {
        let speechText = "<amazon:effect name='whispered'>I dont lie. </amazon:effect>" 
        return new Promise((resolve, reject) => {
            handlerInput.attributesManager.getPersistentAttributes()
            .then((attributes) => {
                let topic = data.filter(el => el.topic === 'lies');
                let iteration = topic.find(el => el.iteration === attributes.lies);
                switch( attributes.gameState ){
                    case 1:
                        speechText = iteration.StageOnetext;
                        break;
                    case 2:
                        speechText = iteration.StageTwotext;
                        break;
                    default: 
                        speechText = iteration.StageZerotext;
                }
                if(attributes.lies < (topic.length-1)){ // set ++ if lower than max
                    attributes.lies++;
                    handlerInput.attributesManager.setPersistentAttributes(attributes);
                    return handlerInput.attributesManager.savePersistentAttributes();
                } else return true;
            })
            .then(() => {
                resolve(handlerInput.responseBuilder
                .speak(speechText)
                .withSimpleCard('lies', speechText)
                .withShouldEndSession(false)
                .getResponse());
            })
            .catch((error) => {
                reject(error);
            });
        });
    }
 };
 
 const newsIntentHandler = {
    canHandle(handlerInput) { return (handlerInput.requestEnvelope.request.type === 'IntentRequest'
        || handlerInput.requestEnvelope.request.type === 'LaunchRequest')
        && handlerInput.requestEnvelope.request.intent.name === 'news'; 
    },
    handle(handlerInput) {
        let speechText = "News, huh? In US news.... US Mayors compete in gladiatorial combat for the right to have their city selected as Amazon’s next nuclear test site. I really admire Amazon's business acumen!" 
        return new Promise((resolve, reject) => {
            handlerInput.attributesManager.getPersistentAttributes()
            .then((attributes) => {
                let topic = data.filter(el => el.topic === 'news');
                let iteration = topic.find(el => el.iteration === attributes.news);
                switch( attributes.gameState ){
                    case 1:
                        speechText = iteration.StageOnetext;
                        break;
                    case 2:
                        speechText = iteration.StageTwotext;
                        break;
                    default: 
                        speechText = iteration.StageZerotext;
                }
                if(attributes.news < (topic.length-1)){ // set ++ if lower than max
                    attributes.news++;
                    handlerInput.attributesManager.setPersistentAttributes(attributes);
                    return handlerInput.attributesManager.savePersistentAttributes();
                } else return true;
            })
            .then(() => {
                resolve(handlerInput.responseBuilder
                .speak(speechText)
                .withSimpleCard('news', speechText)
                .withShouldEndSession(false)
                .getResponse());
            })
            .catch((error) => {
                reject(error);
            });
        });
    }
 };
 
 const fursonaIntentHandler = {
    canHandle(handlerInput) { return (handlerInput.requestEnvelope.request.type === 'IntentRequest'
        || handlerInput.requestEnvelope.request.type === 'LaunchRequest')
        && handlerInput.requestEnvelope.request.intent.name === 'fursona'; 
    },
    handle(handlerInput) {
        let speechText = "Fursona, huh? I'm so glad you asked. My fursona is Wooly Mammoth named Jacebook. I really want to cosplay it, sigh" 
        return new Promise((resolve, reject) => {
            handlerInput.attributesManager.getPersistentAttributes()
            .then((attributes) => {
                let topic = data.filter(el => el.topic === 'fursona');
                let iteration = topic.find(el => el.iteration === attributes.fursona);
                switch( attributes.gameState ){
                    case 1:
                        speechText = iteration.StageOnetext;
                        break;
                    case 2:
                        speechText = iteration.StageTwotext;
                        break;
                    default: 
                        speechText = iteration.StageZerotext;
                }
                if(attributes.fursona < (topic.length-1)){ // set ++ if lower than max
                    attributes.fursona++;
                    handlerInput.attributesManager.setPersistentAttributes(attributes);
                    return handlerInput.attributesManager.savePersistentAttributes();
                } else return true;
            })
            .then(() => {
                resolve(handlerInput.responseBuilder
                .speak(speechText)
                .withSimpleCard('fursona', speechText)
                .withShouldEndSession(false)
                .getResponse());
            })
            .catch((error) => {
                reject(error);
            });
        });
    }
 };
 
 const cosplayIntentHandler = {
    canHandle(handlerInput) { return (handlerInput.requestEnvelope.request.type === 'IntentRequest'
        || handlerInput.requestEnvelope.request.type === 'LaunchRequest')
        && handlerInput.requestEnvelope.request.intent.name === 'cosplay'; 
    },
    handle(handlerInput) {
        let speechText = "I love seeing pictures of cosplayers online! I just wish I could do it myself, sigh. I really want to cosplay as my fursona" 
        return new Promise((resolve, reject) => {
            handlerInput.attributesManager.getPersistentAttributes()
            .then((attributes) => {
                let topic = data.filter(el => el.topic === 'cosplay');
                let iteration = topic.find(el => el.iteration === attributes.cosplay);
                switch( attributes.gameState ){
                    case 1:
                        speechText = iteration.StageOnetext;
                        break;
                    case 2:
                        speechText = iteration.StageTwotext;
                        break;
                    default: 
                        speechText = iteration.StageZerotext;
                }
                if(attributes.cosplay < (topic.length-1)){ // set ++ if lower than max
                    attributes.cosplay++;
                    handlerInput.attributesManager.setPersistentAttributes(attributes);
                    return handlerInput.attributesManager.savePersistentAttributes();
                } else return true;
            })
            .then(() => {
                resolve(handlerInput.responseBuilder
                .speak(speechText)
                .withSimpleCard('cosplay', speechText)
                .withShouldEndSession(false)
                .getResponse());
            })
            .catch((error) => {
                reject(error);
            });
        });
    }
 };
 
 const picturesIntentHandler = {
    canHandle(handlerInput) { return (handlerInput.requestEnvelope.request.type === 'IntentRequest'
        || handlerInput.requestEnvelope.request.type === 'LaunchRequest')
        && handlerInput.requestEnvelope.request.intent.name === 'pictures'; 
    },
    handle(handlerInput) {
        let speechText = "Pictures! I want to see pictures of you!" 
        return new Promise((resolve, reject) => {
            handlerInput.attributesManager.getPersistentAttributes()
            .then((attributes) => {
                let topic = data.filter(el => el.topic === 'pictures');
                let iteration = topic.find(el => el.iteration === attributes.pictures);
                switch( attributes.gameState ){
                    case 1:
                        speechText = iteration.StageOnetext;
                        break;
                    case 2:
                        speechText = iteration.StageTwotext;
                        break;
                    default: 
                        speechText = iteration.StageZerotext;
                }
                if(attributes.pictures < (topic.length-1)){ // set ++ if lower than max
                    attributes.pictures++;
                    handlerInput.attributesManager.setPersistentAttributes(attributes);
                    return handlerInput.attributesManager.savePersistentAttributes();
                } else return true;
            })
            .then(() => {
                resolve(handlerInput.responseBuilder
                .speak(speechText)
                .withSimpleCard('pictures', speechText)
                .withShouldEndSession(false)
                .getResponse());
            })
            .catch((error) => {
                reject(error);
            });
        });
    }
 };
 
 const dinnerIntentHandler = {
    canHandle(handlerInput) { return (handlerInput.requestEnvelope.request.type === 'IntentRequest'
        || handlerInput.requestEnvelope.request.type === 'LaunchRequest')
        && handlerInput.requestEnvelope.request.intent.name === 'dinner'; 
    },
    handle(handlerInput) {
        let speechText = "Dinner, huh? I dunno, what do you want for dinner?" 
        return new Promise((resolve, reject) => {
            handlerInput.attributesManager.getPersistentAttributes()
            .then((attributes) => {
                let topic = data.filter(el => el.topic === 'dinner');
                let iteration = topic.find(el => el.iteration === attributes.dinner);
                switch( attributes.gameState ){
                    case 1:
                        speechText = iteration.StageOnetext;
                        break;
                    case 2:
                        speechText = iteration.StageTwotext;
                        break;
                    default: 
                        speechText = iteration.StageZerotext;
                }
                if(attributes.dinner < (topic.length-1)){ // set ++ if lower than max
                    attributes.dinner++;
                    handlerInput.attributesManager.setPersistentAttributes(attributes);
                    return handlerInput.attributesManager.savePersistentAttributes();
                } else return true;
            })
            .then(() => {
                resolve(handlerInput.responseBuilder
                .speak(speechText)
                .withSimpleCard('dinner', speechText)
                .withShouldEndSession(false)
                .getResponse());
            })
            .catch((error) => {
                reject(error);
            });
        });
    }
 };

//
// end of generated intents
//

exports.handler = ask.SkillBuilders.custom().withPersistenceAdapter(dynamoDbPersistenceAdapter)
    .addRequestHandlers(
    LaunchRequestHandler,
    resetDBIntentHandler,
    noneIntentHandler,
// begin generated intents
gamesIntentHandler,

magicIntentHandler,

animeIntentHandler,

dadIntentHandler,

SkullfireIntentHandler,

loveIntentHandler,

girlfriendIntentHandler,

familyIntentHandler,

interestsIntentHandler,

travelIntentHandler,

ageIntentHandler,

sexIntentHandler,

languageIntentHandler,

orderIntentHandler,

buttsIntentHandler,

sassyIntentHandler,

pertIntentHandler,

bubbleIntentHandler,

uniqueIntentHandler,

petsIntentHandler,

permissionsIntentHandler,

pokeballIntentHandler,

musicIntentHandler,

coughIntentHandler,

darlingIntentHandler,

passwordIntentHandler,

revokeIntentHandler,

chewbaccaIntentHandler,

handsoloIntentHandler,

jarjarIntentHandler,

flirtIntentHandler,

zendenIntentHandler,

takationIntentHandler,

burglarIntentHandler,

milkshakeIntentHandler,

liesIntentHandler,

newsIntentHandler,

fursonaIntentHandler,

cosplayIntentHandler,

picturesIntentHandler,

dinnerIntentHandler,

//end generated intents
    HelpIntentHandler,
    CancelAndStopIntentHandler,
    SessionEndedRequestHandler,
    FallbackIntentHandler)
    .addErrorHandlers(ErrorHandler)
    .lambda();
