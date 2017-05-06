//globals
var rowcount = 2;

window.setInterval(function(){
    gettotal();
    totalcredits();
}, 2000);

//table manipulation
function removeRowFromTable(){
    var tbl = document.getElementById('tbl');
    var lastRow = tbl.rows.length-2;
    if (lastRow > 1) tbl.deleteRow(lastRow);
    if (rowcount > 2){
        rowcount -=1;
    }
} 

function addRow(){ 
    var x=document.getElementById("tbl").tBodies[0];  //get the table
    var node=x.rows[rowcount-1].cloneNode(true);    //clone the previous node or row
    x.insertBefore(node, x.children[rowcount]);
    rowcount +=1;
}  

//calculations
function gettotal(){
    for (var i = 0; i < rowcount-1; i++){
        var x = document.getElementById("tbl").rows[rowcount-1].cells;
        var total = ((+x[2].innerHTML * +x[3].innerHTML) + 
                (+x[4].innerHTML * +x[5].innerHTML) + 
                (+x[6].innerHTML * +x[7].innerHTML))* 0.01;
        x[8].innerHTML = total;
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
    var refTab = document.getElementById("tbl");
    var ref = document.getElementById("tcred");
    for ( var i = 1; row = refTab.rows[i]; i++ ) {
        var row = refTab.rows[i];
        var truepercentage = (100 / ref.rows[0].cells[3].innerHTML) * row.cells[1].innerHTML;
        truepercentage = truepercentage.toFixed(2);
        refTab.rows[i].cells[9].innerHTML = truepercentage;
    }
}

function truetotal(){
    var refTab = document.getElementById("tbl");
    for ( var i = 1; row = refTab.rows[i]; i++ ) {
        var row = refTab.rows[i];
        var truetotal = row.cells[8].innerHTML * (row.cells[9].innerHTML/100);
        truetotal = truetotal.toFixed(2);
        refTab.rows[i].cells[10].innerHTML = truetotal;
    } 
}

function overalltotal(){
    var refTab = document.getElementById("tbl");
    var overall = 0;
    for ( var i = 1; row = refTab.rows[i]; i++ ) {
        var row = refTab.rows[i];
        overall = +overall + +row.cells[10].innerHTML;
        var ref = document.getElementById("tbl").lastChild();
        overall = overall.toFixed(2);
        ref.rows[0].cells[5].innerHTML = +overall;
    }
}

function grade(){
    var ref = document.getElementById("tbl").lastChild();
    var grade = ref.rows[0].cells[5].innerHTML;
    if (grade < 40){ref.rows[0].cells[7].innerHTML = "Fail";} 
    else if (grade < 50){ref.rows[0].cells[7].innerHTML = "3";}
    else if (grade < 60){ref.rows[0].cells[7].innerHTML = "2/2";}
    else if (grade < 70){ref.rows[0].cells[7].innerHTML = "2/1";}
    else if (grade >= 70){ref.rows[0].cells[7].innerHTML = "1";}
    else{ref.rows[0].cells[7].innerHTML = "ERROR";}
}