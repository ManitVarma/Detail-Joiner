full = [];

function showSentence(){
    var name = document.getElementById("name").innerHTML;
    var age = document.getElementById("age").innerHTML;
    var hobby = document.getElementById("hobby").innerHTML;
    var SD = document.getElementById("S/D").innerHTML;

    full.join(name, age, hobby, SD);

    document.getElementsByName(full).innerHTML = "phg";


}