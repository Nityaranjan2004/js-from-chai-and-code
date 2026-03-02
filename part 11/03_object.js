//destructure
const course = {
    name:"js in hindi",
    prise:1000,
    courseInstructure:"nitya"
};

const{courseInstructure} = course;
console.log(courseInstructure);

console.log("-----------------------------------------------");

const{prise:rs} = course;
console.log(rs);

// const navbar = ({Company}) => {

// }
// navbar(Company) = "nitya";
