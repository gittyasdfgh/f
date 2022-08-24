nosex=0;
nosey=0;

function preload()
{
rednose=loadImage('https://i.postimg.cc/TP22Fh8w/moustache-PNG18.png');

}

{
}
function setup()
{
canvas=createCanvas(300,250);
canvas.center();
}
function draw()
{


}
function takesnap()
{
    function modelLoaded()
{console.log('poseNetmodelisloaded');}
function gotPoses(results)
{
    if(results.length>0)
    {
console.log(results);
nosex=results[0].pose.nose.x-15;
nosey=results[0].pose.nose.y-15;
    }
}
}
function draw()
{
image(video,0,0,300,250);
fill('red');
stroke('yellow');
//circle(nosex,nosey,20);
image(rednose,nosex,nosey,30,30)
}
function takesnap()
{

}
