function renderTime()
{
    //Date
    let myDate = new Date();
    let year = myDate.getFullYear();
    let month = myDate.getMonth();
    let daym = myDate.Date();
    let montharray = new Array("January","Febuarary","March","April","May","June","July","August","September","October","November","December");

    //Time
     let currentTime = new Date();
     let h = currentTime.getHours();
     let m = currentTime.getMinutes();
     let s = currentTime.getSeconds();
     if(h==24)
     {
         h=0;
     }
     else if(h>12)
     {
         h=h-0;
     }
     if(h<10)
     {
         h="0" + h;
     }

     if(m<10)
     {
         m="0" + m;
     }

     if(s<10)
     {
         s="0" + s;
     }

     let myClock = document.getElementById("clockDisplay");
     myClock.textContent = "" +daym+ "" +montharray[month]+ "" +year+ "" +h+ "" +m+ ";" +s;
     myClock.innerText = "" +daym+ "" +montharray[month]+ "" +year+ "" +h+ "" +m+ ";" +s;
     setTimeout("renderTime()",1000);
}
//renderTime();
