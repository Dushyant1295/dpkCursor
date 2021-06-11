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

function initCursor(speedOption = 0.25) {
  if (isMob()) {
    dpkCursor.style.display = "none";
  } else {
    let dpkCursorMouse = { x: -100, y: -100 };
    let dpkCursorPos = { x: 0, y: 0 };
    let speed = speedOption;

    window.addEventListener("mousemove", (e) => {
      dpkCursorMouse.x = e.x;
      dpkCursorMouse.y = e.y;
    });

    const updatePosition = () => {
      dpkCursorPos.x += (dpkCursorMouse.x - dpkCursorPos.x) * speed;
      dpkCursorPos.y += (dpkCursorMouse.y - dpkCursorPos.y) * speed;
      dpkCursor.style.transform = `translate3d(${dpkCursorPos.x}px ,${dpkCursorPos.y}px, 0)`;
    };

    function loop() {
      updatePosition();
      requestAnimationFrame(loop);
    }
    requestAnimationFrame(loop);
  }
}

function resetCursor() {
  dpkCursor.innerHTML = "";
  dpkCursor.classList.remove("hover-active");
  dpkCursor.style.cssText =
    "background: none; border-color: #fff;  border-width: 2px;  mix-blend-mode: difference;";
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
          dpkCursor.style.borderWidth = 0;
        } else {
          dpkCursor.classList.add("hover-active");
        }

        if (dataHoverText) dpkCursor.innerHTML = dataHoverText;

        if (emogy) {
          dpkCursor.innerHTML = `<b>${emogy}</b>`;
          dpkCursor.style.cssText =
            "mix-blend-mode: normal; border-color: gray";
        }

        if (datafillbg) {
          const blendMode = datafillbg === "mixBlend" ? "difference" : "normal";
          const fillColor = datafillbg === "mixBlend" ? "white" : datafillbg;
          dpkCursor.style.cssText = `background-color: ${fillColor}; mix-blend-mode: ${blendMode}; border-width:0;`;
        }
      });

      target.addEventListener("mouseleave", resetCursor);
      target.addEventListener("click", resetCursor);
    });
  }
}

export { dpkCursor, initCursor, resetCursor, cursorEffects };
