---
path: '/materials/todomvc-relay-go'
type: 'GitHub'
img: './screenshot.png'
material:
  title: 'todomvc-relay-go'
  url: 'https://github.com/sogko/todomvc-relay-go'
  github_url: 'https://github.com/sogko/todomvc-relay-go'
  subscribers_count: '4'
  stargazers_count: '58'
  tags: ['']
  subtitle: 'React/Relay TodoMVC app, driven by a Golang GraphQL backend'
  clone_url: 'https://github.com/sogko/todomvc-relay-go.git'
  ssh_url: 'git@github.com:sogko/todomvc-relay-go.git'
  pushed_at: '2016-08-03T12:53:52Z'
  updated_at: '2019-02-08T04:22:36Z'
  author:
    name: 'sogko'
    avatar: 'https://avatars0.githubusercontent.com/u/78585?v=4'
    github_url: 'https://github.com/sogko'
  latestRelease:
    tag_name: null
    name: null
    url: null
    created_at: null
---
# todomvc-relay-go
Port of the [React/Relay TodoMVC app](https://github.com/facebook/relay/tree/master/examples/todo), driven by a Golang GraphQL backend

## Parts and pieces
- [golang-relay-starter-kit](https://github.com/sogko/golang-relay-starter-kit)
- [graphql-go](https://github.com/chris-ramon/graphql-go)
- [graphql-go-handler](https://github.com/sogko/graphql-go-handler)
- [graphql-relay-go](https://github.com/sogko/graphql-relay-go)

### Notes:
This is based on alpha version of `graphql-go` and `graphql-relay-go`. 
Be sure to watch both repositories for latest changes.

## Installation

1. Install dependencies for NodeJS app server
```
npm install
```
2. Install dependencies for Golang GraphQL server
```
go get -v ./...
```

## Running

Start a local server:

```
npm start
```

The above command will run both the NodeJS app server and Golang GraphQL server concurrently.

- Golang GraphQL server will be running at http://localhost:8080/graphql
- NodeJS app server will be running at http://localhost:3000

## Developing

Any changes you make to files in the `js/` directory will cause the server to
automatically rebuild the app and refresh your browser.

If at any time you make changes to `data/schema.go`, stop the server,
regenerate `data/schema.json`, and restart the server:

```
npm run update-schema
npm start
```
