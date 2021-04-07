# Request-Response

## Objectives
  By the end of this lesson, SWBAT:
- [ ] Differentiate between the roles of the client and the server in one request-response cycle
- [ ] Describe the parts of an HTTP Request object and their significances
- [ ] Describe the parts of an HTTP Response object and their significances
- [ ] Make three requests to one server, using different tools (`curl`, Postman, Browser)

## What happens when you type a URL in the browser and press enter?

![request_resp](./req_resp.png)

- What does it take to get these [cute pictures](https://www.reddit.com/r/Awww/) to show up?

My computer (my browser) makes a request to Reddit's computer
- TCP
- ISP
- IP

- In the example above, who is the client? Who is the server?

- Who makes the request? Who makes the response? 

My computer makes the request as a client
Reddit's computer makes the response as a server

- What are the rules and protocols that govern a request-response cycle called?

- HTTP - Hyper Text Transfer Protocol



- What is needed to make a successful HTTP Request?

- URL (Uniform Resource Locator) /URI (Uniform Resource Identifier)
  - https://www.reddit.com/r/Awww/

- HTTP Verb/Method: What kind of request are we making
  What do we as the client want?
   - GET: Read some information
   - POST: Create some information
   - PATCH/PUT: Updating some information
   - DELETE: Delete some information




- What kind of documents can a successful HTTP Response send back to your computer? How do you know if a Request was properly processed?  

- Body: 
  - HTML (Hyper Text Markup Language) document

  API - Application Programming Interface
  - JSON - JavaScript Object Notation
  {}, [], "", Number, boolean





- Headers: Contains information about the req-response
  - Status Codes: 404, 405, 500, 200, 201, 

- Other than using an Internet Browser, what other ways can we fire off a Request-Response Cycle?

## CURL

```shell

curl "https://www.reddit.com/r/Awww/.json"

curl -A "Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/51.0.2704.103 Safari/537.36" "https://www.reddit.com/r/Awww/.json"

```

## Three Pillars

* Three Essential Pillars of Front End Web Programming

* Three Essential Pillars of JS
  - Event Listeners
  - Communication with server (HTTP Request)
  - DOM Manipulation


## Resources

- [Postman](https://www.postman.com/)
- [Cat Status Codes](https://http.cat/)
- [Dog Status Codes](https://httpstatusdogs.com/)
- [Rapper Status Codes](http://httpstatusrappers.com/)


