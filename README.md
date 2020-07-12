# README
## Overview
This is the repository for the take home project for Galileo.

In the web app, users should be able to search through existing providers and select a provider to add to the page. Selecting the provider will also display all the tasks associated with the provider, sorted by priority from high to low (highest priority is 1, next is 2, and so on).

I am most comfortable using Javascript in web development. In an effort to challenge myself and gain some bonus points (as outlined in the project specifications), I decided to use Typescript to write this; as a result, proper Typescript coding/styling conventions may not be properly displayed in the code.

## Reflection
I initially was a bit ambitious and wanted to add some routing that would let the user switch back and forth between a homepage and the providers page, but I found myself spending too much time getting set up due to my lack of experience with Typescript and React/Redux.

If I were to continue working on this project I would take advantage of the Redux store to add some more complex interactions. I would also change the way I load all the providers and their tasks to be asynchronous instead of loading everything all at once, to account for very large amounts of data.

## Find the app here

https://galileo-challenge.herokuapp.com/

## To run locally
Clone this repo on your local machine.
Run `npm install` to install all dependencies

In the project directory, run `npm start`.

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.
