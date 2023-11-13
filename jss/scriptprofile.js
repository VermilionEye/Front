document.getElementById("save-button").style.display = "none";

document.getElementById("edit-button").addEventListener("click", function() {
  enableEdit();
});

document.getElementById("save-button").addEventListener("click", function() {
  saveChanges();
});

function enableEdit() {
  var paragraphs = document.querySelectorAll(".profile-details p");
  paragraphs.forEach(function(paragraph) {
    var text = paragraph.textContent;
    var input = document.createElement("input");
    input.value = text;
    paragraph.innerHTML = "";
    paragraph.appendChild(input);
  });

  document.getElementById("edit-button").style.display = "none"; 
  document.getElementById("save-button").style.display = "block";
}

function saveChanges() {
  var inputs = document.querySelectorAll(".profile-details input");
  inputs.forEach(function(input) {
    var text = input.value;
    var paragraph = document.createElement("p");
    paragraph.textContent = text;
    input.parentNode.replaceChild(paragraph, input);
  });

  document.getElementById("edit-button").style.display = "block";
  document.getElementById("save-button").style.display = "none"; 
}