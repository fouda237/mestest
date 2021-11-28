
// Get the modal
var modal = document.getElementById("myModal");

// Get the button that opens the modal
var btn = document.getElementById("myBtn");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks the button, open the modal 
btn.onclick = function() {
  modal.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}
var selectedRow = null;
function onFormSubmit(e){
    alert("yyyyyyyyyooooooooooo");
    event.preventDefault();
    var formData = readFormData();
    if(selectedRow === null){
        insertNewRecord(formData);
    }
    else{
        updateRecord(formData);
    }
    resetForm();
}

//Retrieve the data
function readFormData(){
    var formData = {};
    formData["dte"] = document.getElementById("dte").value;
    formData["etat"] = document.getElementById("etat").value;
    formData["nom"] = document.getElementById("nom").value;
    formData["prenom"] = document.getElementById("prenom").value;
    formData["user"] = document.getElementById("user").value;
    formData["matricule"] = document.getElementById("matricule").value;
   
    return formData;
}
 Math.random();
var rand=Math.floor(Math.random()*10)+1;

//Insert the data
function insertNewRecord(data){
    var table = document.getElementById("storeList").getElementsByTagName('tbody')[0];
    var newRow = table.insertRow(table.length);
    var cell1 = newRow.insertCell(0);
        cell1.innerHTML = rand;
    var cell2 = newRow.insertCell(1);
        cell2.innerHTML = data.dte;
    var cell3 = newRow.insertCell(2);
        cell3.innerHTML = data.etat;
    var cell4 = newRow.insertCell(3);
        cell4.innerHTML = data.nom;
    var cell5 = newRow.insertCell(4);
        cell5.innerHTML = data.prenom;
    var cell6 = newRow.insertCell(5);
        cell6.innerHTML = data.user;
    var cell7 = newRow.insertCell(6);
        cell7.innerHTML = data.matricule;
    var cell8 = newRow.insertCell(7);
        cell8.innerHTML = ` <i class="far fa-trash-alt" onClick='onDelete(this)'></i><button onClick='onDelete(this)'>Delete</button>`
}
