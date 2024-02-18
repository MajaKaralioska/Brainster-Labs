// JS code for navigation responsive
let menuBox = document.getElementById("menuBox");
let menuIcon = document.getElementById("menuIcon");
menuIcon.onclick = function () {
  menuBox.classList.toggle("open-menu");
  if (menuBox.classList.contains("open-menu")) {
    menuIcon.src = "./img/close1.png";
  } else {
    menuIcon.src = "./img/open.png";
  }
};

// Code for validation
(function () {
  "use strict";
  window.addEventListener(
    "load",
    function () {
      // Fetch all the forms we want to apply custom Bootstrap validation styles to
      var forms = document.querySelectorAll(".needs-validation");
      var wrapperDropdown = document.getElementsByClassName("needs-validation");
      x = document.getElementsByClassName("select-selected");
      const newDivExist = document.getElementsByClassName("select-validated");

      var validation = Array.prototype.filter.call(forms, function (form) {
        form.addEventListener(
          "submit",
          function (event) {
            if (form.checkValidity() === false) {
              event.preventDefault();
              event.stopPropagation();
            }
            if (
              x[0].innerHTML === "Изберете тип на студент:" &&
              !newDivExist.length
            ) {
              const newDiv = document.createElement("div");
              newDiv.classList.add("select-validated");
              const newContent = document.createTextNode(
                "Ве молиме одберете тип на студент"
              );
              newDiv.appendChild(newContent);
              const currentDiv = document.getElementById("select-menu");
              currentDiv.appendChild(newDiv);
            }
            form.classList.add("was-validated");
          },
          false
        );
      });
    },
    false
  );
})();

// Input type text - your company number allows only numbers, your keyboard wont work on letters...
$(function () {
  $("input[name='numonly']").on("input", function (e) {
    $(this).val(
      $(this)
        .val()
        .replace(/[^0-9]/g, "")
    );
  });
});
function onlynum() {
  var fm = document.getElementById("form2");
  var ip = document.getElementById("num");
  var tag = document.getElementById("value");
  var res = ip.value;

  if (res != "") {
    if (isNaN(res)) {
      // Set input value empty
      ip.value = "";

      // Reset the form
      fm.reset();
      return false;
    } else {
      return true;
    }
  }
}
//enter you name -> you can only use alphabets but not numbers..
const alphaOnlyInput = document.querySelector("#alpha-only-input"),
  alphaOnlyPattern = new RegExp("^[a-zA-Z ]+$");

let previousValue = "";

alphaOnlyInput.addEventListener("input", (e) => {
  let currentValue = alphaOnlyInput.value;

  if (e.inputType.includes("delete") || alphaOnlyPattern.test(currentValue)) {
    previousValue = currentValue;
  }

  alphaOnlyInput.value = previousValue;
});

//last - code;
function check_input(event) {
  var key = event.keyCode;
  return (key >= 65 && key <= 90) || (key >= 97 && key <= 122) || key == 8;
}

// custum select Javascript code -for form-select

var x, i, j, l, ll, selElmnt, a, b, c;
/*look for any elements with the class "custom-select":*/
x = document.getElementsByClassName("custom-select");
l = x.length;
for (i = 0; i < l; i++) {
  selElmnt = x[i].getElementsByTagName("select")[0];
  ll = selElmnt.length;
  /*for each element, create a new DIV that will act as the selected item:*/
  a = document.createElement("DIV");
  a.setAttribute("class", "select-selected");
  a.innerHTML = selElmnt.options[selElmnt.selectedIndex].innerHTML;
  x[i].appendChild(a);
  /*for each element, create a new DIV that will contain the option list:*/
  b = document.createElement("DIV");
  b.setAttribute("class", "select-items select-hide");
  for (j = 1; j < ll; j++) {
    /*for each option in the original select element,
            create a new DIV that will act as an option item:*/
    c = document.createElement("DIV");
    c.innerHTML = selElmnt.options[j].innerHTML;
    c.addEventListener("click", function (e) {
      /*when an item is clicked, update the original select box,
                and the selected item:*/
      var y, i, k, s, h, sl, yl;
      s = this.parentNode.parentNode.getElementsByTagName("select")[0];
      sl = s.length;
      h = this.parentNode.previousSibling;
      for (i = 0; i < sl; i++) {
        if (s.options[i].innerHTML == this.innerHTML) {
          s.selectedIndex = i;
          h.innerHTML = this.innerHTML;
          y = this.parentNode.getElementsByClassName("same-as-selected");
          yl = y.length;
          for (k = 0; k < yl; k++) {
            y[k].removeAttribute("class");
          }
          this.setAttribute("class", "same-as-selected");
          break;
        }
      }
      h.click();
    });
    b.appendChild(c);
  }
  x[i].appendChild(b);
  a.addEventListener("click", function (e) {
    /*when the select box is clicked, close any other select boxes,
              and open/close the current select box:*/
    e.stopPropagation();
    closeAllSelect(this);
    this.nextSibling.classList.toggle("select-hide");
    this.classList.toggle("select-arrow-active");
  });
}
function closeAllSelect(elmnt) {
  /*a function that will close all select boxes in the document,
          except the current select box:*/
  var x,
    y,
    i,
    xl,
    yl,
    arrNo = [];
  x = document.getElementsByClassName("select-items");
  y = document.getElementsByClassName("select-selected");
  selectOnChange = document.getElementsByClassName("select-arrow-active");
  selectedInMenu = document.getElementsByClassName("select-selected");
  xl = x.length;
  yl = y.length;
  for (i = 0; i < yl; i++) {
    if (elmnt == y[i]) {
      arrNo.push(i);

      if (selectOnChange.length) {
        const newDivExist = document.getElementsByClassName("select-validated");
        if (
          selectedInMenu[0].innerHTML !== "Изберете тип на студент:" &&
          newDivExist.length &&
          newDivExist[0].innerHTML === "Ве молиме одберете тип на студент"
        ) {
          newDivExist[0].innerHTML = "";
        }
      }
    } else {
      y[i].classList.remove("select-arrow-active");
    }
  }
  for (i = 0; i < xl; i++) {
    if (arrNo.indexOf(i)) {
      x[i].classList.add("select-hide");
    }
  }
}

/*if the user clicks anywhere outside the select box,
        then close all select boxes:*/
document.addEventListener("click", closeAllSelect);
