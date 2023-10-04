CMPE-202-1 Class Project - Movie Theater end-to-end
Due: 12/1/23
"""
Team Alpha's project repo for implementing an end2end MovieTheater Club application for your favorite movie theater chain. 
The system can manage multiplexes in many locations i.e. each location has multiple screens.
"""

Instructor:
  - Gopinath Vinodh, Classroom: ENG 325

Team Alpha:
  - Jena Kelbessa
  - Jiajun Dai
  - Yifu Fang
  - Anthony Zunino

Helpful Links:
  - Github link:
      - https://github.com/gopinathsjsu/teamproject-team-alpha-1 
  - Syllabus:
      - https://sjsu.instructure.com/courses/1570055/files/74025430?wrap=1 
  - Excel of team info:
      - https://docs.google.com/spreadsheets/d/1qowXku9R0LjOND2gilTmbdbIUMP-fOhZU7j70APLi4w/edit#gid=0
## Backend
```
Backend/
├── app/
│   ├── __init__.py
│   ├── routes.py
│   ├── templates/
│   │   ├── index.html
│   ├── static/
│   │   ├── css/
│   │   ├── img/
├── requirements.txt
├── app.py
```
#### How to run our Python Flask Back-end:
- Make sure you installed your interpreter with a virtual environment '<your path>\teamproject-team-alpha-1\Backend' (venv)
```
python -m venv myenv
```
- make sure the path is '<your path>\teamproject-team-alpha-1\Backend', activate your venv first with this command:
```
venv\Scripts\activate
```
- then run:
```
 pip install -r requirements.txt
```
- Now you can start your backend locally with:
```
python app.py
```
- when you finsih the session of programming. deactivate the virtual environemnt:
```
deactivate
```
#### Useful commands for backend:
- when you installed some library in your virtual environment, and you want to include it into requirements.txt. this command automatically detects the library or dependencies in your environment and add it to requirements.txt
```
pip freeze > requirements.txt
```
## Frontend
```
myapp/
├── public/
│   ├── index.html
│   ├── favicon.ico
├── src/
│   ├── index.js
│   ├── App.js
│   ├── components/
│   │   ├── Header.js
│   ├── pages/
│   │   ├── Home.js
│   │   ├── Auth/
│   │   │   ├──log-in.js
│   │   │   ├──sign-up.js
│   ├── index.js
├── package.json
├── package-lock.json
├── README.md
```
#### How to run our React Front-end:
- install node.js. https://nodejs.org/en
- after installation of node.js. run the following command to install the dependencies and neccessary files for this project.
```
npm install
```
- Now you can start your frontend locally with:
```
npm start
``` 
## Front-end routing

### FirstLayer: /
	/ 
	/404
	/View-membership
	/book-tickets
- / homepage display different theaters, location, with current moview schedule, and upcoming moview (slide?)
homepage includes a navigation bar:
	 - Home ----> /
	 - membership ---->/view-membership
	 - book tickets ----> /book-tickets
	 - log in ----> /auth/log-in
- /404 error page
- /view-membership display the options to buy regular or premium membership
- /book-tickets buy moview tickets with a  online service fee ($1.50 per ticket). display moview title, time, theater name, location, user can choose and buy.
---------------------------
### SecondLayer: /auth
##### authentication
	/auth
	/auth/log-in
	/auth/sign-up
- /auth/login display the inputbox username and passward. user can select the method of login as admin or member
- /auth/sign-up display the signup page prompt user to sign up, then save the data on database.
--------------------------
##### member

	/member
	/member/book-tickets
	/member/history reward points

- under /member page, display movies watched last 30 days.
- under /member/book-tickets, user can view tickets they bought, able to cancel before show time and refund. display movies with tile, time, location, prompt user to choose and buy
- /member/history, display the purchase history, amount paid, and cumulative reward points. Cumulative rewards are given per dollar of purchase.

------------------------
##### employee
	/employee
	/employee/movie-assignment
	/employee/theater-configuration
	/employee/dashboard
- /employee/moview-assignment display a bunch of movies, movies are able to be assign to or remove from theaters, display a timeline and schedule.
- /employee/theater-configuration display a list of theaters, user can select theater, and configure the capacity of that theater. add or remove space from that theater
- /employee/dashboard display the the movies Theater occupancy for the last 30/60/90 days, Summarized by location, Summarized by movies. Display a table, that includes all movies from last 90 days. able to display a graph of theater occupancy to Specific movie and a graph of  occupancy to location.

![frontend-routing](frontend-routes.png)


