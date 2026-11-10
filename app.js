
var student = prompt('Enter your Student name')
var english = Number(prompt('Enter your english marks'));
var urdu = Number(prompt('Enter your urdu marks'));
var math = Number(prompt('Enter your math marks'));
var chemistry = Number(prompt('Enter your chemistry marks'));
var pakStudy = Number(prompt('Enter your pakstudy marks'));

var totalMarks = 500;
var obtainMarks;
var percentage;
var grade;

console.log("Student_Name:", student);


console.log("TotalMarks:", totalMarks);


console.log("Eng_Marks:", english, "Urdu_Marks:", urdu, "Math_Marks:", math, "Chem_Marks:", chemistry, "PakStudy_Marks:", pakStudy);

obtainMarks = (english + urdu + math + chemistry + pakStudy);
console.log("ObtainMarks:", obtainMarks);

percentage = (obtainMarks * 100 / totalMarks);


console.log("Percentage: ", percentage);

if (percentage >= 90 && percentage <= 100) {
    grade = "A";

} else if (percentage >= 80 && percentage < 90) {
    grade = "B";

} else if (percentage >= 70 && percentage < 80) {
    grade = "C";

} else if (percentage >= 60 && percentage < 70) {
    grade = "D";

} else if (percentage >= 50 && percentage < 60) {
    grade = "E";

} else {
    grade = "Fail";
}


console.log("Grade:", grade);


alert(`Student_Name : ${student},  Total_Marks : ${totalMarks},  ObtainMarks : ${obtainMarks},  Percentage : ${percentage},  Grade : ${grade} `)
