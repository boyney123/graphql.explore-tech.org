---
path: '/materials/gql-tools'
type: 'GitHub'
img: './screenshot.png'
material:
  title: 'gql-tools'
  url: 'https://github.com/almilo/gql-tools'
  github_url: 'https://github.com/almilo/gql-tools'
  subscribers_count: '2'
  stargazers_count: '17'
  tags: ['']
  subtitle: 'GraphQL Tools for schema handling.'
  clone_url: 'https://github.com/almilo/gql-tools.git'
  ssh_url: 'git@github.com:almilo/gql-tools.git'
  pushed_at: '2017-03-29T15:46:18Z'
  updated_at: '2018-09-25T02:30:52Z'
  author:
    name: 'almilo'
    avatar: 'https://avatars0.githubusercontent.com/u/794497?v=4'
    github_url: 'https://github.com/almilo'
  latestRelease:
    tag_name: null
    name: null
    url: null
    created_at: null
---
# gql-tools
This package provides several command-line tools to work with GraphQL schemas:
* generation of the introspection schema in JSON format based on a GraphQL schema file (schema language) or from a GraphQL
endpoint (introspection query)
* generation of the parsed AST in JSON format based on a GraphQL schema file (schema language) or from a GraphQL
endpoint (introspection query)
* generation of the schema language file from a GraphQL endpoint (introspection query)
* generation of a real-time visualization graph based on a GraphQL schema file (schema language) 

### Installation
```sh
npm install --save gql-tools
```
Installs *gql-tools* locally and saves it as production dependency to the current package.

```sh
npm install -g gql-tools
```
Installs *gql-tools* globally.

**Note**: this package requires *graphql* as peer dependency (either global or local, depdending on the kind of installation).

```sh
npm install [-g] graphql
```

### Commands
#### gqlschema

```sh
gqlschema <schema.txt | http://example.com/graphql> [-iatuov]
```

```sh
// schema.txt

type Person {
    name: String
}

type Query {
    people: [Person]
}

schema {
    query: Query
}
```

```sh
gqlschema <schema.txt | http://example.com/graphql> [-i]
```

Generates a JSON file with the *introspection schema*. The introspection schema is usually used by GraphQL tools to
provide type support, code completion, query validation, etc.

```sh
gqlschema <schema.txt | http://example.com/graphql> -a
```

Generates a JSON file with the *parsed AST* of the schema. The AST can be useful for debugging when doing GraphQL
language manipulation (i.e.: writing visitors).

```sh
gqlschema <schema.txt | http://example.com/graphql> -t
```

Generates a GraphQL file (schema language) with a *schema language definition* of the schema.

For more options, see the CLI help:

```sh
gqlschema -h
```

#### gqlgraph

```sh
gqlgraph <schema.txt> [-p]
```

```sh
// schema.txt

type Person {
    name: String
}

type Query {
    people: [Person]
}

schema {
    query: Query
}
```

Generates a livereload-enabled server with a graphic visualization of the GraphQL schema and opens it in the default
browser. When the schema file is saved, the changes are reloaded.

For more options, see the CLI help:

```sh
gqlgraph -h
```
