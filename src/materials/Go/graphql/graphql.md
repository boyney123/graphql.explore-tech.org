---
path: '/materials/graphql'
type: 'GitHub'
img: './screenshot.png'
material:
  title: 'graphql'
  url: 'https://github.com/tmc/graphql'
  github_url: 'https://github.com/tmc/graphql'
  subscribers_count: '10'
  stargazers_count: '49'
  tags: ['']
  subtitle: 'graphql parser + utilities'
  clone_url: 'https://github.com/tmc/graphql.git'
  ssh_url: 'git@github.com:tmc/graphql.git'
  pushed_at: '2017-06-02T05:21:03Z'
  updated_at: '2019-01-31T21:54:39Z'
  author:
    name: 'tmc'
    avatar: 'https://avatars1.githubusercontent.com/u/3977?v=4'
    github_url: 'https://github.com/tmc'
  latestRelease:
    tag_name: null
    name: null
    url: null
    created_at: null
---
graphql
=======

utilities for dealing with GraphQL queries in Go.

This package focuses on actually creating GraphQL servers and expects you to describe your schema directly in Go.

To that end this library initially has not emphasized GraphQL schema definition parsing and instead focuses on Query Documents and writing real servers.

license: ISC

version: Based on October2015 GraphQL Specification

status: unstable

contributions: encouraged


hacking
=======

 * go generate ./...
 * go test ./...
