canvas=document.getElementById("mycanvas");
ctx=canvas.getContext("2d");

rw=100;
rh=90;
rx=100;
ry=500;

function add(){
    bg=new Image();
    bg.onload=upload_bg;
    bg.src="car.jpg";
    rv=new Image();
    rv.onload=upload_rv;
    rv.src="car 2.jpg";
}

 function upload_bg(){
     ctx.drawImage(bg,0,0,canvas.width,canvas.height);
 }

 
 function upload_rv(){
    ctx.drawImage(rv,rx,ry,rw,rh);
}


window.addEventListener("keydown",my_kd);
function my_kd(e) {
   kp = e.keyCode;
    console.log(kp);
    if(kp=="38")
    {
       up();
       console.log("up");

    }
     if(kp=="40")
    {
       down();
       console.log("down");
       
    }
      if(kp=="37")
    {
       left();
       console.log("left");
       
    }  
     if(kp=="39")
    {
       right();
       console.log("right");
       
    }
}
function up() {
    if(ry>=0){
        ry=ry-10;
        upload_bg();
        upload_rv();
    }
}
function down() {
    if(ry<=500){
        ry=ry+10;
        upload_bg();
        upload_rv();
    }
}
function left() {
    if(rx>=0){
        rx=rx-10;
        upload_bg();
        upload_rv();
    }
}
function right() {
    if(rx<=700){
        rx=rx+10;
        upload_bg();
        upload_rv();
    }
}

