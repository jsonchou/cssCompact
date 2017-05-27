# css-compact vscode plugin

let's go back to original way to write our css

## Features

* compact css file with **shift+alt+f** key

* only format *.css files

* remove tab、\r\n(check os)

* keep custom blank lines

## Examples

- demo1

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

Output:
~~~ css
.btn { border:1px solid black; background:#fff; border-radius:5px; color:#000;}

.btn:hover,
.btn:focus { background:#000; color:#fff;}



//my empty row for comment


.model-b{margin-right:10px;}
.model-b-list{margin-right:10px;}

~~~

- demo2

~~~ css
.test {
	font-size: 3.2rem;
	position: fixed;
	z-index: -1;
	top: 45%;
	left: 50%;
	display: none;
	visibility: hidden;
	overflow: auto;
	width: 70%;
	min-height: 2rem;
	-webkit-transition: all ease .5s;
	transition: all ease .5s;
	-webkit-transform: translate(-50%,-50%);
	transform: translate(-50%,-50%);
	text-align: left;
	opacity: 0;
	border-radius: .8rem;
	background-color: rgba(255,255,255,1);
}
~~~
Output:
~~~ css
.test {font-size: 3.2rem;position: fixed;z-index: -1;top: 45%;left: 50%;display: none;visibility: hidden;overflow: auto;width: 70%;min-height: 2rem;-webkit-transition: all ease .5s;transition: all ease .5s;-webkit-transform: translate(-50%,-50%);transform: translate(-50%,-50%);text-align: left;opacity: 0;border-radius: .8rem;background-color: rgba(255,255,255,1);}
~~~


## Release Notes

init package


### 0.0.2

Fix package.json description & vertion

### 0.0.1

Initial release of cssCompact


-----------------------------------------------------------------------------------------------------------

## Working with Markdown

**Note:** 

**Enjoy!**