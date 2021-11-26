function submit(){
    var table = document.getElementById("myTable");
    // table.
    var row = table.insertRow(-1);
    // var cell1 = row.insertCell(0);
    var newCell1 = row.insertCell(0);
    var newCell2 = row.insertCell(1);
    var newCell3 = row.insertCell(2);
    var newCell4 = row.insertCell(3);
    var newCell5 = row.insertCell(4);
    var newCell6 = row.insertCell(5);
    var newCell7 = row.insertCell(6);
    var newCell8 = row.insertCell(7);
    
    let fname = document.createTextNode(`${document.getElementsByName('fname')[0].value}`);
    newCell1.appendChild(fname);
    
    let lname = document.createTextNode(`${document.getElementsByName('lname')[0].value}`);
    newCell2.appendChild(lname);

    let address = document.createTextNode(`${document.getElementsByName('address')[0].value}`);
    newCell3.appendChild(address);

    let pin = document.createTextNode(`${document.getElementsByName('pin')[0].value}`);
    newCell4.appendChild(pin);

    let val=document.getElementsByName('gender')[0].checked ? "Male": "Female";
    let gender = document.createTextNode(`${val}`);
    newCell5.appendChild(gender);

    let food = document.createTextNode(`${document.getElementsByName('food')[0].value}`);
    newCell6.appendChild(food);

    let State = document.createTextNode(`${document.getElementsByName('state')[0].value}`);
    newCell7.appendChild(State);

    let country = document.createTextNode(`${document.getElementsByName('country')[0].value}`);
    newCell8.appendChild(country);
}


function validation(){
    let fname= document.getElementsByName('fname')[0].value;    
    let lname= document.getElementsByName('lname')[0].value;
    let address= document.getElementsByName('address')[0].value;
    let pin= document.getElementsByName('pin')[0].value;
    let gender1= document.getElementsByName('gender')[0].checked;
    let gender2= document.getElementsByName('gender')[1].checked;
    let state= document.getElementsByName('state')[0].value;
    let country= document.getElementsByName('country')[0].value;
    let food= document.getElementsByName('food')[0].value;

    if(fname!="" && food!="" && lname!="" && address!="" && pin!="" && (gender1 || gender2) && 
    state!="" && country!=""){
        submit();
        let reset = document.getElementById('myForm');
        reset.reset();
        // fname="";
        // lname="";
        // address="";
        // pin="";
        // gender1.checked=false;
        // gender2.checked=false;
        // state="";
        // country="";
        // food="";
    }
}