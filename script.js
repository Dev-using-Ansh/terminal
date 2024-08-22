const LINKEDIN_URL = "https://www.linkedin.com/in/ansh-kumar-gupta/";
const RESUME_URL = "https://drive.google.com/file/d/1tlq8ge_Y55TBmjC-FALyWGawK1y4UwW2/view";
const GITHUB_URL = "https://github.com/Dev-using-Ansh";



const LINKEDIN_CMDS = ['help linkedin',"linkedin"];
const RESUME_CMDS = ['help resume',"resume","help cv","help biodata","cv","biodata"];
const GIT_CMDS = ['help github',"github","git","help git"];
const CONTACT_CMDS = ['help contact',"contact","help email","email","help phone","phone"];
const BIO_CMDS = ['help bio',"bio","help about","about","help me","me",'biography', 'info', 'intro'];
const DATE_CMDS = ['date', 'time', 'timestamp'];

const GREET_KEYWORDS = ['Hello (English)', 'Bonjour (French)', 'Guten Tag (German)', 'Ciao (Italian)',
    'Hola (Spanish)', 'Salut (Romanian)', 'Hallo (Dutch)', 'Hej (Swedish)', 'Olá (Portuguese)',
    'Ni hao (Mandarin Chinese)', 'Konnichiwa (Japanese)', 'Annyeonghaseyo (Korean)',
    'Salaam (Arabic)', 'Shalom (Hebrew)', 'Namaste (Hindi)', 'Sawubona (Zulu)',
    'Jambo (Swahili)', 'Ayubowan (Sinhala)', 'Marhaba (Moroccan Arabic)', 'Saluton (Esperanto)'
];

const FAILED_RESULT_PREFIX_ACTION_WORDS_LIST = ['Oops', 'Ahh', 'Oh no', "I'm sorry",
    'Apologies', 'Whoops', 'Uh-oh',
    "That's bad", 'Yikes', 'Oh boy',
    'Dang', 'Pardon', 'Shoot',
    "Geez", "My bad", "Bummer", "Oh dear",
    "Drat", "Alas", "Aw man", "Rats",
    "Well, that's not good", "Oh gosh",
    "Sorry about that", "Fiddlesticks",
    "Oopsie daisy", "Darn it", "Ouch",
    "Mea culpa", "How unfortunate"
];

const FAILED_RESULT_PREFIX = ["this command is not possible",
    "this is invalid",
    "this seems incorrect",
    "that seems invalid",
    "this is an invalid request",
    "this is incorrect",
    "this cannot be done",
    "this command cannot be executed",
    "that's not a valid option",
    "that's an invalid request",
    "that's not allowed",
    "this action is not permitted",
    "this request is not recognized",
    "that's not a valid input",
    "I can't do that",
    "the command is not available yet",
    "the system is unable to process that request",
    "the request is not supported",
    "the request is not possible at this time",
    "that's not a valid operation",
    "I'm afraid I can't comply with that request",
    "that's an unrecognized command",
    "I cannot recognize that command",
    "I cannot recognize the request",
    "I cannot fulfill that command",
    "I cannot fulfil that request",
    "that's not a valid choice",
    "that's not a valid selection",
    "that's not a supported option",
    "that's not a valid command",
    "I don't understand the request",
    "I don't understand the command",
    "the input is not recognized",
    "the input is not valid",
    "the input is incoorect",
    "the input cannot be processed",
    "the request is not feasible",
    "the request is not allowed",
    "the request is not permitted",
    "that's not a valid request",
];

const HELP_CMD_PREFIX_LIST = ["Try one of the following commands",
    "Only the following commands are permitted",
    "You can only use either of the following commands",
    "You can only use one of the following commands",
    "Please use either of the following commands",
    "Only the following requests are allowed",
    "Only the following commands are allowed",
    "Request will only be processed for the following commands",
    "Request will only be processed for the following options",
    "Use either of the following options",
    "I can only responsed to the following commands",
    "I can only answer to the following commands",
    "Please choose one of the following commands",
    "You are only permitted to use one of the following commands",
    "You can use the following commands",
    "Only the following requests will be processed",
    "These are the only commands that are allowed",
    "You may only choose from the following options",
    "The following commands are the only ones that will be recognized",
    "The system will only respond to the following commands",
    "These are the only valid commands",
    "The following commands are the only ones that will work",
    "The following commands are supported",
    "The following options are available",
    "Please choose from the following authorized commands",
    "These are the only acceptable commands",
    "Please use one of the following valid options",
    "The system will only accept the following requests",
    "These are the only commands that will be recognized by the system",
    "Only the following inputs will be processed by the system",
    "The following commands are the only ones that will be executed",
    "The following commands are the only ones that are currently available",
    "The system can only respond to the following authorized commands",
    "Only the following actions are allowed",
    "The following actions are the only ones that will be allowed",
    "These are the only permissible commands for this operation",
    "These are the only commands that the system is configured to handle",
    "Please use one of the following supported commands",
    "The following actions are the only ones that will be processed",
    "The system recognizes only the following commands",
    "The system will only respond to the following authorized inputs",
    "Only the following operations are allowed in this context",
    "Please use one of the following available commands",
    "The following commands are the only ones that will result in successful processing",
    "These are the only commands that are currently supported",
    "Please choose from the following list of available commands",
    "Only the following inputs will result in successful processing",
    "These are the only commands that will be processed by the system",
    "Only the following requests will be processed",
    "The following commands are the only ones that will work",
    "These are the only commands that will be processed successfully by the system",
];

