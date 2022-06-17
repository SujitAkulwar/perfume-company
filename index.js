let i = 1;
let n = 4;
for(let i = 2;i<n;i++){
    document.getElementById(i).style.display = "none";
}

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