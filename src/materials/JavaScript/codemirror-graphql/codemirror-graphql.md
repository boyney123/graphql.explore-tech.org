---
path: '/materials/codemirror-graphql'
type: 'GitHub'
img: './screenshot.png'
material:
  title: 'codemirror-graphql'
  url: 'https://github.com/graphql/codemirror-graphql'
  github_url: 'https://github.com/graphql/codemirror-graphql'
  subscribers_count: '26'
  stargazers_count: '135'
  tags: ['codemirror','graphql']
  subtitle: 'GraphQL mode and helpers for CodeMirror.'
  clone_url: 'https://github.com/graphql/codemirror-graphql.git'
  ssh_url: 'git@github.com:graphql/codemirror-graphql.git'
  pushed_at: '2018-10-29T06:40:58Z'
  updated_at: '2019-01-29T08:36:00Z'
  author:
    name: 'graphql'
    avatar: 'https://avatars0.githubusercontent.com/u/12972006?v=4'
    github_url: 'https://github.com/graphql'
  latestRelease:
    tag_name: 'v0.8.3'
    name: 'v0.8.3'
    url: 'https://github.com/graphql/codemirror-graphql/releases/tag/v0.8.3'
    created_at: '2018-10-29T06:40:04Z'
---
GraphQL mode for CodeMirror
===========================

[![Build Status](https://travis-ci.org/graphql/codemirror-graphql.svg?branch=master)](https://travis-ci.org/graphql/codemirror-graphql)

Provides CodeMirror with a parser mode for GraphQL along with a live linter and
typeahead hinter powered by your GraphQL Schema.

![](resources/example.gif)

### Getting Started

```
npm install --save codemirror-graphql
```

CodeMirror helpers install themselves to the global CodeMirror when they
are imported.

```js
import CodeMirror from 'codemirror';
import 'codemirror/addon/hint/show-hint';
import 'codemirror/addon/lint/lint';
import 'codemirror-graphql/hint';
import 'codemirror-graphql/lint';
import 'codemirror-graphql/mode';

CodeMirror.fromTextArea(myTextarea, {
  mode: 'graphql',
  lint: {
    schema: myGraphQLSchema
  },
  hintOptions: {
    schema: myGraphQLSchema
  }
});
```

Build for the web with [webpack](http://webpack.github.io/) or
[browserify](http://browserify.org/).
