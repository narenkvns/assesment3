/*var arrHead = new Array();	
arrHead = ['DEGREE', 'INSTITUTION','YEAR OF PASSING',"MARKS"];
function getJson(file,callback){
    var xhr = new XMLHttpRequest();
    xhr.overrideMimeType("application/json");
    xhr.open("GET",file,true);
    xhr.onreadystatechange=function(){
        if (xhr.readyState===4 && xhr.status == "200"){
            callback(xhr.responseText);
        }
    }
    xhr.send();
}
//Calling function
getJson("js/data.json",function(text){
    var data = JSON.parse(text);
    console.log(data)
    displayData(data.data)
    tdd(data.education)
})

var bodyElement=document.querySelector("body");
var maindiv = document.createElement("div");
maindiv.classList.add ("maindiv");
bodyElement.appendChild(maindiv);


function displayData(info)
{
    var leftdiv = document.createElement("div");
    leftdiv.classList.add("leftdiv");
    maindiv.appendChild(leftdiv);
    var img = document.createElement("img");
    img.src = info.image;
    leftdiv.appendChild(img);
    var h1 = document.createElement("h2");
    h1.textContent = info.roll;
    leftdiv.appendChild(h1);
    var h1 = document.createElement("h1");
    h1.textContent = info.name;
    leftdiv.appendChild(h1);
    var h3 = document.createElement("h3");
    h3.textContent = "Personal Details";
    leftdiv.appendChild(h3);
    var span=document.createElement("h4");
    span.textContent=info.email;
    leftdiv.appendChild(span);
    var h1 = document.createElement("h4");
    h1.textContent = info.phone;
    leftdiv.appendChild(h1);
    var h1 = document.createElement("h4");
    h1.textContent = info.address;
    leftdiv.appendChild(h1);
    
} 

function tdd(trd,education)
{
    var rightdiv = document.createElement("div");
    rightdiv.classList.add("rightdiv");
    maindiv.appendChild(rightdiv);
    
    
    for(i in trd){
        var tdiv=document.createElement("div");
        tdiv.classList.add("tdiv");
        rightdiv.appendChild(tdiv);

        var h3 = document.createElement("h3");
        h3.textContent = "Carrer Object";
        tdiv.appendChild(h3);

        var h4= document.createElement("h4");
        h4.textContent= trd[i].object;
        tdiv.appendChild(h4);

        var h3 = document.createElement("h3");
        h3.textContent = "Education Details";
        tdiv.appendChild(h3);
    }
        /*var table = document.createElement('table');
        var arr=trd[i].ssc;
       for(i in arr){
            var tr = document.createElement('tr');
            var th = document.createElement('th');
            th.textContent="School/ College or University";
            tr.appendChild(th);
            
            var td = document.createElement('td');
            td.textContent = arr[i];
            tr.appendChild(td);
            tdiv.appendChild(table);
            table.appendChild(tr);
            tdiv.appendChild(table);
        }
        var table = document.createElement('table');
        var arr=trd[i].Inter;
       for(j in arr){
            var tr = document.createElement('tr');
            var th = document.createElement('th');
            th.textContent="School/ College or University";
            tr.appendChild(th);
            
            var td = document.createElement('td');
            td.textContent = arr[j];
            tr.appendChild(td);
            tdiv.appendChild(table);
            table.appendChild(tr);
            tdiv.appendChild(table);
        }
    }
    var table = document.createElement('table');
    table.setAttribute('id', 'empTable'); 
    tdiv.appendChild(table);
    var tr = empTable.insertRow(-1);
   
for(i in education){
   var empTab = document.getElementById('empTable');
   var rowCnt = empTab.rows.length;   
   var tr = empTab.insertRow(rowCnt); // the table row.
   tr = empTab.insertRow(rowCnt);
    for (var c = 0; c < arrHead.length; c++) {
        console.log(arrHead.length);
        var td = document.createElement('td'); // table definition.
        td = tr.insertCell(c);

        if (c == 1) {      // the first column.
           var h1=document.createElement("h1");
               var textnode = document.createTextNode(education[i].Degree);
               h1.appendChild(textnode); 
               td.appendChild(h1);
        }
        else if(c==2) {
           var h1=document.createElement("h1");
           var textnode = document.createTextNode(education[i].institution);
           h1.appendChild(textnode); 
           td.appendChild(h1);
        }else if(c==3){
           var h1=document.createElement("h1");
           var textnode = document.createTextNode(education[i].yearofpassing);
           h1.appendChild(textnode); 
           td.appendChild(h1);
           
        }else if(c==4){
           var h1=document.createElement("h1");
           var textnode = document.createTextNode(education[i].marks);
           h1.appendChild(textnode); 
           td.appendChild(h1);
        }


    }
    tr.appendChild(td);
   }
}*/
        
