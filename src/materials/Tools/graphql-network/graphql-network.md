---
path: '/materials/graphql-network'
type: 'GitHub'
img: './screenshot.png'
material:
  title: 'graphql-network'
  url: 'https://github.com/Ghirro/graphql-network'
  github_url: 'https://github.com/Ghirro/graphql-network'
  subscribers_count: '9'
  stargazers_count: '200'
  tags: ['']
  subtitle: 'Chrome Devtool that provides a 'network'-style tab for GraphQL requests to allow developers to debug more easily.'
  clone_url: 'https://github.com/Ghirro/graphql-network.git'
  ssh_url: 'git@github.com:Ghirro/graphql-network.git'
  pushed_at: '2018-11-27T14:26:53Z'
  updated_at: '2019-02-13T06:54:33Z'
  author:
    name: 'Ghirro'
    avatar: 'https://avatars1.githubusercontent.com/u/7593203?v=4'
    github_url: 'https://github.com/Ghirro'
  latestRelease:
    tag_name: null
    name: null
    url: null
    created_at: null
---
# graphql-network

Chrome Devtool that provides a 'network'-style tab for GraphQL requests to allow developers to debug more easily.

[Get it here](https://chrome.google.com/webstore/detail/igbmhmnkobkjalekgiehijefpkdemocm)

## Why?

GraphQL is fantastic but if you're using GraphQL you've probably bumped into how horrible it is to monitor requests via the network tab:

![Which one do I click?](http://bwes.co/whichone.png)

![How do I read that?](http://bwes.co/errr.png) 

GraphQL network allows you to actually monitor and debug network requests again, just like the good old days. 

## What does it do?

* Gives you a concise list of all GraphQL requests that have been sent. Easy to track what you're requesting.
* Gives you a raw view of the string of GraphQL being sent.
* Gives you a computed view of the request as your server will interpret it. So it's easy to debug fragments.
* Displays a nicely formatted response.

### Screenshots

#### Looking through GraphQL requests.
![Easy to navigate list](http://bwes.co/easy-to-navigate.png)



#### Viewing the Raw Query
![Post Body](http://bwes.co/post-body.png)



#### Viewing the Computed Query
![Computed Fragments](http://bwes.co/compute-fragments.png)



#### Viewing the Response
![Response Data](http://bwes.co/response-data.png)

## I want to give it a try but don't have a GraphQL app

After installing the app, why not head over to [GraphQLHub](http://graphqlhub.com).

## Troubleshooting

### Not Picking Up Requests

Because of the way Chrome Devtool extensions work, you'll need to have the GraphQL tab open at the time the request is made in order for it to be displayed, it won't pick up requests in the background.

Additionally, the extension will only pick up requests that send the `Content-Type` header with:
* `application/graphql`
* `application/json` where the GraphQL query is in an object parameter called `query`
* `application/x-www-form-urlencoded` where the GraphQL query is in a parameter called `query`

Since GraphQL is fairly new, consensus hasn't exactly been reached on the best way to make queries, if you think another way should be supported, send a PR or open an issue.

### Request is being listed as a 'GraphQL Error'

It's likely that your GraphQL is invalid. If you've double checked this, open up an issue.

### Request is being listed as an 'Internal Error'

It's likely that there's a bug in the extension. Open an issue.


## Contributing

Hacking on the extension is really easy.

* Clone the repo
* `npm install`
* Make your changes
* `webpack` in the top-level directory.
* Load it into `chrome://extensions` in the normal way.

## Roadmap

* Redo approach to CSS. Haven't yet had time to implement something proper.
* Include variable digestion.
