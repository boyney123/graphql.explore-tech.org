---
path: '/materials/zend-expressive-graphiql'
type: 'GitHub'
img: './screenshot.png'
material:
  title: 'zend-expressive-graphiql'
  url: 'https://github.com/stefanorg/zend-expressive-graphiql'
  github_url: 'https://github.com/stefanorg/zend-expressive-graphiql'
  subscribers_count: '1'
  stargazers_count: '1'
  tags: ['']
  subtitle: 'Zend Expressive GraphiQL extension'
  clone_url: 'https://github.com/stefanorg/zend-expressive-graphiql.git'
  ssh_url: 'git@github.com:stefanorg/zend-expressive-graphiql.git'
  pushed_at: '2017-01-18T10:37:20Z'
  updated_at: '2017-12-28T22:34:48Z'
  author:
    name: 'stefanorg'
    avatar: 'https://avatars3.githubusercontent.com/u/1808859?v=4'
    github_url: 'https://github.com/stefanorg'
  latestRelease:
    tag_name: null
    name: null
    url: null
    created_at: null
---
# Zend Expressive GraphiQL extension

GraphQL in-browser interface to explore graphql server

## Assets

You need to copy the graphql assets in your public assets folder. 

## Template

A twig template is provided but you can write your own template using the template engines supported by zend-expressive

If you want to override the default configuration, add a configuration for `graphql::graphiql` template in your `templates.global.php`
and place the `graphiql.html.php` 

```
'templates' => [
        'extension' => 'html.php', //<-- Your extension
        'paths'     => [
            'graphql'    => ['templates/graphql'],
            ...
        ],
    ],
```