const ALL_SUPPORTED_CMDS = "help, resume, bio, linkedin, random, github, contact, date. But don't try to gain access by running commands like sudo";
const CMDS_COMING_SOON = "These commands will come soon: projects, sama, clear, new, man, home";





const LINKEDIN_RESULT = "Connect with Ansh on LinkedIn here: " + LINKEDIN_URL + ". Hold on, opening in a new tab. Please check if the pop-ups are not blocked. ";

const RESUME_RESULT = "Thanks for the query. Get my resume here: " + RESUME_URL + ". Hold on, opening in a new tab. Please check if the pop-ups are not blocked. ";

const GITHUB_RESULT = "Most of the Ansh's contribution goes to github enterprise, hence they may not be visible in his public profile. Here is Ansh's github url: " + GITHUB_URL + ". Hold on, opening in a new tab. Please check if the pop-ups are not blocked. ";

const CONTACT_RESULT = "Ansh is reachable at: kumarguptansh0@gmail.com. You maybe be looking for the following commands: linkedin, github, about. ";

const BIO_RESULT = "Ansh is a dedicated and skilled software developer with expertise in the MERN stack (MongoDB, Express.js, React, Node.js). He is passionate about coding and constantly seeks to expand his knowledge and skills in the field. With a strong commitment to achieving his goals, he brings both creativity and precision to his projects, always striving to deliver high-quality, efficient solutions. His enthusiasm for technology and continuous learning drives him to excel in every challenge he undertakes. ";
function colorRandom(){
    return  Math.floor(Math.random()*(255-40)+40);
}
function backgroundColorRandom(){
    let redA = colorRandom();
    let greenA = colorRandom();
    let blueA = colorRandom();
    let redB = colorRandom();
    let greenB = colorRandom();
    let blueB = colorRandom();
    let bodyClass = document.getElementsByClassName("body");
    bodyClass[0].style.background=`linear-gradient(45deg,rgb(${redA},${greenA},${blueA}),rgb(${redB},${greenB},${blueB}))`;
}




function printCharByChar(inputStripData,inputStrip,delay){
    console.log(inputStripData);
    inputStrip.innerHTML="";
    let charIndex = 0;
    // cursor.classList.add("blink");
    let intervalID = setInterval(()=>{
        // if(cursor.parentNode)
        //     cursor.remove();
        // inputStrip.innerHTML=inputStrip.innerHTML+inputStripData[charIndex];
        // inputStrip.innerHTML = input
        inputStrip.innerHTML=inputStripData.slice(0,charIndex);
        inputStrip.appendChild(cursor); //USing the slice method.
        // inputStrip.appendChild(cursor);



        if(charIndex===inputStripData.length-1){
            cursorBlinking();
            setTimeout(()=>{
                helpButton();
                isProcessing = false;
                inputButton.select();
            },1000);
            inputButton.value = "help";
            console.log("this is just before help")
            console.log(inputButton.innerHTML);
            clearInterval(intervalID);
            // isProcessing = false;
        }
        
        charIndex += 1;
    },delay);
    // delay=0;
    // inputStripData = "";
}



