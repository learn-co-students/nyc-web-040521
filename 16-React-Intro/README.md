# React Intro

### LGs:
* Understand build tools and show how webpack works
* Use historical context and the Mod 3 experience to explain why React and declarative programming is special
* Start to understand the Virtual DOM
* See what a React Component actually is (an object, made by a class or function)
* Build custom components and see initial JSX

---
#### Start to understand the Virtual DOM
* What is virtual DOM?
* What is JSX?
* Babel
* Webpacker
* React
* React DOM
* Extension: https://chrome.google.com/webstore/detail/react-developer-tools/fmkadmapgofadopljbjfkapdkoienihi?hl=en

#### See what a React Component actually is (an object, made by a class or function)
* Add following scripts to the html file:
```html
    <script src="https://unpkg.com/react@16/umd/react.development.js" crossorigin></script>
    <script src="https://unpkg.com/react-dom@16/umd/react-dom.development.js" crossorigin></script>
    <script src="https://unpkg.com/babel-standalone@6/babel.min.js"></script>
```
* How to create a react element?

#### Build custom components and see initial JSX
* Nested component
* Pass dynamic information

---

* Build following structure:
    * Use python server from mac to run file. Command to start server: `cd` into the folder where your html file is and run `python -m SimpleHTTPServer`
    * ```html
        <div class="ui inverted red menu">
          <a class='item'>
            <h2 class="ui header">
              <i class="bug icon"></i>
              <div class="content">
                bugger
              </div>
            </h2>
          </a>
        </div> 
    ```