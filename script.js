document.querySelector('#button').addEventListener('click',countFilms);

function countFilms(){

    //init variables
    var count = 0;
    var percent = 0;
    var lenFilms = document.querySelector("#films").getElementsByTagName("li").length;

    //go through the checkboxes and see if they are checked
    for (let i = 1; i = lenFilms; i++){
        var checkbox = document.getElementById(i);
        if (checkbox.checked == true){
            count++;
        }
        percent = (count/i)*100;
    }

    //display the % of boxes checked to the user
    const result = document.getElementById("result");
    while (result.firstChild){
        result.removeChild(result.firstChild);
    }
    const node = document.createTextNode(percent+"% watched");
    result.appendChild(node);

    return;

}