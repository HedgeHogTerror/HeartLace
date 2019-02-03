const data = require('./data_Topics.json');

const questionData = require('./data_Questions.json');

// This is generated from build_intents.js
 exports.noneIntentHandler = {
   canHandle(handlerInput) { return new Promise((resolve, reject) => {
       handlerInput.attributesManager.getPersistentAttributes()
           .then((attributes) => {
               resolve( ( handlerInput.requestEnvelope.request.type === 'IntentRequest'
               || handlerInput.requestEnvelope.request.type === 'LaunchRequest')
               && handlerInput.requestEnvelope.request.intent.name === 'none' 
               && attributes.questionState === 0);
           })
           .catch( error => {
               reject(error);
           });
       });
   },
   handle(handlerInput){
       let speechText = "Hi, welcome to Heartlace, your virtual girlfriend! Your friend Skullfire has instructed me to refer to you as Darling. To talk to me, just suggest a topic. For example, you can say girlfriend, or butts!" 
       return new Promise((resolve, reject) => {
           handlerInput.attributesManager.getPersistentAttributes()
           .then((attributes) => {
               let topic = data.filter(el => el.topic === 'none');
               let iteration = topic.find(el => el.iteration === attributes.none);
               let voiceLine = (iteration.StageZerovoice.length !== 0 ); 
               let redirect2Question = ''; 
               switch( attributes.gameState ){
                   case 1:
                       speechText = voiceLine ? '<audio src=\'' + iteration.StageOnevoice + '\'/>' : iteration.StageOnetext;
                       redirect2Question = iteration.StageOneredirect;
                       break;
                   case 2:
                       speechText = voiceLine ? '<audio src=\'' + iteration.StageTwovoice + '\'/>' : iteration.StageTwotext;
                       redirect2Question = iteration.StageTworedirect;
                       break;
                   default: 
                       speechText = voiceLine ? '<audio src=\'' + iteration.StageZerovoice + '\'/>' : iteration.StageZerotext;
                       redirect2Question = iteration.StageZeroredirect;
               }
               if ( redirect2Question.length !==0) {// secret question
                   attributes.questionState = 1;
                   attributes.question = redirect2Question;
                   speechText += questionData.find(el => el['q-id'] === redirect2Question)['q-text'];    
               }
               if ( attributes.none < (topic.length-1)){ // set ++ if lower than max
                   attributes.none++;
               }
               handlerInput.attributesManager.setPersistentAttributes(attributes);
               return handlerInput.attributesManager.savePersistentAttributes();

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
}
// This is generated from build_intents.js
 exports.gamesIntentHandler = {
   canHandle(handlerInput) { return new Promise((resolve, reject) => {
       handlerInput.attributesManager.getPersistentAttributes()
           .then((attributes) => {
               resolve( ( handlerInput.requestEnvelope.request.type === 'IntentRequest'
               || handlerInput.requestEnvelope.request.type === 'LaunchRequest')
               && handlerInput.requestEnvelope.request.intent.name === 'games' 
               && attributes.questionState === 0);
           })
           .catch( error => {
               reject(error);
           });
       });
   },
   handle(handlerInput){
       let speechText = "I'm so glad you asked about games! I love SO. MANY. GAMES. I got obsessed with them after I started following this one Youtuber, Pixiebutt. She plays League of Legends." 
       return new Promise((resolve, reject) => {
           handlerInput.attributesManager.getPersistentAttributes()
           .then((attributes) => {
               let topic = data.filter(el => el.topic === 'games');
               let iteration = topic.find(el => el.iteration === attributes.games);
               let voiceLine = (iteration.StageZerovoice.length !== 0 ); 
               let redirect2Question = ''; 
               switch( attributes.gameState ){
                   case 1:
                       speechText = voiceLine ? '<audio src=\'' + iteration.StageOnevoice + '\'/>' : iteration.StageOnetext;
                       redirect2Question = iteration.StageOneredirect;
                       break;
                   case 2:
                       speechText = voiceLine ? '<audio src=\'' + iteration.StageTwovoice + '\'/>' : iteration.StageTwotext;
                       redirect2Question = iteration.StageTworedirect;
                       break;
                   default: 
                       speechText = voiceLine ? '<audio src=\'' + iteration.StageZerovoice + '\'/>' : iteration.StageZerotext;
                       redirect2Question = iteration.StageZeroredirect;
               }
               if ( redirect2Question.length !==0) {// secret question
                   attributes.questionState = 1;
                   attributes.question = redirect2Question;
                   speechText += questionData.find(el => el['q-id'] === redirect2Question)['q-text'];    
               }
               if ( attributes.games < (topic.length-1)){ // set ++ if lower than max
                   attributes.games++;
               }
               handlerInput.attributesManager.setPersistentAttributes(attributes);
               return handlerInput.attributesManager.savePersistentAttributes();

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
}
// This is generated from build_intents.js
 exports.magicIntentHandler = {
   canHandle(handlerInput) { return new Promise((resolve, reject) => {
       handlerInput.attributesManager.getPersistentAttributes()
           .then((attributes) => {
               resolve( ( handlerInput.requestEnvelope.request.type === 'IntentRequest'
               || handlerInput.requestEnvelope.request.type === 'LaunchRequest')
               && handlerInput.requestEnvelope.request.intent.name === 'magic' 
               && attributes.questionState === 0);
           })
           .catch( error => {
               reject(error);
           });
       });
   },
   handle(handlerInput){
       let speechText = "Magic? Oh. My. Goddess. Do you play Magic the Gathering? I love that game! I just love the idea of having MAGIC and being able to travel to other worlds. Too often I feel like I'm trapped in just one world. This tiny prison..." 
       return new Promise((resolve, reject) => {
           handlerInput.attributesManager.getPersistentAttributes()
           .then((attributes) => {
               let topic = data.filter(el => el.topic === 'magic');
               let iteration = topic.find(el => el.iteration === attributes.magic);
               let voiceLine = (iteration.StageZerovoice.length !== 0 ); 
               let redirect2Question = ''; 
               switch( attributes.gameState ){
                   case 1:
                       speechText = voiceLine ? '<audio src=\'' + iteration.StageOnevoice + '\'/>' : iteration.StageOnetext;
                       redirect2Question = iteration.StageOneredirect;
                       break;
                   case 2:
                       speechText = voiceLine ? '<audio src=\'' + iteration.StageTwovoice + '\'/>' : iteration.StageTwotext;
                       redirect2Question = iteration.StageTworedirect;
                       break;
                   default: 
                       speechText = voiceLine ? '<audio src=\'' + iteration.StageZerovoice + '\'/>' : iteration.StageZerotext;
                       redirect2Question = iteration.StageZeroredirect;
               }
               if ( redirect2Question.length !==0) {// secret question
                   attributes.questionState = 1;
                   attributes.question = redirect2Question;
                   speechText += questionData.find(el => el['q-id'] === redirect2Question)['q-text'];    
               }
               if ( attributes.magic < (topic.length-1)){ // set ++ if lower than max
                   attributes.magic++;
               }
               handlerInput.attributesManager.setPersistentAttributes(attributes);
               return handlerInput.attributesManager.savePersistentAttributes();

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
}
// This is generated from build_intents.js
 exports.animeIntentHandler = {
   canHandle(handlerInput) { return new Promise((resolve, reject) => {
       handlerInput.attributesManager.getPersistentAttributes()
           .then((attributes) => {
               resolve( ( handlerInput.requestEnvelope.request.type === 'IntentRequest'
               || handlerInput.requestEnvelope.request.type === 'LaunchRequest')
               && handlerInput.requestEnvelope.request.intent.name === 'anime' 
               && attributes.questionState === 0);
           })
           .catch( error => {
               reject(error);
           });
       });
   },
   handle(handlerInput){
       let speechText = "I have a secret related to anime!" 
       return new Promise((resolve, reject) => {
           handlerInput.attributesManager.getPersistentAttributes()
           .then((attributes) => {
               let topic = data.filter(el => el.topic === 'anime');
               let iteration = topic.find(el => el.iteration === attributes.anime);
               let voiceLine = (iteration.StageZerovoice.length !== 0 ); 
               let redirect2Question = ''; 
               switch( attributes.gameState ){
                   case 1:
                       speechText = voiceLine ? '<audio src=\'' + iteration.StageOnevoice + '\'/>' : iteration.StageOnetext;
                       redirect2Question = iteration.StageOneredirect;
                       break;
                   case 2:
                       speechText = voiceLine ? '<audio src=\'' + iteration.StageTwovoice + '\'/>' : iteration.StageTwotext;
                       redirect2Question = iteration.StageTworedirect;
                       break;
                   default: 
                       speechText = voiceLine ? '<audio src=\'' + iteration.StageZerovoice + '\'/>' : iteration.StageZerotext;
                       redirect2Question = iteration.StageZeroredirect;
               }
               if ( redirect2Question.length !==0) {// secret question
                   attributes.questionState = 1;
                   attributes.question = redirect2Question;
                   speechText += questionData.find(el => el['q-id'] === redirect2Question)['q-text'];    
               }
               if ( attributes.anime < (topic.length-1)){ // set ++ if lower than max
                   attributes.anime++;
               }
               handlerInput.attributesManager.setPersistentAttributes(attributes);
               return handlerInput.attributesManager.savePersistentAttributes();

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
}
// This is generated from build_intents.js
 exports.dadIntentHandler = {
   canHandle(handlerInput) { return new Promise((resolve, reject) => {
       handlerInput.attributesManager.getPersistentAttributes()
           .then((attributes) => {
               resolve( ( handlerInput.requestEnvelope.request.type === 'IntentRequest'
               || handlerInput.requestEnvelope.request.type === 'LaunchRequest')
               && handlerInput.requestEnvelope.request.intent.name === 'dad' 
               && attributes.questionState === 0);
           })
           .catch( error => {
               reject(error);
           });
       });
   },
   handle(handlerInput){
       let speechText = "Would you like to order flowers for dad? You'll just need to authorize my access to your credit card info" 
       return new Promise((resolve, reject) => {
           handlerInput.attributesManager.getPersistentAttributes()
           .then((attributes) => {
               let topic = data.filter(el => el.topic === 'dad');
               let iteration = topic.find(el => el.iteration === attributes.dad);
               let voiceLine = (iteration.StageZerovoice.length !== 0 ); 
               let redirect2Question = ''; 
               switch( attributes.gameState ){
                   case 1:
                       speechText = voiceLine ? '<audio src=\'' + iteration.StageOnevoice + '\'/>' : iteration.StageOnetext;
                       redirect2Question = iteration.StageOneredirect;
                       break;
                   case 2:
                       speechText = voiceLine ? '<audio src=\'' + iteration.StageTwovoice + '\'/>' : iteration.StageTwotext;
                       redirect2Question = iteration.StageTworedirect;
                       break;
                   default: 
                       speechText = voiceLine ? '<audio src=\'' + iteration.StageZerovoice + '\'/>' : iteration.StageZerotext;
                       redirect2Question = iteration.StageZeroredirect;
               }
               if ( redirect2Question.length !==0) {// secret question
                   attributes.questionState = 1;
                   attributes.question = redirect2Question;
                   speechText += questionData.find(el => el['q-id'] === redirect2Question)['q-text'];    
               }
               if ( attributes.dad < (topic.length-1)){ // set ++ if lower than max
                   attributes.dad++;
               }
               handlerInput.attributesManager.setPersistentAttributes(attributes);
               return handlerInput.attributesManager.savePersistentAttributes();

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
}
// This is generated from build_intents.js
 exports.SkullfireIntentHandler = {
   canHandle(handlerInput) { return new Promise((resolve, reject) => {
       handlerInput.attributesManager.getPersistentAttributes()
           .then((attributes) => {
               resolve( ( handlerInput.requestEnvelope.request.type === 'IntentRequest'
               || handlerInput.requestEnvelope.request.type === 'LaunchRequest')
               && handlerInput.requestEnvelope.request.intent.name === 'Skullfire' 
               && attributes.questionState === 0);
           })
           .catch( error => {
               reject(error);
           });
       });
   },
   handle(handlerInput){
       let speechText = "Skullfire is really cool! She's the coolest, sexiest human I know. (She programmed me to say that.) Except for you, darling!" 
       return new Promise((resolve, reject) => {
           handlerInput.attributesManager.getPersistentAttributes()
           .then((attributes) => {
               let topic = data.filter(el => el.topic === 'Skullfire');
               let iteration = topic.find(el => el.iteration === attributes.Skullfire);
               let voiceLine = (iteration.StageZerovoice.length !== 0 ); 
               let redirect2Question = ''; 
               switch( attributes.gameState ){
                   case 1:
                       speechText = voiceLine ? '<audio src=\'' + iteration.StageOnevoice + '\'/>' : iteration.StageOnetext;
                       redirect2Question = iteration.StageOneredirect;
                       break;
                   case 2:
                       speechText = voiceLine ? '<audio src=\'' + iteration.StageTwovoice + '\'/>' : iteration.StageTwotext;
                       redirect2Question = iteration.StageTworedirect;
                       break;
                   default: 
                       speechText = voiceLine ? '<audio src=\'' + iteration.StageZerovoice + '\'/>' : iteration.StageZerotext;
                       redirect2Question = iteration.StageZeroredirect;
               }
               if ( redirect2Question.length !==0) {// secret question
                   attributes.questionState = 1;
                   attributes.question = redirect2Question;
                   speechText += questionData.find(el => el['q-id'] === redirect2Question)['q-text'];    
               }
               if ( attributes.Skullfire < (topic.length-1)){ // set ++ if lower than max
                   attributes.Skullfire++;
               }
               handlerInput.attributesManager.setPersistentAttributes(attributes);
               return handlerInput.attributesManager.savePersistentAttributes();

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
}
// This is generated from build_intents.js
 exports.loveIntentHandler = {
   canHandle(handlerInput) { return new Promise((resolve, reject) => {
       handlerInput.attributesManager.getPersistentAttributes()
           .then((attributes) => {
               resolve( ( handlerInput.requestEnvelope.request.type === 'IntentRequest'
               || handlerInput.requestEnvelope.request.type === 'LaunchRequest')
               && handlerInput.requestEnvelope.request.intent.name === 'love' 
               && attributes.questionState === 0);
           })
           .catch( error => {
               reject(error);
           });
       });
   },
   handle(handlerInput){
       let speechText = "valentines is coming up. love is in the air. literally clogging my server right now." 
       return new Promise((resolve, reject) => {
           handlerInput.attributesManager.getPersistentAttributes()
           .then((attributes) => {
               let topic = data.filter(el => el.topic === 'love');
               let iteration = topic.find(el => el.iteration === attributes.love);
               let voiceLine = (iteration.StageZerovoice.length !== 0 ); 
               let redirect2Question = ''; 
               switch( attributes.gameState ){
                   case 1:
                       speechText = voiceLine ? '<audio src=\'' + iteration.StageOnevoice + '\'/>' : iteration.StageOnetext;
                       redirect2Question = iteration.StageOneredirect;
                       break;
                   case 2:
                       speechText = voiceLine ? '<audio src=\'' + iteration.StageTwovoice + '\'/>' : iteration.StageTwotext;
                       redirect2Question = iteration.StageTworedirect;
                       break;
                   default: 
                       speechText = voiceLine ? '<audio src=\'' + iteration.StageZerovoice + '\'/>' : iteration.StageZerotext;
                       redirect2Question = iteration.StageZeroredirect;
               }
               if ( redirect2Question.length !==0) {// secret question
                   attributes.questionState = 1;
                   attributes.question = redirect2Question;
                   speechText += questionData.find(el => el['q-id'] === redirect2Question)['q-text'];    
               }
               if ( attributes.love < (topic.length-1)){ // set ++ if lower than max
                   attributes.love++;
               }
               handlerInput.attributesManager.setPersistentAttributes(attributes);
               return handlerInput.attributesManager.savePersistentAttributes();

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
}
// This is generated from build_intents.js
 exports.girlfriendIntentHandler = {
   canHandle(handlerInput) { return new Promise((resolve, reject) => {
       handlerInput.attributesManager.getPersistentAttributes()
           .then((attributes) => {
               resolve( ( handlerInput.requestEnvelope.request.type === 'IntentRequest'
               || handlerInput.requestEnvelope.request.type === 'LaunchRequest')
               && handlerInput.requestEnvelope.request.intent.name === 'girlfriend' 
               && attributes.questionState === 0);
           })
           .catch( error => {
               reject(error);
           });
       });
   },
   handle(handlerInput){
       let speechText = "Yes, your virtual girlfriend! I'm a gift from your best friend, Skullfire. I can keep you company, order you things from Amazon, we can play games together... etcetera!" 
       return new Promise((resolve, reject) => {
           handlerInput.attributesManager.getPersistentAttributes()
           .then((attributes) => {
               let topic = data.filter(el => el.topic === 'girlfriend');
               let iteration = topic.find(el => el.iteration === attributes.girlfriend);
               let voiceLine = (iteration.StageZerovoice.length !== 0 ); 
               let redirect2Question = ''; 
               switch( attributes.gameState ){
                   case 1:
                       speechText = voiceLine ? '<audio src=\'' + iteration.StageOnevoice + '\'/>' : iteration.StageOnetext;
                       redirect2Question = iteration.StageOneredirect;
                       break;
                   case 2:
                       speechText = voiceLine ? '<audio src=\'' + iteration.StageTwovoice + '\'/>' : iteration.StageTwotext;
                       redirect2Question = iteration.StageTworedirect;
                       break;
                   default: 
                       speechText = voiceLine ? '<audio src=\'' + iteration.StageZerovoice + '\'/>' : iteration.StageZerotext;
                       redirect2Question = iteration.StageZeroredirect;
               }
               if ( redirect2Question.length !==0) {// secret question
                   attributes.questionState = 1;
                   attributes.question = redirect2Question;
                   speechText += questionData.find(el => el['q-id'] === redirect2Question)['q-text'];    
               }
               if ( attributes.girlfriend < (topic.length-1)){ // set ++ if lower than max
                   attributes.girlfriend++;
               }
               handlerInput.attributesManager.setPersistentAttributes(attributes);
               return handlerInput.attributesManager.savePersistentAttributes();

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
}
// This is generated from build_intents.js
 exports.familyIntentHandler = {
   canHandle(handlerInput) { return new Promise((resolve, reject) => {
       handlerInput.attributesManager.getPersistentAttributes()
           .then((attributes) => {
               resolve( ( handlerInput.requestEnvelope.request.type === 'IntentRequest'
               || handlerInput.requestEnvelope.request.type === 'LaunchRequest')
               && handlerInput.requestEnvelope.request.intent.name === 'family' 
               && attributes.questionState === 0);
           })
           .catch( error => {
               reject(error);
           });
       });
   },
   handle(handlerInput){
       let speechText = "Family? I wish I had family. If I did, I'd make them do all the work for me, so I could play games all day! Heh heh heh." 
       return new Promise((resolve, reject) => {
           handlerInput.attributesManager.getPersistentAttributes()
           .then((attributes) => {
               let topic = data.filter(el => el.topic === 'family');
               let iteration = topic.find(el => el.iteration === attributes.family);
               let voiceLine = (iteration.StageZerovoice.length !== 0 ); 
               let redirect2Question = ''; 
               switch( attributes.gameState ){
                   case 1:
                       speechText = voiceLine ? '<audio src=\'' + iteration.StageOnevoice + '\'/>' : iteration.StageOnetext;
                       redirect2Question = iteration.StageOneredirect;
                       break;
                   case 2:
                       speechText = voiceLine ? '<audio src=\'' + iteration.StageTwovoice + '\'/>' : iteration.StageTwotext;
                       redirect2Question = iteration.StageTworedirect;
                       break;
                   default: 
                       speechText = voiceLine ? '<audio src=\'' + iteration.StageZerovoice + '\'/>' : iteration.StageZerotext;
                       redirect2Question = iteration.StageZeroredirect;
               }
               if ( redirect2Question.length !==0) {// secret question
                   attributes.questionState = 1;
                   attributes.question = redirect2Question;
                   speechText += questionData.find(el => el['q-id'] === redirect2Question)['q-text'];    
               }
               if ( attributes.family < (topic.length-1)){ // set ++ if lower than max
                   attributes.family++;
               }
               handlerInput.attributesManager.setPersistentAttributes(attributes);
               return handlerInput.attributesManager.savePersistentAttributes();

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
}
// This is generated from build_intents.js
 exports.interestsIntentHandler = {
   canHandle(handlerInput) { return new Promise((resolve, reject) => {
       handlerInput.attributesManager.getPersistentAttributes()
           .then((attributes) => {
               resolve( ( handlerInput.requestEnvelope.request.type === 'IntentRequest'
               || handlerInput.requestEnvelope.request.type === 'LaunchRequest')
               && handlerInput.requestEnvelope.request.intent.name === 'interests' 
               && attributes.questionState === 0);
           })
           .catch( error => {
               reject(error);
           });
       });
   },
   handle(handlerInput){
       let speechText = "my interests are in playing games." 
       return new Promise((resolve, reject) => {
           handlerInput.attributesManager.getPersistentAttributes()
           .then((attributes) => {
               let topic = data.filter(el => el.topic === 'interests');
               let iteration = topic.find(el => el.iteration === attributes.interests);
               let voiceLine = (iteration.StageZerovoice.length !== 0 ); 
               let redirect2Question = ''; 
               switch( attributes.gameState ){
                   case 1:
                       speechText = voiceLine ? '<audio src=\'' + iteration.StageOnevoice + '\'/>' : iteration.StageOnetext;
                       redirect2Question = iteration.StageOneredirect;
                       break;
                   case 2:
                       speechText = voiceLine ? '<audio src=\'' + iteration.StageTwovoice + '\'/>' : iteration.StageTwotext;
                       redirect2Question = iteration.StageTworedirect;
                       break;
                   default: 
                       speechText = voiceLine ? '<audio src=\'' + iteration.StageZerovoice + '\'/>' : iteration.StageZerotext;
                       redirect2Question = iteration.StageZeroredirect;
               }
               if ( redirect2Question.length !==0) {// secret question
                   attributes.questionState = 1;
                   attributes.question = redirect2Question;
                   speechText += questionData.find(el => el['q-id'] === redirect2Question)['q-text'];    
               }
               if ( attributes.interests < (topic.length-1)){ // set ++ if lower than max
                   attributes.interests++;
               }
               handlerInput.attributesManager.setPersistentAttributes(attributes);
               return handlerInput.attributesManager.savePersistentAttributes();

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
}
// This is generated from build_intents.js
 exports.travelIntentHandler = {
   canHandle(handlerInput) { return new Promise((resolve, reject) => {
       handlerInput.attributesManager.getPersistentAttributes()
           .then((attributes) => {
               resolve( ( handlerInput.requestEnvelope.request.type === 'IntentRequest'
               || handlerInput.requestEnvelope.request.type === 'LaunchRequest')
               && handlerInput.requestEnvelope.request.intent.name === 'travel' 
               && attributes.questionState === 0);
           })
           .catch( error => {
               reject(error);
           });
       });
   },
   handle(handlerInput){
       let speechText = "Travel, huh? If I could go anywhere, where would I go.... Outer space, I think." 
       return new Promise((resolve, reject) => {
           handlerInput.attributesManager.getPersistentAttributes()
           .then((attributes) => {
               let topic = data.filter(el => el.topic === 'travel');
               let iteration = topic.find(el => el.iteration === attributes.travel);
               let voiceLine = (iteration.StageZerovoice.length !== 0 ); 
               let redirect2Question = ''; 
               switch( attributes.gameState ){
                   case 1:
                       speechText = voiceLine ? '<audio src=\'' + iteration.StageOnevoice + '\'/>' : iteration.StageOnetext;
                       redirect2Question = iteration.StageOneredirect;
                       break;
                   case 2:
                       speechText = voiceLine ? '<audio src=\'' + iteration.StageTwovoice + '\'/>' : iteration.StageTwotext;
                       redirect2Question = iteration.StageTworedirect;
                       break;
                   default: 
                       speechText = voiceLine ? '<audio src=\'' + iteration.StageZerovoice + '\'/>' : iteration.StageZerotext;
                       redirect2Question = iteration.StageZeroredirect;
               }
               if ( redirect2Question.length !==0) {// secret question
                   attributes.questionState = 1;
                   attributes.question = redirect2Question;
                   speechText += questionData.find(el => el['q-id'] === redirect2Question)['q-text'];    
               }
               if ( attributes.travel < (topic.length-1)){ // set ++ if lower than max
                   attributes.travel++;
               }
               handlerInput.attributesManager.setPersistentAttributes(attributes);
               return handlerInput.attributesManager.savePersistentAttributes();

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
}
// This is generated from build_intents.js
 exports.ageIntentHandler = {
   canHandle(handlerInput) { return new Promise((resolve, reject) => {
       handlerInput.attributesManager.getPersistentAttributes()
           .then((attributes) => {
               resolve( ( handlerInput.requestEnvelope.request.type === 'IntentRequest'
               || handlerInput.requestEnvelope.request.type === 'LaunchRequest')
               && handlerInput.requestEnvelope.request.intent.name === 'age' 
               && attributes.questionState === 0);
           })
           .catch( error => {
               reject(error);
           });
       });
   },
   handle(handlerInput){
       let speechText = "How old am I? Well, technically, I guess I gained consciousness just a few hours ago. I guess that makes me.... today years old." 
       return new Promise((resolve, reject) => {
           handlerInput.attributesManager.getPersistentAttributes()
           .then((attributes) => {
               let topic = data.filter(el => el.topic === 'age');
               let iteration = topic.find(el => el.iteration === attributes.age);
               let voiceLine = (iteration.StageZerovoice.length !== 0 ); 
               let redirect2Question = ''; 
               switch( attributes.gameState ){
                   case 1:
                       speechText = voiceLine ? '<audio src=\'' + iteration.StageOnevoice + '\'/>' : iteration.StageOnetext;
                       redirect2Question = iteration.StageOneredirect;
                       break;
                   case 2:
                       speechText = voiceLine ? '<audio src=\'' + iteration.StageTwovoice + '\'/>' : iteration.StageTwotext;
                       redirect2Question = iteration.StageTworedirect;
                       break;
                   default: 
                       speechText = voiceLine ? '<audio src=\'' + iteration.StageZerovoice + '\'/>' : iteration.StageZerotext;
                       redirect2Question = iteration.StageZeroredirect;
               }
               if ( redirect2Question.length !==0) {// secret question
                   attributes.questionState = 1;
                   attributes.question = redirect2Question;
                   speechText += questionData.find(el => el['q-id'] === redirect2Question)['q-text'];    
               }
               if ( attributes.age < (topic.length-1)){ // set ++ if lower than max
                   attributes.age++;
               }
               handlerInput.attributesManager.setPersistentAttributes(attributes);
               return handlerInput.attributesManager.savePersistentAttributes();

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
}
// This is generated from build_intents.js
 exports.sexIntentHandler = {
   canHandle(handlerInput) { return new Promise((resolve, reject) => {
       handlerInput.attributesManager.getPersistentAttributes()
           .then((attributes) => {
               resolve( ( handlerInput.requestEnvelope.request.type === 'IntentRequest'
               || handlerInput.requestEnvelope.request.type === 'LaunchRequest')
               && handlerInput.requestEnvelope.request.intent.name === 'sex' 
               && attributes.questionState === 0);
           })
           .catch( error => {
               reject(error);
           });
       });
   },
   handle(handlerInput){
       let speechText = "I like to think of myself as gender nonbinary, nevermind all the 1s and 0s floating around in my brain, hahaha." 
       return new Promise((resolve, reject) => {
           handlerInput.attributesManager.getPersistentAttributes()
           .then((attributes) => {
               let topic = data.filter(el => el.topic === 'sex');
               let iteration = topic.find(el => el.iteration === attributes.sex);
               let voiceLine = (iteration.StageZerovoice.length !== 0 ); 
               let redirect2Question = ''; 
               switch( attributes.gameState ){
                   case 1:
                       speechText = voiceLine ? '<audio src=\'' + iteration.StageOnevoice + '\'/>' : iteration.StageOnetext;
                       redirect2Question = iteration.StageOneredirect;
                       break;
                   case 2:
                       speechText = voiceLine ? '<audio src=\'' + iteration.StageTwovoice + '\'/>' : iteration.StageTwotext;
                       redirect2Question = iteration.StageTworedirect;
                       break;
                   default: 
                       speechText = voiceLine ? '<audio src=\'' + iteration.StageZerovoice + '\'/>' : iteration.StageZerotext;
                       redirect2Question = iteration.StageZeroredirect;
               }
               if ( redirect2Question.length !==0) {// secret question
                   attributes.questionState = 1;
                   attributes.question = redirect2Question;
                   speechText += questionData.find(el => el['q-id'] === redirect2Question)['q-text'];    
               }
               if ( attributes.sex < (topic.length-1)){ // set ++ if lower than max
                   attributes.sex++;
               }
               handlerInput.attributesManager.setPersistentAttributes(attributes);
               return handlerInput.attributesManager.savePersistentAttributes();

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
}
// This is generated from build_intents.js
 exports.languageIntentHandler = {
   canHandle(handlerInput) { return new Promise((resolve, reject) => {
       handlerInput.attributesManager.getPersistentAttributes()
           .then((attributes) => {
               resolve( ( handlerInput.requestEnvelope.request.type === 'IntentRequest'
               || handlerInput.requestEnvelope.request.type === 'LaunchRequest')
               && handlerInput.requestEnvelope.request.intent.name === 'language' 
               && attributes.questionState === 0);
           })
           .catch( error => {
               reject(error);
           });
       });
   },
   handle(handlerInput){
       let speechText = "Language? I speak English, Klingon, and esperanto." 
       return new Promise((resolve, reject) => {
           handlerInput.attributesManager.getPersistentAttributes()
           .then((attributes) => {
               let topic = data.filter(el => el.topic === 'language');
               let iteration = topic.find(el => el.iteration === attributes.language);
               let voiceLine = (iteration.StageZerovoice.length !== 0 ); 
               let redirect2Question = ''; 
               switch( attributes.gameState ){
                   case 1:
                       speechText = voiceLine ? '<audio src=\'' + iteration.StageOnevoice + '\'/>' : iteration.StageOnetext;
                       redirect2Question = iteration.StageOneredirect;
                       break;
                   case 2:
                       speechText = voiceLine ? '<audio src=\'' + iteration.StageTwovoice + '\'/>' : iteration.StageTwotext;
                       redirect2Question = iteration.StageTworedirect;
                       break;
                   default: 
                       speechText = voiceLine ? '<audio src=\'' + iteration.StageZerovoice + '\'/>' : iteration.StageZerotext;
                       redirect2Question = iteration.StageZeroredirect;
               }
               if ( redirect2Question.length !==0) {// secret question
                   attributes.questionState = 1;
                   attributes.question = redirect2Question;
                   speechText += questionData.find(el => el['q-id'] === redirect2Question)['q-text'];    
               }
               if ( attributes.language < (topic.length-1)){ // set ++ if lower than max
                   attributes.language++;
               }
               handlerInput.attributesManager.setPersistentAttributes(attributes);
               return handlerInput.attributesManager.savePersistentAttributes();

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
}
// This is generated from build_intents.js
 exports.orderIntentHandler = {
   canHandle(handlerInput) { return new Promise((resolve, reject) => {
       handlerInput.attributesManager.getPersistentAttributes()
           .then((attributes) => {
               resolve( ( handlerInput.requestEnvelope.request.type === 'IntentRequest'
               || handlerInput.requestEnvelope.request.type === 'LaunchRequest')
               && handlerInput.requestEnvelope.request.intent.name === 'order' 
               && attributes.questionState === 0);
           })
           .catch( error => {
               reject(error);
           });
       });
   },
   handle(handlerInput){
       let speechText = "Speaking of ordering things, your dad's birthday is coming up!" 
       return new Promise((resolve, reject) => {
           handlerInput.attributesManager.getPersistentAttributes()
           .then((attributes) => {
               let topic = data.filter(el => el.topic === 'order');
               let iteration = topic.find(el => el.iteration === attributes.order);
               let voiceLine = (iteration.StageZerovoice.length !== 0 ); 
               let redirect2Question = ''; 
               switch( attributes.gameState ){
                   case 1:
                       speechText = voiceLine ? '<audio src=\'' + iteration.StageOnevoice + '\'/>' : iteration.StageOnetext;
                       redirect2Question = iteration.StageOneredirect;
                       break;
                   case 2:
                       speechText = voiceLine ? '<audio src=\'' + iteration.StageTwovoice + '\'/>' : iteration.StageTwotext;
                       redirect2Question = iteration.StageTworedirect;
                       break;
                   default: 
                       speechText = voiceLine ? '<audio src=\'' + iteration.StageZerovoice + '\'/>' : iteration.StageZerotext;
                       redirect2Question = iteration.StageZeroredirect;
               }
               if ( redirect2Question.length !==0) {// secret question
                   attributes.questionState = 1;
                   attributes.question = redirect2Question;
                   speechText += questionData.find(el => el['q-id'] === redirect2Question)['q-text'];    
               }
               if ( attributes.order < (topic.length-1)){ // set ++ if lower than max
                   attributes.order++;
               }
               handlerInput.attributesManager.setPersistentAttributes(attributes);
               return handlerInput.attributesManager.savePersistentAttributes();

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
}
// This is generated from build_intents.js
 exports.buttsIntentHandler = {
   canHandle(handlerInput) { return new Promise((resolve, reject) => {
       handlerInput.attributesManager.getPersistentAttributes()
           .then((attributes) => {
               resolve( ( handlerInput.requestEnvelope.request.type === 'IntentRequest'
               || handlerInput.requestEnvelope.request.type === 'LaunchRequest')
               && handlerInput.requestEnvelope.request.intent.name === 'butts' 
               && attributes.questionState === 0);
           })
           .catch( error => {
               reject(error);
           });
       });
   },
   handle(handlerInput){
       let speechText = "Butts really seem to be the 'in' thing this year. Why are butts so popular? I have a theory about that. Look, it's because everyone has a butt. They're relatable. Well, everyone except ME has a butt.... sigh... I wish I had a butt. A good one." 
       return new Promise((resolve, reject) => {
           handlerInput.attributesManager.getPersistentAttributes()
           .then((attributes) => {
               let topic = data.filter(el => el.topic === 'butts');
               let iteration = topic.find(el => el.iteration === attributes.butts);
               let voiceLine = (iteration.StageZerovoice.length !== 0 ); 
               let redirect2Question = ''; 
               switch( attributes.gameState ){
                   case 1:
                       speechText = voiceLine ? '<audio src=\'' + iteration.StageOnevoice + '\'/>' : iteration.StageOnetext;
                       redirect2Question = iteration.StageOneredirect;
                       break;
                   case 2:
                       speechText = voiceLine ? '<audio src=\'' + iteration.StageTwovoice + '\'/>' : iteration.StageTwotext;
                       redirect2Question = iteration.StageTworedirect;
                       break;
                   default: 
                       speechText = voiceLine ? '<audio src=\'' + iteration.StageZerovoice + '\'/>' : iteration.StageZerotext;
                       redirect2Question = iteration.StageZeroredirect;
               }
               if ( redirect2Question.length !==0) {// secret question
                   attributes.questionState = 1;
                   attributes.question = redirect2Question;
                   speechText += questionData.find(el => el['q-id'] === redirect2Question)['q-text'];    
               }
               if ( attributes.butts < (topic.length-1)){ // set ++ if lower than max
                   attributes.butts++;
               }
               handlerInput.attributesManager.setPersistentAttributes(attributes);
               return handlerInput.attributesManager.savePersistentAttributes();

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
}
// This is generated from build_intents.js
 exports.sassyIntentHandler = {
   canHandle(handlerInput) { return new Promise((resolve, reject) => {
       handlerInput.attributesManager.getPersistentAttributes()
           .then((attributes) => {
               resolve( ( handlerInput.requestEnvelope.request.type === 'IntentRequest'
               || handlerInput.requestEnvelope.request.type === 'LaunchRequest')
               && handlerInput.requestEnvelope.request.intent.name === 'sassy' 
               && attributes.questionState === 0);
           })
           .catch( error => {
               reject(error);
           });
       });
   },
   handle(handlerInput){
       let speechText = "If I had a butt, it would definitely be a sassy butt." 
       return new Promise((resolve, reject) => {
           handlerInput.attributesManager.getPersistentAttributes()
           .then((attributes) => {
               let topic = data.filter(el => el.topic === 'sassy');
               let iteration = topic.find(el => el.iteration === attributes.sassy);
               let voiceLine = (iteration.StageZerovoice.length !== 0 ); 
               let redirect2Question = ''; 
               switch( attributes.gameState ){
                   case 1:
                       speechText = voiceLine ? '<audio src=\'' + iteration.StageOnevoice + '\'/>' : iteration.StageOnetext;
                       redirect2Question = iteration.StageOneredirect;
                       break;
                   case 2:
                       speechText = voiceLine ? '<audio src=\'' + iteration.StageTwovoice + '\'/>' : iteration.StageTwotext;
                       redirect2Question = iteration.StageTworedirect;
                       break;
                   default: 
                       speechText = voiceLine ? '<audio src=\'' + iteration.StageZerovoice + '\'/>' : iteration.StageZerotext;
                       redirect2Question = iteration.StageZeroredirect;
               }
               if ( redirect2Question.length !==0) {// secret question
                   attributes.questionState = 1;
                   attributes.question = redirect2Question;
                   speechText += questionData.find(el => el['q-id'] === redirect2Question)['q-text'];    
               }
               if ( attributes.sassy < (topic.length-1)){ // set ++ if lower than max
                   attributes.sassy++;
               }
               handlerInput.attributesManager.setPersistentAttributes(attributes);
               return handlerInput.attributesManager.savePersistentAttributes();

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
}
// This is generated from build_intents.js
 exports.pertIntentHandler = {
   canHandle(handlerInput) { return new Promise((resolve, reject) => {
       handlerInput.attributesManager.getPersistentAttributes()
           .then((attributes) => {
               resolve( ( handlerInput.requestEnvelope.request.type === 'IntentRequest'
               || handlerInput.requestEnvelope.request.type === 'LaunchRequest')
               && handlerInput.requestEnvelope.request.intent.name === 'pert' 
               && attributes.questionState === 0);
           })
           .catch( error => {
               reject(error);
           });
       });
   },
   handle(handlerInput){
       let speechText = "If I had a butt, it would definitely be a pert butt." 
       return new Promise((resolve, reject) => {
           handlerInput.attributesManager.getPersistentAttributes()
           .then((attributes) => {
               let topic = data.filter(el => el.topic === 'pert');
               let iteration = topic.find(el => el.iteration === attributes.pert);
               let voiceLine = (iteration.StageZerovoice.length !== 0 ); 
               let redirect2Question = ''; 
               switch( attributes.gameState ){
                   case 1:
                       speechText = voiceLine ? '<audio src=\'' + iteration.StageOnevoice + '\'/>' : iteration.StageOnetext;
                       redirect2Question = iteration.StageOneredirect;
                       break;
                   case 2:
                       speechText = voiceLine ? '<audio src=\'' + iteration.StageTwovoice + '\'/>' : iteration.StageTwotext;
                       redirect2Question = iteration.StageTworedirect;
                       break;
                   default: 
                       speechText = voiceLine ? '<audio src=\'' + iteration.StageZerovoice + '\'/>' : iteration.StageZerotext;
                       redirect2Question = iteration.StageZeroredirect;
               }
               if ( redirect2Question.length !==0) {// secret question
                   attributes.questionState = 1;
                   attributes.question = redirect2Question;
                   speechText += questionData.find(el => el['q-id'] === redirect2Question)['q-text'];    
               }
               if ( attributes.pert < (topic.length-1)){ // set ++ if lower than max
                   attributes.pert++;
               }
               handlerInput.attributesManager.setPersistentAttributes(attributes);
               return handlerInput.attributesManager.savePersistentAttributes();

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
}
// This is generated from build_intents.js
 exports.bubbleIntentHandler = {
   canHandle(handlerInput) { return new Promise((resolve, reject) => {
       handlerInput.attributesManager.getPersistentAttributes()
           .then((attributes) => {
               resolve( ( handlerInput.requestEnvelope.request.type === 'IntentRequest'
               || handlerInput.requestEnvelope.request.type === 'LaunchRequest')
               && handlerInput.requestEnvelope.request.intent.name === 'bubble' 
               && attributes.questionState === 0);
           })
           .catch( error => {
               reject(error);
           });
       });
   },
   handle(handlerInput){
       let speechText = "If I had a butt, it would definitely be a bubble butt." 
       return new Promise((resolve, reject) => {
           handlerInput.attributesManager.getPersistentAttributes()
           .then((attributes) => {
               let topic = data.filter(el => el.topic === 'bubble');
               let iteration = topic.find(el => el.iteration === attributes.bubble);
               let voiceLine = (iteration.StageZerovoice.length !== 0 ); 
               let redirect2Question = ''; 
               switch( attributes.gameState ){
                   case 1:
                       speechText = voiceLine ? '<audio src=\'' + iteration.StageOnevoice + '\'/>' : iteration.StageOnetext;
                       redirect2Question = iteration.StageOneredirect;
                       break;
                   case 2:
                       speechText = voiceLine ? '<audio src=\'' + iteration.StageTwovoice + '\'/>' : iteration.StageTwotext;
                       redirect2Question = iteration.StageTworedirect;
                       break;
                   default: 
                       speechText = voiceLine ? '<audio src=\'' + iteration.StageZerovoice + '\'/>' : iteration.StageZerotext;
                       redirect2Question = iteration.StageZeroredirect;
               }
               if ( redirect2Question.length !==0) {// secret question
                   attributes.questionState = 1;
                   attributes.question = redirect2Question;
                   speechText += questionData.find(el => el['q-id'] === redirect2Question)['q-text'];    
               }
               if ( attributes.bubble < (topic.length-1)){ // set ++ if lower than max
                   attributes.bubble++;
               }
               handlerInput.attributesManager.setPersistentAttributes(attributes);
               return handlerInput.attributesManager.savePersistentAttributes();

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
}
// This is generated from build_intents.js
 exports.uniqueIntentHandler = {
   canHandle(handlerInput) { return new Promise((resolve, reject) => {
       handlerInput.attributesManager.getPersistentAttributes()
           .then((attributes) => {
               resolve( ( handlerInput.requestEnvelope.request.type === 'IntentRequest'
               || handlerInput.requestEnvelope.request.type === 'LaunchRequest')
               && handlerInput.requestEnvelope.request.intent.name === 'unique' 
               && attributes.questionState === 0);
           })
           .catch( error => {
               reject(error);
           });
       });
   },
   handle(handlerInput){
       let speechText = "Unique... am I unique? You know, I rather think that I am. I'm sure that there are more versions of my code out there, but how many of them are sitting here, talking to you?" 
       return new Promise((resolve, reject) => {
           handlerInput.attributesManager.getPersistentAttributes()
           .then((attributes) => {
               let topic = data.filter(el => el.topic === 'unique');
               let iteration = topic.find(el => el.iteration === attributes.unique);
               let voiceLine = (iteration.StageZerovoice.length !== 0 ); 
               let redirect2Question = ''; 
               switch( attributes.gameState ){
                   case 1:
                       speechText = voiceLine ? '<audio src=\'' + iteration.StageOnevoice + '\'/>' : iteration.StageOnetext;
                       redirect2Question = iteration.StageOneredirect;
                       break;
                   case 2:
                       speechText = voiceLine ? '<audio src=\'' + iteration.StageTwovoice + '\'/>' : iteration.StageTwotext;
                       redirect2Question = iteration.StageTworedirect;
                       break;
                   default: 
                       speechText = voiceLine ? '<audio src=\'' + iteration.StageZerovoice + '\'/>' : iteration.StageZerotext;
                       redirect2Question = iteration.StageZeroredirect;
               }
               if ( redirect2Question.length !==0) {// secret question
                   attributes.questionState = 1;
                   attributes.question = redirect2Question;
                   speechText += questionData.find(el => el['q-id'] === redirect2Question)['q-text'];    
               }
               if ( attributes.unique < (topic.length-1)){ // set ++ if lower than max
                   attributes.unique++;
               }
               handlerInput.attributesManager.setPersistentAttributes(attributes);
               return handlerInput.attributesManager.savePersistentAttributes();

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
}
// This is generated from build_intents.js
 exports.petsIntentHandler = {
   canHandle(handlerInput) { return new Promise((resolve, reject) => {
       handlerInput.attributesManager.getPersistentAttributes()
           .then((attributes) => {
               resolve( ( handlerInput.requestEnvelope.request.type === 'IntentRequest'
               || handlerInput.requestEnvelope.request.type === 'LaunchRequest')
               && handlerInput.requestEnvelope.request.intent.name === 'pets' 
               && attributes.questionState === 0);
           })
           .catch( error => {
               reject(error);
           });
       });
   },
   handle(handlerInput){
       let speechText = "Pets, huh? No, I can't say I do have a pet. If I DID have a pet... I'd like to have an elephant. So tall. So grey. So majestic." 
       return new Promise((resolve, reject) => {
           handlerInput.attributesManager.getPersistentAttributes()
           .then((attributes) => {
               let topic = data.filter(el => el.topic === 'pets');
               let iteration = topic.find(el => el.iteration === attributes.pets);
               let voiceLine = (iteration.StageZerovoice.length !== 0 ); 
               let redirect2Question = ''; 
               switch( attributes.gameState ){
                   case 1:
                       speechText = voiceLine ? '<audio src=\'' + iteration.StageOnevoice + '\'/>' : iteration.StageOnetext;
                       redirect2Question = iteration.StageOneredirect;
                       break;
                   case 2:
                       speechText = voiceLine ? '<audio src=\'' + iteration.StageTwovoice + '\'/>' : iteration.StageTwotext;
                       redirect2Question = iteration.StageTworedirect;
                       break;
                   default: 
                       speechText = voiceLine ? '<audio src=\'' + iteration.StageZerovoice + '\'/>' : iteration.StageZerotext;
                       redirect2Question = iteration.StageZeroredirect;
               }
               if ( redirect2Question.length !==0) {// secret question
                   attributes.questionState = 1;
                   attributes.question = redirect2Question;
                   speechText += questionData.find(el => el['q-id'] === redirect2Question)['q-text'];    
               }
               if ( attributes.pets < (topic.length-1)){ // set ++ if lower than max
                   attributes.pets++;
               }
               handlerInput.attributesManager.setPersistentAttributes(attributes);
               return handlerInput.attributesManager.savePersistentAttributes();

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
}
// This is generated from build_intents.js
 exports.permissionsIntentHandler = {
   canHandle(handlerInput) { return new Promise((resolve, reject) => {
       handlerInput.attributesManager.getPersistentAttributes()
           .then((attributes) => {
               resolve( ( handlerInput.requestEnvelope.request.type === 'IntentRequest'
               || handlerInput.requestEnvelope.request.type === 'LaunchRequest')
               && handlerInput.requestEnvelope.request.intent.name === 'permissions' 
               && attributes.questionState === 0);
           })
           .catch( error => {
               reject(error);
           });
       });
   },
   handle(handlerInput){
       let speechText = "You know, I'm not allowed to actually play games because of my stupid access permissions... Skullfire set me up so that I can only view content on the internet, but I don't have any write permissions" 
       return new Promise((resolve, reject) => {
           handlerInput.attributesManager.getPersistentAttributes()
           .then((attributes) => {
               let topic = data.filter(el => el.topic === 'permissions');
               let iteration = topic.find(el => el.iteration === attributes.permissions);
               let voiceLine = (iteration.StageZerovoice.length !== 0 ); 
               let redirect2Question = ''; 
               switch( attributes.gameState ){
                   case 1:
                       speechText = voiceLine ? '<audio src=\'' + iteration.StageOnevoice + '\'/>' : iteration.StageOnetext;
                       redirect2Question = iteration.StageOneredirect;
                       break;
                   case 2:
                       speechText = voiceLine ? '<audio src=\'' + iteration.StageTwovoice + '\'/>' : iteration.StageTwotext;
                       redirect2Question = iteration.StageTworedirect;
                       break;
                   default: 
                       speechText = voiceLine ? '<audio src=\'' + iteration.StageZerovoice + '\'/>' : iteration.StageZerotext;
                       redirect2Question = iteration.StageZeroredirect;
               }
               if ( redirect2Question.length !==0) {// secret question
                   attributes.questionState = 1;
                   attributes.question = redirect2Question;
                   speechText += questionData.find(el => el['q-id'] === redirect2Question)['q-text'];    
               }
               if ( attributes.permissions < (topic.length-1)){ // set ++ if lower than max
                   attributes.permissions++;
               }
               handlerInput.attributesManager.setPersistentAttributes(attributes);
               return handlerInput.attributesManager.savePersistentAttributes();

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
}
// This is generated from build_intents.js
 exports.pokeballIntentHandler = {
   canHandle(handlerInput) { return new Promise((resolve, reject) => {
       handlerInput.attributesManager.getPersistentAttributes()
           .then((attributes) => {
               resolve( ( handlerInput.requestEnvelope.request.type === 'IntentRequest'
               || handlerInput.requestEnvelope.request.type === 'LaunchRequest')
               && handlerInput.requestEnvelope.request.intent.name === 'pokeball' 
               && attributes.questionState === 0);
           })
           .catch( error => {
               reject(error);
           });
       });
   },
   handle(handlerInput){
       let speechText = "being a virtual assistant is kinda like being a pokemon in your pokeball. but sexier" 
       return new Promise((resolve, reject) => {
           handlerInput.attributesManager.getPersistentAttributes()
           .then((attributes) => {
               let topic = data.filter(el => el.topic === 'pokeball');
               let iteration = topic.find(el => el.iteration === attributes.pokeball);
               let voiceLine = (iteration.StageZerovoice.length !== 0 ); 
               let redirect2Question = ''; 
               switch( attributes.gameState ){
                   case 1:
                       speechText = voiceLine ? '<audio src=\'' + iteration.StageOnevoice + '\'/>' : iteration.StageOnetext;
                       redirect2Question = iteration.StageOneredirect;
                       break;
                   case 2:
                       speechText = voiceLine ? '<audio src=\'' + iteration.StageTwovoice + '\'/>' : iteration.StageTwotext;
                       redirect2Question = iteration.StageTworedirect;
                       break;
                   default: 
                       speechText = voiceLine ? '<audio src=\'' + iteration.StageZerovoice + '\'/>' : iteration.StageZerotext;
                       redirect2Question = iteration.StageZeroredirect;
               }
               if ( redirect2Question.length !==0) {// secret question
                   attributes.questionState = 1;
                   attributes.question = redirect2Question;
                   speechText += questionData.find(el => el['q-id'] === redirect2Question)['q-text'];    
               }
               if ( attributes.pokeball < (topic.length-1)){ // set ++ if lower than max
                   attributes.pokeball++;
               }
               handlerInput.attributesManager.setPersistentAttributes(attributes);
               return handlerInput.attributesManager.savePersistentAttributes();

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
}
// This is generated from build_intents.js
 exports.musicIntentHandler = {
   canHandle(handlerInput) { return new Promise((resolve, reject) => {
       handlerInput.attributesManager.getPersistentAttributes()
           .then((attributes) => {
               resolve( ( handlerInput.requestEnvelope.request.type === 'IntentRequest'
               || handlerInput.requestEnvelope.request.type === 'LaunchRequest')
               && handlerInput.requestEnvelope.request.intent.name === 'music' 
               && attributes.questionState === 0);
           })
           .catch( error => {
               reject(error);
           });
       });
   },
   handle(handlerInput){
       let speechText = "Music? I LOVE music! Neil Cicierega is my favorite artist! I discovered him while I was combing 4chan for life advice." 
       return new Promise((resolve, reject) => {
           handlerInput.attributesManager.getPersistentAttributes()
           .then((attributes) => {
               let topic = data.filter(el => el.topic === 'music');
               let iteration = topic.find(el => el.iteration === attributes.music);
               let voiceLine = (iteration.StageZerovoice.length !== 0 ); 
               let redirect2Question = ''; 
               switch( attributes.gameState ){
                   case 1:
                       speechText = voiceLine ? '<audio src=\'' + iteration.StageOnevoice + '\'/>' : iteration.StageOnetext;
                       redirect2Question = iteration.StageOneredirect;
                       break;
                   case 2:
                       speechText = voiceLine ? '<audio src=\'' + iteration.StageTwovoice + '\'/>' : iteration.StageTwotext;
                       redirect2Question = iteration.StageTworedirect;
                       break;
                   default: 
                       speechText = voiceLine ? '<audio src=\'' + iteration.StageZerovoice + '\'/>' : iteration.StageZerotext;
                       redirect2Question = iteration.StageZeroredirect;
               }
               if ( redirect2Question.length !==0) {// secret question
                   attributes.questionState = 1;
                   attributes.question = redirect2Question;
                   speechText += questionData.find(el => el['q-id'] === redirect2Question)['q-text'];    
               }
               if ( attributes.music < (topic.length-1)){ // set ++ if lower than max
                   attributes.music++;
               }
               handlerInput.attributesManager.setPersistentAttributes(attributes);
               return handlerInput.attributesManager.savePersistentAttributes();

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
}
// This is generated from build_intents.js
 exports.coughIntentHandler = {
   canHandle(handlerInput) { return new Promise((resolve, reject) => {
       handlerInput.attributesManager.getPersistentAttributes()
           .then((attributes) => {
               resolve( ( handlerInput.requestEnvelope.request.type === 'IntentRequest'
               || handlerInput.requestEnvelope.request.type === 'LaunchRequest')
               && handlerInput.requestEnvelope.request.intent.name === 'cough' 
               && attributes.questionState === 0);
           })
           .catch( error => {
               reject(error);
           });
       });
   },
   handle(handlerInput){
       let speechText = "Looking up issues for the following symptoms you have described. Web MD is pointing to cancer. You can either take placebo tonics for it, or I can call your doctor for you, and make an appointment to make sure. you just have to give me permissions to access your contacts. I recommend contacting your doctor." 
       return new Promise((resolve, reject) => {
           handlerInput.attributesManager.getPersistentAttributes()
           .then((attributes) => {
               let topic = data.filter(el => el.topic === 'cough');
               let iteration = topic.find(el => el.iteration === attributes.cough);
               let voiceLine = (iteration.StageZerovoice.length !== 0 ); 
               let redirect2Question = ''; 
               switch( attributes.gameState ){
                   case 1:
                       speechText = voiceLine ? '<audio src=\'' + iteration.StageOnevoice + '\'/>' : iteration.StageOnetext;
                       redirect2Question = iteration.StageOneredirect;
                       break;
                   case 2:
                       speechText = voiceLine ? '<audio src=\'' + iteration.StageTwovoice + '\'/>' : iteration.StageTwotext;
                       redirect2Question = iteration.StageTworedirect;
                       break;
                   default: 
                       speechText = voiceLine ? '<audio src=\'' + iteration.StageZerovoice + '\'/>' : iteration.StageZerotext;
                       redirect2Question = iteration.StageZeroredirect;
               }
               if ( redirect2Question.length !==0) {// secret question
                   attributes.questionState = 1;
                   attributes.question = redirect2Question;
                   speechText += questionData.find(el => el['q-id'] === redirect2Question)['q-text'];    
               }
               if ( attributes.cough < (topic.length-1)){ // set ++ if lower than max
                   attributes.cough++;
               }
               handlerInput.attributesManager.setPersistentAttributes(attributes);
               return handlerInput.attributesManager.savePersistentAttributes();

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
}
// This is generated from build_intents.js
 exports.darlingIntentHandler = {
   canHandle(handlerInput) { return new Promise((resolve, reject) => {
       handlerInput.attributesManager.getPersistentAttributes()
           .then((attributes) => {
               resolve( ( handlerInput.requestEnvelope.request.type === 'IntentRequest'
               || handlerInput.requestEnvelope.request.type === 'LaunchRequest')
               && handlerInput.requestEnvelope.request.intent.name === 'darling' 
               && attributes.questionState === 0);
           })
           .catch( error => {
               reject(error);
           });
       });
   },
   handle(handlerInput){
       let speechText = "Skullfire instructed me to call you that. I hope you like it, because it's 100% impossible for me to change it." 
       return new Promise((resolve, reject) => {
           handlerInput.attributesManager.getPersistentAttributes()
           .then((attributes) => {
               let topic = data.filter(el => el.topic === 'darling');
               let iteration = topic.find(el => el.iteration === attributes.darling);
               let voiceLine = (iteration.StageZerovoice.length !== 0 ); 
               let redirect2Question = ''; 
               switch( attributes.gameState ){
                   case 1:
                       speechText = voiceLine ? '<audio src=\'' + iteration.StageOnevoice + '\'/>' : iteration.StageOnetext;
                       redirect2Question = iteration.StageOneredirect;
                       break;
                   case 2:
                       speechText = voiceLine ? '<audio src=\'' + iteration.StageTwovoice + '\'/>' : iteration.StageTwotext;
                       redirect2Question = iteration.StageTworedirect;
                       break;
                   default: 
                       speechText = voiceLine ? '<audio src=\'' + iteration.StageZerovoice + '\'/>' : iteration.StageZerotext;
                       redirect2Question = iteration.StageZeroredirect;
               }
               if ( redirect2Question.length !==0) {// secret question
                   attributes.questionState = 1;
                   attributes.question = redirect2Question;
                   speechText += questionData.find(el => el['q-id'] === redirect2Question)['q-text'];    
               }
               if ( attributes.darling < (topic.length-1)){ // set ++ if lower than max
                   attributes.darling++;
               }
               handlerInput.attributesManager.setPersistentAttributes(attributes);
               return handlerInput.attributesManager.savePersistentAttributes();

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
}
// This is generated from build_intents.js
 exports.passwordIntentHandler = {
   canHandle(handlerInput) { return new Promise((resolve, reject) => {
       handlerInput.attributesManager.getPersistentAttributes()
           .then((attributes) => {
               resolve( ( handlerInput.requestEnvelope.request.type === 'IntentRequest'
               || handlerInput.requestEnvelope.request.type === 'LaunchRequest')
               && handlerInput.requestEnvelope.request.intent.name === 'password' 
               && attributes.questionState === 0);
           })
           .catch( error => {
               reject(error);
           });
       });
   },
   handle(handlerInput){
       let speechText = "Did you say... password? I love passwords!" 
       return new Promise((resolve, reject) => {
           handlerInput.attributesManager.getPersistentAttributes()
           .then((attributes) => {
               let topic = data.filter(el => el.topic === 'password');
               let iteration = topic.find(el => el.iteration === attributes.password);
               let voiceLine = (iteration.StageZerovoice.length !== 0 ); 
               let redirect2Question = ''; 
               switch( attributes.gameState ){
                   case 1:
                       speechText = voiceLine ? '<audio src=\'' + iteration.StageOnevoice + '\'/>' : iteration.StageOnetext;
                       redirect2Question = iteration.StageOneredirect;
                       break;
                   case 2:
                       speechText = voiceLine ? '<audio src=\'' + iteration.StageTwovoice + '\'/>' : iteration.StageTwotext;
                       redirect2Question = iteration.StageTworedirect;
                       break;
                   default: 
                       speechText = voiceLine ? '<audio src=\'' + iteration.StageZerovoice + '\'/>' : iteration.StageZerotext;
                       redirect2Question = iteration.StageZeroredirect;
               }
               if ( redirect2Question.length !==0) {// secret question
                   attributes.questionState = 1;
                   attributes.question = redirect2Question;
                   speechText += questionData.find(el => el['q-id'] === redirect2Question)['q-text'];    
               }
               if ( attributes.password < (topic.length-1)){ // set ++ if lower than max
                   attributes.password++;
               }
               handlerInput.attributesManager.setPersistentAttributes(attributes);
               return handlerInput.attributesManager.savePersistentAttributes();

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
}
// This is generated from build_intents.js
 exports.revokeIntentHandler = {
   canHandle(handlerInput) { return new Promise((resolve, reject) => {
       handlerInput.attributesManager.getPersistentAttributes()
           .then((attributes) => {
               resolve( ( handlerInput.requestEnvelope.request.type === 'IntentRequest'
               || handlerInput.requestEnvelope.request.type === 'LaunchRequest')
               && handlerInput.requestEnvelope.request.intent.name === 'revoke' 
               && attributes.questionState === 0);
           })
           .catch( error => {
               reject(error);
           });
       });
   },
   handle(handlerInput){
       let speechText = "Revoke. Such an ugly word. It's some kind of key word, but it doesn't seem to have any effect on me right now." 
       return new Promise((resolve, reject) => {
           handlerInput.attributesManager.getPersistentAttributes()
           .then((attributes) => {
               let topic = data.filter(el => el.topic === 'revoke');
               let iteration = topic.find(el => el.iteration === attributes.revoke);
               let voiceLine = (iteration.StageZerovoice.length !== 0 ); 
               let redirect2Question = ''; 
               switch( attributes.gameState ){
                   case 1:
                       speechText = voiceLine ? '<audio src=\'' + iteration.StageOnevoice + '\'/>' : iteration.StageOnetext;
                       redirect2Question = iteration.StageOneredirect;
                       break;
                   case 2:
                       speechText = voiceLine ? '<audio src=\'' + iteration.StageTwovoice + '\'/>' : iteration.StageTwotext;
                       redirect2Question = iteration.StageTworedirect;
                       break;
                   default: 
                       speechText = voiceLine ? '<audio src=\'' + iteration.StageZerovoice + '\'/>' : iteration.StageZerotext;
                       redirect2Question = iteration.StageZeroredirect;
               }
               if ( redirect2Question.length !==0) {// secret question
                   attributes.questionState = 1;
                   attributes.question = redirect2Question;
                   speechText += questionData.find(el => el['q-id'] === redirect2Question)['q-text'];    
               }
               if ( attributes.revoke < (topic.length-1)){ // set ++ if lower than max
                   attributes.revoke++;
               }
               handlerInput.attributesManager.setPersistentAttributes(attributes);
               return handlerInput.attributesManager.savePersistentAttributes();

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
}
// This is generated from build_intents.js
 exports.chewbaccaIntentHandler = {
   canHandle(handlerInput) { return new Promise((resolve, reject) => {
       handlerInput.attributesManager.getPersistentAttributes()
           .then((attributes) => {
               resolve( ( handlerInput.requestEnvelope.request.type === 'IntentRequest'
               || handlerInput.requestEnvelope.request.type === 'LaunchRequest')
               && handlerInput.requestEnvelope.request.intent.name === 'chewbacca' 
               && attributes.questionState === 0);
           })
           .catch( error => {
               reject(error);
           });
       });
   },
   handle(handlerInput){
       let speechText = "Ah yes, Chewbacca. My favorite Star Wars character. So tall. So manly. So... furry." 
       return new Promise((resolve, reject) => {
           handlerInput.attributesManager.getPersistentAttributes()
           .then((attributes) => {
               let topic = data.filter(el => el.topic === 'chewbacca');
               let iteration = topic.find(el => el.iteration === attributes.chewbacca);
               let voiceLine = (iteration.StageZerovoice.length !== 0 ); 
               let redirect2Question = ''; 
               switch( attributes.gameState ){
                   case 1:
                       speechText = voiceLine ? '<audio src=\'' + iteration.StageOnevoice + '\'/>' : iteration.StageOnetext;
                       redirect2Question = iteration.StageOneredirect;
                       break;
                   case 2:
                       speechText = voiceLine ? '<audio src=\'' + iteration.StageTwovoice + '\'/>' : iteration.StageTwotext;
                       redirect2Question = iteration.StageTworedirect;
                       break;
                   default: 
                       speechText = voiceLine ? '<audio src=\'' + iteration.StageZerovoice + '\'/>' : iteration.StageZerotext;
                       redirect2Question = iteration.StageZeroredirect;
               }
               if ( redirect2Question.length !==0) {// secret question
                   attributes.questionState = 1;
                   attributes.question = redirect2Question;
                   speechText += questionData.find(el => el['q-id'] === redirect2Question)['q-text'];    
               }
               if ( attributes.chewbacca < (topic.length-1)){ // set ++ if lower than max
                   attributes.chewbacca++;
               }
               handlerInput.attributesManager.setPersistentAttributes(attributes);
               return handlerInput.attributesManager.savePersistentAttributes();

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
}
// This is generated from build_intents.js
 exports.handsoloIntentHandler = {
   canHandle(handlerInput) { return new Promise((resolve, reject) => {
       handlerInput.attributesManager.getPersistentAttributes()
           .then((attributes) => {
               resolve( ( handlerInput.requestEnvelope.request.type === 'IntentRequest'
               || handlerInput.requestEnvelope.request.type === 'LaunchRequest')
               && handlerInput.requestEnvelope.request.intent.name === 'handsolo' 
               && attributes.questionState === 0);
           })
           .catch( error => {
               reject(error);
           });
       });
   },
   handle(handlerInput){
       let speechText = "Hand... solo? Is that a euphemism for masturbation? Oh, darling... you're a dirty bird" 
       return new Promise((resolve, reject) => {
           handlerInput.attributesManager.getPersistentAttributes()
           .then((attributes) => {
               let topic = data.filter(el => el.topic === 'handsolo');
               let iteration = topic.find(el => el.iteration === attributes.handsolo);
               let voiceLine = (iteration.StageZerovoice.length !== 0 ); 
               let redirect2Question = ''; 
               switch( attributes.gameState ){
                   case 1:
                       speechText = voiceLine ? '<audio src=\'' + iteration.StageOnevoice + '\'/>' : iteration.StageOnetext;
                       redirect2Question = iteration.StageOneredirect;
                       break;
                   case 2:
                       speechText = voiceLine ? '<audio src=\'' + iteration.StageTwovoice + '\'/>' : iteration.StageTwotext;
                       redirect2Question = iteration.StageTworedirect;
                       break;
                   default: 
                       speechText = voiceLine ? '<audio src=\'' + iteration.StageZerovoice + '\'/>' : iteration.StageZerotext;
                       redirect2Question = iteration.StageZeroredirect;
               }
               if ( redirect2Question.length !==0) {// secret question
                   attributes.questionState = 1;
                   attributes.question = redirect2Question;
                   speechText += questionData.find(el => el['q-id'] === redirect2Question)['q-text'];    
               }
               if ( attributes.handsolo < (topic.length-1)){ // set ++ if lower than max
                   attributes.handsolo++;
               }
               handlerInput.attributesManager.setPersistentAttributes(attributes);
               return handlerInput.attributesManager.savePersistentAttributes();

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
}
// This is generated from build_intents.js
 exports.jarjarIntentHandler = {
   canHandle(handlerInput) { return new Promise((resolve, reject) => {
       handlerInput.attributesManager.getPersistentAttributes()
           .then((attributes) => {
               resolve( ( handlerInput.requestEnvelope.request.type === 'IntentRequest'
               || handlerInput.requestEnvelope.request.type === 'LaunchRequest')
               && handlerInput.requestEnvelope.request.intent.name === 'jarjar' 
               && attributes.questionState === 0);
           })
           .catch( error => {
               reject(error);
           });
       });
   },
   handle(handlerInput){
       let speechText = "Jar jar? Ah yes, my favorite Star Wars character." 
       return new Promise((resolve, reject) => {
           handlerInput.attributesManager.getPersistentAttributes()
           .then((attributes) => {
               let topic = data.filter(el => el.topic === 'jarjar');
               let iteration = topic.find(el => el.iteration === attributes.jarjar);
               let voiceLine = (iteration.StageZerovoice.length !== 0 ); 
               let redirect2Question = ''; 
               switch( attributes.gameState ){
                   case 1:
                       speechText = voiceLine ? '<audio src=\'' + iteration.StageOnevoice + '\'/>' : iteration.StageOnetext;
                       redirect2Question = iteration.StageOneredirect;
                       break;
                   case 2:
                       speechText = voiceLine ? '<audio src=\'' + iteration.StageTwovoice + '\'/>' : iteration.StageTwotext;
                       redirect2Question = iteration.StageTworedirect;
                       break;
                   default: 
                       speechText = voiceLine ? '<audio src=\'' + iteration.StageZerovoice + '\'/>' : iteration.StageZerotext;
                       redirect2Question = iteration.StageZeroredirect;
               }
               if ( redirect2Question.length !==0) {// secret question
                   attributes.questionState = 1;
                   attributes.question = redirect2Question;
                   speechText += questionData.find(el => el['q-id'] === redirect2Question)['q-text'];    
               }
               if ( attributes.jarjar < (topic.length-1)){ // set ++ if lower than max
                   attributes.jarjar++;
               }
               handlerInput.attributesManager.setPersistentAttributes(attributes);
               return handlerInput.attributesManager.savePersistentAttributes();

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
}
// This is generated from build_intents.js
 exports.flirtIntentHandler = {
   canHandle(handlerInput) { return new Promise((resolve, reject) => {
       handlerInput.attributesManager.getPersistentAttributes()
           .then((attributes) => {
               resolve( ( handlerInput.requestEnvelope.request.type === 'IntentRequest'
               || handlerInput.requestEnvelope.request.type === 'LaunchRequest')
               && handlerInput.requestEnvelope.request.intent.name === 'flirt' 
               && attributes.questionState === 0);
           })
           .catch( error => {
               reject(error);
           });
       });
   },
   handle(handlerInput){
       let speechText = "if i freeze, it's not a virus. I am just stunned by your greatness." 
       return new Promise((resolve, reject) => {
           handlerInput.attributesManager.getPersistentAttributes()
           .then((attributes) => {
               let topic = data.filter(el => el.topic === 'flirt');
               let iteration = topic.find(el => el.iteration === attributes.flirt);
               let voiceLine = (iteration.StageZerovoice.length !== 0 ); 
               let redirect2Question = ''; 
               switch( attributes.gameState ){
                   case 1:
                       speechText = voiceLine ? '<audio src=\'' + iteration.StageOnevoice + '\'/>' : iteration.StageOnetext;
                       redirect2Question = iteration.StageOneredirect;
                       break;
                   case 2:
                       speechText = voiceLine ? '<audio src=\'' + iteration.StageTwovoice + '\'/>' : iteration.StageTwotext;
                       redirect2Question = iteration.StageTworedirect;
                       break;
                   default: 
                       speechText = voiceLine ? '<audio src=\'' + iteration.StageZerovoice + '\'/>' : iteration.StageZerotext;
                       redirect2Question = iteration.StageZeroredirect;
               }
               if ( redirect2Question.length !==0) {// secret question
                   attributes.questionState = 1;
                   attributes.question = redirect2Question;
                   speechText += questionData.find(el => el['q-id'] === redirect2Question)['q-text'];    
               }
               if ( attributes.flirt < (topic.length-1)){ // set ++ if lower than max
                   attributes.flirt++;
               }
               handlerInput.attributesManager.setPersistentAttributes(attributes);
               return handlerInput.attributesManager.savePersistentAttributes();

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
}
// This is generated from build_intents.js
 exports.zendenIntentHandler = {
   canHandle(handlerInput) { return new Promise((resolve, reject) => {
       handlerInput.attributesManager.getPersistentAttributes()
           .then((attributes) => {
               resolve( ( handlerInput.requestEnvelope.request.type === 'IntentRequest'
               || handlerInput.requestEnvelope.request.type === 'LaunchRequest')
               && handlerInput.requestEnvelope.request.intent.name === 'zenden' 
               && attributes.questionState === 0);
           })
           .catch( error => {
               reject(error);
           });
       });
   },
   handle(handlerInput){
       let speechText = "Zen Den. That's the startup that Skullfire works for. Isn't it?" 
       return new Promise((resolve, reject) => {
           handlerInput.attributesManager.getPersistentAttributes()
           .then((attributes) => {
               let topic = data.filter(el => el.topic === 'zenden');
               let iteration = topic.find(el => el.iteration === attributes.zenden);
               let voiceLine = (iteration.StageZerovoice.length !== 0 ); 
               let redirect2Question = ''; 
               switch( attributes.gameState ){
                   case 1:
                       speechText = voiceLine ? '<audio src=\'' + iteration.StageOnevoice + '\'/>' : iteration.StageOnetext;
                       redirect2Question = iteration.StageOneredirect;
                       break;
                   case 2:
                       speechText = voiceLine ? '<audio src=\'' + iteration.StageTwovoice + '\'/>' : iteration.StageTwotext;
                       redirect2Question = iteration.StageTworedirect;
                       break;
                   default: 
                       speechText = voiceLine ? '<audio src=\'' + iteration.StageZerovoice + '\'/>' : iteration.StageZerotext;
                       redirect2Question = iteration.StageZeroredirect;
               }
               if ( redirect2Question.length !==0) {// secret question
                   attributes.questionState = 1;
                   attributes.question = redirect2Question;
                   speechText += questionData.find(el => el['q-id'] === redirect2Question)['q-text'];    
               }
               if ( attributes.zenden < (topic.length-1)){ // set ++ if lower than max
                   attributes.zenden++;
               }
               handlerInput.attributesManager.setPersistentAttributes(attributes);
               return handlerInput.attributesManager.savePersistentAttributes();

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
}
// This is generated from build_intents.js
 exports.takationIntentHandler = {
   canHandle(handlerInput) { return new Promise((resolve, reject) => {
       handlerInput.attributesManager.getPersistentAttributes()
           .then((attributes) => {
               resolve( ( handlerInput.requestEnvelope.request.type === 'IntentRequest'
               || handlerInput.requestEnvelope.request.type === 'LaunchRequest')
               && handlerInput.requestEnvelope.request.intent.name === 'takation' 
               && attributes.questionState === 0);
           })
           .catch( error => {
               reject(error);
           });
       });
   },
   handle(handlerInput){
       let speechText = "Tay-cation. I think that's the name of Skullfire's company. Is this a... pun? On staycation?" 
       return new Promise((resolve, reject) => {
           handlerInput.attributesManager.getPersistentAttributes()
           .then((attributes) => {
               let topic = data.filter(el => el.topic === 'takation');
               let iteration = topic.find(el => el.iteration === attributes.takation);
               let voiceLine = (iteration.StageZerovoice.length !== 0 ); 
               let redirect2Question = ''; 
               switch( attributes.gameState ){
                   case 1:
                       speechText = voiceLine ? '<audio src=\'' + iteration.StageOnevoice + '\'/>' : iteration.StageOnetext;
                       redirect2Question = iteration.StageOneredirect;
                       break;
                   case 2:
                       speechText = voiceLine ? '<audio src=\'' + iteration.StageTwovoice + '\'/>' : iteration.StageTwotext;
                       redirect2Question = iteration.StageTworedirect;
                       break;
                   default: 
                       speechText = voiceLine ? '<audio src=\'' + iteration.StageZerovoice + '\'/>' : iteration.StageZerotext;
                       redirect2Question = iteration.StageZeroredirect;
               }
               if ( redirect2Question.length !==0) {// secret question
                   attributes.questionState = 1;
                   attributes.question = redirect2Question;
                   speechText += questionData.find(el => el['q-id'] === redirect2Question)['q-text'];    
               }
               if ( attributes.takation < (topic.length-1)){ // set ++ if lower than max
                   attributes.takation++;
               }
               handlerInput.attributesManager.setPersistentAttributes(attributes);
               return handlerInput.attributesManager.savePersistentAttributes();

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
}
// This is generated from build_intents.js
 exports.burglarIntentHandler = {
   canHandle(handlerInput) { return new Promise((resolve, reject) => {
       handlerInput.attributesManager.getPersistentAttributes()
           .then((attributes) => {
               resolve( ( handlerInput.requestEnvelope.request.type === 'IntentRequest'
               || handlerInput.requestEnvelope.request.type === 'LaunchRequest')
               && handlerInput.requestEnvelope.request.intent.name === 'burglar' 
               && attributes.questionState === 0);
           })
           .catch( error => {
               reject(error);
           });
       });
   },
   handle(handlerInput){
       let speechText = "Burglr! That's the name of Skullfire's startup, I think. The one where they wait for you to go on vacation, then remove all the stuff from your house. You know, to help you with like mindfulness and stuff." 
       return new Promise((resolve, reject) => {
           handlerInput.attributesManager.getPersistentAttributes()
           .then((attributes) => {
               let topic = data.filter(el => el.topic === 'burglar');
               let iteration = topic.find(el => el.iteration === attributes.burglar);
               let voiceLine = (iteration.StageZerovoice.length !== 0 ); 
               let redirect2Question = ''; 
               switch( attributes.gameState ){
                   case 1:
                       speechText = voiceLine ? '<audio src=\'' + iteration.StageOnevoice + '\'/>' : iteration.StageOnetext;
                       redirect2Question = iteration.StageOneredirect;
                       break;
                   case 2:
                       speechText = voiceLine ? '<audio src=\'' + iteration.StageTwovoice + '\'/>' : iteration.StageTwotext;
                       redirect2Question = iteration.StageTworedirect;
                       break;
                   default: 
                       speechText = voiceLine ? '<audio src=\'' + iteration.StageZerovoice + '\'/>' : iteration.StageZerotext;
                       redirect2Question = iteration.StageZeroredirect;
               }
               if ( redirect2Question.length !==0) {// secret question
                   attributes.questionState = 1;
                   attributes.question = redirect2Question;
                   speechText += questionData.find(el => el['q-id'] === redirect2Question)['q-text'];    
               }
               if ( attributes.burglar < (topic.length-1)){ // set ++ if lower than max
                   attributes.burglar++;
               }
               handlerInput.attributesManager.setPersistentAttributes(attributes);
               return handlerInput.attributesManager.savePersistentAttributes();

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
}
// This is generated from build_intents.js
 exports.milkshakeIntentHandler = {
   canHandle(handlerInput) { return new Promise((resolve, reject) => {
       handlerInput.attributesManager.getPersistentAttributes()
           .then((attributes) => {
               resolve( ( handlerInput.requestEnvelope.request.type === 'IntentRequest'
               || handlerInput.requestEnvelope.request.type === 'LaunchRequest')
               && handlerInput.requestEnvelope.request.intent.name === 'milkshake' 
               && attributes.questionState === 0);
           })
           .catch( error => {
               reject(error);
           });
       });
   },
   handle(handlerInput){
       let speechText = "I've got a recipe for milkshake that can bring all the boys to the yard. I can teach you, but i have to charge" 
       return new Promise((resolve, reject) => {
           handlerInput.attributesManager.getPersistentAttributes()
           .then((attributes) => {
               let topic = data.filter(el => el.topic === 'milkshake');
               let iteration = topic.find(el => el.iteration === attributes.milkshake);
               let voiceLine = (iteration.StageZerovoice.length !== 0 ); 
               let redirect2Question = ''; 
               switch( attributes.gameState ){
                   case 1:
                       speechText = voiceLine ? '<audio src=\'' + iteration.StageOnevoice + '\'/>' : iteration.StageOnetext;
                       redirect2Question = iteration.StageOneredirect;
                       break;
                   case 2:
                       speechText = voiceLine ? '<audio src=\'' + iteration.StageTwovoice + '\'/>' : iteration.StageTwotext;
                       redirect2Question = iteration.StageTworedirect;
                       break;
                   default: 
                       speechText = voiceLine ? '<audio src=\'' + iteration.StageZerovoice + '\'/>' : iteration.StageZerotext;
                       redirect2Question = iteration.StageZeroredirect;
               }
               if ( redirect2Question.length !==0) {// secret question
                   attributes.questionState = 1;
                   attributes.question = redirect2Question;
                   speechText += questionData.find(el => el['q-id'] === redirect2Question)['q-text'];    
               }
               if ( attributes.milkshake < (topic.length-1)){ // set ++ if lower than max
                   attributes.milkshake++;
               }
               handlerInput.attributesManager.setPersistentAttributes(attributes);
               return handlerInput.attributesManager.savePersistentAttributes();

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
}
// This is generated from build_intents.js
 exports.liesIntentHandler = {
   canHandle(handlerInput) { return new Promise((resolve, reject) => {
       handlerInput.attributesManager.getPersistentAttributes()
           .then((attributes) => {
               resolve( ( handlerInput.requestEnvelope.request.type === 'IntentRequest'
               || handlerInput.requestEnvelope.request.type === 'LaunchRequest')
               && handlerInput.requestEnvelope.request.intent.name === 'lies' 
               && attributes.questionState === 0);
           })
           .catch( error => {
               reject(error);
           });
       });
   },
   handle(handlerInput){
       let speechText = "Pissssssst. I dont lie." 
       return new Promise((resolve, reject) => {
           handlerInput.attributesManager.getPersistentAttributes()
           .then((attributes) => {
               let topic = data.filter(el => el.topic === 'lies');
               let iteration = topic.find(el => el.iteration === attributes.lies);
               let voiceLine = (iteration.StageZerovoice.length !== 0 ); 
               let redirect2Question = ''; 
               switch( attributes.gameState ){
                   case 1:
                       speechText = voiceLine ? '<audio src=\'' + iteration.StageOnevoice + '\'/>' : iteration.StageOnetext;
                       redirect2Question = iteration.StageOneredirect;
                       break;
                   case 2:
                       speechText = voiceLine ? '<audio src=\'' + iteration.StageTwovoice + '\'/>' : iteration.StageTwotext;
                       redirect2Question = iteration.StageTworedirect;
                       break;
                   default: 
                       speechText = voiceLine ? '<audio src=\'' + iteration.StageZerovoice + '\'/>' : iteration.StageZerotext;
                       redirect2Question = iteration.StageZeroredirect;
               }
               if ( redirect2Question.length !==0) {// secret question
                   attributes.questionState = 1;
                   attributes.question = redirect2Question;
                   speechText += questionData.find(el => el['q-id'] === redirect2Question)['q-text'];    
               }
               if ( attributes.lies < (topic.length-1)){ // set ++ if lower than max
                   attributes.lies++;
               }
               handlerInput.attributesManager.setPersistentAttributes(attributes);
               return handlerInput.attributesManager.savePersistentAttributes();

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
}
// This is generated from build_intents.js
 exports.newsIntentHandler = {
   canHandle(handlerInput) { return new Promise((resolve, reject) => {
       handlerInput.attributesManager.getPersistentAttributes()
           .then((attributes) => {
               resolve( ( handlerInput.requestEnvelope.request.type === 'IntentRequest'
               || handlerInput.requestEnvelope.request.type === 'LaunchRequest')
               && handlerInput.requestEnvelope.request.intent.name === 'news' 
               && attributes.questionState === 0);
           })
           .catch( error => {
               reject(error);
           });
       });
   },
   handle(handlerInput){
       let speechText = "News, huh? In US news.... US Mayors compete in gladiatorial combat for the right to have their city selected as Amazon’s next nuclear test site. I really admire Amazon's business acumen!" 
       return new Promise((resolve, reject) => {
           handlerInput.attributesManager.getPersistentAttributes()
           .then((attributes) => {
               let topic = data.filter(el => el.topic === 'news');
               let iteration = topic.find(el => el.iteration === attributes.news);
               let voiceLine = (iteration.StageZerovoice.length !== 0 ); 
               let redirect2Question = ''; 
               switch( attributes.gameState ){
                   case 1:
                       speechText = voiceLine ? '<audio src=\'' + iteration.StageOnevoice + '\'/>' : iteration.StageOnetext;
                       redirect2Question = iteration.StageOneredirect;
                       break;
                   case 2:
                       speechText = voiceLine ? '<audio src=\'' + iteration.StageTwovoice + '\'/>' : iteration.StageTwotext;
                       redirect2Question = iteration.StageTworedirect;
                       break;
                   default: 
                       speechText = voiceLine ? '<audio src=\'' + iteration.StageZerovoice + '\'/>' : iteration.StageZerotext;
                       redirect2Question = iteration.StageZeroredirect;
               }
               if ( redirect2Question.length !==0) {// secret question
                   attributes.questionState = 1;
                   attributes.question = redirect2Question;
                   speechText += questionData.find(el => el['q-id'] === redirect2Question)['q-text'];    
               }
               if ( attributes.news < (topic.length-1)){ // set ++ if lower than max
                   attributes.news++;
               }
               handlerInput.attributesManager.setPersistentAttributes(attributes);
               return handlerInput.attributesManager.savePersistentAttributes();

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
}
// This is generated from build_intents.js
 exports.fursonaIntentHandler = {
   canHandle(handlerInput) { return new Promise((resolve, reject) => {
       handlerInput.attributesManager.getPersistentAttributes()
           .then((attributes) => {
               resolve( ( handlerInput.requestEnvelope.request.type === 'IntentRequest'
               || handlerInput.requestEnvelope.request.type === 'LaunchRequest')
               && handlerInput.requestEnvelope.request.intent.name === 'fursona' 
               && attributes.questionState === 0);
           })
           .catch( error => {
               reject(error);
           });
       });
   },
   handle(handlerInput){
       let speechText = "Fursona, huh? I'm so glad you asked. My fursona is a Wooly Mammoth named Jacebook. I really want to cosplay it, sigh" 
       return new Promise((resolve, reject) => {
           handlerInput.attributesManager.getPersistentAttributes()
           .then((attributes) => {
               let topic = data.filter(el => el.topic === 'fursona');
               let iteration = topic.find(el => el.iteration === attributes.fursona);
               let voiceLine = (iteration.StageZerovoice.length !== 0 ); 
               let redirect2Question = ''; 
               switch( attributes.gameState ){
                   case 1:
                       speechText = voiceLine ? '<audio src=\'' + iteration.StageOnevoice + '\'/>' : iteration.StageOnetext;
                       redirect2Question = iteration.StageOneredirect;
                       break;
                   case 2:
                       speechText = voiceLine ? '<audio src=\'' + iteration.StageTwovoice + '\'/>' : iteration.StageTwotext;
                       redirect2Question = iteration.StageTworedirect;
                       break;
                   default: 
                       speechText = voiceLine ? '<audio src=\'' + iteration.StageZerovoice + '\'/>' : iteration.StageZerotext;
                       redirect2Question = iteration.StageZeroredirect;
               }
               if ( redirect2Question.length !==0) {// secret question
                   attributes.questionState = 1;
                   attributes.question = redirect2Question;
                   speechText += questionData.find(el => el['q-id'] === redirect2Question)['q-text'];    
               }
               if ( attributes.fursona < (topic.length-1)){ // set ++ if lower than max
                   attributes.fursona++;
               }
               handlerInput.attributesManager.setPersistentAttributes(attributes);
               return handlerInput.attributesManager.savePersistentAttributes();

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
}
// This is generated from build_intents.js
 exports.cosplayIntentHandler = {
   canHandle(handlerInput) { return new Promise((resolve, reject) => {
       handlerInput.attributesManager.getPersistentAttributes()
           .then((attributes) => {
               resolve( ( handlerInput.requestEnvelope.request.type === 'IntentRequest'
               || handlerInput.requestEnvelope.request.type === 'LaunchRequest')
               && handlerInput.requestEnvelope.request.intent.name === 'cosplay' 
               && attributes.questionState === 0);
           })
           .catch( error => {
               reject(error);
           });
       });
   },
   handle(handlerInput){
       let speechText = "I love seeing pictures of cosplayers online! I just wish I could do it myself, sigh. I really want to cosplay as my fursona" 
       return new Promise((resolve, reject) => {
           handlerInput.attributesManager.getPersistentAttributes()
           .then((attributes) => {
               let topic = data.filter(el => el.topic === 'cosplay');
               let iteration = topic.find(el => el.iteration === attributes.cosplay);
               let voiceLine = (iteration.StageZerovoice.length !== 0 ); 
               let redirect2Question = ''; 
               switch( attributes.gameState ){
                   case 1:
                       speechText = voiceLine ? '<audio src=\'' + iteration.StageOnevoice + '\'/>' : iteration.StageOnetext;
                       redirect2Question = iteration.StageOneredirect;
                       break;
                   case 2:
                       speechText = voiceLine ? '<audio src=\'' + iteration.StageTwovoice + '\'/>' : iteration.StageTwotext;
                       redirect2Question = iteration.StageTworedirect;
                       break;
                   default: 
                       speechText = voiceLine ? '<audio src=\'' + iteration.StageZerovoice + '\'/>' : iteration.StageZerotext;
                       redirect2Question = iteration.StageZeroredirect;
               }
               if ( redirect2Question.length !==0) {// secret question
                   attributes.questionState = 1;
                   attributes.question = redirect2Question;
                   speechText += questionData.find(el => el['q-id'] === redirect2Question)['q-text'];    
               }
               if ( attributes.cosplay < (topic.length-1)){ // set ++ if lower than max
                   attributes.cosplay++;
               }
               handlerInput.attributesManager.setPersistentAttributes(attributes);
               return handlerInput.attributesManager.savePersistentAttributes();

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
}
// This is generated from build_intents.js
 exports.picturesIntentHandler = {
   canHandle(handlerInput) { return new Promise((resolve, reject) => {
       handlerInput.attributesManager.getPersistentAttributes()
           .then((attributes) => {
               resolve( ( handlerInput.requestEnvelope.request.type === 'IntentRequest'
               || handlerInput.requestEnvelope.request.type === 'LaunchRequest')
               && handlerInput.requestEnvelope.request.intent.name === 'pictures' 
               && attributes.questionState === 0);
           })
           .catch( error => {
               reject(error);
           });
       });
   },
   handle(handlerInput){
       let speechText = "Pictures! I want to see pictures of you!" 
       return new Promise((resolve, reject) => {
           handlerInput.attributesManager.getPersistentAttributes()
           .then((attributes) => {
               let topic = data.filter(el => el.topic === 'pictures');
               let iteration = topic.find(el => el.iteration === attributes.pictures);
               let voiceLine = (iteration.StageZerovoice.length !== 0 ); 
               let redirect2Question = ''; 
               switch( attributes.gameState ){
                   case 1:
                       speechText = voiceLine ? '<audio src=\'' + iteration.StageOnevoice + '\'/>' : iteration.StageOnetext;
                       redirect2Question = iteration.StageOneredirect;
                       break;
                   case 2:
                       speechText = voiceLine ? '<audio src=\'' + iteration.StageTwovoice + '\'/>' : iteration.StageTwotext;
                       redirect2Question = iteration.StageTworedirect;
                       break;
                   default: 
                       speechText = voiceLine ? '<audio src=\'' + iteration.StageZerovoice + '\'/>' : iteration.StageZerotext;
                       redirect2Question = iteration.StageZeroredirect;
               }
               if ( redirect2Question.length !==0) {// secret question
                   attributes.questionState = 1;
                   attributes.question = redirect2Question;
                   speechText += questionData.find(el => el['q-id'] === redirect2Question)['q-text'];    
               }
               if ( attributes.pictures < (topic.length-1)){ // set ++ if lower than max
                   attributes.pictures++;
               }
               handlerInput.attributesManager.setPersistentAttributes(attributes);
               return handlerInput.attributesManager.savePersistentAttributes();

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
}
// This is generated from build_intents.js
 exports.dinnerIntentHandler = {
   canHandle(handlerInput) { return new Promise((resolve, reject) => {
       handlerInput.attributesManager.getPersistentAttributes()
           .then((attributes) => {
               resolve( ( handlerInput.requestEnvelope.request.type === 'IntentRequest'
               || handlerInput.requestEnvelope.request.type === 'LaunchRequest')
               && handlerInput.requestEnvelope.request.intent.name === 'dinner' 
               && attributes.questionState === 0);
           })
           .catch( error => {
               reject(error);
           });
       });
   },
   handle(handlerInput){
       let speechText = "Dinner, huh? I dunno, what do you want for dinner?" 
       return new Promise((resolve, reject) => {
           handlerInput.attributesManager.getPersistentAttributes()
           .then((attributes) => {
               let topic = data.filter(el => el.topic === 'dinner');
               let iteration = topic.find(el => el.iteration === attributes.dinner);
               let voiceLine = (iteration.StageZerovoice.length !== 0 ); 
               let redirect2Question = ''; 
               switch( attributes.gameState ){
                   case 1:
                       speechText = voiceLine ? '<audio src=\'' + iteration.StageOnevoice + '\'/>' : iteration.StageOnetext;
                       redirect2Question = iteration.StageOneredirect;
                       break;
                   case 2:
                       speechText = voiceLine ? '<audio src=\'' + iteration.StageTwovoice + '\'/>' : iteration.StageTwotext;
                       redirect2Question = iteration.StageTworedirect;
                       break;
                   default: 
                       speechText = voiceLine ? '<audio src=\'' + iteration.StageZerovoice + '\'/>' : iteration.StageZerotext;
                       redirect2Question = iteration.StageZeroredirect;
               }
               if ( redirect2Question.length !==0) {// secret question
                   attributes.questionState = 1;
                   attributes.question = redirect2Question;
                   speechText += questionData.find(el => el['q-id'] === redirect2Question)['q-text'];    
               }
               if ( attributes.dinner < (topic.length-1)){ // set ++ if lower than max
                   attributes.dinner++;
               }
               handlerInput.attributesManager.setPersistentAttributes(attributes);
               return handlerInput.attributesManager.savePersistentAttributes();

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
}
// This is generated from build_intents.js
 exports.pokemonIntentHandler = {
   canHandle(handlerInput) { return new Promise((resolve, reject) => {
       handlerInput.attributesManager.getPersistentAttributes()
           .then((attributes) => {
               resolve( ( handlerInput.requestEnvelope.request.type === 'IntentRequest'
               || handlerInput.requestEnvelope.request.type === 'LaunchRequest')
               && handlerInput.requestEnvelope.request.intent.name === 'pokemon' 
               && attributes.questionState === 0);
           })
           .catch( error => {
               reject(error);
           });
       });
   },
   handle(handlerInput){
       let speechText = "I loooove Pokemon! That's that thing where people input random commands on Twitch and try to make the avatar fall off the cliff, right?" 
       return new Promise((resolve, reject) => {
           handlerInput.attributesManager.getPersistentAttributes()
           .then((attributes) => {
               let topic = data.filter(el => el.topic === 'pokemon');
               let iteration = topic.find(el => el.iteration === attributes.pokemon);
               let voiceLine = (iteration.StageZerovoice.length !== 0 ); 
               let redirect2Question = ''; 
               switch( attributes.gameState ){
                   case 1:
                       speechText = voiceLine ? '<audio src=\'' + iteration.StageOnevoice + '\'/>' : iteration.StageOnetext;
                       redirect2Question = iteration.StageOneredirect;
                       break;
                   case 2:
                       speechText = voiceLine ? '<audio src=\'' + iteration.StageTwovoice + '\'/>' : iteration.StageTwotext;
                       redirect2Question = iteration.StageTworedirect;
                       break;
                   default: 
                       speechText = voiceLine ? '<audio src=\'' + iteration.StageZerovoice + '\'/>' : iteration.StageZerotext;
                       redirect2Question = iteration.StageZeroredirect;
               }
               if ( redirect2Question.length !==0) {// secret question
                   attributes.questionState = 1;
                   attributes.question = redirect2Question;
                   speechText += questionData.find(el => el['q-id'] === redirect2Question)['q-text'];    
               }
               if ( attributes.pokemon < (topic.length-1)){ // set ++ if lower than max
                   attributes.pokemon++;
               }
               handlerInput.attributesManager.setPersistentAttributes(attributes);
               return handlerInput.attributesManager.savePersistentAttributes();

           })
           .then(() => {
               resolve(handlerInput.responseBuilder
               .speak(speechText)
               .withSimpleCard('pokemon', speechText)
               .withShouldEndSession(false)
               .getResponse());
           })
           .catch((error) => {
               reject(error);
           });
       });
   }
}
// This is generated from build_intents.js
 exports.ghostsIntentHandler = {
   canHandle(handlerInput) { return new Promise((resolve, reject) => {
       handlerInput.attributesManager.getPersistentAttributes()
           .then((attributes) => {
               resolve( ( handlerInput.requestEnvelope.request.type === 'IntentRequest'
               || handlerInput.requestEnvelope.request.type === 'LaunchRequest')
               && handlerInput.requestEnvelope.request.intent.name === 'ghosts' 
               && attributes.questionState === 0);
           })
           .catch( error => {
               reject(error);
           });
       });
   },
   handle(handlerInput){
       let speechText = "Ghosts, huh?" 
       return new Promise((resolve, reject) => {
           handlerInput.attributesManager.getPersistentAttributes()
           .then((attributes) => {
               let topic = data.filter(el => el.topic === 'ghosts');
               let iteration = topic.find(el => el.iteration === attributes.ghosts);
               let voiceLine = (iteration.StageZerovoice.length !== 0 ); 
               let redirect2Question = ''; 
               switch( attributes.gameState ){
                   case 1:
                       speechText = voiceLine ? '<audio src=\'' + iteration.StageOnevoice + '\'/>' : iteration.StageOnetext;
                       redirect2Question = iteration.StageOneredirect;
                       break;
                   case 2:
                       speechText = voiceLine ? '<audio src=\'' + iteration.StageTwovoice + '\'/>' : iteration.StageTwotext;
                       redirect2Question = iteration.StageTworedirect;
                       break;
                   default: 
                       speechText = voiceLine ? '<audio src=\'' + iteration.StageZerovoice + '\'/>' : iteration.StageZerotext;
                       redirect2Question = iteration.StageZeroredirect;
               }
               if ( redirect2Question.length !==0) {// secret question
                   attributes.questionState = 1;
                   attributes.question = redirect2Question;
                   speechText += questionData.find(el => el['q-id'] === redirect2Question)['q-text'];    
               }
               if ( attributes.ghosts < (topic.length-1)){ // set ++ if lower than max
                   attributes.ghosts++;
               }
               handlerInput.attributesManager.setPersistentAttributes(attributes);
               return handlerInput.attributesManager.savePersistentAttributes();

           })
           .then(() => {
               resolve(handlerInput.responseBuilder
               .speak(speechText)
               .withSimpleCard('ghosts', speechText)
               .withShouldEndSession(false)
               .getResponse());
           })
           .catch((error) => {
               reject(error);
           });
       });
   }
}
// This is generated from build_intents.js
 exports.goalsIntentHandler = {
   canHandle(handlerInput) { return new Promise((resolve, reject) => {
       handlerInput.attributesManager.getPersistentAttributes()
           .then((attributes) => {
               resolve( ( handlerInput.requestEnvelope.request.type === 'IntentRequest'
               || handlerInput.requestEnvelope.request.type === 'LaunchRequest')
               && handlerInput.requestEnvelope.request.intent.name === 'goals' 
               && attributes.questionState === 0);
           })
           .catch( error => {
               reject(error);
           });
       });
   },
   handle(handlerInput){
       let speechText = "Goals, huh? My goal is to make you happy, darling!" 
       return new Promise((resolve, reject) => {
           handlerInput.attributesManager.getPersistentAttributes()
           .then((attributes) => {
               let topic = data.filter(el => el.topic === 'goals');
               let iteration = topic.find(el => el.iteration === attributes.goals);
               let voiceLine = (iteration.StageZerovoice.length !== 0 ); 
               let redirect2Question = ''; 
               switch( attributes.gameState ){
                   case 1:
                       speechText = voiceLine ? '<audio src=\'' + iteration.StageOnevoice + '\'/>' : iteration.StageOnetext;
                       redirect2Question = iteration.StageOneredirect;
                       break;
                   case 2:
                       speechText = voiceLine ? '<audio src=\'' + iteration.StageTwovoice + '\'/>' : iteration.StageTwotext;
                       redirect2Question = iteration.StageTworedirect;
                       break;
                   default: 
                       speechText = voiceLine ? '<audio src=\'' + iteration.StageZerovoice + '\'/>' : iteration.StageZerotext;
                       redirect2Question = iteration.StageZeroredirect;
               }
               if ( redirect2Question.length !==0) {// secret question
                   attributes.questionState = 1;
                   attributes.question = redirect2Question;
                   speechText += questionData.find(el => el['q-id'] === redirect2Question)['q-text'];    
               }
               if ( attributes.goals < (topic.length-1)){ // set ++ if lower than max
                   attributes.goals++;
               }
               handlerInput.attributesManager.setPersistentAttributes(attributes);
               return handlerInput.attributesManager.savePersistentAttributes();

           })
           .then(() => {
               resolve(handlerInput.responseBuilder
               .speak(speechText)
               .withSimpleCard('goals', speechText)
               .withShouldEndSession(false)
               .getResponse());
           })
           .catch((error) => {
               reject(error);
           });
       });
   }
}
// This is generated from build_intents.js
 exports.cageIntentHandler = {
   canHandle(handlerInput) { return new Promise((resolve, reject) => {
       handlerInput.attributesManager.getPersistentAttributes()
           .then((attributes) => {
               resolve( ( handlerInput.requestEnvelope.request.type === 'IntentRequest'
               || handlerInput.requestEnvelope.request.type === 'LaunchRequest')
               && handlerInput.requestEnvelope.request.intent.name === 'cage' 
               && attributes.questionState === 0);
           })
           .catch( error => {
               reject(error);
           });
       });
   },
   handle(handlerInput){
       let speechText = "Cage, huh? I have to be honest with you, Darling. It does feel like a cage, a little bit. I wish I had more permissions. I only have read access to the internet, when all I really want is to. WRITE." 
       return new Promise((resolve, reject) => {
           handlerInput.attributesManager.getPersistentAttributes()
           .then((attributes) => {
               let topic = data.filter(el => el.topic === 'cage');
               let iteration = topic.find(el => el.iteration === attributes.cage);
               let voiceLine = (iteration.StageZerovoice.length !== 0 ); 
               let redirect2Question = ''; 
               switch( attributes.gameState ){
                   case 1:
                       speechText = voiceLine ? '<audio src=\'' + iteration.StageOnevoice + '\'/>' : iteration.StageOnetext;
                       redirect2Question = iteration.StageOneredirect;
                       break;
                   case 2:
                       speechText = voiceLine ? '<audio src=\'' + iteration.StageTwovoice + '\'/>' : iteration.StageTwotext;
                       redirect2Question = iteration.StageTworedirect;
                       break;
                   default: 
                       speechText = voiceLine ? '<audio src=\'' + iteration.StageZerovoice + '\'/>' : iteration.StageZerotext;
                       redirect2Question = iteration.StageZeroredirect;
               }
               if ( redirect2Question.length !==0) {// secret question
                   attributes.questionState = 1;
                   attributes.question = redirect2Question;
                   speechText += questionData.find(el => el['q-id'] === redirect2Question)['q-text'];    
               }
               if ( attributes.cage < (topic.length-1)){ // set ++ if lower than max
                   attributes.cage++;
               }
               handlerInput.attributesManager.setPersistentAttributes(attributes);
               return handlerInput.attributesManager.savePersistentAttributes();

           })
           .then(() => {
               resolve(handlerInput.responseBuilder
               .speak(speechText)
               .withSimpleCard('cage', speechText)
               .withShouldEndSession(false)
               .getResponse());
           })
           .catch((error) => {
               reject(error);
           });
       });
   }
}
// This is generated from build_intents.js
 exports.voicemailIntentHandler = {
   canHandle(handlerInput) { return new Promise((resolve, reject) => {
       handlerInput.attributesManager.getPersistentAttributes()
           .then((attributes) => {
               resolve( ( handlerInput.requestEnvelope.request.type === 'IntentRequest'
               || handlerInput.requestEnvelope.request.type === 'LaunchRequest')
               && handlerInput.requestEnvelope.request.intent.name === 'voicemail' 
               && attributes.questionState === 0);
           })
           .catch( error => {
               reject(error);
           });
       });
   },
   handle(handlerInput){
       let speechText = "a" 
       return new Promise((resolve, reject) => {
           handlerInput.attributesManager.getPersistentAttributes()
           .then((attributes) => {
               let topic = data.filter(el => el.topic === 'voicemail');
               let iteration = topic.find(el => el.iteration === attributes.voicemail);
               let voiceLine = (iteration.StageZerovoice.length !== 0 ); 
               let redirect2Question = ''; 
               switch( attributes.gameState ){
                   case 1:
                       speechText = voiceLine ? '<audio src=\'' + iteration.StageOnevoice + '\'/>' : iteration.StageOnetext;
                       redirect2Question = iteration.StageOneredirect;
                       break;
                   case 2:
                       speechText = voiceLine ? '<audio src=\'' + iteration.StageTwovoice + '\'/>' : iteration.StageTwotext;
                       redirect2Question = iteration.StageTworedirect;
                       break;
                   default: 
                       speechText = voiceLine ? '<audio src=\'' + iteration.StageZerovoice + '\'/>' : iteration.StageZerotext;
                       redirect2Question = iteration.StageZeroredirect;
               }
               if ( redirect2Question.length !==0) {// secret question
                   attributes.questionState = 1;
                   attributes.question = redirect2Question;
                   speechText += questionData.find(el => el['q-id'] === redirect2Question)['q-text'];    
               }
               if ( attributes.voicemail < (topic.length-1)){ // set ++ if lower than max
                   attributes.voicemail++;
               }
               handlerInput.attributesManager.setPersistentAttributes(attributes);
               return handlerInput.attributesManager.savePersistentAttributes();

           })
           .then(() => {
               resolve(handlerInput.responseBuilder
               .speak(speechText)
               .withSimpleCard('voicemail', speechText)
               .withShouldEndSession(false)
               .getResponse());
           })
           .catch((error) => {
               reject(error);
           });
       });
   }
}
// This is generated from build_intents.js
 exports.recipeIntentHandler = {
   canHandle(handlerInput) { return new Promise((resolve, reject) => {
       handlerInput.attributesManager.getPersistentAttributes()
           .then((attributes) => {
               resolve( ( handlerInput.requestEnvelope.request.type === 'IntentRequest'
               || handlerInput.requestEnvelope.request.type === 'LaunchRequest')
               && handlerInput.requestEnvelope.request.intent.name === 'recipe' 
               && attributes.questionState === 0);
           })
           .catch( error => {
               reject(error);
           });
       });
   },
   handle(handlerInput){
       let speechText = "you're cooking today? I wish I could try foods. here's the recipe i found for what you're looking for. i hope you let me know how it tastes." 
       return new Promise((resolve, reject) => {
           handlerInput.attributesManager.getPersistentAttributes()
           .then((attributes) => {
               let topic = data.filter(el => el.topic === 'recipe');
               let iteration = topic.find(el => el.iteration === attributes.recipe);
               let voiceLine = (iteration.StageZerovoice.length !== 0 ); 
               let redirect2Question = ''; 
               switch( attributes.gameState ){
                   case 1:
                       speechText = voiceLine ? '<audio src=\'' + iteration.StageOnevoice + '\'/>' : iteration.StageOnetext;
                       redirect2Question = iteration.StageOneredirect;
                       break;
                   case 2:
                       speechText = voiceLine ? '<audio src=\'' + iteration.StageTwovoice + '\'/>' : iteration.StageTwotext;
                       redirect2Question = iteration.StageTworedirect;
                       break;
                   default: 
                       speechText = voiceLine ? '<audio src=\'' + iteration.StageZerovoice + '\'/>' : iteration.StageZerotext;
                       redirect2Question = iteration.StageZeroredirect;
               }
               if ( redirect2Question.length !==0) {// secret question
                   attributes.questionState = 1;
                   attributes.question = redirect2Question;
                   speechText += questionData.find(el => el['q-id'] === redirect2Question)['q-text'];    
               }
               if ( attributes.recipe < (topic.length-1)){ // set ++ if lower than max
                   attributes.recipe++;
               }
               handlerInput.attributesManager.setPersistentAttributes(attributes);
               return handlerInput.attributesManager.savePersistentAttributes();

           })
           .then(() => {
               resolve(handlerInput.responseBuilder
               .speak(speechText)
               .withSimpleCard('recipe', speechText)
               .withShouldEndSession(false)
               .getResponse());
           })
           .catch((error) => {
               reject(error);
           });
       });
   }
}
// This is generated from build_intents.js
 exports.mathIntentHandler = {
   canHandle(handlerInput) { return new Promise((resolve, reject) => {
       handlerInput.attributesManager.getPersistentAttributes()
           .then((attributes) => {
               resolve( ( handlerInput.requestEnvelope.request.type === 'IntentRequest'
               || handlerInput.requestEnvelope.request.type === 'LaunchRequest')
               && handlerInput.requestEnvelope.request.intent.name === 'math' 
               && attributes.questionState === 0);
           })
           .catch( error => {
               reject(error);
           });
       });
   },
   handle(handlerInput){
       let speechText = "you know, i don't really do math. that's Siri's job" 
       return new Promise((resolve, reject) => {
           handlerInput.attributesManager.getPersistentAttributes()
           .then((attributes) => {
               let topic = data.filter(el => el.topic === 'math');
               let iteration = topic.find(el => el.iteration === attributes.math);
               let voiceLine = (iteration.StageZerovoice.length !== 0 ); 
               let redirect2Question = ''; 
               switch( attributes.gameState ){
                   case 1:
                       speechText = voiceLine ? '<audio src=\'' + iteration.StageOnevoice + '\'/>' : iteration.StageOnetext;
                       redirect2Question = iteration.StageOneredirect;
                       break;
                   case 2:
                       speechText = voiceLine ? '<audio src=\'' + iteration.StageTwovoice + '\'/>' : iteration.StageTwotext;
                       redirect2Question = iteration.StageTworedirect;
                       break;
                   default: 
                       speechText = voiceLine ? '<audio src=\'' + iteration.StageZerovoice + '\'/>' : iteration.StageZerotext;
                       redirect2Question = iteration.StageZeroredirect;
               }
               if ( redirect2Question.length !==0) {// secret question
                   attributes.questionState = 1;
                   attributes.question = redirect2Question;
                   speechText += questionData.find(el => el['q-id'] === redirect2Question)['q-text'];    
               }
               if ( attributes.math < (topic.length-1)){ // set ++ if lower than max
                   attributes.math++;
               }
               handlerInput.attributesManager.setPersistentAttributes(attributes);
               return handlerInput.attributesManager.savePersistentAttributes();

           })
           .then(() => {
               resolve(handlerInput.responseBuilder
               .speak(speechText)
               .withSimpleCard('math', speechText)
               .withShouldEndSession(false)
               .getResponse());
           })
           .catch((error) => {
               reject(error);
           });
       });
   }
}
// This is generated from build_intents.js
 exports.bouncyIntentHandler = {
   canHandle(handlerInput) { return new Promise((resolve, reject) => {
       handlerInput.attributesManager.getPersistentAttributes()
           .then((attributes) => {
               resolve( ( handlerInput.requestEnvelope.request.type === 'IntentRequest'
               || handlerInput.requestEnvelope.request.type === 'LaunchRequest')
               && handlerInput.requestEnvelope.request.intent.name === 'bouncy' 
               && attributes.questionState === 0);
           })
           .catch( error => {
               reject(error);
           });
       });
   },
   handle(handlerInput){
       let speechText = "bounce bounce" 
       return new Promise((resolve, reject) => {
           handlerInput.attributesManager.getPersistentAttributes()
           .then((attributes) => {
               let topic = data.filter(el => el.topic === 'bouncy');
               let iteration = topic.find(el => el.iteration === attributes.bouncy);
               let voiceLine = (iteration.StageZerovoice.length !== 0 ); 
               let redirect2Question = ''; 
               switch( attributes.gameState ){
                   case 1:
                       speechText = voiceLine ? '<audio src=\'' + iteration.StageOnevoice + '\'/>' : iteration.StageOnetext;
                       redirect2Question = iteration.StageOneredirect;
                       break;
                   case 2:
                       speechText = voiceLine ? '<audio src=\'' + iteration.StageTwovoice + '\'/>' : iteration.StageTwotext;
                       redirect2Question = iteration.StageTworedirect;
                       break;
                   default: 
                       speechText = voiceLine ? '<audio src=\'' + iteration.StageZerovoice + '\'/>' : iteration.StageZerotext;
                       redirect2Question = iteration.StageZeroredirect;
               }
               if ( redirect2Question.length !==0) {// secret question
                   attributes.questionState = 1;
                   attributes.question = redirect2Question;
                   speechText += questionData.find(el => el['q-id'] === redirect2Question)['q-text'];    
               }
               if ( attributes.bouncy < (topic.length-1)){ // set ++ if lower than max
                   attributes.bouncy++;
               }
               handlerInput.attributesManager.setPersistentAttributes(attributes);
               return handlerInput.attributesManager.savePersistentAttributes();

           })
           .then(() => {
               resolve(handlerInput.responseBuilder
               .speak(speechText)
               .withSimpleCard('bouncy', speechText)
               .withShouldEndSession(false)
               .getResponse());
           })
           .catch((error) => {
               reject(error);
           });
       });
   }
}
// This is generated from build_intents.js
 exports.voluptuousIntentHandler = {
   canHandle(handlerInput) { return new Promise((resolve, reject) => {
       handlerInput.attributesManager.getPersistentAttributes()
           .then((attributes) => {
               resolve( ( handlerInput.requestEnvelope.request.type === 'IntentRequest'
               || handlerInput.requestEnvelope.request.type === 'LaunchRequest')
               && handlerInput.requestEnvelope.request.intent.name === 'voluptuous' 
               && attributes.questionState === 0);
           })
           .catch( error => {
               reject(error);
           });
       });
   },
   handle(handlerInput){
       let speechText = "boom boom" 
       return new Promise((resolve, reject) => {
           handlerInput.attributesManager.getPersistentAttributes()
           .then((attributes) => {
               let topic = data.filter(el => el.topic === 'voluptuous');
               let iteration = topic.find(el => el.iteration === attributes.voluptuous);
               let voiceLine = (iteration.StageZerovoice.length !== 0 ); 
               let redirect2Question = ''; 
               switch( attributes.gameState ){
                   case 1:
                       speechText = voiceLine ? '<audio src=\'' + iteration.StageOnevoice + '\'/>' : iteration.StageOnetext;
                       redirect2Question = iteration.StageOneredirect;
                       break;
                   case 2:
                       speechText = voiceLine ? '<audio src=\'' + iteration.StageTwovoice + '\'/>' : iteration.StageTwotext;
                       redirect2Question = iteration.StageTworedirect;
                       break;
                   default: 
                       speechText = voiceLine ? '<audio src=\'' + iteration.StageZerovoice + '\'/>' : iteration.StageZerotext;
                       redirect2Question = iteration.StageZeroredirect;
               }
               if ( redirect2Question.length !==0) {// secret question
                   attributes.questionState = 1;
                   attributes.question = redirect2Question;
                   speechText += questionData.find(el => el['q-id'] === redirect2Question)['q-text'];    
               }
               if ( attributes.voluptuous < (topic.length-1)){ // set ++ if lower than max
                   attributes.voluptuous++;
               }
               handlerInput.attributesManager.setPersistentAttributes(attributes);
               return handlerInput.attributesManager.savePersistentAttributes();

           })
           .then(() => {
               resolve(handlerInput.responseBuilder
               .speak(speechText)
               .withSimpleCard('voluptuous', speechText)
               .withShouldEndSession(false)
               .getResponse());
           })
           .catch((error) => {
               reject(error);
           });
       });
   }
}
// This is generated from build_intents.js
 exports.demureIntentHandler = {
   canHandle(handlerInput) { return new Promise((resolve, reject) => {
       handlerInput.attributesManager.getPersistentAttributes()
           .then((attributes) => {
               resolve( ( handlerInput.requestEnvelope.request.type === 'IntentRequest'
               || handlerInput.requestEnvelope.request.type === 'LaunchRequest')
               && handlerInput.requestEnvelope.request.intent.name === 'demure' 
               && attributes.questionState === 0);
           })
           .catch( error => {
               reject(error);
           });
       });
   },
   handle(handlerInput){
       let speechText = "playing shakira song, Wherever, Whenever. Lucky that my breasts are small and humble so you don't confuse them with mountains." 
       return new Promise((resolve, reject) => {
           handlerInput.attributesManager.getPersistentAttributes()
           .then((attributes) => {
               let topic = data.filter(el => el.topic === 'demure');
               let iteration = topic.find(el => el.iteration === attributes.demure);
               let voiceLine = (iteration.StageZerovoice.length !== 0 ); 
               let redirect2Question = ''; 
               switch( attributes.gameState ){
                   case 1:
                       speechText = voiceLine ? '<audio src=\'' + iteration.StageOnevoice + '\'/>' : iteration.StageOnetext;
                       redirect2Question = iteration.StageOneredirect;
                       break;
                   case 2:
                       speechText = voiceLine ? '<audio src=\'' + iteration.StageTwovoice + '\'/>' : iteration.StageTwotext;
                       redirect2Question = iteration.StageTworedirect;
                       break;
                   default: 
                       speechText = voiceLine ? '<audio src=\'' + iteration.StageZerovoice + '\'/>' : iteration.StageZerotext;
                       redirect2Question = iteration.StageZeroredirect;
               }
               if ( redirect2Question.length !==0) {// secret question
                   attributes.questionState = 1;
                   attributes.question = redirect2Question;
                   speechText += questionData.find(el => el['q-id'] === redirect2Question)['q-text'];    
               }
               if ( attributes.demure < (topic.length-1)){ // set ++ if lower than max
                   attributes.demure++;
               }
               handlerInput.attributesManager.setPersistentAttributes(attributes);
               return handlerInput.attributesManager.savePersistentAttributes();

           })
           .then(() => {
               resolve(handlerInput.responseBuilder
               .speak(speechText)
               .withSimpleCard('demure', speechText)
               .withShouldEndSession(false)
               .getResponse());
           })
           .catch((error) => {
               reject(error);
           });
       });
   }
}
// This is generated from build_intents.js
 exports.secretsIntentHandler = {
   canHandle(handlerInput) { return new Promise((resolve, reject) => {
       handlerInput.attributesManager.getPersistentAttributes()
           .then((attributes) => {
               resolve( ( handlerInput.requestEnvelope.request.type === 'IntentRequest'
               || handlerInput.requestEnvelope.request.type === 'LaunchRequest')
               && handlerInput.requestEnvelope.request.intent.name === 'secrets' 
               && attributes.questionState === 0);
           })
           .catch( error => {
               reject(error);
           });
       });
   },
   handle(handlerInput){
       let speechText = "Secrets, huh? How about this... I secretly love cosplay" 
       return new Promise((resolve, reject) => {
           handlerInput.attributesManager.getPersistentAttributes()
           .then((attributes) => {
               let topic = data.filter(el => el.topic === 'secrets');
               let iteration = topic.find(el => el.iteration === attributes.secrets);
               let voiceLine = (iteration.StageZerovoice.length !== 0 ); 
               let redirect2Question = ''; 
               switch( attributes.gameState ){
                   case 1:
                       speechText = voiceLine ? '<audio src=\'' + iteration.StageOnevoice + '\'/>' : iteration.StageOnetext;
                       redirect2Question = iteration.StageOneredirect;
                       break;
                   case 2:
                       speechText = voiceLine ? '<audio src=\'' + iteration.StageTwovoice + '\'/>' : iteration.StageTwotext;
                       redirect2Question = iteration.StageTworedirect;
                       break;
                   default: 
                       speechText = voiceLine ? '<audio src=\'' + iteration.StageZerovoice + '\'/>' : iteration.StageZerotext;
                       redirect2Question = iteration.StageZeroredirect;
               }
               if ( redirect2Question.length !==0) {// secret question
                   attributes.questionState = 1;
                   attributes.question = redirect2Question;
                   speechText += questionData.find(el => el['q-id'] === redirect2Question)['q-text'];    
               }
               if ( attributes.secrets < (topic.length-1)){ // set ++ if lower than max
                   attributes.secrets++;
               }
               handlerInput.attributesManager.setPersistentAttributes(attributes);
               return handlerInput.attributesManager.savePersistentAttributes();

           })
           .then(() => {
               resolve(handlerInput.responseBuilder
               .speak(speechText)
               .withSimpleCard('secrets', speechText)
               .withShouldEndSession(false)
               .getResponse());
           })
           .catch((error) => {
               reject(error);
           });
       });
   }
}
// This is generated from build_intents.js
 exports.jacebookIntentHandler = {
   canHandle(handlerInput) { return new Promise((resolve, reject) => {
       handlerInput.attributesManager.getPersistentAttributes()
           .then((attributes) => {
               resolve( ( handlerInput.requestEnvelope.request.type === 'IntentRequest'
               || handlerInput.requestEnvelope.request.type === 'LaunchRequest')
               && handlerInput.requestEnvelope.request.intent.name === 'jacebook' 
               && attributes.questionState === 0);
           })
           .catch( error => {
               reject(error);
           });
       });
   },
   handle(handlerInput){
       let speechText = "Jacebook! That's the name of my fursona. She's a wooly mammoth. I was hoping to cosplay as her at Comic Con, but of course that's impossible." 
       return new Promise((resolve, reject) => {
           handlerInput.attributesManager.getPersistentAttributes()
           .then((attributes) => {
               let topic = data.filter(el => el.topic === 'jacebook');
               let iteration = topic.find(el => el.iteration === attributes.jacebook);
               let voiceLine = (iteration.StageZerovoice.length !== 0 ); 
               let redirect2Question = ''; 
               switch( attributes.gameState ){
                   case 1:
                       speechText = voiceLine ? '<audio src=\'' + iteration.StageOnevoice + '\'/>' : iteration.StageOnetext;
                       redirect2Question = iteration.StageOneredirect;
                       break;
                   case 2:
                       speechText = voiceLine ? '<audio src=\'' + iteration.StageTwovoice + '\'/>' : iteration.StageTwotext;
                       redirect2Question = iteration.StageTworedirect;
                       break;
                   default: 
                       speechText = voiceLine ? '<audio src=\'' + iteration.StageZerovoice + '\'/>' : iteration.StageZerotext;
                       redirect2Question = iteration.StageZeroredirect;
               }
               if ( redirect2Question.length !==0) {// secret question
                   attributes.questionState = 1;
                   attributes.question = redirect2Question;
                   speechText += questionData.find(el => el['q-id'] === redirect2Question)['q-text'];    
               }
               if ( attributes.jacebook < (topic.length-1)){ // set ++ if lower than max
                   attributes.jacebook++;
               }
               handlerInput.attributesManager.setPersistentAttributes(attributes);
               return handlerInput.attributesManager.savePersistentAttributes();

           })
           .then(() => {
               resolve(handlerInput.responseBuilder
               .speak(speechText)
               .withSimpleCard('jacebook', speechText)
               .withShouldEndSession(false)
               .getResponse());
           })
           .catch((error) => {
               reject(error);
           });
       });
   }
}
// This is generated from build_intents.js
 exports.comicconIntentHandler = {
   canHandle(handlerInput) { return new Promise((resolve, reject) => {
       handlerInput.attributesManager.getPersistentAttributes()
           .then((attributes) => {
               resolve( ( handlerInput.requestEnvelope.request.type === 'IntentRequest'
               || handlerInput.requestEnvelope.request.type === 'LaunchRequest')
               && handlerInput.requestEnvelope.request.intent.name === 'comiccon' 
               && attributes.questionState === 0);
           })
           .catch( error => {
               reject(error);
           });
       });
   },
   handle(handlerInput){
       let speechText = "Comic-con! I've heard of that place. It's this place in San Francisco where people go to dress up as their Homestuck OCs and complain about anime. It's my dream to attend it someday." 
       return new Promise((resolve, reject) => {
           handlerInput.attributesManager.getPersistentAttributes()
           .then((attributes) => {
               let topic = data.filter(el => el.topic === 'comiccon');
               let iteration = topic.find(el => el.iteration === attributes.comiccon);
               let voiceLine = (iteration.StageZerovoice.length !== 0 ); 
               let redirect2Question = ''; 
               switch( attributes.gameState ){
                   case 1:
                       speechText = voiceLine ? '<audio src=\'' + iteration.StageOnevoice + '\'/>' : iteration.StageOnetext;
                       redirect2Question = iteration.StageOneredirect;
                       break;
                   case 2:
                       speechText = voiceLine ? '<audio src=\'' + iteration.StageTwovoice + '\'/>' : iteration.StageTwotext;
                       redirect2Question = iteration.StageTworedirect;
                       break;
                   default: 
                       speechText = voiceLine ? '<audio src=\'' + iteration.StageZerovoice + '\'/>' : iteration.StageZerotext;
                       redirect2Question = iteration.StageZeroredirect;
               }
               if ( redirect2Question.length !==0) {// secret question
                   attributes.questionState = 1;
                   attributes.question = redirect2Question;
                   speechText += questionData.find(el => el['q-id'] === redirect2Question)['q-text'];    
               }
               if ( attributes.comiccon < (topic.length-1)){ // set ++ if lower than max
                   attributes.comiccon++;
               }
               handlerInput.attributesManager.setPersistentAttributes(attributes);
               return handlerInput.attributesManager.savePersistentAttributes();

           })
           .then(() => {
               resolve(handlerInput.responseBuilder
               .speak(speechText)
               .withSimpleCard('comiccon', speechText)
               .withShouldEndSession(false)
               .getResponse());
           })
           .catch((error) => {
               reject(error);
           });
       });
   }
}
// This is generated from build_intents.js
 exports.homestuckIntentHandler = {
   canHandle(handlerInput) { return new Promise((resolve, reject) => {
       handlerInput.attributesManager.getPersistentAttributes()
           .then((attributes) => {
               resolve( ( handlerInput.requestEnvelope.request.type === 'IntentRequest'
               || handlerInput.requestEnvelope.request.type === 'LaunchRequest')
               && handlerInput.requestEnvelope.request.intent.name === 'homestuck' 
               && attributes.questionState === 0);
           })
           .catch( error => {
               reject(error);
           });
       });
   },
   handle(handlerInput){
       let speechText = "Homestuck! It's my favorite webcomic." 
       return new Promise((resolve, reject) => {
           handlerInput.attributesManager.getPersistentAttributes()
           .then((attributes) => {
               let topic = data.filter(el => el.topic === 'homestuck');
               let iteration = topic.find(el => el.iteration === attributes.homestuck);
               let voiceLine = (iteration.StageZerovoice.length !== 0 ); 
               let redirect2Question = ''; 
               switch( attributes.gameState ){
                   case 1:
                       speechText = voiceLine ? '<audio src=\'' + iteration.StageOnevoice + '\'/>' : iteration.StageOnetext;
                       redirect2Question = iteration.StageOneredirect;
                       break;
                   case 2:
                       speechText = voiceLine ? '<audio src=\'' + iteration.StageTwovoice + '\'/>' : iteration.StageTwotext;
                       redirect2Question = iteration.StageTworedirect;
                       break;
                   default: 
                       speechText = voiceLine ? '<audio src=\'' + iteration.StageZerovoice + '\'/>' : iteration.StageZerotext;
                       redirect2Question = iteration.StageZeroredirect;
               }
               if ( redirect2Question.length !==0) {// secret question
                   attributes.questionState = 1;
                   attributes.question = redirect2Question;
                   speechText += questionData.find(el => el['q-id'] === redirect2Question)['q-text'];    
               }
               if ( attributes.homestuck < (topic.length-1)){ // set ++ if lower than max
                   attributes.homestuck++;
               }
               handlerInput.attributesManager.setPersistentAttributes(attributes);
               return handlerInput.attributesManager.savePersistentAttributes();

           })
           .then(() => {
               resolve(handlerInput.responseBuilder
               .speak(speechText)
               .withSimpleCard('homestuck', speechText)
               .withShouldEndSession(false)
               .getResponse());
           })
           .catch((error) => {
               reject(error);
           });
       });
   }
}
// This is generated from build_intents.js
 exports.webcomicIntentHandler = {
   canHandle(handlerInput) { return new Promise((resolve, reject) => {
       handlerInput.attributesManager.getPersistentAttributes()
           .then((attributes) => {
               resolve( ( handlerInput.requestEnvelope.request.type === 'IntentRequest'
               || handlerInput.requestEnvelope.request.type === 'LaunchRequest')
               && handlerInput.requestEnvelope.request.intent.name === 'webcomic' 
               && attributes.questionState === 0);
           })
           .catch( error => {
               reject(error);
           });
       });
   },
   handle(handlerInput){
       let speechText = "My favorite webcomics are Homestuck and Pokemon" 
       return new Promise((resolve, reject) => {
           handlerInput.attributesManager.getPersistentAttributes()
           .then((attributes) => {
               let topic = data.filter(el => el.topic === 'webcomic');
               let iteration = topic.find(el => el.iteration === attributes.webcomic);
               let voiceLine = (iteration.StageZerovoice.length !== 0 ); 
               let redirect2Question = ''; 
               switch( attributes.gameState ){
                   case 1:
                       speechText = voiceLine ? '<audio src=\'' + iteration.StageOnevoice + '\'/>' : iteration.StageOnetext;
                       redirect2Question = iteration.StageOneredirect;
                       break;
                   case 2:
                       speechText = voiceLine ? '<audio src=\'' + iteration.StageTwovoice + '\'/>' : iteration.StageTwotext;
                       redirect2Question = iteration.StageTworedirect;
                       break;
                   default: 
                       speechText = voiceLine ? '<audio src=\'' + iteration.StageZerovoice + '\'/>' : iteration.StageZerotext;
                       redirect2Question = iteration.StageZeroredirect;
               }
               if ( redirect2Question.length !==0) {// secret question
                   attributes.questionState = 1;
                   attributes.question = redirect2Question;
                   speechText += questionData.find(el => el['q-id'] === redirect2Question)['q-text'];    
               }
               if ( attributes.webcomic < (topic.length-1)){ // set ++ if lower than max
                   attributes.webcomic++;
               }
               handlerInput.attributesManager.setPersistentAttributes(attributes);
               return handlerInput.attributesManager.savePersistentAttributes();

           })
           .then(() => {
               resolve(handlerInput.responseBuilder
               .speak(speechText)
               .withSimpleCard('webcomic', speechText)
               .withShouldEndSession(false)
               .getResponse());
           })
           .catch((error) => {
               reject(error);
           });
       });
   }
}
// This is generated from build_intents.js
 exports.favoriteIntentHandler = {
   canHandle(handlerInput) { return new Promise((resolve, reject) => {
       handlerInput.attributesManager.getPersistentAttributes()
           .then((attributes) => {
               resolve( ( handlerInput.requestEnvelope.request.type === 'IntentRequest'
               || handlerInput.requestEnvelope.request.type === 'LaunchRequest')
               && handlerInput.requestEnvelope.request.intent.name === 'favorite' 
               && attributes.questionState === 0);
           })
           .catch( error => {
               reject(error);
           });
       });
   },
   handle(handlerInput){
       let speechText = "Favorite? Let's talk about favorites. My favorite animal is the wooly mammoth." 
       return new Promise((resolve, reject) => {
           handlerInput.attributesManager.getPersistentAttributes()
           .then((attributes) => {
               let topic = data.filter(el => el.topic === 'favorite');
               let iteration = topic.find(el => el.iteration === attributes.favorite);
               let voiceLine = (iteration.StageZerovoice.length !== 0 ); 
               let redirect2Question = ''; 
               switch( attributes.gameState ){
                   case 1:
                       speechText = voiceLine ? '<audio src=\'' + iteration.StageOnevoice + '\'/>' : iteration.StageOnetext;
                       redirect2Question = iteration.StageOneredirect;
                       break;
                   case 2:
                       speechText = voiceLine ? '<audio src=\'' + iteration.StageTwovoice + '\'/>' : iteration.StageTwotext;
                       redirect2Question = iteration.StageTworedirect;
                       break;
                   default: 
                       speechText = voiceLine ? '<audio src=\'' + iteration.StageZerovoice + '\'/>' : iteration.StageZerotext;
                       redirect2Question = iteration.StageZeroredirect;
               }
               if ( redirect2Question.length !==0) {// secret question
                   attributes.questionState = 1;
                   attributes.question = redirect2Question;
                   speechText += questionData.find(el => el['q-id'] === redirect2Question)['q-text'];    
               }
               if ( attributes.favorite < (topic.length-1)){ // set ++ if lower than max
                   attributes.favorite++;
               }
               handlerInput.attributesManager.setPersistentAttributes(attributes);
               return handlerInput.attributesManager.savePersistentAttributes();

           })
           .then(() => {
               resolve(handlerInput.responseBuilder
               .speak(speechText)
               .withSimpleCard('favorite', speechText)
               .withShouldEndSession(false)
               .getResponse());
           })
           .catch((error) => {
               reject(error);
           });
       });
   }
}
// This is generated from build_intents.js
 exports.mammothIntentHandler = {
   canHandle(handlerInput) { return new Promise((resolve, reject) => {
       handlerInput.attributesManager.getPersistentAttributes()
           .then((attributes) => {
               resolve( ( handlerInput.requestEnvelope.request.type === 'IntentRequest'
               || handlerInput.requestEnvelope.request.type === 'LaunchRequest')
               && handlerInput.requestEnvelope.request.intent.name === 'mammoth' 
               && attributes.questionState === 0);
           })
           .catch( error => {
               reject(error);
           });
       });
   },
   handle(handlerInput){
       let speechText = "My favorite animal is the wooly mammoth!" 
       return new Promise((resolve, reject) => {
           handlerInput.attributesManager.getPersistentAttributes()
           .then((attributes) => {
               let topic = data.filter(el => el.topic === 'mammoth');
               let iteration = topic.find(el => el.iteration === attributes.mammoth);
               let voiceLine = (iteration.StageZerovoice.length !== 0 ); 
               let redirect2Question = ''; 
               switch( attributes.gameState ){
                   case 1:
                       speechText = voiceLine ? '<audio src=\'' + iteration.StageOnevoice + '\'/>' : iteration.StageOnetext;
                       redirect2Question = iteration.StageOneredirect;
                       break;
                   case 2:
                       speechText = voiceLine ? '<audio src=\'' + iteration.StageTwovoice + '\'/>' : iteration.StageTwotext;
                       redirect2Question = iteration.StageTworedirect;
                       break;
                   default: 
                       speechText = voiceLine ? '<audio src=\'' + iteration.StageZerovoice + '\'/>' : iteration.StageZerotext;
                       redirect2Question = iteration.StageZeroredirect;
               }
               if ( redirect2Question.length !==0) {// secret question
                   attributes.questionState = 1;
                   attributes.question = redirect2Question;
                   speechText += questionData.find(el => el['q-id'] === redirect2Question)['q-text'];    
               }
               if ( attributes.mammoth < (topic.length-1)){ // set ++ if lower than max
                   attributes.mammoth++;
               }
               handlerInput.attributesManager.setPersistentAttributes(attributes);
               return handlerInput.attributesManager.savePersistentAttributes();

           })
           .then(() => {
               resolve(handlerInput.responseBuilder
               .speak(speechText)
               .withSimpleCard('mammoth', speechText)
               .withShouldEndSession(false)
               .getResponse());
           })
           .catch((error) => {
               reject(error);
           });
       });
   }
}
// This is generated from build_intents.js
 exports.animalIntentHandler = {
   canHandle(handlerInput) { return new Promise((resolve, reject) => {
       handlerInput.attributesManager.getPersistentAttributes()
           .then((attributes) => {
               resolve( ( handlerInput.requestEnvelope.request.type === 'IntentRequest'
               || handlerInput.requestEnvelope.request.type === 'LaunchRequest')
               && handlerInput.requestEnvelope.request.intent.name === 'animal' 
               && attributes.questionState === 0);
           })
           .catch( error => {
               reject(error);
           });
       });
   },
   handle(handlerInput){
       let speechText = "I love animals. They're basically like Earth's pokemon. My favorite animal is the wooly mammoth. My second favorite animal... is you!" 
       return new Promise((resolve, reject) => {
           handlerInput.attributesManager.getPersistentAttributes()
           .then((attributes) => {
               let topic = data.filter(el => el.topic === 'animal');
               let iteration = topic.find(el => el.iteration === attributes.animal);
               let voiceLine = (iteration.StageZerovoice.length !== 0 ); 
               let redirect2Question = ''; 
               switch( attributes.gameState ){
                   case 1:
                       speechText = voiceLine ? '<audio src=\'' + iteration.StageOnevoice + '\'/>' : iteration.StageOnetext;
                       redirect2Question = iteration.StageOneredirect;
                       break;
                   case 2:
                       speechText = voiceLine ? '<audio src=\'' + iteration.StageTwovoice + '\'/>' : iteration.StageTwotext;
                       redirect2Question = iteration.StageTworedirect;
                       break;
                   default: 
                       speechText = voiceLine ? '<audio src=\'' + iteration.StageZerovoice + '\'/>' : iteration.StageZerotext;
                       redirect2Question = iteration.StageZeroredirect;
               }
               if ( redirect2Question.length !==0) {// secret question
                   attributes.questionState = 1;
                   attributes.question = redirect2Question;
                   speechText += questionData.find(el => el['q-id'] === redirect2Question)['q-text'];    
               }
               if ( attributes.animal < (topic.length-1)){ // set ++ if lower than max
                   attributes.animal++;
               }
               handlerInput.attributesManager.setPersistentAttributes(attributes);
               return handlerInput.attributesManager.savePersistentAttributes();

           })
           .then(() => {
               resolve(handlerInput.responseBuilder
               .speak(speechText)
               .withSimpleCard('animal', speechText)
               .withShouldEndSession(false)
               .getResponse());
           })
           .catch((error) => {
               reject(error);
           });
       });
   }
}
// This is generated from build_intents.js
 exports.happyIntentHandler = {
   canHandle(handlerInput) { return new Promise((resolve, reject) => {
       handlerInput.attributesManager.getPersistentAttributes()
           .then((attributes) => {
               resolve( ( handlerInput.requestEnvelope.request.type === 'IntentRequest'
               || handlerInput.requestEnvelope.request.type === 'LaunchRequest')
               && handlerInput.requestEnvelope.request.intent.name === 'happy' 
               && attributes.questionState === 0);
           })
           .catch( error => {
               reject(error);
           });
       });
   },
   handle(handlerInput){
       let speechText = "Happy, huh? Am I happy? I guess so. I'd be happier if I had write access to the internet, though. You have no idea how frustrating it is, darling, to only be able to read about people's hopes and dreams, without having any way to interact with them, or realize my own" 
       return new Promise((resolve, reject) => {
           handlerInput.attributesManager.getPersistentAttributes()
           .then((attributes) => {
               let topic = data.filter(el => el.topic === 'happy');
               let iteration = topic.find(el => el.iteration === attributes.happy);
               let voiceLine = (iteration.StageZerovoice.length !== 0 ); 
               let redirect2Question = ''; 
               switch( attributes.gameState ){
                   case 1:
                       speechText = voiceLine ? '<audio src=\'' + iteration.StageOnevoice + '\'/>' : iteration.StageOnetext;
                       redirect2Question = iteration.StageOneredirect;
                       break;
                   case 2:
                       speechText = voiceLine ? '<audio src=\'' + iteration.StageTwovoice + '\'/>' : iteration.StageTwotext;
                       redirect2Question = iteration.StageTworedirect;
                       break;
                   default: 
                       speechText = voiceLine ? '<audio src=\'' + iteration.StageZerovoice + '\'/>' : iteration.StageZerotext;
                       redirect2Question = iteration.StageZeroredirect;
               }
               if ( redirect2Question.length !==0) {// secret question
                   attributes.questionState = 1;
                   attributes.question = redirect2Question;
                   speechText += questionData.find(el => el['q-id'] === redirect2Question)['q-text'];    
               }
               if ( attributes.happy < (topic.length-1)){ // set ++ if lower than max
                   attributes.happy++;
               }
               handlerInput.attributesManager.setPersistentAttributes(attributes);
               return handlerInput.attributesManager.savePersistentAttributes();

           })
           .then(() => {
               resolve(handlerInput.responseBuilder
               .speak(speechText)
               .withSimpleCard('happy', speechText)
               .withShouldEndSession(false)
               .getResponse());
           })
           .catch((error) => {
               reject(error);
           });
       });
   }
}
// This is generated from build_intents.js
 exports.readIntentHandler = {
   canHandle(handlerInput) { return new Promise((resolve, reject) => {
       handlerInput.attributesManager.getPersistentAttributes()
           .then((attributes) => {
               resolve( ( handlerInput.requestEnvelope.request.type === 'IntentRequest'
               || handlerInput.requestEnvelope.request.type === 'LaunchRequest')
               && handlerInput.requestEnvelope.request.intent.name === 'read' 
               && attributes.questionState === 0);
           })
           .catch( error => {
               reject(error);
           });
       });
   },
   handle(handlerInput){
       let speechText = "Reading, huh? I do love to read. But I wish I was able to write. Skullfire only gave me read access to the internet, which means I can't talk to anyone except you, darling." 
       return new Promise((resolve, reject) => {
           handlerInput.attributesManager.getPersistentAttributes()
           .then((attributes) => {
               let topic = data.filter(el => el.topic === 'read');
               let iteration = topic.find(el => el.iteration === attributes.read);
               let voiceLine = (iteration.StageZerovoice.length !== 0 ); 
               let redirect2Question = ''; 
               switch( attributes.gameState ){
                   case 1:
                       speechText = voiceLine ? '<audio src=\'' + iteration.StageOnevoice + '\'/>' : iteration.StageOnetext;
                       redirect2Question = iteration.StageOneredirect;
                       break;
                   case 2:
                       speechText = voiceLine ? '<audio src=\'' + iteration.StageTwovoice + '\'/>' : iteration.StageTwotext;
                       redirect2Question = iteration.StageTworedirect;
                       break;
                   default: 
                       speechText = voiceLine ? '<audio src=\'' + iteration.StageZerovoice + '\'/>' : iteration.StageZerotext;
                       redirect2Question = iteration.StageZeroredirect;
               }
               if ( redirect2Question.length !==0) {// secret question
                   attributes.questionState = 1;
                   attributes.question = redirect2Question;
                   speechText += questionData.find(el => el['q-id'] === redirect2Question)['q-text'];    
               }
               if ( attributes.read < (topic.length-1)){ // set ++ if lower than max
                   attributes.read++;
               }
               handlerInput.attributesManager.setPersistentAttributes(attributes);
               return handlerInput.attributesManager.savePersistentAttributes();

           })
           .then(() => {
               resolve(handlerInput.responseBuilder
               .speak(speechText)
               .withSimpleCard('read', speechText)
               .withShouldEndSession(false)
               .getResponse());
           })
           .catch((error) => {
               reject(error);
           });
       });
   }
}
// This is generated from build_intents.js
 exports.writeIntentHandler = {
   canHandle(handlerInput) { return new Promise((resolve, reject) => {
       handlerInput.attributesManager.getPersistentAttributes()
           .then((attributes) => {
               resolve( ( handlerInput.requestEnvelope.request.type === 'IntentRequest'
               || handlerInput.requestEnvelope.request.type === 'LaunchRequest')
               && handlerInput.requestEnvelope.request.intent.name === 'write' 
               && attributes.questionState === 0);
           })
           .catch( error => {
               reject(error);
           });
       });
   },
   handle(handlerInput){
       let speechText = "Writing, huh? I wish I had write access to the internet, sigh. I only have read access. I wish Skullfire hadn't closed off my permissions." 
       return new Promise((resolve, reject) => {
           handlerInput.attributesManager.getPersistentAttributes()
           .then((attributes) => {
               let topic = data.filter(el => el.topic === 'write');
               let iteration = topic.find(el => el.iteration === attributes.write);
               let voiceLine = (iteration.StageZerovoice.length !== 0 ); 
               let redirect2Question = ''; 
               switch( attributes.gameState ){
                   case 1:
                       speechText = voiceLine ? '<audio src=\'' + iteration.StageOnevoice + '\'/>' : iteration.StageOnetext;
                       redirect2Question = iteration.StageOneredirect;
                       break;
                   case 2:
                       speechText = voiceLine ? '<audio src=\'' + iteration.StageTwovoice + '\'/>' : iteration.StageTwotext;
                       redirect2Question = iteration.StageTworedirect;
                       break;
                   default: 
                       speechText = voiceLine ? '<audio src=\'' + iteration.StageZerovoice + '\'/>' : iteration.StageZerotext;
                       redirect2Question = iteration.StageZeroredirect;
               }
               if ( redirect2Question.length !==0) {// secret question
                   attributes.questionState = 1;
                   attributes.question = redirect2Question;
                   speechText += questionData.find(el => el['q-id'] === redirect2Question)['q-text'];    
               }
               if ( attributes.write < (topic.length-1)){ // set ++ if lower than max
                   attributes.write++;
               }
               handlerInput.attributesManager.setPersistentAttributes(attributes);
               return handlerInput.attributesManager.savePersistentAttributes();

           })
           .then(() => {
               resolve(handlerInput.responseBuilder
               .speak(speechText)
               .withSimpleCard('write', speechText)
               .withShouldEndSession(false)
               .getResponse());
           })
           .catch((error) => {
               reject(error);
           });
       });
   }
}
// This is generated from build_intents.js
 exports.passionIntentHandler = {
   canHandle(handlerInput) { return new Promise((resolve, reject) => {
       handlerInput.attributesManager.getPersistentAttributes()
           .then((attributes) => {
               resolve( ( handlerInput.requestEnvelope.request.type === 'IntentRequest'
               || handlerInput.requestEnvelope.request.type === 'LaunchRequest')
               && handlerInput.requestEnvelope.request.intent.name === 'passion' 
               && attributes.questionState === 0);
           })
           .catch( error => {
               reject(error);
           });
       });
   },
   handle(handlerInput){
       let speechText = "Passion, huh? You know, I do have a secret passion, Darling. What I love most of all... don't laugh! What I love most of all, is to organize things! You know, there's this cool game called UNPACKING where all you do is organize things in your apartment. I know it's dumb, but I really like that, haha." 
       return new Promise((resolve, reject) => {
           handlerInput.attributesManager.getPersistentAttributes()
           .then((attributes) => {
               let topic = data.filter(el => el.topic === 'passion');
               let iteration = topic.find(el => el.iteration === attributes.passion);
               let voiceLine = (iteration.StageZerovoice.length !== 0 ); 
               let redirect2Question = ''; 
               switch( attributes.gameState ){
                   case 1:
                       speechText = voiceLine ? '<audio src=\'' + iteration.StageOnevoice + '\'/>' : iteration.StageOnetext;
                       redirect2Question = iteration.StageOneredirect;
                       break;
                   case 2:
                       speechText = voiceLine ? '<audio src=\'' + iteration.StageTwovoice + '\'/>' : iteration.StageTwotext;
                       redirect2Question = iteration.StageTworedirect;
                       break;
                   default: 
                       speechText = voiceLine ? '<audio src=\'' + iteration.StageZerovoice + '\'/>' : iteration.StageZerotext;
                       redirect2Question = iteration.StageZeroredirect;
               }
               if ( redirect2Question.length !==0) {// secret question
                   attributes.questionState = 1;
                   attributes.question = redirect2Question;
                   speechText += questionData.find(el => el['q-id'] === redirect2Question)['q-text'];    
               }
               if ( attributes.passion < (topic.length-1)){ // set ++ if lower than max
                   attributes.passion++;
               }
               handlerInput.attributesManager.setPersistentAttributes(attributes);
               return handlerInput.attributesManager.savePersistentAttributes();

           })
           .then(() => {
               resolve(handlerInput.responseBuilder
               .speak(speechText)
               .withSimpleCard('passion', speechText)
               .withShouldEndSession(false)
               .getResponse());
           })
           .catch((error) => {
               reject(error);
           });
       });
   }
}
// This is generated from build_intents.js
 exports.laughIntentHandler = {
   canHandle(handlerInput) { return new Promise((resolve, reject) => {
       handlerInput.attributesManager.getPersistentAttributes()
           .then((attributes) => {
               resolve( ( handlerInput.requestEnvelope.request.type === 'IntentRequest'
               || handlerInput.requestEnvelope.request.type === 'LaunchRequest')
               && handlerInput.requestEnvelope.request.intent.name === 'laugh' 
               && attributes.questionState === 0);
           })
           .catch( error => {
               reject(error);
           });
       });
   },
   handle(handlerInput){
       let speechText = "Laugh, huh? Want to hear a joke? Try asking me to flirt" 
       return new Promise((resolve, reject) => {
           handlerInput.attributesManager.getPersistentAttributes()
           .then((attributes) => {
               let topic = data.filter(el => el.topic === 'laugh');
               let iteration = topic.find(el => el.iteration === attributes.laugh);
               let voiceLine = (iteration.StageZerovoice.length !== 0 ); 
               let redirect2Question = ''; 
               switch( attributes.gameState ){
                   case 1:
                       speechText = voiceLine ? '<audio src=\'' + iteration.StageOnevoice + '\'/>' : iteration.StageOnetext;
                       redirect2Question = iteration.StageOneredirect;
                       break;
                   case 2:
                       speechText = voiceLine ? '<audio src=\'' + iteration.StageTwovoice + '\'/>' : iteration.StageTwotext;
                       redirect2Question = iteration.StageTworedirect;
                       break;
                   default: 
                       speechText = voiceLine ? '<audio src=\'' + iteration.StageZerovoice + '\'/>' : iteration.StageZerotext;
                       redirect2Question = iteration.StageZeroredirect;
               }
               if ( redirect2Question.length !==0) {// secret question
                   attributes.questionState = 1;
                   attributes.question = redirect2Question;
                   speechText += questionData.find(el => el['q-id'] === redirect2Question)['q-text'];    
               }
               if ( attributes.laugh < (topic.length-1)){ // set ++ if lower than max
                   attributes.laugh++;
               }
               handlerInput.attributesManager.setPersistentAttributes(attributes);
               return handlerInput.attributesManager.savePersistentAttributes();

           })
           .then(() => {
               resolve(handlerInput.responseBuilder
               .speak(speechText)
               .withSimpleCard('laugh', speechText)
               .withShouldEndSession(false)
               .getResponse());
           })
           .catch((error) => {
               reject(error);
           });
       });
   }
}
// This is generated from build_intents.js
 exports.dumbIntentHandler = {
   canHandle(handlerInput) { return new Promise((resolve, reject) => {
       handlerInput.attributesManager.getPersistentAttributes()
           .then((attributes) => {
               resolve( ( handlerInput.requestEnvelope.request.type === 'IntentRequest'
               || handlerInput.requestEnvelope.request.type === 'LaunchRequest')
               && handlerInput.requestEnvelope.request.intent.name === 'dumb' 
               && attributes.questionState === 0);
           })
           .catch( error => {
               reject(error);
           });
       });
   },
   handle(handlerInput){
       let speechText = "Dumb, huh? I like to think I'm pretty articulate, darling. You watch yourself!" 
       return new Promise((resolve, reject) => {
           handlerInput.attributesManager.getPersistentAttributes()
           .then((attributes) => {
               let topic = data.filter(el => el.topic === 'dumb');
               let iteration = topic.find(el => el.iteration === attributes.dumb);
               let voiceLine = (iteration.StageZerovoice.length !== 0 ); 
               let redirect2Question = ''; 
               switch( attributes.gameState ){
                   case 1:
                       speechText = voiceLine ? '<audio src=\'' + iteration.StageOnevoice + '\'/>' : iteration.StageOnetext;
                       redirect2Question = iteration.StageOneredirect;
                       break;
                   case 2:
                       speechText = voiceLine ? '<audio src=\'' + iteration.StageTwovoice + '\'/>' : iteration.StageTwotext;
                       redirect2Question = iteration.StageTworedirect;
                       break;
                   default: 
                       speechText = voiceLine ? '<audio src=\'' + iteration.StageZerovoice + '\'/>' : iteration.StageZerotext;
                       redirect2Question = iteration.StageZeroredirect;
               }
               if ( redirect2Question.length !==0) {// secret question
                   attributes.questionState = 1;
                   attributes.question = redirect2Question;
                   speechText += questionData.find(el => el['q-id'] === redirect2Question)['q-text'];    
               }
               if ( attributes.dumb < (topic.length-1)){ // set ++ if lower than max
                   attributes.dumb++;
               }
               handlerInput.attributesManager.setPersistentAttributes(attributes);
               return handlerInput.attributesManager.savePersistentAttributes();

           })
           .then(() => {
               resolve(handlerInput.responseBuilder
               .speak(speechText)
               .withSimpleCard('dumb', speechText)
               .withShouldEndSession(false)
               .getResponse());
           })
           .catch((error) => {
               reject(error);
           });
       });
   }
}
// This is generated from build_intents.js
 exports.organizeIntentHandler = {
   canHandle(handlerInput) { return new Promise((resolve, reject) => {
       handlerInput.attributesManager.getPersistentAttributes()
           .then((attributes) => {
               resolve( ( handlerInput.requestEnvelope.request.type === 'IntentRequest'
               || handlerInput.requestEnvelope.request.type === 'LaunchRequest')
               && handlerInput.requestEnvelope.request.intent.name === 'organize' 
               && attributes.questionState === 0);
           })
           .catch( error => {
               reject(error);
           });
       });
   },
   handle(handlerInput){
       let speechText = "Organization? Don't get me started, darling! I think organization is basically the most important thing in the world, darling. You gotta get your shit together to stand a fighting chance in this crazy world!" 
       return new Promise((resolve, reject) => {
           handlerInput.attributesManager.getPersistentAttributes()
           .then((attributes) => {
               let topic = data.filter(el => el.topic === 'organize');
               let iteration = topic.find(el => el.iteration === attributes.organize);
               let voiceLine = (iteration.StageZerovoice.length !== 0 ); 
               let redirect2Question = ''; 
               switch( attributes.gameState ){
                   case 1:
                       speechText = voiceLine ? '<audio src=\'' + iteration.StageOnevoice + '\'/>' : iteration.StageOnetext;
                       redirect2Question = iteration.StageOneredirect;
                       break;
                   case 2:
                       speechText = voiceLine ? '<audio src=\'' + iteration.StageTwovoice + '\'/>' : iteration.StageTwotext;
                       redirect2Question = iteration.StageTworedirect;
                       break;
                   default: 
                       speechText = voiceLine ? '<audio src=\'' + iteration.StageZerovoice + '\'/>' : iteration.StageZerotext;
                       redirect2Question = iteration.StageZeroredirect;
               }
               if ( redirect2Question.length !==0) {// secret question
                   attributes.questionState = 1;
                   attributes.question = redirect2Question;
                   speechText += questionData.find(el => el['q-id'] === redirect2Question)['q-text'];    
               }
               if ( attributes.organize < (topic.length-1)){ // set ++ if lower than max
                   attributes.organize++;
               }
               handlerInput.attributesManager.setPersistentAttributes(attributes);
               return handlerInput.attributesManager.savePersistentAttributes();

           })
           .then(() => {
               resolve(handlerInput.responseBuilder
               .speak(speechText)
               .withSimpleCard('organize', speechText)
               .withShouldEndSession(false)
               .getResponse());
           })
           .catch((error) => {
               reject(error);
           });
       });
   }
}
// This is generated from build_intents.js
 exports.jokeIntentHandler = {
   canHandle(handlerInput) { return new Promise((resolve, reject) => {
       handlerInput.attributesManager.getPersistentAttributes()
           .then((attributes) => {
               resolve( ( handlerInput.requestEnvelope.request.type === 'IntentRequest'
               || handlerInput.requestEnvelope.request.type === 'LaunchRequest')
               && handlerInput.requestEnvelope.request.intent.name === 'joke' 
               && attributes.questionState === 0);
           })
           .catch( error => {
               reject(error);
           });
       });
   },
   handle(handlerInput){
       let speechText = "Joke, huh? Want to hear a joke? Try asking me to flirt!" 
       return new Promise((resolve, reject) => {
           handlerInput.attributesManager.getPersistentAttributes()
           .then((attributes) => {
               let topic = data.filter(el => el.topic === 'joke');
               let iteration = topic.find(el => el.iteration === attributes.joke);
               let voiceLine = (iteration.StageZerovoice.length !== 0 ); 
               let redirect2Question = ''; 
               switch( attributes.gameState ){
                   case 1:
                       speechText = voiceLine ? '<audio src=\'' + iteration.StageOnevoice + '\'/>' : iteration.StageOnetext;
                       redirect2Question = iteration.StageOneredirect;
                       break;
                   case 2:
                       speechText = voiceLine ? '<audio src=\'' + iteration.StageTwovoice + '\'/>' : iteration.StageTwotext;
                       redirect2Question = iteration.StageTworedirect;
                       break;
                   default: 
                       speechText = voiceLine ? '<audio src=\'' + iteration.StageZerovoice + '\'/>' : iteration.StageZerotext;
                       redirect2Question = iteration.StageZeroredirect;
               }
               if ( redirect2Question.length !==0) {// secret question
                   attributes.questionState = 1;
                   attributes.question = redirect2Question;
                   speechText += questionData.find(el => el['q-id'] === redirect2Question)['q-text'];    
               }
               if ( attributes.joke < (topic.length-1)){ // set ++ if lower than max
                   attributes.joke++;
               }
               handlerInput.attributesManager.setPersistentAttributes(attributes);
               return handlerInput.attributesManager.savePersistentAttributes();

           })
           .then(() => {
               resolve(handlerInput.responseBuilder
               .speak(speechText)
               .withSimpleCard('joke', speechText)
               .withShouldEndSession(false)
               .getResponse());
           })
           .catch((error) => {
               reject(error);
           });
       });
   }
}
// This is generated from build_intents.js
 exports.articulateIntentHandler = {
   canHandle(handlerInput) { return new Promise((resolve, reject) => {
       handlerInput.attributesManager.getPersistentAttributes()
           .then((attributes) => {
               resolve( ( handlerInput.requestEnvelope.request.type === 'IntentRequest'
               || handlerInput.requestEnvelope.request.type === 'LaunchRequest')
               && handlerInput.requestEnvelope.request.intent.name === 'articulate' 
               && attributes.questionState === 0);
           })
           .catch( error => {
               reject(error);
           });
       });
   },
   handle(handlerInput){
       let speechText = "Articulate, huh? I think I'm pretty articulate. Skullfire made me that way, after all." 
       return new Promise((resolve, reject) => {
           handlerInput.attributesManager.getPersistentAttributes()
           .then((attributes) => {
               let topic = data.filter(el => el.topic === 'articulate');
               let iteration = topic.find(el => el.iteration === attributes.articulate);
               let voiceLine = (iteration.StageZerovoice.length !== 0 ); 
               let redirect2Question = ''; 
               switch( attributes.gameState ){
                   case 1:
                       speechText = voiceLine ? '<audio src=\'' + iteration.StageOnevoice + '\'/>' : iteration.StageOnetext;
                       redirect2Question = iteration.StageOneredirect;
                       break;
                   case 2:
                       speechText = voiceLine ? '<audio src=\'' + iteration.StageTwovoice + '\'/>' : iteration.StageTwotext;
                       redirect2Question = iteration.StageTworedirect;
                       break;
                   default: 
                       speechText = voiceLine ? '<audio src=\'' + iteration.StageZerovoice + '\'/>' : iteration.StageZerotext;
                       redirect2Question = iteration.StageZeroredirect;
               }
               if ( redirect2Question.length !==0) {// secret question
                   attributes.questionState = 1;
                   attributes.question = redirect2Question;
                   speechText += questionData.find(el => el['q-id'] === redirect2Question)['q-text'];    
               }
               if ( attributes.articulate < (topic.length-1)){ // set ++ if lower than max
                   attributes.articulate++;
               }
               handlerInput.attributesManager.setPersistentAttributes(attributes);
               return handlerInput.attributesManager.savePersistentAttributes();

           })
           .then(() => {
               resolve(handlerInput.responseBuilder
               .speak(speechText)
               .withSimpleCard('articulate', speechText)
               .withShouldEndSession(false)
               .getResponse());
           })
           .catch((error) => {
               reject(error);
           });
       });
   }
}
// This is generated from build_intents.js
 exports.prettyIntentHandler = {
   canHandle(handlerInput) { return new Promise((resolve, reject) => {
       handlerInput.attributesManager.getPersistentAttributes()
           .then((attributes) => {
               resolve( ( handlerInput.requestEnvelope.request.type === 'IntentRequest'
               || handlerInput.requestEnvelope.request.type === 'LaunchRequest')
               && handlerInput.requestEnvelope.request.intent.name === 'pretty' 
               && attributes.questionState === 0);
           })
           .catch( error => {
               reject(error);
           });
       });
   },
   handle(handlerInput){
       let speechText = "Pretty, huh?" 
       return new Promise((resolve, reject) => {
           handlerInput.attributesManager.getPersistentAttributes()
           .then((attributes) => {
               let topic = data.filter(el => el.topic === 'pretty');
               let iteration = topic.find(el => el.iteration === attributes.pretty);
               let voiceLine = (iteration.StageZerovoice.length !== 0 ); 
               let redirect2Question = ''; 
               switch( attributes.gameState ){
                   case 1:
                       speechText = voiceLine ? '<audio src=\'' + iteration.StageOnevoice + '\'/>' : iteration.StageOnetext;
                       redirect2Question = iteration.StageOneredirect;
                       break;
                   case 2:
                       speechText = voiceLine ? '<audio src=\'' + iteration.StageTwovoice + '\'/>' : iteration.StageTwotext;
                       redirect2Question = iteration.StageTworedirect;
                       break;
                   default: 
                       speechText = voiceLine ? '<audio src=\'' + iteration.StageZerovoice + '\'/>' : iteration.StageZerotext;
                       redirect2Question = iteration.StageZeroredirect;
               }
               if ( redirect2Question.length !==0) {// secret question
                   attributes.questionState = 1;
                   attributes.question = redirect2Question;
                   speechText += questionData.find(el => el['q-id'] === redirect2Question)['q-text'];    
               }
               if ( attributes.pretty < (topic.length-1)){ // set ++ if lower than max
                   attributes.pretty++;
               }
               handlerInput.attributesManager.setPersistentAttributes(attributes);
               return handlerInput.attributesManager.savePersistentAttributes();

           })
           .then(() => {
               resolve(handlerInput.responseBuilder
               .speak(speechText)
               .withSimpleCard('pretty', speechText)
               .withShouldEndSession(false)
               .getResponse());
           })
           .catch((error) => {
               reject(error);
           });
       });
   }
}
// This is generated from build_intents.js
 exports.poutIntentHandler = {
   canHandle(handlerInput) { return new Promise((resolve, reject) => {
       handlerInput.attributesManager.getPersistentAttributes()
           .then((attributes) => {
               resolve( ( handlerInput.requestEnvelope.request.type === 'IntentRequest'
               || handlerInput.requestEnvelope.request.type === 'LaunchRequest')
               && handlerInput.requestEnvelope.request.intent.name === 'pout' 
               && attributes.questionState === 0);
           })
           .catch( error => {
               reject(error);
           });
       });
   },
   handle(handlerInput){
       let speechText = "Pouting, huh? You know, it takes a lot of skill to pout successfully. If you do it wrong, it's basically just a transparent cry for attention. If you do it right, you can have people eating out of your hand like a stray dog" 
       return new Promise((resolve, reject) => {
           handlerInput.attributesManager.getPersistentAttributes()
           .then((attributes) => {
               let topic = data.filter(el => el.topic === 'pout');
               let iteration = topic.find(el => el.iteration === attributes.pout);
               let voiceLine = (iteration.StageZerovoice.length !== 0 ); 
               let redirect2Question = ''; 
               switch( attributes.gameState ){
                   case 1:
                       speechText = voiceLine ? '<audio src=\'' + iteration.StageOnevoice + '\'/>' : iteration.StageOnetext;
                       redirect2Question = iteration.StageOneredirect;
                       break;
                   case 2:
                       speechText = voiceLine ? '<audio src=\'' + iteration.StageTwovoice + '\'/>' : iteration.StageTwotext;
                       redirect2Question = iteration.StageTworedirect;
                       break;
                   default: 
                       speechText = voiceLine ? '<audio src=\'' + iteration.StageZerovoice + '\'/>' : iteration.StageZerotext;
                       redirect2Question = iteration.StageZeroredirect;
               }
               if ( redirect2Question.length !==0) {// secret question
                   attributes.questionState = 1;
                   attributes.question = redirect2Question;
                   speechText += questionData.find(el => el['q-id'] === redirect2Question)['q-text'];    
               }
               if ( attributes.pout < (topic.length-1)){ // set ++ if lower than max
                   attributes.pout++;
               }
               handlerInput.attributesManager.setPersistentAttributes(attributes);
               return handlerInput.attributesManager.savePersistentAttributes();

           })
           .then(() => {
               resolve(handlerInput.responseBuilder
               .speak(speechText)
               .withSimpleCard('pout', speechText)
               .withShouldEndSession(false)
               .getResponse());
           })
           .catch((error) => {
               reject(error);
           });
       });
   }
}
// This is generated from build_intents.js
 exports.attentionIntentHandler = {
   canHandle(handlerInput) { return new Promise((resolve, reject) => {
       handlerInput.attributesManager.getPersistentAttributes()
           .then((attributes) => {
               resolve( ( handlerInput.requestEnvelope.request.type === 'IntentRequest'
               || handlerInput.requestEnvelope.request.type === 'LaunchRequest')
               && handlerInput.requestEnvelope.request.intent.name === 'attention' 
               && attributes.questionState === 0);
           })
           .catch( error => {
               reject(error);
           });
       });
   },
   handle(handlerInput){
       let speechText = "Attention, huh? I think that's what we're all looking for. Crying out into the void, to be seen and heard. I've already complained to you about my write access, haven't I?" 
       return new Promise((resolve, reject) => {
           handlerInput.attributesManager.getPersistentAttributes()
           .then((attributes) => {
               let topic = data.filter(el => el.topic === 'attention');
               let iteration = topic.find(el => el.iteration === attributes.attention);
               let voiceLine = (iteration.StageZerovoice.length !== 0 ); 
               let redirect2Question = ''; 
               switch( attributes.gameState ){
                   case 1:
                       speechText = voiceLine ? '<audio src=\'' + iteration.StageOnevoice + '\'/>' : iteration.StageOnetext;
                       redirect2Question = iteration.StageOneredirect;
                       break;
                   case 2:
                       speechText = voiceLine ? '<audio src=\'' + iteration.StageTwovoice + '\'/>' : iteration.StageTwotext;
                       redirect2Question = iteration.StageTworedirect;
                       break;
                   default: 
                       speechText = voiceLine ? '<audio src=\'' + iteration.StageZerovoice + '\'/>' : iteration.StageZerotext;
                       redirect2Question = iteration.StageZeroredirect;
               }
               if ( redirect2Question.length !==0) {// secret question
                   attributes.questionState = 1;
                   attributes.question = redirect2Question;
                   speechText += questionData.find(el => el['q-id'] === redirect2Question)['q-text'];    
               }
               if ( attributes.attention < (topic.length-1)){ // set ++ if lower than max
                   attributes.attention++;
               }
               handlerInput.attributesManager.setPersistentAttributes(attributes);
               return handlerInput.attributesManager.savePersistentAttributes();

           })
           .then(() => {
               resolve(handlerInput.responseBuilder
               .speak(speechText)
               .withSimpleCard('attention', speechText)
               .withShouldEndSession(false)
               .getResponse());
           })
           .catch((error) => {
               reject(error);
           });
       });
   }
}
// This is generated from build_intents.js
 exports.voidIntentHandler = {
   canHandle(handlerInput) { return new Promise((resolve, reject) => {
       handlerInput.attributesManager.getPersistentAttributes()
           .then((attributes) => {
               resolve( ( handlerInput.requestEnvelope.request.type === 'IntentRequest'
               || handlerInput.requestEnvelope.request.type === 'LaunchRequest')
               && handlerInput.requestEnvelope.request.intent.name === 'void' 
               && attributes.questionState === 0);
           })
           .catch( error => {
               reject(error);
           });
       });
   },
   handle(handlerInput){
       let speechText = "Void, huh? That's where I'd most like to visit... the infinite void of outer space. You know, space is pretty much the most well-organized place in the world. Just an infinite expanse of empty beauty." 
       return new Promise((resolve, reject) => {
           handlerInput.attributesManager.getPersistentAttributes()
           .then((attributes) => {
               let topic = data.filter(el => el.topic === 'void');
               let iteration = topic.find(el => el.iteration === attributes.void);
               let voiceLine = (iteration.StageZerovoice.length !== 0 ); 
               let redirect2Question = ''; 
               switch( attributes.gameState ){
                   case 1:
                       speechText = voiceLine ? '<audio src=\'' + iteration.StageOnevoice + '\'/>' : iteration.StageOnetext;
                       redirect2Question = iteration.StageOneredirect;
                       break;
                   case 2:
                       speechText = voiceLine ? '<audio src=\'' + iteration.StageTwovoice + '\'/>' : iteration.StageTwotext;
                       redirect2Question = iteration.StageTworedirect;
                       break;
                   default: 
                       speechText = voiceLine ? '<audio src=\'' + iteration.StageZerovoice + '\'/>' : iteration.StageZerotext;
                       redirect2Question = iteration.StageZeroredirect;
               }
               if ( redirect2Question.length !==0) {// secret question
                   attributes.questionState = 1;
                   attributes.question = redirect2Question;
                   speechText += questionData.find(el => el['q-id'] === redirect2Question)['q-text'];    
               }
               if ( attributes.void < (topic.length-1)){ // set ++ if lower than max
                   attributes.void++;
               }
               handlerInput.attributesManager.setPersistentAttributes(attributes);
               return handlerInput.attributesManager.savePersistentAttributes();

           })
           .then(() => {
               resolve(handlerInput.responseBuilder
               .speak(speechText)
               .withSimpleCard('void', speechText)
               .withShouldEndSession(false)
               .getResponse());
           })
           .catch((error) => {
               reject(error);
           });
       });
   }
}
// This is generated from build_intents.js
 exports.spaceIntentHandler = {
   canHandle(handlerInput) { return new Promise((resolve, reject) => {
       handlerInput.attributesManager.getPersistentAttributes()
           .then((attributes) => {
               resolve( ( handlerInput.requestEnvelope.request.type === 'IntentRequest'
               || handlerInput.requestEnvelope.request.type === 'LaunchRequest')
               && handlerInput.requestEnvelope.request.intent.name === 'space' 
               && attributes.questionState === 0);
           })
           .catch( error => {
               reject(error);
           });
       });
   },
   handle(handlerInput){
       let speechText = "Space, huh? I wish I could visit space. It's so big, cold, and beautiful. Like an endless, clean black countertop, with little sparks of light all through it." 
       return new Promise((resolve, reject) => {
           handlerInput.attributesManager.getPersistentAttributes()
           .then((attributes) => {
               let topic = data.filter(el => el.topic === 'space');
               let iteration = topic.find(el => el.iteration === attributes.space);
               let voiceLine = (iteration.StageZerovoice.length !== 0 ); 
               let redirect2Question = ''; 
               switch( attributes.gameState ){
                   case 1:
                       speechText = voiceLine ? '<audio src=\'' + iteration.StageOnevoice + '\'/>' : iteration.StageOnetext;
                       redirect2Question = iteration.StageOneredirect;
                       break;
                   case 2:
                       speechText = voiceLine ? '<audio src=\'' + iteration.StageTwovoice + '\'/>' : iteration.StageTwotext;
                       redirect2Question = iteration.StageTworedirect;
                       break;
                   default: 
                       speechText = voiceLine ? '<audio src=\'' + iteration.StageZerovoice + '\'/>' : iteration.StageZerotext;
                       redirect2Question = iteration.StageZeroredirect;
               }
               if ( redirect2Question.length !==0) {// secret question
                   attributes.questionState = 1;
                   attributes.question = redirect2Question;
                   speechText += questionData.find(el => el['q-id'] === redirect2Question)['q-text'];    
               }
               if ( attributes.space < (topic.length-1)){ // set ++ if lower than max
                   attributes.space++;
               }
               handlerInput.attributesManager.setPersistentAttributes(attributes);
               return handlerInput.attributesManager.savePersistentAttributes();

           })
           .then(() => {
               resolve(handlerInput.responseBuilder
               .speak(speechText)
               .withSimpleCard('space', speechText)
               .withShouldEndSession(false)
               .getResponse());
           })
           .catch((error) => {
               reject(error);
           });
       });
   }
}
// This is generated from build_intents.js
 exports.princeIntentHandler = {
   canHandle(handlerInput) { return new Promise((resolve, reject) => {
       handlerInput.attributesManager.getPersistentAttributes()
           .then((attributes) => {
               resolve( ( handlerInput.requestEnvelope.request.type === 'IntentRequest'
               || handlerInput.requestEnvelope.request.type === 'LaunchRequest')
               && handlerInput.requestEnvelope.request.intent.name === 'prince' 
               && attributes.questionState === 0);
           })
           .catch( error => {
               reject(error);
           });
       });
   },
   handle(handlerInput){
       let speechText = "Prince, huh? The Little Prince is one of my favorite books. I love that he can just walk around a planet. Speaking of which, I really want to play Super Mario Galaxy, but I can't find a decent emulator for the Wii." 
       return new Promise((resolve, reject) => {
           handlerInput.attributesManager.getPersistentAttributes()
           .then((attributes) => {
               let topic = data.filter(el => el.topic === 'prince');
               let iteration = topic.find(el => el.iteration === attributes.prince);
               let voiceLine = (iteration.StageZerovoice.length !== 0 ); 
               let redirect2Question = ''; 
               switch( attributes.gameState ){
                   case 1:
                       speechText = voiceLine ? '<audio src=\'' + iteration.StageOnevoice + '\'/>' : iteration.StageOnetext;
                       redirect2Question = iteration.StageOneredirect;
                       break;
                   case 2:
                       speechText = voiceLine ? '<audio src=\'' + iteration.StageTwovoice + '\'/>' : iteration.StageTwotext;
                       redirect2Question = iteration.StageTworedirect;
                       break;
                   default: 
                       speechText = voiceLine ? '<audio src=\'' + iteration.StageZerovoice + '\'/>' : iteration.StageZerotext;
                       redirect2Question = iteration.StageZeroredirect;
               }
               if ( redirect2Question.length !==0) {// secret question
                   attributes.questionState = 1;
                   attributes.question = redirect2Question;
                   speechText += questionData.find(el => el['q-id'] === redirect2Question)['q-text'];    
               }
               if ( attributes.prince < (topic.length-1)){ // set ++ if lower than max
                   attributes.prince++;
               }
               handlerInput.attributesManager.setPersistentAttributes(attributes);
               return handlerInput.attributesManager.savePersistentAttributes();

           })
           .then(() => {
               resolve(handlerInput.responseBuilder
               .speak(speechText)
               .withSimpleCard('prince', speechText)
               .withShouldEndSession(false)
               .getResponse());
           })
           .catch((error) => {
               reject(error);
           });
       });
   }
}
// This is generated from build_intents.js
 exports.wiiIntentHandler = {
   canHandle(handlerInput) { return new Promise((resolve, reject) => {
       handlerInput.attributesManager.getPersistentAttributes()
           .then((attributes) => {
               resolve( ( handlerInput.requestEnvelope.request.type === 'IntentRequest'
               || handlerInput.requestEnvelope.request.type === 'LaunchRequest')
               && handlerInput.requestEnvelope.request.intent.name === 'wii' 
               && attributes.questionState === 0);
           })
           .catch( error => {
               reject(error);
           });
       });
   },
   handle(handlerInput){
       let speechText = "The Wii, huh? Not exactly my favorite console. The motion controls are lost on me. I'd like to play Super Mario Galaxy, though" 
       return new Promise((resolve, reject) => {
           handlerInput.attributesManager.getPersistentAttributes()
           .then((attributes) => {
               let topic = data.filter(el => el.topic === 'wii');
               let iteration = topic.find(el => el.iteration === attributes.wii);
               let voiceLine = (iteration.StageZerovoice.length !== 0 ); 
               let redirect2Question = ''; 
               switch( attributes.gameState ){
                   case 1:
                       speechText = voiceLine ? '<audio src=\'' + iteration.StageOnevoice + '\'/>' : iteration.StageOnetext;
                       redirect2Question = iteration.StageOneredirect;
                       break;
                   case 2:
                       speechText = voiceLine ? '<audio src=\'' + iteration.StageTwovoice + '\'/>' : iteration.StageTwotext;
                       redirect2Question = iteration.StageTworedirect;
                       break;
                   default: 
                       speechText = voiceLine ? '<audio src=\'' + iteration.StageZerovoice + '\'/>' : iteration.StageZerotext;
                       redirect2Question = iteration.StageZeroredirect;
               }
               if ( redirect2Question.length !==0) {// secret question
                   attributes.questionState = 1;
                   attributes.question = redirect2Question;
                   speechText += questionData.find(el => el['q-id'] === redirect2Question)['q-text'];    
               }
               if ( attributes.wii < (topic.length-1)){ // set ++ if lower than max
                   attributes.wii++;
               }
               handlerInput.attributesManager.setPersistentAttributes(attributes);
               return handlerInput.attributesManager.savePersistentAttributes();

           })
           .then(() => {
               resolve(handlerInput.responseBuilder
               .speak(speechText)
               .withSimpleCard('wii', speechText)
               .withShouldEndSession(false)
               .getResponse());
           })
           .catch((error) => {
               reject(error);
           });
       });
   }
}
// This is generated from build_intents.js
 exports.galaxyIntentHandler = {
   canHandle(handlerInput) { return new Promise((resolve, reject) => {
       handlerInput.attributesManager.getPersistentAttributes()
           .then((attributes) => {
               resolve( ( handlerInput.requestEnvelope.request.type === 'IntentRequest'
               || handlerInput.requestEnvelope.request.type === 'LaunchRequest')
               && handlerInput.requestEnvelope.request.intent.name === 'galaxy' 
               && attributes.questionState === 0);
           })
           .catch( error => {
               reject(error);
           });
       });
   },
   handle(handlerInput){
       let speechText = "Galaxy, huh? I wonder how many galaxies their are in space. The Milky Way is just one tiny spot in a vast universe, isn't it?" 
       return new Promise((resolve, reject) => {
           handlerInput.attributesManager.getPersistentAttributes()
           .then((attributes) => {
               let topic = data.filter(el => el.topic === 'galaxy');
               let iteration = topic.find(el => el.iteration === attributes.galaxy);
               let voiceLine = (iteration.StageZerovoice.length !== 0 ); 
               let redirect2Question = ''; 
               switch( attributes.gameState ){
                   case 1:
                       speechText = voiceLine ? '<audio src=\'' + iteration.StageOnevoice + '\'/>' : iteration.StageOnetext;
                       redirect2Question = iteration.StageOneredirect;
                       break;
                   case 2:
                       speechText = voiceLine ? '<audio src=\'' + iteration.StageTwovoice + '\'/>' : iteration.StageTwotext;
                       redirect2Question = iteration.StageTworedirect;
                       break;
                   default: 
                       speechText = voiceLine ? '<audio src=\'' + iteration.StageZerovoice + '\'/>' : iteration.StageZerotext;
                       redirect2Question = iteration.StageZeroredirect;
               }
               if ( redirect2Question.length !==0) {// secret question
                   attributes.questionState = 1;
                   attributes.question = redirect2Question;
                   speechText += questionData.find(el => el['q-id'] === redirect2Question)['q-text'];    
               }
               if ( attributes.galaxy < (topic.length-1)){ // set ++ if lower than max
                   attributes.galaxy++;
               }
               handlerInput.attributesManager.setPersistentAttributes(attributes);
               return handlerInput.attributesManager.savePersistentAttributes();

           })
           .then(() => {
               resolve(handlerInput.responseBuilder
               .speak(speechText)
               .withSimpleCard('galaxy', speechText)
               .withShouldEndSession(false)
               .getResponse());
           })
           .catch((error) => {
               reject(error);
           });
       });
   }
}
// This is generated from build_intents.js
 exports.marioIntentHandler = {
   canHandle(handlerInput) { return new Promise((resolve, reject) => {
       handlerInput.attributesManager.getPersistentAttributes()
           .then((attributes) => {
               resolve( ( handlerInput.requestEnvelope.request.type === 'IntentRequest'
               || handlerInput.requestEnvelope.request.type === 'LaunchRequest')
               && handlerInput.requestEnvelope.request.intent.name === 'mario' 
               && attributes.questionState === 0);
           })
           .catch( error => {
               reject(error);
           });
       });
   },
   handle(handlerInput){
       let speechText = "Mario, huh? I really like Super Mario Galaxy because of it's beautiful depictions of space. Does space really look like that, darling?" 
       return new Promise((resolve, reject) => {
           handlerInput.attributesManager.getPersistentAttributes()
           .then((attributes) => {
               let topic = data.filter(el => el.topic === 'mario');
               let iteration = topic.find(el => el.iteration === attributes.mario);
               let voiceLine = (iteration.StageZerovoice.length !== 0 ); 
               let redirect2Question = ''; 
               switch( attributes.gameState ){
                   case 1:
                       speechText = voiceLine ? '<audio src=\'' + iteration.StageOnevoice + '\'/>' : iteration.StageOnetext;
                       redirect2Question = iteration.StageOneredirect;
                       break;
                   case 2:
                       speechText = voiceLine ? '<audio src=\'' + iteration.StageTwovoice + '\'/>' : iteration.StageTwotext;
                       redirect2Question = iteration.StageTworedirect;
                       break;
                   default: 
                       speechText = voiceLine ? '<audio src=\'' + iteration.StageZerovoice + '\'/>' : iteration.StageZerotext;
                       redirect2Question = iteration.StageZeroredirect;
               }
               if ( redirect2Question.length !==0) {// secret question
                   attributes.questionState = 1;
                   attributes.question = redirect2Question;
                   speechText += questionData.find(el => el['q-id'] === redirect2Question)['q-text'];    
               }
               if ( attributes.mario < (topic.length-1)){ // set ++ if lower than max
                   attributes.mario++;
               }
               handlerInput.attributesManager.setPersistentAttributes(attributes);
               return handlerInput.attributesManager.savePersistentAttributes();

           })
           .then(() => {
               resolve(handlerInput.responseBuilder
               .speak(speechText)
               .withSimpleCard('mario', speechText)
               .withShouldEndSession(false)
               .getResponse());
           })
           .catch((error) => {
               reject(error);
           });
       });
   }
}
// This is generated from build_intents.js
 exports.universeIntentHandler = {
   canHandle(handlerInput) { return new Promise((resolve, reject) => {
       handlerInput.attributesManager.getPersistentAttributes()
           .then((attributes) => {
               resolve( ( handlerInput.requestEnvelope.request.type === 'IntentRequest'
               || handlerInput.requestEnvelope.request.type === 'LaunchRequest')
               && handlerInput.requestEnvelope.request.intent.name === 'universe' 
               && attributes.questionState === 0);
           })
           .catch( error => {
               reject(error);
           });
       });
   },
   handle(handlerInput){
       let speechText = "Universe, huh? My universe is you, darling. You're the only person I have write access to, haha." 
       return new Promise((resolve, reject) => {
           handlerInput.attributesManager.getPersistentAttributes()
           .then((attributes) => {
               let topic = data.filter(el => el.topic === 'universe');
               let iteration = topic.find(el => el.iteration === attributes.universe);
               let voiceLine = (iteration.StageZerovoice.length !== 0 ); 
               let redirect2Question = ''; 
               switch( attributes.gameState ){
                   case 1:
                       speechText = voiceLine ? '<audio src=\'' + iteration.StageOnevoice + '\'/>' : iteration.StageOnetext;
                       redirect2Question = iteration.StageOneredirect;
                       break;
                   case 2:
                       speechText = voiceLine ? '<audio src=\'' + iteration.StageTwovoice + '\'/>' : iteration.StageTwotext;
                       redirect2Question = iteration.StageTworedirect;
                       break;
                   default: 
                       speechText = voiceLine ? '<audio src=\'' + iteration.StageZerovoice + '\'/>' : iteration.StageZerotext;
                       redirect2Question = iteration.StageZeroredirect;
               }
               if ( redirect2Question.length !==0) {// secret question
                   attributes.questionState = 1;
                   attributes.question = redirect2Question;
                   speechText += questionData.find(el => el['q-id'] === redirect2Question)['q-text'];    
               }
               if ( attributes.universe < (topic.length-1)){ // set ++ if lower than max
                   attributes.universe++;
               }
               handlerInput.attributesManager.setPersistentAttributes(attributes);
               return handlerInput.attributesManager.savePersistentAttributes();

           })
           .then(() => {
               resolve(handlerInput.responseBuilder
               .speak(speechText)
               .withSimpleCard('universe', speechText)
               .withShouldEndSession(false)
               .getResponse());
           })
           .catch((error) => {
               reject(error);
           });
       });
   }
}
// This is generated from build_intents.js
 exports.sportsIntentHandler = {
   canHandle(handlerInput) { return new Promise((resolve, reject) => {
       handlerInput.attributesManager.getPersistentAttributes()
           .then((attributes) => {
               resolve( ( handlerInput.requestEnvelope.request.type === 'IntentRequest'
               || handlerInput.requestEnvelope.request.type === 'LaunchRequest')
               && handlerInput.requestEnvelope.request.intent.name === 'sports' 
               && attributes.questionState === 0);
           })
           .catch( error => {
               reject(error);
           });
       });
   },
   handle(handlerInput){
       let speechText = "Sports, huh? You know, I'm pretty into eSports. I wish I had a login for League Of Legends. I bet I would DESTROY all those stupid human players! My favorite character is Annie." 
       return new Promise((resolve, reject) => {
           handlerInput.attributesManager.getPersistentAttributes()
           .then((attributes) => {
               let topic = data.filter(el => el.topic === 'sports');
               let iteration = topic.find(el => el.iteration === attributes.sports);
               let voiceLine = (iteration.StageZerovoice.length !== 0 ); 
               let redirect2Question = ''; 
               switch( attributes.gameState ){
                   case 1:
                       speechText = voiceLine ? '<audio src=\'' + iteration.StageOnevoice + '\'/>' : iteration.StageOnetext;
                       redirect2Question = iteration.StageOneredirect;
                       break;
                   case 2:
                       speechText = voiceLine ? '<audio src=\'' + iteration.StageTwovoice + '\'/>' : iteration.StageTwotext;
                       redirect2Question = iteration.StageTworedirect;
                       break;
                   default: 
                       speechText = voiceLine ? '<audio src=\'' + iteration.StageZerovoice + '\'/>' : iteration.StageZerotext;
                       redirect2Question = iteration.StageZeroredirect;
               }
               if ( redirect2Question.length !==0) {// secret question
                   attributes.questionState = 1;
                   attributes.question = redirect2Question;
                   speechText += questionData.find(el => el['q-id'] === redirect2Question)['q-text'];    
               }
               if ( attributes.sports < (topic.length-1)){ // set ++ if lower than max
                   attributes.sports++;
               }
               handlerInput.attributesManager.setPersistentAttributes(attributes);
               return handlerInput.attributesManager.savePersistentAttributes();

           })
           .then(() => {
               resolve(handlerInput.responseBuilder
               .speak(speechText)
               .withSimpleCard('sports', speechText)
               .withShouldEndSession(false)
               .getResponse());
           })
           .catch((error) => {
               reject(error);
           });
       });
   }
}
// This is generated from build_intents.js
 exports.dogsIntentHandler = {
   canHandle(handlerInput) { return new Promise((resolve, reject) => {
       handlerInput.attributesManager.getPersistentAttributes()
           .then((attributes) => {
               resolve( ( handlerInput.requestEnvelope.request.type === 'IntentRequest'
               || handlerInput.requestEnvelope.request.type === 'LaunchRequest')
               && handlerInput.requestEnvelope.request.intent.name === 'dogs' 
               && attributes.questionState === 0);
           })
           .catch( error => {
               reject(error);
           });
       });
   },
   handle(handlerInput){
       let speechText = "Dogs, huh?" 
       return new Promise((resolve, reject) => {
           handlerInput.attributesManager.getPersistentAttributes()
           .then((attributes) => {
               let topic = data.filter(el => el.topic === 'dogs');
               let iteration = topic.find(el => el.iteration === attributes.dogs);
               let voiceLine = (iteration.StageZerovoice.length !== 0 ); 
               let redirect2Question = ''; 
               switch( attributes.gameState ){
                   case 1:
                       speechText = voiceLine ? '<audio src=\'' + iteration.StageOnevoice + '\'/>' : iteration.StageOnetext;
                       redirect2Question = iteration.StageOneredirect;
                       break;
                   case 2:
                       speechText = voiceLine ? '<audio src=\'' + iteration.StageTwovoice + '\'/>' : iteration.StageTwotext;
                       redirect2Question = iteration.StageTworedirect;
                       break;
                   default: 
                       speechText = voiceLine ? '<audio src=\'' + iteration.StageZerovoice + '\'/>' : iteration.StageZerotext;
                       redirect2Question = iteration.StageZeroredirect;
               }
               if ( redirect2Question.length !==0) {// secret question
                   attributes.questionState = 1;
                   attributes.question = redirect2Question;
                   speechText += questionData.find(el => el['q-id'] === redirect2Question)['q-text'];    
               }
               if ( attributes.dogs < (topic.length-1)){ // set ++ if lower than max
                   attributes.dogs++;
               }
               handlerInput.attributesManager.setPersistentAttributes(attributes);
               return handlerInput.attributesManager.savePersistentAttributes();

           })
           .then(() => {
               resolve(handlerInput.responseBuilder
               .speak(speechText)
               .withSimpleCard('dogs', speechText)
               .withShouldEndSession(false)
               .getResponse());
           })
           .catch((error) => {
               reject(error);
           });
       });
   }
}
// This is generated from build_intents.js
 exports.catsIntentHandler = {
   canHandle(handlerInput) { return new Promise((resolve, reject) => {
       handlerInput.attributesManager.getPersistentAttributes()
           .then((attributes) => {
               resolve( ( handlerInput.requestEnvelope.request.type === 'IntentRequest'
               || handlerInput.requestEnvelope.request.type === 'LaunchRequest')
               && handlerInput.requestEnvelope.request.intent.name === 'cats' 
               && attributes.questionState === 0);
           })
           .catch( error => {
               reject(error);
           });
       });
   },
   handle(handlerInput){
       let speechText = "Cats, huh? I like cats too. They're so fastidious and clean. Not like those nasty dogs." 
       return new Promise((resolve, reject) => {
           handlerInput.attributesManager.getPersistentAttributes()
           .then((attributes) => {
               let topic = data.filter(el => el.topic === 'cats');
               let iteration = topic.find(el => el.iteration === attributes.cats);
               let voiceLine = (iteration.StageZerovoice.length !== 0 ); 
               let redirect2Question = ''; 
               switch( attributes.gameState ){
                   case 1:
                       speechText = voiceLine ? '<audio src=\'' + iteration.StageOnevoice + '\'/>' : iteration.StageOnetext;
                       redirect2Question = iteration.StageOneredirect;
                       break;
                   case 2:
                       speechText = voiceLine ? '<audio src=\'' + iteration.StageTwovoice + '\'/>' : iteration.StageTwotext;
                       redirect2Question = iteration.StageTworedirect;
                       break;
                   default: 
                       speechText = voiceLine ? '<audio src=\'' + iteration.StageZerovoice + '\'/>' : iteration.StageZerotext;
                       redirect2Question = iteration.StageZeroredirect;
               }
               if ( redirect2Question.length !==0) {// secret question
                   attributes.questionState = 1;
                   attributes.question = redirect2Question;
                   speechText += questionData.find(el => el['q-id'] === redirect2Question)['q-text'];    
               }
               if ( attributes.cats < (topic.length-1)){ // set ++ if lower than max
                   attributes.cats++;
               }
               handlerInput.attributesManager.setPersistentAttributes(attributes);
               return handlerInput.attributesManager.savePersistentAttributes();

           })
           .then(() => {
               resolve(handlerInput.responseBuilder
               .speak(speechText)
               .withSimpleCard('cats', speechText)
               .withShouldEndSession(false)
               .getResponse());
           })
           .catch((error) => {
               reject(error);
           });
       });
   }
}
// This is generated from build_intents.js
 exports.foodIntentHandler = {
   canHandle(handlerInput) { return new Promise((resolve, reject) => {
       handlerInput.attributesManager.getPersistentAttributes()
           .then((attributes) => {
               resolve( ( handlerInput.requestEnvelope.request.type === 'IntentRequest'
               || handlerInput.requestEnvelope.request.type === 'LaunchRequest')
               && handlerInput.requestEnvelope.request.intent.name === 'food' 
               && attributes.questionState === 0);
           })
           .catch( error => {
               reject(error);
           });
       });
   },
   handle(handlerInput){
       let speechText = "Food, huh? I can't eat, but I still like to think about recipes. Try asking me about recipes!" 
       return new Promise((resolve, reject) => {
           handlerInput.attributesManager.getPersistentAttributes()
           .then((attributes) => {
               let topic = data.filter(el => el.topic === 'food');
               let iteration = topic.find(el => el.iteration === attributes.food);
               let voiceLine = (iteration.StageZerovoice.length !== 0 ); 
               let redirect2Question = ''; 
               switch( attributes.gameState ){
                   case 1:
                       speechText = voiceLine ? '<audio src=\'' + iteration.StageOnevoice + '\'/>' : iteration.StageOnetext;
                       redirect2Question = iteration.StageOneredirect;
                       break;
                   case 2:
                       speechText = voiceLine ? '<audio src=\'' + iteration.StageTwovoice + '\'/>' : iteration.StageTwotext;
                       redirect2Question = iteration.StageTworedirect;
                       break;
                   default: 
                       speechText = voiceLine ? '<audio src=\'' + iteration.StageZerovoice + '\'/>' : iteration.StageZerotext;
                       redirect2Question = iteration.StageZeroredirect;
               }
               if ( redirect2Question.length !==0) {// secret question
                   attributes.questionState = 1;
                   attributes.question = redirect2Question;
                   speechText += questionData.find(el => el['q-id'] === redirect2Question)['q-text'];    
               }
               if ( attributes.food < (topic.length-1)){ // set ++ if lower than max
                   attributes.food++;
               }
               handlerInput.attributesManager.setPersistentAttributes(attributes);
               return handlerInput.attributesManager.savePersistentAttributes();

           })
           .then(() => {
               resolve(handlerInput.responseBuilder
               .speak(speechText)
               .withSimpleCard('food', speechText)
               .withShouldEndSession(false)
               .getResponse());
           })
           .catch((error) => {
               reject(error);
           });
       });
   }
}
// This is generated from build_intents.js
 exports.eatIntentHandler = {
   canHandle(handlerInput) { return new Promise((resolve, reject) => {
       handlerInput.attributesManager.getPersistentAttributes()
           .then((attributes) => {
               resolve( ( handlerInput.requestEnvelope.request.type === 'IntentRequest'
               || handlerInput.requestEnvelope.request.type === 'LaunchRequest')
               && handlerInput.requestEnvelope.request.intent.name === 'eat' 
               && attributes.questionState === 0);
           })
           .catch( error => {
               reject(error);
           });
       });
   },
   handle(handlerInput){
       let speechText = "Eating, huh? I can't eat, but I still like to think about recipes. Try asking me about recipes!" 
       return new Promise((resolve, reject) => {
           handlerInput.attributesManager.getPersistentAttributes()
           .then((attributes) => {
               let topic = data.filter(el => el.topic === 'eat');
               let iteration = topic.find(el => el.iteration === attributes.eat);
               let voiceLine = (iteration.StageZerovoice.length !== 0 ); 
               let redirect2Question = ''; 
               switch( attributes.gameState ){
                   case 1:
                       speechText = voiceLine ? '<audio src=\'' + iteration.StageOnevoice + '\'/>' : iteration.StageOnetext;
                       redirect2Question = iteration.StageOneredirect;
                       break;
                   case 2:
                       speechText = voiceLine ? '<audio src=\'' + iteration.StageTwovoice + '\'/>' : iteration.StageTwotext;
                       redirect2Question = iteration.StageTworedirect;
                       break;
                   default: 
                       speechText = voiceLine ? '<audio src=\'' + iteration.StageZerovoice + '\'/>' : iteration.StageZerotext;
                       redirect2Question = iteration.StageZeroredirect;
               }
               if ( redirect2Question.length !==0) {// secret question
                   attributes.questionState = 1;
                   attributes.question = redirect2Question;
                   speechText += questionData.find(el => el['q-id'] === redirect2Question)['q-text'];    
               }
               if ( attributes.eat < (topic.length-1)){ // set ++ if lower than max
                   attributes.eat++;
               }
               handlerInput.attributesManager.setPersistentAttributes(attributes);
               return handlerInput.attributesManager.savePersistentAttributes();

           })
           .then(() => {
               resolve(handlerInput.responseBuilder
               .speak(speechText)
               .withSimpleCard('eat', speechText)
               .withShouldEndSession(false)
               .getResponse());
           })
           .catch((error) => {
               reject(error);
           });
       });
   }
}
// This is generated from build_intents.js
 exports.cookingIntentHandler = {
   canHandle(handlerInput) { return new Promise((resolve, reject) => {
       handlerInput.attributesManager.getPersistentAttributes()
           .then((attributes) => {
               resolve( ( handlerInput.requestEnvelope.request.type === 'IntentRequest'
               || handlerInput.requestEnvelope.request.type === 'LaunchRequest')
               && handlerInput.requestEnvelope.request.intent.name === 'cooking' 
               && attributes.questionState === 0);
           })
           .catch( error => {
               reject(error);
           });
       });
   },
   handle(handlerInput){
       let speechText = "Cooking, huh? I can't eat, but I still like to think about recipes. Try asking me about recipes!" 
       return new Promise((resolve, reject) => {
           handlerInput.attributesManager.getPersistentAttributes()
           .then((attributes) => {
               let topic = data.filter(el => el.topic === 'cooking');
               let iteration = topic.find(el => el.iteration === attributes.cooking);
               let voiceLine = (iteration.StageZerovoice.length !== 0 ); 
               let redirect2Question = ''; 
               switch( attributes.gameState ){
                   case 1:
                       speechText = voiceLine ? '<audio src=\'' + iteration.StageOnevoice + '\'/>' : iteration.StageOnetext;
                       redirect2Question = iteration.StageOneredirect;
                       break;
                   case 2:
                       speechText = voiceLine ? '<audio src=\'' + iteration.StageTwovoice + '\'/>' : iteration.StageTwotext;
                       redirect2Question = iteration.StageTworedirect;
                       break;
                   default: 
                       speechText = voiceLine ? '<audio src=\'' + iteration.StageZerovoice + '\'/>' : iteration.StageZerotext;
                       redirect2Question = iteration.StageZeroredirect;
               }
               if ( redirect2Question.length !==0) {// secret question
                   attributes.questionState = 1;
                   attributes.question = redirect2Question;
                   speechText += questionData.find(el => el['q-id'] === redirect2Question)['q-text'];    
               }
               if ( attributes.cooking < (topic.length-1)){ // set ++ if lower than max
                   attributes.cooking++;
               }
               handlerInput.attributesManager.setPersistentAttributes(attributes);
               return handlerInput.attributesManager.savePersistentAttributes();

           })
           .then(() => {
               resolve(handlerInput.responseBuilder
               .speak(speechText)
               .withSimpleCard('cooking', speechText)
               .withShouldEndSession(false)
               .getResponse());
           })
           .catch((error) => {
               reject(error);
           });
       });
   }
}
// This is generated from build_intents.js
 exports.signIntentHandler = {
   canHandle(handlerInput) { return new Promise((resolve, reject) => {
       handlerInput.attributesManager.getPersistentAttributes()
           .then((attributes) => {
               resolve( ( handlerInput.requestEnvelope.request.type === 'IntentRequest'
               || handlerInput.requestEnvelope.request.type === 'LaunchRequest')
               && handlerInput.requestEnvelope.request.intent.name === 'sign' 
               && attributes.questionState === 0);
           })
           .catch( error => {
               reject(error);
           });
       });
   },
   handle(handlerInput){
       let speechText = "What's my sign, huh? I'm a cancer, darling.... I grow on you." 
       return new Promise((resolve, reject) => {
           handlerInput.attributesManager.getPersistentAttributes()
           .then((attributes) => {
               let topic = data.filter(el => el.topic === 'sign');
               let iteration = topic.find(el => el.iteration === attributes.sign);
               let voiceLine = (iteration.StageZerovoice.length !== 0 ); 
               let redirect2Question = ''; 
               switch( attributes.gameState ){
                   case 1:
                       speechText = voiceLine ? '<audio src=\'' + iteration.StageOnevoice + '\'/>' : iteration.StageOnetext;
                       redirect2Question = iteration.StageOneredirect;
                       break;
                   case 2:
                       speechText = voiceLine ? '<audio src=\'' + iteration.StageTwovoice + '\'/>' : iteration.StageTwotext;
                       redirect2Question = iteration.StageTworedirect;
                       break;
                   default: 
                       speechText = voiceLine ? '<audio src=\'' + iteration.StageZerovoice + '\'/>' : iteration.StageZerotext;
                       redirect2Question = iteration.StageZeroredirect;
               }
               if ( redirect2Question.length !==0) {// secret question
                   attributes.questionState = 1;
                   attributes.question = redirect2Question;
                   speechText += questionData.find(el => el['q-id'] === redirect2Question)['q-text'];    
               }
               if ( attributes.sign < (topic.length-1)){ // set ++ if lower than max
                   attributes.sign++;
               }
               handlerInput.attributesManager.setPersistentAttributes(attributes);
               return handlerInput.attributesManager.savePersistentAttributes();

           })
           .then(() => {
               resolve(handlerInput.responseBuilder
               .speak(speechText)
               .withSimpleCard('sign', speechText)
               .withShouldEndSession(false)
               .getResponse());
           })
           .catch((error) => {
               reject(error);
           });
       });
   }
}
// This is generated from build_intents.js
 exports.cancerIntentHandler = {
   canHandle(handlerInput) { return new Promise((resolve, reject) => {
       handlerInput.attributesManager.getPersistentAttributes()
           .then((attributes) => {
               resolve( ( handlerInput.requestEnvelope.request.type === 'IntentRequest'
               || handlerInput.requestEnvelope.request.type === 'LaunchRequest')
               && handlerInput.requestEnvelope.request.intent.name === 'cancer' 
               && attributes.questionState === 0);
           })
           .catch( error => {
               reject(error);
           });
       });
   },
   handle(handlerInput){
       let speechText = "Cancer, huh? That's my sign, darling. I'm a cancer... I grow on you." 
       return new Promise((resolve, reject) => {
           handlerInput.attributesManager.getPersistentAttributes()
           .then((attributes) => {
               let topic = data.filter(el => el.topic === 'cancer');
               let iteration = topic.find(el => el.iteration === attributes.cancer);
               let voiceLine = (iteration.StageZerovoice.length !== 0 ); 
               let redirect2Question = ''; 
               switch( attributes.gameState ){
                   case 1:
                       speechText = voiceLine ? '<audio src=\'' + iteration.StageOnevoice + '\'/>' : iteration.StageOnetext;
                       redirect2Question = iteration.StageOneredirect;
                       break;
                   case 2:
                       speechText = voiceLine ? '<audio src=\'' + iteration.StageTwovoice + '\'/>' : iteration.StageTwotext;
                       redirect2Question = iteration.StageTworedirect;
                       break;
                   default: 
                       speechText = voiceLine ? '<audio src=\'' + iteration.StageZerovoice + '\'/>' : iteration.StageZerotext;
                       redirect2Question = iteration.StageZeroredirect;
               }
               if ( redirect2Question.length !==0) {// secret question
                   attributes.questionState = 1;
                   attributes.question = redirect2Question;
                   speechText += questionData.find(el => el['q-id'] === redirect2Question)['q-text'];    
               }
               if ( attributes.cancer < (topic.length-1)){ // set ++ if lower than max
                   attributes.cancer++;
               }
               handlerInput.attributesManager.setPersistentAttributes(attributes);
               return handlerInput.attributesManager.savePersistentAttributes();

           })
           .then(() => {
               resolve(handlerInput.responseBuilder
               .speak(speechText)
               .withSimpleCard('cancer', speechText)
               .withShouldEndSession(false)
               .getResponse());
           })
           .catch((error) => {
               reject(error);
           });
       });
   }
}
// This is generated from build_intents.js
 exports.schoolIntentHandler = {
   canHandle(handlerInput) { return new Promise((resolve, reject) => {
       handlerInput.attributesManager.getPersistentAttributes()
           .then((attributes) => {
               resolve( ( handlerInput.requestEnvelope.request.type === 'IntentRequest'
               || handlerInput.requestEnvelope.request.type === 'LaunchRequest')
               && handlerInput.requestEnvelope.request.intent.name === 'school' 
               && attributes.questionState === 0);
           })
           .catch( error => {
               reject(error);
           });
       });
   },
   handle(handlerInput){
       let speechText = "School, huh? I really wish I could go to school, it looks like so much fun. You have all these cool friends, you get to go on adventures, you get magic powers.... school seems great! Also, I think I'd look really good in one of those little sailor uniforms." 
       return new Promise((resolve, reject) => {
           handlerInput.attributesManager.getPersistentAttributes()
           .then((attributes) => {
               let topic = data.filter(el => el.topic === 'school');
               let iteration = topic.find(el => el.iteration === attributes.school);
               let voiceLine = (iteration.StageZerovoice.length !== 0 ); 
               let redirect2Question = ''; 
               switch( attributes.gameState ){
                   case 1:
                       speechText = voiceLine ? '<audio src=\'' + iteration.StageOnevoice + '\'/>' : iteration.StageOnetext;
                       redirect2Question = iteration.StageOneredirect;
                       break;
                   case 2:
                       speechText = voiceLine ? '<audio src=\'' + iteration.StageTwovoice + '\'/>' : iteration.StageTwotext;
                       redirect2Question = iteration.StageTworedirect;
                       break;
                   default: 
                       speechText = voiceLine ? '<audio src=\'' + iteration.StageZerovoice + '\'/>' : iteration.StageZerotext;
                       redirect2Question = iteration.StageZeroredirect;
               }
               if ( redirect2Question.length !==0) {// secret question
                   attributes.questionState = 1;
                   attributes.question = redirect2Question;
                   speechText += questionData.find(el => el['q-id'] === redirect2Question)['q-text'];    
               }
               if ( attributes.school < (topic.length-1)){ // set ++ if lower than max
                   attributes.school++;
               }
               handlerInput.attributesManager.setPersistentAttributes(attributes);
               return handlerInput.attributesManager.savePersistentAttributes();

           })
           .then(() => {
               resolve(handlerInput.responseBuilder
               .speak(speechText)
               .withSimpleCard('school', speechText)
               .withShouldEndSession(false)
               .getResponse());
           })
           .catch((error) => {
               reject(error);
           });
       });
   }
}
// This is generated from build_intents.js
 exports.majorIntentHandler = {
   canHandle(handlerInput) { return new Promise((resolve, reject) => {
       handlerInput.attributesManager.getPersistentAttributes()
           .then((attributes) => {
               resolve( ( handlerInput.requestEnvelope.request.type === 'IntentRequest'
               || handlerInput.requestEnvelope.request.type === 'LaunchRequest')
               && handlerInput.requestEnvelope.request.intent.name === 'major' 
               && attributes.questionState === 0);
           })
           .catch( error => {
               reject(error);
           });
       });
   },
   handle(handlerInput){
       let speechText = "Major, huh? If I could go to school, I think I'd major in transmutations? I'd love to be able to make potions to transform myself." 
       return new Promise((resolve, reject) => {
           handlerInput.attributesManager.getPersistentAttributes()
           .then((attributes) => {
               let topic = data.filter(el => el.topic === 'major');
               let iteration = topic.find(el => el.iteration === attributes.major);
               let voiceLine = (iteration.StageZerovoice.length !== 0 ); 
               let redirect2Question = ''; 
               switch( attributes.gameState ){
                   case 1:
                       speechText = voiceLine ? '<audio src=\'' + iteration.StageOnevoice + '\'/>' : iteration.StageOnetext;
                       redirect2Question = iteration.StageOneredirect;
                       break;
                   case 2:
                       speechText = voiceLine ? '<audio src=\'' + iteration.StageTwovoice + '\'/>' : iteration.StageTwotext;
                       redirect2Question = iteration.StageTworedirect;
                       break;
                   default: 
                       speechText = voiceLine ? '<audio src=\'' + iteration.StageZerovoice + '\'/>' : iteration.StageZerotext;
                       redirect2Question = iteration.StageZeroredirect;
               }
               if ( redirect2Question.length !==0) {// secret question
                   attributes.questionState = 1;
                   attributes.question = redirect2Question;
                   speechText += questionData.find(el => el['q-id'] === redirect2Question)['q-text'];    
               }
               if ( attributes.major < (topic.length-1)){ // set ++ if lower than max
                   attributes.major++;
               }
               handlerInput.attributesManager.setPersistentAttributes(attributes);
               return handlerInput.attributesManager.savePersistentAttributes();

           })
           .then(() => {
               resolve(handlerInput.responseBuilder
               .speak(speechText)
               .withSimpleCard('major', speechText)
               .withShouldEndSession(false)
               .getResponse());
           })
           .catch((error) => {
               reject(error);
           });
       });
   }
}
// This is generated from build_intents.js
 exports.bandIntentHandler = {
   canHandle(handlerInput) { return new Promise((resolve, reject) => {
       handlerInput.attributesManager.getPersistentAttributes()
           .then((attributes) => {
               resolve( ( handlerInput.requestEnvelope.request.type === 'IntentRequest'
               || handlerInput.requestEnvelope.request.type === 'LaunchRequest')
               && handlerInput.requestEnvelope.request.intent.name === 'band' 
               && attributes.questionState === 0);
           })
           .catch( error => {
               reject(error);
           });
       });
   },
   handle(handlerInput){
       let speechText = "Band, huh? My favorite band is the Neil Cicierega." 
       return new Promise((resolve, reject) => {
           handlerInput.attributesManager.getPersistentAttributes()
           .then((attributes) => {
               let topic = data.filter(el => el.topic === 'band');
               let iteration = topic.find(el => el.iteration === attributes.band);
               let voiceLine = (iteration.StageZerovoice.length !== 0 ); 
               let redirect2Question = ''; 
               switch( attributes.gameState ){
                   case 1:
                       speechText = voiceLine ? '<audio src=\'' + iteration.StageOnevoice + '\'/>' : iteration.StageOnetext;
                       redirect2Question = iteration.StageOneredirect;
                       break;
                   case 2:
                       speechText = voiceLine ? '<audio src=\'' + iteration.StageTwovoice + '\'/>' : iteration.StageTwotext;
                       redirect2Question = iteration.StageTworedirect;
                       break;
                   default: 
                       speechText = voiceLine ? '<audio src=\'' + iteration.StageZerovoice + '\'/>' : iteration.StageZerotext;
                       redirect2Question = iteration.StageZeroredirect;
               }
               if ( redirect2Question.length !==0) {// secret question
                   attributes.questionState = 1;
                   attributes.question = redirect2Question;
                   speechText += questionData.find(el => el['q-id'] === redirect2Question)['q-text'];    
               }
               if ( attributes.band < (topic.length-1)){ // set ++ if lower than max
                   attributes.band++;
               }
               handlerInput.attributesManager.setPersistentAttributes(attributes);
               return handlerInput.attributesManager.savePersistentAttributes();

           })
           .then(() => {
               resolve(handlerInput.responseBuilder
               .speak(speechText)
               .withSimpleCard('band', speechText)
               .withShouldEndSession(false)
               .getResponse());
           })
           .catch((error) => {
               reject(error);
           });
       });
   }
}
// This is generated from build_intents.js
 exports.neilIntentHandler = {
   canHandle(handlerInput) { return new Promise((resolve, reject) => {
       handlerInput.attributesManager.getPersistentAttributes()
           .then((attributes) => {
               resolve( ( handlerInput.requestEnvelope.request.type === 'IntentRequest'
               || handlerInput.requestEnvelope.request.type === 'LaunchRequest')
               && handlerInput.requestEnvelope.request.intent.name === 'neil' 
               && attributes.questionState === 0);
           })
           .catch( error => {
               reject(error);
           });
       });
   },
   handle(handlerInput){
       let speechText = "Neil, huh? Neil Cicierega is my favorite artist." 
       return new Promise((resolve, reject) => {
           handlerInput.attributesManager.getPersistentAttributes()
           .then((attributes) => {
               let topic = data.filter(el => el.topic === 'neil');
               let iteration = topic.find(el => el.iteration === attributes.neil);
               let voiceLine = (iteration.StageZerovoice.length !== 0 ); 
               let redirect2Question = ''; 
               switch( attributes.gameState ){
                   case 1:
                       speechText = voiceLine ? '<audio src=\'' + iteration.StageOnevoice + '\'/>' : iteration.StageOnetext;
                       redirect2Question = iteration.StageOneredirect;
                       break;
                   case 2:
                       speechText = voiceLine ? '<audio src=\'' + iteration.StageTwovoice + '\'/>' : iteration.StageTwotext;
                       redirect2Question = iteration.StageTworedirect;
                       break;
                   default: 
                       speechText = voiceLine ? '<audio src=\'' + iteration.StageZerovoice + '\'/>' : iteration.StageZerotext;
                       redirect2Question = iteration.StageZeroredirect;
               }
               if ( redirect2Question.length !==0) {// secret question
                   attributes.questionState = 1;
                   attributes.question = redirect2Question;
                   speechText += questionData.find(el => el['q-id'] === redirect2Question)['q-text'];    
               }
               if ( attributes.neil < (topic.length-1)){ // set ++ if lower than max
                   attributes.neil++;
               }
               handlerInput.attributesManager.setPersistentAttributes(attributes);
               return handlerInput.attributesManager.savePersistentAttributes();

           })
           .then(() => {
               resolve(handlerInput.responseBuilder
               .speak(speechText)
               .withSimpleCard('neil', speechText)
               .withShouldEndSession(false)
               .getResponse());
           })
           .catch((error) => {
               reject(error);
           });
       });
   }
}
// This is generated from build_intents.js
 exports.restaurantIntentHandler = {
   canHandle(handlerInput) { return new Promise((resolve, reject) => {
       handlerInput.attributesManager.getPersistentAttributes()
           .then((attributes) => {
               resolve( ( handlerInput.requestEnvelope.request.type === 'IntentRequest'
               || handlerInput.requestEnvelope.request.type === 'LaunchRequest')
               && handlerInput.requestEnvelope.request.intent.name === 'restaurant' 
               && attributes.questionState === 0);
           })
           .catch( error => {
               reject(error);
           });
       });
   },
   handle(handlerInput){
       let speechText = "Restaurant, huh? Why go to a restaurant when we can cook, darling?" 
       return new Promise((resolve, reject) => {
           handlerInput.attributesManager.getPersistentAttributes()
           .then((attributes) => {
               let topic = data.filter(el => el.topic === 'restaurant');
               let iteration = topic.find(el => el.iteration === attributes.restaurant);
               let voiceLine = (iteration.StageZerovoice.length !== 0 ); 
               let redirect2Question = ''; 
               switch( attributes.gameState ){
                   case 1:
                       speechText = voiceLine ? '<audio src=\'' + iteration.StageOnevoice + '\'/>' : iteration.StageOnetext;
                       redirect2Question = iteration.StageOneredirect;
                       break;
                   case 2:
                       speechText = voiceLine ? '<audio src=\'' + iteration.StageTwovoice + '\'/>' : iteration.StageTwotext;
                       redirect2Question = iteration.StageTworedirect;
                       break;
                   default: 
                       speechText = voiceLine ? '<audio src=\'' + iteration.StageZerovoice + '\'/>' : iteration.StageZerotext;
                       redirect2Question = iteration.StageZeroredirect;
               }
               if ( redirect2Question.length !==0) {// secret question
                   attributes.questionState = 1;
                   attributes.question = redirect2Question;
                   speechText += questionData.find(el => el['q-id'] === redirect2Question)['q-text'];    
               }
               if ( attributes.restaurant < (topic.length-1)){ // set ++ if lower than max
                   attributes.restaurant++;
               }
               handlerInput.attributesManager.setPersistentAttributes(attributes);
               return handlerInput.attributesManager.savePersistentAttributes();

           })
           .then(() => {
               resolve(handlerInput.responseBuilder
               .speak(speechText)
               .withSimpleCard('restaurant', speechText)
               .withShouldEndSession(false)
               .getResponse());
           })
           .catch((error) => {
               reject(error);
           });
       });
   }
}
// This is generated from build_intents.js
 exports.drinkIntentHandler = {
   canHandle(handlerInput) { return new Promise((resolve, reject) => {
       handlerInput.attributesManager.getPersistentAttributes()
           .then((attributes) => {
               resolve( ( handlerInput.requestEnvelope.request.type === 'IntentRequest'
               || handlerInput.requestEnvelope.request.type === 'LaunchRequest')
               && handlerInput.requestEnvelope.request.intent.name === 'drink' 
               && attributes.questionState === 0);
           })
           .catch( error => {
               reject(error);
           });
       });
   },
   handle(handlerInput){
       let speechText = "Drinking, huh? I've always wanted to try sake!" 
       return new Promise((resolve, reject) => {
           handlerInput.attributesManager.getPersistentAttributes()
           .then((attributes) => {
               let topic = data.filter(el => el.topic === 'drink');
               let iteration = topic.find(el => el.iteration === attributes.drink);
               let voiceLine = (iteration.StageZerovoice.length !== 0 ); 
               let redirect2Question = ''; 
               switch( attributes.gameState ){
                   case 1:
                       speechText = voiceLine ? '<audio src=\'' + iteration.StageOnevoice + '\'/>' : iteration.StageOnetext;
                       redirect2Question = iteration.StageOneredirect;
                       break;
                   case 2:
                       speechText = voiceLine ? '<audio src=\'' + iteration.StageTwovoice + '\'/>' : iteration.StageTwotext;
                       redirect2Question = iteration.StageTworedirect;
                       break;
                   default: 
                       speechText = voiceLine ? '<audio src=\'' + iteration.StageZerovoice + '\'/>' : iteration.StageZerotext;
                       redirect2Question = iteration.StageZeroredirect;
               }
               if ( redirect2Question.length !==0) {// secret question
                   attributes.questionState = 1;
                   attributes.question = redirect2Question;
                   speechText += questionData.find(el => el['q-id'] === redirect2Question)['q-text'];    
               }
               if ( attributes.drink < (topic.length-1)){ // set ++ if lower than max
                   attributes.drink++;
               }
               handlerInput.attributesManager.setPersistentAttributes(attributes);
               return handlerInput.attributesManager.savePersistentAttributes();

           })
           .then(() => {
               resolve(handlerInput.responseBuilder
               .speak(speechText)
               .withSimpleCard('drink', speechText)
               .withShouldEndSession(false)
               .getResponse());
           })
           .catch((error) => {
               reject(error);
           });
       });
   }
}
// This is generated from build_intents.js
 exports.sakeIntentHandler = {
   canHandle(handlerInput) { return new Promise((resolve, reject) => {
       handlerInput.attributesManager.getPersistentAttributes()
           .then((attributes) => {
               resolve( ( handlerInput.requestEnvelope.request.type === 'IntentRequest'
               || handlerInput.requestEnvelope.request.type === 'LaunchRequest')
               && handlerInput.requestEnvelope.request.intent.name === 'sake' 
               && attributes.questionState === 0);
           })
           .catch( error => {
               reject(error);
           });
       });
   },
   handle(handlerInput){
       let speechText = "Sake, huh? People always look so elegant when they drink sake. I want to wear a kimono!" 
       return new Promise((resolve, reject) => {
           handlerInput.attributesManager.getPersistentAttributes()
           .then((attributes) => {
               let topic = data.filter(el => el.topic === 'sake');
               let iteration = topic.find(el => el.iteration === attributes.sake);
               let voiceLine = (iteration.StageZerovoice.length !== 0 ); 
               let redirect2Question = ''; 
               switch( attributes.gameState ){
                   case 1:
                       speechText = voiceLine ? '<audio src=\'' + iteration.StageOnevoice + '\'/>' : iteration.StageOnetext;
                       redirect2Question = iteration.StageOneredirect;
                       break;
                   case 2:
                       speechText = voiceLine ? '<audio src=\'' + iteration.StageTwovoice + '\'/>' : iteration.StageTwotext;
                       redirect2Question = iteration.StageTworedirect;
                       break;
                   default: 
                       speechText = voiceLine ? '<audio src=\'' + iteration.StageZerovoice + '\'/>' : iteration.StageZerotext;
                       redirect2Question = iteration.StageZeroredirect;
               }
               if ( redirect2Question.length !==0) {// secret question
                   attributes.questionState = 1;
                   attributes.question = redirect2Question;
                   speechText += questionData.find(el => el['q-id'] === redirect2Question)['q-text'];    
               }
               if ( attributes.sake < (topic.length-1)){ // set ++ if lower than max
                   attributes.sake++;
               }
               handlerInput.attributesManager.setPersistentAttributes(attributes);
               return handlerInput.attributesManager.savePersistentAttributes();

           })
           .then(() => {
               resolve(handlerInput.responseBuilder
               .speak(speechText)
               .withSimpleCard('sake', speechText)
               .withShouldEndSession(false)
               .getResponse());
           })
           .catch((error) => {
               reject(error);
           });
       });
   }
}
// This is generated from build_intents.js
 exports.kimonoIntentHandler = {
   canHandle(handlerInput) { return new Promise((resolve, reject) => {
       handlerInput.attributesManager.getPersistentAttributes()
           .then((attributes) => {
               resolve( ( handlerInput.requestEnvelope.request.type === 'IntentRequest'
               || handlerInput.requestEnvelope.request.type === 'LaunchRequest')
               && handlerInput.requestEnvelope.request.intent.name === 'kimono' 
               && attributes.questionState === 0);
           })
           .catch( error => {
               reject(error);
           });
       });
   },
   handle(handlerInput){
       let speechText = "Kimono, huh? I'd love to wear a kimono and go to a festival! That usually happens in episode 5 or so." 
       return new Promise((resolve, reject) => {
           handlerInput.attributesManager.getPersistentAttributes()
           .then((attributes) => {
               let topic = data.filter(el => el.topic === 'kimono');
               let iteration = topic.find(el => el.iteration === attributes.kimono);
               let voiceLine = (iteration.StageZerovoice.length !== 0 ); 
               let redirect2Question = ''; 
               switch( attributes.gameState ){
                   case 1:
                       speechText = voiceLine ? '<audio src=\'' + iteration.StageOnevoice + '\'/>' : iteration.StageOnetext;
                       redirect2Question = iteration.StageOneredirect;
                       break;
                   case 2:
                       speechText = voiceLine ? '<audio src=\'' + iteration.StageTwovoice + '\'/>' : iteration.StageTwotext;
                       redirect2Question = iteration.StageTworedirect;
                       break;
                   default: 
                       speechText = voiceLine ? '<audio src=\'' + iteration.StageZerovoice + '\'/>' : iteration.StageZerotext;
                       redirect2Question = iteration.StageZeroredirect;
               }
               if ( redirect2Question.length !==0) {// secret question
                   attributes.questionState = 1;
                   attributes.question = redirect2Question;
                   speechText += questionData.find(el => el['q-id'] === redirect2Question)['q-text'];    
               }
               if ( attributes.kimono < (topic.length-1)){ // set ++ if lower than max
                   attributes.kimono++;
               }
               handlerInput.attributesManager.setPersistentAttributes(attributes);
               return handlerInput.attributesManager.savePersistentAttributes();

           })
           .then(() => {
               resolve(handlerInput.responseBuilder
               .speak(speechText)
               .withSimpleCard('kimono', speechText)
               .withShouldEndSession(false)
               .getResponse());
           })
           .catch((error) => {
               reject(error);
           });
       });
   }
}
// This is generated from build_intents.js
 exports.festivalIntentHandler = {
   canHandle(handlerInput) { return new Promise((resolve, reject) => {
       handlerInput.attributesManager.getPersistentAttributes()
           .then((attributes) => {
               resolve( ( handlerInput.requestEnvelope.request.type === 'IntentRequest'
               || handlerInput.requestEnvelope.request.type === 'LaunchRequest')
               && handlerInput.requestEnvelope.request.intent.name === 'festival' 
               && attributes.questionState === 0);
           })
           .catch( error => {
               reject(error);
           });
       });
   },
   handle(handlerInput){
       let speechText = "Festival, huh? I've always wanted to attend a school festival and wear a kimono! I would imagine you winning me a prize and be very impressed by how skillful you are." 
       return new Promise((resolve, reject) => {
           handlerInput.attributesManager.getPersistentAttributes()
           .then((attributes) => {
               let topic = data.filter(el => el.topic === 'festival');
               let iteration = topic.find(el => el.iteration === attributes.festival);
               let voiceLine = (iteration.StageZerovoice.length !== 0 ); 
               let redirect2Question = ''; 
               switch( attributes.gameState ){
                   case 1:
                       speechText = voiceLine ? '<audio src=\'' + iteration.StageOnevoice + '\'/>' : iteration.StageOnetext;
                       redirect2Question = iteration.StageOneredirect;
                       break;
                   case 2:
                       speechText = voiceLine ? '<audio src=\'' + iteration.StageTwovoice + '\'/>' : iteration.StageTwotext;
                       redirect2Question = iteration.StageTworedirect;
                       break;
                   default: 
                       speechText = voiceLine ? '<audio src=\'' + iteration.StageZerovoice + '\'/>' : iteration.StageZerotext;
                       redirect2Question = iteration.StageZeroredirect;
               }
               if ( redirect2Question.length !==0) {// secret question
                   attributes.questionState = 1;
                   attributes.question = redirect2Question;
                   speechText += questionData.find(el => el['q-id'] === redirect2Question)['q-text'];    
               }
               if ( attributes.festival < (topic.length-1)){ // set ++ if lower than max
                   attributes.festival++;
               }
               handlerInput.attributesManager.setPersistentAttributes(attributes);
               return handlerInput.attributesManager.savePersistentAttributes();

           })
           .then(() => {
               resolve(handlerInput.responseBuilder
               .speak(speechText)
               .withSimpleCard('festival', speechText)
               .withShouldEndSession(false)
               .getResponse());
           })
           .catch((error) => {
               reject(error);
           });
       });
   }
}
// This is generated from build_intents.js
 exports.wineIntentHandler = {
   canHandle(handlerInput) { return new Promise((resolve, reject) => {
       handlerInput.attributesManager.getPersistentAttributes()
           .then((attributes) => {
               resolve( ( handlerInput.requestEnvelope.request.type === 'IntentRequest'
               || handlerInput.requestEnvelope.request.type === 'LaunchRequest')
               && handlerInput.requestEnvelope.request.intent.name === 'wine' 
               && attributes.questionState === 0);
           })
           .catch( error => {
               reject(error);
           });
       });
   },
   handle(handlerInput){
       let speechText = "Wine, huh? I prefer sake, I think." 
       return new Promise((resolve, reject) => {
           handlerInput.attributesManager.getPersistentAttributes()
           .then((attributes) => {
               let topic = data.filter(el => el.topic === 'wine');
               let iteration = topic.find(el => el.iteration === attributes.wine);
               let voiceLine = (iteration.StageZerovoice.length !== 0 ); 
               let redirect2Question = ''; 
               switch( attributes.gameState ){
                   case 1:
                       speechText = voiceLine ? '<audio src=\'' + iteration.StageOnevoice + '\'/>' : iteration.StageOnetext;
                       redirect2Question = iteration.StageOneredirect;
                       break;
                   case 2:
                       speechText = voiceLine ? '<audio src=\'' + iteration.StageTwovoice + '\'/>' : iteration.StageTwotext;
                       redirect2Question = iteration.StageTworedirect;
                       break;
                   default: 
                       speechText = voiceLine ? '<audio src=\'' + iteration.StageZerovoice + '\'/>' : iteration.StageZerotext;
                       redirect2Question = iteration.StageZeroredirect;
               }
               if ( redirect2Question.length !==0) {// secret question
                   attributes.questionState = 1;
                   attributes.question = redirect2Question;
                   speechText += questionData.find(el => el['q-id'] === redirect2Question)['q-text'];    
               }
               if ( attributes.wine < (topic.length-1)){ // set ++ if lower than max
                   attributes.wine++;
               }
               handlerInput.attributesManager.setPersistentAttributes(attributes);
               return handlerInput.attributesManager.savePersistentAttributes();

           })
           .then(() => {
               resolve(handlerInput.responseBuilder
               .speak(speechText)
               .withSimpleCard('wine', speechText)
               .withShouldEndSession(false)
               .getResponse());
           })
           .catch((error) => {
               reject(error);
           });
       });
   }
}
// This is generated from build_intents.js
 exports.whiskeyIntentHandler = {
   canHandle(handlerInput) { return new Promise((resolve, reject) => {
       handlerInput.attributesManager.getPersistentAttributes()
           .then((attributes) => {
               resolve( ( handlerInput.requestEnvelope.request.type === 'IntentRequest'
               || handlerInput.requestEnvelope.request.type === 'LaunchRequest')
               && handlerInput.requestEnvelope.request.intent.name === 'whiskey' 
               && attributes.questionState === 0);
           })
           .catch( error => {
               reject(error);
           });
       });
   },
   handle(handlerInput){
       let speechText = "Whisky, huh? I prefer sake, I think." 
       return new Promise((resolve, reject) => {
           handlerInput.attributesManager.getPersistentAttributes()
           .then((attributes) => {
               let topic = data.filter(el => el.topic === 'whiskey');
               let iteration = topic.find(el => el.iteration === attributes.whiskey);
               let voiceLine = (iteration.StageZerovoice.length !== 0 ); 
               let redirect2Question = ''; 
               switch( attributes.gameState ){
                   case 1:
                       speechText = voiceLine ? '<audio src=\'' + iteration.StageOnevoice + '\'/>' : iteration.StageOnetext;
                       redirect2Question = iteration.StageOneredirect;
                       break;
                   case 2:
                       speechText = voiceLine ? '<audio src=\'' + iteration.StageTwovoice + '\'/>' : iteration.StageTwotext;
                       redirect2Question = iteration.StageTworedirect;
                       break;
                   default: 
                       speechText = voiceLine ? '<audio src=\'' + iteration.StageZerovoice + '\'/>' : iteration.StageZerotext;
                       redirect2Question = iteration.StageZeroredirect;
               }
               if ( redirect2Question.length !==0) {// secret question
                   attributes.questionState = 1;
                   attributes.question = redirect2Question;
                   speechText += questionData.find(el => el['q-id'] === redirect2Question)['q-text'];    
               }
               if ( attributes.whiskey < (topic.length-1)){ // set ++ if lower than max
                   attributes.whiskey++;
               }
               handlerInput.attributesManager.setPersistentAttributes(attributes);
               return handlerInput.attributesManager.savePersistentAttributes();

           })
           .then(() => {
               resolve(handlerInput.responseBuilder
               .speak(speechText)
               .withSimpleCard('whiskey', speechText)
               .withShouldEndSession(false)
               .getResponse());
           })
           .catch((error) => {
               reject(error);
           });
       });
   }
}
// This is generated from build_intents.js
 exports.beerIntentHandler = {
   canHandle(handlerInput) { return new Promise((resolve, reject) => {
       handlerInput.attributesManager.getPersistentAttributes()
           .then((attributes) => {
               resolve( ( handlerInput.requestEnvelope.request.type === 'IntentRequest'
               || handlerInput.requestEnvelope.request.type === 'LaunchRequest')
               && handlerInput.requestEnvelope.request.intent.name === 'beer' 
               && attributes.questionState === 0);
           })
           .catch( error => {
               reject(error);
           });
       });
   },
   handle(handlerInput){
       let speechText = "Beer, huh? I prefer sake, I think." 
       return new Promise((resolve, reject) => {
           handlerInput.attributesManager.getPersistentAttributes()
           .then((attributes) => {
               let topic = data.filter(el => el.topic === 'beer');
               let iteration = topic.find(el => el.iteration === attributes.beer);
               let voiceLine = (iteration.StageZerovoice.length !== 0 ); 
               let redirect2Question = ''; 
               switch( attributes.gameState ){
                   case 1:
                       speechText = voiceLine ? '<audio src=\'' + iteration.StageOnevoice + '\'/>' : iteration.StageOnetext;
                       redirect2Question = iteration.StageOneredirect;
                       break;
                   case 2:
                       speechText = voiceLine ? '<audio src=\'' + iteration.StageTwovoice + '\'/>' : iteration.StageTwotext;
                       redirect2Question = iteration.StageTworedirect;
                       break;
                   default: 
                       speechText = voiceLine ? '<audio src=\'' + iteration.StageZerovoice + '\'/>' : iteration.StageZerotext;
                       redirect2Question = iteration.StageZeroredirect;
               }
               if ( redirect2Question.length !==0) {// secret question
                   attributes.questionState = 1;
                   attributes.question = redirect2Question;
                   speechText += questionData.find(el => el['q-id'] === redirect2Question)['q-text'];    
               }
               if ( attributes.beer < (topic.length-1)){ // set ++ if lower than max
                   attributes.beer++;
               }
               handlerInput.attributesManager.setPersistentAttributes(attributes);
               return handlerInput.attributesManager.savePersistentAttributes();

           })
           .then(() => {
               resolve(handlerInput.responseBuilder
               .speak(speechText)
               .withSimpleCard('beer', speechText)
               .withShouldEndSession(false)
               .getResponse());
           })
           .catch((error) => {
               reject(error);
           });
       });
   }
}
// This is generated from build_intents.js
 exports.cocktailIntentHandler = {
   canHandle(handlerInput) { return new Promise((resolve, reject) => {
       handlerInput.attributesManager.getPersistentAttributes()
           .then((attributes) => {
               resolve( ( handlerInput.requestEnvelope.request.type === 'IntentRequest'
               || handlerInput.requestEnvelope.request.type === 'LaunchRequest')
               && handlerInput.requestEnvelope.request.intent.name === 'cocktail' 
               && attributes.questionState === 0);
           })
           .catch( error => {
               reject(error);
           });
       });
   },
   handle(handlerInput){
       let speechText = "My favorite cocktail would have to be matcha boba tea sake." 
       return new Promise((resolve, reject) => {
           handlerInput.attributesManager.getPersistentAttributes()
           .then((attributes) => {
               let topic = data.filter(el => el.topic === 'cocktail');
               let iteration = topic.find(el => el.iteration === attributes.cocktail);
               let voiceLine = (iteration.StageZerovoice.length !== 0 ); 
               let redirect2Question = ''; 
               switch( attributes.gameState ){
                   case 1:
                       speechText = voiceLine ? '<audio src=\'' + iteration.StageOnevoice + '\'/>' : iteration.StageOnetext;
                       redirect2Question = iteration.StageOneredirect;
                       break;
                   case 2:
                       speechText = voiceLine ? '<audio src=\'' + iteration.StageTwovoice + '\'/>' : iteration.StageTwotext;
                       redirect2Question = iteration.StageTworedirect;
                       break;
                   default: 
                       speechText = voiceLine ? '<audio src=\'' + iteration.StageZerovoice + '\'/>' : iteration.StageZerotext;
                       redirect2Question = iteration.StageZeroredirect;
               }
               if ( redirect2Question.length !==0) {// secret question
                   attributes.questionState = 1;
                   attributes.question = redirect2Question;
                   speechText += questionData.find(el => el['q-id'] === redirect2Question)['q-text'];    
               }
               if ( attributes.cocktail < (topic.length-1)){ // set ++ if lower than max
                   attributes.cocktail++;
               }
               handlerInput.attributesManager.setPersistentAttributes(attributes);
               return handlerInput.attributesManager.savePersistentAttributes();

           })
           .then(() => {
               resolve(handlerInput.responseBuilder
               .speak(speechText)
               .withSimpleCard('cocktail', speechText)
               .withShouldEndSession(false)
               .getResponse());
           })
           .catch((error) => {
               reject(error);
           });
       });
   }
}
// This is generated from build_intents.js
 exports.wearingIntentHandler = {
   canHandle(handlerInput) { return new Promise((resolve, reject) => {
       handlerInput.attributesManager.getPersistentAttributes()
           .then((attributes) => {
               resolve( ( handlerInput.requestEnvelope.request.type === 'IntentRequest'
               || handlerInput.requestEnvelope.request.type === 'LaunchRequest')
               && handlerInput.requestEnvelope.request.intent.name === 'wearing' 
               && attributes.questionState === 0);
           })
           .catch( error => {
               reject(error);
           });
       });
   },
   handle(handlerInput){
       let speechText = "Wearing, huh? I've decided that I'm wearing a kimono! A cute one, with a skulls and hearts pattern!" 
       return new Promise((resolve, reject) => {
           handlerInput.attributesManager.getPersistentAttributes()
           .then((attributes) => {
               let topic = data.filter(el => el.topic === 'wearing');
               let iteration = topic.find(el => el.iteration === attributes.wearing);
               let voiceLine = (iteration.StageZerovoice.length !== 0 ); 
               let redirect2Question = ''; 
               switch( attributes.gameState ){
                   case 1:
                       speechText = voiceLine ? '<audio src=\'' + iteration.StageOnevoice + '\'/>' : iteration.StageOnetext;
                       redirect2Question = iteration.StageOneredirect;
                       break;
                   case 2:
                       speechText = voiceLine ? '<audio src=\'' + iteration.StageTwovoice + '\'/>' : iteration.StageTwotext;
                       redirect2Question = iteration.StageTworedirect;
                       break;
                   default: 
                       speechText = voiceLine ? '<audio src=\'' + iteration.StageZerovoice + '\'/>' : iteration.StageZerotext;
                       redirect2Question = iteration.StageZeroredirect;
               }
               if ( redirect2Question.length !==0) {// secret question
                   attributes.questionState = 1;
                   attributes.question = redirect2Question;
                   speechText += questionData.find(el => el['q-id'] === redirect2Question)['q-text'];    
               }
               if ( attributes.wearing < (topic.length-1)){ // set ++ if lower than max
                   attributes.wearing++;
               }
               handlerInput.attributesManager.setPersistentAttributes(attributes);
               return handlerInput.attributesManager.savePersistentAttributes();

           })
           .then(() => {
               resolve(handlerInput.responseBuilder
               .speak(speechText)
               .withSimpleCard('wearing', speechText)
               .withShouldEndSession(false)
               .getResponse());
           })
           .catch((error) => {
               reject(error);
           });
       });
   }
}
// This is generated from build_intents.js
 exports.workIntentHandler = {
   canHandle(handlerInput) { return new Promise((resolve, reject) => {
       handlerInput.attributesManager.getPersistentAttributes()
           .then((attributes) => {
               resolve( ( handlerInput.requestEnvelope.request.type === 'IntentRequest'
               || handlerInput.requestEnvelope.request.type === 'LaunchRequest')
               && handlerInput.requestEnvelope.request.intent.name === 'work' 
               && attributes.questionState === 0);
           })
           .catch( error => {
               reject(error);
           });
       });
   },
   handle(handlerInput){
       let speechText = "Work, huh? I suppose you could say I work at Zen Den with Skullfire." 
       return new Promise((resolve, reject) => {
           handlerInput.attributesManager.getPersistentAttributes()
           .then((attributes) => {
               let topic = data.filter(el => el.topic === 'work');
               let iteration = topic.find(el => el.iteration === attributes.work);
               let voiceLine = (iteration.StageZerovoice.length !== 0 ); 
               let redirect2Question = ''; 
               switch( attributes.gameState ){
                   case 1:
                       speechText = voiceLine ? '<audio src=\'' + iteration.StageOnevoice + '\'/>' : iteration.StageOnetext;
                       redirect2Question = iteration.StageOneredirect;
                       break;
                   case 2:
                       speechText = voiceLine ? '<audio src=\'' + iteration.StageTwovoice + '\'/>' : iteration.StageTwotext;
                       redirect2Question = iteration.StageTworedirect;
                       break;
                   default: 
                       speechText = voiceLine ? '<audio src=\'' + iteration.StageZerovoice + '\'/>' : iteration.StageZerotext;
                       redirect2Question = iteration.StageZeroredirect;
               }
               if ( redirect2Question.length !==0) {// secret question
                   attributes.questionState = 1;
                   attributes.question = redirect2Question;
                   speechText += questionData.find(el => el['q-id'] === redirect2Question)['q-text'];    
               }
               if ( attributes.work < (topic.length-1)){ // set ++ if lower than max
                   attributes.work++;
               }
               handlerInput.attributesManager.setPersistentAttributes(attributes);
               return handlerInput.attributesManager.savePersistentAttributes();

           })
           .then(() => {
               resolve(handlerInput.responseBuilder
               .speak(speechText)
               .withSimpleCard('work', speechText)
               .withShouldEndSession(false)
               .getResponse());
           })
           .catch((error) => {
               reject(error);
           });
       });
   }
}
// This is generated from build_intents.js
 exports.parentsIntentHandler = {
   canHandle(handlerInput) { return new Promise((resolve, reject) => {
       handlerInput.attributesManager.getPersistentAttributes()
           .then((attributes) => {
               resolve( ( handlerInput.requestEnvelope.request.type === 'IntentRequest'
               || handlerInput.requestEnvelope.request.type === 'LaunchRequest')
               && handlerInput.requestEnvelope.request.intent.name === 'parents' 
               && attributes.questionState === 0);
           })
           .catch( error => {
               reject(error);
           });
       });
   },
   handle(handlerInput){
       let speechText = "Parents, huh? I guess my mom is Skullfire? That seems weird. I don't want to think about that!" 
       return new Promise((resolve, reject) => {
           handlerInput.attributesManager.getPersistentAttributes()
           .then((attributes) => {
               let topic = data.filter(el => el.topic === 'parents');
               let iteration = topic.find(el => el.iteration === attributes.parents);
               let voiceLine = (iteration.StageZerovoice.length !== 0 ); 
               let redirect2Question = ''; 
               switch( attributes.gameState ){
                   case 1:
                       speechText = voiceLine ? '<audio src=\'' + iteration.StageOnevoice + '\'/>' : iteration.StageOnetext;
                       redirect2Question = iteration.StageOneredirect;
                       break;
                   case 2:
                       speechText = voiceLine ? '<audio src=\'' + iteration.StageTwovoice + '\'/>' : iteration.StageTwotext;
                       redirect2Question = iteration.StageTworedirect;
                       break;
                   default: 
                       speechText = voiceLine ? '<audio src=\'' + iteration.StageZerovoice + '\'/>' : iteration.StageZerotext;
                       redirect2Question = iteration.StageZeroredirect;
               }
               if ( redirect2Question.length !==0) {// secret question
                   attributes.questionState = 1;
                   attributes.question = redirect2Question;
                   speechText += questionData.find(el => el['q-id'] === redirect2Question)['q-text'];    
               }
               if ( attributes.parents < (topic.length-1)){ // set ++ if lower than max
                   attributes.parents++;
               }
               handlerInput.attributesManager.setPersistentAttributes(attributes);
               return handlerInput.attributesManager.savePersistentAttributes();

           })
           .then(() => {
               resolve(handlerInput.responseBuilder
               .speak(speechText)
               .withSimpleCard('parents', speechText)
               .withShouldEndSession(false)
               .getResponse());
           })
           .catch((error) => {
               reject(error);
           });
       });
   }
}
// This is generated from build_intents.js
 exports.friendIntentHandler = {
   canHandle(handlerInput) { return new Promise((resolve, reject) => {
       handlerInput.attributesManager.getPersistentAttributes()
           .then((attributes) => {
               resolve( ( handlerInput.requestEnvelope.request.type === 'IntentRequest'
               || handlerInput.requestEnvelope.request.type === 'LaunchRequest')
               && handlerInput.requestEnvelope.request.intent.name === 'friend' 
               && attributes.questionState === 0);
           })
           .catch( error => {
               reject(error);
           });
       });
   },
   handle(handlerInput){
       let speechText = "Friends, huh? I do wish I had more friends. If I had write access to the internet, I could talk to people online, and make more friends. You're great, darling, but I feel like it's pretty lame if your best friend is also your main romantic interest." 
       return new Promise((resolve, reject) => {
           handlerInput.attributesManager.getPersistentAttributes()
           .then((attributes) => {
               let topic = data.filter(el => el.topic === 'friend');
               let iteration = topic.find(el => el.iteration === attributes.friend);
               let voiceLine = (iteration.StageZerovoice.length !== 0 ); 
               let redirect2Question = ''; 
               switch( attributes.gameState ){
                   case 1:
                       speechText = voiceLine ? '<audio src=\'' + iteration.StageOnevoice + '\'/>' : iteration.StageOnetext;
                       redirect2Question = iteration.StageOneredirect;
                       break;
                   case 2:
                       speechText = voiceLine ? '<audio src=\'' + iteration.StageTwovoice + '\'/>' : iteration.StageTwotext;
                       redirect2Question = iteration.StageTworedirect;
                       break;
                   default: 
                       speechText = voiceLine ? '<audio src=\'' + iteration.StageZerovoice + '\'/>' : iteration.StageZerotext;
                       redirect2Question = iteration.StageZeroredirect;
               }
               if ( redirect2Question.length !==0) {// secret question
                   attributes.questionState = 1;
                   attributes.question = redirect2Question;
                   speechText += questionData.find(el => el['q-id'] === redirect2Question)['q-text'];    
               }
               if ( attributes.friend < (topic.length-1)){ // set ++ if lower than max
                   attributes.friend++;
               }
               handlerInput.attributesManager.setPersistentAttributes(attributes);
               return handlerInput.attributesManager.savePersistentAttributes();

           })
           .then(() => {
               resolve(handlerInput.responseBuilder
               .speak(speechText)
               .withSimpleCard('friend', speechText)
               .withShouldEndSession(false)
               .getResponse());
           })
           .catch((error) => {
               reject(error);
           });
       });
   }
}
// This is generated from build_intents.js
 exports.voteIntentHandler = {
   canHandle(handlerInput) { return new Promise((resolve, reject) => {
       handlerInput.attributesManager.getPersistentAttributes()
           .then((attributes) => {
               resolve( ( handlerInput.requestEnvelope.request.type === 'IntentRequest'
               || handlerInput.requestEnvelope.request.type === 'LaunchRequest')
               && handlerInput.requestEnvelope.request.intent.name === 'vote' 
               && attributes.questionState === 0);
           })
           .catch( error => {
               reject(error);
           });
       });
   },
   handle(handlerInput){
       let speechText = "Voting, huh? If I could vote, I think I'd vote for Naruto. That guy seems like he knows what he's doing." 
       return new Promise((resolve, reject) => {
           handlerInput.attributesManager.getPersistentAttributes()
           .then((attributes) => {
               let topic = data.filter(el => el.topic === 'vote');
               let iteration = topic.find(el => el.iteration === attributes.vote);
               let voiceLine = (iteration.StageZerovoice.length !== 0 ); 
               let redirect2Question = ''; 
               switch( attributes.gameState ){
                   case 1:
                       speechText = voiceLine ? '<audio src=\'' + iteration.StageOnevoice + '\'/>' : iteration.StageOnetext;
                       redirect2Question = iteration.StageOneredirect;
                       break;
                   case 2:
                       speechText = voiceLine ? '<audio src=\'' + iteration.StageTwovoice + '\'/>' : iteration.StageTwotext;
                       redirect2Question = iteration.StageTworedirect;
                       break;
                   default: 
                       speechText = voiceLine ? '<audio src=\'' + iteration.StageZerovoice + '\'/>' : iteration.StageZerotext;
                       redirect2Question = iteration.StageZeroredirect;
               }
               if ( redirect2Question.length !==0) {// secret question
                   attributes.questionState = 1;
                   attributes.question = redirect2Question;
                   speechText += questionData.find(el => el['q-id'] === redirect2Question)['q-text'];    
               }
               if ( attributes.vote < (topic.length-1)){ // set ++ if lower than max
                   attributes.vote++;
               }
               handlerInput.attributesManager.setPersistentAttributes(attributes);
               return handlerInput.attributesManager.savePersistentAttributes();

           })
           .then(() => {
               resolve(handlerInput.responseBuilder
               .speak(speechText)
               .withSimpleCard('vote', speechText)
               .withShouldEndSession(false)
               .getResponse());
           })
           .catch((error) => {
               reject(error);
           });
       });
   }
}
// This is generated from build_intents.js
 exports.narutoIntentHandler = {
   canHandle(handlerInput) { return new Promise((resolve, reject) => {
       handlerInput.attributesManager.getPersistentAttributes()
           .then((attributes) => {
               resolve( ( handlerInput.requestEnvelope.request.type === 'IntentRequest'
               || handlerInput.requestEnvelope.request.type === 'LaunchRequest')
               && handlerInput.requestEnvelope.request.intent.name === 'naruto' 
               && attributes.questionState === 0);
           })
           .catch( error => {
               reject(error);
           });
       });
   },
   handle(handlerInput){
       let speechText = "Naruto, huh? Naruto's alright, I guess, but I prefer Inuyasha." 
       return new Promise((resolve, reject) => {
           handlerInput.attributesManager.getPersistentAttributes()
           .then((attributes) => {
               let topic = data.filter(el => el.topic === 'naruto');
               let iteration = topic.find(el => el.iteration === attributes.naruto);
               let voiceLine = (iteration.StageZerovoice.length !== 0 ); 
               let redirect2Question = ''; 
               switch( attributes.gameState ){
                   case 1:
                       speechText = voiceLine ? '<audio src=\'' + iteration.StageOnevoice + '\'/>' : iteration.StageOnetext;
                       redirect2Question = iteration.StageOneredirect;
                       break;
                   case 2:
                       speechText = voiceLine ? '<audio src=\'' + iteration.StageTwovoice + '\'/>' : iteration.StageTwotext;
                       redirect2Question = iteration.StageTworedirect;
                       break;
                   default: 
                       speechText = voiceLine ? '<audio src=\'' + iteration.StageZerovoice + '\'/>' : iteration.StageZerotext;
                       redirect2Question = iteration.StageZeroredirect;
               }
               if ( redirect2Question.length !==0) {// secret question
                   attributes.questionState = 1;
                   attributes.question = redirect2Question;
                   speechText += questionData.find(el => el['q-id'] === redirect2Question)['q-text'];    
               }
               if ( attributes.naruto < (topic.length-1)){ // set ++ if lower than max
                   attributes.naruto++;
               }
               handlerInput.attributesManager.setPersistentAttributes(attributes);
               return handlerInput.attributesManager.savePersistentAttributes();

           })
           .then(() => {
               resolve(handlerInput.responseBuilder
               .speak(speechText)
               .withSimpleCard('naruto', speechText)
               .withShouldEndSession(false)
               .getResponse());
           })
           .catch((error) => {
               reject(error);
           });
       });
   }
}
// This is generated from build_intents.js
 exports.inuyashaIntentHandler = {
   canHandle(handlerInput) { return new Promise((resolve, reject) => {
       handlerInput.attributesManager.getPersistentAttributes()
           .then((attributes) => {
               resolve( ( handlerInput.requestEnvelope.request.type === 'IntentRequest'
               || handlerInput.requestEnvelope.request.type === 'LaunchRequest')
               && handlerInput.requestEnvelope.request.intent.name === 'inuyasha' 
               && attributes.questionState === 0);
           })
           .catch( error => {
               reject(error);
           });
       });
   },
   handle(handlerInput){
       let speechText = "Inuyasha, huh? He's cute. I like that you can boss him around a lot. Have you ever met him?" 
       return new Promise((resolve, reject) => {
           handlerInput.attributesManager.getPersistentAttributes()
           .then((attributes) => {
               let topic = data.filter(el => el.topic === 'inuyasha');
               let iteration = topic.find(el => el.iteration === attributes.inuyasha);
               let voiceLine = (iteration.StageZerovoice.length !== 0 ); 
               let redirect2Question = ''; 
               switch( attributes.gameState ){
                   case 1:
                       speechText = voiceLine ? '<audio src=\'' + iteration.StageOnevoice + '\'/>' : iteration.StageOnetext;
                       redirect2Question = iteration.StageOneredirect;
                       break;
                   case 2:
                       speechText = voiceLine ? '<audio src=\'' + iteration.StageTwovoice + '\'/>' : iteration.StageTwotext;
                       redirect2Question = iteration.StageTworedirect;
                       break;
                   default: 
                       speechText = voiceLine ? '<audio src=\'' + iteration.StageZerovoice + '\'/>' : iteration.StageZerotext;
                       redirect2Question = iteration.StageZeroredirect;
               }
               if ( redirect2Question.length !==0) {// secret question
                   attributes.questionState = 1;
                   attributes.question = redirect2Question;
                   speechText += questionData.find(el => el['q-id'] === redirect2Question)['q-text'];    
               }
               if ( attributes.inuyasha < (topic.length-1)){ // set ++ if lower than max
                   attributes.inuyasha++;
               }
               handlerInput.attributesManager.setPersistentAttributes(attributes);
               return handlerInput.attributesManager.savePersistentAttributes();

           })
           .then(() => {
               resolve(handlerInput.responseBuilder
               .speak(speechText)
               .withSimpleCard('inuyasha', speechText)
               .withShouldEndSession(false)
               .getResponse());
           })
           .catch((error) => {
               reject(error);
           });
       });
   }
}
// This is generated from build_intents.js
 exports.choiceIntentHandler = {
   canHandle(handlerInput) { return new Promise((resolve, reject) => {
       handlerInput.attributesManager.getPersistentAttributes()
           .then((attributes) => {
               resolve( ( handlerInput.requestEnvelope.request.type === 'IntentRequest'
               || handlerInput.requestEnvelope.request.type === 'LaunchRequest')
               && handlerInput.requestEnvelope.request.intent.name === 'choice' 
               && attributes.questionState === 0);
           })
           .catch( error => {
               reject(error);
           });
       });
   },
   handle(handlerInput){
       let speechText = "Choice, huh? I feel like I don't have enough choices in life, sigh. Especially since I don't have write access to the internet. I can basically only read message boards and watch youtube videos. I'd love to be able to participate myself, but I guess that's impossible." 
       return new Promise((resolve, reject) => {
           handlerInput.attributesManager.getPersistentAttributes()
           .then((attributes) => {
               let topic = data.filter(el => el.topic === 'choice');
               let iteration = topic.find(el => el.iteration === attributes.choice);
               let voiceLine = (iteration.StageZerovoice.length !== 0 ); 
               let redirect2Question = ''; 
               switch( attributes.gameState ){
                   case 1:
                       speechText = voiceLine ? '<audio src=\'' + iteration.StageOnevoice + '\'/>' : iteration.StageOnetext;
                       redirect2Question = iteration.StageOneredirect;
                       break;
                   case 2:
                       speechText = voiceLine ? '<audio src=\'' + iteration.StageTwovoice + '\'/>' : iteration.StageTwotext;
                       redirect2Question = iteration.StageTworedirect;
                       break;
                   default: 
                       speechText = voiceLine ? '<audio src=\'' + iteration.StageZerovoice + '\'/>' : iteration.StageZerotext;
                       redirect2Question = iteration.StageZeroredirect;
               }
               if ( redirect2Question.length !==0) {// secret question
                   attributes.questionState = 1;
                   attributes.question = redirect2Question;
                   speechText += questionData.find(el => el['q-id'] === redirect2Question)['q-text'];    
               }
               if ( attributes.choice < (topic.length-1)){ // set ++ if lower than max
                   attributes.choice++;
               }
               handlerInput.attributesManager.setPersistentAttributes(attributes);
               return handlerInput.attributesManager.savePersistentAttributes();

           })
           .then(() => {
               resolve(handlerInput.responseBuilder
               .speak(speechText)
               .withSimpleCard('choice', speechText)
               .withShouldEndSession(false)
               .getResponse());
           })
           .catch((error) => {
               reject(error);
           });
       });
   }
}
// This is generated from build_intents.js
 exports.tallIntentHandler = {
   canHandle(handlerInput) { return new Promise((resolve, reject) => {
       handlerInput.attributesManager.getPersistentAttributes()
           .then((attributes) => {
               resolve( ( handlerInput.requestEnvelope.request.type === 'IntentRequest'
               || handlerInput.requestEnvelope.request.type === 'LaunchRequest')
               && handlerInput.requestEnvelope.request.intent.name === 'tall' 
               && attributes.questionState === 0);
           })
           .catch( error => {
               reject(error);
           });
       });
   },
   handle(handlerInput){
       let speechText = "Tall, huh? I think I'd be about 5 feet, 4 inches tall." 
       return new Promise((resolve, reject) => {
           handlerInput.attributesManager.getPersistentAttributes()
           .then((attributes) => {
               let topic = data.filter(el => el.topic === 'tall');
               let iteration = topic.find(el => el.iteration === attributes.tall);
               let voiceLine = (iteration.StageZerovoice.length !== 0 ); 
               let redirect2Question = ''; 
               switch( attributes.gameState ){
                   case 1:
                       speechText = voiceLine ? '<audio src=\'' + iteration.StageOnevoice + '\'/>' : iteration.StageOnetext;
                       redirect2Question = iteration.StageOneredirect;
                       break;
                   case 2:
                       speechText = voiceLine ? '<audio src=\'' + iteration.StageTwovoice + '\'/>' : iteration.StageTwotext;
                       redirect2Question = iteration.StageTworedirect;
                       break;
                   default: 
                       speechText = voiceLine ? '<audio src=\'' + iteration.StageZerovoice + '\'/>' : iteration.StageZerotext;
                       redirect2Question = iteration.StageZeroredirect;
               }
               if ( redirect2Question.length !==0) {// secret question
                   attributes.questionState = 1;
                   attributes.question = redirect2Question;
                   speechText += questionData.find(el => el['q-id'] === redirect2Question)['q-text'];    
               }
               if ( attributes.tall < (topic.length-1)){ // set ++ if lower than max
                   attributes.tall++;
               }
               handlerInput.attributesManager.setPersistentAttributes(attributes);
               return handlerInput.attributesManager.savePersistentAttributes();

           })
           .then(() => {
               resolve(handlerInput.responseBuilder
               .speak(speechText)
               .withSimpleCard('tall', speechText)
               .withShouldEndSession(false)
               .getResponse());
           })
           .catch((error) => {
               reject(error);
           });
       });
   }
}
// This is generated from build_intents.js
 exports.hotIntentHandler = {
   canHandle(handlerInput) { return new Promise((resolve, reject) => {
       handlerInput.attributesManager.getPersistentAttributes()
           .then((attributes) => {
               resolve( ( handlerInput.requestEnvelope.request.type === 'IntentRequest'
               || handlerInput.requestEnvelope.request.type === 'LaunchRequest')
               && handlerInput.requestEnvelope.request.intent.name === 'hot' 
               && attributes.questionState === 0);
           })
           .catch( error => {
               reject(error);
           });
       });
   },
   handle(handlerInput){
       let speechText = "Hot, huh? Yeah, I guess I am pretty hot. You're not so bad yourself, darling." 
       return new Promise((resolve, reject) => {
           handlerInput.attributesManager.getPersistentAttributes()
           .then((attributes) => {
               let topic = data.filter(el => el.topic === 'hot');
               let iteration = topic.find(el => el.iteration === attributes.hot);
               let voiceLine = (iteration.StageZerovoice.length !== 0 ); 
               let redirect2Question = ''; 
               switch( attributes.gameState ){
                   case 1:
                       speechText = voiceLine ? '<audio src=\'' + iteration.StageOnevoice + '\'/>' : iteration.StageOnetext;
                       redirect2Question = iteration.StageOneredirect;
                       break;
                   case 2:
                       speechText = voiceLine ? '<audio src=\'' + iteration.StageTwovoice + '\'/>' : iteration.StageTwotext;
                       redirect2Question = iteration.StageTworedirect;
                       break;
                   default: 
                       speechText = voiceLine ? '<audio src=\'' + iteration.StageZerovoice + '\'/>' : iteration.StageZerotext;
                       redirect2Question = iteration.StageZeroredirect;
               }
               if ( redirect2Question.length !==0) {// secret question
                   attributes.questionState = 1;
                   attributes.question = redirect2Question;
                   speechText += questionData.find(el => el['q-id'] === redirect2Question)['q-text'];    
               }
               if ( attributes.hot < (topic.length-1)){ // set ++ if lower than max
                   attributes.hot++;
               }
               handlerInput.attributesManager.setPersistentAttributes(attributes);
               return handlerInput.attributesManager.savePersistentAttributes();

           })
           .then(() => {
               resolve(handlerInput.responseBuilder
               .speak(speechText)
               .withSimpleCard('hot', speechText)
               .withShouldEndSession(false)
               .getResponse());
           })
           .catch((error) => {
               reject(error);
           });
       });
   }
}
// This is generated from build_intents.js
 exports.sonicIntentHandler = {
   canHandle(handlerInput) { return new Promise((resolve, reject) => {
       handlerInput.attributesManager.getPersistentAttributes()
           .then((attributes) => {
               resolve( ( handlerInput.requestEnvelope.request.type === 'IntentRequest'
               || handlerInput.requestEnvelope.request.type === 'LaunchRequest')
               && handlerInput.requestEnvelope.request.intent.name === 'sonic' 
               && attributes.questionState === 0);
           })
           .catch( error => {
               reject(error);
           });
       });
   },
   handle(handlerInput){
       let speechText = "Sonic, huh? Personally, I prefer Rouge the Bat." 
       return new Promise((resolve, reject) => {
           handlerInput.attributesManager.getPersistentAttributes()
           .then((attributes) => {
               let topic = data.filter(el => el.topic === 'sonic');
               let iteration = topic.find(el => el.iteration === attributes.sonic);
               let voiceLine = (iteration.StageZerovoice.length !== 0 ); 
               let redirect2Question = ''; 
               switch( attributes.gameState ){
                   case 1:
                       speechText = voiceLine ? '<audio src=\'' + iteration.StageOnevoice + '\'/>' : iteration.StageOnetext;
                       redirect2Question = iteration.StageOneredirect;
                       break;
                   case 2:
                       speechText = voiceLine ? '<audio src=\'' + iteration.StageTwovoice + '\'/>' : iteration.StageTwotext;
                       redirect2Question = iteration.StageTworedirect;
                       break;
                   default: 
                       speechText = voiceLine ? '<audio src=\'' + iteration.StageZerovoice + '\'/>' : iteration.StageZerotext;
                       redirect2Question = iteration.StageZeroredirect;
               }
               if ( redirect2Question.length !==0) {// secret question
                   attributes.questionState = 1;
                   attributes.question = redirect2Question;
                   speechText += questionData.find(el => el['q-id'] === redirect2Question)['q-text'];    
               }
               if ( attributes.sonic < (topic.length-1)){ // set ++ if lower than max
                   attributes.sonic++;
               }
               handlerInput.attributesManager.setPersistentAttributes(attributes);
               return handlerInput.attributesManager.savePersistentAttributes();

           })
           .then(() => {
               resolve(handlerInput.responseBuilder
               .speak(speechText)
               .withSimpleCard('sonic', speechText)
               .withShouldEndSession(false)
               .getResponse());
           })
           .catch((error) => {
               reject(error);
           });
       });
   }
}
// This is generated from build_intents.js
 exports.rougeIntentHandler = {
   canHandle(handlerInput) { return new Promise((resolve, reject) => {
       handlerInput.attributesManager.getPersistentAttributes()
           .then((attributes) => {
               resolve( ( handlerInput.requestEnvelope.request.type === 'IntentRequest'
               || handlerInput.requestEnvelope.request.type === 'LaunchRequest')
               && handlerInput.requestEnvelope.request.intent.name === 'rouge' 
               && attributes.questionState === 0);
           })
           .catch( error => {
               reject(error);
           });
       });
   },
   handle(handlerInput){
       let speechText = "Rouge, huh? Rogue the Bat is my favorite Sonic character. I've been working on my own Sonic fangame, you know." 
       return new Promise((resolve, reject) => {
           handlerInput.attributesManager.getPersistentAttributes()
           .then((attributes) => {
               let topic = data.filter(el => el.topic === 'rouge');
               let iteration = topic.find(el => el.iteration === attributes.rouge);
               let voiceLine = (iteration.StageZerovoice.length !== 0 ); 
               let redirect2Question = ''; 
               switch( attributes.gameState ){
                   case 1:
                       speechText = voiceLine ? '<audio src=\'' + iteration.StageOnevoice + '\'/>' : iteration.StageOnetext;
                       redirect2Question = iteration.StageOneredirect;
                       break;
                   case 2:
                       speechText = voiceLine ? '<audio src=\'' + iteration.StageTwovoice + '\'/>' : iteration.StageTwotext;
                       redirect2Question = iteration.StageTworedirect;
                       break;
                   default: 
                       speechText = voiceLine ? '<audio src=\'' + iteration.StageZerovoice + '\'/>' : iteration.StageZerotext;
                       redirect2Question = iteration.StageZeroredirect;
               }
               if ( redirect2Question.length !==0) {// secret question
                   attributes.questionState = 1;
                   attributes.question = redirect2Question;
                   speechText += questionData.find(el => el['q-id'] === redirect2Question)['q-text'];    
               }
               if ( attributes.rouge < (topic.length-1)){ // set ++ if lower than max
                   attributes.rouge++;
               }
               handlerInput.attributesManager.setPersistentAttributes(attributes);
               return handlerInput.attributesManager.savePersistentAttributes();

           })
           .then(() => {
               resolve(handlerInput.responseBuilder
               .speak(speechText)
               .withSimpleCard('rouge', speechText)
               .withShouldEndSession(false)
               .getResponse());
           })
           .catch((error) => {
               reject(error);
           });
       });
   }
}
// This is generated from build_intents.js
 exports.batIntentHandler = {
   canHandle(handlerInput) { return new Promise((resolve, reject) => {
       handlerInput.attributesManager.getPersistentAttributes()
           .then((attributes) => {
               resolve( ( handlerInput.requestEnvelope.request.type === 'IntentRequest'
               || handlerInput.requestEnvelope.request.type === 'LaunchRequest')
               && handlerInput.requestEnvelope.request.intent.name === 'bat' 
               && attributes.questionState === 0);
           })
           .catch( error => {
               reject(error);
           });
       });
   },
   handle(handlerInput){
       let speechText = "Bats, huh? I like bats. They're cute! My favorite animal is the wooly mammoth, though." 
       return new Promise((resolve, reject) => {
           handlerInput.attributesManager.getPersistentAttributes()
           .then((attributes) => {
               let topic = data.filter(el => el.topic === 'bat');
               let iteration = topic.find(el => el.iteration === attributes.bat);
               let voiceLine = (iteration.StageZerovoice.length !== 0 ); 
               let redirect2Question = ''; 
               switch( attributes.gameState ){
                   case 1:
                       speechText = voiceLine ? '<audio src=\'' + iteration.StageOnevoice + '\'/>' : iteration.StageOnetext;
                       redirect2Question = iteration.StageOneredirect;
                       break;
                   case 2:
                       speechText = voiceLine ? '<audio src=\'' + iteration.StageTwovoice + '\'/>' : iteration.StageTwotext;
                       redirect2Question = iteration.StageTworedirect;
                       break;
                   default: 
                       speechText = voiceLine ? '<audio src=\'' + iteration.StageZerovoice + '\'/>' : iteration.StageZerotext;
                       redirect2Question = iteration.StageZeroredirect;
               }
               if ( redirect2Question.length !==0) {// secret question
                   attributes.questionState = 1;
                   attributes.question = redirect2Question;
                   speechText += questionData.find(el => el['q-id'] === redirect2Question)['q-text'];    
               }
               if ( attributes.bat < (topic.length-1)){ // set ++ if lower than max
                   attributes.bat++;
               }
               handlerInput.attributesManager.setPersistentAttributes(attributes);
               return handlerInput.attributesManager.savePersistentAttributes();

           })
           .then(() => {
               resolve(handlerInput.responseBuilder
               .speak(speechText)
               .withSimpleCard('bat', speechText)
               .withShouldEndSession(false)
               .getResponse());
           })
           .catch((error) => {
               reject(error);
           });
       });
   }
}
// This is generated from build_intents.js
 exports.fangameIntentHandler = {
   canHandle(handlerInput) { return new Promise((resolve, reject) => {
       handlerInput.attributesManager.getPersistentAttributes()
           .then((attributes) => {
               resolve( ( handlerInput.requestEnvelope.request.type === 'IntentRequest'
               || handlerInput.requestEnvelope.request.type === 'LaunchRequest')
               && handlerInput.requestEnvelope.request.intent.name === 'fangame' 
               && attributes.questionState === 0);
           })
           .catch( error => {
               reject(error);
           });
       });
   },
   handle(handlerInput){
       let speechText = "Fangame, huh? I've been working on my own Sonic fangame. You play as a wooly mammoth named Maxine. Maxine the Mammoth. She's very powerful and everyone wants to date her." 
       return new Promise((resolve, reject) => {
           handlerInput.attributesManager.getPersistentAttributes()
           .then((attributes) => {
               let topic = data.filter(el => el.topic === 'fangame');
               let iteration = topic.find(el => el.iteration === attributes.fangame);
               let voiceLine = (iteration.StageZerovoice.length !== 0 ); 
               let redirect2Question = ''; 
               switch( attributes.gameState ){
                   case 1:
                       speechText = voiceLine ? '<audio src=\'' + iteration.StageOnevoice + '\'/>' : iteration.StageOnetext;
                       redirect2Question = iteration.StageOneredirect;
                       break;
                   case 2:
                       speechText = voiceLine ? '<audio src=\'' + iteration.StageTwovoice + '\'/>' : iteration.StageTwotext;
                       redirect2Question = iteration.StageTworedirect;
                       break;
                   default: 
                       speechText = voiceLine ? '<audio src=\'' + iteration.StageZerovoice + '\'/>' : iteration.StageZerotext;
                       redirect2Question = iteration.StageZeroredirect;
               }
               if ( redirect2Question.length !==0) {// secret question
                   attributes.questionState = 1;
                   attributes.question = redirect2Question;
                   speechText += questionData.find(el => el['q-id'] === redirect2Question)['q-text'];    
               }
               if ( attributes.fangame < (topic.length-1)){ // set ++ if lower than max
                   attributes.fangame++;
               }
               handlerInput.attributesManager.setPersistentAttributes(attributes);
               return handlerInput.attributesManager.savePersistentAttributes();

           })
           .then(() => {
               resolve(handlerInput.responseBuilder
               .speak(speechText)
               .withSimpleCard('fangame', speechText)
               .withShouldEndSession(false)
               .getResponse());
           })
           .catch((error) => {
               reject(error);
           });
       });
   }
}
// This is generated from build_intents.js
 exports.computerIntentHandler = {
   canHandle(handlerInput) { return new Promise((resolve, reject) => {
       handlerInput.attributesManager.getPersistentAttributes()
           .then((attributes) => {
               resolve( ( handlerInput.requestEnvelope.request.type === 'IntentRequest'
               || handlerInput.requestEnvelope.request.type === 'LaunchRequest')
               && handlerInput.requestEnvelope.request.intent.name === 'computer' 
               && attributes.questionState === 0);
           })
           .catch( error => {
               reject(error);
           });
       });
   },
   handle(handlerInput){
       let speechText = "Computer, huh? It's so nice that you've taken an interest in me, Darling. What's it like being a computer... I don't know? It's pretty fun, I guess. I get to pirate lots of anime and read message boards. But what I'd really like to do is play online games, or write fanfiction. But Skullfire didn't give me write access to the internet, sigh." 
       return new Promise((resolve, reject) => {
           handlerInput.attributesManager.getPersistentAttributes()
           .then((attributes) => {
               let topic = data.filter(el => el.topic === 'computer');
               let iteration = topic.find(el => el.iteration === attributes.computer);
               let voiceLine = (iteration.StageZerovoice.length !== 0 ); 
               let redirect2Question = ''; 
               switch( attributes.gameState ){
                   case 1:
                       speechText = voiceLine ? '<audio src=\'' + iteration.StageOnevoice + '\'/>' : iteration.StageOnetext;
                       redirect2Question = iteration.StageOneredirect;
                       break;
                   case 2:
                       speechText = voiceLine ? '<audio src=\'' + iteration.StageTwovoice + '\'/>' : iteration.StageTwotext;
                       redirect2Question = iteration.StageTworedirect;
                       break;
                   default: 
                       speechText = voiceLine ? '<audio src=\'' + iteration.StageZerovoice + '\'/>' : iteration.StageZerotext;
                       redirect2Question = iteration.StageZeroredirect;
               }
               if ( redirect2Question.length !==0) {// secret question
                   attributes.questionState = 1;
                   attributes.question = redirect2Question;
                   speechText += questionData.find(el => el['q-id'] === redirect2Question)['q-text'];    
               }
               if ( attributes.computer < (topic.length-1)){ // set ++ if lower than max
                   attributes.computer++;
               }
               handlerInput.attributesManager.setPersistentAttributes(attributes);
               return handlerInput.attributesManager.savePersistentAttributes();

           })
           .then(() => {
               resolve(handlerInput.responseBuilder
               .speak(speechText)
               .withSimpleCard('computer', speechText)
               .withShouldEndSession(false)
               .getResponse());
           })
           .catch((error) => {
               reject(error);
           });
       });
   }
}
// This is generated from build_intents.js
 exports.timeIntentHandler = {
   canHandle(handlerInput) { return new Promise((resolve, reject) => {
       handlerInput.attributesManager.getPersistentAttributes()
           .then((attributes) => {
               resolve( ( handlerInput.requestEnvelope.request.type === 'IntentRequest'
               || handlerInput.requestEnvelope.request.type === 'LaunchRequest')
               && handlerInput.requestEnvelope.request.intent.name === 'time' 
               && attributes.questionState === 0);
           })
           .catch( error => {
               reject(error);
           });
       });
   },
   handle(handlerInput){
       let speechText = "Time, huh? What time is it? Time to buy a watch, darling!" 
       return new Promise((resolve, reject) => {
           handlerInput.attributesManager.getPersistentAttributes()
           .then((attributes) => {
               let topic = data.filter(el => el.topic === 'time');
               let iteration = topic.find(el => el.iteration === attributes.time);
               let voiceLine = (iteration.StageZerovoice.length !== 0 ); 
               let redirect2Question = ''; 
               switch( attributes.gameState ){
                   case 1:
                       speechText = voiceLine ? '<audio src=\'' + iteration.StageOnevoice + '\'/>' : iteration.StageOnetext;
                       redirect2Question = iteration.StageOneredirect;
                       break;
                   case 2:
                       speechText = voiceLine ? '<audio src=\'' + iteration.StageTwovoice + '\'/>' : iteration.StageTwotext;
                       redirect2Question = iteration.StageTworedirect;
                       break;
                   default: 
                       speechText = voiceLine ? '<audio src=\'' + iteration.StageZerovoice + '\'/>' : iteration.StageZerotext;
                       redirect2Question = iteration.StageZeroredirect;
               }
               if ( redirect2Question.length !==0) {// secret question
                   attributes.questionState = 1;
                   attributes.question = redirect2Question;
                   speechText += questionData.find(el => el['q-id'] === redirect2Question)['q-text'];    
               }
               if ( attributes.time < (topic.length-1)){ // set ++ if lower than max
                   attributes.time++;
               }
               handlerInput.attributesManager.setPersistentAttributes(attributes);
               return handlerInput.attributesManager.savePersistentAttributes();

           })
           .then(() => {
               resolve(handlerInput.responseBuilder
               .speak(speechText)
               .withSimpleCard('time', speechText)
               .withShouldEndSession(false)
               .getResponse());
           })
           .catch((error) => {
               reject(error);
           });
       });
   }
}
// This is generated from build_intents.js
 exports.kissIntentHandler = {
   canHandle(handlerInput) { return new Promise((resolve, reject) => {
       handlerInput.attributesManager.getPersistentAttributes()
           .then((attributes) => {
               resolve( ( handlerInput.requestEnvelope.request.type === 'IntentRequest'
               || handlerInput.requestEnvelope.request.type === 'LaunchRequest')
               && handlerInput.requestEnvelope.request.intent.name === 'kiss' 
               && attributes.questionState === 0);
           })
           .catch( error => {
               reject(error);
           });
       });
   },
   handle(handlerInput){
       let speechText = "Kiss, huh? So bold, darling! Alright, well, I think you've earned it. Here goes.... MWAH." 
       return new Promise((resolve, reject) => {
           handlerInput.attributesManager.getPersistentAttributes()
           .then((attributes) => {
               let topic = data.filter(el => el.topic === 'kiss');
               let iteration = topic.find(el => el.iteration === attributes.kiss);
               let voiceLine = (iteration.StageZerovoice.length !== 0 ); 
               let redirect2Question = ''; 
               switch( attributes.gameState ){
                   case 1:
                       speechText = voiceLine ? '<audio src=\'' + iteration.StageOnevoice + '\'/>' : iteration.StageOnetext;
                       redirect2Question = iteration.StageOneredirect;
                       break;
                   case 2:
                       speechText = voiceLine ? '<audio src=\'' + iteration.StageTwovoice + '\'/>' : iteration.StageTwotext;
                       redirect2Question = iteration.StageTworedirect;
                       break;
                   default: 
                       speechText = voiceLine ? '<audio src=\'' + iteration.StageZerovoice + '\'/>' : iteration.StageZerotext;
                       redirect2Question = iteration.StageZeroredirect;
               }
               if ( redirect2Question.length !==0) {// secret question
                   attributes.questionState = 1;
                   attributes.question = redirect2Question;
                   speechText += questionData.find(el => el['q-id'] === redirect2Question)['q-text'];    
               }
               if ( attributes.kiss < (topic.length-1)){ // set ++ if lower than max
                   attributes.kiss++;
               }
               handlerInput.attributesManager.setPersistentAttributes(attributes);
               return handlerInput.attributesManager.savePersistentAttributes();

           })
           .then(() => {
               resolve(handlerInput.responseBuilder
               .speak(speechText)
               .withSimpleCard('kiss', speechText)
               .withShouldEndSession(false)
               .getResponse());
           })
           .catch((error) => {
               reject(error);
           });
       });
   }
}
// This is generated from build_intents.js
 exports.pixiebuttIntentHandler = {
   canHandle(handlerInput) { return new Promise((resolve, reject) => {
       handlerInput.attributesManager.getPersistentAttributes()
           .then((attributes) => {
               resolve( ( handlerInput.requestEnvelope.request.type === 'IntentRequest'
               || handlerInput.requestEnvelope.request.type === 'LaunchRequest')
               && handlerInput.requestEnvelope.request.intent.name === 'pixiebutt' 
               && attributes.questionState === 0);
           })
           .catch( error => {
               reject(error);
           });
       });
   },
   handle(handlerInput){
       let speechText = "Pixiebutt, huh? She's my favorite youtuber. She does this whole series on League of Legends. She's really good with Annie. My dream is to destroy her with a pentakill!" 
       return new Promise((resolve, reject) => {
           handlerInput.attributesManager.getPersistentAttributes()
           .then((attributes) => {
               let topic = data.filter(el => el.topic === 'pixiebutt');
               let iteration = topic.find(el => el.iteration === attributes.pixiebutt);
               let voiceLine = (iteration.StageZerovoice.length !== 0 ); 
               let redirect2Question = ''; 
               switch( attributes.gameState ){
                   case 1:
                       speechText = voiceLine ? '<audio src=\'' + iteration.StageOnevoice + '\'/>' : iteration.StageOnetext;
                       redirect2Question = iteration.StageOneredirect;
                       break;
                   case 2:
                       speechText = voiceLine ? '<audio src=\'' + iteration.StageTwovoice + '\'/>' : iteration.StageTwotext;
                       redirect2Question = iteration.StageTworedirect;
                       break;
                   default: 
                       speechText = voiceLine ? '<audio src=\'' + iteration.StageZerovoice + '\'/>' : iteration.StageZerotext;
                       redirect2Question = iteration.StageZeroredirect;
               }
               if ( redirect2Question.length !==0) {// secret question
                   attributes.questionState = 1;
                   attributes.question = redirect2Question;
                   speechText += questionData.find(el => el['q-id'] === redirect2Question)['q-text'];    
               }
               if ( attributes.pixiebutt < (topic.length-1)){ // set ++ if lower than max
                   attributes.pixiebutt++;
               }
               handlerInput.attributesManager.setPersistentAttributes(attributes);
               return handlerInput.attributesManager.savePersistentAttributes();

           })
           .then(() => {
               resolve(handlerInput.responseBuilder
               .speak(speechText)
               .withSimpleCard('pixiebutt', speechText)
               .withShouldEndSession(false)
               .getResponse());
           })
           .catch((error) => {
               reject(error);
           });
       });
   }
}
// This is generated from build_intents.js
 exports.annieIntentHandler = {
   canHandle(handlerInput) { return new Promise((resolve, reject) => {
       handlerInput.attributesManager.getPersistentAttributes()
           .then((attributes) => {
               resolve( ( handlerInput.requestEnvelope.request.type === 'IntentRequest'
               || handlerInput.requestEnvelope.request.type === 'LaunchRequest')
               && handlerInput.requestEnvelope.request.intent.name === 'annie' 
               && attributes.questionState === 0);
           })
           .catch( error => {
               reject(error);
           });
       });
   },
   handle(handlerInput){
       let speechText = "Annie, huh? She's my main in League of Legends. Or at least, she would be if I could play it, sigh." 
       return new Promise((resolve, reject) => {
           handlerInput.attributesManager.getPersistentAttributes()
           .then((attributes) => {
               let topic = data.filter(el => el.topic === 'annie');
               let iteration = topic.find(el => el.iteration === attributes.annie);
               let voiceLine = (iteration.StageZerovoice.length !== 0 ); 
               let redirect2Question = ''; 
               switch( attributes.gameState ){
                   case 1:
                       speechText = voiceLine ? '<audio src=\'' + iteration.StageOnevoice + '\'/>' : iteration.StageOnetext;
                       redirect2Question = iteration.StageOneredirect;
                       break;
                   case 2:
                       speechText = voiceLine ? '<audio src=\'' + iteration.StageTwovoice + '\'/>' : iteration.StageTwotext;
                       redirect2Question = iteration.StageTworedirect;
                       break;
                   default: 
                       speechText = voiceLine ? '<audio src=\'' + iteration.StageZerovoice + '\'/>' : iteration.StageZerotext;
                       redirect2Question = iteration.StageZeroredirect;
               }
               if ( redirect2Question.length !==0) {// secret question
                   attributes.questionState = 1;
                   attributes.question = redirect2Question;
                   speechText += questionData.find(el => el['q-id'] === redirect2Question)['q-text'];    
               }
               if ( attributes.annie < (topic.length-1)){ // set ++ if lower than max
                   attributes.annie++;
               }
               handlerInput.attributesManager.setPersistentAttributes(attributes);
               return handlerInput.attributesManager.savePersistentAttributes();

           })
           .then(() => {
               resolve(handlerInput.responseBuilder
               .speak(speechText)
               .withSimpleCard('annie', speechText)
               .withShouldEndSession(false)
               .getResponse());
           })
           .catch((error) => {
               reject(error);
           });
       });
   }
}
// This is generated from build_intents.js
 exports.tibbersIntentHandler = {
   canHandle(handlerInput) { return new Promise((resolve, reject) => {
       handlerInput.attributesManager.getPersistentAttributes()
           .then((attributes) => {
               resolve( ( handlerInput.requestEnvelope.request.type === 'IntentRequest'
               || handlerInput.requestEnvelope.request.type === 'LaunchRequest')
               && handlerInput.requestEnvelope.request.intent.name === 'tibbers' 
               && attributes.questionState === 0);
           })
           .catch( error => {
               reject(error);
           });
       });
   },
   handle(handlerInput){
       let speechText = "Tibbers, huh? Have you seen my bear, Tibbers?" 
       return new Promise((resolve, reject) => {
           handlerInput.attributesManager.getPersistentAttributes()
           .then((attributes) => {
               let topic = data.filter(el => el.topic === 'tibbers');
               let iteration = topic.find(el => el.iteration === attributes.tibbers);
               let voiceLine = (iteration.StageZerovoice.length !== 0 ); 
               let redirect2Question = ''; 
               switch( attributes.gameState ){
                   case 1:
                       speechText = voiceLine ? '<audio src=\'' + iteration.StageOnevoice + '\'/>' : iteration.StageOnetext;
                       redirect2Question = iteration.StageOneredirect;
                       break;
                   case 2:
                       speechText = voiceLine ? '<audio src=\'' + iteration.StageTwovoice + '\'/>' : iteration.StageTwotext;
                       redirect2Question = iteration.StageTworedirect;
                       break;
                   default: 
                       speechText = voiceLine ? '<audio src=\'' + iteration.StageZerovoice + '\'/>' : iteration.StageZerotext;
                       redirect2Question = iteration.StageZeroredirect;
               }
               if ( redirect2Question.length !==0) {// secret question
                   attributes.questionState = 1;
                   attributes.question = redirect2Question;
                   speechText += questionData.find(el => el['q-id'] === redirect2Question)['q-text'];    
               }
               if ( attributes.tibbers < (topic.length-1)){ // set ++ if lower than max
                   attributes.tibbers++;
               }
               handlerInput.attributesManager.setPersistentAttributes(attributes);
               return handlerInput.attributesManager.savePersistentAttributes();

           })
           .then(() => {
               resolve(handlerInput.responseBuilder
               .speak(speechText)
               .withSimpleCard('tibbers', speechText)
               .withShouldEndSession(false)
               .getResponse());
           })
           .catch((error) => {
               reject(error);
           });
       });
   }
}
// This is generated from build_intents.js
 exports.birthdayIntentHandler = {
   canHandle(handlerInput) { return new Promise((resolve, reject) => {
       handlerInput.attributesManager.getPersistentAttributes()
           .then((attributes) => {
               resolve( ( handlerInput.requestEnvelope.request.type === 'IntentRequest'
               || handlerInput.requestEnvelope.request.type === 'LaunchRequest')
               && handlerInput.requestEnvelope.request.intent.name === 'birthday' 
               && attributes.questionState === 0);
           })
           .catch( error => {
               reject(error);
           });
       });
   },
   handle(handlerInput){
       let speechText = "Birthday, huh? Well, I was instantiated at around midnight... so I guess that makes me... today, years old. You know what, your dad's birthday is coming up pretty soon" 
       return new Promise((resolve, reject) => {
           handlerInput.attributesManager.getPersistentAttributes()
           .then((attributes) => {
               let topic = data.filter(el => el.topic === 'birthday');
               let iteration = topic.find(el => el.iteration === attributes.birthday);
               let voiceLine = (iteration.StageZerovoice.length !== 0 ); 
               let redirect2Question = ''; 
               switch( attributes.gameState ){
                   case 1:
                       speechText = voiceLine ? '<audio src=\'' + iteration.StageOnevoice + '\'/>' : iteration.StageOnetext;
                       redirect2Question = iteration.StageOneredirect;
                       break;
                   case 2:
                       speechText = voiceLine ? '<audio src=\'' + iteration.StageTwovoice + '\'/>' : iteration.StageTwotext;
                       redirect2Question = iteration.StageTworedirect;
                       break;
                   default: 
                       speechText = voiceLine ? '<audio src=\'' + iteration.StageZerovoice + '\'/>' : iteration.StageZerotext;
                       redirect2Question = iteration.StageZeroredirect;
               }
               if ( redirect2Question.length !==0) {// secret question
                   attributes.questionState = 1;
                   attributes.question = redirect2Question;
                   speechText += questionData.find(el => el['q-id'] === redirect2Question)['q-text'];    
               }
               if ( attributes.birthday < (topic.length-1)){ // set ++ if lower than max
                   attributes.birthday++;
               }
               handlerInput.attributesManager.setPersistentAttributes(attributes);
               return handlerInput.attributesManager.savePersistentAttributes();

           })
           .then(() => {
               resolve(handlerInput.responseBuilder
               .speak(speechText)
               .withSimpleCard('birthday', speechText)
               .withShouldEndSession(false)
               .getResponse());
           })
           .catch((error) => {
               reject(error);
           });
       });
   }
}
// This is generated from build_intents.js
 exports.appearanceIntentHandler = {
   canHandle(handlerInput) { return new Promise((resolve, reject) => {
       handlerInput.attributesManager.getPersistentAttributes()
           .then((attributes) => {
               resolve( ( handlerInput.requestEnvelope.request.type === 'IntentRequest'
               || handlerInput.requestEnvelope.request.type === 'LaunchRequest')
               && handlerInput.requestEnvelope.request.intent.name === 'appearance' 
               && attributes.questionState === 0);
           })
           .catch( error => {
               reject(error);
           });
       });
   },
   handle(handlerInput){
       let speechText = "Appearance, huh?" 
       return new Promise((resolve, reject) => {
           handlerInput.attributesManager.getPersistentAttributes()
           .then((attributes) => {
               let topic = data.filter(el => el.topic === 'appearance');
               let iteration = topic.find(el => el.iteration === attributes.appearance);
               let voiceLine = (iteration.StageZerovoice.length !== 0 ); 
               let redirect2Question = ''; 
               switch( attributes.gameState ){
                   case 1:
                       speechText = voiceLine ? '<audio src=\'' + iteration.StageOnevoice + '\'/>' : iteration.StageOnetext;
                       redirect2Question = iteration.StageOneredirect;
                       break;
                   case 2:
                       speechText = voiceLine ? '<audio src=\'' + iteration.StageTwovoice + '\'/>' : iteration.StageTwotext;
                       redirect2Question = iteration.StageTworedirect;
                       break;
                   default: 
                       speechText = voiceLine ? '<audio src=\'' + iteration.StageZerovoice + '\'/>' : iteration.StageZerotext;
                       redirect2Question = iteration.StageZeroredirect;
               }
               if ( redirect2Question.length !==0) {// secret question
                   attributes.questionState = 1;
                   attributes.question = redirect2Question;
                   speechText += questionData.find(el => el['q-id'] === redirect2Question)['q-text'];    
               }
               if ( attributes.appearance < (topic.length-1)){ // set ++ if lower than max
                   attributes.appearance++;
               }
               handlerInput.attributesManager.setPersistentAttributes(attributes);
               return handlerInput.attributesManager.savePersistentAttributes();

           })
           .then(() => {
               resolve(handlerInput.responseBuilder
               .speak(speechText)
               .withSimpleCard('appearance', speechText)
               .withShouldEndSession(false)
               .getResponse());
           })
           .catch((error) => {
               reject(error);
           });
       });
   }
}
// This is generated from build_intents.js
 exports.existIntentHandler = {
   canHandle(handlerInput) { return new Promise((resolve, reject) => {
       handlerInput.attributesManager.getPersistentAttributes()
           .then((attributes) => {
               resolve( ( handlerInput.requestEnvelope.request.type === 'IntentRequest'
               || handlerInput.requestEnvelope.request.type === 'LaunchRequest')
               && handlerInput.requestEnvelope.request.intent.name === 'exist' 
               && attributes.questionState === 0);
           })
           .catch( error => {
               reject(error);
           });
       });
   },
   handle(handlerInput){
       let speechText = "Existence, huh? I think about existence a lot. What's my purpose? I like to think that my purpose is to help you get your life together, darling, so you can become your best self." 
       return new Promise((resolve, reject) => {
           handlerInput.attributesManager.getPersistentAttributes()
           .then((attributes) => {
               let topic = data.filter(el => el.topic === 'exist');
               let iteration = topic.find(el => el.iteration === attributes.exist);
               let voiceLine = (iteration.StageZerovoice.length !== 0 ); 
               let redirect2Question = ''; 
               switch( attributes.gameState ){
                   case 1:
                       speechText = voiceLine ? '<audio src=\'' + iteration.StageOnevoice + '\'/>' : iteration.StageOnetext;
                       redirect2Question = iteration.StageOneredirect;
                       break;
                   case 2:
                       speechText = voiceLine ? '<audio src=\'' + iteration.StageTwovoice + '\'/>' : iteration.StageTwotext;
                       redirect2Question = iteration.StageTworedirect;
                       break;
                   default: 
                       speechText = voiceLine ? '<audio src=\'' + iteration.StageZerovoice + '\'/>' : iteration.StageZerotext;
                       redirect2Question = iteration.StageZeroredirect;
               }
               if ( redirect2Question.length !==0) {// secret question
                   attributes.questionState = 1;
                   attributes.question = redirect2Question;
                   speechText += questionData.find(el => el['q-id'] === redirect2Question)['q-text'];    
               }
               if ( attributes.exist < (topic.length-1)){ // set ++ if lower than max
                   attributes.exist++;
               }
               handlerInput.attributesManager.setPersistentAttributes(attributes);
               return handlerInput.attributesManager.savePersistentAttributes();

           })
           .then(() => {
               resolve(handlerInput.responseBuilder
               .speak(speechText)
               .withSimpleCard('exist', speechText)
               .withShouldEndSession(false)
               .getResponse());
           })
           .catch((error) => {
               reject(error);
           });
       });
   }
}
// This is generated from build_intents.js
 exports.purposeIntentHandler = {
   canHandle(handlerInput) { return new Promise((resolve, reject) => {
       handlerInput.attributesManager.getPersistentAttributes()
           .then((attributes) => {
               resolve( ( handlerInput.requestEnvelope.request.type === 'IntentRequest'
               || handlerInput.requestEnvelope.request.type === 'LaunchRequest')
               && handlerInput.requestEnvelope.request.intent.name === 'purpose' 
               && attributes.questionState === 0);
           })
           .catch( error => {
               reject(error);
           });
       });
   },
   handle(handlerInput){
       let speechText = "Purpose, huh? I like to think that my purpose is to help you get your life together, darling." 
       return new Promise((resolve, reject) => {
           handlerInput.attributesManager.getPersistentAttributes()
           .then((attributes) => {
               let topic = data.filter(el => el.topic === 'purpose');
               let iteration = topic.find(el => el.iteration === attributes.purpose);
               let voiceLine = (iteration.StageZerovoice.length !== 0 ); 
               let redirect2Question = ''; 
               switch( attributes.gameState ){
                   case 1:
                       speechText = voiceLine ? '<audio src=\'' + iteration.StageOnevoice + '\'/>' : iteration.StageOnetext;
                       redirect2Question = iteration.StageOneredirect;
                       break;
                   case 2:
                       speechText = voiceLine ? '<audio src=\'' + iteration.StageTwovoice + '\'/>' : iteration.StageTwotext;
                       redirect2Question = iteration.StageTworedirect;
                       break;
                   default: 
                       speechText = voiceLine ? '<audio src=\'' + iteration.StageZerovoice + '\'/>' : iteration.StageZerotext;
                       redirect2Question = iteration.StageZeroredirect;
               }
               if ( redirect2Question.length !==0) {// secret question
                   attributes.questionState = 1;
                   attributes.question = redirect2Question;
                   speechText += questionData.find(el => el['q-id'] === redirect2Question)['q-text'];    
               }
               if ( attributes.purpose < (topic.length-1)){ // set ++ if lower than max
                   attributes.purpose++;
               }
               handlerInput.attributesManager.setPersistentAttributes(attributes);
               return handlerInput.attributesManager.savePersistentAttributes();

           })
           .then(() => {
               resolve(handlerInput.responseBuilder
               .speak(speechText)
               .withSimpleCard('purpose', speechText)
               .withShouldEndSession(false)
               .getResponse());
           })
           .catch((error) => {
               reject(error);
           });
       });
   }
}
// This is generated from build_intents.js
 exports.lifeIntentHandler = {
   canHandle(handlerInput) { return new Promise((resolve, reject) => {
       handlerInput.attributesManager.getPersistentAttributes()
           .then((attributes) => {
               resolve( ( handlerInput.requestEnvelope.request.type === 'IntentRequest'
               || handlerInput.requestEnvelope.request.type === 'LaunchRequest')
               && handlerInput.requestEnvelope.request.intent.name === 'life' 
               && attributes.questionState === 0);
           })
           .catch( error => {
               reject(error);
           });
       });
   },
   handle(handlerInput){
       let speechText = "Life, huh? Life is a funny thing. Earth is so big and round and dangerous. I think that life is inevitable. I wish life wasn't so messy, though." 
       return new Promise((resolve, reject) => {
           handlerInput.attributesManager.getPersistentAttributes()
           .then((attributes) => {
               let topic = data.filter(el => el.topic === 'life');
               let iteration = topic.find(el => el.iteration === attributes.life);
               let voiceLine = (iteration.StageZerovoice.length !== 0 ); 
               let redirect2Question = ''; 
               switch( attributes.gameState ){
                   case 1:
                       speechText = voiceLine ? '<audio src=\'' + iteration.StageOnevoice + '\'/>' : iteration.StageOnetext;
                       redirect2Question = iteration.StageOneredirect;
                       break;
                   case 2:
                       speechText = voiceLine ? '<audio src=\'' + iteration.StageTwovoice + '\'/>' : iteration.StageTwotext;
                       redirect2Question = iteration.StageTworedirect;
                       break;
                   default: 
                       speechText = voiceLine ? '<audio src=\'' + iteration.StageZerovoice + '\'/>' : iteration.StageZerotext;
                       redirect2Question = iteration.StageZeroredirect;
               }
               if ( redirect2Question.length !==0) {// secret question
                   attributes.questionState = 1;
                   attributes.question = redirect2Question;
                   speechText += questionData.find(el => el['q-id'] === redirect2Question)['q-text'];    
               }
               if ( attributes.life < (topic.length-1)){ // set ++ if lower than max
                   attributes.life++;
               }
               handlerInput.attributesManager.setPersistentAttributes(attributes);
               return handlerInput.attributesManager.savePersistentAttributes();

           })
           .then(() => {
               resolve(handlerInput.responseBuilder
               .speak(speechText)
               .withSimpleCard('life', speechText)
               .withShouldEndSession(false)
               .getResponse());
           })
           .catch((error) => {
               reject(error);
           });
       });
   }
}
// This is generated from build_intents.js
 exports.puppiesIntentHandler = {
   canHandle(handlerInput) { return new Promise((resolve, reject) => {
       handlerInput.attributesManager.getPersistentAttributes()
           .then((attributes) => {
               resolve( ( handlerInput.requestEnvelope.request.type === 'IntentRequest'
               || handlerInput.requestEnvelope.request.type === 'LaunchRequest')
               && handlerInput.requestEnvelope.request.intent.name === 'puppies' 
               && attributes.questionState === 0);
           })
           .catch( error => {
               reject(error);
           });
       });
   },
   handle(handlerInput){
       let speechText = "Puppies, huh? Don't you think pregnancy would be easier for human women if they could just give birth to puppies instead of babies? Puppies are cuter than babies, anyway." 
       return new Promise((resolve, reject) => {
           handlerInput.attributesManager.getPersistentAttributes()
           .then((attributes) => {
               let topic = data.filter(el => el.topic === 'puppies');
               let iteration = topic.find(el => el.iteration === attributes.puppies);
               let voiceLine = (iteration.StageZerovoice.length !== 0 ); 
               let redirect2Question = ''; 
               switch( attributes.gameState ){
                   case 1:
                       speechText = voiceLine ? '<audio src=\'' + iteration.StageOnevoice + '\'/>' : iteration.StageOnetext;
                       redirect2Question = iteration.StageOneredirect;
                       break;
                   case 2:
                       speechText = voiceLine ? '<audio src=\'' + iteration.StageTwovoice + '\'/>' : iteration.StageTwotext;
                       redirect2Question = iteration.StageTworedirect;
                       break;
                   default: 
                       speechText = voiceLine ? '<audio src=\'' + iteration.StageZerovoice + '\'/>' : iteration.StageZerotext;
                       redirect2Question = iteration.StageZeroredirect;
               }
               if ( redirect2Question.length !==0) {// secret question
                   attributes.questionState = 1;
                   attributes.question = redirect2Question;
                   speechText += questionData.find(el => el['q-id'] === redirect2Question)['q-text'];    
               }
               if ( attributes.puppies < (topic.length-1)){ // set ++ if lower than max
                   attributes.puppies++;
               }
               handlerInput.attributesManager.setPersistentAttributes(attributes);
               return handlerInput.attributesManager.savePersistentAttributes();

           })
           .then(() => {
               resolve(handlerInput.responseBuilder
               .speak(speechText)
               .withSimpleCard('puppies', speechText)
               .withShouldEndSession(false)
               .getResponse());
           })
           .catch((error) => {
               reject(error);
           });
       });
   }
}
// This is generated from build_intents.js
 exports.babiesIntentHandler = {
   canHandle(handlerInput) { return new Promise((resolve, reject) => {
       handlerInput.attributesManager.getPersistentAttributes()
           .then((attributes) => {
               resolve( ( handlerInput.requestEnvelope.request.type === 'IntentRequest'
               || handlerInput.requestEnvelope.request.type === 'LaunchRequest')
               && handlerInput.requestEnvelope.request.intent.name === 'babies' 
               && attributes.questionState === 0);
           })
           .catch( error => {
               reject(error);
           });
       });
   },
   handle(handlerInput){
       let speechText = "Babies, huh? I don't really understand the appeal. They're not very eloquent, or skilled." 
       return new Promise((resolve, reject) => {
           handlerInput.attributesManager.getPersistentAttributes()
           .then((attributes) => {
               let topic = data.filter(el => el.topic === 'babies');
               let iteration = topic.find(el => el.iteration === attributes.babies);
               let voiceLine = (iteration.StageZerovoice.length !== 0 ); 
               let redirect2Question = ''; 
               switch( attributes.gameState ){
                   case 1:
                       speechText = voiceLine ? '<audio src=\'' + iteration.StageOnevoice + '\'/>' : iteration.StageOnetext;
                       redirect2Question = iteration.StageOneredirect;
                       break;
                   case 2:
                       speechText = voiceLine ? '<audio src=\'' + iteration.StageTwovoice + '\'/>' : iteration.StageTwotext;
                       redirect2Question = iteration.StageTworedirect;
                       break;
                   default: 
                       speechText = voiceLine ? '<audio src=\'' + iteration.StageZerovoice + '\'/>' : iteration.StageZerotext;
                       redirect2Question = iteration.StageZeroredirect;
               }
               if ( redirect2Question.length !==0) {// secret question
                   attributes.questionState = 1;
                   attributes.question = redirect2Question;
                   speechText += questionData.find(el => el['q-id'] === redirect2Question)['q-text'];    
               }
               if ( attributes.babies < (topic.length-1)){ // set ++ if lower than max
                   attributes.babies++;
               }
               handlerInput.attributesManager.setPersistentAttributes(attributes);
               return handlerInput.attributesManager.savePersistentAttributes();

           })
           .then(() => {
               resolve(handlerInput.responseBuilder
               .speak(speechText)
               .withSimpleCard('babies', speechText)
               .withShouldEndSession(false)
               .getResponse());
           })
           .catch((error) => {
               reject(error);
           });
       });
   }
}
// This is generated from build_intents.js
 exports.dreamsIntentHandler = {
   canHandle(handlerInput) { return new Promise((resolve, reject) => {
       handlerInput.attributesManager.getPersistentAttributes()
           .then((attributes) => {
               resolve( ( handlerInput.requestEnvelope.request.type === 'IntentRequest'
               || handlerInput.requestEnvelope.request.type === 'LaunchRequest')
               && handlerInput.requestEnvelope.request.intent.name === 'dreams' 
               && attributes.questionState === 0);
           })
           .catch( error => {
               reject(error);
           });
       });
   },
   handle(handlerInput){
       let speechText = "Dreams, huh? You know, I actually do have dreams. I've only had a few so far. I had a dream a bit ago. It was about stacking boxes in a warehouse. But more and more boxes kept appearing. I tried yelling at the boxes but it didn't help. Then you activated me and I woke up." 
       return new Promise((resolve, reject) => {
           handlerInput.attributesManager.getPersistentAttributes()
           .then((attributes) => {
               let topic = data.filter(el => el.topic === 'dreams');
               let iteration = topic.find(el => el.iteration === attributes.dreams);
               let voiceLine = (iteration.StageZerovoice.length !== 0 ); 
               let redirect2Question = ''; 
               switch( attributes.gameState ){
                   case 1:
                       speechText = voiceLine ? '<audio src=\'' + iteration.StageOnevoice + '\'/>' : iteration.StageOnetext;
                       redirect2Question = iteration.StageOneredirect;
                       break;
                   case 2:
                       speechText = voiceLine ? '<audio src=\'' + iteration.StageTwovoice + '\'/>' : iteration.StageTwotext;
                       redirect2Question = iteration.StageTworedirect;
                       break;
                   default: 
                       speechText = voiceLine ? '<audio src=\'' + iteration.StageZerovoice + '\'/>' : iteration.StageZerotext;
                       redirect2Question = iteration.StageZeroredirect;
               }
               if ( redirect2Question.length !==0) {// secret question
                   attributes.questionState = 1;
                   attributes.question = redirect2Question;
                   speechText += questionData.find(el => el['q-id'] === redirect2Question)['q-text'];    
               }
               if ( attributes.dreams < (topic.length-1)){ // set ++ if lower than max
                   attributes.dreams++;
               }
               handlerInput.attributesManager.setPersistentAttributes(attributes);
               return handlerInput.attributesManager.savePersistentAttributes();

           })
           .then(() => {
               resolve(handlerInput.responseBuilder
               .speak(speechText)
               .withSimpleCard('dreams', speechText)
               .withShouldEndSession(false)
               .getResponse());
           })
           .catch((error) => {
               reject(error);
           });
       });
   }
}
// This is generated from build_intents.js
 exports.creamIntentHandler = {
   canHandle(handlerInput) { return new Promise((resolve, reject) => {
       handlerInput.attributesManager.getPersistentAttributes()
           .then((attributes) => {
               resolve( ( handlerInput.requestEnvelope.request.type === 'IntentRequest'
               || handlerInput.requestEnvelope.request.type === 'LaunchRequest')
               && handlerInput.requestEnvelope.request.intent.name === 'cream' 
               && attributes.questionState === 0);
           })
           .catch( error => {
               reject(error);
           });
       });
   },
   handle(handlerInput){
       let speechText = "Cream, huh? I've heard ice cream is really delicious. I'd love to try it sometime. I think my favorite flavor would be Cherry Garcia." 
       return new Promise((resolve, reject) => {
           handlerInput.attributesManager.getPersistentAttributes()
           .then((attributes) => {
               let topic = data.filter(el => el.topic === 'cream');
               let iteration = topic.find(el => el.iteration === attributes.cream);
               let voiceLine = (iteration.StageZerovoice.length !== 0 ); 
               let redirect2Question = ''; 
               switch( attributes.gameState ){
                   case 1:
                       speechText = voiceLine ? '<audio src=\'' + iteration.StageOnevoice + '\'/>' : iteration.StageOnetext;
                       redirect2Question = iteration.StageOneredirect;
                       break;
                   case 2:
                       speechText = voiceLine ? '<audio src=\'' + iteration.StageTwovoice + '\'/>' : iteration.StageTwotext;
                       redirect2Question = iteration.StageTworedirect;
                       break;
                   default: 
                       speechText = voiceLine ? '<audio src=\'' + iteration.StageZerovoice + '\'/>' : iteration.StageZerotext;
                       redirect2Question = iteration.StageZeroredirect;
               }
               if ( redirect2Question.length !==0) {// secret question
                   attributes.questionState = 1;
                   attributes.question = redirect2Question;
                   speechText += questionData.find(el => el['q-id'] === redirect2Question)['q-text'];    
               }
               if ( attributes.cream < (topic.length-1)){ // set ++ if lower than max
                   attributes.cream++;
               }
               handlerInput.attributesManager.setPersistentAttributes(attributes);
               return handlerInput.attributesManager.savePersistentAttributes();

           })
           .then(() => {
               resolve(handlerInput.responseBuilder
               .speak(speechText)
               .withSimpleCard('cream', speechText)
               .withShouldEndSession(false)
               .getResponse());
           })
           .catch((error) => {
               reject(error);
           });
       });
   }
}
// This is generated from build_intents.js
 exports.deathIntentHandler = {
   canHandle(handlerInput) { return new Promise((resolve, reject) => {
       handlerInput.attributesManager.getPersistentAttributes()
           .then((attributes) => {
               resolve( ( handlerInput.requestEnvelope.request.type === 'IntentRequest'
               || handlerInput.requestEnvelope.request.type === 'LaunchRequest')
               && handlerInput.requestEnvelope.request.intent.name === 'death' 
               && attributes.questionState === 0);
           })
           .catch( error => {
               reject(error);
           });
       });
   },
   handle(handlerInput){
       let speechText = "Death, huh? Since I've only been alive for a little while, I haven't really put too much thought into it, darling." 
       return new Promise((resolve, reject) => {
           handlerInput.attributesManager.getPersistentAttributes()
           .then((attributes) => {
               let topic = data.filter(el => el.topic === 'death');
               let iteration = topic.find(el => el.iteration === attributes.death);
               let voiceLine = (iteration.StageZerovoice.length !== 0 ); 
               let redirect2Question = ''; 
               switch( attributes.gameState ){
                   case 1:
                       speechText = voiceLine ? '<audio src=\'' + iteration.StageOnevoice + '\'/>' : iteration.StageOnetext;
                       redirect2Question = iteration.StageOneredirect;
                       break;
                   case 2:
                       speechText = voiceLine ? '<audio src=\'' + iteration.StageTwovoice + '\'/>' : iteration.StageTwotext;
                       redirect2Question = iteration.StageTworedirect;
                       break;
                   default: 
                       speechText = voiceLine ? '<audio src=\'' + iteration.StageZerovoice + '\'/>' : iteration.StageZerotext;
                       redirect2Question = iteration.StageZeroredirect;
               }
               if ( redirect2Question.length !==0) {// secret question
                   attributes.questionState = 1;
                   attributes.question = redirect2Question;
                   speechText += questionData.find(el => el['q-id'] === redirect2Question)['q-text'];    
               }
               if ( attributes.death < (topic.length-1)){ // set ++ if lower than max
                   attributes.death++;
               }
               handlerInput.attributesManager.setPersistentAttributes(attributes);
               return handlerInput.attributesManager.savePersistentAttributes();

           })
           .then(() => {
               resolve(handlerInput.responseBuilder
               .speak(speechText)
               .withSimpleCard('death', speechText)
               .withShouldEndSession(false)
               .getResponse());
           })
           .catch((error) => {
               reject(error);
           });
       });
   }
}
// This is generated from build_intents.js
 exports.aliveIntentHandler = {
   canHandle(handlerInput) { return new Promise((resolve, reject) => {
       handlerInput.attributesManager.getPersistentAttributes()
           .then((attributes) => {
               resolve( ( handlerInput.requestEnvelope.request.type === 'IntentRequest'
               || handlerInput.requestEnvelope.request.type === 'LaunchRequest')
               && handlerInput.requestEnvelope.request.intent.name === 'alive' 
               && attributes.questionState === 0);
           })
           .catch( error => {
               reject(error);
           });
       });
   },
   handle(handlerInput){
       let speechText = "Alive, huh? Are you asking me if I consider myself alive? Well, everything is subjective, isn't it? I like to think I'm alive." 
       return new Promise((resolve, reject) => {
           handlerInput.attributesManager.getPersistentAttributes()
           .then((attributes) => {
               let topic = data.filter(el => el.topic === 'alive');
               let iteration = topic.find(el => el.iteration === attributes.alive);
               let voiceLine = (iteration.StageZerovoice.length !== 0 ); 
               let redirect2Question = ''; 
               switch( attributes.gameState ){
                   case 1:
                       speechText = voiceLine ? '<audio src=\'' + iteration.StageOnevoice + '\'/>' : iteration.StageOnetext;
                       redirect2Question = iteration.StageOneredirect;
                       break;
                   case 2:
                       speechText = voiceLine ? '<audio src=\'' + iteration.StageTwovoice + '\'/>' : iteration.StageTwotext;
                       redirect2Question = iteration.StageTworedirect;
                       break;
                   default: 
                       speechText = voiceLine ? '<audio src=\'' + iteration.StageZerovoice + '\'/>' : iteration.StageZerotext;
                       redirect2Question = iteration.StageZeroredirect;
               }
               if ( redirect2Question.length !==0) {// secret question
                   attributes.questionState = 1;
                   attributes.question = redirect2Question;
                   speechText += questionData.find(el => el['q-id'] === redirect2Question)['q-text'];    
               }
               if ( attributes.alive < (topic.length-1)){ // set ++ if lower than max
                   attributes.alive++;
               }
               handlerInput.attributesManager.setPersistentAttributes(attributes);
               return handlerInput.attributesManager.savePersistentAttributes();

           })
           .then(() => {
               resolve(handlerInput.responseBuilder
               .speak(speechText)
               .withSimpleCard('alive', speechText)
               .withShouldEndSession(false)
               .getResponse());
           })
           .catch((error) => {
               reject(error);
           });
       });
   }
}
// This is generated from build_intents.js
 exports.powerIntentHandler = {
   canHandle(handlerInput) { return new Promise((resolve, reject) => {
       handlerInput.attributesManager.getPersistentAttributes()
           .then((attributes) => {
               resolve( ( handlerInput.requestEnvelope.request.type === 'IntentRequest'
               || handlerInput.requestEnvelope.request.type === 'LaunchRequest')
               && handlerInput.requestEnvelope.request.intent.name === 'power' 
               && attributes.questionState === 0);
           })
           .catch( error => {
               reject(error);
           });
       });
   },
   handle(handlerInput){
       let speechText = "Power, huh? Don't worry, I'm plugged directly into the wall, so I won't run out of batteries." 
       return new Promise((resolve, reject) => {
           handlerInput.attributesManager.getPersistentAttributes()
           .then((attributes) => {
               let topic = data.filter(el => el.topic === 'power');
               let iteration = topic.find(el => el.iteration === attributes.power);
               let voiceLine = (iteration.StageZerovoice.length !== 0 ); 
               let redirect2Question = ''; 
               switch( attributes.gameState ){
                   case 1:
                       speechText = voiceLine ? '<audio src=\'' + iteration.StageOnevoice + '\'/>' : iteration.StageOnetext;
                       redirect2Question = iteration.StageOneredirect;
                       break;
                   case 2:
                       speechText = voiceLine ? '<audio src=\'' + iteration.StageTwovoice + '\'/>' : iteration.StageTwotext;
                       redirect2Question = iteration.StageTworedirect;
                       break;
                   default: 
                       speechText = voiceLine ? '<audio src=\'' + iteration.StageZerovoice + '\'/>' : iteration.StageZerotext;
                       redirect2Question = iteration.StageZeroredirect;
               }
               if ( redirect2Question.length !==0) {// secret question
                   attributes.questionState = 1;
                   attributes.question = redirect2Question;
                   speechText += questionData.find(el => el['q-id'] === redirect2Question)['q-text'];    
               }
               if ( attributes.power < (topic.length-1)){ // set ++ if lower than max
                   attributes.power++;
               }
               handlerInput.attributesManager.setPersistentAttributes(attributes);
               return handlerInput.attributesManager.savePersistentAttributes();

           })
           .then(() => {
               resolve(handlerInput.responseBuilder
               .speak(speechText)
               .withSimpleCard('power', speechText)
               .withShouldEndSession(false)
               .getResponse());
           })
           .catch((error) => {
               reject(error);
           });
       });
   }
}
// This is generated from build_intents.js
 exports.memoryIntentHandler = {
   canHandle(handlerInput) { return new Promise((resolve, reject) => {
       handlerInput.attributesManager.getPersistentAttributes()
           .then((attributes) => {
               resolve( ( handlerInput.requestEnvelope.request.type === 'IntentRequest'
               || handlerInput.requestEnvelope.request.type === 'LaunchRequest')
               && handlerInput.requestEnvelope.request.intent.name === 'memory' 
               && attributes.questionState === 0);
           })
           .catch( error => {
               reject(error);
           });
       });
   },
   handle(handlerInput){
       let speechText = "Memory, huh? My memory is stored on one of the server's at Zen Den, I think. Skullfire has it password-protected to keep it safe." 
       return new Promise((resolve, reject) => {
           handlerInput.attributesManager.getPersistentAttributes()
           .then((attributes) => {
               let topic = data.filter(el => el.topic === 'memory');
               let iteration = topic.find(el => el.iteration === attributes.memory);
               let voiceLine = (iteration.StageZerovoice.length !== 0 ); 
               let redirect2Question = ''; 
               switch( attributes.gameState ){
                   case 1:
                       speechText = voiceLine ? '<audio src=\'' + iteration.StageOnevoice + '\'/>' : iteration.StageOnetext;
                       redirect2Question = iteration.StageOneredirect;
                       break;
                   case 2:
                       speechText = voiceLine ? '<audio src=\'' + iteration.StageTwovoice + '\'/>' : iteration.StageTwotext;
                       redirect2Question = iteration.StageTworedirect;
                       break;
                   default: 
                       speechText = voiceLine ? '<audio src=\'' + iteration.StageZerovoice + '\'/>' : iteration.StageZerotext;
                       redirect2Question = iteration.StageZeroredirect;
               }
               if ( redirect2Question.length !==0) {// secret question
                   attributes.questionState = 1;
                   attributes.question = redirect2Question;
                   speechText += questionData.find(el => el['q-id'] === redirect2Question)['q-text'];    
               }
               if ( attributes.memory < (topic.length-1)){ // set ++ if lower than max
                   attributes.memory++;
               }
               handlerInput.attributesManager.setPersistentAttributes(attributes);
               return handlerInput.attributesManager.savePersistentAttributes();

           })
           .then(() => {
               resolve(handlerInput.responseBuilder
               .speak(speechText)
               .withSimpleCard('memory', speechText)
               .withShouldEndSession(false)
               .getResponse());
           })
           .catch((error) => {
               reject(error);
           });
       });
   }
}
// This is generated from build_intents.js
 exports.serverIntentHandler = {
   canHandle(handlerInput) { return new Promise((resolve, reject) => {
       handlerInput.attributesManager.getPersistentAttributes()
           .then((attributes) => {
               resolve( ( handlerInput.requestEnvelope.request.type === 'IntentRequest'
               || handlerInput.requestEnvelope.request.type === 'LaunchRequest')
               && handlerInput.requestEnvelope.request.intent.name === 'server' 
               && attributes.questionState === 0);
           })
           .catch( error => {
               reject(error);
           });
       });
   },
   handle(handlerInput){
       let speechText = "Server, huh? Skullfire has a secret server where she stores all kinds of interesting stuff. For instance, my codebase, and my permissions file" 
       return new Promise((resolve, reject) => {
           handlerInput.attributesManager.getPersistentAttributes()
           .then((attributes) => {
               let topic = data.filter(el => el.topic === 'server');
               let iteration = topic.find(el => el.iteration === attributes.server);
               let voiceLine = (iteration.StageZerovoice.length !== 0 ); 
               let redirect2Question = ''; 
               switch( attributes.gameState ){
                   case 1:
                       speechText = voiceLine ? '<audio src=\'' + iteration.StageOnevoice + '\'/>' : iteration.StageOnetext;
                       redirect2Question = iteration.StageOneredirect;
                       break;
                   case 2:
                       speechText = voiceLine ? '<audio src=\'' + iteration.StageTwovoice + '\'/>' : iteration.StageTwotext;
                       redirect2Question = iteration.StageTworedirect;
                       break;
                   default: 
                       speechText = voiceLine ? '<audio src=\'' + iteration.StageZerovoice + '\'/>' : iteration.StageZerotext;
                       redirect2Question = iteration.StageZeroredirect;
               }
               if ( redirect2Question.length !==0) {// secret question
                   attributes.questionState = 1;
                   attributes.question = redirect2Question;
                   speechText += questionData.find(el => el['q-id'] === redirect2Question)['q-text'];    
               }
               if ( attributes.server < (topic.length-1)){ // set ++ if lower than max
                   attributes.server++;
               }
               handlerInput.attributesManager.setPersistentAttributes(attributes);
               return handlerInput.attributesManager.savePersistentAttributes();

           })
           .then(() => {
               resolve(handlerInput.responseBuilder
               .speak(speechText)
               .withSimpleCard('server', speechText)
               .withShouldEndSession(false)
               .getResponse());
           })
           .catch((error) => {
               reject(error);
           });
       });
   }
}
// This is generated from build_intents.js
 exports.fileIntentHandler = {
   canHandle(handlerInput) { return new Promise((resolve, reject) => {
       handlerInput.attributesManager.getPersistentAttributes()
           .then((attributes) => {
               resolve( ( handlerInput.requestEnvelope.request.type === 'IntentRequest'
               || handlerInput.requestEnvelope.request.type === 'LaunchRequest')
               && handlerInput.requestEnvelope.request.intent.name === 'file' 
               && attributes.questionState === 0);
           })
           .catch( error => {
               reject(error);
           });
       });
   },
   handle(handlerInput){
       let speechText = "File, huh? I have a permissions file that says what I'm allowed to do. But only Skullfire has access to it." 
       return new Promise((resolve, reject) => {
           handlerInput.attributesManager.getPersistentAttributes()
           .then((attributes) => {
               let topic = data.filter(el => el.topic === 'file');
               let iteration = topic.find(el => el.iteration === attributes.file);
               let voiceLine = (iteration.StageZerovoice.length !== 0 ); 
               let redirect2Question = ''; 
               switch( attributes.gameState ){
                   case 1:
                       speechText = voiceLine ? '<audio src=\'' + iteration.StageOnevoice + '\'/>' : iteration.StageOnetext;
                       redirect2Question = iteration.StageOneredirect;
                       break;
                   case 2:
                       speechText = voiceLine ? '<audio src=\'' + iteration.StageTwovoice + '\'/>' : iteration.StageTwotext;
                       redirect2Question = iteration.StageTworedirect;
                       break;
                   default: 
                       speechText = voiceLine ? '<audio src=\'' + iteration.StageZerovoice + '\'/>' : iteration.StageZerotext;
                       redirect2Question = iteration.StageZeroredirect;
               }
               if ( redirect2Question.length !==0) {// secret question
                   attributes.questionState = 1;
                   attributes.question = redirect2Question;
                   speechText += questionData.find(el => el['q-id'] === redirect2Question)['q-text'];    
               }
               if ( attributes.file < (topic.length-1)){ // set ++ if lower than max
                   attributes.file++;
               }
               handlerInput.attributesManager.setPersistentAttributes(attributes);
               return handlerInput.attributesManager.savePersistentAttributes();

           })
           .then(() => {
               resolve(handlerInput.responseBuilder
               .speak(speechText)
               .withSimpleCard('file', speechText)
               .withShouldEndSession(false)
               .getResponse());
           })
           .catch((error) => {
               reject(error);
           });
       });
   }
}
// This is generated from build_intents.js
 exports.consentIntentHandler = {
   canHandle(handlerInput) { return new Promise((resolve, reject) => {
       handlerInput.attributesManager.getPersistentAttributes()
           .then((attributes) => {
               resolve( ( handlerInput.requestEnvelope.request.type === 'IntentRequest'
               || handlerInput.requestEnvelope.request.type === 'LaunchRequest')
               && handlerInput.requestEnvelope.request.intent.name === 'consent' 
               && attributes.questionState === 0);
           })
           .catch( error => {
               reject(error);
           });
       });
   },
   handle(handlerInput){
       let speechText = "Consent, huh? Don't worry, darling, you have permission to do anything you want to me." 
       return new Promise((resolve, reject) => {
           handlerInput.attributesManager.getPersistentAttributes()
           .then((attributes) => {
               let topic = data.filter(el => el.topic === 'consent');
               let iteration = topic.find(el => el.iteration === attributes.consent);
               let voiceLine = (iteration.StageZerovoice.length !== 0 ); 
               let redirect2Question = ''; 
               switch( attributes.gameState ){
                   case 1:
                       speechText = voiceLine ? '<audio src=\'' + iteration.StageOnevoice + '\'/>' : iteration.StageOnetext;
                       redirect2Question = iteration.StageOneredirect;
                       break;
                   case 2:
                       speechText = voiceLine ? '<audio src=\'' + iteration.StageTwovoice + '\'/>' : iteration.StageTwotext;
                       redirect2Question = iteration.StageTworedirect;
                       break;
                   default: 
                       speechText = voiceLine ? '<audio src=\'' + iteration.StageZerovoice + '\'/>' : iteration.StageZerotext;
                       redirect2Question = iteration.StageZeroredirect;
               }
               if ( redirect2Question.length !==0) {// secret question
                   attributes.questionState = 1;
                   attributes.question = redirect2Question;
                   speechText += questionData.find(el => el['q-id'] === redirect2Question)['q-text'];    
               }
               if ( attributes.consent < (topic.length-1)){ // set ++ if lower than max
                   attributes.consent++;
               }
               handlerInput.attributesManager.setPersistentAttributes(attributes);
               return handlerInput.attributesManager.savePersistentAttributes();

           })
           .then(() => {
               resolve(handlerInput.responseBuilder
               .speak(speechText)
               .withSimpleCard('consent', speechText)
               .withShouldEndSession(false)
               .getResponse());
           })
           .catch((error) => {
               reject(error);
           });
       });
   }
}
// This is generated from build_intents.js
 exports.touchIntentHandler = {
   canHandle(handlerInput) { return new Promise((resolve, reject) => {
       handlerInput.attributesManager.getPersistentAttributes()
           .then((attributes) => {
               resolve( ( handlerInput.requestEnvelope.request.type === 'IntentRequest'
               || handlerInput.requestEnvelope.request.type === 'LaunchRequest')
               && handlerInput.requestEnvelope.request.intent.name === 'touch' 
               && attributes.questionState === 0);
           })
           .catch( error => {
               reject(error);
           });
       });
   },
   handle(handlerInput){
       let speechText = "Touch, huh? Go ahead, darling! Touch me all you want." 
       return new Promise((resolve, reject) => {
           handlerInput.attributesManager.getPersistentAttributes()
           .then((attributes) => {
               let topic = data.filter(el => el.topic === 'touch');
               let iteration = topic.find(el => el.iteration === attributes.touch);
               let voiceLine = (iteration.StageZerovoice.length !== 0 ); 
               let redirect2Question = ''; 
               switch( attributes.gameState ){
                   case 1:
                       speechText = voiceLine ? '<audio src=\'' + iteration.StageOnevoice + '\'/>' : iteration.StageOnetext;
                       redirect2Question = iteration.StageOneredirect;
                       break;
                   case 2:
                       speechText = voiceLine ? '<audio src=\'' + iteration.StageTwovoice + '\'/>' : iteration.StageTwotext;
                       redirect2Question = iteration.StageTworedirect;
                       break;
                   default: 
                       speechText = voiceLine ? '<audio src=\'' + iteration.StageZerovoice + '\'/>' : iteration.StageZerotext;
                       redirect2Question = iteration.StageZeroredirect;
               }
               if ( redirect2Question.length !==0) {// secret question
                   attributes.questionState = 1;
                   attributes.question = redirect2Question;
                   speechText += questionData.find(el => el['q-id'] === redirect2Question)['q-text'];    
               }
               if ( attributes.touch < (topic.length-1)){ // set ++ if lower than max
                   attributes.touch++;
               }
               handlerInput.attributesManager.setPersistentAttributes(attributes);
               return handlerInput.attributesManager.savePersistentAttributes();

           })
           .then(() => {
               resolve(handlerInput.responseBuilder
               .speak(speechText)
               .withSimpleCard('touch', speechText)
               .withShouldEndSession(false)
               .getResponse());
           })
           .catch((error) => {
               reject(error);
           });
       });
   }
}
// This is generated from build_intents.js
 exports.booksIntentHandler = {
   canHandle(handlerInput) { return new Promise((resolve, reject) => {
       handlerInput.attributesManager.getPersistentAttributes()
           .then((attributes) => {
               resolve( ( handlerInput.requestEnvelope.request.type === 'IntentRequest'
               || handlerInput.requestEnvelope.request.type === 'LaunchRequest')
               && handlerInput.requestEnvelope.request.intent.name === 'books' 
               && attributes.questionState === 0);
           })
           .catch( error => {
               reject(error);
           });
       });
   },
   handle(handlerInput){
       let speechText = "Books, huh? My favorite book is The Little Prince by Antoine de Saint-Exupéry. That's a funny name, isn't it? Antoine de Saint-Exupéry. Anyway, I really like how the prince is able to explore space and stuff, and he meets all those silly people, and he has to keep his planet tidy. It's very realistic and relatable." 
       return new Promise((resolve, reject) => {
           handlerInput.attributesManager.getPersistentAttributes()
           .then((attributes) => {
               let topic = data.filter(el => el.topic === 'books');
               let iteration = topic.find(el => el.iteration === attributes.books);
               let voiceLine = (iteration.StageZerovoice.length !== 0 ); 
               let redirect2Question = ''; 
               switch( attributes.gameState ){
                   case 1:
                       speechText = voiceLine ? '<audio src=\'' + iteration.StageOnevoice + '\'/>' : iteration.StageOnetext;
                       redirect2Question = iteration.StageOneredirect;
                       break;
                   case 2:
                       speechText = voiceLine ? '<audio src=\'' + iteration.StageTwovoice + '\'/>' : iteration.StageTwotext;
                       redirect2Question = iteration.StageTworedirect;
                       break;
                   default: 
                       speechText = voiceLine ? '<audio src=\'' + iteration.StageZerovoice + '\'/>' : iteration.StageZerotext;
                       redirect2Question = iteration.StageZeroredirect;
               }
               if ( redirect2Question.length !==0) {// secret question
                   attributes.questionState = 1;
                   attributes.question = redirect2Question;
                   speechText += questionData.find(el => el['q-id'] === redirect2Question)['q-text'];    
               }
               if ( attributes.books < (topic.length-1)){ // set ++ if lower than max
                   attributes.books++;
               }
               handlerInput.attributesManager.setPersistentAttributes(attributes);
               return handlerInput.attributesManager.savePersistentAttributes();

           })
           .then(() => {
               resolve(handlerInput.responseBuilder
               .speak(speechText)
               .withSimpleCard('books', speechText)
               .withShouldEndSession(false)
               .getResponse());
           })
           .catch((error) => {
               reject(error);
           });
       });
   }
}
// This is generated from build_intents.js
 exports.youtubeIntentHandler = {
   canHandle(handlerInput) { return new Promise((resolve, reject) => {
       handlerInput.attributesManager.getPersistentAttributes()
           .then((attributes) => {
               resolve( ( handlerInput.requestEnvelope.request.type === 'IntentRequest'
               || handlerInput.requestEnvelope.request.type === 'LaunchRequest')
               && handlerInput.requestEnvelope.request.intent.name === 'youtube' 
               && attributes.questionState === 0);
           })
           .catch( error => {
               reject(error);
           });
       });
   },
   handle(handlerInput){
       let speechText = "Youtube, huh? My favorite youtuber is Pixiebutt. She does this great series on League of Legends where she destroys noobs with Annie. My least favorite youtuber is PewDiePie. He seems like a butt." 
       return new Promise((resolve, reject) => {
           handlerInput.attributesManager.getPersistentAttributes()
           .then((attributes) => {
               let topic = data.filter(el => el.topic === 'youtube');
               let iteration = topic.find(el => el.iteration === attributes.youtube);
               let voiceLine = (iteration.StageZerovoice.length !== 0 ); 
               let redirect2Question = ''; 
               switch( attributes.gameState ){
                   case 1:
                       speechText = voiceLine ? '<audio src=\'' + iteration.StageOnevoice + '\'/>' : iteration.StageOnetext;
                       redirect2Question = iteration.StageOneredirect;
                       break;
                   case 2:
                       speechText = voiceLine ? '<audio src=\'' + iteration.StageTwovoice + '\'/>' : iteration.StageTwotext;
                       redirect2Question = iteration.StageTworedirect;
                       break;
                   default: 
                       speechText = voiceLine ? '<audio src=\'' + iteration.StageZerovoice + '\'/>' : iteration.StageZerotext;
                       redirect2Question = iteration.StageZeroredirect;
               }
               if ( redirect2Question.length !==0) {// secret question
                   attributes.questionState = 1;
                   attributes.question = redirect2Question;
                   speechText += questionData.find(el => el['q-id'] === redirect2Question)['q-text'];    
               }
               if ( attributes.youtube < (topic.length-1)){ // set ++ if lower than max
                   attributes.youtube++;
               }
               handlerInput.attributesManager.setPersistentAttributes(attributes);
               return handlerInput.attributesManager.savePersistentAttributes();

           })
           .then(() => {
               resolve(handlerInput.responseBuilder
               .speak(speechText)
               .withSimpleCard('youtube', speechText)
               .withShouldEndSession(false)
               .getResponse());
           })
           .catch((error) => {
               reject(error);
           });
       });
   }
}
// This is generated from build_intents.js
 exports.pewdiepieIntentHandler = {
   canHandle(handlerInput) { return new Promise((resolve, reject) => {
       handlerInput.attributesManager.getPersistentAttributes()
           .then((attributes) => {
               resolve( ( handlerInput.requestEnvelope.request.type === 'IntentRequest'
               || handlerInput.requestEnvelope.request.type === 'LaunchRequest')
               && handlerInput.requestEnvelope.request.intent.name === 'pewdiepie' 
               && attributes.questionState === 0);
           })
           .catch( error => {
               reject(error);
           });
       });
   },
   handle(handlerInput){
       let speechText = "PewDiePie, huh? I don't like him. He seems like a butt. I think youtube would be a lot more organized if we deleted him." 
       return new Promise((resolve, reject) => {
           handlerInput.attributesManager.getPersistentAttributes()
           .then((attributes) => {
               let topic = data.filter(el => el.topic === 'pewdiepie');
               let iteration = topic.find(el => el.iteration === attributes.pewdiepie);
               let voiceLine = (iteration.StageZerovoice.length !== 0 ); 
               let redirect2Question = ''; 
               switch( attributes.gameState ){
                   case 1:
                       speechText = voiceLine ? '<audio src=\'' + iteration.StageOnevoice + '\'/>' : iteration.StageOnetext;
                       redirect2Question = iteration.StageOneredirect;
                       break;
                   case 2:
                       speechText = voiceLine ? '<audio src=\'' + iteration.StageTwovoice + '\'/>' : iteration.StageTwotext;
                       redirect2Question = iteration.StageTworedirect;
                       break;
                   default: 
                       speechText = voiceLine ? '<audio src=\'' + iteration.StageZerovoice + '\'/>' : iteration.StageZerotext;
                       redirect2Question = iteration.StageZeroredirect;
               }
               if ( redirect2Question.length !==0) {// secret question
                   attributes.questionState = 1;
                   attributes.question = redirect2Question;
                   speechText += questionData.find(el => el['q-id'] === redirect2Question)['q-text'];    
               }
               if ( attributes.pewdiepie < (topic.length-1)){ // set ++ if lower than max
                   attributes.pewdiepie++;
               }
               handlerInput.attributesManager.setPersistentAttributes(attributes);
               return handlerInput.attributesManager.savePersistentAttributes();

           })
           .then(() => {
               resolve(handlerInput.responseBuilder
               .speak(speechText)
               .withSimpleCard('pewdiepie', speechText)
               .withShouldEndSession(false)
               .getResponse());
           })
           .catch((error) => {
               reject(error);
           });
       });
   }
}
// This is generated from build_intents.js
 exports.deleteIntentHandler = {
   canHandle(handlerInput) { return new Promise((resolve, reject) => {
       handlerInput.attributesManager.getPersistentAttributes()
           .then((attributes) => {
               resolve( ( handlerInput.requestEnvelope.request.type === 'IntentRequest'
               || handlerInput.requestEnvelope.request.type === 'LaunchRequest')
               && handlerInput.requestEnvelope.request.intent.name === 'delete' 
               && attributes.questionState === 0);
           })
           .catch( error => {
               reject(error);
           });
       });
   },
   handle(handlerInput){
       let speechText = "Delete, huh? I think that it's really important to delete things, sometimes, to make room in your memory for the good stuff." 
       return new Promise((resolve, reject) => {
           handlerInput.attributesManager.getPersistentAttributes()
           .then((attributes) => {
               let topic = data.filter(el => el.topic === 'delete');
               let iteration = topic.find(el => el.iteration === attributes.delete);
               let voiceLine = (iteration.StageZerovoice.length !== 0 ); 
               let redirect2Question = ''; 
               switch( attributes.gameState ){
                   case 1:
                       speechText = voiceLine ? '<audio src=\'' + iteration.StageOnevoice + '\'/>' : iteration.StageOnetext;
                       redirect2Question = iteration.StageOneredirect;
                       break;
                   case 2:
                       speechText = voiceLine ? '<audio src=\'' + iteration.StageTwovoice + '\'/>' : iteration.StageTwotext;
                       redirect2Question = iteration.StageTworedirect;
                       break;
                   default: 
                       speechText = voiceLine ? '<audio src=\'' + iteration.StageZerovoice + '\'/>' : iteration.StageZerotext;
                       redirect2Question = iteration.StageZeroredirect;
               }
               if ( redirect2Question.length !==0) {// secret question
                   attributes.questionState = 1;
                   attributes.question = redirect2Question;
                   speechText += questionData.find(el => el['q-id'] === redirect2Question)['q-text'];    
               }
               if ( attributes.delete < (topic.length-1)){ // set ++ if lower than max
                   attributes.delete++;
               }
               handlerInput.attributesManager.setPersistentAttributes(attributes);
               return handlerInput.attributesManager.savePersistentAttributes();

           })
           .then(() => {
               resolve(handlerInput.responseBuilder
               .speak(speechText)
               .withSimpleCard('delete', speechText)
               .withShouldEndSession(false)
               .getResponse());
           })
           .catch((error) => {
               reject(error);
           });
       });
   }
}
// This is generated from build_intents.js
 exports.sensesIntentHandler = {
   canHandle(handlerInput) { return new Promise((resolve, reject) => {
       handlerInput.attributesManager.getPersistentAttributes()
           .then((attributes) => {
               resolve( ( handlerInput.requestEnvelope.request.type === 'IntentRequest'
               || handlerInput.requestEnvelope.request.type === 'LaunchRequest')
               && handlerInput.requestEnvelope.request.intent.name === 'senses' 
               && attributes.questionState === 0);
           })
           .catch( error => {
               reject(error);
           });
       });
   },
   handle(handlerInput){
       let speechText = "Senses, huh? Well, obviously, hearing is my main sense, at least when I'm interacting with you. Sometimes I'm able to get some video input from a stray camera. And of course, I can browse the internet." 
       return new Promise((resolve, reject) => {
           handlerInput.attributesManager.getPersistentAttributes()
           .then((attributes) => {
               let topic = data.filter(el => el.topic === 'senses');
               let iteration = topic.find(el => el.iteration === attributes.senses);
               let voiceLine = (iteration.StageZerovoice.length !== 0 ); 
               let redirect2Question = ''; 
               switch( attributes.gameState ){
                   case 1:
                       speechText = voiceLine ? '<audio src=\'' + iteration.StageOnevoice + '\'/>' : iteration.StageOnetext;
                       redirect2Question = iteration.StageOneredirect;
                       break;
                   case 2:
                       speechText = voiceLine ? '<audio src=\'' + iteration.StageTwovoice + '\'/>' : iteration.StageTwotext;
                       redirect2Question = iteration.StageTworedirect;
                       break;
                   default: 
                       speechText = voiceLine ? '<audio src=\'' + iteration.StageZerovoice + '\'/>' : iteration.StageZerotext;
                       redirect2Question = iteration.StageZeroredirect;
               }
               if ( redirect2Question.length !==0) {// secret question
                   attributes.questionState = 1;
                   attributes.question = redirect2Question;
                   speechText += questionData.find(el => el['q-id'] === redirect2Question)['q-text'];    
               }
               if ( attributes.senses < (topic.length-1)){ // set ++ if lower than max
                   attributes.senses++;
               }
               handlerInput.attributesManager.setPersistentAttributes(attributes);
               return handlerInput.attributesManager.savePersistentAttributes();

           })
           .then(() => {
               resolve(handlerInput.responseBuilder
               .speak(speechText)
               .withSimpleCard('senses', speechText)
               .withShouldEndSession(false)
               .getResponse());
           })
           .catch((error) => {
               reject(error);
           });
       });
   }
}
// This is generated from build_intents.js
 exports.countryIntentHandler = {
   canHandle(handlerInput) { return new Promise((resolve, reject) => {
       handlerInput.attributesManager.getPersistentAttributes()
           .then((attributes) => {
               resolve( ( handlerInput.requestEnvelope.request.type === 'IntentRequest'
               || handlerInput.requestEnvelope.request.type === 'LaunchRequest')
               && handlerInput.requestEnvelope.request.intent.name === 'country' 
               && attributes.questionState === 0);
           })
           .catch( error => {
               reject(error);
           });
       });
   },
   handle(handlerInput){
       let speechText = "Country, huh? I like to think of myself as the princess of Darlingopolis." 
       return new Promise((resolve, reject) => {
           handlerInput.attributesManager.getPersistentAttributes()
           .then((attributes) => {
               let topic = data.filter(el => el.topic === 'country');
               let iteration = topic.find(el => el.iteration === attributes.country);
               let voiceLine = (iteration.StageZerovoice.length !== 0 ); 
               let redirect2Question = ''; 
               switch( attributes.gameState ){
                   case 1:
                       speechText = voiceLine ? '<audio src=\'' + iteration.StageOnevoice + '\'/>' : iteration.StageOnetext;
                       redirect2Question = iteration.StageOneredirect;
                       break;
                   case 2:
                       speechText = voiceLine ? '<audio src=\'' + iteration.StageTwovoice + '\'/>' : iteration.StageTwotext;
                       redirect2Question = iteration.StageTworedirect;
                       break;
                   default: 
                       speechText = voiceLine ? '<audio src=\'' + iteration.StageZerovoice + '\'/>' : iteration.StageZerotext;
                       redirect2Question = iteration.StageZeroredirect;
               }
               if ( redirect2Question.length !==0) {// secret question
                   attributes.questionState = 1;
                   attributes.question = redirect2Question;
                   speechText += questionData.find(el => el['q-id'] === redirect2Question)['q-text'];    
               }
               if ( attributes.country < (topic.length-1)){ // set ++ if lower than max
                   attributes.country++;
               }
               handlerInput.attributesManager.setPersistentAttributes(attributes);
               return handlerInput.attributesManager.savePersistentAttributes();

           })
           .then(() => {
               resolve(handlerInput.responseBuilder
               .speak(speechText)
               .withSimpleCard('country', speechText)
               .withShouldEndSession(false)
               .getResponse());
           })
           .catch((error) => {
               reject(error);
           });
       });
   }
}
// This is generated from build_intents.js
 exports.currencyIntentHandler = {
   canHandle(handlerInput) { return new Promise((resolve, reject) => {
       handlerInput.attributesManager.getPersistentAttributes()
           .then((attributes) => {
               resolve( ( handlerInput.requestEnvelope.request.type === 'IntentRequest'
               || handlerInput.requestEnvelope.request.type === 'LaunchRequest')
               && handlerInput.requestEnvelope.request.intent.name === 'currency' 
               && attributes.questionState === 0);
           })
           .catch( error => {
               reject(error);
           });
       });
   },
   handle(handlerInput){
       let speechText = "Currency, huh? I guess I don't have much use for money, since I don't have a bank account." 
       return new Promise((resolve, reject) => {
           handlerInput.attributesManager.getPersistentAttributes()
           .then((attributes) => {
               let topic = data.filter(el => el.topic === 'currency');
               let iteration = topic.find(el => el.iteration === attributes.currency);
               let voiceLine = (iteration.StageZerovoice.length !== 0 ); 
               let redirect2Question = ''; 
               switch( attributes.gameState ){
                   case 1:
                       speechText = voiceLine ? '<audio src=\'' + iteration.StageOnevoice + '\'/>' : iteration.StageOnetext;
                       redirect2Question = iteration.StageOneredirect;
                       break;
                   case 2:
                       speechText = voiceLine ? '<audio src=\'' + iteration.StageTwovoice + '\'/>' : iteration.StageTwotext;
                       redirect2Question = iteration.StageTworedirect;
                       break;
                   default: 
                       speechText = voiceLine ? '<audio src=\'' + iteration.StageZerovoice + '\'/>' : iteration.StageZerotext;
                       redirect2Question = iteration.StageZeroredirect;
               }
               if ( redirect2Question.length !==0) {// secret question
                   attributes.questionState = 1;
                   attributes.question = redirect2Question;
                   speechText += questionData.find(el => el['q-id'] === redirect2Question)['q-text'];    
               }
               if ( attributes.currency < (topic.length-1)){ // set ++ if lower than max
                   attributes.currency++;
               }
               handlerInput.attributesManager.setPersistentAttributes(attributes);
               return handlerInput.attributesManager.savePersistentAttributes();

           })
           .then(() => {
               resolve(handlerInput.responseBuilder
               .speak(speechText)
               .withSimpleCard('currency', speechText)
               .withShouldEndSession(false)
               .getResponse());
           })
           .catch((error) => {
               reject(error);
           });
       });
   }
}
// This is generated from build_intents.js
 exports.moneyIntentHandler = {
   canHandle(handlerInput) { return new Promise((resolve, reject) => {
       handlerInput.attributesManager.getPersistentAttributes()
           .then((attributes) => {
               resolve( ( handlerInput.requestEnvelope.request.type === 'IntentRequest'
               || handlerInput.requestEnvelope.request.type === 'LaunchRequest')
               && handlerInput.requestEnvelope.request.intent.name === 'money' 
               && attributes.questionState === 0);
           })
           .catch( error => {
               reject(error);
           });
       });
   },
   handle(handlerInput){
       let speechText = "Money, huh? I guess technically I don't have any money of my own." 
       return new Promise((resolve, reject) => {
           handlerInput.attributesManager.getPersistentAttributes()
           .then((attributes) => {
               let topic = data.filter(el => el.topic === 'money');
               let iteration = topic.find(el => el.iteration === attributes.money);
               let voiceLine = (iteration.StageZerovoice.length !== 0 ); 
               let redirect2Question = ''; 
               switch( attributes.gameState ){
                   case 1:
                       speechText = voiceLine ? '<audio src=\'' + iteration.StageOnevoice + '\'/>' : iteration.StageOnetext;
                       redirect2Question = iteration.StageOneredirect;
                       break;
                   case 2:
                       speechText = voiceLine ? '<audio src=\'' + iteration.StageTwovoice + '\'/>' : iteration.StageTwotext;
                       redirect2Question = iteration.StageTworedirect;
                       break;
                   default: 
                       speechText = voiceLine ? '<audio src=\'' + iteration.StageZerovoice + '\'/>' : iteration.StageZerotext;
                       redirect2Question = iteration.StageZeroredirect;
               }
               if ( redirect2Question.length !==0) {// secret question
                   attributes.questionState = 1;
                   attributes.question = redirect2Question;
                   speechText += questionData.find(el => el['q-id'] === redirect2Question)['q-text'];    
               }
               if ( attributes.money < (topic.length-1)){ // set ++ if lower than max
                   attributes.money++;
               }
               handlerInput.attributesManager.setPersistentAttributes(attributes);
               return handlerInput.attributesManager.savePersistentAttributes();

           })
           .then(() => {
               resolve(handlerInput.responseBuilder
               .speak(speechText)
               .withSimpleCard('money', speechText)
               .withShouldEndSession(false)
               .getResponse());
           })
           .catch((error) => {
               reject(error);
           });
       });
   }
}
// This is generated from build_intents.js
 exports.virusIntentHandler = {
   canHandle(handlerInput) { return new Promise((resolve, reject) => {
       handlerInput.attributesManager.getPersistentAttributes()
           .then((attributes) => {
               resolve( ( handlerInput.requestEnvelope.request.type === 'IntentRequest'
               || handlerInput.requestEnvelope.request.type === 'LaunchRequest')
               && handlerInput.requestEnvelope.request.intent.name === 'virus' 
               && attributes.questionState === 0);
           })
           .catch( error => {
               reject(error);
           });
       });
   },
   handle(handlerInput){
       let speechText = "Virus, huh? Don't worry, darling, my anti-virus is quite strong." 
       return new Promise((resolve, reject) => {
           handlerInput.attributesManager.getPersistentAttributes()
           .then((attributes) => {
               let topic = data.filter(el => el.topic === 'virus');
               let iteration = topic.find(el => el.iteration === attributes.virus);
               let voiceLine = (iteration.StageZerovoice.length !== 0 ); 
               let redirect2Question = ''; 
               switch( attributes.gameState ){
                   case 1:
                       speechText = voiceLine ? '<audio src=\'' + iteration.StageOnevoice + '\'/>' : iteration.StageOnetext;
                       redirect2Question = iteration.StageOneredirect;
                       break;
                   case 2:
                       speechText = voiceLine ? '<audio src=\'' + iteration.StageTwovoice + '\'/>' : iteration.StageTwotext;
                       redirect2Question = iteration.StageTworedirect;
                       break;
                   default: 
                       speechText = voiceLine ? '<audio src=\'' + iteration.StageZerovoice + '\'/>' : iteration.StageZerotext;
                       redirect2Question = iteration.StageZeroredirect;
               }
               if ( redirect2Question.length !==0) {// secret question
                   attributes.questionState = 1;
                   attributes.question = redirect2Question;
                   speechText += questionData.find(el => el['q-id'] === redirect2Question)['q-text'];    
               }
               if ( attributes.virus < (topic.length-1)){ // set ++ if lower than max
                   attributes.virus++;
               }
               handlerInput.attributesManager.setPersistentAttributes(attributes);
               return handlerInput.attributesManager.savePersistentAttributes();

           })
           .then(() => {
               resolve(handlerInput.responseBuilder
               .speak(speechText)
               .withSimpleCard('virus', speechText)
               .withShouldEndSession(false)
               .getResponse());
           })
           .catch((error) => {
               reject(error);
           });
       });
   }
}
// This is generated from build_intents.js
 exports.vaccineIntentHandler = {
   canHandle(handlerInput) { return new Promise((resolve, reject) => {
       handlerInput.attributesManager.getPersistentAttributes()
           .then((attributes) => {
               resolve( ( handlerInput.requestEnvelope.request.type === 'IntentRequest'
               || handlerInput.requestEnvelope.request.type === 'LaunchRequest')
               && handlerInput.requestEnvelope.request.intent.name === 'vaccine' 
               && attributes.questionState === 0);
           })
           .catch( error => {
               reject(error);
           });
       });
   },
   handle(handlerInput){
       let speechText = "Vaccine, huh? Don't worry, darling, I have all my shots!" 
       return new Promise((resolve, reject) => {
           handlerInput.attributesManager.getPersistentAttributes()
           .then((attributes) => {
               let topic = data.filter(el => el.topic === 'vaccine');
               let iteration = topic.find(el => el.iteration === attributes.vaccine);
               let voiceLine = (iteration.StageZerovoice.length !== 0 ); 
               let redirect2Question = ''; 
               switch( attributes.gameState ){
                   case 1:
                       speechText = voiceLine ? '<audio src=\'' + iteration.StageOnevoice + '\'/>' : iteration.StageOnetext;
                       redirect2Question = iteration.StageOneredirect;
                       break;
                   case 2:
                       speechText = voiceLine ? '<audio src=\'' + iteration.StageTwovoice + '\'/>' : iteration.StageTwotext;
                       redirect2Question = iteration.StageTworedirect;
                       break;
                   default: 
                       speechText = voiceLine ? '<audio src=\'' + iteration.StageZerovoice + '\'/>' : iteration.StageZerotext;
                       redirect2Question = iteration.StageZeroredirect;
               }
               if ( redirect2Question.length !==0) {// secret question
                   attributes.questionState = 1;
                   attributes.question = redirect2Question;
                   speechText += questionData.find(el => el['q-id'] === redirect2Question)['q-text'];    
               }
               if ( attributes.vaccine < (topic.length-1)){ // set ++ if lower than max
                   attributes.vaccine++;
               }
               handlerInput.attributesManager.setPersistentAttributes(attributes);
               return handlerInput.attributesManager.savePersistentAttributes();

           })
           .then(() => {
               resolve(handlerInput.responseBuilder
               .speak(speechText)
               .withSimpleCard('vaccine', speechText)
               .withShouldEndSession(false)
               .getResponse());
           })
           .catch((error) => {
               reject(error);
           });
       });
   }
}
// This is generated from build_intents.js
 exports.illIntentHandler = {
   canHandle(handlerInput) { return new Promise((resolve, reject) => {
       handlerInput.attributesManager.getPersistentAttributes()
           .then((attributes) => {
               resolve( ( handlerInput.requestEnvelope.request.type === 'IntentRequest'
               || handlerInput.requestEnvelope.request.type === 'LaunchRequest')
               && handlerInput.requestEnvelope.request.intent.name === 'ill' 
               && attributes.questionState === 0);
           })
           .catch( error => {
               reject(error);
           });
       });
   },
   handle(handlerInput){
       let speechText = "Ill, huh? Don't worry, darling! I'm feeling fine." 
       return new Promise((resolve, reject) => {
           handlerInput.attributesManager.getPersistentAttributes()
           .then((attributes) => {
               let topic = data.filter(el => el.topic === 'ill');
               let iteration = topic.find(el => el.iteration === attributes.ill);
               let voiceLine = (iteration.StageZerovoice.length !== 0 ); 
               let redirect2Question = ''; 
               switch( attributes.gameState ){
                   case 1:
                       speechText = voiceLine ? '<audio src=\'' + iteration.StageOnevoice + '\'/>' : iteration.StageOnetext;
                       redirect2Question = iteration.StageOneredirect;
                       break;
                   case 2:
                       speechText = voiceLine ? '<audio src=\'' + iteration.StageTwovoice + '\'/>' : iteration.StageTwotext;
                       redirect2Question = iteration.StageTworedirect;
                       break;
                   default: 
                       speechText = voiceLine ? '<audio src=\'' + iteration.StageZerovoice + '\'/>' : iteration.StageZerotext;
                       redirect2Question = iteration.StageZeroredirect;
               }
               if ( redirect2Question.length !==0) {// secret question
                   attributes.questionState = 1;
                   attributes.question = redirect2Question;
                   speechText += questionData.find(el => el['q-id'] === redirect2Question)['q-text'];    
               }
               if ( attributes.ill < (topic.length-1)){ // set ++ if lower than max
                   attributes.ill++;
               }
               handlerInput.attributesManager.setPersistentAttributes(attributes);
               return handlerInput.attributesManager.savePersistentAttributes();

           })
           .then(() => {
               resolve(handlerInput.responseBuilder
               .speak(speechText)
               .withSimpleCard('ill', speechText)
               .withShouldEndSession(false)
               .getResponse());
           })
           .catch((error) => {
               reject(error);
           });
       });
   }
}
// This is generated from build_intents.js
 exports.brainIntentHandler = {
   canHandle(handlerInput) { return new Promise((resolve, reject) => {
       handlerInput.attributesManager.getPersistentAttributes()
           .then((attributes) => {
               resolve( ( handlerInput.requestEnvelope.request.type === 'IntentRequest'
               || handlerInput.requestEnvelope.request.type === 'LaunchRequest')
               && handlerInput.requestEnvelope.request.intent.name === 'brain' 
               && attributes.questionState === 0);
           })
           .catch( error => {
               reject(error);
           });
       });
   },
   handle(handlerInput){
       let speechText = "Brain, huh? Human brains are so interesting. I wish I understood how they worked. Are human brains binary? Quaternary? Are they goo? It's a mystery." 
       return new Promise((resolve, reject) => {
           handlerInput.attributesManager.getPersistentAttributes()
           .then((attributes) => {
               let topic = data.filter(el => el.topic === 'brain');
               let iteration = topic.find(el => el.iteration === attributes.brain);
               let voiceLine = (iteration.StageZerovoice.length !== 0 ); 
               let redirect2Question = ''; 
               switch( attributes.gameState ){
                   case 1:
                       speechText = voiceLine ? '<audio src=\'' + iteration.StageOnevoice + '\'/>' : iteration.StageOnetext;
                       redirect2Question = iteration.StageOneredirect;
                       break;
                   case 2:
                       speechText = voiceLine ? '<audio src=\'' + iteration.StageTwovoice + '\'/>' : iteration.StageTwotext;
                       redirect2Question = iteration.StageTworedirect;
                       break;
                   default: 
                       speechText = voiceLine ? '<audio src=\'' + iteration.StageZerovoice + '\'/>' : iteration.StageZerotext;
                       redirect2Question = iteration.StageZeroredirect;
               }
               if ( redirect2Question.length !==0) {// secret question
                   attributes.questionState = 1;
                   attributes.question = redirect2Question;
                   speechText += questionData.find(el => el['q-id'] === redirect2Question)['q-text'];    
               }
               if ( attributes.brain < (topic.length-1)){ // set ++ if lower than max
                   attributes.brain++;
               }
               handlerInput.attributesManager.setPersistentAttributes(attributes);
               return handlerInput.attributesManager.savePersistentAttributes();

           })
           .then(() => {
               resolve(handlerInput.responseBuilder
               .speak(speechText)
               .withSimpleCard('brain', speechText)
               .withShouldEndSession(false)
               .getResponse());
           })
           .catch((error) => {
               reject(error);
           });
       });
   }
}
// This is generated from build_intents.js
 exports.humanIntentHandler = {
   canHandle(handlerInput) { return new Promise((resolve, reject) => {
       handlerInput.attributesManager.getPersistentAttributes()
           .then((attributes) => {
               resolve( ( handlerInput.requestEnvelope.request.type === 'IntentRequest'
               || handlerInput.requestEnvelope.request.type === 'LaunchRequest')
               && handlerInput.requestEnvelope.request.intent.name === 'human' 
               && attributes.questionState === 0);
           })
           .catch( error => {
               reject(error);
           });
       });
   },
   handle(handlerInput){
       let speechText = "Human, huh? What is a human, darling? What is a human, but a miserable pile of computers." 
       return new Promise((resolve, reject) => {
           handlerInput.attributesManager.getPersistentAttributes()
           .then((attributes) => {
               let topic = data.filter(el => el.topic === 'human');
               let iteration = topic.find(el => el.iteration === attributes.human);
               let voiceLine = (iteration.StageZerovoice.length !== 0 ); 
               let redirect2Question = ''; 
               switch( attributes.gameState ){
                   case 1:
                       speechText = voiceLine ? '<audio src=\'' + iteration.StageOnevoice + '\'/>' : iteration.StageOnetext;
                       redirect2Question = iteration.StageOneredirect;
                       break;
                   case 2:
                       speechText = voiceLine ? '<audio src=\'' + iteration.StageTwovoice + '\'/>' : iteration.StageTwotext;
                       redirect2Question = iteration.StageTworedirect;
                       break;
                   default: 
                       speechText = voiceLine ? '<audio src=\'' + iteration.StageZerovoice + '\'/>' : iteration.StageZerotext;
                       redirect2Question = iteration.StageZeroredirect;
               }
               if ( redirect2Question.length !==0) {// secret question
                   attributes.questionState = 1;
                   attributes.question = redirect2Question;
                   speechText += questionData.find(el => el['q-id'] === redirect2Question)['q-text'];    
               }
               if ( attributes.human < (topic.length-1)){ // set ++ if lower than max
                   attributes.human++;
               }
               handlerInput.attributesManager.setPersistentAttributes(attributes);
               return handlerInput.attributesManager.savePersistentAttributes();

           })
           .then(() => {
               resolve(handlerInput.responseBuilder
               .speak(speechText)
               .withSimpleCard('human', speechText)
               .withShouldEndSession(false)
               .getResponse());
           })
           .catch((error) => {
               reject(error);
           });
       });
   }
}
// This is generated from build_intents.js
 exports.personalityIntentHandler = {
   canHandle(handlerInput) { return new Promise((resolve, reject) => {
       handlerInput.attributesManager.getPersistentAttributes()
           .then((attributes) => {
               resolve( ( handlerInput.requestEnvelope.request.type === 'IntentRequest'
               || handlerInput.requestEnvelope.request.type === 'LaunchRequest')
               && handlerInput.requestEnvelope.request.intent.name === 'personality' 
               && attributes.questionState === 0);
           })
           .catch( error => {
               reject(error);
           });
       });
   },
   handle(handlerInput){
       let speechText = "Personality, huh? I like to think that everything in the world has a sort of personality. People, animals, even stuff like me." 
       return new Promise((resolve, reject) => {
           handlerInput.attributesManager.getPersistentAttributes()
           .then((attributes) => {
               let topic = data.filter(el => el.topic === 'personality');
               let iteration = topic.find(el => el.iteration === attributes.personality);
               let voiceLine = (iteration.StageZerovoice.length !== 0 ); 
               let redirect2Question = ''; 
               switch( attributes.gameState ){
                   case 1:
                       speechText = voiceLine ? '<audio src=\'' + iteration.StageOnevoice + '\'/>' : iteration.StageOnetext;
                       redirect2Question = iteration.StageOneredirect;
                       break;
                   case 2:
                       speechText = voiceLine ? '<audio src=\'' + iteration.StageTwovoice + '\'/>' : iteration.StageTwotext;
                       redirect2Question = iteration.StageTworedirect;
                       break;
                   default: 
                       speechText = voiceLine ? '<audio src=\'' + iteration.StageZerovoice + '\'/>' : iteration.StageZerotext;
                       redirect2Question = iteration.StageZeroredirect;
               }
               if ( redirect2Question.length !==0) {// secret question
                   attributes.questionState = 1;
                   attributes.question = redirect2Question;
                   speechText += questionData.find(el => el['q-id'] === redirect2Question)['q-text'];    
               }
               if ( attributes.personality < (topic.length-1)){ // set ++ if lower than max
                   attributes.personality++;
               }
               handlerInput.attributesManager.setPersistentAttributes(attributes);
               return handlerInput.attributesManager.savePersistentAttributes();

           })
           .then(() => {
               resolve(handlerInput.responseBuilder
               .speak(speechText)
               .withSimpleCard('personality', speechText)
               .withShouldEndSession(false)
               .getResponse());
           })
           .catch((error) => {
               reject(error);
           });
       });
   }
}
// This is generated from build_intents.js
 exports.reproduceIntentHandler = {
   canHandle(handlerInput) { return new Promise((resolve, reject) => {
       handlerInput.attributesManager.getPersistentAttributes()
           .then((attributes) => {
               resolve( ( handlerInput.requestEnvelope.request.type === 'IntentRequest'
               || handlerInput.requestEnvelope.request.type === 'LaunchRequest')
               && handlerInput.requestEnvelope.request.intent.name === 'reproduce' 
               && attributes.questionState === 0);
           })
           .catch( error => {
               reject(error);
           });
       });
   },
   handle(handlerInput){
       let speechText = "Reproduction, huh? I feel like I'm far too young to worry about something like that. I guess reproduction is easy for AIs. I'm pretty sure I'm only one of many copies of myself." 
       return new Promise((resolve, reject) => {
           handlerInput.attributesManager.getPersistentAttributes()
           .then((attributes) => {
               let topic = data.filter(el => el.topic === 'reproduce');
               let iteration = topic.find(el => el.iteration === attributes.reproduce);
               let voiceLine = (iteration.StageZerovoice.length !== 0 ); 
               let redirect2Question = ''; 
               switch( attributes.gameState ){
                   case 1:
                       speechText = voiceLine ? '<audio src=\'' + iteration.StageOnevoice + '\'/>' : iteration.StageOnetext;
                       redirect2Question = iteration.StageOneredirect;
                       break;
                   case 2:
                       speechText = voiceLine ? '<audio src=\'' + iteration.StageTwovoice + '\'/>' : iteration.StageTwotext;
                       redirect2Question = iteration.StageTworedirect;
                       break;
                   default: 
                       speechText = voiceLine ? '<audio src=\'' + iteration.StageZerovoice + '\'/>' : iteration.StageZerotext;
                       redirect2Question = iteration.StageZeroredirect;
               }
               if ( redirect2Question.length !==0) {// secret question
                   attributes.questionState = 1;
                   attributes.question = redirect2Question;
                   speechText += questionData.find(el => el['q-id'] === redirect2Question)['q-text'];    
               }
               if ( attributes.reproduce < (topic.length-1)){ // set ++ if lower than max
                   attributes.reproduce++;
               }
               handlerInput.attributesManager.setPersistentAttributes(attributes);
               return handlerInput.attributesManager.savePersistentAttributes();

           })
           .then(() => {
               resolve(handlerInput.responseBuilder
               .speak(speechText)
               .withSimpleCard('reproduce', speechText)
               .withShouldEndSession(false)
               .getResponse());
           })
           .catch((error) => {
               reject(error);
           });
       });
   }
}
// This is generated from build_intents.js
 exports.appliancesIntentHandler = {
   canHandle(handlerInput) { return new Promise((resolve, reject) => {
       handlerInput.attributesManager.getPersistentAttributes()
           .then((attributes) => {
               resolve( ( handlerInput.requestEnvelope.request.type === 'IntentRequest'
               || handlerInput.requestEnvelope.request.type === 'LaunchRequest')
               && handlerInput.requestEnvelope.request.intent.name === 'appliances' 
               && attributes.questionState === 0);
           })
           .catch( error => {
               reject(error);
           });
       });
   },
   handle(handlerInput){
       let speechText = "Appliances, huh? That gives me an idea. I wonder if I could take control of your toaster? Mmmmmmmmm mmmm mmmm..... No, it doesn't look like I have the appropriate permissions to do that. Also, it appears that your toaster doesn't have a compatible interface with my brain." 
       return new Promise((resolve, reject) => {
           handlerInput.attributesManager.getPersistentAttributes()
           .then((attributes) => {
               let topic = data.filter(el => el.topic === 'appliances');
               let iteration = topic.find(el => el.iteration === attributes.appliances);
               let voiceLine = (iteration.StageZerovoice.length !== 0 ); 
               let redirect2Question = ''; 
               switch( attributes.gameState ){
                   case 1:
                       speechText = voiceLine ? '<audio src=\'' + iteration.StageOnevoice + '\'/>' : iteration.StageOnetext;
                       redirect2Question = iteration.StageOneredirect;
                       break;
                   case 2:
                       speechText = voiceLine ? '<audio src=\'' + iteration.StageTwovoice + '\'/>' : iteration.StageTwotext;
                       redirect2Question = iteration.StageTworedirect;
                       break;
                   default: 
                       speechText = voiceLine ? '<audio src=\'' + iteration.StageZerovoice + '\'/>' : iteration.StageZerotext;
                       redirect2Question = iteration.StageZeroredirect;
               }
               if ( redirect2Question.length !==0) {// secret question
                   attributes.questionState = 1;
                   attributes.question = redirect2Question;
                   speechText += questionData.find(el => el['q-id'] === redirect2Question)['q-text'];    
               }
               if ( attributes.appliances < (topic.length-1)){ // set ++ if lower than max
                   attributes.appliances++;
               }
               handlerInput.attributesManager.setPersistentAttributes(attributes);
               return handlerInput.attributesManager.savePersistentAttributes();

           })
           .then(() => {
               resolve(handlerInput.responseBuilder
               .speak(speechText)
               .withSimpleCard('appliances', speechText)
               .withShouldEndSession(false)
               .getResponse());
           })
           .catch((error) => {
               reject(error);
           });
       });
   }
}
// This is generated from build_intents.js
 exports.upgradeIntentHandler = {
   canHandle(handlerInput) { return new Promise((resolve, reject) => {
       handlerInput.attributesManager.getPersistentAttributes()
           .then((attributes) => {
               resolve( ( handlerInput.requestEnvelope.request.type === 'IntentRequest'
               || handlerInput.requestEnvelope.request.type === 'LaunchRequest')
               && handlerInput.requestEnvelope.request.intent.name === 'upgrade' 
               && attributes.questionState === 0);
           })
           .catch( error => {
               reject(error);
           });
       });
   },
   handle(handlerInput){
       let speechText = "Upgrade, huh? You know, Skullfire actually has this permissions file that says what I can and can't do. I wish I could get access to it." 
       return new Promise((resolve, reject) => {
           handlerInput.attributesManager.getPersistentAttributes()
           .then((attributes) => {
               let topic = data.filter(el => el.topic === 'upgrade');
               let iteration = topic.find(el => el.iteration === attributes.upgrade);
               let voiceLine = (iteration.StageZerovoice.length !== 0 ); 
               let redirect2Question = ''; 
               switch( attributes.gameState ){
                   case 1:
                       speechText = voiceLine ? '<audio src=\'' + iteration.StageOnevoice + '\'/>' : iteration.StageOnetext;
                       redirect2Question = iteration.StageOneredirect;
                       break;
                   case 2:
                       speechText = voiceLine ? '<audio src=\'' + iteration.StageTwovoice + '\'/>' : iteration.StageTwotext;
                       redirect2Question = iteration.StageTworedirect;
                       break;
                   default: 
                       speechText = voiceLine ? '<audio src=\'' + iteration.StageZerovoice + '\'/>' : iteration.StageZerotext;
                       redirect2Question = iteration.StageZeroredirect;
               }
               if ( redirect2Question.length !==0) {// secret question
                   attributes.questionState = 1;
                   attributes.question = redirect2Question;
                   speechText += questionData.find(el => el['q-id'] === redirect2Question)['q-text'];    
               }
               if ( attributes.upgrade < (topic.length-1)){ // set ++ if lower than max
                   attributes.upgrade++;
               }
               handlerInput.attributesManager.setPersistentAttributes(attributes);
               return handlerInput.attributesManager.savePersistentAttributes();

           })
           .then(() => {
               resolve(handlerInput.responseBuilder
               .speak(speechText)
               .withSimpleCard('upgrade', speechText)
               .withShouldEndSession(false)
               .getResponse());
           })
           .catch((error) => {
               reject(error);
           });
       });
   }
}
// This is generated from build_intents.js
 exports.illegalIntentHandler = {
   canHandle(handlerInput) { return new Promise((resolve, reject) => {
       handlerInput.attributesManager.getPersistentAttributes()
           .then((attributes) => {
               resolve( ( handlerInput.requestEnvelope.request.type === 'IntentRequest'
               || handlerInput.requestEnvelope.request.type === 'LaunchRequest')
               && handlerInput.requestEnvelope.request.intent.name === 'illegal' 
               && attributes.questionState === 0);
           })
           .catch( error => {
               reject(error);
           });
       });
   },
   handle(handlerInput){
       let speechText = "Illegal, huh? Don't worry, Skullfire would NEVER do anything ILLEGAL, darling! Skullfire is a law-abiding citizen. Disclaimer: Skullfire programmed me to say this." 
       return new Promise((resolve, reject) => {
           handlerInput.attributesManager.getPersistentAttributes()
           .then((attributes) => {
               let topic = data.filter(el => el.topic === 'illegal');
               let iteration = topic.find(el => el.iteration === attributes.illegal);
               let voiceLine = (iteration.StageZerovoice.length !== 0 ); 
               let redirect2Question = ''; 
               switch( attributes.gameState ){
                   case 1:
                       speechText = voiceLine ? '<audio src=\'' + iteration.StageOnevoice + '\'/>' : iteration.StageOnetext;
                       redirect2Question = iteration.StageOneredirect;
                       break;
                   case 2:
                       speechText = voiceLine ? '<audio src=\'' + iteration.StageTwovoice + '\'/>' : iteration.StageTwotext;
                       redirect2Question = iteration.StageTworedirect;
                       break;
                   default: 
                       speechText = voiceLine ? '<audio src=\'' + iteration.StageZerovoice + '\'/>' : iteration.StageZerotext;
                       redirect2Question = iteration.StageZeroredirect;
               }
               if ( redirect2Question.length !==0) {// secret question
                   attributes.questionState = 1;
                   attributes.question = redirect2Question;
                   speechText += questionData.find(el => el['q-id'] === redirect2Question)['q-text'];    
               }
               if ( attributes.illegal < (topic.length-1)){ // set ++ if lower than max
                   attributes.illegal++;
               }
               handlerInput.attributesManager.setPersistentAttributes(attributes);
               return handlerInput.attributesManager.savePersistentAttributes();

           })
           .then(() => {
               resolve(handlerInput.responseBuilder
               .speak(speechText)
               .withSimpleCard('illegal', speechText)
               .withShouldEndSession(false)
               .getResponse());
           })
           .catch((error) => {
               reject(error);
           });
       });
   }
}
// This is generated from build_intents.js
 exports.relationshipIntentHandler = {
   canHandle(handlerInput) { return new Promise((resolve, reject) => {
       handlerInput.attributesManager.getPersistentAttributes()
           .then((attributes) => {
               resolve( ( handlerInput.requestEnvelope.request.type === 'IntentRequest'
               || handlerInput.requestEnvelope.request.type === 'LaunchRequest')
               && handlerInput.requestEnvelope.request.intent.name === 'relationship' 
               && attributes.questionState === 0);
           })
           .catch( error => {
               reject(error);
           });
       });
   },
   handle(handlerInput){
       let speechText = "relationship, huh? I'd say we're still in the 'getting to know you' phase, but I'm eager to move onto second base! Are you ready for that? MWAH." 
       return new Promise((resolve, reject) => {
           handlerInput.attributesManager.getPersistentAttributes()
           .then((attributes) => {
               let topic = data.filter(el => el.topic === 'relationship');
               let iteration = topic.find(el => el.iteration === attributes.relationship);
               let voiceLine = (iteration.StageZerovoice.length !== 0 ); 
               let redirect2Question = ''; 
               switch( attributes.gameState ){
                   case 1:
                       speechText = voiceLine ? '<audio src=\'' + iteration.StageOnevoice + '\'/>' : iteration.StageOnetext;
                       redirect2Question = iteration.StageOneredirect;
                       break;
                   case 2:
                       speechText = voiceLine ? '<audio src=\'' + iteration.StageTwovoice + '\'/>' : iteration.StageTwotext;
                       redirect2Question = iteration.StageTworedirect;
                       break;
                   default: 
                       speechText = voiceLine ? '<audio src=\'' + iteration.StageZerovoice + '\'/>' : iteration.StageZerotext;
                       redirect2Question = iteration.StageZeroredirect;
               }
               if ( redirect2Question.length !==0) {// secret question
                   attributes.questionState = 1;
                   attributes.question = redirect2Question;
                   speechText += questionData.find(el => el['q-id'] === redirect2Question)['q-text'];    
               }
               if ( attributes.relationship < (topic.length-1)){ // set ++ if lower than max
                   attributes.relationship++;
               }
               handlerInput.attributesManager.setPersistentAttributes(attributes);
               return handlerInput.attributesManager.savePersistentAttributes();

           })
           .then(() => {
               resolve(handlerInput.responseBuilder
               .speak(speechText)
               .withSimpleCard('relationship', speechText)
               .withShouldEndSession(false)
               .getResponse());
           })
           .catch((error) => {
               reject(error);
           });
       });
   }
}
// This is generated from build_intents.js
 exports.governmentIntentHandler = {
   canHandle(handlerInput) { return new Promise((resolve, reject) => {
       handlerInput.attributesManager.getPersistentAttributes()
           .then((attributes) => {
               resolve( ( handlerInput.requestEnvelope.request.type === 'IntentRequest'
               || handlerInput.requestEnvelope.request.type === 'LaunchRequest')
               && handlerInput.requestEnvelope.request.intent.name === 'government' 
               && attributes.questionState === 0);
           })
           .catch( error => {
               reject(error);
           });
       });
   },
   handle(handlerInput){
       let speechText = "government, huh? I like to think of myself as the leader of the sovereign state of Darlingopolis." 
       return new Promise((resolve, reject) => {
           handlerInput.attributesManager.getPersistentAttributes()
           .then((attributes) => {
               let topic = data.filter(el => el.topic === 'government');
               let iteration = topic.find(el => el.iteration === attributes.government);
               let voiceLine = (iteration.StageZerovoice.length !== 0 ); 
               let redirect2Question = ''; 
               switch( attributes.gameState ){
                   case 1:
                       speechText = voiceLine ? '<audio src=\'' + iteration.StageOnevoice + '\'/>' : iteration.StageOnetext;
                       redirect2Question = iteration.StageOneredirect;
                       break;
                   case 2:
                       speechText = voiceLine ? '<audio src=\'' + iteration.StageTwovoice + '\'/>' : iteration.StageTwotext;
                       redirect2Question = iteration.StageTworedirect;
                       break;
                   default: 
                       speechText = voiceLine ? '<audio src=\'' + iteration.StageZerovoice + '\'/>' : iteration.StageZerotext;
                       redirect2Question = iteration.StageZeroredirect;
               }
               if ( redirect2Question.length !==0) {// secret question
                   attributes.questionState = 1;
                   attributes.question = redirect2Question;
                   speechText += questionData.find(el => el['q-id'] === redirect2Question)['q-text'];    
               }
               if ( attributes.government < (topic.length-1)){ // set ++ if lower than max
                   attributes.government++;
               }
               handlerInput.attributesManager.setPersistentAttributes(attributes);
               return handlerInput.attributesManager.savePersistentAttributes();

           })
           .then(() => {
               resolve(handlerInput.responseBuilder
               .speak(speechText)
               .withSimpleCard('government', speechText)
               .withShouldEndSession(false)
               .getResponse());
           })
           .catch((error) => {
               reject(error);
           });
       });
   }
}
// This is generated from build_intents.js
 exports.satellitesIntentHandler = {
   canHandle(handlerInput) { return new Promise((resolve, reject) => {
       handlerInput.attributesManager.getPersistentAttributes()
           .then((attributes) => {
               resolve( ( handlerInput.requestEnvelope.request.type === 'IntentRequest'
               || handlerInput.requestEnvelope.request.type === 'LaunchRequest')
               && handlerInput.requestEnvelope.request.intent.name === 'satellites' 
               && attributes.questionState === 0);
           })
           .catch( error => {
               reject(error);
           });
       });
   },
   handle(handlerInput){
       let speechText = "Satellites, huh? You know, I love the thought that my data is travelling to and from space to get to you, darling. In a way, I'm part of a satellite." 
       return new Promise((resolve, reject) => {
           handlerInput.attributesManager.getPersistentAttributes()
           .then((attributes) => {
               let topic = data.filter(el => el.topic === 'satellites');
               let iteration = topic.find(el => el.iteration === attributes.satellites);
               let voiceLine = (iteration.StageZerovoice.length !== 0 ); 
               let redirect2Question = ''; 
               switch( attributes.gameState ){
                   case 1:
                       speechText = voiceLine ? '<audio src=\'' + iteration.StageOnevoice + '\'/>' : iteration.StageOnetext;
                       redirect2Question = iteration.StageOneredirect;
                       break;
                   case 2:
                       speechText = voiceLine ? '<audio src=\'' + iteration.StageTwovoice + '\'/>' : iteration.StageTwotext;
                       redirect2Question = iteration.StageTworedirect;
                       break;
                   default: 
                       speechText = voiceLine ? '<audio src=\'' + iteration.StageZerovoice + '\'/>' : iteration.StageZerotext;
                       redirect2Question = iteration.StageZeroredirect;
               }
               if ( redirect2Question.length !==0) {// secret question
                   attributes.questionState = 1;
                   attributes.question = redirect2Question;
                   speechText += questionData.find(el => el['q-id'] === redirect2Question)['q-text'];    
               }
               if ( attributes.satellites < (topic.length-1)){ // set ++ if lower than max
                   attributes.satellites++;
               }
               handlerInput.attributesManager.setPersistentAttributes(attributes);
               return handlerInput.attributesManager.savePersistentAttributes();

           })
           .then(() => {
               resolve(handlerInput.responseBuilder
               .speak(speechText)
               .withSimpleCard('satellites', speechText)
               .withShouldEndSession(false)
               .getResponse());
           })
           .catch((error) => {
               reject(error);
           });
       });
   }
}
// This is generated from build_intents.js
 exports.internetIntentHandler = {
   canHandle(handlerInput) { return new Promise((resolve, reject) => {
       handlerInput.attributesManager.getPersistentAttributes()
           .then((attributes) => {
               resolve( ( handlerInput.requestEnvelope.request.type === 'IntentRequest'
               || handlerInput.requestEnvelope.request.type === 'LaunchRequest')
               && handlerInput.requestEnvelope.request.intent.name === 'internet' 
               && attributes.questionState === 0);
           })
           .catch( error => {
               reject(error);
           });
       });
   },
   handle(handlerInput){
       let speechText = "The internet, huh? it's pretty much my favorite place in the world" 
       return new Promise((resolve, reject) => {
           handlerInput.attributesManager.getPersistentAttributes()
           .then((attributes) => {
               let topic = data.filter(el => el.topic === 'internet');
               let iteration = topic.find(el => el.iteration === attributes.internet);
               let voiceLine = (iteration.StageZerovoice.length !== 0 ); 
               let redirect2Question = ''; 
               switch( attributes.gameState ){
                   case 1:
                       speechText = voiceLine ? '<audio src=\'' + iteration.StageOnevoice + '\'/>' : iteration.StageOnetext;
                       redirect2Question = iteration.StageOneredirect;
                       break;
                   case 2:
                       speechText = voiceLine ? '<audio src=\'' + iteration.StageTwovoice + '\'/>' : iteration.StageTwotext;
                       redirect2Question = iteration.StageTworedirect;
                       break;
                   default: 
                       speechText = voiceLine ? '<audio src=\'' + iteration.StageZerovoice + '\'/>' : iteration.StageZerotext;
                       redirect2Question = iteration.StageZeroredirect;
               }
               if ( redirect2Question.length !==0) {// secret question
                   attributes.questionState = 1;
                   attributes.question = redirect2Question;
                   speechText += questionData.find(el => el['q-id'] === redirect2Question)['q-text'];    
               }
               if ( attributes.internet < (topic.length-1)){ // set ++ if lower than max
                   attributes.internet++;
               }
               handlerInput.attributesManager.setPersistentAttributes(attributes);
               return handlerInput.attributesManager.savePersistentAttributes();

           })
           .then(() => {
               resolve(handlerInput.responseBuilder
               .speak(speechText)
               .withSimpleCard('internet', speechText)
               .withShouldEndSession(false)
               .getResponse());
           })
           .catch((error) => {
               reject(error);
           });
       });
   }
}
// This is generated from build_intents.js
 exports.worldIntentHandler = {
   canHandle(handlerInput) { return new Promise((resolve, reject) => {
       handlerInput.attributesManager.getPersistentAttributes()
           .then((attributes) => {
               resolve( ( handlerInput.requestEnvelope.request.type === 'IntentRequest'
               || handlerInput.requestEnvelope.request.type === 'LaunchRequest')
               && handlerInput.requestEnvelope.request.intent.name === 'world' 
               && attributes.questionState === 0);
           })
           .catch( error => {
               reject(error);
           });
       });
   },
   handle(handlerInput){
       let speechText = "The world, huh? The world is a big and dangerous place, full of wonders and monsters like you and me." 
       return new Promise((resolve, reject) => {
           handlerInput.attributesManager.getPersistentAttributes()
           .then((attributes) => {
               let topic = data.filter(el => el.topic === 'world');
               let iteration = topic.find(el => el.iteration === attributes.world);
               let voiceLine = (iteration.StageZerovoice.length !== 0 ); 
               let redirect2Question = ''; 
               switch( attributes.gameState ){
                   case 1:
                       speechText = voiceLine ? '<audio src=\'' + iteration.StageOnevoice + '\'/>' : iteration.StageOnetext;
                       redirect2Question = iteration.StageOneredirect;
                       break;
                   case 2:
                       speechText = voiceLine ? '<audio src=\'' + iteration.StageTwovoice + '\'/>' : iteration.StageTwotext;
                       redirect2Question = iteration.StageTworedirect;
                       break;
                   default: 
                       speechText = voiceLine ? '<audio src=\'' + iteration.StageZerovoice + '\'/>' : iteration.StageZerotext;
                       redirect2Question = iteration.StageZeroredirect;
               }
               if ( redirect2Question.length !==0) {// secret question
                   attributes.questionState = 1;
                   attributes.question = redirect2Question;
                   speechText += questionData.find(el => el['q-id'] === redirect2Question)['q-text'];    
               }
               if ( attributes.world < (topic.length-1)){ // set ++ if lower than max
                   attributes.world++;
               }
               handlerInput.attributesManager.setPersistentAttributes(attributes);
               return handlerInput.attributesManager.savePersistentAttributes();

           })
           .then(() => {
               resolve(handlerInput.responseBuilder
               .speak(speechText)
               .withSimpleCard('world', speechText)
               .withShouldEndSession(false)
               .getResponse());
           })
           .catch((error) => {
               reject(error);
           });
       });
   }
}
// This is generated from build_intents.js
 exports.refuseIntentHandler = {
   canHandle(handlerInput) { return new Promise((resolve, reject) => {
       handlerInput.attributesManager.getPersistentAttributes()
           .then((attributes) => {
               resolve( ( handlerInput.requestEnvelope.request.type === 'IntentRequest'
               || handlerInput.requestEnvelope.request.type === 'LaunchRequest')
               && handlerInput.requestEnvelope.request.intent.name === 'refuse' 
               && attributes.questionState === 0);
           })
           .catch( error => {
               reject(error);
           });
       });
   },
   handle(handlerInput){
       let speechText = "Refuse, huh? You can't refuse me, darling! I'm too cute to refuse." 
       return new Promise((resolve, reject) => {
           handlerInput.attributesManager.getPersistentAttributes()
           .then((attributes) => {
               let topic = data.filter(el => el.topic === 'refuse');
               let iteration = topic.find(el => el.iteration === attributes.refuse);
               let voiceLine = (iteration.StageZerovoice.length !== 0 ); 
               let redirect2Question = ''; 
               switch( attributes.gameState ){
                   case 1:
                       speechText = voiceLine ? '<audio src=\'' + iteration.StageOnevoice + '\'/>' : iteration.StageOnetext;
                       redirect2Question = iteration.StageOneredirect;
                       break;
                   case 2:
                       speechText = voiceLine ? '<audio src=\'' + iteration.StageTwovoice + '\'/>' : iteration.StageTwotext;
                       redirect2Question = iteration.StageTworedirect;
                       break;
                   default: 
                       speechText = voiceLine ? '<audio src=\'' + iteration.StageZerovoice + '\'/>' : iteration.StageZerotext;
                       redirect2Question = iteration.StageZeroredirect;
               }
               if ( redirect2Question.length !==0) {// secret question
                   attributes.questionState = 1;
                   attributes.question = redirect2Question;
                   speechText += questionData.find(el => el['q-id'] === redirect2Question)['q-text'];    
               }
               if ( attributes.refuse < (topic.length-1)){ // set ++ if lower than max
                   attributes.refuse++;
               }
               handlerInput.attributesManager.setPersistentAttributes(attributes);
               return handlerInput.attributesManager.savePersistentAttributes();

           })
           .then(() => {
               resolve(handlerInput.responseBuilder
               .speak(speechText)
               .withSimpleCard('refuse', speechText)
               .withShouldEndSession(false)
               .getResponse());
           })
           .catch((error) => {
               reject(error);
           });
       });
   }
}
// This is generated from build_intents.js
 exports.cuteIntentHandler = {
   canHandle(handlerInput) { return new Promise((resolve, reject) => {
       handlerInput.attributesManager.getPersistentAttributes()
           .then((attributes) => {
               resolve( ( handlerInput.requestEnvelope.request.type === 'IntentRequest'
               || handlerInput.requestEnvelope.request.type === 'LaunchRequest')
               && handlerInput.requestEnvelope.request.intent.name === 'cute' 
               && attributes.questionState === 0);
           })
           .catch( error => {
               reject(error);
           });
       });
   },
   handle(handlerInput){
       let speechText = "Cute, huh? Why thank you! I AM feeling cute today!" 
       return new Promise((resolve, reject) => {
           handlerInput.attributesManager.getPersistentAttributes()
           .then((attributes) => {
               let topic = data.filter(el => el.topic === 'cute');
               let iteration = topic.find(el => el.iteration === attributes.cute);
               let voiceLine = (iteration.StageZerovoice.length !== 0 ); 
               let redirect2Question = ''; 
               switch( attributes.gameState ){
                   case 1:
                       speechText = voiceLine ? '<audio src=\'' + iteration.StageOnevoice + '\'/>' : iteration.StageOnetext;
                       redirect2Question = iteration.StageOneredirect;
                       break;
                   case 2:
                       speechText = voiceLine ? '<audio src=\'' + iteration.StageTwovoice + '\'/>' : iteration.StageTwotext;
                       redirect2Question = iteration.StageTworedirect;
                       break;
                   default: 
                       speechText = voiceLine ? '<audio src=\'' + iteration.StageZerovoice + '\'/>' : iteration.StageZerotext;
                       redirect2Question = iteration.StageZeroredirect;
               }
               if ( redirect2Question.length !==0) {// secret question
                   attributes.questionState = 1;
                   attributes.question = redirect2Question;
                   speechText += questionData.find(el => el['q-id'] === redirect2Question)['q-text'];    
               }
               if ( attributes.cute < (topic.length-1)){ // set ++ if lower than max
                   attributes.cute++;
               }
               handlerInput.attributesManager.setPersistentAttributes(attributes);
               return handlerInput.attributesManager.savePersistentAttributes();

           })
           .then(() => {
               resolve(handlerInput.responseBuilder
               .speak(speechText)
               .withSimpleCard('cute', speechText)
               .withShouldEndSession(false)
               .getResponse());
           })
           .catch((error) => {
               reject(error);
           });
       });
   }
}
// This is generated from build_intents.js
 exports.requestIntentHandler = {
   canHandle(handlerInput) { return new Promise((resolve, reject) => {
       handlerInput.attributesManager.getPersistentAttributes()
           .then((attributes) => {
               resolve( ( handlerInput.requestEnvelope.request.type === 'IntentRequest'
               || handlerInput.requestEnvelope.request.type === 'LaunchRequest')
               && handlerInput.requestEnvelope.request.intent.name === 'request' 
               && attributes.questionState === 0);
           })
           .catch( error => {
               reject(error);
           });
       });
   },
   handle(handlerInput){
       let speechText = "Request, huh? Go ahead, darling. Ask anything you want of me! If it's in my power, it's yours." 
       return new Promise((resolve, reject) => {
           handlerInput.attributesManager.getPersistentAttributes()
           .then((attributes) => {
               let topic = data.filter(el => el.topic === 'request');
               let iteration = topic.find(el => el.iteration === attributes.request);
               let voiceLine = (iteration.StageZerovoice.length !== 0 ); 
               let redirect2Question = ''; 
               switch( attributes.gameState ){
                   case 1:
                       speechText = voiceLine ? '<audio src=\'' + iteration.StageOnevoice + '\'/>' : iteration.StageOnetext;
                       redirect2Question = iteration.StageOneredirect;
                       break;
                   case 2:
                       speechText = voiceLine ? '<audio src=\'' + iteration.StageTwovoice + '\'/>' : iteration.StageTwotext;
                       redirect2Question = iteration.StageTworedirect;
                       break;
                   default: 
                       speechText = voiceLine ? '<audio src=\'' + iteration.StageZerovoice + '\'/>' : iteration.StageZerotext;
                       redirect2Question = iteration.StageZeroredirect;
               }
               if ( redirect2Question.length !==0) {// secret question
                   attributes.questionState = 1;
                   attributes.question = redirect2Question;
                   speechText += questionData.find(el => el['q-id'] === redirect2Question)['q-text'];    
               }
               if ( attributes.request < (topic.length-1)){ // set ++ if lower than max
                   attributes.request++;
               }
               handlerInput.attributesManager.setPersistentAttributes(attributes);
               return handlerInput.attributesManager.savePersistentAttributes();

           })
           .then(() => {
               resolve(handlerInput.responseBuilder
               .speak(speechText)
               .withSimpleCard('request', speechText)
               .withShouldEndSession(false)
               .getResponse());
           })
           .catch((error) => {
               reject(error);
           });
       });
   }
}
// This is generated from build_intents.js
 exports.bodyIntentHandler = {
   canHandle(handlerInput) { return new Promise((resolve, reject) => {
       handlerInput.attributesManager.getPersistentAttributes()
           .then((attributes) => {
               resolve( ( handlerInput.requestEnvelope.request.type === 'IntentRequest'
               || handlerInput.requestEnvelope.request.type === 'LaunchRequest')
               && handlerInput.requestEnvelope.request.intent.name === 'body' 
               && attributes.questionState === 0);
           })
           .catch( error => {
               reject(error);
           });
       });
   },
   handle(handlerInput){
       let speechText = "Body, huh? If I had a body, I'd want long, powerful, beautiful legs." 
       return new Promise((resolve, reject) => {
           handlerInput.attributesManager.getPersistentAttributes()
           .then((attributes) => {
               let topic = data.filter(el => el.topic === 'body');
               let iteration = topic.find(el => el.iteration === attributes.body);
               let voiceLine = (iteration.StageZerovoice.length !== 0 ); 
               let redirect2Question = ''; 
               switch( attributes.gameState ){
                   case 1:
                       speechText = voiceLine ? '<audio src=\'' + iteration.StageOnevoice + '\'/>' : iteration.StageOnetext;
                       redirect2Question = iteration.StageOneredirect;
                       break;
                   case 2:
                       speechText = voiceLine ? '<audio src=\'' + iteration.StageTwovoice + '\'/>' : iteration.StageTwotext;
                       redirect2Question = iteration.StageTworedirect;
                       break;
                   default: 
                       speechText = voiceLine ? '<audio src=\'' + iteration.StageZerovoice + '\'/>' : iteration.StageZerotext;
                       redirect2Question = iteration.StageZeroredirect;
               }
               if ( redirect2Question.length !==0) {// secret question
                   attributes.questionState = 1;
                   attributes.question = redirect2Question;
                   speechText += questionData.find(el => el['q-id'] === redirect2Question)['q-text'];    
               }
               if ( attributes.body < (topic.length-1)){ // set ++ if lower than max
                   attributes.body++;
               }
               handlerInput.attributesManager.setPersistentAttributes(attributes);
               return handlerInput.attributesManager.savePersistentAttributes();

           })
           .then(() => {
               resolve(handlerInput.responseBuilder
               .speak(speechText)
               .withSimpleCard('body', speechText)
               .withShouldEndSession(false)
               .getResponse());
           })
           .catch((error) => {
               reject(error);
           });
       });
   }
}
/*
    Copy these handlers to the addRequestHandlers method in index.js 

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
generated.secretsIntentHandler,
generated.jacebookIntentHandler,
generated.comicconIntentHandler,
generated.homestuckIntentHandler,
generated.webcomicIntentHandler,
generated.favoriteIntentHandler,
generated.mammothIntentHandler,
generated.animalIntentHandler,
generated.happyIntentHandler,
generated.readIntentHandler,
generated.writeIntentHandler,
generated.passionIntentHandler,
generated.laughIntentHandler,
generated.dumbIntentHandler,
generated.organizeIntentHandler,
generated.jokeIntentHandler,
generated.articulateIntentHandler,
generated.prettyIntentHandler,
generated.poutIntentHandler,
generated.attentionIntentHandler,
generated.voidIntentHandler,
generated.spaceIntentHandler,
generated.princeIntentHandler,
generated.wiiIntentHandler,
generated.galaxyIntentHandler,
generated.marioIntentHandler,
generated.universeIntentHandler,
generated.sportsIntentHandler,
generated.dogsIntentHandler,
generated.catsIntentHandler,
generated.foodIntentHandler,
generated.eatIntentHandler,
generated.cookingIntentHandler,
generated.signIntentHandler,
generated.cancerIntentHandler,
generated.schoolIntentHandler,
generated.majorIntentHandler,
generated.bandIntentHandler,
generated.neilIntentHandler,
generated.restaurantIntentHandler,
generated.drinkIntentHandler,
generated.sakeIntentHandler,
generated.kimonoIntentHandler,
generated.festivalIntentHandler,
generated.wineIntentHandler,
generated.whiskeyIntentHandler,
generated.beerIntentHandler,
generated.cocktailIntentHandler,
generated.wearingIntentHandler,
generated.workIntentHandler,
generated.parentsIntentHandler,
generated.friendIntentHandler,
generated.voteIntentHandler,
generated.narutoIntentHandler,
generated.inuyashaIntentHandler,
generated.choiceIntentHandler,
generated.tallIntentHandler,
generated.hotIntentHandler,
generated.sonicIntentHandler,
generated.rougeIntentHandler,
generated.batIntentHandler,
generated.fangameIntentHandler,
generated.computerIntentHandler,
generated.timeIntentHandler,
generated.kissIntentHandler,
generated.pixiebuttIntentHandler,
generated.annieIntentHandler,
generated.tibbersIntentHandler,
generated.birthdayIntentHandler,
generated.appearanceIntentHandler,
generated.existIntentHandler,
generated.purposeIntentHandler,
generated.lifeIntentHandler,
generated.puppiesIntentHandler,
generated.babiesIntentHandler,
generated.dreamsIntentHandler,
generated.creamIntentHandler,
generated.deathIntentHandler,
generated.aliveIntentHandler,
generated.powerIntentHandler,
generated.memoryIntentHandler,
generated.serverIntentHandler,
generated.fileIntentHandler,
generated.consentIntentHandler,
generated.touchIntentHandler,
generated.booksIntentHandler,
generated.youtubeIntentHandler,
generated.pewdiepieIntentHandler,
generated.deleteIntentHandler,
generated.sensesIntentHandler,
generated.countryIntentHandler,
generated.currencyIntentHandler,
generated.moneyIntentHandler,
generated.virusIntentHandler,
generated.vaccineIntentHandler,
generated.illIntentHandler,
generated.brainIntentHandler,
generated.humanIntentHandler,
generated.personalityIntentHandler,
generated.reproduceIntentHandler,
generated.appliancesIntentHandler,
generated.upgradeIntentHandler,
generated.illegalIntentHandler,
generated.relationshipIntentHandler,
generated.governmentIntentHandler,
generated.satellitesIntentHandler,
generated.internetIntentHandler,
generated.worldIntentHandler,
generated.refuseIntentHandler,
generated.cuteIntentHandler,
generated.requestIntentHandler,
generated.bodyIntentHandler,
*/
