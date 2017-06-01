# css-compact vscode plugin

let's go back to original way to write our css

## Features

* compact css file with **shift+alt+f** key

* only format *.css files

* remove tab、\r\n(check os)

* keep custom blank lines

## Examples

* **common style formatter**

~~~ css
.btn {
  border:1px solid black;
  background:#fff;
  border-radius:5px;
  color:#000;
}

.btn:hover,
.btn:focus {
  background:#000;
  color:#fff;
}



//my empty row for comment


.model-b{margin-right:10px;}
.model-b-list{margin-right:10px;}


~~~

~~~ css
.btn { border:1px solid black; background:#fff; border-radius:5px; color:#000;}

.btn:hover,
.btn:focus { background:#000; color:#fff;}



//my empty row for comment


.model-b{margin-right:10px;}
.model-b-list{margin-right:10px;}

~~~


* **midea query(@media) formatter**

~~~ css
@media only screen and (min-device-width: 320px) and (max-device-width: 480px) {
    .page-number {
        font-size: 12px;
    }
    .test {
        margin-right: 100px;
    }
}
~~~

~~~ css
@media only screen and (min-device-width: 320px) and (max-device-width: 480px){
 .page-number { font-size: 12px; } 
 .test { margin-right: 100px; } 
 }
~~~

* **animation(@keyframes) formatter**

~~~ css
@keyframes ani-rotate {
    from {
        -webkit-transform: rotate(0deg);
        transform: rotate(0deg);
    }
    to {
        -webkit-transform: rotate(360deg);
        transform: rotate(360deg);
    }
}

@keyframes ani-floweres-r {
    0% {
        transform: rotate(10deg);
    }
    50% {
        transform: rotate(0deg);
    }
    100% {
        transform: rotate(10deg);
    }
}
~~~

~~~ css
@keyframes ani-rotate { 
 from { -webkit-transform: rotate(0deg); transform: rotate(0deg); } 
 to { -webkit-transform: rotate(360deg); transform: rotate(360deg); } 
 }

@keyframes ani-floweres-r { 
 0% { transform: rotate(10deg); } 
 50% { transform: rotate(0deg); } 
 100% { transform: rotate(10deg); } 
 }
~~~


## Release Notes

Init package

### 1.0.0

Fix animation(keyframes of %)

### 0.0.5

Fix Markdown description

### 0.0.4

Fix animation(keyframes of from & to) & media query formatter

### 0.0.3

Fix shortcut key collision with **shift+alt+f**

### 0.0.2

Fix package.json description & version

### 0.0.1

Initial release of cssCompact


-----------------------------------------------------------------------------------------------------------

## Working with Markdown

**Note:** 


**Enjoy!**