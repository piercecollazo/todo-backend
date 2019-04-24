# Todo Backend

### Introduction

Welcome to making a FULL APP!! You folks have come so far. Sniff. I LOVE YOU ALL.

We'll be working on making our todo apps into something with a functioning (if extemely local) back end. If you restarted your computer and ran the app again, all todos you'd added (and any that you'd marked complete) will stay just that way. PERSISTENCE.


### Setup

Take a look not at the code yet, but at the code file structure. We have a directory called `src` for our code, and a _separate_ directory for our `db`, which only contains one file: `todos.json`. We're going to run a VS Code server for our app, to access it at our usual `http://127.0.0.1:5500/` url, but we're also going to run a `json-server` app for our backend at `http://localhost:3000`. 

(A funny side note is that it's a good idea to have the VS Code Live Server running not in the root directory of the project, but in the `src` directory. In other words, go to `src`, `code .`, and only in _that_ window should you run the live server. That's because the live server watches for changes to the code before reloading, and if we post a new todo, thus changing our back end, Live Server will reload our front end page. If we _also_ have a request automatically happening when we load the page, this will spark an infinite loop of request-change-reload-request. This is NOT a "funny side note" because I did this very thing. Nope. Definitely not this guy.)

Okay, let's set this thing up. Make sure you have Homebrew installed (https://brew.sh), Node installed (`brew install node`), and `json-server` installed (`npm install -g json-server`). Let us know if you have any quesions about this process! Now. Navigate to `todo-backend/src`. (Make sure you're exactly there!) Run a `code .` to open the `src` folder in VS Code. Then enter the following command in the terminal: `json-server --watch ../db/todos.json`. This will start your backend server.

A note on terminal windows: the `json-server` library is doing a lot of magic, including taking over your terminal to give you updates on what's going on. You can always hit Ctrl-C to stop it and launch it somewhere else, and, if you don't do that, you'll definitely need to open a new terminal to do any terminal things you need to do, since whatever terminal you're running `json-server` in will be busy. You can also open up a new tab in iTerm2 and switch between them. You could also run a new iTerm2 window, or use the VS Code terminal. You'll need multiple terminals pretty often from here on out. Welcome to the big leagues!


### Okay, what's our app do so far?

Not much! But look at the front end, press the three buttons, and check the console. They're excellent, beautifully written examples from a very handsome coder, showing you how to get all the todos from the back end, post a new todo, and update a specific todo. Note how `json-server` will update your terminal to tell you about the requests you're making (and, later, if any of your requests aren't working!), and you can always check your `todos.json` file to see what changes have occurred, or even just manually change the data. (Although ideally we won't have to do this ever once we get a working app!)

So it does a bunch, sure, and shows you how to do requests, but it's not a very good todo app. We can only post one pre-made todo, we can only mark one specific todo completed, and it's all displayed in the console.


### Let's fix it!

Let's make an app that, at the very least:

* Loads all the todos and displays them on the DOM.
* Allows the user to type in a todo and click submit to add that todo to our list (and our database!).
* Allows the user to click a todo to mark it completed, reflecting that in our database, and displaying it completed in some way on the DOM.

To do this, feel free to steal _liberally_ from the code you've written before. We have several iterations of todo apps to steal from, including both yours and our solutions to this.


### Stretch Goals

Incoming, but feel free to come up with your own!