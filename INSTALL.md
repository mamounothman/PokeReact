# PokeReact installation and build instruction

This document is a guide to instruct you how to clone build and run PokeRreact project on your machine.

## prerequisite

To build and run PokeReact you will need to have the following installed on your maichine:
 - [Nodejs & npm](https://nodejs.org/en) 
 - [git](https://git-scm.com/)

## installing/cloning & configuration

To install PokeReact clone it from this repo [mamounothman/PokeReact](https://github.com/mamounothman/PokeReact) by running the following command in your terminal: 
    ```
    git clone https://github.com/mamounothman/PokeReact PROJECT_HOME
    ```
where the `PROJECT_HOME` is the location of the code base in your machine, then in your terminal `cd` into the project home and make sure to copy .env.example to .env and make sure that you have `VITE_API_URL` is set to the proper API URL value, then run `npm install` to install all dependencies and packages.


## build and run

To run PokeReact, in your terminal `cd` into the project home and run `npm run dev`