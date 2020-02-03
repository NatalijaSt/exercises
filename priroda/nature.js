//var images =[];

// function preloader()
// {
//     var dogs01 = new Image();
//     dogs01.src = images
// }pod pretpostavkom da se sve slike isto zovu samo index je drugaciji
var indeksSlike = 1;
function prethodna(){
    if (indeksSlike == 1) {
        indeksSlike = 5;//=3 ako imamo 3 slike
    }else{
        indeksSlike--;
    }
    document.getElementById('nature').src = 
    'images/priroda' + indeksSlike + ".jfif";//ime foldera,fajla, dok se index sam dodaje
}
function sledeca(){
if (indeksSlike ==5){
    indeksSlike = 1;
}else{
    indeksSlike++;
}
document.getElementById('nature').src=
'images/priroda' + indeksSlike +".jfif";
}
