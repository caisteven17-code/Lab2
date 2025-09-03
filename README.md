This project is about learning and practicing **CRUD operations** (Create, Read, Update, Delete) using **Node.js**, **MySQL**, and **Postman**.  

Softwares You Need
Before starting, make sure you have these installed:  
- Node.js – run the backend server  
- Postman – test API requests  
- VS Code – code editor  
- Git Bash – command line tool  
- XAMPP – manage Apache and MySQL  

Setup Steps
1. Open XAMPP and start Apache and MySQL
2. Open phpMyAdmin in your browser 
3. Create a database with two tables:  
  students table  
   - id  
   - name  
   - email  
   - course  
   - year_level  

   courses table  
   - id  
   - code  
   - title  
   - units
4. Create a user account.
5. Update your project’s `.env` file with the username and password you created in phpMyAdmin.  
6. In your project folder, open CMD or Git Bash in VS Code Terminal and run:  npm run dev
7. Test the server by visiting: http://localhost:3000/api/health
  - If it shows **"ok"** or **"connected"**, your setup is working.

API Endpoints
 Students
  - POST '/students' → add a new student
  - GET '/students' → get all students
  - GET '/students/:id' → get a student by ID
  - PUT '/students/:id' → update student details
  - DELETE '/students/:id' → delete a student

Sample JSON for POST/PUT:
{
  "name": "Juan Dela Cruz",
  "email": "juan@example.com",
  "course": "BSIT",
  "year_level": 2
}

Courses
  - POST '/courses' → add a new course
  - GET '/courses' → get all courses
  - GET '/courses/:id' → get a course by ID
  - PUT '/courses/:id' → update course details
  - DELETE '/courses/:id' → delete a course

Sample JSON for POST/PUT:
{
  "code": "ICS2609",
  "title": "Applications Development and Emerging Technologies 2 (Enterprise-Back-End)",
  "units": 2
}

Reflection
During this project, I encountered two main issues:
1. In methodology 5, I struggled with transforming the setup from students to courses, especially when adjusting the controllers and routes.
2. I also faced errors when pushing my files to GitHub, which required troubleshooting Git commands before it worked properly.

