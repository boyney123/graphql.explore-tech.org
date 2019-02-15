---
path: '/materials/c-graphqlparser'
type: 'GitHub'
img: './screenshot.png'
material:
  title: 'c-graphqlparser'
  url: 'https://github.com/tecbot/c-graphqlparser'
  github_url: 'https://github.com/tecbot/c-graphqlparser'
  subscribers_count: '4'
  stargazers_count: '27'
  tags: ['']
  subtitle: 'Go-gettable version of the libgraphqlparser C library for parsing GraphQL'
  clone_url: 'https://github.com/tecbot/c-graphqlparser.git'
  ssh_url: 'git@github.com:tecbot/c-graphqlparser.git'
  pushed_at: '2015-10-17T13:56:54Z'
  updated_at: '2018-12-11T15:04:52Z'
  author:
    name: 'tecbot'
    avatar: 'https://avatars1.githubusercontent.com/u/194458?v=4'
    github_url: 'https://github.com/tecbot'
  latestRelease:
    tag_name: null
    name: null
    url: null
    created_at: null
---
# c-graphqlparser

This is a go-gettable version of the [libgraphqlparser](https://github.com/graphql/libgraphqlparser) C library for use in Go code that needs to link against the libgraphqlparser C library but wants to integrate with `go get` and `go build`.

To use in your project you need to import the package and set appropriate cgo flag directives:

```
import _ 'github.com/tecbot/c-graphqlparser'

// #cgo CXXFLAGS: -std=c++11
// #cgo CPPFLAGS: -I <relative-path>/c-graphqlparser/internal
// #cgo darwin LDFLAGS: -Wl,-undefined -Wl,dynamic_lookup
// #cgo !darwin LDFLAGS: -Wl,-unresolved-symbols=ignore-all
import 'C'
```

To update the upstream version of libgraphqlparser you'll want to run `./import.sh`.
