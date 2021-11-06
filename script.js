var icon = document.getElementById("icon")
var dd = document.getElementById("dd")
var plus = document.getElementById("plus")

icon.onclick = function (){
    if(dd.style.display == "none"){
        dd.style.display = "100%";
    }
    else{
        dd.style.display = "none"
    }

}