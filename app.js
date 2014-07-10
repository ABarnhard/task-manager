var prompt = require('sync-prompt').prompt;
var chalk = require('chalk');

var listPlay = [], listHome = [], listSchool = [];
var taskType, task;

var option = prompt('(p)lay, (h)ome, (s)chool or (q)uit? ');

while(option !== 'q'){
  task = prompt('What is the task? ');

  switch(option){
    case 'p':
      listPlay.push(task);
      break;
    case 'h':
      listHome.push(task);
      break;
    case 's':
      listSchool.push(task);
      break;
    default:
      console.log('Must choose p, h, or s. Try again.');
  }

  option = prompt('(p)lay, (h)ome, (s)chool or (q)uit? ');
}

console.log('\nHere\'s your to-do list:');
console.log('Play:', chalk.blue(listPlay));
console.log('Home:', chalk.green(listHome));
console.log('School:', chalk.red(listSchool));
console.log('Good Luck!\n');

