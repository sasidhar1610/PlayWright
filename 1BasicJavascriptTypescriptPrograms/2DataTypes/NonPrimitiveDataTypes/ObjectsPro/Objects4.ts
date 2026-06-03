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


//checking the type of date ->empinfo
console.log(typeof empinfo) //object

//checking the type of date ->empdata
console.log(typeof empdata) //undefined
