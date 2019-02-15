---
path: '/materials/python-graphql-client'
type: 'GitHub'
img: './screenshot.png'
material:
  title: 'python-graphql-client'
  url: 'https://github.com/prisma/python-graphql-client'
  github_url: 'https://github.com/prisma/python-graphql-client'
  subscribers_count: '10'
  stargazers_count: '60'
  tags: ['graphql','graphql-client','python']
  subtitle: 'Simple GraphQL client for Python 2.7+'
  clone_url: 'https://github.com/prisma/python-graphql-client.git'
  ssh_url: 'git@github.com:prisma/python-graphql-client.git'
  pushed_at: '2018-07-18T00:55:01Z'
  updated_at: '2019-02-14T16:11:35Z'
  author:
    name: 'prisma'
    avatar: 'https://avatars0.githubusercontent.com/u/17219288?v=4'
    github_url: 'https://github.com/prisma'
  latestRelease:
    tag_name: null
    name: null
    url: null
    created_at: null
---
# python-graphql-client
Simple GraphQL client for Python 2.7+

## Install

```sh
pip install graphqlclient
```

## Usage


```py
from graphqlclient import GraphQLClient

client = GraphQLClient('http://graphql-swapi.parseapp.com/')

result = client.execute('''
{
  allFilms {
    films {
      title
    }
  }
}
''')

print(result)
```

### Authorization

Authorization tokens can be added to the request using the client's `inject_token` method:

```py
client.inject_token('very-long-and-secure-token')
```

which defaults to http header name `Authorization`.
An alternative http header name for the token can be set by passing in the alternative header name, e.g. for `x-api-key`:

```py
client.inject_token('very-long-and-secure-token','x-api-key')
```

## License

[MIT License](http://opensource.org/licenses/MIT)
