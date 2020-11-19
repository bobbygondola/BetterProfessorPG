# BetterProfessorPG
Backend of Better Professor Transfered To Postgres

BASE_URL = https://betterprofessordb.herokuapp.com/


```
TO REGISTER
type: POST, endpoint: https://betterprofessordb.herokuapp.com/api/register
{
    "username":"Bobbyg",
    "password":"BobbySWE",
    "subject":"software"
}
```

```
TO LOGIN
type: POST, endpoint: https://betterprofessordb.herokuapp.com/api/login

DATA TO SEND UP
{
    "username":"Bobbyg",
    "password":"BobbySWE"
}
```

```
TO POST A NEW STUDENT
type: POST, endpoint: https://betterprofessordb.herokuapp.com/api/users/teacher/:TEACHERID/students

DATA TO SEND UP
{
    "name": "bobby",
    "email": "bobby@gmail.com",
    "img_url": null,
    "subject": "software",
    "teacher_id": 6
}
```

```
TO POST A STUDENTS PROJECT
type: POST, endpoint: https://betterprofessordb.herokuapp.com/api/users/teacher/:TEACHERID/students/projects

DATA TO SEND UP
{
    "project_name": "build an api",
    "due_date": "11/26/2020",
    "student_id": 6,
    "project_type": "software",
    "desc": "all aspects of an api"
}
```
