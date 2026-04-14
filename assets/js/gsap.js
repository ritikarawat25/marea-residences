gsap.registerPlugin(ScrollTrigger, ScrollToPlugin, SplitText);
(function preloadTransform() {
  window.addEventListener("load", function (event) {
    document.body.classList.add("loaded");
  });
})();

document.addEventListener('DOMContentLoaded', function() {
  var container = document.querySelector('.location__map');
  var containerWidth = container.offsetWidth;

  var mapImage = document.querySelector('.location__map-img');
  var mapImageWidth = mapImage.offsetWidth;

 
  var scrollLeftValue = (mapImageWidth - containerWidth) / 2;

 
  container.scrollTo({
    left: scrollLeftValue,
    behavior: 'smooth' 
  });
});




(function gsapMatchMedia() {
  ScrollTrigger.matchMedia({
    all: function () {
      var tl = gsap.timeline({
          scrollTrigger: {
            trigger: ".split-lines",
          },
        }),
        mySplitText = new SplitText(".split-lines", { type: "words,chars" }),
        chars = mySplitText.chars;

      gsap.set(".split-lines", { perspective: 400 });

      tl.from(chars, {
        duration: 0.8,
        opacity: 0,
        scale: 0,
        y: 10,
        rotationX: 10,
        transformOrigin: "0% 50% -50",
        ease: "back",
        stagger: 0.01,
      });
    },
    // 2500 - 993
    "(max-width: 4000px) and (min-width: 993px)": function () {
      const select = (e) => document.querySelector(e);
      const selectAll = (e) => document.querySelectorAll(e);

      const tracks = selectAll(".gallery");

      tracks.forEach((track, i) => {
        let trackWrapper = track.querySelectorAll(".gallery-wrapper");
        let allImgs = track.querySelectorAll(".slide-box");

        let trackWrapperWidth = () => {
          let width = 0;
          trackWrapper.forEach((el) => (width += el.offsetWidth));
          return width;
        };

        gsap.defaults({
          ease: "none",
        });

        let scrollTween = gsap.to(trackWrapper, {
          x: () => -trackWrapperWidth() + window.innerWidth,
          scrollTrigger: {
            trigger: track,
            pin: true,
            scrub: 1,
            start: "center center",
            end: () => "+=" + (track.scrollWidth - window.innerWidth),
            onRefresh: (self) => self.getTween().resetTo("totalProgress", 0),
            invalidateOnRefresh: true,
            id: "id-one",
          },
        });

        allImgs.forEach((img, i) => {
          gsap.fromTo(
            img,
            {
              x: "-20vw",
            },
            {
              x: "20vw",
              scrollTrigger: {
                trigger: img.parentNode,
                containerAnimation: scrollTween,
                start: "left right",
                end: "right left",
                scrub: true,
                invalidateOnRefresh: true,
                onRefresh: (self) => {
                  if (self.start < 0) {
                    self.animation.progress(
                      gsap.utils.mapRange(self.start, self.end, 0, 1, 0)
                    );
                  }
                },
                id: "id-two",
              },
            }
          );
        });
      });

      function raf(time) {
        requestAnimationFrame(raf);
      }

      requestAnimationFrame(raf);

      ScrollTrigger.create({
        trigger: ".brochure__wrapper",
        start: "top top",
        end: "bottom bottom",
        scrub: true,
        pin: ".brochure__container",
      });

      const tlBrochure = gsap.timeline({
        scrollTrigger: {
          trigger: ".brochure__wrapper",
          start: "top top",
          end: "bottom bottom",
          scrub: true,
          once: true,
          onEnterBack: () => {
            gsap.to(window, {
              scrollTo: {
                y: ".brochure",
                offsetY: 0,
                autoKill: false,
                duration: 0,
              },
            });
          },
          //   onLeave: () => {
          //    
          //     gsap.to(".brochure__wrapper", { className: "brochure__wrapper brochure__wrapper-active" });
          //     item1.refresh(true)
          // }
        },
      });
      tlBrochure.to(
        ".brochure__inner .title",
        {
          duration: 1,
          xPercent: -100,
          opacity: 0,
        },
        "<"
      );
      tlBrochure.to(
        ".brochure__even",
        {
          duration: 1,
          scale: 1.5,
          xPercent: -130,
        },
        "<"
      );
      tlBrochure.from(
        ".brochure__odd",
        {
          duration: 1,
          xPercent: 30,
          opacity: 0,
        },
        0.1
      );

      const tlProjectsTop = gsap.utils.toArray(".gsap-bottom");
      tlProjectsTop.forEach((elem) => {
        gsap.from(elem, {
          yPercent: 50,
          duration: 1,
          opacity: 0,
          scrollTrigger: {
            trigger: elem,
          },
        });
      });

      const tlProjectsLeft = gsap.utils.toArray(".gsap-left");
      tlProjectsLeft.forEach((elem) => {
        gsap.from(elem, {
          xPercent: -50,
          duration: 1,
          scrollTrigger: {
            trigger: elem,
          },
        });
      });
      const tlProjectsRight = gsap.utils.toArray(".gsap-right");
      tlProjectsRight.forEach((elem) => {
        gsap.from(elem, {
          xPercent: 50,
          duration: 1,
          opacity: 0,
          scrollTrigger: {
            trigger: elem,
          },
        });
      });
    },
    // 992 - 769
    "(max-width: 992px) and (min-width: 769px)": function () {
      // ScrollTrigger.create({
      //   trigger: ".brochure__wrapper",
      //   start: "top top",
      //   end: "bottom bottom",
      //   scrub: true,
      //   pin: ".brochure__container",
      // });

      // const tlBrochure = gsap.timeline({
      //   scrollTrigger: {
      //     trigger: ".brochure__wrapper",
      //     start: "top top",
      //     end: "bottom bottom",
      //     scrub: true,
      //   },
      // });
      // tlBrochure.to(
      //   ".brochure__even",
      //   {
      //     duration: 2,
      //     yPercent: -100,
      //   },
      //   "<"
      // );
      // tlBrochure.from(
      //   ".brochure__odd",
      //   {
      //     duration: 2,
      //     yPercent: 100,
      //     opacity: 0,
      //   },
      //   0.1
      // );

      const tlBrochure = gsap.timeline({
        scrollTrigger: {
          trigger: ".brochure__wrapper",
          start: "top 90%",
          end: "bottom bottom",
          scrub: true,
          
        },
      });
      tlBrochure.from(
        ".brochure__inner .title",
        {
          yPercent: 20,
          duration: 1,
          opacity: 0,
        }
      );
      tlBrochure.from(
        ".brochure__even",
        {
          yPercent: 20,
          duration: 2,
          opacity: 0,
        }
      );
      tlBrochure.from(
        ".brochure__odd",
        {
          yPercent: 20,
          duration: 2,
          opacity: 0,
        }
      );


      const tlProjectsTop = gsap.utils.toArray(".gsap-bottom");
      tlProjectsTop.forEach((elem) => {
        gsap.from(elem, {
          yPercent: 20,
          duration: 1,
          opacity: 0,
          scrollTrigger: {
            trigger: elem,
          },
        });
      });

      const tlProjectsLeft = gsap.utils.toArray(".gsap-left");
      tlProjectsLeft.forEach((elem) => {
        gsap.from(elem, {
          yPercent: 20,
          duration: 1,
          opacity: 0,
          scrollTrigger: {
            trigger: elem,
          },
        });
      });
      const tlProjectsRight = gsap.utils.toArray(".gsap-right");
      tlProjectsRight.forEach((elem) => {
        gsap.from(elem, {
          yPercent: 20,
          duration: 1,
          opacity: 0,
          scrollTrigger: {
            trigger: elem,
          },
        });
      });
    },
    // 768 - 577
    "(max-width: 768px) and (min-width: 577px)": function () {
      // ScrollTrigger.create({
      //   trigger: ".brochure__wrapper",
      //   start: "top top",
      //   end: "bottom bottom",
      //   scrub: true,
      //   pin: ".brochure__container",
      // });

      // const tlBrochure = gsap.timeline({
      //   scrollTrigger: {
      //     trigger: ".brochure__wrapper",
      //     start: "top top",
      //     end: "bottom bottom",
      //     scrub: true,
      //   },
      // });
      // tlBrochure.to(
      //   ".brochure__inner .title",
      //   {
      //     duration: 2,
      //     yPercent: -10,
      //     opacity: 0,
      //   },
      //   "<"
      // );
      // tlBrochure.to(
      //   ".brochure__even",
      //   {
      //     duration: 2,
      //     yPercent: -100,
      //   },
      //   "<"
      // );
      // tlBrochure.from(
      //   ".brochure__odd",
      //   {
      //     duration: 2,
      //     yPercent: 100,
      //     opacity: 0,
      //   },
      //   0.1
      // );
      const tlBrochure = gsap.timeline({
        scrollTrigger: {
          trigger: ".brochure__wrapper",
          start: "top 90%",
          end: "bottom bottom",
          scrub: true,
          
        },
      });
      tlBrochure.from(
        ".brochure__inner .title",
        {
          yPercent: 20,
          duration: 1,
          opacity: 0,
        }
      );
      tlBrochure.from(
        ".brochure__even",
        {
          yPercent: 20,
          duration: 2,
          opacity: 0,
        }
      );
      tlBrochure.from(
        ".brochure__odd",
        {
          yPercent: 20,
          duration: 2,
          opacity: 0,
        }
      );

      const tlProjectsTop = gsap.utils.toArray(".gsap-bottom");
      tlProjectsTop.forEach((elem) => {
        gsap.from(elem, {
          yPercent: 20,
          duration: 1,
          opacity: 0,
          scrollTrigger: {
            trigger: elem,
          },
        });
      });

      const tlProjectsLeft = gsap.utils.toArray(".gsap-left");
      tlProjectsLeft.forEach((elem) => {
        gsap.from(elem, {
          yPercent: 20,
          duration: 1,
          opacity: 0,
          scrollTrigger: {
            trigger: elem,
          },
        });
      });
      const tlProjectsRight = gsap.utils.toArray(".gsap-right");
      tlProjectsRight.forEach((elem) => {
        gsap.from(elem, {
          yPercent: 20,
          duration: 1,
          opacity: 0,
          scrollTrigger: {
            trigger: elem,
          },
        });
      });
    },
    // 576 - 320
    "(max-width: 576px) and (min-width: 320px)": function () {

      const tlBrochure = gsap.timeline({
        scrollTrigger: {
          trigger: ".brochure__wrapper",
          start: "top 90%",
          end: "bottom bottom",
          scrub: true,
          
        },
      });
      tlBrochure.from(
        ".brochure__inner .title",
        {
          yPercent: 20,
          duration: 1,
          opacity: 0,
        }
      );
      tlBrochure.from(
        ".brochure__even",
        {
          yPercent: 20,
          duration: 2,
          opacity: 0,
        }
      );
      tlBrochure.from(
        ".brochure__odd",
        {
          yPercent: 20,
          duration: 2,
          opacity: 0,
        }
      );

      const tlProjectsTop = gsap.utils.toArray(".gsap-bottom");
      tlProjectsTop.forEach((elem) => {
        gsap.from(elem, {
          yPercent: 20,
          duration: 1,
          opacity: 0,
          scrollTrigger: {
            trigger: elem,
          },
        });
      });

      const tlProjectsLeft = gsap.utils.toArray(".gsap-left");
      tlProjectsLeft.forEach((elem) => {
        gsap.from(elem, {
          yPercent: 20,
          duration: 1,
          opacity: 0,
          scrollTrigger: {
            trigger: elem,
          },
        });
      });
      const tlProjectsRight = gsap.utils.toArray(".gsap-right");
      tlProjectsRight.forEach((elem) => {
        gsap.from(elem, {
          yPercent: 20,
          duration: 1,
          opacity: 0,
          scrollTrigger: {
            trigger: elem,
          },
        });
      });
    },
  });
})();


let footerAnimHeight = 200;

const mediaQuery = window.matchMedia('(max-width: 576px)')
if (mediaQuery.matches) {
  footerAnimHeight = 130;
}

   const ti = gsap.timeline({
    delay: 0,
    scrollTrigger: {
      trigger: '.developer',
      start: "center center",
      end: "bottom+=300 center",
      scrub: 1,
    }
  })

 ti.fromTo('.footer-anim', {
    height: footerAnimHeight + 'px',
  },{
    height: 0,
  });