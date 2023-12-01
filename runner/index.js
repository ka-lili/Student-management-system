const {add,update,updateMany,remove} = require("../Contoller/studentContoller");

const newStudent1 = {
    name:"jane",
    age:24,
    gender:"female"
}
 const studUpd = {
    age: 100,
    gender: "male"
 }
add(newStudent1)
update(8,"age",89)
updateMany(1, studUpd)
remove(1)