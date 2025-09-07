// // Write a function to check the strength of a password.
// // =========================== HARD=================
// // ==============================================
// const isContentUpperCase = (str) => {
//   const uppercaseLetters = [
//     "A",
//     "B",
//     "C",
//     "D",
//     "E",
//     "F",
//     "G",
//     "H",
//     "I",
//     "J",
//     "K",
//     "L",
//     "M",
//     "N",
//     "O",
//     "P",
//     "Q",
//     "R",
//     "S",
//     "T",
//     "U",
//     "V",
//     "W",
//     "X",
//     "Y",
//     "Z",
//   ];


//   for(let i=0; i<str.length; i++ ){
//     for (let j =0; j<uppercaseLetters.length; j++){
//         if(str[i]===uppercaseLetters[j]){
//             return true
//         }

//     }
// }
 
// return false
// }
// const isContentLowerCase = (str) => {
//   const lowercaseLetters = [
//     "a",
//     "b",
//     "c",
//     "d",
//     "e",
//     "f",
//     "g",
//     "h",
//     "i",
//     "j",
//     "k",
//     "l",
//     "m",
//     "n",
//     "o",
//     "p",
//     "q",
//     "r",
//     "s",
//     "t",
//     "u",
//     "v",
//     "w",
//     "x",
//     "y",
//     "z",
//   ];
//    for(let i=0; i<str.length; i++ ){
//     for (let j =0; j<lowercaseLetters.length; j++){
//         if(str[i]===lowercaseLetters[j]){
//             return true
//         }

//     }
// }
// return false
// }

// const isDigit = (str) => {
//   const digit = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];

//    for(let i=0; i<str.length; i++ ){
//     for (let j =0; j<digit.length; j++){
//         if(str[i]===digit[j]){
//             return true
//         }

//     }
// }
// return false
// }


// const isSpecalist= (str) => {
//   for(let i=0; i<str.length; i++){
//      if(!isDigit(str[i]) && !isContentLowerCase(str[i]) && !isContentUpperCase(str[i])){
//             return true
//         }
//   }
//             return false   

// }
// const checkPasswordStrength = (password) => {
//  if(password.length>=8 && isDigit(password) && isContentLowerCase(password) && isContentUpperCase(password) && isSpecalist(password)){
//     console.log("Strong")
//  }else if(password.length>=6 && isDigit(password) && (isContentLowerCase(password) ||isContentUpperCase(password))){
//      console.log("Medium")

//  }else{
//     console.log("Weak")
//  }

// };
// checkPasswordStrength("ad.sFdf23ard")
// // Write a function to check the strength of a password.
// // =========================== HARD=================
// // ==============================================


// =========================== HARD=================
// ==============================================
// Write a function to move all zeros in an array to the end.
// const moveZerosToEnd=(arr)=>{
//     const newArry=[]
//     let count=0
//     let countzero=0
//     for(let i=0; i<arr.length; i++){
//         if(arr[i]!==0){
//           newArry[count]=arr[i]
//           count++
//         }
//         else{
//              countzero++
//         }
//     }

//     for(let i=0; i<countzero; i++){
//         newArry[count]=0
//         count++
//     }
//     return newArry

// }
// console.log(moveZerosToEnd([3,5,0,8,0,7,9,1]))
// ==============================================

// =========================== Medium =================
// Smiley Faces
// ==============================================
// const replaceSmiley=(input)=> {
//     let newInput=''
//     for(let i=0; i<input.length; i++ ){
//         if(input[i]==")" && input[i-1]==':'){
//             newInput=newInput+'('
//         }else{
//             newInput=newInput+input[i]
//         }
        
//     }
//     return newInput
// }
// console.log(replaceSmiley(":) :) :) All smiles here :)"))
// ==============================================

// =========================== Medium =================
// Hide Credit Card
// ==============================================
// const hideCreditCard =(cardNumber)=> {
//     let hideCardNumer=""
//     for(let i=0; i<cardNumber.length; i++){
//         if(i<12){
//             hideCardNumer=hideCardNumer+'*'
//         }else{
//             hideCardNumer=hideCardNumer+cardNumber[i]
//         }
//     }
//     return hideCardNumer
// }
// ==============================================

