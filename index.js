document.getElementById('1').style.display = "block";
document.getElementById('2').style.display = "none";
document.getElementById('3').style.display = "none";
document.getElementById('4').style.display = "none";
let i = 1;
function left(){
    if(i > 1){
        document.getElementById(i).style.display = "none";
        i = i - 1;
        document.getElementById(i).style.display = "block";
    }
    else{
        document.getElementById(i).style.display = "none";
        i = 4;
        document.getElementById(i).style.display = "block";
    }
}
function right(){
    if(i < 4){
        document.getElementById(i).style.display = "none";
        i = i + 1;
        document.getElementById(i).style.display = "block";
    }
    else{
        document.getElementById(i).style.display = "none";
        i = 1;
        document.getElementById(i).style.display = "block";
    }
}