function addNewWeField() {
    let newNode=document.createElement("textarea");
    newNode.classList.add("form-control");
    newNode.classList.add("WeField");
    newNode.classList.add("mt-2");
    newNode.setAttribute("rows",3);
    newNode.setAttribute("placeholder","Enter here");

    let WeOb=document.getElementById("We");
    let WeAddButtonOb=document.getElementById("WeAddButton");

    WeOb.insertBefore(newNode,WeAddButtonOb);
}

function addNewaqField(){
    let newNode=document.createElement("textarea");
    newNode.classList.add("form-control");
    newNode.classList.add("aqField");
    newNode.classList.add("mt-2");
    newNode.setAttribute("rows",3);
    newNode.setAttribute("placeholder","Enter here");

    let aqOb=document.getElementById("aq");
    let aqAddButtonOb=document.getElementById("aqAddButton");

    aqOb.insertBefore(newNode,aqAddButtonOb);

}
function addNewpField(){
    let newNode=document.createElement("textarea");
    newNode.classList.add("form-control");
    newNode.classList.add("pField");
    newNode.classList.add("mt-2");
    newNode.setAttribute("rows",3);
    newNode.setAttribute("placeholder","Enter here");

    let pOb=document.getElementById("p");
    let pAddButtonOb=document.getElementById("pAddButton");

    pOb.insertBefore(newNode,pAddButtonOb);

}

// generating cv
function generateCV(){
    // console.log("helo baby");
    let nameField = document.getElementById("nameField").value;

    let nameT1= document.getElementById('nameT1');

    nameT1.innerHTML = nameField;

    //direct
    document.getElementById("contactT").innerHTML = document.getElementById('contactField').value;

    //address
    document.getElementById('addressT').innerHTML = document.getElementById('addressField').value;

    //Email
    document.getElementById('emailT').innerHTML = document.getElementById('emailField').value;

    document.getElementById('GitHubT').innerHTML = document.getElementById('GitHubField').value;

    document.getElementById('instaT').innerHTML = document.getElementById('instagramField').value;

    document.getElementById('LinkedT').innerHTML = document.getElementById('linkedField').value;

    //objective

    document.getElementById('objectiveT').innerHTML = document.getElementById('objectiveField').value;

    //we

    let Wes= document.getElementsByClassName('WeField')

    let str='';
 
    for(let e of Wes)
    {
        str=str+ `<li> ${e.value} </li>`;
    }

    document.getElementById('WeT').innerHTML=str;

    //aq
    let aqs= documrent.getElementsByClassName('aqField');

    let str1 ="";

    for(let e of aqs){

         str1 += `<li> ${e.value} </li>`;
    }
document.getElementById("aqT").innerHTML =str1;

// code for loading image
let file = document.getElementById("imgField").files[0];

console.log(file);

let reader = new FileReader();

reader.readAsDataURL(file);
console.log(reader.result);

// set the image into template

reader.onloadend = function (){
document.getElementById('imgTemplate').src = reader.result;
}

document.getElementById("cv-form").style.display ="none";
document.getElementById("cv-template").style.display ="block";

}

//print cv
function printCV(){
    window.print();
}