console.log("============= Part 1: Understanding and Creating Objects =============");
console.log("");

// Student object:
const student = {
    name: "Neslihan Ustaoglu",
    age: 40,
    enrolled: true,
    courses: ["Math", "Javascript", "Artificial Intelligence"],
    displayInfo: function() {
        return `${this.name} is ${this.age} years old.`;
    },
    // Method to add a new course:
    addCourse: function(course) {
        this.courses.push(course);
        console.log(`Added new course: ${course}`);
    },
    // Method to calculate total number of courses:
    getTotalCourses: function() {
        return this.courses.length;
    }
};

// Use console.log to output information:
console.log(`Name: ${student.name}, Age: ${student.age}`);
console.log(student.displayInfo());

console.log("");
console.log("============= Part 2: Working with JSON =============");
console.log("");

// Converting the student object into a JSON string:
const jsonString = JSON.stringify(student);

// Log the JSON string to the console:
console.log(jsonString);

// Converting the JSON string back into a JavaScript object:
const convertedStudent = JSON.parse(jsonString);

// Log and compare:
console.log("Original student object:", student);
console.log("Converted student object:", convertedStudent);

console.log("");
console.log("============= Part 3: Using Destructuring Assignment =============");
console.log("");

// Destructuring the name and courses of student object:
const { name, courses } = student;
console.log("Destructured name:", name);
console.log("Destructured courses:", courses);

// Creating an array of scores and destructuring the first two scores:
const scores = [85, 92, 78, 90];
const [firstScore, secondScore] = scores;
console.log("First score:", firstScore);
console.log("Second score:", secondScore);