// 1.question


 let id=document.getElementById("text").innerHTML="this is our Js DOM handson";
 console.log(id,"hai ")


// 2.Question
 let elementName=document.querySelector('h1').innerHTML="hello surya";
 console.log(elementName)

// 3.Question 

 let className=document.querySelector('.box').innerHTML="change text hello through hello world"
 console.log(className)

// 4 Question 
function onbuttonclick(){
    var flex=document.getElementByClassName('flex-container')
    if(flex.style.flexDirection == "row"){
        flex.style.flexDirection="column"
        console.log('column')
    }else{
        flex.style.flexDirection='row'
        console.log('row')
    }
}

// question 5
let head=document.querySelector('h3').innerHTML="hello are you fine?"

// 6 question

// Question 7
// let header=document.querySelector('#header')
// header.style.color="red"
// header.style.backgroundColor="black"

let heading=document.querySelector('.heading')
heading.style.color="gold"
heading.style.backgroundColor="black"

// 8


// 9

// 10

// 11