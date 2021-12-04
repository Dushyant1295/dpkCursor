export default class dpkCursor {

    /*~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
                             Constructor 🥼
    ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~*/

    constructor(option = {}) {
        this.option = {
            ease: option.ease || 0.25,
        };
        this.animationFrame = null;
        this.mousePos = { x: 0, y: 0 };
        this.cursorPos = { x: 0, y: 0 };
        this.init();
    }




    /*~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
                           Create div Element 🔳
    ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~*/

    createCursor() {
        this.cursor = document.createElement("div");
        this.cursor.classList.add("dpkCursor");
        document.body.appendChild(this.cursor);
    }





    /*~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
                    Mouse move Listener on window 🔳
    ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~*/

    getPosition() {
        window.addEventListener("mousemove", (e) => {
            this.mousePos.x = e.x;
            this.mousePos.y = e.y;
        });
    }





    /*~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
                       Follow The Cursor 💨
    ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~*/

    setPosition() {
        this.cursorPos.x += (this.mousePos.x - this.cursorPos.x) * this.option.ease;
        this.cursorPos.y += (this.mousePos.y - this.cursorPos.y) * this.option.ease;
        this.cursor.style.transform = `translate3d(calc(${this.cursorPos.x}px - 50%) ,calc(${this.cursorPos.y}px - 50%), 0)`;
        this.animationFrame = requestAnimationFrame(this.setPosition.bind(this));
    }





    /*~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
                           Reset the Cursor 🏓
     ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~*/

    reset() {
        this.cursor.innerHTML = "";
        this.cursor.style.background = "";
        this.cursor.className = "dpkCursor";
    }




    /*~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
                     Hover Cursor Effects  ✨
    ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~*/

    setHover(el) {
        let hoverText = el.getAttribute("data-hover-text");
        let hoverImg = el.getAttribute("data-hover-img");
        let hoverClass = el.getAttribute("data-hover-class");
        let hoverBg = el.getAttribute("data-hover-bg");

        if (hoverText) this.cursor.innerHTML = hoverText;

        if (hoverClass) this.cursor.classList.add(hoverClass);
        else this.cursor.classList.add("hover-active");

        if (hoverBg) {
            this.cursor.style.backgroundColor = hoverBg;
            this.cursor.classList.add("hover-bg");
        }

        if (hoverImg) {
            this.cursor.style.backgroundImage = `url(${hoverImg})`;
            this.cursor.classList.add("hover-img");
        }
    }




    /*~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
                       Listners 🤙
    ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~*/

    effect() {
        const dataHover = document.querySelectorAll(".dpk-hover");

        dataHover.forEach((target) => {
            target.addEventListener("mouseenter", () => this.setHover(target));
            target.addEventListener("mouseleave", () => this.reset());
            target.addEventListener("click", () => this.reset());
        });
    }



    /*~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
                            Init the Cursor 💡
    ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~*/

    init() {
        this.createCursor();
        this.getPosition();
        this.setPosition();
        this.effect();
    }




    /*~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
                         Destroy the Cursor  🚮
    ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~*/

    destroy() {
        cancelAnimationFrame(this.animationFrame);
        document.body.removeChild(this.cursor);
    }
}