var arrHead = new Array();	
arrHead = ['DEGREE', 'INSTITUTION','YEAR OF PASSING',"MARKS"];

function createTable() {
   
}


function getJson(file,callback){
    var xhr = new XMLHttpRequest();
    xhr.overrideMimeType("application/json");
    xhr.open("GET",file,true);
    xhr.onreadystatechange=function(){
        if (xhr.readyState===4 && xhr.status == "200"){
            callback(xhr.responseText);
        }
    }
    xhr.send();
}
//Calling function
getJson("js/data.json",function(text){
    var data = JSON.parse(text);
    // console.log(data)
    displayData(data.data)
    tdd(data.trainers,data.education,data.skills)
    
})

var bodyElement=document.querySelector("body");
var maindiv = document.createElement("div");
maindiv.classList.add ("maindiv");
bodyElement.appendChild(maindiv);


function displayData(info)
{
    var leftdiv = document.createElement("div");
    leftdiv.classList.add("leftdiv");
    maindiv.appendChild(leftdiv);
    var img = document.createElement("img");
    img.src = info.image;
    leftdiv.appendChild(img);
    var h1 = document.createElement("h2");
    h1.textContent = info.roll;
    leftdiv.appendChild(h1);
    var h1 = document.createElement("h1");
    h1.textContent = info.name;
    leftdiv.appendChild(h1);
    var h3 = document.createElement("h3");
    h3.textContent = "Personal Details";
    leftdiv.appendChild(h3);
    var span=document.createElement("h4");
    span.textContent=info.email;
    leftdiv.appendChild(span);
    var h1 = document.createElement("h4");
    h1.textContent = info.phone;
    leftdiv.appendChild(h1);
    var h1 = document.createElement("h4");
    h1.textContent = info.address;
    leftdiv.appendChild(h1);
   
} 

function tdd(trd,ssc,skills)
{
    var rightdiv = document.createElement("div");
    rightdiv.classList.add("rightdiv");
    maindiv.appendChild(rightdiv);
    var tdiv=document.createElement("div");
    rightdiv.appendChild(tdiv);
    var h1= document.createElement("h3");
    h1.textContent= "OBJECTIVE";
    tdiv.appendChild(h1);

    for(i in ssc){
    if(i==0){
        var h3= document.createElement("h4");
        h3.textContent= ssc[i].object;
        tdiv.appendChild(h3);
    }}
    var h1= document.createElement("h3");
    h1.textContent= "Education Qualification";
    tdiv.appendChild(h1);
     var table = document.createElement('table');
     table.setAttribute('id', 'empTable'); 
     tdiv.appendChild(table);
     var tr = empTable.insertRow(-1);
    
for(i in ssc){
   
    if(i>0){
    var empTab = document.getElementById('empTable');
    var rowCnt = empTab.rows.length;   
    var tr = empTab.insertRow(rowCnt); // the table row.
    tr = empTab.insertRow(rowCnt);
     for (var c = 0; c < arrHead.length; c++) {
         console.log(arrHead.length);
         var td = document.createElement('td'); // table definition.
         td = tr.insertCell(c);

         if (c == 0) {      // the first column.
            var h1=document.createElement("h4");
				var textnode = document.createTextNode(ssc[i].Degree);
                h1.appendChild(textnode); 
                td.appendChild(h1);
         }
         else if(c==1) {
            var h1=document.createElement("h4");
            var textnode = document.createTextNode(ssc[i].name);
            h1.appendChild(textnode); 
            td.appendChild(h1);
         }else if(c==2){
            var h1=document.createElement("h4");
            var textnode = document.createTextNode(ssc[i].yearofpassing);
            h1.appendChild(textnode); 
            td.appendChild(h1);
            
         }else if(c==3){
            var h1=document.createElement("h4");
            var textnode = document.createTextNode(ssc[i].marks);
            h1.appendChild(textnode); 
            td.appendChild(h1);
         }


     }
     tr.appendChild(td);
    }
}
    var h3= document.createElement("h3");
    h3.textContent= "Skills";
    tdiv.appendChild(h3);
    var h3= document.createElement("h4");
    h3.textContent= "Front End:";
    tdiv.appendChild(h3);
    for(i in skills.Frontend){
        var span=document.createElement("span");
        span.textContent=skills.Frontend[i];
        tdiv.appendChild(span);
    }
    var h3= document.createElement("h4");
    h3.textContent= "Back End:";
    tdiv.appendChild(h3);
    for(i in skills.Backend){
        var span=document.createElement("span");
        span.textContent=skills.Backend[i];
        tdiv.appendChild(span);
    }
    var h3= document.createElement("h4");
    h3.textContent= "Databases:";
    tdiv.appendChild(h3);
    for(i in skills.Database){
        var span=document.createElement("span");
        span.textContent=skills.Database[i];
        tdiv.appendChild(span);
    }
}

