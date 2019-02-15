## Contributing

Hi there! We're thrilled that you'd like to contribute to this project. Your help is essential for keeping it great.

## Issues

We'd love you to open issues, if they're relevant to this repository: feature requests, bug reports, questions about our processes, declarations of gratefulness, etc. are all welcome.

In particular, if you have a large PR you want to send our way, it may make sense to open an issue to discuss it with the maintainers first.

## Steps to add a material

You can easily add a material to the website. Here is a small list of things to do:

1. [Fork][fork] and clone the repository
1. Create a new branch: `git checkout -b my-branch-name`
1. run `npm run add:{category} {github_url}` for example `npm run add:tool https://github.com/graphql/graphiql` to add a material.
1. Commit changes, push and [submit a pull request][pr]
1. Pat your self on the back and wait for your pull request to be reviewed and merged.

## Commands to add materials

### Adding a tool

`npm run add:components {GITHUB_URL}`

### Adding a JavaScript lib

`npm run add:js-lib {GITHUB_URL}`

### Adding a relay lib

`npm run add:relay {GITHUB_URL}`

### Adding an ruby project

`npm run add:ruby {GITHUB_URL}`

### Adding a php resource

`npm run add:php {GITHUB_URL}`

### Adding a python resource

`npm run add:python {GITHUB_URL}`

### Adding a java resource

`npm run add:java {GITHUB_URL}`

### Adding a go resource

`npm run add:go {GITHUB_URL}`

### Adding a scala resource

`npm run add:scala {GITHUB_URL}`

### Adding a dotnet resource

`npm run add:dotnet {GITHUB_URL}`

### Adding a elixir resource

`npm run add:elixir {GITHUB_URL}`

### Adding a sql

`npm run add:sql {GITHUB_URL}`

### Adding an example

`npm run add:example {GITHUB_URL}`

## Adding a new Category

If you would like to add a new Category you will need to do two things:

1. Update the site config to add the category
1. Update `icon-to-category` mapper, and add your new logo and map.
