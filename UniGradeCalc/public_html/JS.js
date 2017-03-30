var rowcount = 1;

function removeRowFromTable()
{
  var tbl = document.getElementById('tbl');
  var lastRow = tbl.rows.length-1;
  if (lastRow > 1) tbl.deleteRow(lastRow);
  if (rowcount > 1){
    rowcount -=1;
  }
} 
  

  
  function addRow()
    { var x=document.getElementById("tbl").tBodies[0];  //get the table
      var node=x.rows[rowcount].cloneNode(true);    //clone the previous node or row
      x.appendChild(node);   //add the node or row to the table
      rowcount +=1;
  }  

 function gettotal(){
    
    var refTab = document.getElementById("tbl");

for ( var i = 1; row = refTab.rows[i]; i++ ) {
   var row = refTab.rows[i];
   var t1 = row.cells[2].innerHTML * row.cells[3].innerHTML * 0.01;
   var t2 = row.cells[4].innerHTML * row.cells[5].innerHTML * 0.01;
   var t3 = row.cells[6].innerHTML * row.cells[7].innerHTML * 0.01;
   
   var total = t1 + t2 + t3;
   refTab.rows[i].cells[8].innerHTML = total;
 }
 }
 
 function totalcredits(){
     var refTab = document.getElementById("tbl");
     var tcredits = 0;
     for ( var i = 1; row = refTab.rows[i]; i++ ) {
        var row = refTab.rows[i];
        tcredits = +tcredits + +row.cells[1].innerHTML;
        var ref = document.getElementById("tcred");
        ref.rows[0].cells[1].innerHTML = +tcredits;
 }
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
     var ref = document.getElementById("tcred");
      
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
     var ref = document.getElementById("tcred");
     overall = overall.toFixed(2);
     ref.rows[0].cells[5].innerHTML = +overall;
 }
}

function grade(){
    var ref = document.getElementById("tcred");
    var grade = ref.rows[0].cells[5].innerHTML;
    if (grade < 40){ref.rows[0].cells[7].innerHTML = "Fail";} 
    else if (grade < 50){ref.rows[0].cells[7].innerHTML = "3";}
    else if (grade < 60){ref.rows[0].cells[7].innerHTML = "2/2";}
    else if (grade < 70){ref.rows[0].cells[7].innerHTML = "2/1";}
    else if (grade >= 70){ref.rows[0].cells[7].innerHTML = "1";}
    else{ref.rows[0].cells[7].innerHTML = "ERROR";}
}

function help(){
    var ref = document.getElementById("tcred");
    var refTab = document.getElementById("tbl");
    var final = refTab.innerHTML.concat(ref.innerHTML);
    document.writeln(final);
}