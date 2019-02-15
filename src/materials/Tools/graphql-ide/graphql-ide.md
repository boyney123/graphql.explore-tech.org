---
path: '/materials/graphql-ide'
type: 'GitHub'
img: './screenshot.png'
material:
  title: 'graphql-ide'
  url: 'https://github.com/andev-software/graphql-ide'
  github_url: 'https://github.com/andev-software/graphql-ide'
  subscribers_count: '18'
  stargazers_count: '791'
  tags: ['graphiql', 'graphql']
  subtitle: '⚡️ GraphQL IDE - An extensive IDE for exploring GraphQL APIs'
  clone_url: 'https://github.com/andev-software/graphql-ide.git'
  ssh_url: 'git@github.com:andev-software/graphql-ide.git'
  pushed_at: '2018-07-24T15:41:15Z'
  updated_at: '2019-02-15T00:45:54Z'
  author:
    name: 'andev-software'
    avatar: 'https://avatars1.githubusercontent.com/u/31950420?v=4'
    github_url: 'https://github.com/andev-software'
  latestRelease:
    tag_name: 'v1.1.1'
    name: 'Version 1.1.1'
    url: 'https://github.com/andev-software/graphql-ide/releases/tag/v1.1.1'
    created_at: '2017-09-17T20:01:49Z'
---

<p align='center'>
    <img alt='GraphQL IDE' src='https://rawgit.com/redound/graphql-ide/cbb88aa/assets/logo.svg' width='440'>
</p>

<p align='center'>
  An extensive IDE for exploring GraphQL API's
</p>

---

## Features

- Manage projects
- Import/export
- Store queries
- Query history
- Custom headers
- Environment variables for dynamic headers

## Installing

### MacOS

Unpack the latest app from the [releases][0] tab

### Window / Linux

Releases available soon, for now build the binary using

```
npm install -g electron
npm install
npm run package --all
```

Run the binary using `electron .`

## Upgrade from 0.x

Download the latest 0.2.x version, this will give you an option to export any project for 1.x.
After you've installed 1.x you can import the project there. You can always go back to 0.x, your project data is stored at
`/Users/[username]/Library/Application Support/graphql-ide`

## Contributing

Please file issues under GitHub, or submit a pull request if you'd like to directly contribute.

## Screenshots

<h3 align='center'>
Execute queries
</h3>

![Execute queries](assets/screenshot-1.png)

<h3 align='center'>
Custom headers
</h3>

![Custom headers](assets/screenshot-2.png)

<h3 align='center'>
Environment variables for dynamic headers
</h3>

![Custom headers](assets/screenshot-3.png)

<h3 align='center'>
Manage projects
</h3>

![Manage projects](assets/screenshot-4.png)

[0]: https://github.com/redound/graphql-ide/releases
