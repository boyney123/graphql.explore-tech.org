---
path: '/materials/relay'
type: 'GitHub'
img: './screenshot.png'
material:
  title: 'relay'
  url: 'https://github.com/graphql-go/relay'
  github_url: 'https://github.com/graphql-go/relay'
  subscribers_count: '19'
  stargazers_count: '300'
  tags: ['']
  subtitle: 'A Go/Golang library to help construct a graphql-go server supporting react-relay.'
  clone_url: 'https://github.com/graphql-go/relay.git'
  ssh_url: 'git@github.com:graphql-go/relay.git'
  pushed_at: '2018-04-19T17:59:05Z'
  updated_at: '2019-02-15T14:19:05Z'
  author:
    name: 'graphql-go'
    avatar: 'https://avatars3.githubusercontent.com/u/14210643?v=4'
    github_url: 'https://github.com/graphql-go'
  latestRelease:
    tag_name: null
    name: null
    url: null
    created_at: null
---
# graphql-relay-go [![Build Status](https://travis-ci.org/graphql-go/relay.svg)](https://travis-ci.org/graphql-go/relay) [![GoDoc](https://godoc.org/graphql-go/relay?status.svg)](https://godoc.org/github.com/graphql-go/relay) [![Coverage Status](https://coveralls.io/repos/graphql-go/relay/badge.svg?branch=master&service=github)](https://coveralls.io/github/graphql-go/relay?branch=master) [![Join the chat at https://gitter.im/graphql-go/graphql](https://badges.gitter.im/Join%20Chat.svg)](https://gitter.im/graphql-go/graphql?utm_source=badge&utm_medium=badge&utm_campaign=pr-badge&utm_content=badge)

A Go/Golang library to help construct a [graphql-go](https://github.com/graphql-go/graphql) server supporting react-relay.

See a live demo here: http://bit.ly/try-graphql-go

Source code for demo can be found at https://github.com/graphql-go/playground

### Notes:
This is based on alpha version of `graphql-go` and `graphql-relay-go`. 
Be sure to watch both repositories for latest changes.

### Tutorial
[Learn Golang + GraphQL + Relay Part 2: Your first Relay application]( https://wehavefaces.net/learn-golang-graphql-relay-2-a56cbcc3e341)

### Test
```bash
$ go get github.com/graphql-go/relay
$ go build && go test ./...
```

### TODO:
- [x] Starwars example
- [x] HTTP handler to easily create a Relay-compliant GraphQL server _(Moved to: [graphql-go-handler](https://github.com/graphql-go/handler))_
- [ ] In-code documentation (godocs)
- [ ] Usage guide / user documentation
- [x] Tutorial
- [ ] End-to-end example (graphql-relay-go + react-relay)
