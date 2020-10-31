import { isMobile } from "./Helper";

const dpkCursor = document.querySelector(".dpkCursor");

function initCursor() {
  if (dpkCursor) {
    gsap.set(dpkCursor, { xPercent: -50, yPercent: -50 });
    let dpkCursorPos = { x: window.innerWidth / 2, y: window.innerHeight / 2 };
    let dpkCursorMouse = { x: dpkCursorPos.x, y: dpkCursorPos.y };

    window.addEventListener("mousemove", (e) => {
      gsap.to(dpkCursorMouse, {
        duration: 0.13,
        x: e.x,
        y: e.y,
        ease: "sine.out",
        overwrite: true,
      });
    });

    let dpkCursorXSet = gsap.quickSetter(dpkCursor, "x", "px");
    let dpkCursorySet = gsap.quickSetter(dpkCursor, "y", "px");

    gsap.ticker.add(() => {
      dpkCursorPos.x += dpkCursorMouse.x - dpkCursorPos.x;
      dpkCursorPos.y += dpkCursorMouse.y - dpkCursorPos.y;
      dpkCursorXSet(dpkCursorPos.x);
      dpkCursorySet(dpkCursorPos.y);
    });
  }
}

function resetCursor() {
  dpkCursor.querySelector(".hover-circle").innerHTML = "";
  dpkCursor.classList.remove("hover-active");
  gsap.set(dpkCursor, {
    background: "",
    borderColor: "white",
    borderWidth: 2,
    mixBlendMode: "difference",
  });
}

function cursorEffects() {
  const dataHover = document.querySelectorAll(".dpk-hover");

  if (!isMobile() && dataHover) {
    dataHover.forEach(function (target) {
      target.addEventListener("mouseenter", function () {
        let dataHoverText = target.getAttribute("data-hoverMsg");
        let emogy = target.getAttribute("data-emogy");
        let datafillbg = target.getAttribute("data-fillBg");

        dpkCursor.classList.add("hover-active");

        if (dataHoverText) {
          dpkCursor.querySelector(".hover-circle").innerHTML = dataHoverText;
        }

        if (emogy) {
          dpkCursor.querySelector(".hover-circle").innerHTML = emogy;
          gsap.set(dpkCursor, { mixBlendMode: "normal", borderColor: "gray" });
        }

        if (datafillbg) {
          const mixBlendMode =
            datafillbg === "mixBlend" ? "difference" : "normal";
          const fillColor = datafillbg === "mixBlend" ? "white" : datafillbg;
          gsap.set(dpkCursor, {
            background: fillColor,
            borderWidth: 0,
            mixBlendMode: mixBlendMode,
          });
        }
      });

      target.addEventListener("mouseleave", function () {
        resetCursor();
      });

      target.addEventListener("click", function () {
        resetCursor();
      });
    });
  }
}

export { initCursor, resetCursor, cursorEffects };
