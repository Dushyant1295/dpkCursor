# dpkCursor.js

#### Easy, small, High Performance, Super smooth custom cursor functions that helps you to create awwward-winning websites.

#

<p align="left">        
    <a href="#">
        <img src="./src/img/dpkCursor.gif" height="350">
    </a>
</p>

##### [Play with it on Codepen]

#

### How to use:

##### CSS

[Add the dpkCursor.css]

[CDN link dpkcursor.css]

##### JAVASCRIPT

[Add the dpkCursor.js]

[CDN link dpkcursor.js]

#

##### USAGE

```HTML


<link rel="stylesheet" href="dpkCursor.css" />


        <div class="dpk-hover" data-hover-text="Hello"> Text </div>

        <div class="dpk-hover" data-hover-emogy="💚"> Emogy </div>

        <div class="dpk-hover" data-hover-bg="#222"> Background </div>

        <div class="dpk-hover noCursor" data-hover-bg="#222"> Text with Background </div>



<script src="dpkCursor.js"></script>

<script>
    initCursor();
    cursorEffects();
</script>


```

#### Installation Using NPM

```sh
npm install dpk_cursor

// import like this

import { dpkCursor,initCursor,resetCursor,cursorEffects } from "dpk_cursor/module/dpkCursor";

```

#

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

[cdn link dpkcursor.js]: https://cdn.jsdelivr.net/gh/Dushyant1295/dpkCursor/dpkCursor.js
[cdn link dpkcursor.css]: https://cdn.jsdelivr.net/gh/Dushyant1295/dpkCursor/dpkCursor.css
[play with it on codepen]: https://codepen.io/dushyant1295/pen/JjWrwZa
[add the dpkcursor.css]: https://github.com/Dushyant1295/dpkCursor/blob/master/dpkCursor.css
[add the dpkcursor.js]: https://github.com/Dushyant1295/dpkCursor/blob/master/dpkCursor.js
