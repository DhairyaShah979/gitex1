for(let i=0;i<5;i++)
{
    for(let j=0;j<5;j++)
    {
        if(i==j)
        {
        document.write("*");
        }
        else if(j==4-i)
        {
            document.write("*");
        }
        else
        {
            document.write("&nbsp;");
        }
       
    }
    document.write("<br>");

    
}
