const { gsap } = require("gsap/dist/gsap");

const isMob = () => {
  return !!(
    navigator.userAgent.match(/Android/i) ||
    navigator.userAgent.match(/webOS/i) ||
    navigator.userAgent.match(/iPhone/i) ||
    navigator.userAgent.match(/iPad/i) ||
    navigator.userAgent.match(/iPod/i) ||
    navigator.userAgent.match(/BlackBerry/i) ||
    navigator.userAgent.match(/Windows Phone/i)
  );
};

const dpkCursor = document.createElement("div");
dpkCursor.classList.add("dpkCursor");
document.body.appendChild(dpkCursor);

function initCursor(speedOption = 0.13, easeOption = "sine.out") {
  if (isMob()) {
    dpkCursor.style.display = "none";
  } else {
    gsap.set(dpkCursor, { xPercent: -50, yPercent: -50 });

    let dpkCursorPos = { x: window.innerWidth / 2, y: window.innerHeight / 2 };
    let dpkCursorMouse = { x: dpkCursorPos.x, y: dpkCursorPos.y };
    let dpkCursorXSet = gsap.quickSetter(dpkCursor, "x", "px");
    let dpkCursorYSet = gsap.quickSetter(dpkCursor, "y", "px");

    window.addEventListener("mousemove", (e) => {
      gsap.to(dpkCursorMouse, {
        duration: speedOption,
        x: e.x,
        y: e.y,
        ease: easeOption,
        overwrite: true,
      });
    });

    gsap.ticker.add(() => {
      dpkCursorPos.x += dpkCursorMouse.x - dpkCursorPos.x;
      dpkCursorPos.y += dpkCursorMouse.y - dpkCursorPos.y;
      dpkCursorXSet(dpkCursorPos.x);
      dpkCursorYSet(dpkCursorPos.y);
    });
  }
}

function resetCursor() {
  dpkCursor.innerHTML = "";
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
  const hideCursor = document.querySelectorAll(".noCursor");

  if (!isMob() && dataHover) {
    dataHover.forEach(function (target) {
      target.addEventListener("mouseenter", function () {
        let dataHoverText = target.getAttribute("data-hover-text");
        let emogy = target.getAttribute("data-hover-emogy");
        let datafillbg = target.getAttribute("data-hover-bg");

        if (target.classList.contains("noCursor")) {
          gsap.set(dpkCursor, { borderWidth: 0 });
        } else {
          dpkCursor.classList.add("hover-active");
        }

        if (dataHoverText) dpkCursor.innerHTML = dataHoverText;

        if (emogy) {
          dpkCursor.innerHTML = `<b>${emogy}</b>`;
          gsap.set(dpkCursor, { mixBlendMode: "normal", borderColor: "gray" });
        }

        if (datafillbg) {
          const blendMode = datafillbg === "mixBlend" ? "difference" : "normal";
          const fillColor = datafillbg === "mixBlend" ? "white" : datafillbg;
          gsap.set(dpkCursor, {
            background: fillColor,
            borderWidth: 0,
            mixBlendMode: blendMode,
          });
        }
      });

      target.addEventListener("mouseleave", resetCursor);
      target.addEventListener("click", resetCursor);
    });
  }
}

export { dpkCursor, initCursor, resetCursor, cursorEffects };