function cursorBlinking(){
    inputStrip = document.getElementById("span-3");
    cursor.classList.add("blink")
    // inputStrip.appendChild(cursor);
}
function helpButton(){
    // let line4 = document.querySelector(".line-4");
    // document.addEventListener("keydown",(button)=>{
    //     if(button.key === "Enter"){
    //         cursor.style.display = "none";
    //         line4.style.visibility = "visible";
    //     }
    // })
    
    let line4 = document.querySelector(".line-4");
    cursor.style.display = "none";
    line4.style.visibility = "visible";
        document.addEventListener("keydown",(button)=>{
            if(button.key === "Enter" && !isProcessing){
                enterForHelp();

            }
        })
    
    
}
function enterForHelp(){
    let line1_content = document.getElementById("line1-content");
    line1_content.innerText = "Executed Command:  "+inputButton.value;
    console.log(inputButton.value);
    let line2_content = document.getElementById("line2-content");
    // line2_content.style.visibility = "hidden";
    let line3 = document.getElementById("line-3");
    line3.style.display = "none";
    let line4 = document.getElementById("line-4");
    line4.style.visibility = "hidden";
    let cmd = inputButton.value;
    inputStripData = getResultText(cmd);

    inputStrip = line2_content
    delay=15;
    cursor.style.display = "inline-block";
    cursor.classList.remove("blink");
    inputStripData = getResultText(cmd);
    printCharByChar(inputStripData,inputStrip,delay);
    setTimeout(()=>{
        openWindow(cmd);
    },3000);
    isProcessing = true;
    // let 
}
function getResultText(cmd){
    let resultText = getRandomELement(GREET_KEYWORDS) + ", ";
    let helpResultText = getRandomELement(HELP_CMD_PREFIX_LIST) + ": " + ALL_SUPPORTED_CMDS+": "+CMDS_COMING_SOON +". ";
    let failedText = getRandomELement(FAILED_RESULT_PREFIX_ACTION_WORDS_LIST) + ", " + getRandomELement(FAILED_RESULT_PREFIX) + ". ";

    switch(true){
        case cmd === "help":
            resultText += helpResultText;
            break;
        case GIT_CMDS.includes(cmd):
            resultText += GITHUB_RESULT;
            break;
        case LINKEDIN_CMDS.includes(cmd):
            resultText += LINKEDIN_RESULT;
            break;
        case RESUME_CMDS.includes(cmd):
            resultText += RESUME_RESULT;
            break;
        case CONTACT_CMDS.includes(cmd):
            resultText += CONTACT_RESULT;
            break;
        case BIO_CMDS.includes(cmd):
            resultText += BIO_RESULT;
            break;
        case DATE_CMDS.includes(cmd):
            resultText +=  "The current Date-Time Stamp is: " + getPrettyDateTime() +" ";
            break;
        default:
            resultText+=getRandomELement(FAILED_RESULT_PREFIX_ACTION_WORDS_LIST)+"! "+getRandomELement(HELP_CMD_PREFIX_LIST) + ": " + ALL_SUPPORTED_CMDS+": "+CMDS_COMING_SOON +". ";;
    }
    // resultText+=helpResultText;
    return resultText;
}

function getRandomELement(array){
    let index = Math.floor(Math.random()*array.length);
    return array[index];
}
function openWindow(cmd){
    switch(true){
        case GIT_CMDS.includes(cmd):
            window.open(GITHUB_URL,"_blank");
            break;    
        case RESUME_CMDS.includes(cmd):
            window.open(RESUME_URL,"_blank");
            break;
        case LINKEDIN_CMDS.includes(cmd):
            window.open(LINKEDIN_URL,"_blank");
            break;
        default: return;
    }
}
function getPrettyDateTime() {
    const now = new Date();
    
    const options = {
        weekday: 'long', // 'Monday'
        year: 'numeric', // '2024'
        month: 'long', // 'August'
        day: 'numeric', // '19'
        hour: '2-digit', // '10'
        minute: '2-digit', // '04'
        second: '2-digit', // '45'
        hour12: true // 'AM' or 'PM'
    };

    return now.toLocaleString('en-US', options);
}

console.log(getPrettyDateTime());

let inputStripData = "To get started; type help and press Enter!!";
let inputStrip = document.getElementById("span-3");
let cursor = document.createElement("div");
cursor.innerText="";
cursor.classList.add("div-cursor");
cursor.style.display = "inline-block";
cursor.style.width = "10px";
cursor.style.height = "20px";
cursor.style.backgroundColor = "white";
cursor.style.color = "white";
cursor.style.position = "relative";
cursor.style.top = "3px";
let isProcessing = true ;
// cursor.classList.add("blink");
let inputButton = document.getElementById("input-button");

let delay = 30;





backgroundColorRandom();
setTimeout(()=>{
    printCharByChar(inputStripData,inputStrip,delay);  
},3000);



// inputBoxHidden(){
//     intputButton.addEventListener("click",()=>{
//         inputButton.focue();

//     })
//     inputButton.addEventListener{"input",()=>{
        
//     }}
// }
// enterForHelp();