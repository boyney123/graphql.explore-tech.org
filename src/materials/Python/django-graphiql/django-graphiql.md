---
path: '/materials/django-graphiql'
type: 'GitHub'
img: './screenshot.png'
material:
  title: 'django-graphiql'
  url: 'https://github.com/GraphQL-python-archive/django-graphiql'
  github_url: 'https://github.com/GraphQL-python-archive/django-graphiql'
  subscribers_count: '5'
  stargazers_count: '33'
  tags: ['']
  subtitle: '[DEPRECATED | Use graphene-django package] Integrate GraphiQL easily into your Django project'
  clone_url: 'https://github.com/GraphQL-python-archive/django-graphiql.git'
  ssh_url: 'git@github.com:GraphQL-python-archive/django-graphiql.git'
  pushed_at: '2016-08-07T07:30:55Z'
  updated_at: '2018-08-01T18:38:19Z'
  author:
    name: 'GraphQL-python-archive'
    avatar: 'https://avatars0.githubusercontent.com/u/42009163?v=4'
    github_url: 'https://github.com/GraphQL-python-archive'
  latestRelease:
    tag_name: null
    name: null
    url: null
    created_at: null
---
# Django GraphiQL [![PyPI version](https://badge.fury.io/py/django-graphiql.svg)](https://badge.fury.io/py/django-graphiql)

Django GraphiQL is a library for integrating [GraphiQL](https://github.com/graphql/graphiql) inside your Django project, so you can test your [GraphQL](https://github.com/graphql-python/graphql-core) schemas easily.

This library versioning go in partity with GraphiQL.

## Installing

For installing this library just run in your favorite shell:

```bash
pip install django-graphiql
```

## Configuring

In settings.py add `'django_graphiql'` into `INSTALLED_APPS`, so it will look like

```python
INSTALLED_APPS = [
    # ...
    'django_graphiql',
    # ...
]
```

And then, add into your urls.py:

```python
urlpatterns = [
    # Your other urls...
    url(r'^graphiql', include('django_graphiql.urls')),
]
```

If you want to configure the default query, just set `GRAPHIQL_DEFAULT_QUERY` in your settings
to the desired value.
