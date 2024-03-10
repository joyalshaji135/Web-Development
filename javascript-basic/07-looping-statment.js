let limit = 10;
for(i=1; i<=limit; i++)
{
    // console.log(i);
}

let str = "";
for(i=1; i<=5; i++)
{
    for(j=1; j<=5; j++)
    {
        if(i>=j)
        {
            str += "*";
        }
    }
    str += "\n"
}
console.log(str);