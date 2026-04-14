document.addEventListener("DOMContentLoaded", function () {
  const closeButtons = document.querySelectorAll(".popup-close");
  const buttons = document.querySelectorAll("[data-popup]");
  const popups = document.querySelectorAll(".popup");

  function close() {
    popups.forEach((popup) => {
      popup.classList.remove("active");
      document.body.style.overflow = "auto";
    });
  }

	const timerIdPop = setTimeout(() => {
		const timePopup = document.querySelector(".time-popup");
		if (timePopup) {
			timePopup.classList.add("active");
			document.body.style.overflow = "hidden";
		}
	}, 15000);
	
  buttons.forEach((button) => {
    button.addEventListener("click", () => {
      const target = button.getAttribute("data-popup");
      const popup = document.querySelector(target);
      popup.classList.add("active");
      document.body.style.overflow = "hidden";
	  clearTimeout(timerIdPop);
    });
  });

  popups.forEach((popup) => {
    if (popup.querySelector(".popup__bg")) {
      const bg = popup.querySelector(".popup__bg");
      if (bg.classList.contains("multiple")) {
        function loop() {
          const img = popup.querySelector(".popup__bg-img.active");
          const firstImg = popup.querySelector(".popup__bg-img.first");
          setTimeout(() => {
            img.classList.remove("active");
            if (!img.classList.contains("last")) {
              img.nextElementSibling.classList.add("active");
            } else {
              firstImg.classList.add("active");
            }
            loop();
          }, 2000);
        }
        loop();
      }
    }
  });

  closeButtons.forEach((closeButton) => {
    closeButton.addEventListener("click", () => {
      close();
    });
  });


 

  const popupButton = document.getElementById("popupButton");
	
	/*
  const descriptionInput = document.getElementById("descriptionInput");

  const storedId = localStorage.getItem("descriptionId");
	
	console.log(storedId);

  if (storedId) {
    descriptionInput.value = "page_form_id-" + storedId;
  } else {
    localStorage.setItem("descriptionId", "1");
  }
  

  popupButton.addEventListener("click", () => {
    descriptionInput.value = "page_form_id-2";
  });

  window.addEventListener("beforeunload", () => {
    localStorage.removeItem("descriptionId");
  });
  */

  // popup first sec

  const wpPopupBtn = document.querySelector(".wp-popup-btn");
  const wpPopup = document.querySelector(".wp-popup");
  const wpPopupExit = document.querySelector(".wp-popup__exit");

  wpPopupBtn.addEventListener("click", () => {
    wpPopup.classList.add("active");
	document.body.classList.add("no-scroll");
	clearTimeout(timerIdPop);
  });

  wpPopupExit.addEventListener("click", () => {
    document.body.classList.remove("no-scroll");
    wpPopup.classList.remove("active");
    document.body.classList.remove("hide-wp");
  });

  wpPopup.addEventListener("click", (e) => {
    if (e.target.closest(".wp-popup__wrapper")) {
      return;
    }
    document.body.classList.remove("no-scroll");
    wpPopup.classList.remove("active");
    document.body.classList.remove("hide-wp");
  });
});
