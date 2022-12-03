//Normal Function
function sum(a,b)
{
    return a+b;
}

function product(a,b)
{
    return a*b;
}

console.log(sum(10,11));
console.log(product(10,11));

//Annonymous Function
setTimeout(function(){console.log("Javascript is the best!!!")},5000);

//Arrow Function
setTimeout(()=>{console.log("Javascript is the very best!!!")},3000)
