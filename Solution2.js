const students = [
  { name: "Alice", score: 85 },
  { name: "Bob", score: 60 },
  { name: "Charlie", score: 92 },
  { name: "David", score: 75 }
];
console.log(getHighScorers(students, 70));

function getHighScorers(students, minScore) {
    var toppers = [];
    students.forEach((student) => {
        if (student.score > minScore) {
            toppers.push(student.name);
        }
    })
    return toppers;
}
