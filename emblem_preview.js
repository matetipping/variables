function change_gui(prev, next) {
  document.getElementById(prev).style.display = "none";
  document.getElementById(next).style.display = "inline-block";
}

function set_layer_des(id, design) {
  document.getElementById(id + "_des").value = design;
  document.getElementById(id + "_design").style.backgroundPosition = design;
}

function set_back_col(colour) {
  document.getElementById("back_col").value = colour;
  document.getElementById("emblem").style.background = colour;
}

function set_layer_col(id, colour) {
  document.getElementById(id + "_col").value = colour;
  document.getElementById(id + "_design").style.backgroundImage = "url('" + colour + "')";
}

function rotate_layer(id, no_degrees) {
  var value_deg = parseInt(document.getElementById(id + "_rot").value) + no_degrees;

  if (value_deg >= 360) {
    value_deg = value_deg - 360;
  } else if (value_deg < 0) {
    value_deg = value_deg + 360;
  }

  document.getElementById(id + "_rot").value = value_deg;
  document.getElementById(id + "_design").style.transform = "rotate(" + value_deg + "deg)";
}

function flip_design_layers(idA, idB) {
  var temp_col = document.getElementById(idA + "_col").value;
  var temp_des = document.getElementById(idA + "_des").value;
  var temp_rot = document.getElementById(idA + "_rot").value;
  var temp_back = document.getElementById(idA + "_design").style.background;
  var temp_trans = document.getElementById(idA + "_design").style.transform;
  
  document.getElementById(idA + "_design").style.background = document.getElementById(idB + "_design").style.background;
  document.getElementById(idA + "_design").style.transform = document.getElementById(idB + "_design").style.transform;
  document.getElementById(idA + "_col").value = document.getElementById(idB + "_col").value;
  document.getElementById(idA + "_des").value = document.getElementById(idB + "_des").value;
  document.getElementById(idA + "_rot").value = document.getElementById(idB + "_rot").value;

  document.getElementById(idB + "_design").style.background = temp_back;
  document.getElementById(idB + "_design").style.transform = temp_trans;
  document.getElementById(idB + "_col").value = temp_col;
  document.getElementById(idB + "_des").value = temp_des;
  document.getElementById(idB + "_rot").value = temp_rot;
}

function flip_design_layers_col(idA, idB) {
  var temp_col = document.getElementById(idA + "_col").value;
  var temp_back = document.getElementById(idA + "_design").style.backgroundImage;

  document.getElementById(idA + "_design").style.backgroundImage = document.getElementById(idB + "_design").style.backgroundImage;
  document.getElementById(idA + "_col").value = document.getElementById(idB + "_col").value;

  document.getElementById(idB + "_design").style.backgroundImage = temp_back;
  document.getElementById(idB + "_col").value = temp_col;
}

function randomise_all() {
  set_random_back_col();
  set_random_layer_col("low");
  set_random_layer_col("top");
  set_random_layer_des("low");
  set_random_layer_des("top");
  set_random_layer_rot("low");
  set_random_layer_rot("top");
}

function random_num(a_number) {
  return Math.floor(Math.random() * a_number) + 1;
}

