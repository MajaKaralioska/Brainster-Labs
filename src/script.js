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
// Javascript for checkboxes changeing color

$(document).ready(function () {
  $("#filter-marketing").click(function () {
    if ($(this).is(":checked")) {
      $(this).parent().addClass("color-red");
      $("#filter-coding").parent().removeClass("color-red");
      $("#filter-design").parent().removeClass("color-red");
    } else {
      $(this).parent().removeClass("color-red");
    }
  });
});
$(document).ready(function () {
  $("#filter-coding").click(function () {
    if ($(this).is(":checked")) {
      $(this).parent().addClass("color-red");
      $("#filter-marketing").parent().removeClass("color-red");
      $("#filter-design").parent().removeClass("color-red");
    } else {
      $(this).parent().removeClass("color-red");
    }
  });
});
$(document).ready(function () {
  $("#filter-design").click(function () {
    if ($(this).is(":checked")) {
      $(this).parent().addClass("color-red");
      $("#filter-coding").parent().removeClass("color-red");
      $("#filter-marketing").parent().removeClass("color-red");
    } else {
      $(this).parent().removeClass("color-red");
    }
  });
});

// JavaScript for filter cards
document
  .querySelector("#filter-marketing")
  .addEventListener("change", filterMarketing);
document
  .querySelector("#filter-coding")
  .addEventListener("change", filterCoding);
document
  .querySelector("#filter-design")
  .addEventListener("change", filterDesign);
// const btnLoadMore = document.querySelector("#loadmore");

function filterMarketing() {
  hideAllCards();

  if (document.querySelector("#filter-marketing").checked) {
    var marketingCards = document.querySelectorAll(".marketing");
    marketingCards.forEach((marketingCard) => {
      marketingCard.style.display = "inline-block";
    });
    var card1 = document.querySelectorAll(".marketingcard");
    card1.forEach((card) => {
      card.style.display = "block";
    });
    var card2 = document.querySelectorAll(".codingcard");
    card2.forEach((card) => {
      card.style.display = "none";
    });
    var card2 = document.querySelectorAll(".designcard");
    card2.forEach((card) => {
      card.style.display = "none";
    });
    document.querySelector("#loadmore").style.display = "none";
    document.querySelector("#filter-design").checked = false;
    document.querySelector("#filter-coding").checked = false;
  } else {
    showAllCards();
  }
}

function filterCoding() {
  hideAllCards();

  if (document.querySelector("#filter-coding").checked) {
    var codingCards = document.querySelectorAll(".coding");
    codingCards.forEach((codingCard) => {
      codingCard.style.display = "inline-block";
    });
    var codingCards = document.querySelectorAll(".unvisible");
    codingCards.forEach((codingCard) => {
      codingCard.style.display = "inline-block";
    });
    var card1 = document.querySelectorAll(".marketingcard");
    card1.forEach((card) => {
      card.style.display = "none";
    });
    var card2 = document.querySelectorAll(".codingcard");
    card2.forEach((card) => {
      card.style.display = "block";
    });
    var card2 = document.querySelectorAll(".designcard");
    card2.forEach((card) => {
      card.style.display = "none";
    });
    document.querySelector("#loadmore").style.display = "none";
    document.querySelector("#filter-design").checked = false;
    document.querySelector("#filter-marketing").checked = false;
  } else {
    showAllCards();
  }
}

function filterDesign() {
  hideAllCards();

  if (document.querySelector("#filter-design").checked) {
    var designCards = document.querySelectorAll(".design");
    designCards.forEach((designCard) => {
      designCard.style.display = "inline-block";
    });
    var codingCards = document.querySelectorAll(".unvisible");
    codingCards.forEach((codingCard) => {
      codingCard.style.display = "none";
    });
    var card1 = document.querySelectorAll(".marketingcard");
    card1.forEach((card) => {
      card.style.display = "none";
    });
    var card2 = document.querySelectorAll(".codingcard");
    card2.forEach((card) => {
      card.style.display = "none";
    });
    var card2 = document.querySelectorAll(".designcard");
    card2.forEach((card) => {
      card.style.display = "block";
    });
    document.querySelector("#loadmore").style.display = "none";
    document.querySelector("#filter-coding").checked = false;
    document.querySelector("#filter-marketing").checked = false;
  } else {
    showAllCards();
  }
}

function hideAllCards() {
  var allCards = document.querySelectorAll(".list-element ");

  allCards.forEach((card) => {
    card.style.display = "none";
  });
}

function showAllCards() {
  var allCards = document.querySelectorAll(".list-element ");

  allCards.forEach((card) => {
    card.style.display = "inline-block";
  });
}

//  CODE FOR PAGINATION RESPONSIVE ONLY FOR MOBILE
const loadmore = document.querySelector("#loadmore");
let currentItems = 6;

loadmore.addEventListener("click", (e) => {
  const elementList = [...document.querySelectorAll(".list .list-element")];
  for (let i = currentItems; i < currentItems + 6; i++) {
    if (elementList[i]) {
      elementList[i].style.display = "block";
    }
  }
  currentItems += 6;
  // Load more button will be hidden after list fully loaded
  if (currentItems >= elementList.length) {
    event.target.style.display = "none";
  }
});
