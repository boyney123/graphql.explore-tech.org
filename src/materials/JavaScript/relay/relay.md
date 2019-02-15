---
path: '/materials/relay'
type: 'GitHub'
img: './screenshot.png'
material:
  title: 'relay'
  url: 'https://facebook.github.io/relay/'
  github_url: 'https://github.com/facebook/relay'
  subscribers_count: '415'
  stargazers_count: '12086'
  tags: ['']
  subtitle: 'Relay is a JavaScript framework for building data-driven React applications.'
  clone_url: 'https://github.com/facebook/relay.git'
  ssh_url: 'git@github.com:facebook/relay.git'
  pushed_at: '2019-02-14T23:45:10Z'
  updated_at: '2019-02-15T14:01:48Z'
  author:
    name: 'facebook'
    avatar: 'https://avatars3.githubusercontent.com/u/69631?v=4'
    github_url: 'https://github.com/facebook'
  latestRelease:
    tag_name: 'v2.0.0'
    name: 'v2.0.0'
    url: 'https://github.com/facebook/relay/releases/tag/v2.0.0'
    created_at: '2019-01-26T08:18:32Z'
---
# [Relay](https://facebook.github.io/relay/) [![Build Status](https://travis-ci.org/facebook/relay.svg?branch=master)](https://travis-ci.org/facebook/relay) [![npm version](https://badge.fury.io/js/react-relay.svg)](http://badge.fury.io/js/react-relay)

Relay is a JavaScript framework for building data-driven React applications.

* **Declarative:** Never again communicate with your data store using an imperative API. Simply declare your data requirements using GraphQL and let Relay figure out how and when to fetch your data.
* **Colocation:** Queries live next to the views that rely on them, so you can easily reason about your app. Relay aggregates queries into efficient network requests to fetch only what you need.
* **Mutations:** Relay lets you mutate data on the client and server using GraphQL mutations, and offers automatic data consistency, optimistic updates, and error handling.

[See how to use Relay in your own project](http://facebook.github.io/relay/docs/en/introduction-to-relay.html) or check out the community-driven tutorial at [Learn Relay](https://www.learnrelay.org).

## Example

The [relay-examples](https://github.com/relayjs/relay-examples) repository contains an implementation of [TodoMVC](http://todomvc.com/). To try it out:

```
git clone https://github.com/relayjs/relay-examples.git
cd relay-examples/todo
yarn
yarn build
yarn start
```

Then, just point your browser at `http://localhost:3000`.

## Contribute

We actively welcome pull requests, learn how to [contribute](./.github/CONTRIBUTING.md).

## Users

We have a [community-maintained list](./USERS.md) of people and projects using Relay in production.

## License

Relay is [MIT licensed](./LICENSE).
