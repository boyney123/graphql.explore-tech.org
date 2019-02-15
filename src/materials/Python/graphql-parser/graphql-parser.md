---
path: '/materials/graphql-parser'
type: 'GitHub'
img: './screenshot.png'
material:
  title: 'graphql-parser'
  url: 'https://github.com/tryolabs/graphql-parser'
  github_url: 'https://github.com/tryolabs/graphql-parser'
  subscribers_count: '6'
  stargazers_count: '41'
  tags: ['']
  subtitle: 'GraphQL parser for Python'
  clone_url: 'https://github.com/tryolabs/graphql-parser.git'
  ssh_url: 'git@github.com:tryolabs/graphql-parser.git'
  pushed_at: '2015-06-23T19:02:08Z'
  updated_at: '2018-12-13T12:11:18Z'
  author:
    name: 'tryolabs'
    avatar: 'https://avatars2.githubusercontent.com/u/591820?v=4'
    github_url: 'https://github.com/tryolabs'
  latestRelease:
    tag_name: null
    name: null
    url: null
    created_at: null
---
# graphql-parser

[![Build Status](https://travis-ci.org/tryolabs/graphql-parser.svg?branch=master)](https://travis-ci.org/tryolabs/graphql-parser)

This is a Python parser for [React's][react] [GraphQL][graphql].

Lacking a specification, the parser was built to parse code along the lines of
examples and other implementations of GraphQL.

# Usage

```python
from graphql_parser import parse

QUERY = '''{
  user(1) {
    name,
    email,
    profile_pic.size(64) {
      date_added
    }
  }
}
'''

parse(QUERY)
```

Produces:

```python
{
  'type': 'block',
  'children': [
    {
      'type': 'call',
      'chain': ['user'],
      'arguments': ['1'],
      'body': {
        'type': 'block',
        'children': [
          'name',
          'email',
          {
            'type': 'call',
            'chain': ['profile_pic', 'size'],
            'arguments': ['64'],
            'body': {
              'type': 'block',
              'children': ['date_added']
            },
          }
        ]
      }
    }
  ]
}
```

# License

Copyright (c) 2015 [Tryolabs][tryo] SRL.

Released under the MIT license.

[react]: http://facebook.github.io/react/
[graphql]: https://facebook.github.io/react/blog/2015/05/01/graphql-introduction.html
[tryo]: http://tryolabs.com/
