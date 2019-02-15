---
path: '/materials/ts-graphql-plugin'
type: 'GitHub'
img: './screenshot.png'
material:
  title: 'ts-graphql-plugin'
  url: 'https://github.com/Quramy/ts-graphql-plugin'
  github_url: 'https://github.com/Quramy/ts-graphql-plugin'
  subscribers_count: '6'
  stargazers_count: '238'
  tags: ['graphql','language-server','plugin','typescript']
  subtitle: 'TypeScript Language Service Plugin for GraphQL developers'
  clone_url: 'https://github.com/Quramy/ts-graphql-plugin.git'
  ssh_url: 'git@github.com:Quramy/ts-graphql-plugin.git'
  pushed_at: '2019-02-14T18:55:40Z'
  updated_at: '2019-02-13T20:12:18Z'
  author:
    name: 'Quramy'
    avatar: 'https://avatars3.githubusercontent.com/u/1262998?v=4'
    github_url: 'https://github.com/Quramy'
  latestRelease:
    tag_name: 'v1.1.0'
    name: 'v1.1.0'
    url: 'https://github.com/Quramy/ts-graphql-plugin/releases/tag/v1.1.0'
    created_at: '2017-06-11T19:04:17Z'
---
# ts-graphql-plugin

[![wercker status](https://app.wercker.com/status/c2528abe2327a0b1dfa007225f2de471/s/master 'wercker status')](https://app.wercker.com/project/byKey/c2528abe2327a0b1dfa007225f2de471) [![npm version](https://badge.fury.io/js/ts-graphql-plugin.svg)](https://badge.fury.io/js/ts-graphql-plugin) ![deps](https://david-dm.org/quramy/ts-graphql-plugin.svg) [![Greenkeeper badge](https://badges.greenkeeper.io/Quramy/ts-graphql-plugin.svg)](https://greenkeeper.io/) [![GitHub license](https://img.shields.io/badge/license-MIT-blue.svg)](https://raw.githubusercontent.com/Quramy/ts-graphql-plugin/master/LICENSE.txt)

TypeScript Language Service Plugin to help GraphQL client development(e.g. [Apollo](https://github.com/apollographql/apollo-client)).
This plugin parses and analyzes template strings in .ts and provides functions like [GraphiQL](https://github.com/graphql/graphiql) to your editor or IDE.

![capture](https://raw.githubusercontent.com/Quramy/ts-graphql-plugin/master/capture.gif)

## Features

This plugin extends TypeScript Language Service and provides the following features:

- Completion suggestion
- Get GraphQL diagnostics

## Usage

First, confirm that your project has typescript(v2.3.x or later) and graphql.

To install this plugin, execute the following:

```sh
npm install ts-graphql-plugin -D
```

And configure `plugins` section in your tsconfig.json, for example:

```json
{
  'compilerOptions': {
    'module': 'commonjs',
    'target': 'es5',
    'plugins': [
      {
        'name': 'ts-graphql-plugin',
        'schema': 'path-or-url-to-your-schema.json',
        'tag': 'gql' 
      }
    ]
  }
}
```

It's ready to go. Launch your TypeScript IDE.

### Plugin options

#### `schema`
It's a required parameter and should point a file or URL which contains your GraphQL schema data such as :

```js
{
  'data': {
    '__schema': {
      'queryType': {
        'name': 'Query'
      },
      'types': [
        {
          'kind': 'OBJECT',
          'name': 'Query',
          'description': null,
          'fields': [
            {
              'name': 'viewer',
              :
```

You can generate a schema data .json file using `introspectionQuery`. If you want detail, see https://facebook.github.io/relay/docs/guides-babel-plugin.html#schema-json .

You can pass URL and custom HTTP headers. It's useful to use an existing GraphQL server like [GitHub v4 API](https://developer.github.com/v4/). For example:

```json
  'schema': {
    'http': {
      'url': 'https://api.github.com/graphql',
      'headers': {
        'Authorization': 'Bearer YOUR_GITHUB_API_TOKEN'
      }
    }
  },
```

The `schema` option accepts the following type:

```ts
type SchemaConfig = string |
{
  file: {
    path: string;
  }
} |
{
  http: {
    url: string;
    headers?: { [key: string]: string };
  }
};
```

#### `tag`
It's optional. When it's set, this plugin works only if the target template string is tagged by a function whose name is equal to this parameter.

If not set, this plugin treats all template strings in your .ts as GraphQL query.

For example:

```ts
import gql from 'graphql-tag';

// when tag paramter is 'gql'
const str1 = gql`query { }`;     // work
const str2 = `<div></div>`;       // don't work
const str3 = otherTagFn`foooo`;  // don't work
```

It's useful to write multiple kinds template strings(e.g. one is Angular Component template, another is Apollo GraphQL query).

## Available editors
I've checked the operation with the following editors:

- Visual Studio Code
- Vim (with tsuquyomi)

And the following editor have TypeScript plugin with LanguageService so they're compatible with this plugin:

- Emacs
- Sublime text
- Eclipse

## How it works
This plugin relies on [graphql-language-service](https://github.com/graphql/graphql-language-service) and adapts it for [TypeScript Language Service](https://github.com/Microsoft/TypeScript/wiki/Architectural-Overview#layer-overview).

## License
This software is released under the MIT License, see LICENSE.txt.
