class Student {
  constructor(firstName, lastName, year) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.grade = year;
    this.tardies = 0;
    this.scores = [];
  }
  fullName() {
    return `Your full name is ${this.firstName} ${this.lastName}.`;
  }
  markLate() {
    this.tardies += 1;
    if (this.tardies >= 3) return 'YOU ARE EXPELLED !!';
    return `${this.firstName} ${this.lastName} has been late ${this.tardies} times.`;
  }
  addScore(score) {
    this.scores.push(score);
    return this.scores;
  }
  calculateAverage() {
    let sum = this.scores.reduce(function (a, b) {
      return a + b;
    });
    return sum / this.scores.length;
  }

  static EnrollStudents() {
    return 'ENROLLING STUDENTS!';
  }
}

// console.log(new Student('Ju', 'Minjae', 4));

let firstStudent = new Student('Colt', 'Steele', 3);
let secondStudent = new Student('Blue', 'Steele', 2);

// console.log(firstStudent.fullName());
// console.log(secondStudent.fullName());
// console.log(firstStudent.markLate());

// console.log(secondStudent.addScore(92));
// console.log(secondStudent.addScore(87));
// console.log(secondStudent.calculateAverage());

console.log(Student.EnrollStudents());
