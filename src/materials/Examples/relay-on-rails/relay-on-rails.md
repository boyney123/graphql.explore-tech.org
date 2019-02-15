---
path: '/materials/relay-on-rails'
type: 'GitHub'
img: './screenshot.png'
material:
  title: 'relay-on-rails'
  url: 'https://github.com/nethsix/relay-on-rails'
  github_url: 'https://github.com/nethsix/relay-on-rails'
  subscribers_count: '3'
  stargazers_count: '40'
  tags: ['']
  subtitle: 'Relay + GraphQL + React on Rails'
  clone_url: 'https://github.com/nethsix/relay-on-rails.git'
  ssh_url: 'git@github.com:nethsix/relay-on-rails.git'
  pushed_at: '2015-10-30T01:18:25Z'
  updated_at: '2018-07-13T06:49:13Z'
  author:
    name: 'nethsix'
    avatar: 'https://avatars3.githubusercontent.com/u/1383827?v=4'
    github_url: 'https://github.com/nethsix'
  latestRelease:
    tag_name: null
    name: null
    url: null
    created_at: null
---
# README

Relay/GraphQL/React on Rails 4 starter-kit.

## Goals

Make it easy to:
* Start a Relay/GraphQL React project on Rails
* Follow the official Facebook Relay/RelayJS [tutorial](https://facebook.github.io/relay/docs/tutorial.html)

## Resource

* For additional info, please refer to the accompanying article [Relay/RelayJS  on Rails](https://medium.com/@khor/relay-facebook-on-rails-8b4af2057152)

## Instructions

* npm install
* bundle install
* rails s

Access the sample app at http://localhost:3000/static_pages/board.html

## Changing the schema

* Modify app/graph files
* rake graphql:update_schema_json
* rake tmp:clear
* rails s

MIT License

