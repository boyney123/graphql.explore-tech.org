---
path: '/materials/portfolio'
type: 'GitHub'
img: './screenshot.png'
material:
  title: 'portfolio'
  url: 'http://alexcory.com'
  github_url: 'https://github.com/alex-cory/portfolio'
  subscribers_count: '2'
  stargazers_count: '10'
  tags: ['']
  subtitle: 'Built with React, Relay, GraphQL, and all babel-nodes ES2016 features!'
  clone_url: 'https://github.com/alex-cory/portfolio.git'
  ssh_url: 'git@github.com:alex-cory/portfolio.git'
  pushed_at: '2017-10-14T20:50:22Z'
  updated_at: '2018-05-17T07:58:05Z'
  author:
    name: 'alex-cory'
    avatar: 'https://avatars1.githubusercontent.com/u/5455859?v=4'
    github_url: 'https://github.com/alex-cory'
  latestRelease:
    tag_name: null
    name: null
    url: null
    created_at: null
---
Relay Portfolio
===============

This is my portfolio that I built using Facebooks new React, Relay and GraphQL.  I happened to use AWS's EC2 to host so I will cover setting that up in this as well.

### Config
Make sure to setup the config file.  Do this first because there are files dependent on this one having the correct data.

 1. Make sure to rename the file `config/example_config.js` to `config/config.js`
 2. Fill in your `usernames` and `urls`

### AWS EC2 Setup

#### Dependencies
 - Ubuntu Server
 - pm2
 - 
 
#### Step 1
Install `nodejs, git...`

```sh
sudo apt-get update
curl -sL https://deb.nodesource.com/setup_4.x | sudo -E bash -
sudo apt-get install -y git oh-my-zsh nodejs
```
I personally like to create a folder `www` and store my projects in there. So for my portfolio directory on the server it would look like `www/alexcory.com` where `alexcory.com` is my project folder.

#### Step 2
Instead of running on port 80 you can redirect port 80 to your application's port (>1024) using
```sh
iptables -t nat -I PREROUTING -p tcp --dport 80 -j REDIRECT --to-port 3000
```
This will work if your application is running on port 3000.

