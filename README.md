# Kentkart Technology Angular Test Case
This repository contains a basic setup for a Angular project. 
See "_System requirements_" below to get up
and running!

## The test

You will work for Kentkart, an international company that provides public transportation fare collection services, where hundreds of thousands of instant data are processed, analyzed and reported. We recommend that you develop the project assuming that you are in a real workflow process so that we can make sure that you meet the requirements in every sense.

### Goal

You should write a very simple application where there is only one scenario:

##### Scenario 1. (Frontend Developer candidates)

Frontend
* User logins must be provided by logging in with Gmail.
* Routing with authentication middleware
* IndexedDB (client-side storage), which contains "employees" and "companies" tables, will be used.
* Employee and company listing pages will be viewable by all users
* Only logged in users will be able to add, edit and delete employees and companies.
* The logged in user must be able to define one or more employees for a company.
* For interface design, you can use a ready-made template or create your own. We take care that your html, css and js codes are attentive.
* Do not forget to create readme and documentation for your project
* Make sure the code is understandable by other programmers.

##### Scenario 2. (Fullstack Developer candidates)

Backend
* NodeJS (ExpressJS) should be used for the backend side
* JWT should be used for user authentication
* User logins must be provided by logging in with username and password.
* Create webservices that get, save, update, and delete information for employee, company, and company employees.
* You can use MySQL as database.
* All APIs called from the Frontend will come from the Angular port

Frontend
* Routing with authentication middleware
* Employee, company and company employees listing pages will be viewable by all users
* Only logged in users will be able to add, edit and delete employees, companies and company employees.
* The logged in user must be able to define one or more employees for a company.
* For interface design, you can use a ready-made template or create your own. We take care that your html, css and js codes are attentive.
* Do not forget to create readme and documentation for your project
* Make sure the code is understandable by other programmers.

#### Deliverables

The application provides you with a ready-made Angular project. Don't write code that just "get's the job done", write it as if was an
application that you would have to maintain for years to come ;)

We know how important interface development is for a front-end developer. Therefore, pay attention not only to the opening of the pages or the functioning of the given functions, but also to the high level of visualization.

It is more important to show how you write (in your eyes) a maintainable
application. Be prepared to explain the steps you took in a review of this test.

Don't forget to add the necessary documentations and simple example tests.

#### Rules

Once you receive this test by e-mail please copy this repository to
your own GitHub account.

You can use any libraries / frameworks that make your life easier, but strictly speaking they are not necessary. 
We are more interested in seeing how you would structure things.
 
Your application should run on the latest public version of Google Chrome.
You don't have to worry about making your code work on any other browser, as
such you are free to use anything that is supported by Chrome and not worry
about cross-browser implementations.

## System requirements

In order to build the project you will need node package manager.

In the root of this repository, you can resolve all these dependencies via
the command line using:

    npm install
    
You can now start developing the application using Webpack by typing:

    ng serve --open
    
The following will happen:

You can add / remove / change files to in the source folder and your
browser will automatically update to reflect the changes.
