---
path: '/materials/relay-cart'
type: 'GitHub'
img: './screenshot.png'
material:
  title: 'relay-cart'
  url: 'https://github.com/soonlive/relay-cart'
  github_url: 'https://github.com/soonlive/relay-cart'
  subscribers_count: '3'
  stargazers_count: '19'
  tags: ['']
  subtitle: 'A simple shopping cart example leveraging relay & GraphQL with routing and pagination.'
  clone_url: 'https://github.com/soonlive/relay-cart.git'
  ssh_url: 'git@github.com:soonlive/relay-cart.git'
  pushed_at: '2017-04-19T14:08:12Z'
  updated_at: '2018-03-12T01:25:55Z'
  author:
    name: 'soonlive'
    avatar: 'https://avatars3.githubusercontent.com/u/6039369?v=4'
    github_url: 'https://github.com/soonlive'
  latestRelease:
    tag_name: null
    name: null
    url: null
    created_at: null
---
# relay-cart
A simple shopping cart example leveraging relay &amp; GraphQL with routing and pagination

## Usage
clone this repo and run:

```shell
npm install
npm start
```
and then visit [http://localhost:3000/](http://localhost:3000/)

## Demo

View a demo here: [http://120.76.218.113/relay-cart/demo.html](http://120.76.218.113/relay-cart/demo.html).
Add items to the cart and change the quantities.

## Developing

Any changes to files in the 'js' directory the server to automatically rebuild the app and refresh your browser.
If at any time you make changes to data/schema.js, stop the server, regenerate data/schema.json, and restart the server:

```shell
npm run updateSchema
npm start
```
