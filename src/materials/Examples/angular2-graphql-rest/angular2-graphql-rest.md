---
path: '/materials/angular2-graphql-rest'
type: 'GitHub'
img: './screenshot.png'
material:
  title: 'angular2-graphql-rest'
  url: 'https://github.com/kamilkisiela/angular2-graphql-rest'
  github_url: 'https://github.com/kamilkisiela/angular2-graphql-rest'
  subscribers_count: '5'
  stargazers_count: '29'
  tags: ['']
  subtitle: 'An Angular2 app with REST Api and GraphQL (apollo-client and angular2-apollo)'
  clone_url: 'https://github.com/kamilkisiela/angular2-graphql-rest.git'
  ssh_url: 'git@github.com:kamilkisiela/angular2-graphql-rest.git'
  pushed_at: '2016-09-06T16:40:15Z'
  updated_at: '2019-01-01T20:49:32Z'
  author:
    name: 'kamilkisiela'
    avatar: 'https://avatars3.githubusercontent.com/u/8167190?v=4'
    github_url: 'https://github.com/kamilkisiela'
  latestRelease:
    tag_name: null
    name: null
    url: null
    created_at: null
---
# Angular2 with REST Api and GraphQL

An example app with REST Api working **side by side** with GraphQL using [**Apollo Client**](https://github.com/apollostack/apollo-client) with [**angular2-apollo**](https://github.com/apollostack/angular2-apollo).

### Step by Step

I created a *step by step* process where you can see how to migrate from REST Api to using just GraphQL.

You can find it on the [`steps`](https://github.com/kamilkisiela/angular2-graphql-rest/tree/steps) branch.

**Starting point** - Working App with REST Api

**`1.X`** - Creating GraphQL endpoint

**`2.X`** - Building an app where REST Api works side by side with GraphQL

**`3.X`** - Migrating to use only GraphQL

### App

##### working with REST Api [*#rest*](https://github.com/kamilkisiela/angular2-graphql-rest/tree/rest)

```bash
git checkout rest
```

##### working with GraphQL [*#graphql*](https://github.com/kamilkisiela/angular2-graphql-rest/tree/graphql)

```bash
git checkout graphql
```

##### working with REST Api + GraphQL [*#both*](https://github.com/kamilkisiela/angular2-graphql-rest/tree/both)

```bash
git checkout both
```

### How to start

We have to create needed sql tables

```bash
npm run migrate
```

Then load some data

```bash
npm run seed
```

Now, we're ready to start an app

```bash
npm start
```

**OR just**

```bash
npm run start:clean
```

to run all the commands above at once.
