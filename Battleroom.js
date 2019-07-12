function stringAdd(word1,word2){
    let number1 =parseInt(word1);
    let number2 =parseInt(word2);
    
    if(word1 =='' ){
        number1=0;
    }

    if(word2 == ''){
        number2=0;
    }
   
    let number3 = number1 + number2;
    
    let string3 = number3.toString();
    
    return string3;
    }
    
    

console.log(stringAdd('7',''));

//////////

console.log(Math.floor('3.64'));
//////


function sumArr(a,b) {
  const c = [''];
   
  for(let i=0;i<a.length && b.length;i++){
    let x = a[i];
    let y= b[i];
    let z = x+y;
    c[i]=z;
}
return c;
}

console.log(sumArr(['4','5','6','7','8'],['1','2','3','4','5']));