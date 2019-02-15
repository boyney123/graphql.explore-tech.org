---
path: '/materials/hapi-graphql'
type: 'GitHub'
img: './screenshot.png'
material:
  title: 'hapi-graphql'
  url: 'https://github.com/SimonDegraeve/hapi-graphql'
  github_url: 'https://github.com/SimonDegraeve/hapi-graphql'
  subscribers_count: '3'
  stargazers_count: '110'
  tags: ['']
  subtitle: 'Create a GraphQL HTTP server with Hapi.'
  clone_url: 'https://github.com/SimonDegraeve/hapi-graphql.git'
  ssh_url: 'git@github.com:SimonDegraeve/hapi-graphql.git'
  pushed_at: '2018-02-22T14:41:12Z'
  updated_at: '2018-10-01T18:47:38Z'
  author:
    name: 'SimonDegraeve'
    avatar: 'https://avatars1.githubusercontent.com/u/907187?v=4'
    github_url: 'https://github.com/SimonDegraeve'
  latestRelease:
    tag_name: null
    name: null
    url: null
    created_at: null
---
# GraphQL Hapi Plugin

Create a GraphQL HTTP server with [Hapi](http://hapijs.com).
Port from [express-graphql](https://github.com/graphql/express-graphql).

```js
npm install --save hapi-graphql
```

### Example

```js
import Hapi from 'hapi';
import GraphQL from 'hapi-graphql';
import {GraphQLSchema} from 'graphql';

const server = new Hapi.Server();
server.connection({
  port: 3000
});

const TestSchema = new GraphQLSchema({});

server.register({
  register: GraphQL,
  options: {
    query: {
      # options, see below
    },
    // OR
    //
    // query: (request) => ({
    //   # options, see below
    // }),
    route: {
      path: '/graphql',
      config: {}
    }
  }
}, () =>
  server.start(() =>
    console.log('Server running at:', server.info.uri)
  )
);
```

### Options

The `options` key of `query` accepts the following:

  * **`schema`**: A `GraphQLSchema` instance from [`graphql-js`][].
    A `schema` *must* be provided.

  * **`context`**: A value to pass as the `context` to the `graphql()`
    function from [`graphql-js`][].

  * **`rootValue`**: A value to pass as the `rootValue` to the `graphql()`
    function from [`graphql-js`][].

  * **`pretty`**: If `true`, any JSON response will be pretty-printed.

  * **`formatError`**: An optional function which will be used to format any
    errors produced by fulfilling a GraphQL operation. If no function is
    provided, GraphQL's default spec-compliant [`formatError`][] function will
    be used.

  * **`validationRules`**: Optional additional validation rules queries must
    satisfy in addition to those defined by the GraphQL spec.

  * **`graphiql`**: If `true`, may present [GraphiQL][] when loaded directly
    from a browser (a useful tool for debugging and exploration).

#### Debugging

During development, it's useful to get more information from errors, such as
stack traces. Providing a function to `formatError` enables this:

```js
formatError: error => ({
  message: error.message,
  locations: error.locations,
  stack: error.stack
})
```
