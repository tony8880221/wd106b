// JavaScript source code

function m357(a, b)
{
    for (i = a; i <= b; i++)
    {
        if (i % 3 == 0 || i % 5 == 0 || i % 7 == 0)
        {
            console.log("", i);
        }
    }
}
m357(10, 15);