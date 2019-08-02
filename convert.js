const jenna = {
  

  toString () {
    return `${this.name} is in cohort ${this.cohort} and is working on the ${this.currentExercise} exercise`
  },
  name: "Jenna Solis",
  cohort: 34,
  currentExercise: "Array methods"

}

  console.log(jenna.toString())


const bryan = {
   

    toString () {
      return `${this.name} is in cohort ${this.cohort} and is working on the ${this.currentExercise} exercise`
    },

    name: "Bryan Nilson",
    cohort: 34,
    currentExercise: "Bri Fives"
}

console.log(bryan.toString())
const jisie = {

  toString () {
    return `${this.name} is in cohort ${this.cohort} and is working on the ${this.currentExercise} exercise`
  },
  name: "Jisie David",
  cohort: 32,
  currentExercise: "Student Exercises API"


}
console.log(jisie.toString())


const studentsStringRepresentation = studentObject => studentObject.toString() 
     
const students = [jisie, bryan, jenna]

const studentStringArray = students.map(studentsStringRepresentation)

console.log(studentStringArray)


studentStringArray.forEach(
  (studentString) => {
   
    document.querySelector("#studentReport")
        .innerHTML += studentString

  }
)

