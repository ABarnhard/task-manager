var prompt = require('sync-prompt').prompt;
var chalk = require('chalk');

var listPlay = [], listHome = [], listSchool = [];
var taskType, task;

var action = prompt('(a)dd task, (q)uit: ');

while(action !== 'q'){
  taskType = prompt('(p)lay, (h)ome, or (s)chool task? ');
  task = prompt('What is the task? ');

  switch(taskType){
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

  action = prompt('(a)dd task, (q)uit: ');
}

console.log('\nHere\'s your to-do list:');
console.log('Play:', chalk.blue(listPlay));
console.log('Home:', chalk.green(listHome));
console.log('School:', chalk.red(listSchool));
console.log('Good Luck!\n');

