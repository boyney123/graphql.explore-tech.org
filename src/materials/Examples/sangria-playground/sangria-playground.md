---
path: '/materials/sangria-playground'
type: 'GitHub'
img: './screenshot.png'
material:
  title: 'sangria-playground'
  url: 'http://try.sangria-graphql.org'
  github_url: 'https://github.com/sangria-graphql/sangria-playground'
  subscribers_count: '6'
  stargazers_count: '65'
  tags: ['']
  subtitle: 'An example of GraphQL server written with Play and sangria'
  clone_url: 'https://github.com/sangria-graphql/sangria-playground.git'
  ssh_url: 'git@github.com:sangria-graphql/sangria-playground.git'
  pushed_at: '2018-10-22T16:29:38Z'
  updated_at: '2019-01-29T09:26:38Z'
  author:
    name: 'sangria-graphql'
    avatar: 'https://avatars0.githubusercontent.com/u/13525856?v=4'
    github_url: 'https://github.com/sangria-graphql'
  latestRelease:
    tag_name: null
    name: null
    url: null
    created_at: null
---
## Sangria playground

This is an example of a [GraphQL](https://facebook.github.io/graphql) server written with [Play framework](https://www.playframework.com) and
[Sangria](http://sangria-graphql.org). It also serves as a playground. On the right hand side you can see a textual representation of the GraphQL
schema which is implemented on the server and that you can query here. On the left hand side
you can execute a GraphQL queries and see the results of its execution.

It's available here:

[http://try.sangria-graphql.org](http://try.sangria-graphql.org)

This is just a small demonstration. It really gets interesting when you start to play with the schema on the server side. Fortunately it's
pretty easy to do. Since it's a simple Play application, all it takes to start playground locally and start playing with the schema is this:

```bash
$ git clone https://github.com/sangria-graphql/sangria-playground.git
$ cd sangria-playground
$ sbt run
```

Now you are ready to point your browser to [http://localhost:9000](http://localhost:9000).
The only prerequisites are [SBT](http://www.scala-sbt.org/download.html) and [Java 8](http://www.oracle.com/technetwork/java/javase/downloads/jdk8-downloads-2133151.html).
