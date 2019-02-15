---
path: '/materials/graphql-server'
type: 'GitHub'
img: './screenshot.png'
material:
  title: 'graphql-server'
  url: 'https://github.com/RisingStack/graphql-server'
  github_url: 'https://github.com/RisingStack/graphql-server'
  subscribers_count: '32'
  stargazers_count: '823'
  tags: ['']
  subtitle: 'Example GraphQL server with Mongoose (MongoDB) and Node.js'
  clone_url: 'https://github.com/RisingStack/graphql-server.git'
  ssh_url: 'git@github.com:RisingStack/graphql-server.git'
  pushed_at: '2016-04-29T16:10:32Z'
  updated_at: '2019-02-14T00:25:24Z'
  author:
    name: 'RisingStack'
    avatar: 'https://avatars1.githubusercontent.com/u/6916052?v=4'
    github_url: 'https://github.com/RisingStack'
  latestRelease:
    tag_name: null
    name: null
    url: null
    created_at: null
---
# graphql-server
[ ![Codeship Status for RisingStack/graphql-server](https://codeship.com/projects/434da740-03bb-0133-00c5-7a6771ab2ee8/status?branch=master)](https://codeship.com/projects/89250)  
GraphQL server with Mongoose (MongoDB) and Node.js

## Like this? Check out our GraphQL ORM: [graffiti](https://github.com/RisingStack/graffiti)

**Example GraphQL query:**
```
user(id: '1') {
  name
  friends {
    name
  }
}
```

**Example response:**
```json
{
  'data': {
    'user': {
      'name': 'John Doe',
      'friends': [
        {
          'name': 'Friend One'
        },
        {
          'name': 'Friend Two'
        }]
      }
    }
  }
```

**Example GraphQL mutation:**
```
mutation updateUser($userId: String! $name: String!) {
  updateUser(id: $userId name: $name) {
    name
  }
}
```

## Used technologies

* GraphQL
* MongoDB with Mongoose
* Node/IO.js
* Babel

## How to start

You need `iojs` or >= `Node.js` v0.12.x

### install dependencies

```
npm install
```

### seed database
```
npm run seed
```

### start server
```
npm start
```

### run client
```
npm run client
```

## How to test

```
npm test
```
