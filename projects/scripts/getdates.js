const today = new Date().getFullYear();
document.querySelector("#currentyear").innerHTML = today;

document.getElementById("lastmodified").innerHTML = `Last modification: ${document.lastModified}`;