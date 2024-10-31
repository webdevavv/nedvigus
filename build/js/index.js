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
  nav = $(".sidebar-menu__nav");

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
