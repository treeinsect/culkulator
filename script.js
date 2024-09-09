document.querySelector('#button').addEventListener('click',countFilms);

function countFilms(){

    var count = 0;
    var percent = 0;

    for (let i = 1; i < 5; i++){
        var checkbox = document.getElementById(i);
        if (checkbox.checked == true){
            count++;
        }
        percent = (count/i)*100;
    }

    console.log(percent);

    const result = document.getElementById("result");
    const node = document.createTextNode(percent+"% watched");
    result.appendChild(node);
    return;

}