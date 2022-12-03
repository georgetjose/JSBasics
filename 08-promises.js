let myName="GTJ";
const ride = new Promise(function(resolve,reject) 
{
    if(myName==="GTJ")
    {
        resolve("Resolved !!!");
    }
    else
    {
        reject("Rejeted !!!");
    }
});

ride.then(function(value)
{
    console.log(value);
})
.catch(function(error)
{
    console.log(error);
})
.finally(function()
{
    console.log("Transaction Completed!!");
});


let myName1="ATP";
const ride1 = new Promise((resolve,reject) =>
{
    if(myName1==="GTJ")
    {
        resolve("Resolved !!!");
    }
    else
    {
        reject("Rejeted !!!");
    }
});

ride1.then(value =>
{
    console.log(value);
})
.catch(error =>
{
    console.log(error);
})
.finally(()=>
{
    console.log("Transaction Completed!!");
});