// =========================== medium=================
// ==============================================
// Is a Number Pronic?
// const checkPronic=(num)=> {
//     for (let i=0; i<=100; i++){
//         for(let j=0; j<=100; j++){
//             if(i*j==num && ((i==(j+1)) || (j==(i+1)))){
//                 return "Pronic"
//             }
//         }
//     }
//     return "noPronic"
// }
// console.log(checkPronic(49))
// ==============================================
// =========================== medium=================
// First and Last Index
// ==============================================
// const findFirstAndLast=(arr, num)=> {
//     let firstIndex=null
//     let lastIndex=null
//     let result=''
//     for(let i=0; i<arr.length; i++){
//         if(arr[i]==num){
//             if(firstIndex==null){
//                 firstIndex=i

//             }
//             lastIndex=i
//         }

//     }
//   return {firstIndex,lastIndex}

// }
// console.log(findFirstAndLast([20,20,20,50,20,40,20,60,40],40))
// ==============================================


// ==============================================
// =========================== medium=================
// Repeat Vowels
// const repeatVowels=(str)=> {
//     let newStr=''
//     for(let i=0; i < str.length; i++){
//         if(str[i]== 'a' || str[i]== 'A' || str[i]== 'i' || str[i]== 'I' || str[i]== 'o' || str[i]== 'O' || str[i]== 'U' || str[i]== 'u' || str[i]== 'e' || str[i]== 'E'){
//             newStr=newStr+str[i]+str[i]
//         }
//         else{
//             newStr =newStr +str[i]
//         }
//     }
//     return newStr
// }
// console.log(repeatVowels('Hello Aaron'))
// ==============================================

// ==============================================
// Convert to PascalCase
// =========================== medium=================
// const convertToPascalCase=(str)=> {
//     let newStr=''
//     newStr+=str[0].toUpperCase()
//     for(let i=1; i<str.length; i++ ){
//          if(str[i]==' '){
//             newStr+=str[i+1].toUpperCase()
//             i++
//         }else{
//             newStr+=str[i]
//         }
//     }
//     return newStr
// }
// console.log(convertToPascalCase("hello world ahmad"))

// ==============================================


// ==============================================
// Is SpOnGeCaSe?
// =========================== medium=================
// const isSpOnGeCaSe=(str)=> {
//     for(let i=1 ; i<str.length-1; i++){
//         if(str.length%2==0){
//         if(str[0]!==str[0].toUpperCase()){
//             return false
//         } else if((str[i]==str[i].toUpperCase() && str[i+1]==str[i+1].toLowerCase())||(
//             str[i]==str[i].toLowerCase() && str[i+1]==str[i+1].toUpperCase())){
//         }
       
//         else{
//             return false
//         }
//         return true
//     }
//     return false
//     }
    
// }

// console.log(isSpOnGeCaSe("SpOnGeCaSe"))

// ==============================================

// ==============================================
// Shortest Word
// =========================== medium=================

// const findShortestWord=(str)=> {
//  let currenWord=''
//  let smellestWord=''
//  let minLength=Infinity

//     for(let i=0; i<=str.length; i++){

//         if(str[i]!==' '){
//             currenWord+=str[i]

//         }else{
//             if(currenWord.length> 0 && currenWord.length<minLength){
//                 minLength=currenWord.length
//                 smellestWord=currenWord
//             }
//             currenWord=''
//         }
//     }
//     return smellestWord
// }
// console.log(findShortestWord('Go to my car! '))
// ==============================================

// ==============================================
// Longest Consecutive Zeros
// =========================== medium=================
// const longestConsecutiveZeros=(str)=> {
//     let zeroCounte=0
//    let maxlength=0
//     for(let i=0; i<str.length; i++){
//         if(str[i]!=='1'){
//             zeroCounte++
//         }else{
//             if(zeroCounte>maxlength){
//                 maxlength=zeroCounte
//             }
//             zeroCounte = 0
//         }
    
//     }
//     return maxlength
// }
// console.log(longestConsecutiveZeros('1010010001'))
// ==============================================
