# dpkCursor.js

#### Easy, small, High Performance, Super smooth custom cursor functions that helps you to create awwward-winning websites.

#

<p align="left">        
    <a href="#">
        <img src="dpkCursor.gif" height="350">
    </a>
</p>

##### [Play with it on Codepen]

#

### How to use:

##### CSS

[Add the dpkCursor.css]

[CDN link dpkCursor.css]

##### JAVASCRIPT

[Add the dpkCursor.js]

[CDN link dpkcursor.js]

#

##### USAGE

```HTML


<link rel="stylesheet" href="dpkCursor.css" />


        <div class="dpk-hover" data-hover-text="Hello"> Text </div>

        <div class="dpk-hover" data-hover-class="class-name"> Add class to cursor </div>

        <div class="dpk-hover" data-hover-bg="#222"> Background Color </div>

        <div class="dpk-hover" data-hover-img="img/a.png"> Add Image As Background </div>



<script src="dpkCursor.js"></script>

<script>
    
    const customCursor = new dpkCursor({
      ease: 0.25,
    });

</script>


```

#### Installation Using NPM

```sh
npm install dpk_cursor

import { dpkCursor } from "dpk_cursor/src/dpkCursor";

```

#

##### HTML Element attributes

#

| Attribute          | Values           | Description         |
| ------------------ | ---------------- | ------------------- |
| `data-hover-text`  | string           | text inside Cursor  |
| `data-hover-class` | string           | add class to Cursor |
| `data-hover-bg`    | color- name/code | bg Color of Circle  |
| `data-hover-img`   | img/path         | img inside Cursor   |

#

##### dpkCursor Provides Following Functions

#

| Name              | Parameter | Defaults | Desc             |
| ----------------- | --------- | -------- | ---------------- |
| `init()`          | -         |          | initialization   |
| `effect()`        | -         | -        | Use the Effects  |
| `reset()`         | -         | -        | reset dpkCursor  |
| `destroy()`       | -         | -        | delete dpkCursor |

#

[cdn link dpkcursor.js]: https://cdn.jsdelivr.net/gh/Dushyant1295/dpkCursor/dpkCursor.js
[cdn link dpkcursor.css]: https://cdn.jsdelivr.net/gh/Dushyant1295/dpkCursor/dpkCursor.css
[play with it on codepen]: https://codepen.io/dushyant1295/pen/JjWrwZa
[add the dpkcursor.css]: https://github.com/Dushyant1295/dpkCursor/blob/master/dpkCursor.css
[add the dpkcursor.js]: https://github.com/Dushyant1295/dpkCursor/blob/master/dpkCursor.js
