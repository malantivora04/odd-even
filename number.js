function check(){

    var num = parseInt(document.getElementById('t1').value);

if(num%2==0){

    document.getElementById('p1').innerHTML= "number is EVEN";
}
else{
    document.getElementById('p1').innerHTML= "number is ODD";
}


}