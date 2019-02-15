---
path: '/materials/graphql-loader'
type: 'GitHub'
img: './screenshot.png'
material:
  title: 'graphql-loader'
  url: 'https://github.com/applification/graphql-loader'
  github_url: 'https://github.com/applification/graphql-loader'
  subscribers_count: '1'
  stargazers_count: '47'
  tags: ['']
  subtitle: 'GraphQL Express Facebook DataLoader'
  clone_url: 'https://github.com/applification/graphql-loader.git'
  ssh_url: 'git@github.com:applification/graphql-loader.git'
  pushed_at: '2016-03-17T18:52:49Z'
  updated_at: '2018-11-13T03:27:21Z'
  author:
    name: 'applification'
    avatar: 'https://avatars3.githubusercontent.com/u/2033597?v=4'
    github_url: 'https://github.com/applification'
  latestRelease:
    tag_name: null
    name: null
    url: null
    created_at: null
---
# GraphQL + Express + Facebook DataLoader

> A small project to illustrate using GraphQL Queries with a REST API combined with the Facebook DataLoader library.

#### Project Goals:
* Create a GraphQL + Express + Loader project that is as __simple as possible
* __GraphiQL Integration__ to send Queries / Mutations
* Ability to use __Postman or other REST Client__ to POST GraphQL Queries / Mutations
* Use of __ES6__ (but minimally)
* Use GraphQL queries to make REST API calls using Facebook DataLoader so that the number of API requests is reduced to a minimum

## SWAPI REST API
This project makes use of the Star Wars REST API at http://swapi.co/ to demonstrate a GraphQL Server running on Express integrated with Facebook DataLoder to cache and reduce the number of API calls required to return JSON data.

## Installation

#### ES6 / Node V4+
This project makes use of ES6 which requires a 4+ version of Node https://nodejs.org/en/download/

#### NPM Modules
The following NPM modules are required in package.json:

* express
* express-graphql
* graphql
* axios
* dataloader
* babel-cli
* babel-preset-es2015
* nodemon

Install with:

```js
npm install
```

#### Run the project

##### Running in Development
npm dev is configured with nodmon so that the server automatically restarts when code files are changes
```js
npm run dev
```

##### Running in Production
```js
npm start
```
npm prestart will run first, transpile the ES6 code and save to _dist_ folder. npm start will then run the code directly from the _dist_ folder


## Running GraphQL Queries
You can run these queries within GraphiQL, alternatively you can run them within a tool such as Postman. To do so ensure you POST the query / mutation in the body and set the content-type to GraphQL.

#### Find a film by Id
```js
query {
  film (id:'1') {
    title,
    director
  }
}
```

#### Find a vehicle by Id
```js
query {
  vehicle(id: '8') {
    name
  }
}
```

#### Find a starship by Id
```js
query {
  starship(id:'5') {
    name
  }
}
```


#### Find species by Id
```js
query {
  species(id:'1') {
    name
  }
}
```

#### Find planet by Id
```js
query {
	planet(id: '1') {
    name
  }
}
```


#### Find character by Id
```js
query {
  character (id: '1') {
    name,
    height,
    mass,
    hair_color,
    skin_color,
    eye_color,
    birth_year,
    gender,
    homeworld {
      name
      rotation_period
      orbital_period
      diameter
      climate
      gravity
      terrain
      surface_water
      population
      residents {
        name
        birth_year
        gender
      }
      created
      edited
    },
    films {
      title
      director
    },
    species {
      name,
      classification,
      designation,
      language,
      people {
        name
        birth_year
        gender
      },
      films {
        title
        director
      }
    }
    vehicles{
      name,
      model,
      cost_in_credits,
      length,
      crew,
      passengers,
      vehicle_class,
      pilots {
        name
      },
      films {
        title
      }
    }
    starships{
      name,
      model,
      cost_in_credits,
      length,
      crew,
      passengers,
      hyperdrive_rating,
      starship_class,
      pilots {
        name
      },
      films {
        title
      }
    }
    created,
    edited
  }
}
```
