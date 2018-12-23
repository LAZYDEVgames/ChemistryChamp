///variables
//////algo variables//////

var DiffVal = 0;
var NumVal = 5;
var TimeVal = 1;
var time = 60;
var Score = 0;
var index = 0;
var QuestionObject;
var QuestionNumber = 1;
var Quiz = [];
///////DOM variables///////

var Subject;
var Hero;
var Champ;
var Entrbtn;
var Prefs;
var Startbtn;
var DiffList;
var TimeList;
var NumList;
var QuesPage;
var Timer;
var Serial;
var clock;
var cover;


////DOM variables for question///
var quesDiv;
var title;
var Option1;
var Option2;
var Option3;
var Option4;
var cnfrmbtn;
var nextbtn;


//selection variables
var OptionArray;
var response;


//Result page DOM varibles
var ResultPage;
var resQues;
var resTime;
var resScore;
var HighScore;
var BestScore = 0;
var averageTime = 0;

window.onload = () => {
    Subject = document.getElementById('Subject');
    Hero = document.getElementById('Hero');
    Champ = document.getElementById('ChampPage');
    Entrbtn = document.getElementById('Entrbtn');
    Prefs = document.getElementById('PrefPage');
    Startbtn = document.getElementById('startbtn');
    DiffList = document.getElementById('DiffList');
    NumList = document.getElementById('NumList');
    TimeList = document.getElementById('TimeList');
    QuesPage = document.getElementById('QuesPage');
    ResultPage = document.getElementById('ResultPage');
    Timer = document.getElementById('Timer');
    Serial = document.getElementById('Serial');
    quesDiv = document.getElementById('question');
    title = document.getElementById('Title');
    Option1 = document.getElementById('OPTION1');
    Option2 = document.getElementById('OPTION2');
    Option3 = document.getElementById('OPTION3');
    Option4 = document.getElementById('OPTION4');
    cnfrmbtn = document.getElementById('cnfrmbtn');
    nxtbtn = document.getElementById('nxtbtn');
    cover = document.getElementById('cover');
    resQues = document.getElementById('resQues');
    resTime = document.getElementById('resTime');
    resScore = document.getElementById('resScore');
    HighScore = document.getElementById('highScore');

    OptionArray = [Option1, Option2, Option3, Option4];
    setTimeout(ShowEnter, 3000);
};

function ShowEnter() {
    Entrbtn.style.display = 'block';
}

function EndChamp() {
    Champ.style.display = 'none';
    Prefs.style.display = 'block';
}

function StartTest() {

    Score = 0;
    QuestionNumber = 1;
    GetValues(); 

    Prefs.style.display = 'none';

    cover.style.display = 'block';

    CreateQuiz(DiffVal,NumVal);

    QuesPage.style.display = 'block';

    helper();
}
function helper(){
    clearInterval(clock);
    time = TimeVal * 60;
    Timer.innerHTML = (time) + 'sec';
    Clock(time);
    FillQuestion();
}


function GetValues() {
    DiffVal = DiffList.value;
    NumVal = NumList.value;
    TimeVal = TimeList.value;  
}

//////timer//////
function Clock(time){
    time = time - 1;
    Timer.innerHTML = (time - 1) + 'sec';
    clock = setInterval(() => {
        Timer.innerHTML = (time)+'sec';
        time = time-1;
        averageTime = averageTime + 1;
        if(time < 0){
            clearInterval(clock);
        }
    }, 1000);

}

function Cheak(button) {
    colorButtons(button);
    Confirmation(button);
}


function DisableOptions(){
    OptionArray.forEach(element => {
        element.disabled = true;
    });
    clearInterval(clock);
} 

function Confirmation(button){
    cnfrmbtn.style.display = 'block';
    cnfrmbtn.value = button.value;   
}


