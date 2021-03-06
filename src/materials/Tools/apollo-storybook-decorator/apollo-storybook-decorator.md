---
path: '/materials/apollo-storybook-decorator'
type: 'GitHub'
img: './screenshot.png'
material:
  title: 'apollo-storybook-decorator'
  url: 'https://github.com/abhiaiyer91/apollo-storybook-decorator'
  github_url: 'https://github.com/abhiaiyer91/apollo-storybook-decorator'
  subscribers_count: '6'
  stargazers_count: '184'
  tags: ['angular','apollo-client','graphql','react','storybook','vue']
  subtitle: 'Wrap your storybook environment with Apollo Client, provide mocks for isolated UI testing with GraphQL'
  clone_url: 'https://github.com/abhiaiyer91/apollo-storybook-decorator.git'
  ssh_url: 'git@github.com:abhiaiyer91/apollo-storybook-decorator.git'
  pushed_at: '2018-12-19T21:55:55Z'
  updated_at: '2019-02-14T16:38:43Z'
  author:
    name: 'abhiaiyer91'
    avatar: 'https://avatars0.githubusercontent.com/u/2359375?v=4'
    github_url: 'https://github.com/abhiaiyer91'
  latestRelease:
    tag_name: null
    name: null
    url: null
    created_at: null
---
# Apollo Storybook Decorator

<p align='center'>
  <img width='200' height='200' src='apollo-storybook-decorator.png' alt='logo'>
</p>

<p align='center'>
  Wrap your React Storybook stories with Apollo Client.
</p>

## Supports

### React (Apollo Client V2)

<p>
  <a href='https://www.npmjs.com/package/apollo-storybook-react'>
    <img src='https://img.shields.io/npm/dt/apollo-storybook-react.svg' alt='Npm download'>
  </a>
</p>

### React (Apollo Client V1)

<p>
  <a href='https://www.npmjs.com/package/apollo-storybook-decorator'>
    <img src='https://img.shields.io/npm/dt/apollo-storybook-decorator.svg' alt='Npm download'>
  </a>
</p>

### React Native (Apollo Client V2)

<p>
  <a href='https://www.npmjs.com/package/apollo-storybook-react-native'>
    <img src='https://img.shields.io/npm/dt/apollo-storybook-react-native.svg' alt='Npm download'>
  </a>
</p>

### Vue (Apollo Client V2)

<p>
  <a href='https://www.npmjs.com/package/apollo-storybook-vue'>
    <img src='https://img.shields.io/npm/dt/apollo-storybook-vue.svg' alt='Npm download'>
  </a>
</p>

## Coming Soon:
- Angular

### The Gist

- Provide GraphQL type definitions to the decorator.
- Provide a Mock object like you would with `graphql-tools` http://dev.apollodata.com/tools/graphql-tools/mocking.html

Take this:

```js
import React from 'react';
import { Query } from 'react-apollo';
import gql from 'graphql-tag';
import { storiesOf } from '@storybook/react';

const userQuery = gql`
  query getUser = {
    currentUser {
      name
      lastAction {
        message
      }
      avatar
      city
    }
  }
`;

function CurrentUser() {
  return (
    <Query query={userQuery}>
      {({ loading, data }) => {
        const user = data && data.currentUser;
        if (loading) {
          return <h1>Loading one second please!</h1>;
        }
        return (
          <div>
            <img src={user.avatar} />
            <h1>
              {user.name}
              from {user.city}
              said '{user.lastAction.message}'{' '}
            </h1>
          </div>
        );
      }}
    </Query>
  );
}

storiesOf('Apollo Client', module)
  .add('Current User', () => {
    return <CurrentUser />;
  })
```

To Render this:
<p align='center'>
  <img width='700' height='auto' src='storybook.png' alt='example1Book'>
</p>

### Getting Started

For Apollo Client 2.x (React)

```sh
yarn add apollo-storybook-react -D

npm install apollo-storybook-react --save-dev
```

### Full Example

```js
import React from 'react';
import { Query } from 'react-apollo';
import gql from 'graphql-tag';
import { storiesOf } from '@storybook/react';
import apolloStorybookDecorator from 'apollo-storybook-react';

const typeDefs = `
  type Query {
    helloWorld: String
  }

  schema {
    query: Query
  }
`;

const mocks = {
  Query: () => {
    return {
      helloWorld: () => {
        return 'Hello from Apollo!!';
      }
    };
  },
}

function HelloWorld() {
  return (
    <Query
      query={gql`
        query hello {
          helloWorld
        }
      `}
    >
      ({ loading, data }) => {
        const hello = data && data.helloWorld;

        if (loading) {
          return <h1>Loading one second please!</h1>;
        }

        return <h1>{hello}</h1>;
      }
    </Query>
  );
}

storiesOf('Apollo Storybook Decorator', module)
  .addDecorator(
    apolloStorybookDecorator({
      typeDefs,
      mocks,
    }),
  )
  .add('Hello World Test', () => {
    return <HelloWorld />;
  );
```

### Usage

You can add the decorator at a per story basis:

```js
storiesOf('Apollo Client', module).addDecorator(
  apolloStorybookDecorator({
    typeDefs,
    mocks,
  })
);
```

or you can add it to all stories, head to your storybook `config.js`

```js
import { configure, addDecorator } from '@storybook/react';
import apolloStorybookDecorator from 'apollo-storybook-react';
import typeDefs from '../wherever/your/typeDefs/live';
import mocks from '../wherever/your/mocks/live';

addDecorator(
  apolloStorybookDecorator({
    typeDefs,
    mocks,
  })
);

function loadStories() {
  // stories...
}

configure(loadStories, module);
```

#### Options

```js
type DecoratorType = {
  //string representing your graphql schema, if you use tools like `babel-plugin-inline-import` you can import this from a  .graphql file
  typeDefs: string | Array<string>,
  // object that resolves the keys of your graphql schema
  mocks: Object,
  apolloClientOptions?: Object,
  apolloLinkOptions?: Object,
  // optional typeResolvers for complex mocking
  typeResolvers?: Object,
  // optional context
  context?: Object,
  // optional root value
  rootValue?: Object,
  // optional resolver validation options, see: https://git.io/fALf4
  resolverValidationOptions?: Object
};
```

##### resolverValidationOptions
This option gets passed directly to `makeExecutableSchema` of `graphql-tools`, as described at https://git.io/fALf4. This allows you to override `requireResolversForResolveType` and other validation flags:
```js
storiesOf('Apollo Client', module).addDecorator(
  apolloStorybookDecorator({
    typeDefs,
    mocks,
    resolverValidationOptions: {
      requireResolversForResolveType: false,
    },
  })
);
```

### Development

This repo is split up using the `lerna` monorepo module.

To get started, clone this repo and run the following command:

```bash
$ yarn # install node deps
```

```bash
$ lerna bootstrap
```

To run the project's examples, run:

Current storybook is enabled in `apollo-storybook-react` and `apollo-storybook-v1`

```bash
$ yarn storybookReact
```

or for v1

```bash
$ yarn storybookV1
```