function set_random_back_col() {
  switch(random_num(49)) {
    case 1:
      set_back_col("rgb(151, 13, 36)")
      break;
    case 2:
      set_back_col("rgb(233, 58, 35)")
      break;
    case 3:
      set_back_col("rgb(210, 52, 12)")
      break;
    case 4:
      set_back_col("rgb(255, 132, 85)")
      break;
    case 5:
      set_back_col("rgb(237, 96, 48)")
      break;
    case 6:
      set_back_col("rgb(228, 108, 10)")
      break;
    case 7:
      set_back_col("rgb(173, 119, 79)")
      break;
    case 8:
      set_back_col("rgb(61, 29, 11)")
      break;
    case 9:
      set_back_col("rgb(236, 164, 20)")
      break;
    case 10:
      set_back_col("rgb(255, 204, 0)")
      break;
    case 11:
      set_back_col("rgb(255, 238, 17)")
      break;
    case 12:
      set_back_col("rgb(189, 214, 26)")
      break;
    case 13:
      set_back_col("rgb(130, 132, 34)")
      break;
    case 14:
      set_back_col("rgb(31, 188, 0)")
      break;
    case 15:
      set_back_col("rgb(51, 119, 38)")
      break;
    case 16:
      set_back_col("rgb(158, 211, 131)")
      break;
    case 17:
      set_back_col("rgb(113, 226, 187)")
      break;
    case 18:
      set_back_col("rgb(81, 179, 174)")
      break;
    case 19:
      set_back_col("rgb(175, 234, 223)")
      break;
    case 20:
      set_back_col("rgb(31, 141, 157)")
      break;
    case 21:
      set_back_col("rgb(135, 187, 229)")
      break;
    case 22:
      set_back_col("rgb(21, 113, 189)")
      break;
    case 23:
      set_back_col("rgb(23, 55, 94)")
      break;
    case 24:
      set_back_col("rgb(16, 37, 63)")
      break;
    case 25:
      set_back_col("rgb(57, 63, 96)")
      break;
    case 26:
      set_back_col("rgb(124, 105, 175)")
      break;
    case 27:
      set_back_col("rgb(60, 48, 82)")
      break;
    case 28:
      set_back_col("rgb(29, 23, 39)")
      break;
    case 29:
      set_back_col("rgb(159, 96, 193)")
      break;
    case 30:
      set_back_col("rgb(228, 103, 239)")
      break;
    case 31:
      set_back_col("rgb(242, 96, 162)")
      break;
    case 32:
      set_back_col("rgb(242, 242, 242)")
      break;
    case 33:
      set_back_col("rgb(217, 217, 217)")
      break;
    case 34:
      set_back_col("rgb(127, 127, 127)")
      break;
    case 35:
      set_back_col("rgb(89, 89, 89)")
      break;
    default:
      set_back_col("rgb(13, 13, 13)")
  }
}

function set_random_layer_col(id) {
  switch(random_num(60)) {
    case 1:
      set_layer_col(id, "http://b3.ifrm.com/30609/91/0/p3003806/emblemdesigns_maroon.png")
      break;
    case 2:
      set_layer_col(id, "http://b3.ifrm.com/30609/91/0/p3003763/emblemdesigns_red.png")
      break;
    case 3:
      set_layer_col(id, "http://b3.ifrm.com/30609/91/0/p3003809/emblemdesigns_tomato.png")
      break;
    case 4:
      set_layer_col(id, "http://b3.ifrm.com/30609/91/0/p3003839/emblemdesigns_salmon.png")
      break;
    case 5:
      set_layer_col(id, "http://b3.ifrm.com/30609/91/0/p3003840/emblemdesigns_tangerine.png")
      break;
    case 6:
      set_layer_col(id, "http://b3.ifrm.com/30609/91/0/p3003807/emblemdesigns_orange.png")
      break;
    case 7:
      set_layer_col(id, "http://b3.ifrm.com/30609/91/0/p3003838/emblemdesigns_lightbrown.png")
      break;
    case 8:
      set_layer_col(id, "http://b3.ifrm.com/30609/91/0/p3003805/emblemdesigns_brown.png")
      break;
    case 9:
      set_layer_col(id, "http://b3.ifrm.com/30609/91/0/p3003804/emblemdesigns_amber.png")
      break;
    case 10:
      set_layer_col(id, "http://b3.ifrm.com/30609/91/0/p3003812/emblemdesigns_gold.png")
      break;
    case 11:
      set_layer_col(id, "http://b3.ifrm.com/30609/91/0/p3003817/emblemdesigns_yellow.png")
      break;
    case 12:
      set_layer_col(id, "http://b3.ifrm.com/30609/91/0/p3003814/emblemdesigns_lime.png")
      break;
    case 13:
      set_layer_col(id, "http://b3.ifrm.com/30609/91/0/p3003815/emblemdesigns_olive.png")
      break;
    case 14:
      set_layer_col(id, "http://b3.ifrm.com/30609/91/0/p3003813/emblemdesigns_green.png")
      break;
    case 15:
      set_layer_col(id, "http://b3.ifrm.com/30609/91/0/p3003811/emblemdesigns_forest.png")
      break;
    case 16:
      set_layer_col(id, "http://b3.ifrm.com/30609/91/0/p3003841/emblemdesigns_mint.png")
      break;
    case 17:
      set_layer_col(id, "http://b3.ifrm.com/30609/91/0/p3003810/emblemdesigns_cyan.png")
      break;
    case 18:
      set_layer_col(id, "http://b3.ifrm.com/30609/91/0/p3003816/emblemdesigns_teal.png")
      break;
    case 19:
      set_layer_col(id, "http://b3.ifrm.com/30609/91/0/p3003818/emblemdesigns_aqua.png")
      break;
    case 20:
      set_layer_col(id, "http://b3.ifrm.com/30609/91/0/p3003819/emblemdesigns_azure.png")
      break;
    case 21:
      set_layer_col(id, "http://b3.ifrm.com/30609/91/0/p3003823/emblemdesigns_lightblue.png")
      break;
    case 22:
      set_layer_col(id, "http://b3.ifrm.com/30609/91/0/p3003820/emblemdesigns_blue.png")
      break;
    case 23:
      set_layer_col(id, "http://b3.ifrm.com/30609/91/0/p3003821/emblemdesigns_darkblue.png")
      break;
    case 24:
      set_layer_col(id, "http://b3.ifrm.com/30609/91/0/p3003824/emblemdesigns_navy.png")
      break;
    case 25:
      set_layer_col(id, "http://b3.ifrm.com/30609/91/0/p3003822/emblemdesigns_glaucous.png")
      break;
    case 26:
      set_layer_col(id, "http://b3.ifrm.com/30609/91/0/p3003826/emblemdesigns_lightpurple.png")
      break;
    case 27:
      set_layer_col(id, "http://b3.ifrm.com/30609/91/0/p3003829/emblemdesigns_purple.png")
      break;
    case 28:
      set_layer_col(id, "http://b3.ifrm.com/30609/91/0/p3003825/emblemdesigns_darkpurple.png")
      break;
    case 29:
      set_layer_col(id, "http://b3.ifrm.com/30609/91/0/p3003830/emblemdesigns_violet.png")
      break;
    case 30:
      set_layer_col(id, "http://b3.ifrm.com/30609/91/0/p3003827/emblemdesigns_magenta.png")
      break;
    case 31:
      set_layer_col(id, "http://b3.ifrm.com/30609/91/0/p3003828/emblemdesigns_pink.png")
      break;
    case 32:
      set_layer_col(id, "http://b3.ifrm.com/30609/91/0/p3003755/emblemdesigns_white.png")
      break;
    case 33:
      set_layer_col(id, "http://b3.ifrm.com/30609/91/0/p3003754/emblemdesigns_silver.png")
      break;
    case 34:
      set_layer_col(id, "http://b3.ifrm.com/30609/91/0/p3003753/emblemdesigns_grey.png")
      break;
    case 35:
      set_layer_col(id, "http://b3.ifrm.com/30609/91/0/p3003752/emblemdesigns_charcoal.png")
      break;
    case 36:
      set_layer_col(id, "http://b3.ifrm.com/30609/91/0/p3003751/emblemdesigns_black.png")
      break;
    default:
      set_layer_col(id, "none")
  }
}

