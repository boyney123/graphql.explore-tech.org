---
path: '/materials/plot'
type: 'GitHub'
img: './screenshot.png'
material:
  title: 'plot'
  url: 'https://github.com/peburrows/plot'
  github_url: 'https://github.com/peburrows/plot'
  subscribers_count: '4'
  stargazers_count: '29'
  tags: ['']
  subtitle: 'A graphql parser and resolver for Elixir'
  clone_url: 'https://github.com/peburrows/plot.git'
  ssh_url: 'git@github.com:peburrows/plot.git'
  pushed_at: '2015-12-11T17:46:12Z'
  updated_at: '2018-04-17T10:45:01Z'
  author:
    name: 'peburrows'
    avatar: 'https://avatars3.githubusercontent.com/u/778?v=4'
    github_url: 'https://github.com/peburrows'
  latestRelease:
    tag_name: null
    name: null
    url: null
    created_at: null
---
Plot
====
A GraphQL parser and resolver for Elixir.

This project is still a work in progress, but the eventual goal is to support the full GraphQL spec.

### Basic Usage

*Build a basic AST from a doc*
```elixir
'{
  user {
    id,
    firstName,
    lastName
  }
}' |> Plot.parse
# returns:
{:ok,
[{:query, nil,
  [{:object, 'user', nil, [],
    [{:field, 'id', nil, []},
     {:field, 'firstName', nil, []},
     {:field, 'lastName', nil, []}]}]}]}
```

*Build Plot objects from a doc*
```elixir
'{
  user {
    id,
    firstName,
    lastName
  }
}' |> Plot.parse_and_generate
# returns:
%Plot.Document{fragments: [],
 operations: [%Plot.Query{name: nil,
 objects:    [%Plot.Object{alias: nil, args: [], name: 'user',
              fields: [%Plot.Field{alias: nil, args: [], name: 'lastName'},
                       %Plot.Field{alias: nil, args: [], name: 'firstName'},
                       %Plot.Field{alias: nil, args: [], name: 'id'}]}]}],
variables:   []}
```

### Query resolution

Query resolution works via Elixir protocols. Implement the `Resolution` protocol for the various nodes of your queries.

```elixir
# Implementation
defimpl Plot.Resolution, for: Plot.Object do
  def resolve(%Plot.Object{name: 'user'} = _obj, _context) do
    %{'firstName' => 'Phil', 'lastName' => 'Burrows', dontInclude: 'this'}
  end

  def resolve(%Plot.Object{name: 'birthday'}, _context) do
    %{'day' => 15, 'month' => 12, 'year' => 2015}
  end
end

# Resolution
doc = '{user {firstName, lastName, birthday {month, year}}}' |> Plot.parse_and_generate
doc.operations |> Enum.at(0) |> Plot.Resolver.resolve
# returns:
[%{'user' => %{'birthday' => %{'month' => 12, 'year' => 2015},
   'firstName' => 'Phil', 'lastName' => 'Burrows'}}]
```
