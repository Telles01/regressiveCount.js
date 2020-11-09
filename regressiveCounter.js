var count=new Number ();
var count=11;

function start(){
  if((count - 1) >= 0){
    count=count -1;
    tempo.innerText=count;
    setTimeout('start();',1000);
  }
}