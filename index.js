import myCollection from './collection.js';
import chalk from 'chalk';
//   console.log(myCollection);

function describeItem(item){
    if(item.count == 1){
        console.log(chalk.bold.bgRed(`I have a ${chalk.cyan(item.name)}. Here's what I like about it: ${chalk.green(item.whatILike)} `));
    }else{
        console.log(chalk.bold.bgRed(`I have ${chalk.yellow(item.count)} ${chalk.cyan(item.name)}'s. Here's what I like about them: ${chalk.green(item.whatILike)}`));
    }
}

myCollection.map(describeItem);

function describeCollection(myArray){
    for(let i = 0; i < myCollection.length; i++){
        describeItem(myCollection[i]);
    }
}
describeCollection(myCollection);
