let arr=[{

    Name:"Ravindra",
    Sports: ["Chess", "Cricket"]

    },
{
    Name:"Ravi",
    Sports: ["Cricket", "Football","Chess"],
},
{
    Name: "Rishabh",
    Sports: ["Table-Tennis", "Football","Cricket"],
}];
let arr1=[];
let arr2=[];
let arr3=[];
let arr4=[];

arr.forEach((print)=>{
    print.Sports.forEach((print1)=>
    {
        if(print1==="Chess")
        {
            arr1.push(print.Name);
        }
        if(print1==="Cricket")
        {
            arr2.push(print.Name);
        }
        if(print1==="Football")
        {
            arr3.push(print.Name);
        }
        if(print1==="Table-Tennis")
        {
            arr4.push(print.Name);
        }
    })

});
document.write(`Chess: [${arr1}]`);
document.write(`Cricket: [${arr2}]`);
document.write(`FootBall: [${arr3}]`);
document.write(`Table-Tennis: [${arr4}]`);




