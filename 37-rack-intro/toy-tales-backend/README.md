# Project Requirements
 

### Getting Started
1. Clone down this repository.  
2. A basic rack app is located in the backend folder. 
3. First run _bundle_ in your backend folder to install your gems
4. application.rb has an example GET route, replace this route with routes for your project! 

**Start your server with:**
` shotgun --port=9292 `

> **Note:** This will run your server on port http://localhost:9292. 
> [shotgun](https://github.com/rtomayko/shotgun) is a ruby gem that will automatically reload your rack server. You may still need to refresh your browser to see changes. 

5. Your backend and your frontend should be in two different repositories. Create a new repository with a react app for your frontend. 

**Fetch example**
>  Your react app should make fetch requests to your rack backend! 

```js
   fetch("http://localhost:9292/test")
    .then(res => res.json())
    .then(console.log)
```
