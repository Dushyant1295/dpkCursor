# dpk.js

#### 🤍 Collection of High Performance Super smooth functions that help you to create awwward winning websites.

#

<p align="left">        
    <a href="#">
        <img src="./src/img/dpkCursor.gif" height="350">
    </a>
</p>

### How to use:

##### CSS

Add the dpkCursor.css

[download dpkCursor.min.css from CDN]

##### JAVASCRIPT

Add the dpkCursor.min.js

[download dpkCursor.min.js from CDN]

##### USAGE

```HTML
    
    
<link rel="stylesheet" href="dpkCursor.min.css" />


        <div class="dpk-hover" data-hover-text="Hello"> Text </div>

        <div class="dpk-hover" data-hover-emogy="💚"> Emogy </div>

        <div class="dpk-hover" data-hover-bg="#222"> Background </div>

        <div class="dpk-hover noCursor" data-hover-bg="#222"> Text with Background </div>



<script src="dpkCursor.min.js"></script>

<script>
    initCursor();
    cursorEffects();
</script>


```

##### HTML Element attributes

#

| Attribute          | Values           | Description         |
| ------------------ | ---------------- | ------------------- |
| `data-hover-text`  | string           | text inside Circle  |
| `data-hover-emogy` | string           | emogy inside Circle |
| `data-hover-bg`    | color- name/code | bg Color of Circle  |
| `data-hover-bg`    | mixBlend         | mix-blend effect    |

#

##### dpkCursor Provides Following Functions

#

| Name              | Parameter            | Defaults         | Desc            |
| ----------------- | -------------------- | ---------------- | --------------- |
| `initCursor()`    | (speed, "Gsap Ease") | 0.13, 'sine.out' | initialization  |
| `cursorEffects()` | -                    | -                | Use the Effects |
| `resetCursor()`   | -                    | -                | reset dpkCursor |

#

| Dependencies | Description                                                                                                                             |
| ------------ | --------------------------------------------------------------------------------------------------------------------------------------- |
| [💚 gsap]    | Greensock Animation Plateform (gsap) is a JavaScript library for building high-performance animations that work in every major browser. |

[💚 gsap]: https://greensock.com/
[download dpkcursor.min.js from cdn]: https://cdn.jsdelivr.net/gh/Dushyant1295/dpkCursor/dpkCursor.min.js
[download dpkcursor.min.css from cdn]: https://cdn.jsdelivr.net/gh/Dushyant1295/dpkCursor/dpkCursor.min.css
