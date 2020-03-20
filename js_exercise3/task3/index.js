function func1()
{
    alert("Greetings Mr.X Please choose the surprise box");
}
function box1() {
    document.getElementById('third').innerHTML = "OOPS Something Went Wrong!!!"
}
setInterval(
  function() {
    let randomColor1 = Math.floor(Math.random() * 256);
    document.getElementById('two').style.background = "#" + randomColor1;
    let randomColor2 = Math.floor(Math.random() * 256);
    document.getElementById('two').style.background = "#" + randomColor2;
    let randomColor3 = Math.floor(Math.random() * 256);
    document.getElementById('two').style.background = "#" + randomColor3;
  }, 3000);



  document.onkeydown = function(e) {
    switch (e.keyCode) {
        case 37:
            previous()
            break;
        case 38:
            next();
            break;
        case 39:
            next();
            break;
        case 40:
            previous();
            break;
    }
};

let colors = [ 'red', 'green', 'yellow', 'blue' ,'AliceBlue', 'Aqua' , "Aquamarine ","BlueViolet" ,"IndianRed","DarkSalmon","Cyan","DarkCyan" ];
let count=-1;
function next(){
    if(count<-1 || count==colors.length-1){
        count= -1;
    }
    count++;
    four.style.backgroundColor=colors[count];    
     
    

}

function previous(){

if(count == 0){
    count=colors.length;
}

count--;
four.style.backgroundColor=colors[count];
 
}
