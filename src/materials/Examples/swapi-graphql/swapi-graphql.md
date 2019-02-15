---
path: '/materials/swapi-graphql'
type: 'GitHub'
img: './screenshot.png'
material:
  title: 'swapi-graphql'
  url: 'http://graphql.org/swapi-graphql/'
  github_url: 'https://github.com/graphql/swapi-graphql'
  subscribers_count: '46'
  stargazers_count: '703'
  tags: ['graphql','swapi','swapi-graphql']
  subtitle: 'A GraphQL schema and server wrapping SWAPI.'
  clone_url: 'https://github.com/graphql/swapi-graphql.git'
  ssh_url: 'git@github.com:graphql/swapi-graphql.git'
  pushed_at: '2018-10-01T09:29:26Z'
  updated_at: '2019-02-15T06:37:14Z'
  author:
    name: 'graphql'
    avatar: 'https://avatars0.githubusercontent.com/u/12972006?v=4'
    github_url: 'https://github.com/graphql'
  latestRelease:
    tag_name: null
    name: null
    url: null
    created_at: null
---
SWAPI GraphQL Wrapper
=====================

A wrapper around [SWAPI](http://swapi.co) built using GraphQL.

Uses:

* [graphql-js](https://github.com/graphql/graphql-js) - a JavaScript GraphQL runtime.
* [DataLoader](https://github.com/facebook/dataloader) - for coalescing and caching fetches.
* [express-graphql](https://github.com/graphql/express-graphql) - to provide HTTP access to GraphQL.
* [GraphiQL](https://github.com/graphql/graphiql) - for easy exploration of this GraphQL server.

Try it out at: http://graphql.org/swapi-graphql

[![Deploy to Heroku](https://www.herokucdn.com/deploy/button.svg)](https://heroku.com/deploy)
[![Deploy to now](https://deploy.now.sh/static/button.svg)](https://deploy.now.sh/?repo=https://github.com/graphql/swapi-graphql)

## Getting Started

Install dependencies with

```sh
npm install
```

## SWAPI Wrapper

The SWAPI wrapper is in `./swapi`. It can be tested with:

```sh
npm test
```

## Local Server

A local express server is in `./server`. It can be run with:

```sh
npm run build # Only if you changed something
npm start
```

A GraphiQL instance will be opened at http://localhost:8080/ (or similar; the actual port number will be printed to the console) to explore the API.
