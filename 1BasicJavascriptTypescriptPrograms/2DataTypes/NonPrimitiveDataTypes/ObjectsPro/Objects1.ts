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

  //priniting element in the object
console.log("the emp domain nema is: "+empinfo.empdomain); //the emp domain nema is: QA Engineer

//adding element into the originla object
empinfo.office = "DLF ",
console.log(empinfo); 
/*outpt:
{
  empid: 6734,
  empname: 'sasidhar',
  emprole: 'QAEngineer',
  isSalary: true,
  empexp: 6,
  empdomain: 'QA Engineer',
  empadd: { estreet: 'road no 614', hno: '21-biswas', location: 560037 },
  office: 'DLF '
}*/

//adding element into the originla sub object
empinfo.empadd.city = "karimnagar",
console.log(empinfo);

/*output
{
  empid: 6734,
  empname: 'sasidhar',
  emprole: 'QAEngineer',
  isSalary: true,
  empexp: 6,
  empdomain: 'QA Engineer',
  empadd: {
    estreet: 'road no 614',
    hno: '21-biswas',
    location: 560037,
    city: 'karimnagar'
  },
  office: 'DLF '
}*/


//updating/overriding office location
empinfo.office = "block 3";
console.log(empinfo)
/*output:
{
  empid: 6734,
  empname: 'sasidhar',
  emprole: 'QAEngineer',
  isSalary: true,
  empexp: 6,
  empdomain: 'QA Engineer',
  empadd: { estreet: 'road no 614', hno: '21-biswas', location: 560037 },
  office: 'block 3'
}*/
