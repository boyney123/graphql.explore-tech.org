---
path: '/materials/flask-graphql'
type: 'GitHub'
img: './screenshot.png'
material:
  title: 'flask-graphql'
  url: 'https://github.com/graphql-python/flask-graphql'
  github_url: 'https://github.com/graphql-python/flask-graphql'
  subscribers_count: '20'
  stargazers_count: '681'
  tags: ['flask','flask-application','graphene','graphql','python','web']
  subtitle: 'Adds GraphQL support to your Flask application.'
  clone_url: 'https://github.com/graphql-python/flask-graphql.git'
  ssh_url: 'git@github.com:graphql-python/flask-graphql.git'
  pushed_at: '2018-09-30T16:09:10Z'
  updated_at: '2019-02-15T05:51:11Z'
  author:
    name: 'graphql-python'
    avatar: 'https://avatars3.githubusercontent.com/u/15002022?v=4'
    github_url: 'https://github.com/graphql-python'
  latestRelease:
    tag_name: 'v2.0.0'
    name: '2.0'
    url: 'https://github.com/graphql-python/flask-graphql/releases/tag/v2.0.0'
    created_at: '2018-07-19T21:33:52Z'
---
# Flask-GraphQL

[![Build Status](https://travis-ci.org/graphql-python/flask-graphql.svg?branch=master)](https://travis-ci.org/graphql-python/flask-graphql) [![Coverage Status](https://coveralls.io/repos/graphql-python/flask-graphql/badge.svg?branch=master&service=github)](https://coveralls.io/github/graphql-python/flask-graphql?branch=master) [![PyPI version](https://badge.fury.io/py/flask-graphql.svg)](https://badge.fury.io/py/flask-graphql)

Adds GraphQL support to your Flask application.

## Usage

Just use the `GraphQLView` view from `flask_graphql`

```python
from flask_graphql import GraphQLView

app.add_url_rule('/graphql', view_func=GraphQLView.as_view('graphql', schema=schema, graphiql=True))

# Optional, for adding batch query support (used in Apollo-Client)
app.add_url_rule('/graphql/batch', view_func=GraphQLView.as_view('graphql', schema=schema, batch=True))
```

This will add `/graphql` and `/graphiql` endpoints to your app.

### Supported options
 * `schema`: The `GraphQLSchema` object that you want the view to execute when it gets a valid request.
 * `context`: A value to pass as the `context` to the `graphql()` function.
 * `root_value`: The `root_value` you want to provide to `executor.execute`.
 * `pretty`: Whether or not you want the response to be pretty printed JSON.
 * `executor`: The `Executor` that you want to use to execute queries.
 * `graphiql`: If `True`, may present [GraphiQL](https://github.com/graphql/graphiql) when loaded directly from a browser (a useful tool for debugging and exploration).
 * `graphiql_template`: Inject a Jinja template string to customize GraphiQL.
 * `batch`: Set the GraphQL view as batch (for using in [Apollo-Client](http://dev.apollodata.com/core/network.html#query-batching) or [ReactRelayNetworkLayer](https://github.com/nodkz/react-relay-network-layer))
 * `middleware`: A list of graphql [middlewares](http://docs.graphene-python.org/en/latest/execution/middleware/).

You can also subclass `GraphQLView` and overwrite `get_root_value(self, request)` to have a dynamic root value
per request.

```python
class UserRootValue(GraphQLView):
    def get_root_value(self, request):
        return request.user

```
