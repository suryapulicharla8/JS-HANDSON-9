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

// let dir=document.querySelector('#dir');
// dir.addEventListener('click',function(){
//     let direction=document.querySelector('.mainFlex');
//     if(direction.style.flexDirection == 'column'){
//         direction.style.flexDirection='row'
//     }else{
//         direction.style.flexDirection='column';
//     }
// })
let button=document.querySelector('#click');
button.addEventListener('click',function(){
    let change=document.querySelector('.flex-box');
    if(change.style.flexDirection=="column"){
        change.style.flexDirection='row'
        change.style.paddingLeft="250px"
    }else{
        change.style.flexDirection="column"
    }
})

// function onbuttonclick(){
//     let flex=document.getElementByClassName('button').addEventListener('click')
//     if(flex.style.flexDirection == "column"){
//         flex.style.flexDirection="row"
//         console.log('row')
//     }else{
//         flex.style.flexDirection='column'
//         console.log('column')
//     }
// }

// question 5
let head=document.querySelector('h3').innerHTML="hello are you fine?"

// 6 question

// Question 7
let header=document.querySelector('#header')
header.style.color="red"
header.style.backgroundColor="black"

let heading=document.querySelector('.heading')
heading.style.color="gold"
heading.style.backgroundColor="black"

// 8
document.querySelector('#changeTxt').addEventListener('click',function(){
    document.querySelector('#chngtxt').innerHTML="Elevation Accadamy"
})

// 9

// 10
function  value(){
    let sel=document.querySelector('#years')
    let msg=sel.options[sel.selectedIndex].text;
    document.querySelector('#selValue').innerHTML=msg
}
document.querySelector('#selBtn').addEventListener('click',function(){
    value();
})

// 11

// 12 q
function clock(){
    let time=new Date();
    let hourr=time.getHours();
    let minute=time.getMinutes();
    let second=time.getSeconds();
    
    document.getElementById("hr").innerHTML=hourr + ":"
    document.getElementById('min').innerHTML=minute + ":"
    document.getElementById('sec').innerHTML=second + ":"
}
setInterval(clock,1000);