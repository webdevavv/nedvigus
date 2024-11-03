var swiper = new Swiper(".m-slider__wrapper", {
  loop: true,
  effect: "fade",
  navigation: {
    nextEl: ".m-slider-next",
    prevEl: ".m-slider-prev",
  },
  pagination: {
    el: ".m-slider-pagination",
  },
});

$(document).ready(function () {
  $(".burger").click(function () {
    $(this).toggleClass("active");
    $(".sidebar").toggleClass("close");
    $(".sidebar-menu").toggleClass("close");
  });
  $(".sidebar-menu__nav ul li a").click(function () {});
  // $(".burger.active").click(function () {
  //   var container = $(".sidebar-menu");
  //   container.removeClass("close");
  //   $(".burger").removeClass("active");
  // });
  // click outside
  // $(document).mouseup(function (e) {
  //   var container = $(".sidebar-menu");
  //   container.removeClass("close");
  //   $(".burger").removeClass("active");
  // });
});

$(".toggle").click(function (e) {
  e.preventDefault();

  let $this = $(this);

  if ($this.next().hasClass("show")) {
    $this.removeClass("active");
    $this.next().removeClass("show");
    $this.next().slideUp(350);
  } else {
    $this.parent().parent().find("li .toggle").removeClass("active");
    $this.parent().parent().find("li .inner").removeClass("show");
    $this.parent().parent().find("li .inner").slideUp(350);
    $this.toggleClass("active");
    $this.next().toggleClass("show");
    $this.next().slideToggle(350);
  }
});

var sections = $("section"),
  nav = $(".sidebar-menu__nav"),
  mobNav = $(".mobile-nav"),
  mobNavMenu = $(".mobile-nav__item-navigation ul");

$(window).on("scroll", function () {
  var cur_pos = $(this).scrollTop();

  sections.each(function () {
    var top = $(this).offset().top,
      bottom = top + $(this).outerHeight();

    if (cur_pos >= top && cur_pos <= bottom) {
      nav.find("a").removeClass("active");
      sections.removeClass("active");

      $(this).addClass("active");
      nav.find('a[href="#' + $(this).attr("id") + '"]').addClass("active");
    }
  });
});

nav.find("a").on("click", function () {
  var $el = $(this),
    id = $el.attr("href");

  $(".burger").removeClass("active");
  $(".sidebar").removeClass("close");
  $(".sidebar-menu").removeClass("close");

  $("html, body").animate(
    {
      scrollTop: $(id).offset().top,
    },
    100
  );

  return false;
});

mobNav.find("a").on("click", function () {
  var $el = $(this),
    id = $el.attr("href");

  $("html, body").animate(
    {
      scrollTop: $(id).offset().top,
    },
    100
  );

  return false;
});

$(".mobile-nav__item-navigation-button").on("click", function (e) {
  e.preventDefault();
  $(this).toggleClass("show");
  $(".mobile-nav__item-navigation").toggleClass("show");
});
mobNavMenu.find("a").on("click", function () {
  var $el = $(this),
    id = $el.attr("href");

  $("html, body").animate(
    {
      scrollTop: $(id).offset().top,
    },
    100
  );
  $(".mobile-nav__item-navigation").removeClass("show");

  return false;
});

$(".top").on("click", function () {
  var $el = $(this),
    id = $el.attr("href");

  $("html, body").animate(
    {
      scrollTop: $(id).offset().top,
    },
    200
  );

  return false;
});

document.addEventListener("DOMContentLoaded", function () {
  var openModalBtn = document.querySelectorAll(".modal-open"),
    modalOverlay = document.querySelectorAll(".modal"),
    modalContent = document.querySelectorAll(".modal-content"),
    closeModalBtn = document.querySelectorAll(".modal-close");

  //open modal
  openModalBtn.forEach(function (item) {
    item.addEventListener("click", function (e) {
      e.preventDefault();
      document.getElementsByTagName("body")[0].classList.add("not-scroll");
      var modalId = this.getAttribute("data-modal-id"),
        modalElem = document.querySelector('.modal[id="' + modalId + '"]');
      modalElem.classList.add("open");
    });
  });

  //close modal on click on close-modal btn
  closeModalBtn.forEach(function (item) {
    item.addEventListener("click", function () {
      item.parentNode.closest(".modal").classList.remove("open");
      document.getElementsByTagName("body")[0].classList.remove("not-scroll");
    });
  });

  $(document).click(function (event) {
    //if you click on anything except the modal itself or the "open modal" link, close the modal
    if ($(".modal").hasClass("open")) {
      if ($(event.target).find(".modal-content").length !== 0) {
        $(event.target).closest(".modal").removeClass("open");
        document.getElementsByTagName("body")[0].classList.remove("not-scroll");
      }
    }
  });
});

function updateTextInput(val, id) {
  document.getElementById(`${id}`).value = val;
}
