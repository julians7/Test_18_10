// Import stylesheets
import './style.css';
import Projects from './projects';
/*
// Write Javascript code!
const appDiv = document.getElementById('app');
appDiv.innerHTML = `<h1>JS Starter</h1>`;
*/
// A
//vytvor hodiny
const myTime = new Date();
let hour = myTime.getHours();
let min = myTime.getMinutes();
let sec = myTime.getSeconds();
// cely datum spolu
console.log(`${hour}:${min}:${sec}`);

setInterval(()=>showTi)

//console.log(myTime);

//https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date
//console.log(new Date());

//B
//filter na projekty v stave statusId = 'running'
//https://www.w3schools.com/howto/howto_js_rangeslider.asp
//pocet mesiacov 24

//vratena suma

//value * (fixedYeld/12)*24 +  ((value/100) * bonus)

//console.log(Projects.filter((p) => p.statusId === 'running'));