function colorButtons(button){
    OptionArray.forEach(element => {
        element.style.backgroundColor = 'white';
        element.style.borderColor = 'black';
    });

    button.style.backgroundColor = '#ff02';
    button.style.borderColor = '#ff0';

    SetSelected(button);
}
function SetSelected(button) {
    OptionArray.forEach(element => {
        element.selected = false;
    });
    button.selected = true;
}

function CheakScore() {

    cnfrmbtn.style.display = 'none';
    DisableOptions();

    if (cnfrmbtn.value == 1) {
        Score = Score + 10;
        OptionArray.forEach(element => {

            if(element.selected == true){
                element.style.borderColor = '#0f0';
                element.style.backgroundColor = '#0f02';
            }
        });
    }
    else{
        OptionArray.forEach(element => {
            if (element.selected == true) {
                element.style.borderColor = '#f00';
                element.style.backgroundColor = '#f002';
            }
            if(element.value == 1){
                element.style.borderColor = '#0f0';
                element.style.backgroundColor = '#0f02';
            }
        });

    }

    AppearNext();
}

function AppearNext(){
    nxtbtn.style.display = 'block';
}

var QuestionArray = [ 

    {
        'Difficulty': 0,
        'Title': "The Structure of a sp<sup>3</sup> molecule is...",
        'Options': {
            'a': { 'text': "Tetrahedral", 'value': 1 },
            'b': { 'text': "Triangular Planar", 'value': 0 },
            'c': { 'text': "Octahedral", 'value': 0 },
            'd': { 'text': "Linear", 'value': 0 },
        }
    },
    {
        'Difficulty': 1,
        'Title': "The Structure of a sp<sup>3</sup> molecule is...",
        'Options': {
            'a': { 'text': "Tetrahedral", 'value': 1 },
            'b': { 'text': "Triangular Planar", 'value': 0 },
            'c': { 'text': "Octahedral", 'value': 0 },
            'd': { 'text': "Linear", 'value': 0 },
        }
    },
    {
        'Difficulty': 2,
        'Title': "The Structure of a sp<sup>3</sup> molecule is...",
        'Options': {
            'a': { 'text': "Tetrahedral", 'value': 1 },
            'b': { 'text': "Triangular Planar", 'value': 0 },
            'c': { 'text': "Octahedral", 'value': 0 },
            'd': { 'text': "Linear", 'value': 0 },
        }
    },
    {
        'Difficulty': 0,
        'Title': "The Structure of a sp<sup>3</sup> molecule is...",
        'Options': {
            'a': { 'text': "Tetrahedral", 'value': 1 },
            'b': { 'text': "Triangular Planar", 'value': 0 },
            'c': { 'text': "Octahedral", 'value': 0 },
            'd': { 'text': "Linear", 'value': 0 },
        }
    },
    {
        'Difficulty': 0,
        'Title': "The Structure of a sp<sup>3</sup> molecule is...",
        'Options': {
            'a': { 'text': "Tetrahedral", 'value': 1 },
            'b': { 'text': "Triangular Planar", 'value': 0 },
            'c': { 'text': "Octahedral", 'value': 0 },
            'd': { 'text': "Linear", 'value': 0 },
        }
    },
    {
        'Difficulty': 0,
        'Title': "The Structure of a sp<sup>3</sup> molecule is...",
        'Options': {
            'a': { 'text': "Tetrahedral", 'value': 1 },
            'b': { 'text': "Triangular Planar", 'value': 0 },
            'c': { 'text': "Octahedral", 'value': 0 },
            'd': { 'text': "Linear", 'value': 0 },
        }
    },
    {
        'Difficulty': 0,
        'Title': "The Structure of a sp<sup>3</sup> molecule is...",
        'Options': {
            'a': { 'text': "Tetrahedral", 'value': 1 },
            'b': { 'text': "Triangular Planar", 'value': 0 },
            'c': { 'text': "Octahedral", 'value': 0 },
            'd': { 'text': "Linear", 'value': 0 },
        }
    },
    {
        'Difficulty': 0,
        'Title': "The Structure of a sp<sup>3</sup> molecule is...",
        'Options': {
            'a': { 'text': "Tetrahedral", 'value': 1 },
            'b': { 'text': "Triangular Planar", 'value': 0 },
            'c': { 'text': "Octahedral", 'value': 0 },
            'd': { 'text': "Linear", 'value': 0 },
        }
    },
    {
        'Difficulty': 0,
        'Title': "The Structure of a sp<sup>3</sup> molecule is...",
        'Options': {
            'a': { 'text': "Tetrahedral", 'value': 1 },
            'b': { 'text': "Triangular Planar", 'value': 0 },
            'c': { 'text': "Octahedral", 'value': 0 },
            'd': { 'text': "Linear", 'value': 0 },
        }
    },
    {
        'Difficulty': 0,
        'Title': "The Structure of a sp<sup>3</sup> molecule is...",
        'Options': {
            'a': { 'text': "Tetrahedral", 'value': 1 },
            'b': { 'text': "Triangular Planar", 'value': 0 },
            'c': { 'text': "Octahedral", 'value': 0 },
            'd': { 'text': "Linear", 'value': 0 },
        }
    },
    {
        'Difficulty': 0,
        'Title': "The Structure of a sp<sup>3</sup> molecule is...",
        'Options': {
            'a': { 'text': "Tetrahedral", 'value': 1 },
            'b': { 'text': "Triangular Planar", 'value': 0 },
            'c': { 'text': "Octahedral", 'value': 0 },
            'd': { 'text': "Linear", 'value': 0 },
        }
    },
    {
        'Difficulty': 1,
        'Title': "The Structure of a sp<sup>3</sup> molecule is...",
        'Options': {
            'a': { 'text': "Tetrahedral", 'value': 1 },
            'b': { 'text': "Triangular Planar", 'value': 0 },
            'c': { 'text': "Octahedral", 'value': 0 },
            'd': { 'text': "Linear", 'value': 0 },
        }
    },
    {
        'Difficulty': 1,
        'Title': "The Structure of a sp<sup>3</sup> molecule is...",
        'Options': {
            'a': { 'text': "Tetrahedral", 'value': 1 },
            'b': { 'text': "Triangular Planar", 'value': 0 },
            'c': { 'text': "Octahedral", 'value': 0 },
            'd': { 'text': "Linear", 'value': 0 },
        }
    },
    {
        'Difficulty': 1,
        'Title': "The Structure of a sp<sup>3</sup> molecule is...",
        'Options': {
            'a': { 'text': "Tetrahedral", 'value': 1 },
            'b': { 'text': "Triangular Planar", 'value': 0 },
            'c': { 'text': "Octahedral", 'value': 0 },
            'd': { 'text': "Linear", 'value': 0 },
        }
    },
    {
        'Difficulty': 1,
        'Title': "The Structure of a sp<sup>3</sup> molecule is...",
        'Options': {
            'a': { 'text': "Tetrahedral", 'value': 1 },
            'b': { 'text': "Triangular Planar", 'value': 0 },
            'c': { 'text': "Octahedral", 'value': 0 },
            'd': { 'text': "Linear", 'value': 0 },
        }
    },
    {
        'Difficulty': 2,
        'Title': "The Structure of a sp<sup>3</sup> molecule is...",
        'Options': {
            'a': { 'text': "Tetrahedral", 'value': 1 },
            'b': { 'text': "Triangular Planar", 'value': 0 },
            'c': { 'text': "Octahedral", 'value': 0 },
            'd': { 'text': "Linear", 'value': 0 },
        }
    },
    {
        'Difficulty': 2,
        'Title': "The Structure of a sp<sup>3</sup> molecule is...",
        'Options': {
            'a': { 'text': "Tetrahedral", 'value': 1 },
            'b': { 'text': "Triangular Planar", 'value': 0 },
            'c': { 'text': "Octahedral", 'value': 0 },
            'd': { 'text': "Linear", 'value': 0 },
        }
    },
    {
        'Difficulty': 2,
        'Title': "The Structure of a sp<sup>3</sup> molecule is...",
        'Options': {
            'a': { 'text': "Tetrahedral", 'value': 1 },
            'b': { 'text': "Triangular Planar", 'value': 0 },
            'c': { 'text': "Octahedral", 'value': 0 },
            'd': { 'text': "Linear", 'value': 0 },
        }
    },
    {
        'Difficulty': 2,
        'Title': "The Structure of a sp<sup>3</sup> molecule is...",
        'Options': {
            'a': { 'text': "Tetrahedral", 'value': 1 },
            'b': { 'text': "Triangular Planar", 'value': 0 },
            'c': { 'text': "Octahedral", 'value': 0 },
            'd': { 'text': "Linear", 'value': 0 },
        }
    },
    {
        'Difficulty': 2,
        'Title': "The Structure of a sp<sup>3</sup> molecule is...",
        'Options': {
            'a': { 'text': "Tetrahedral", 'value': 1 },
            'b': { 'text': "Triangular Planar", 'value': 0 },
            'c': { 'text': "Octahedral", 'value': 0 },
            'd': { 'text': "Linear", 'value': 0 },
        }
    }
];


