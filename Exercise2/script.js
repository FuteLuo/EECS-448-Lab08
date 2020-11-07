var i = 0;
var images = [];

images[0] = 'apple.jpg';
images[1] = 'orange.jpg';
images[2] = 'grape.jpg';
images[3] = 'strawberry.jpg';
images[4] = 'banana.jpg';

function Next()
{
    if(i < images.length -1 )
    {
        document.fruit.src = images[i + 1];
        i++;
    }
    else
    {
        document.fruit.src = images[0];
        i = 0;
    }
}

function Perivous()
{
    if(i > 0 )
    {
        document.fruit.src = images[i-1];
        i--;
    }
    else
    {   
        document.fruit.src = images[images.length - 1];
        i = images.length - 1;
    }
}