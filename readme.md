<img src="https://media-exp1.licdn.com/dms/image/C4E0BAQEUMY9i06oiyQ/company-logo_200_200/0?e=2159024400&v=beta&t=urVuhM80wvBZ9QOYAwkuKQoVVryAWm1ZeuKvYzmvo74" title="Voicemod" alt="FVCproductions">


# Voicemod Test

This repo contains the test for the FullStack position

**Stack used**

- FRONT --> Vue
- BACK --> NodeJS Express TypeScript
- BBDD --> MongoDB with Mongoose

**Folder Structure**
```
app
├── client
│      └── src      
│           ├── public
│           ├── src
│           │    ├── assets
│           │    ├── components
│           │    ├── plugins 
│           │    ├── router
│           │    ├── store
│           │    ├── utils
│           │    └── views
│           │
│           └── test
│               
└── server
      └── auth
            └── src      
                 ├── middleware
                 ├── models
                 ├── routes
                 │     └── test  
                 ├── services
                 └── test  
    

```
---

## Table of Contents

- [Installation](#installation)
- [Tests](#tests)

---

## Installation

Client and server are both inside docker images, ready to up and go!!

### Clone

- Clone this repo to your local machine using `https://github.com/asolerp/voicemod`

### Setup

> in the root of the proyect where docker-compose file is

```shell
docker-compose up --build
```

---

## Tests

- To run back end test
```shell
npm run test
```
- To run front end test
```shell
npm run test:unit
```

---
