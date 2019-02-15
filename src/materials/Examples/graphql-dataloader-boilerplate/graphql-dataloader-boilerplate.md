---
path: '/materials/graphql-dataloader-boilerplate'
type: 'GitHub'
img: './screenshot.png'
material:
  title: 'graphql-dataloader-boilerplate'
  url: 'https://github.com/entria/graphql-dataloader-boilerplate'
  github_url: 'https://github.com/entria/graphql-dataloader-boilerplate'
  subscribers_count: '33'
  stargazers_count: '368'
  tags: ['bleeding-edge','boilerplate','dataloader','graphql','jest','relay','repl']
  subtitle: 'Very simple boilerplate using GraphQL and DataLoader'
  clone_url: 'https://github.com/entria/graphql-dataloader-boilerplate.git'
  ssh_url: 'git@github.com:entria/graphql-dataloader-boilerplate.git'
  pushed_at: '2018-12-04T11:33:17Z'
  updated_at: '2019-01-29T18:13:28Z'
  author:
    name: 'entria'
    avatar: 'https://avatars3.githubusercontent.com/u/23662721?v=4'
    github_url: 'https://github.com/entria'
  latestRelease:
    tag_name: null
    name: null
    url: null
    created_at: null
---
# GraphQL DataLoader Boilerplate

[![CircleCI](https://circleci.com/gh/entria/graphql-dataloader-boilerplate.svg?style=svg)](https://circleci.com/gh/entria/graphql-dataloader-boilerplate)
[![codecov](https://codecov.io/gh/entria/graphql-dataloader-boilerplate/branch/master/graph/badge.svg)](https://codecov.io/gh/entria/graphql-dataloader-boilerplate)

Boilerplate using GraphQL and DataLoader

## :star: TypeScript :star:
Check it out TS version of this boilerplate: https://github.com/entria/graphql-dataloader-boilerplate-ts

## Blog Posts
* [How to implement viewerCanSee in  GraphQL](https://medium.com/@sibelius/how-to-implement-viewercansee-in-graphql-78cc48de7464#.d9vpk6fvx)
* [Testing a GraphQL Server using Jest](https://medium.com/@sibelius/testing-a-graphql-server-using-jest-4e00d0e4980e)
* [Parallel testing a GraphQL Server with Jest](https://itnext.io/parallel-testing-a-graphql-server-with-jest-44e206f3e7d2)
* [Encapsulating data on GraphQL using Loaders](https://medium.com/@jonathancardoso/encapsulating-data-on-graphql-using-loaders-9387b805c4fc)

### Directory Structure

```
├── /data/                   # GraphQL generated schema
├── /repl/                   # Read-Eval-Print-Loop (REPL) configuration
├── /scripts/                # Generate GraphQL schema script
├── /src/                    # Source code of GraphQL Server
│   ├── /core/               # Core types and helper files, can be used like a global module
│   ├── /interface/          # NodeInterface (Relay) and other GraphQL Interfaces
│   ├── /modules/            # Modules (think on modules like isolated pieces of your code)
│   │   │── /mutation/       # Module mutations (add an index file to be used on MutationType)
│   │   │── /subscription/   # Module subscriptions (add an index file to be used on SubscriptionType)
│   │   │── /enum/           # Enums related to this module
├── /test/                   # Test helpers
```

## Create-GraphQL
If you want to move faster you should use [create-graphql](https://github.com/lucasbento/create-graphql) to simplify the creation of a GraphQL Server

## Command

#### Setup
```bash
yarn install
```
Note: If you do not have mongodb installed, please install it:
```bash
brew install mongodb
```
#### Develop
```bash
yarn watch
```

### Test
```bash
yarn test
```

Or
```bash
yarn test:watch
```

### Docker and docker-compose
No needs for installing dependencies or running `mongod` in another terminal window

```bash
docker-compose build && docker-compose up
```

Test
```bash
docker-compose -f docker-compose.test.yml build && docker-compose -f docker-compose.test.yml up
```

### Production
```bash
# first compile the code
yarn build

# run graphql compiled server
yarn start
```

### Flow
```bash
yarn flow
```

Or
```bash
flow
```

### REPL server
```bash
yarn repl

awesome > const user = await M.User.find()
```

Yep, await syntax works on the repl, it is awesome, tks @princejwesley (https://gist.github.com/princejwesley/a66d514d86ea174270210561c44b71ba)

### Schema
Update your schema
```bash
yarn update-schema
```

Take a look on the [Schema](https://github.com/entria/graphql-dataloader-boilerplate/blob/master/data/schema.graphql)
