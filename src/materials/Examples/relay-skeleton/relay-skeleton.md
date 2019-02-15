---
path: '/materials/relay-skeleton'
type: 'GitHub'
img: './screenshot.png'
material:
  title: 'relay-skeleton'
  url: 'https://github.com/fortruce/relay-skeleton'
  github_url: 'https://github.com/fortruce/relay-skeleton'
  subscribers_count: '7'
  stargazers_count: '123'
  tags: ['']
  subtitle: 'React, Relay, GraphQL project skeleton'
  clone_url: 'https://github.com/fortruce/relay-skeleton.git'
  ssh_url: 'git@github.com:fortruce/relay-skeleton.git'
  pushed_at: '2016-02-22T05:40:15Z'
  updated_at: '2018-12-17T18:58:13Z'
  author:
    name: 'fortruce'
    avatar: 'https://avatars1.githubusercontent.com/u/3828279?v=4'
    github_url: 'https://github.com/fortruce'
  latestRelease:
    tag_name: null
    name: null
    url: null
    created_at: null
---
React Fullstack Skeleton
========================

This skeleton project is meant to scaffold a fullstack React, Relay, and GraphQL project.
The skeleton uses webpack and gulp to manage the build and provide a great
development experience. The frontend stack is React, and Relay.
All React changes are automatically hot reloaded
using [react-hot-loader][1]. Also, the backend server is automatically
restarted upon any changes using [nodemon][2].

Both the server and frontend code are built and transpiled using webpack, while
gulp is used primarily to start the webpack-dev-server and nodemon.

## Getting started

```
npm start  # Launch the GraphQL server and the Webpack dev server.
open http://localhost:3000
```

## Directory Structure

```
build/                  // webpack build output
  public/               //  publicly served assets
    index.html
    bundle.js           // frontend bundle  built w/ webpack
  server.js             // backend server   built w/ webpack
src/
  frontend/
    components/         // React components
    containers/         // Relay Containers
    routes/             // Relay Routes
    index.js            // React.render Root component
    index.template.html // Template html file that includes React bundle
  server/
    data/               // GraphQL Schema definitions
    index.js
gulpfile.babel.js
webpack.config.js
relayPlugin.js          // babel-relay-plugin module
```

## Typical Usage

This skeleton was designed with typical use case of having a backend api serve
a React SPA. The skeleton automatically proxies all requests to `/graphql` thru
the webpack-dev-server to the backend GraphQL server.

The frontend is automatically hot reloaded whenever you save a file. See
[react-hot-loader][1] for more details on how this works. It enables you to
immediately see changes in React components without losing application state
or having to reload your page!

The backend server is automatically restarted whenever you save a file.
If, for example, you modify the GraphQL schema, then the GraphQL server will
be restarted to reflect the changes, the `schema.json` will be regenerated
using an introspection query, and the frontend code will be recompiled
to re-run `Relay.QL` queries through the `babel-relay-plugin`.

## Improvements

The following improvements need to be made:

  * Add a production build flag that removes source maps and minifies js/html.
  * Add loaders to support SASS and introduce a base stylesheet as an example.

I welcome pull requests, but I am trying to keep this skeleton relatively minimal.

[1]: http://gaearon.github.io/react-hot-loader/
[2]: http://nodemon.io/
