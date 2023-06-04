class School{
    constructor(name,level,numberOfStudents){
        this._name = name;
        this._level = level;
        this._numberOfStudents = numberOfStudents;
    }
    get name(){
        return this._name;
    }
    get level(){
        return this._level;
    }
    get numberOfStudents(){
        return this._numberOfStudents;
    }
    set numberOfStudents(newnumberOfStudents){
        if(typeof(newnumberOfStudents)==='number'){
            this._numberOfStudents=newnumberOfStudents;
        }
        else{
            console.log('Invalid input: numberOfStudents must be set to a Number.');
        }
    }
    quickFacts(){
        console.log(`${this._name} educates ${this._numberOfStudents} students at the ${this._level} school level.`);
    }
    static pickSubstituteTeacher (substituteTeachers){
        const rand = Math.floor(Math.random()*substituteTeachers.length);
        return substituteTeachers[rand];
    }
}

class PrimarySchool extends School{
    constructor(name,numberOfStudents,pickupPolicy){
        super(name,'Primary',numberOfStudents)
        this._pickupPolicy = pickupPolicy;
    }
    get pickupPolicy(){
        return this._pickupPolicy;
    }
}
class HighSchool extends School{
    constructor(name,numberOfStudents,sportsTeams){
        super(name,'High',numberOfStudents)
        this._sportsTeams = sportsTeams;
    }
    get sportsTeams(){
        return this._sportsTeams;
    }
}

const lorraineHansbury = new PrimarySchool('Lorraine Hansbury',514,'Students must be picked up by a parent, guardian, or a family member over the age of 13.');
lorraineHansbury.quickFacts();
console.log(School.pickSubstituteTeacher(['Jamal Crawford', 'Lou Williams', 'J. R. Smith', 'James Harden', 'Jason Terry', 'Manu Ginobli']));

const alSmith = new HighSchool('Al E. Smith',415,['Baseball', 'Basketball', 'Volleyball', 'Track and Field']);
console.log(alSmith.sportsTeams);

// const school = new School('DPS','Primary',10);
// school.quickFacts();
// const str=['Aayushi','Chirag','Navya','Shreyash','Sangeet'];
// console.log(School.pickSubstituteTeacher(str));

// const primary = new PrimarySchool('LAHS',20,'Age<10');
// console.log(primary);