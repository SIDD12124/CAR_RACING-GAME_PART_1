canvas = document.getElementById("myCanvas");
ctx=canvas.getContext("2d");

car_1_img = "car1.png";
car_1_height = 70;
car_1_width = 120;
car_1_x = 10;
car_1_y = 10;

car_2_img = "car2.png";
car_2_height = 70;
car_2_width = 120;
car_2_x = 10;
car_2_y = 100;
backgroundimg = "race.jpg";

function add() {
    background_imgTag  = new Image();
    background_imgTag.onload = uploadbackground;
    background_imgTag.src = backgroundimg;

    car1_imgTag = new Image();
    car1_imgTag.onload = uploadCar1;
    car1_imgTag.src = car_1_img;

    car2_imgTag = new Image();
    car2_imgTag.onload = uploadCar2;
    car2_imgTag.src = car_2_img;
}

function uploadbackground() {
   ctx.drawImage(background_imgTag, 0 , 0 , canvas.width , canvas.height);
}

function uploadCar1() {
    ctx.drawImage(car1_imgTag, car_1_x , car_1_y , car_1_width , car_1_height);
}

function uploadCar2() {
    ctx.drawImage(car2_imgTag, car_2_x , car_2_y , car_2_width , car_2_height);
}


