document.getElementById('1').style.display = "block";
document.getElementById('2').style.display = "none";
document.getElementById('3').style.display = "none";
document.getElementById('4').style.display = "none";
let i = 1;
function left(){
    if(i == 1){
        document.getElementById('1').style.display = "none";
        document.getElementById('4').style.display = "block";
        i = 4;
    }
    else if(i == 2){
        document.getElementById('2').style.display = "none";
        document.getElementById('1').style.display = "block";
        i = 1;
    }
    else if(i == 3){
        document.getElementById('3').style.display = "none";
        document.getElementById('2').style.display = "block";
        i = 2;
    }
    else{
        document.getElementById('4').style.display = "none";
        document.getElementById('3').style.display = "block";
        i = 3;
    }
}
function right(){
    if(i == 1){
        document.getElementById('1').style.display = "none";
        document.getElementById('2').style.display = "block";
        i = 2;
    }
    else if(i == 2){
        document.getElementById('2').style.display = "none";
        document.getElementById('3').style.display = "block";
        i = 3;
    }
    else if(i == 3){
        document.getElementById('3').style.display = "none";
        document.getElementById('4').style.display = "block";
        i = 4;
    }
    else{
        document.getElementById('4').style.display = "none";
        document.getElementById('1').style.display = "block";
        i = 1;
    }
}