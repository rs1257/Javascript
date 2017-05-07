//globals
var rowcount = 2;

window.setInterval(function(){
    gettotal();
    totalcredits();
    truepercentage();
    truetotal();
    overalltotal();
    grade();
}, 2000);

//table manipulation
function removeRowFromTable(){
    var tbl = document.getElementById('tbl');
    var lastRow = tbl.rows.length-2;
    if (lastRow > 1) tbl.deleteRow(lastRow);
    if (rowcount > 2){
        rowcount -=1;
    }
    else {
        alert("You cant have less than 1 row");
    }
} 

function addRow(){
    if (rowcount < 11){
    var x=document.getElementById("tbl").tBodies[0];  //get the table
    var node=x.rows[rowcount-1].cloneNode(true);    //clone the previous node or row
    x.insertBefore(node, x.children[rowcount]);
    rowcount +=1;
    }
    else {
        alert("More than 10 modules are not allowed");
    }
}  

//calculations
function gettotal(){
    for (var i = 0; i < rowcount-1; i++){
        var x = document.getElementById("tbl").rows[rowcount-1].cells;
        var total = ((+x[2].innerHTML * +x[3].innerHTML) + 
                (+x[4].innerHTML * +x[5].innerHTML) + 
                (+x[6].innerHTML * +x[7].innerHTML))* 0.01;
        x[8].innerHTML = total.toFixed(2);
    }
 }
 
function totalcredits(){
    var tcredits = 0;
    for (var i = 0; i < rowcount-1; i++){
        var x = document.getElementById("tbl").rows[rowcount-1].cells;
        tcredits += +x[1].innerHTML;
    }
    var y = document.getElementById("tbl").rows[rowcount].cells;
    y[1].innerHTML = tcredits;
 }
 
function truepercentage(){
        var y = document.getElementById("tbl").rows[rowcount].cells;
        for (var i = 0; i < rowcount-1; i++){
            var x = document.getElementById("tbl").rows[rowcount-1].cells;
            var truepercentage = (100 / y[3].innerHTML) * x[1].innerHTML;
            x[9].innerHTML = truepercentage.toFixed(2);
    }
}

function truetotal(){ 
    for (var i = 0; i < rowcount-1; i++){
            var x = document.getElementById("tbl").rows[rowcount-1].cells;
            var truetotal = x[8].innerHTML * (x[9].innerHTML / 100);
            x[10].innerHTML = truetotal.toFixed(2);
    }
}

function overalltotal(){
    var overall = 0;
    for (var i = 0; i < rowcount-1; i++){
        var x = document.getElementById("tbl").rows[rowcount-1].cells;
        overall += +x[10].innerHTML;
    }
    var y = document.getElementById("tbl").rows[rowcount].cells;
    y[5].innerHTML = overall.toFixed(2);
}

function grade(){ //todo
    var y = document.getElementById("tbl").rows[rowcount].cells;
    var grade = y[5].innerHTML;
    if (grade < 40){y[7].innerHTML = "Fail";} 
    else if (grade < 50){y[7].innerHTML = "3";}
    else if (grade < 60){y[7].innerHTML = "2/2";}
    else if (grade < 70){y[7].innerHTML = "2/1";}
    else if (grade >= 70){y[7].innerHTML = "1";}
    else{y[7].innerHTML = "ERROR";}
}