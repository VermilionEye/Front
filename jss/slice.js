function truncate(str, maxlength) {
    if (str.length > maxlength) {
      return str.slice(0, maxlength - 1) + "…";
    }
    return str;
}
    
    var textElement = document.querySelector(".textslice");
    textElement.textContent = truncate(textElement.textContent, 10)

    var textElement1 = document.querySelector(".textslice1");
    textElement1.textContent = truncate(textElement1.textContent, 10)

    var textElement2 = document.querySelector(".textslice1");
    textElement2.textContent = truncate(textElement2.textContent, 10)

    var textElement3 = document.querySelector(".textslice3");
    textElement3.textContent = truncate(textElement3.textContent, 10)

    var textElement4 = document.querySelector(".textslice4");
    textElement4.textContent = truncate(textElement4.textContent, 10)