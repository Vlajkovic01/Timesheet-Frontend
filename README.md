# TimesheetFrontend

This project was created during a fifteen-day internship for a software engineer in the 2nd year of the Faculty of Technical Sciences in Novi Sad. Developed by [@stefan](https://www.linkedin.com/in/stefanvlajkovic/)

## Getting started

To run this project you will need the following libraries:
- [React ](https://react.dev/) version 18.2.0.
- [Node JS](https://nodejs.org/en) version 18.16.1.

To start the app run `npm install` and then `npm start`. Navigate to `http://localhost:3000/`. You will also need a running backend which I have written in this [SpringApp](https://github.com/Vlajkovic01/Timesheet-Backend). Initial admin credentials(if you started the backend and run SQL script should be `Username:stefan password:12345`.

## Features
- Login/Register with JWT
- Multiple user roles(Admin, Employee)
- CRUD for all entities in the system (Category, Client, Employee, Project, WorkLog)
- Employee registration with email confirmation
- Generation of reports for working hours on projects according to various parameters(by category, project, employee, client, date, quick date week, month...)
- Search all entities by a specific filter
- Pagination for all searches
