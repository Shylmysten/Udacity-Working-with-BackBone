function template (string, options= {open:'*(', close: ')*'}) {

  this.options = options;

  // this code will pass these test if ran in the Dev Tools
  // var string = "Hi, my name is Richard. And I *( emotion )* this *( thing )*!";
// var logResult = template( string );
// logResult( 'love', 'ice cream', 2 ); // logs the message "Hi, my name is Richard. And I love this ice cream!", twice
//
//
// var string = "Is <<! thing !>> healthy to <<! action !>>?";
// var logResult = template( string, {open: '<<!', close: '!>>'} );
// logResult( 'ice cream', 'consume', 7 ); // logs the message "Is ice cream healthy to consume?", seven times
  return new Function('', 'let str ='+ `"${string}"`+';\
  let names = [...arguments];\
  let num = names.pop();\
  let placeHolder = str.slice(str.indexOf(options.open),(str.indexOf(options.close) + (options.close.length)));\
  let placeHolders = [];\
  let i = 0;\
  while (placeHolder !== \'\') {\
    placeHolders.push(placeHolder);\
    str = str.replace(placeHolder,names[i]);\
    placeHolder = str.slice(str.indexOf(options.open),(str.indexOf(options.close) + (options.close.length)));\
    i++;\
  }\
  for (let k=0; k<num;k++) {\
    console.log(str);\
  }\
  return str;');



  // the code below works AND passes ALL the tests LOCALLY (127.0.0.1:3000), but not in the Udacity quiz test ????

  // return function (...strings) {
  //   // place the arguments into an array
  //   let names = [...strings];
  //   // the last argument will be the number of times to repeat
  //   let num = names.pop();
  //   // get the first template to replace
  //   let placeHolder = str.slice(str.indexOf(options.open),(str.indexOf(options.close) + (options.close.length)));
  //   // set up an array of placHolders
  //   let placeHolders = [];
  //   let i = 0;
  //   while (placeHolder !== '') {
  //     // push the placeHolder into an placeHolders Array
  //     placeHolders.push(placeHolder);
  //     // replace the placeHolder with the the passed arguments
  //     str = str.replace(placeHolder,names[i]);
  //     // if there are any remaining placeHolders (templates) grab it
  //     placeHolder = str.slice(str.indexOf(options.open),(str.indexOf(options.close) + (options.close.length)));
  //     // increment i to move to the next element in the 'passed arguments array', [names]
  //     i++;
  //   }
  //   // use the last argument passed in to determine how many times to console log the str
  //   for (let k=0; k<num;k++) {
  //     console.log(str);
  //   }
  //   // remember console.log
  //   return str; // template renderer usually returns a string
  // };

}
