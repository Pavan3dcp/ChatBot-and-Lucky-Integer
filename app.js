const chatBotUserInput = document.getElementById('user_input');
const chatBotUserButton =document.getElementById("user_button");
const chatBotMsg = document.getElementById("chat_bot_msg");
const integerUserInput = document.getElementById("integer_user_input");
const integerUserButton =document.getElementById("integer_user_button");
const luckyIntegerMsg =document.getElementById("lucky_integer_msg");


// 


  const messages = {

    "hi": "hello, how can I help you?",

    "hey" : "hello, how can I help you?",

    "how are you?" : "fine",

    "who are you?" :  "I am a bot", 
    
    "tell me about xelpmoc design and tech": `Xelpmoc is a technology, analytics and design company, focused on solving problems for n5hmi -The next five hundred million Indians. We believe in Data and have a bias for action.`,
    
    "tell me about xelpmoc data sciences and technology services" : `Xelpmoc Data sciences and technology services practice works with private & public enterprises, government bodies& departments, ministries & social welfare organizations to help them leverage to power of Technology and Data Science.This includes deploying Artificial Intelligence, Machine Learning and other emerging tools .`,
    
  }

// chatBot = (msg) => {
//   msg = msg.replace(/ +/g, ' ')
//   msg = msg.trim()
//   msg = msg.toLowerCase();

//   const ifNot = "Sorry I couldn't understand you!";

//   if(messages.hasOwnProperty(msg)){
//     return messages[msg];
//   }else{
//     return ifNot;
//   }
// }

chatBot = () => {
  let msg = chatBotUserInput.value;
  msg = msg.replace(/ +/g, ' ')
  msg = msg.trim()
  msg = msg.toLowerCase();

  const ifNot = "Sorry I couldn't understand you!";

  if(messages.hasOwnProperty(msg)){
    chatBotUserInput.value = ''
    return chatBotMsg.innerHTML = messages[msg];
  }else{
    return chatBotMsg.innerHTML = ifNot;
  }
}

// console.log(chatBot("tell me about xelpmoc data sciences and technology services"))

// luckyNumber = (arr)=>{
//     const cont = {}
//     for(const key of arr){
//       if(cont[key]){
//         cont[key] += 1  
//       }else{
//         cont[key] = 1
//       }
//     }
//     let luckyNum = -1
//     for(const key in cont){
//       if(cont[key] === Number(key)){
//           if(cont[key] > luckyNum){
//             luckyNum = cont[key]
//           }
//       }
//     }
  
//     return luckyNum
//    }
  
//    num = [1,2,2,,3,4,5,6,7,8,9,5,5,5,5,21,3,3]
  
//    console.log(luckyNumber(num))

luckyNumber = () => {

    userArr = integerUserInput.value;
    arr = []
    for(const ele of userArr){
      if(ele != 0){
        arr.push(Number(ele))
      }
    }
    console.log(arr)
      const cont = {}
      for(const key of arr){
        if(cont[key]){
          cont[key] += 1  
        }else{
          cont[key] = 1
        }
      }
      let luckyNum = -1
      for(const key in cont){
        if(cont[key] === Number(key)){
            if(cont[key] > luckyNum){
              luckyNum = cont[key]
            }
        }
      }
      
      luckyIntegerMsg.innerHTML = `Lucky Integer is ${luckyNum}`
      return luckyNum
     }


integerUserButton.addEventListener('click',luckyNumber);

chatBotUserButton.addEventListener('click',chatBot);