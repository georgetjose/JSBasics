const cars = ["Venue", "Sonet", "Magnite", "Kiger"]

for(let i=0;i<5;i++)
{
    console.log(cars[i]);
}

let secret;

while(secret !== "George")
{
    secret = prompt("Type in the secret:"); 
}

alert("Correct!!!!");


