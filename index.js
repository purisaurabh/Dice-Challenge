var random_number_1  = Math.floor(Math.random()*6) + 1;
var random_dice_img_1 = "dice" + random_number_1 + ".png";
var random_img_source_1 = "dice_images/" + random_dice_img_1 ;
var img1 = document.querySelectorAll("img")[0];
img1.setAttribute("src" , random_img_source_1);

var random_number_2  = Math.floor(Math.random()*6) + 1;
var random_dice_img_2 = "dice" + random_number_2 + ".png";
var random_img_source_2 = "dice_images/" + random_dice_img_2 ;
var img2 = document.querySelectorAll("img")[1];
img2.setAttribute("src" , random_img_source_2);


if(random_number_1 > random_number_2)
{
    document.querySelector("h1").innerHTML = "Player 1 Wins!";
}

else if(random_number_2 > random_number_1)
{
    document.querySelector("h1").innerHTML = "Player 2 Wins!";
}

else
{
    document.querySelector("h1").innerHTML = "Draw !";
}