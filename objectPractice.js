function MakeCourse(title,lecture,section){
    this.title = title;
    this.lecture = lecture;
    this.section = section;
    this.enroll = function (){
        console.log("ENrolled");
    }
}
const course1 = {
    title:   'JS',
    lecture: 10,
    section: 3
}
var course2 = new MakeCourse('JS',10,3);
console.log(course1);
console.log(course1.constructor);
console.log(course1);
console.log(course2.constructor);

// we can add new attributes and methods to our object -- dynamically
course2.fees = 2000; 
course2.checkEnrollment = function (){
    console.log("30 users are enrolled");
}
console.log(course2);

// we can delete any property or method if needed -- dynamically
delete course2.section;

const str = 10;
console.log(str.constructor);

console.log(Object.keys(course1));
console.log(Object.values(course1));
console.log(Object.entries(course1));
