// for(let i=0;i<5;i++)
// {
//     for(let j=5;j>i;j--)
// {
        
//         document.write("&nbsp; ");

// }

//     document.write("*");

//     }
//     document.write("<br>");
   
for(let i=1; i<=5; i++)
{
    
    for(let j=i; j<5; j++)
    {
        document.write("&nbsp;  ");
    }

    
    for(let j=1; j<=i; j++)
    {
        document.write("*");
    }

    
    document.write("<br>");
}


