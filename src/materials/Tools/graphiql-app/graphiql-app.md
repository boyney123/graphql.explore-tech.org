---
path: '/materials/graphiql-app'
type: 'GitHub'
img: './screenshot.png'
material:
  title: 'graphiql-app'
  url: 'https://github.com/skevy/graphiql-app'
  github_url: 'https://github.com/skevy/graphiql-app'
  subscribers_count: '59'
  stargazers_count: '1832'
  tags: ['']
  subtitle: 'Light, Electron-based Wrapper around GraphiQL'
  clone_url: 'https://github.com/skevy/graphiql-app.git'
  ssh_url: 'git@github.com:skevy/graphiql-app.git'
  pushed_at: '2019-02-03T04:24:15Z'
  updated_at: '2019-02-14T23:15:10Z'
  author:
    name: 'skevy'
    avatar: 'https://avatars0.githubusercontent.com/u/131916?v=4'
    github_url: 'https://github.com/skevy'
  latestRelease:
    tag_name: 'v0.7.2'
    name: '0.7.2'
    url: 'https://github.com/skevy/graphiql-app/releases/tag/v0.7.2'
    created_at: '2018-03-22T17:11:00Z'
---
GraphiQL.app
------------

[![Build Status](https://travis-ci.org/skevy/graphiql-app.svg?branch=master)](https://travis-ci.org/skevy/graphiql-app)

A light, Electron-based wrapper around GraphiQL.

Provides a tabbed interface for editing and testing GraphQL queries/mutations with GraphiQL.

#### macOS installation

If you have [Homebrew](http://brew.sh/) installed on macOS:

```
brew cask install graphiql
```

Alternately, download the binary from the [Releases](https://github.com/skevy/graphiql-app/releases) tab.

#### Linux installation

The graphiql-app uses the [AppImage](https://appimage.org/) format for its Linux version. You download it from the  [Electron app directory](https://electronjs.org/apps/graphiql) (click the 'Download for Linux'-button) or from the [Releases](https://github.com/skevy/graphiql-app/releases) tab.

Either way, you will get a `.AppImage` binary. Put it in a safe place and make it executable:

```
chmod +x graphiql-app-0.7.2-x86_64.AppImage
```

Then simply execute the app. It will ask whether to add shortcuts to your desktop and menus for easy access in the future.

#### Getting started developing

- Branch and/or clone the repo locally.
- cd into it
- install all the require packages: `npm i`
- build the project: `npm run build`
- start the project: `npm start`
