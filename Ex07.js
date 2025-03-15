let students = [
    { name: "Trần Trí Dương", score: { math: 9, english: 8, literature: 7 } },
    { name: "Hà Bích Ngọc", score: { math: 3, english: 2, literature: 5 } },
    { name: "Bùi Thái Sơn", score: { math: 9.5, english: 9, literature: 9 } },
];
function filterStudent(students) {
    return students.filter(student => (student.score.math + student.score.english + student.score.literature) / 3 >= 8);
}
console.log(filterStudent(students));