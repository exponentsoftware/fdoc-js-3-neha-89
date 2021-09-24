//1. A junior developer structure student name, skills and score in array of arrays which may not easy to read. Destruction the following array name to name, skills array to skills, scores array to scores, JavaScript score to jsScore and React score to reactScore variable.
// ```js


//const student = ['David', ['HTM', 'CSS', 'JS', 'React'], [98, 85, 90, 95]]
// console.log(name, skills, scores)
// console.log(jsScore, reactScore)
const students = [
    ['David', ['HTM', 'CSS', 'JS', 'React'], [98, 85, 90, 95]],
    ['John', ['HTM', 'CSS', 'JS', 'React'], [85, 80, 85, 80]]
]
//The map() method creates a new array populated with the results of calling a provided function on every element in the calling array.
const convertArrayToObject = (students) => {
      const details = students.map((item) => {
       const newObj = {
           name:item[0],
           skills:item[1],
           scores:item[2]
       };
       return newObj; 
      });
      return details;
}
console.log(convertArrayToObject(students));

// Copy the student object to newStudent without mutating the original object. In the new object add the following ?

// 	1. Add Bootstrap with level 8 to the front end skill sets
// 	2. Add Express with level 9 to the back end skill sets
// 	3. Add SQL with level 8 to the data base skill sets
// 	4. Add SQL without level to the data science skill sets

	
			const student = {
				name: 'David',
				age: 25,
				skills: {
					frontEnd: [
						{ skill: 'HTML', level: 10 },
						{ skill: 'CSS', level: 8 },
						{ skill: 'JS', level: 8 },
						{ skill: 'React', level: 9 }
					],
					backEnd: [
						{ skill: 'Node',level: 7 },
						{ skill: 'GraphQL', level: 8 },
					],
					dataBase:[
						{ skill: 'MongoDB', level: 7.5 },
					],
					dataScience:['Python', 'R', 'D3.js']
				}
			}

 
// const newStudent = {...student ,
     
//     skills: {
//         ...student.skills,
//         frontEnd: [...student.skills.frontEnd, { skill: 'Bootstrap', level: 8 }],
//         backEnd: [...student.skills.backEnd,{skill: 'Express', level:9}],
//         dataBase: [...student.skills.dataBase,{skill: 'SQL', level:8}],
//         dataScience:['SQL']
//     }

// }
// cloning the student object  as new student object
const newStudent = Object.assign({}, student);

// adding new skills
newStudent.skills.frontEnd.push({
  skill: "BootStrap",
  level: 8,
});
newStudent.skills.backEnd.push({
  skill: "Express",
  level: 9,
});
newStudent.skills.dataBase.push({ skill: "SQL", level: 8 });
newStudent.skills.dataScience.push("SQL");


 console.log(newStudent);


// const student = {
//     name: 'David',
//     age: 25,
//     skills: {
//         frontEnd: [
//             { skill: 'HTML', level: 10 },
//             { skill: 'CSS', level: 8 },
//             { skill: 'JS', level: 8 },
//             { skill: 'React', level: 9 }
//         ],
//         backEnd: [
//             { skill: 'Node',level: 7 },
//             { skill: 'GraphQL', level: 8 },
//         ],
//         dataBase:[
//             { skill: 'MongoDB', level: 7.5 },
//         ],
//         dataScience:['Python', 'R', 'D3.js']
//     }
// }

//Find the length of student object keys
console.log("length", Object.keys(student).length);
// Find the length of the student object values
console.log("values", Object.values(student).length);
//Find the length of skills object keys
console.log("values", Object.keys(student.skills).length);
//check if the student object has graphicDesign property
console.log(student.hasOwnProperty('graphicDesign'));
//Iterate the keys of the student object
console.log(Object.keys(student));


//a. Create a function called ***signUp*** which allows user to add to the collection. If user exists, inform the user that he has already an account.
const users = [
			{
					_id: 'ab12ex',
					username: 'Alex',
					email: 'alex@alex.com',
					password: '123123',
					createdAt:'17/05/2019 9:00 AM',
					isLoggedIn: false
			},
			{
					_id: 'fg12cy',
					username: 'Asab',
					email: 'asab@asab.com',
					password: '123456',
					createdAt:'17/05/2019 9:30 AM',
					isLoggedIn: true
			},
			{
					_id: 'zwf8md',
					username: 'Brook',
					email: 'brook@brook.com',
					password: '123111',
					createdAt:'17/05/2019 9:45 AM',
					isLoggedIn: true
			},
			{
					_id: 'eefamr',
					username: 'Martha',
					email: 'martha@martha.com',
					password: '123222',
					createdAt:'17/05/2019 9:50 AM',
					isLoggedIn: false
			},
			{
					_id: 'ghderc',
					username: 'Thomas',
					email: 'thomas@thomas.com',
					password: '123333',
					createdAt:'17/05/2019 10:00 AM',
					isLoggedIn: false
			}
			];

    //Create a function called ***signUp*** which allows user to add to the collection. If user exists, inform the user that he has already an account.
    
    const newUser = {
        _id: "eefamj",
        username: "Sachin",
        email: "sachin@xyx.com",
        password: "123456",
        createdAt: "23/09/2021 9:50 AM",
        isLoggedIn: false,
      };
      const signup = (newUser) => {
 const getUser = users.find((user) => user._id === newUser._id);
        if (!getUser) {
          users.push(newUser);
          return users;
        } else {
          return "you already have an account";
        }
      };
      
     console.log(signup(newUser));
      //console.log(users);
      
  //  Create a function called ***signIn*** which allows user to sign in to the application

  const signIn = (email, password) => {
    const loggedUser = users.find(
      (user) => user.email === email && user.password === password
    );
  
    if (!loggedUser.isLoggedIn) {
      loggedUser.isLoggedIn = true;
      return "user signed In successfully";
    } else {
      return "user already login";
    }
  };
  
  console.log(signIn('martha@martha.com','123222' ));
  console.log(signIn('brook@brook.com','123111' ));


  