//var images =[];

// function preloader()
// {
//     var dogs01 = new Image();
//     dogs01.src = images
// }pod pretpostavkom da se sve slike isto zovu samo index je drugaciji
var indeksSlike = 1;
function prethodna(){
    if (indeksSlike == 1) {
        indeksSlike = 3;//=5 ako imamo 5 slika
    }else{
        indeksSlike--;
    }
    document.getElementById('dog').src = 
    'images/priroda' + indeks+ ".jfif";//ime foldera,fajla, dok se index sam dodaje
}
function sledeca(){
if (indeksSlike ==3){
    indeksSlike = 1;
}else{
    indeksSlike++;
}
document.getElementById('dog').src=
'images/priroda' + indeksSlike +".jfif";
}