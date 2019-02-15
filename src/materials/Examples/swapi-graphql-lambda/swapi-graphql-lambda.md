---
path: '/materials/swapi-graphql-lambda'
type: 'GitHub'
img: './screenshot.png'
material:
  title: 'swapi-graphql-lambda'
  url: 'https://github.com/alvinthen/swapi-graphql-lambda'
  github_url: 'https://github.com/alvinthen/swapi-graphql-lambda'
  subscribers_count: '1'
  stargazers_count: '16'
  tags: ['aws-lambda','graphql']
  subtitle: 'A GraphQL schema hosted in AWS Lambda wrapping http://swapi.co/'
  clone_url: 'https://github.com/alvinthen/swapi-graphql-lambda.git'
  ssh_url: 'git@github.com:alvinthen/swapi-graphql-lambda.git'
  pushed_at: '2016-06-13T07:00:20Z'
  updated_at: '2018-12-13T13:14:40Z'
  author:
    name: 'alvinthen'
    avatar: 'https://avatars2.githubusercontent.com/u/771989?v=4'
    github_url: 'https://github.com/alvinthen'
  latestRelease:
    tag_name: null
    name: null
    url: null
    created_at: null
---
# swapi-graphql-lambda
A [GraphQL](http://graphql.org/)
schema hosted in
[AWS Lambda](https://aws.amazon.com/lambda/)
wrapping http://swapi.co/

Based on https://github.com/graphql/swapi-graphql

# Getting started
1. Install dependencies with
```
npm install
```
1. Bundle the project into one file with
```
npm run build
```
1. Upload the generated `swapiLambda.js` to AWS Lambda
1. Set Lambda handler to `swapiLambda.handler`
1. Test the Lambda function by supplying test event as below
```js
{'query': 'query{allPlanets{planets{name}}}'}
```
