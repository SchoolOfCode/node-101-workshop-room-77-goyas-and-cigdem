import myCollection from './collection.js';
//   console.log(myCollection);

function describeItem(item){
    if(item.count == 1){
        console.log(`I have a ${item.name}. Here's what I like about it: ${item.whatILike} `);
    }else{
        console.log(`I have ${item.count} ${item.name}'s. Here's what I like about them: ${item.whatILike}`);
    }
}

myCollection.map(describeItem);

function describeCollection(myArray){
    for(let i = 0; i < myCollection.length; i++){
        describeItem(myCollection[i]);
    }
}
describeCollection(myCollection);
