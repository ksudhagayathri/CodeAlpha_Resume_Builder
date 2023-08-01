function addnewaqField(){

    let newNode=document.createElement('textarea');
    newNode.classList.add('form-control');
    newNode.classList.add('aqField');
    newNode.classList.add('mt-2');
    newNode.setAttribute("rows",3);
    newNode.setAttribute("placeholder",'Enter here');
    let aqOb=document.getElementById("aq");
    let aqbtnOb=document.getElementById("aqbtn");

    aqOb.insertBefore(newNode, aqbtnOb);
}

function addnewskField(){

    let newNode=document.createElement('textarea');
    newNode.classList.add('form-control');
    newNode.classList.add('eqField');
    newNode.classList.add('mt-2');
    newNode.setAttribute("rows",3);
    newNode.setAttribute("placeholder",'Enter here');
    let skOb=document.getElementById("sk");
    let skbtnOb=document.getElementById("skbtn");

    skOb.insertBefore(newNode, skbtnOb);
}

function addnewweField(){

    let newNode=document.createElement('textarea');
    newNode.classList.add('form-control');
    newNode.classList.add('eqField');
    newNode.classList.add('mt-2');
    newNode.setAttribute("rows",3);
    newNode.setAttribute("placeholder",'Enter here');
    let weOb=document.getElementById("we");
    let webtnOb=document.getElementById("webtn");

    weOb.insertBefore(newNode, webtnOb);
}


// generate CV

function generateCV(){

    let nameField=document.getElementById("nameField").value; 
    let nameT1=document.getElementById("nameT1");
    nameT1.innerHTML= nameField;

    let nameT2=document.getElementById("nameT2");
    nameT2.innerHTML= nameField;

    let contactField=document.getElementById("contactField").value; 
    let contactT=document.getElementById("contactT");
    contactT.innerHTML= contactField;

    
    let emailField=document.getElementById("emailField").value; 
    let emailT=document.getElementById("emailT");
    emailT.innerHTML= emailField;

    
    let addressField=document.getElementById("addressField").value; 
    let addressT=document.getElementById("addressT");
    addressT.innerHTML= addressField;
      
    let objectiveField=document.getElementById("objectiveField").value; 
    let objectiveT=document.getElementById("objectiveT");
    objectiveT.innerHTML= objectiveField;


 let aqField=document.getElementById("aqField").value; 
let aqT=document.getElementById("aqT");
aqT.innerHTML= aqField;

  
let skField=document.getElementById("skField").value; 
let skT=document.getElementById("skT");
skT.innerHTML= skField;

  
let weField=document.getElementById("weField").value; 
let weT=document.getElementById("weT");
weT.innerHTML= weField;






document.getElementById('cv-form').style.display='none' ;
document.getElementById('cv-template').style.display='block' ;



let file=document.getElementById("imgField").files[0];

console.log(file);
let reader=new FileReader();

reader.readAsDataURL(file);
console.log(reader.result);

reader.onloadend=function(){
    document.getElementById('imgT').src=reader.result;
};


}


function printCV(){

window.print();

}