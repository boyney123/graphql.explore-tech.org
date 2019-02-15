---
path: '/materials/gqlgen'
type: 'GitHub'
img: './screenshot.png'
material:
  title: 'gqlgen'
  url: 'https://github.com/99designs/gqlgen'
  github_url: 'https://github.com/99designs/gqlgen'
  subscribers_count: '109'
  stargazers_count: '2309'
  tags: ['codegen','dataloader','gogenerate','golang','graphql','schema-first','subscriptions']
  subtitle: 'go generate based graphql server library'
  clone_url: 'https://github.com/99designs/gqlgen.git'
  ssh_url: 'git@github.com:99designs/gqlgen.git'
  pushed_at: '2019-02-14T17:06:10Z'
  updated_at: '2019-02-15T15:03:40Z'
  author:
    name: '99designs'
    avatar: 'https://avatars1.githubusercontent.com/u/17182?v=4'
    github_url: 'https://github.com/99designs'
  latestRelease:
    tag_name: 'v0.7.2'
    name: 'v0.7.2'
    url: 'https://github.com/99designs/gqlgen/releases/tag/v0.7.2'
    created_at: '2019-02-05T00:33:23Z'
---
# gqlgen [![CircleCI](https://badgen.net/circleci/github/99designs/gqlgen/master)](https://circleci.com/gh/99designs/gqlgen) [![Read the Docs](https://badgen.net/badge/docs/available/green)](http://gqlgen.com/)

This is a library for quickly creating strictly typed graphql servers in golang.

See the [docs](https://gqlgen.com/) for a getting started guide.

### Feature comparison

| | [gqlgen](https://github.com/99designs/gqlgen) | [gophers](https://github.com/graph-gophers/graphql-go) | [graphql-go](https://github.com/graphql-go/graphql) | [thunder](https://github.com/samsarahq/thunder) | 
| --------: | :-------- | :-------- | :-------- | :-------- |
| Kind | schema first | schema first | run time types | struct first |
| Boilerplate | less | more | more | some |
| Docs | [docs](https://gqlgen.com) & [examples](https://github.com/99designs/gqlgen/tree/master/example) | [examples](https://github.com/graph-gophers/graphql-go/tree/master/example/starwars) | [examples](https://github.com/graphql-go/graphql/tree/master/examples) | [examples](https://github.com/samsarahq/thunder/tree/master/example)|
| Query | :+1: | :+1: | :+1: | :+1: |
| Mutation | :+1: | :construction: [pr](https://github.com/graph-gophers/graphql-go/pull/182) | :+1: | :+1: |
| Subscription | :+1: | :construction: [pr](https://github.com/graph-gophers/graphql-go/pull/182) | :+1: | :+1: |
| Type Safety | :+1: | :+1: | :no_entry: | :+1: | 
| Type Binding | :+1: | :construction: [pr](https://github.com/graph-gophers/graphql-go/pull/194) | :no_entry: | :+1: |
| Embedding | :+1: | :no_entry: | :construction: [pr](https://github.com/graphql-go/graphql/pull/371) | :no_entry: |
| Interfaces | :+1: | :+1: | :+1: | :no_entry: [is](https://github.com/samsarahq/thunder/issues/78) |
| Generated Enums | :+1: | :no_entry: | :no_entry: | :no_entry: |
| Generated Inputs | :+1: | :no_entry: | :no_entry: | :no_entry: |
| Stitching gql | :clock1: [is](https://github.com/99designs/gqlgen/issues/5) | :no_entry: | :no_entry: | :no_entry: |
| Opentracing | :+1: | :+1: | :no_entry: | :scissors:[pr](https://github.com/samsarahq/thunder/pull/77) |
| Hooks for error logging | :+1: | :no_entry: | :no_entry: | :no_entry: |
| Dataloading | :+1: | :+1: | :+1: | :warning: |
| Concurrency | :+1: | :+1: | :+1: | :+1: |
| Custom errors & error.path | :+1: | :no_entry: [is](https://github.com/graphql-go/graphql/issues/259) | :no_entry: | :no_entry: |
| Query complexity | :+1: | :no_entry: [is](https://github.com/graphql-go/graphql/issues/231) | :no_entry: | :no_entry: |


### Help

Create an issue or join the conversation on [gitter](https://gitter.im/gqlgen)