function set_random_layer_des(id) {
  switch(random_num(24)) {
    case 1:
      set_layer_des(id, "0px 0px")
      break;
    case 2:
      set_layer_des(id, "0px -150px")
      break;
    case 3:
      set_layer_des(id, "0px -300px")
      break;
    case 4:
      set_layer_des(id, "0px -450px")
      break;
    case 5:
      set_layer_des(id, "-150px 0px")
      break;
    case 6:
      set_layer_des(id, "-150px -150px")
      break;
    case 7:
      set_layer_des(id, "-150px -300px")
      break;
    case 8:
      set_layer_des(id, "-150px -450px")
      break;
    case 9:
      set_layer_des(id, "-300px 0px")
      break;
    case 10:
      set_layer_des(id, "-300px -150px")
      break;
    case 11:
      set_layer_des(id, "-300px -300px")
      break;
    case 12:
      set_layer_des(id, "-300px -450px")
      break;
    case 13:
      set_layer_des(id, "-450px 0px")
      break;
    case 14:
      set_layer_des(id, "-450px -150px")
      break;
    case 15:
      set_layer_des(id, "-450px -300px")
      break;
    case 16:
      set_layer_des(id, "-450px -450px")
      break;
    case 17:
      set_layer_des(id, "-600px 0px")
      break;
    case 18:
      set_layer_des(id, "-600px -150px")
      break;
    case 19:
      set_layer_des(id, "-600px -300px")
      break;
    case 20:
      set_layer_des(id, "-600px -450px")
      break;
    case 21:
      set_layer_des(id, "-750px 0px")
      break;
    case 22:
      set_layer_des(id, "-750px -150px")
      break;
    case 23:
      set_layer_des(id, "-750px -300px")
      break;
    default:
      set_layer_des(id, "-750px -450px")
  }
}

function set_random_layer_rot(id) {
  switch(random_num(6)) {
    case 1:
      rotate_layer(id, 90)
      break;
    case 2:
      rotate_layer(id, 180)
      break;
    case 3:
      rotate_layer(id, -90)
      break;
    default:
  }
}
