# Node Js Crash Course: intro to node.js and express

## Description
covering all major topics of Node.js and express culminating in creating a REST Api

## Challenges/Features

- Global variables -- gives us access to our local filesystem and functions and objects such as proccess, require, and module 

- Modules -- let us split up our code into different files and 'require' them as needed (minimum sharing as possible), modules are wrapped in a function when they are exported by CommonJs

- Naming -- we can destructure variables and functions from exports directly or access them via dot notation

- os module -- can give us info about the operating system, time system has been on, and info such as free or total memory of the device. Built in methods allow this

- path module -- lets us create path names using a method called 'join' as well as get certain attributes of a path such as its base

- fs module -- called the file system module, lets us access, read/write/create to/from files on the system in a synchronous (blocking) or asynchronous (non-blocking) way

- http module -- lets us setup our own server where we can access things such as the url string and to essentially build out a webpage if we wanted 

- npm - node package manager that defines packages as folders with reusable bits of code, there is no quality control in the npm registry (must sniff out useless packages urself, check for weekly downloads)

-event loop - we offload async operations to a kernel (which is multi-threaded) in order to save space and prevent the single-threaded js language to stop and not allow more requests to come in

-promises - creating promises can be done ourselves in order to prevent blocking code from stopping the server for other users, by specifying a promises method on our require statement, this will turn our modules into promises which we can then simply use in an async await pattern

- event emitters - event emitters are methods that most node modules rely on and these are actions taken on what the server is giving or receiving,

- streams - an interface(API) that allow us to read/write streaming data, methods such as createRReadStream open up an event stream for us and listener methods such as on take a string to listen for and a callback which if hit will then execute

- http-server - using createServer method on the http module, we can listen for requests to our server and send back resources, status codes, and error messages. This is done by utilizing methods from the response object such as writeHead(for specifying status code and content/ mime types) and write method(to send some kind of resource that is being requested). If statements in our server will check the req.url to find out which resource to load and if none are found to send back a writeHead with a 404 status code. This method is labour intensive but can be done using http modules strictly



