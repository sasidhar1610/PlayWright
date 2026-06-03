                             interface empdata //creating a rough data
{
    empid : number,
    empname : string,
    emprole : string,
    isSalary : boolean,
    empexp : number,
    empdomain : string,
    empadd :
        {
            estreet : string,
            hno : string,
            location : number,
        }
}

let empinfo : empdata = //creating original object (empinfo) from rought data (empdata)
{
    empid : 6734,
    empname : "sasidhar",
    emprole : "QAEngineer",
    isSalary : true,
    empexp : 6,
    empdomain : "QA Engineer",
    empadd :
        {
            estreet : "road no 614",
            hno : "21-biswas",
            location : 560037,    
        }                        
}
console.log(empinfo); 
/* output:
 {
  empid: 6734,
  empname: 'sasidhar',
  emprole: 'QAEngineer',
  isSalary: true,
  empexp: 6,
  empdomain: 'QA Engineer',
  empadd: { estreet: 'road no 614', hno: '21-biswas', location: 560037 }
} */


//checking existance of the key
console.log("empdomain" in empinfo) //true

//getting all keys
console.log(Object.keys(empinfo))
/*output
[
  'empid',
  'empname',
  'emprole',
  'isSalary',
  'empexp',
  'empdomain',
  'empadd'
]*/


//getting all values
console.log(Object.values(empinfo))
/*output:
[
  6734,
  'sasidhar',
  'QAEngineer',
  true,
  6,
  'QA Engineer',
  { estreet: 'road no 614', hno: '21-biswas', location: 560037 }
]*/

//getting all entries
console.log(Object.entries(empinfo))
/*ouput:
[
  [ 'empid', 6734 ],
  [ 'empname', 'sasidhar' ],
  [ 'emprole', 'QAEngineer' ],
  [ 'isSalary', true ],
  [ 'empexp', 6 ],
  [ 'empdomain', 'QA Engineer' ],
  [
    'empadd',
    { estreet: 'road no 614', hno: '21-biswas', location: 560037 }
  ]
]*/
