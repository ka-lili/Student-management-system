const {students} = require("../db/student.js")
//function to add student

const add = (newStudent)=>{
    newStudent.id = students.length +1;
    students.push(newStudent);
    
    console.log("\n student inserted well \n");
    console.log("\n display student after  database\n");
    console.log(students)
}
//function to display
const display = () =>{
    console.log("all students")
    console.log(students)
}
//function to update
const update = (id,key,value)=>{
 let exists = students.find(element =>element.id===id);
 if(!exists){
    console.log("student not found")
 }else{
    exists[key] = value;
    console.log("info updated");
    console.log(nexists);
 }
}
//function to update many
const updateMany = (id,obj) =>{
    let exists = students.find(element => element.id===id)
    if(!exists){
        console.log("student not found")
    }else{
        for(key in obj)
        exists[key] = obj[key];
    }
    console.log("many updated");
    console.log(exists)
}
//function to remove student
const remove = (id)=>{
    let exists = students.find(element =>element.id===id)
    if(!exists){
        console.log("student not found")
    }else{
        remaining = [];
        var remaining = students.filter(element => element.id!==id)
    }
    console.log("removed")
    console.log(remaining)
}
module.exports={
    add,
    update,
    updateMany,
    remove,
}