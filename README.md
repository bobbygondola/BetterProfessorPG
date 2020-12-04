# BetterProfessorPG
## Backend API of BetterProfessor Transfered To Postgres

BASE_URL = https://betterprofessordb.herokuapp.com/

## LOGIN/REGISTER
```
TO REGISTER
type: POST, endpoint: https://betterprofessordb.herokuapp.com/api/auth/register

DATA TO SEND UP
{
    "username":"Bobbyg",
    "password":"BobbySWE",
    "subject":"software"
}
```
```
TO LOGIN
type: POST, endpoint: https://betterprofessordb.herokuapp.com/api/auth/login

DATA TO SEND UP
{
    "username":"Bobbyg",
    "password":"BobbySWE"
}
```
<br />

## Important! To process requests to this api, you need to pass up the proper Authorization. 
By registering you create a cookie.
Pass the cookie as a header for Authorization
```
headers: {
        Authorization: "Client-ID ztoTzxhY0SrZXvT_Lyrf-Ctb1ES7vogdBImr0R2Esg0"
    }
```

<br />

## GETS
```
TO GET ALL STUDENTS BY TEACHER ID
type: GET, endpoint: https://betterprofessordb.herokuapp.com/api/users/teacher/:TEACHERID/students

RESPONSE
[
    {
        "id": 6,
        "name": "bobby",
        "img_url": null,
        "email": "bobby@gmail.com",
        "subject": "software",
        "teacher_id": 6
    }
]
```
```
TO GET SPECIFIC STUDENT BY TEACHER ID AND STUDENT ID
type: GET, endpoint: https://betterprofessordb.herokuapp.com/api/users/teacher/:TEACHERID/students/:STUDENTID

RESPONSE

[
    {
        "id": 6,
        "name": "bobby",
        "img_url": null,
        "email": "bobby@gmail.com",
        "subject": "software",
        "teacher_id": 6
    }
]
```

```
TO GET ALL PROJECTS BY TEACHER ID
type: GET, endpoint: https://betterprofessordb.herokuapp.com/api/users/teacher/:TEACHERID/students/projects

RESPONSE

[
    {
        "id": 5,
        "teacher_id": 6,
        "student_id": 6,
        "name": "bobby",
        "project_name": "build an api",
        "due_date": "11/26/2020",
        "project_type": "software",
        "desc": "all aspects of an api",
        "completed": null
    },
    {
        "id": 6,
        "teacher_id": 6,
        "student_id": 6,
        "name": "bobby",
        "project_name": "build an api",
        "due_date": "11/26/2020",
        "project_type": "software",
        "desc": "all aspects of an api",
        "completed": null
    }
]

```

## POSTS
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

RESPONSE
{
    "message": "new student added!"
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

RESPONSE
{
    "message": "new project created"
}
```
<br />

## EDITS
```
TO EDIT STUDENT INFO
type: PUT, endpoint: https://betterprofessordb.herokuapp.com/api/users/teacher/:TEACHERID/students/:STUDENTID

DATA TO SEND UP
ALL NORMAL INFO, PLUS ANY EDITED
{
    "name": "bobbbbbbbbbbbbbby",
    "email": "bobby@gmail.com",
    "img_url": null,
    "subject": "software",
    "teacher_id": 6
}

```
```
TO EDIT PROJECT INFO
type: PUT, endpoint: https://betterprofessordb.herokuapp.com/api/users/teacher/:TEACHERID/students/projects/:PROJECTID

DATA TO SEND UP
ALL NORMAL INFO, PLUS ANY EDITED
{
    "project_name": "build an api",
    "due_date": "11/30/2020", <- NEW DATE!
    "student_id": 6,
    "project_type": "software",
    "desc": "all aspects of an api"
}
```

<br />

## DELETES

```
TO DELETE STUDENT'S PROJECT

type: DELETE, endpoint: https://betterprofessordb.herokuapp.com/api/users/teacher/:TEACHERID/students/projects/:PROJECTID

DELETES PROJECT, SENDS BACK A MESSAGE

```
```
TO DELETE A STUDENT

type: DELETE, endpoint: https://betterprofessordb.herokuapp.com/api/users/teacher/:TEACHERID/students/:STUDENTID

DELETES STUDENT, SENDS BACK A MESSAGE

```
