let raceNumber = Math.floor(Math.random() * 1000);

const checkEarly = true;
const runnerAge = 19;
if(runnerAge >18 && checkEarly)
{
    raceNumber +=1000;
}

if(runnerAge>18 && checkEarly){
    console.log(`Your race will start at 9:30 am and your race number is ${raceNumber}.`);
}
else if(runnerAge>18 && !checkEarly){
    console.log(`Your race will start at 11:00 am and your race number is ${raceNumber}.`);
}
else if(runnerAge<18){
    console.log(`Your race will start at 12:30 pm and your race number is ${raceNumber}.`);
}
else{
    console.log("Please check the registration desk.");
}