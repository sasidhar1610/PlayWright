let mydata = "Manohar" //declare

console.log(mydata)

mydata = 1067  //reassigning

console.log(mydata)

//let mydata = "raju" //redeclartion  -->SyntaxError: Identifier 'mydata' has already been declared

//console.log(mydata)

{
    console.log(mydata) //accessing inside of a block
    let k = "king"
    console.log(k) //declare inside of a block and accessing inside of a block
}

//console.log(k) //declare inside of a block and accessing outside of a block -->ReferenceError: k is not defined