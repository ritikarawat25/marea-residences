(function floorSwipe() {
  var swiperMain = new Swiper(".floorplan__swiper-main", {
    spaceBetween: 20,
    slidesPerView: 1,
    effect: "creative",
    allowTouchMove: false,
    navigation: {
      nextEl: ".floorplan__swiper-main-btn-next",
      prevEl: ".floorplan__swiper-main-btn-prev",
    },
  });

  var mainSlides = document.querySelectorAll(
    ".floorplan__swiper-main-slide.swiper-slide"
  );

  mainSlides.forEach(function (mainSlide) {
    var slider = mainSlide.querySelector(".floorplan__swiper");
    var thumb = mainSlide.querySelector(".floorplan__swiper-thumb");

    var swiperThumb = new Swiper(thumb, {
      slidesPerView: "auto",
      freeMode: true,
      spaceBetween: 10,
      allowTouchMove: true,
      watchSlidesProgress: true,
      direction: "vertical",
      navigation: {
        nextEl: ".floorplan__swiper-btn-next",
        prevEl: ".floorplan__swiper-btn-prev",
      },
    });

    var swiperBig = new Swiper(slider, {
      spaceBetween: 10,
      slidesPerView: 1,
      allowTouchMove: false,
      effect: "fade",
      thumbs: {
        swiper: swiperThumb,
      },
    });
  });
	
	
  var tabLinks = document.querySelectorAll(".floor-mobile__nav-link");
  var tabPanes = document.querySelectorAll(".floor-mobile__tab-pane");

  tabPanes.forEach(function (tabPane) {
    var sliderElements = tabPane.querySelectorAll(".floor-mobile__swiper-main");
    var thumbElements = tabPane.querySelectorAll(".floor-mobile__swiper-thumb");

    sliderElements.forEach(function (slider) {
      var swiperBig = new Swiper(slider, {
        spaceBetween: 10,
        slidesPerView: "auto",
        pagination: {
          el: ".floor-mobile__swiper-pagination.swiper-pagination",
          clickable: true,
        },
      });

      thumbElements.forEach(function (thumbSlider) {
        var swiperThumbMob = new Swiper(thumbSlider, {
          slidesPerView: "auto",
          freeMode: true,
          spaceBetween: 10,
          watchSlidesProgress: true,
          allowTouchMove: false,
          effect: "fade",
        });

        swiperBig.controller.control = swiperThumbMob;
        swiperThumbMob.controller.control = swiperBig;
		  
		  
		  // При переключении между табами всегда начинаем с первого слайда, only mobile
		tabLinks.forEach(function (tabLink) {
		  tabLink.addEventListener("click", () => {
			swiperBig.slideTo(0);
			swiperThumbMob.slideTo(0);
		   });
		 })

		  
		  
      });
    });
  });

  // Добавляем обработчик события на переключение табов

  tabLinks.forEach(function (tabLink) {
    tabLink.addEventListener("click", function () {
      // Задержка для переинициализации swiperThumbMob после переключения табов
      setTimeout(function () {
        tabPanes.forEach(function (tabPane) {
          var thumbElements = tabPane.querySelectorAll(
            ".floor-mobile__swiper-thumb"
          );
          thumbElements.forEach(function (thumbSlider) {
            var swiperThumbMob = new Swiper(thumbSlider, {
              slidesPerView: "auto",
              freeMode: true,
              spaceBetween: 10,
              watchSlidesProgress: true,
              allowTouchMove: false,
              effect: "fade",
            });
          });
        });
      }); // Задержка в миллисекундах
    });
  });

  // document.querySelectorAll(".floor-mobile__swiper.swiper").forEach(function (el, index) {
  //   const swiper = new Swiper(el, {
  //     slidesPerView: 1,
  //     spaceBetween: 30,
  //     // autoHeight: true,
  //     pagination: {
  //       el: ".floor-mobile__swiper-pagination.swiper-pagination",
  //       clickable: true,
  //       dynamicBullets: true,
  //     },
  //   });
  // });

  document
    .querySelectorAll(".gallery__mobile-swiper.swiper")
    .forEach(function (el, index) {
      const swiper = new Swiper(el, {
        slidesPerView: 1,
        spaceBetween: 30,
        pagination: {
          el: ".gallery__mobile-swiper-pagination.swiper-pagination",
          clickable: true,
          dynamicBullets: true,
        },
      });
    });

  var swiper = new Swiper(".swiperLocation", {
    speed: 600,
    parallax: true,
    slidesPerView: 2,
    // initialSlide: 2,
    centeredSlides: true,
    pagination: {
      el: ".location__mobile-swiper-pagination",
      clickable: true,
      dynamicBullets: true,
    },
  });
})();