function CreateQuiz(d, n) {

    Quiz = [];
    
    for(var i = 0 ; i < n; i++){
        while(true){
            index = Math.floor(Math.random() * QuestionArray.length);
            if(QuestionArray[index]['Difficulty'] == d){
                Quiz.push(QuestionArray[index]);
                QuestionArray.splice(index,1);
                break;
            }
        }
    }

    Quiz.forEach(ques => {
        QuestionArray.push(ques);
    });

    setTimeout(() => {
        cover.style.display = 'none';
    }, 2000);
}

function FillQuestion() {

    Serial.innerHTML = 'Question : '+ QuestionNumber;

    if (QuestionNumber <= Quiz.length){

        quesobj = Quiz[QuestionNumber - 1];

        title.innerHTML = quesobj['Title'];

        Option1.innerHTML = quesobj['Options']['a']['text'];
        Option1.value = quesobj['Options']['a']['value'];

        Option2.innerHTML = quesobj['Options']['b']['text'];
        Option2.value = quesobj['Options']['b']['value'];

        Option3.innerHTML = quesobj['Options']['c']['text'];
        Option3.value = quesobj['Options']['c']['value'];

        Option4.innerHTML = quesobj['Options']['d']['text'];
        Option4.value = quesobj['Options']['d']['value'];

        QuestionNumber = QuestionNumber + 1;
        
    }
    else{
        ShowReport();
    }
}

function ShowNext(){

    nxtbtn.style.display = 'none';
    helper();
    Decolor();
    Enabler(); 
}

function Enabler(){
    OptionArray.forEach(element => {
        element.disabled = false;
    });
}

function Decolor(){
    OptionArray.forEach(element => {
        element.style.backgroundColor = 'white';
        element.style.borderColor = 'black';
    });
}


function ShowReport() {
    ResultPage.style.display = 'flex';
    SaveScore();
    BestScore = localStorage.getItem('ChemChampHighScore1');
    var outof = Score / 10;

    resQues.innerHTML = "Correct Answers : "+ outof + " / " + NumVal;
    resTime.innerHTML = "Mean Time : " + averageTime / NumVal + " Seconds";
    resScore.innerHTML = "Score : " + Score;
    HighScore.innerHTML = "Best Score : " + BestScore; 

}

function NewTest() {
    ResultPage.style.display = 'none';
    QuesPage.style.display = 'none';
    Prefs.style.display = 'block';
}

function SaveScore(){
    if(Score > BestScore){
        localStorage.setItem('ChemChampHighScore1',Score);
    }
}


