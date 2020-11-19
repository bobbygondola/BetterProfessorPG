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
{
    "username":"Bobbyg",
    "password":"BobbySWE"
}
```

```
TO POST A NEW STUDENT
type: POST, endpoint: https://betterprofessordb.herokuapp.com/api/users/teacher/:TEACHERID/students

{
    "name": "bobby",
    "email": "bobby@gmail.com",
    "img_url": null,
    "subject": "software",
    "teacher_id": 6
}
```
