function firstAction(value1,value2)
{
    let final= value1+value2;
    console.log("This is first Action!! "+final);
}

function secondAction(value)
{
    console.log("This is second Action!!"+value);
    return value*value; 
}

function thirdAction(value)
{
    console.log("This is third Action!!"+value);
    return value/value; 
}

firstAction(secondAction(5),thirdAction(5));


function firstAction1(callback, value)
{
    console.log("This is first Action!!"+value);
    callback();
}

function secondAction1(value)
{
    value = value * value;
    console.log("This is second Action!!"+value);
}

firstAction1(function(){secondAction1(10)}, 5);