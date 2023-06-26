var comp = document.getElementById("comp");
var user = document.getElementById("user");
var user_id = 0;
var win = document.getElementById("win_score");
var loss = document.getElementById("loss_score");
var draw = document.getElementById("draw_score");
var restart_button = document.getElementById("restart");
var modal = document.getElementById("modal");
var result_text = document.getElementById("text");
var sign = document.querySelectorAll(".click");
win_score = 0;
loss_score = 0;
draw_score = 0;
function choose_rock() {
  var comp_id = Math.floor(Math.random() * 3) + 1;
  user.innerHTML = `<i class="fa-solid fa-hand-fist"></i>`;
  user_id = 1;
  if (comp_id == 1) {
    comp.innerHTML = `<i class="fa-solid fa-hand-fist"></i>`;
  } else if (comp_id == 2) {
    comp.innerHTML = `<i class="fa-solid fa-hand"></i>`;
  } else {
    comp.innerHTML = `<i class="fa-solid fa-hand-peace"></i>`;
  }

  if (comp_id == user_id) {
    draw_score = draw_score + 1;
    draw.innerHTML = `${draw_score}`;
  } else if (comp_id == 1 && user_id == 2) {
    win_score = win_score + 1;
    win.innerHTML = `${win_score}`;
  } else if (comp_id == 2 && user_id == 3) {
    win_score = win_score + 1;
    win.innerHTML = `${win_score}`;
  } else if (comp_id == 3 && user_id == 1) {
    win_score = win_score + 1;
    win.innerHTML = `${win_score}`;
  } else if (comp_id == 2 && user_id == 1) {
    loss_score = loss_score + 1;
    loss.innerHTML = `${loss_score}`;
  } else if (comp_id == 3 && user_id == 2) {
    loss_score = loss_score + 1;
    loss.innerHTML = `${loss_score}`;
  } else if (comp_id == 1 && user_id == 3) {
    loss_score = loss_score + 1;
    loss.innerHTML = `${loss_score}`;
  }
  setTimeout(function () {
    end_game();
  }, 2000);
}
function choose_paper() {
  var comp_id = Math.floor(Math.random() * 3) + 1;
  user.innerHTML = `<i class="fa-solid fa-hand"></i>`;
  user_id = 2;
  if (comp_id == 1) {
    comp.innerHTML = `<i class="fa-solid fa-hand-fist"></i>`;
  } else if (comp_id == 2) {
    comp.innerHTML = `<i class="fa-solid fa-hand"></i>`;
  } else {
    comp.innerHTML = `<i class="fa-solid fa-hand-peace"></i>`;
  }

  if (comp_id == user_id) {
    draw_score = draw_score + 1;
    draw.innerHTML = `${draw_score}`;
  } else if (comp_id == 1 && user_id == 2) {
    win_score = win_score + 1;
    win.innerHTML = `${win_score}`;
  } else if (comp_id == 2 && user_id == 3) {
    win_score = win_score + 1;
    win.innerHTML = `${win_score}`;
  } else if (comp_id == 3 && user_id == 1) {
    win_score = win_score + 1;
    win.innerHTML = `${win_score}`;
  } else if (comp_id == 2 && user_id == 1) {
    loss_score = loss_score + 1;
    loss.innerHTML = `${loss_score}`;
  } else if (comp_id == 3 && user_id == 2) {
    loss_score = loss_score + 1;
    loss.innerHTML = `${loss_score}`;
  } else if (comp_id == 1 && user_id == 3) {
    loss_score = loss_score + 1;
    loss.innerHTML = `${loss_score}`;
  }
  setTimeout(function () {
    end_game();
  }, 2000);
}
function choose_scissor() {
  var comp_id = Math.floor(Math.random() * 3) + 1;
  user.innerHTML = `<i class="fa-solid fa-hand-peace"></i>`;
  user_id = 3;
  if (comp_id == 1) {
    comp.innerHTML = `<i class="fa-solid fa-hand-fist"></i>`;
  } else if (comp_id == 2) {
    comp.innerHTML = `<i class="fa-solid fa-hand"></i>`;
  } else {
    comp.innerHTML = `<i class="fa-solid fa-hand-peace"></i>`;
  }

  if (comp_id == user_id) {
    draw_score = draw_score + 1;
    draw.innerHTML = `${draw_score}`;
  } else if (comp_id == 1 && user_id == 2) {
    win_score = win_score + 1;
    win.innerHTML = `${win_score}`;
  } else if (comp_id == 2 && user_id == 3) {
    win_score = win_score + 1;
    win.innerHTML = `${win_score}`;
  } else if (comp_id == 3 && user_id == 1) {
    win_score = win_score + 1;
    win.innerHTML = `${win_score}`;
  } else if (comp_id == 2 && user_id == 1) {
    loss_score = loss_score + 1;
    loss.innerHTML = `${loss_score}`;
  } else if (comp_id == 3 && user_id == 2) {
    loss_score = loss_score + 1;
    loss.innerHTML = `${loss_score}`;
  } else if (comp_id == 1 && user_id == 3) {
    loss_score = loss_score + 1;
    loss.innerHTML = `${loss_score}`;
  }
  setTimeout(function () {
    end_game();
  }, 2000);
}
function end_game() {
  if (win_score + loss_score + draw_score >= 5) {
    // sign.forEach(removeAttribute("onclick"));
    // sign.forEach((e) => {
    //   e.removeAttribute("onclick");
    // });
    if (win_score > loss_score) {
      result_text.innerHTML = "You Won!!";
      modal.style.display = "flex";
    } else if (win_score < loss_score) {
      result_text.innerHTML = "You Lost!!";
      modal.style.display = "flex";
    } else if (win_score == loss_score) {
      result_text.innerHTML = "Its a Draw";
      modal.style.display = "flex";
    }
  }
}
function restart_fun() {
  modal.style.display = "none";
  win_score = 0;
  loss_score = 0;
  draw_score = 0;
  win.innerHTML = `${win_score}`;
  loss.innerHTML = `${loss_score}`;
  draw.innerHTML = `${draw_score}`;
  comp.innerHTML = `<i class="fa-solid fa-hand-fist"></i>`;
  user.innerHTML = `<i class="fa-solid fa-hand-fist"></i>`;
//   sign.setAttribute("onclick");
}
