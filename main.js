function sta(){
    document.querySelector("#container").style.display="block"
}
function math(){
document.querySelector("#mathcontainer").style.display="block"

}
function mathDown(){
    document.querySelector("#mathcontainer").style.display="none"
}
function nextFunction1(){
    interation =0
    document.querySelector("#carry2").style.display="block"
    document.querySelector("#carry1").style.display="none"
}

function previousfuntion1(){
    document.querySelector("#carry2").style.display="none"
    document.querySelector("#carry1").style.display="block"
}

//  var first = document.getElementById("anscon1").innerHTML
//  var second = document.getElementById("anscon2").innerHTML
//  var third= document.getElementById("anscon3").innerHTML
//  var firs = document.getElementById("anscon4").innerHTML
//  var correctans="first"
answer = "B"
function ans(){
    if(50 / 2 >=30){
        answer = "A 30" ;
        console.log("correct")
    }
    else if(50 / 2 <= 25 ){
        answer ="B 25";
        console.log("incorect")
    }
    // console.log("payed")
}