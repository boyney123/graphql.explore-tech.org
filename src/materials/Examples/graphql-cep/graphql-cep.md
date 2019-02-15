---
path: '/materials/graphql-cep'
type: 'GitHub'
img: './screenshot.png'
material:
  title: 'graphql-cep'
  url: 'https://github.com/sibelius/graphql-cep'
  github_url: 'https://github.com/sibelius/graphql-cep'
  subscribers_count: '3'
  stargazers_count: '22'
  tags: ['cep','graphql']
  subtitle: 'Query any CEP using GraphQL - https://graphql-cep-liimjftpnr.now.sh'
  clone_url: 'https://github.com/sibelius/graphql-cep.git'
  ssh_url: 'git@github.com:sibelius/graphql-cep.git'
  pushed_at: '2016-10-02T22:43:57Z'
  updated_at: '2019-01-09T03:26:19Z'
  author:
    name: 'sibelius'
    avatar: 'https://avatars3.githubusercontent.com/u/2005841?v=4'
    github_url: 'https://github.com/sibelius'
  latestRelease:
    tag_name: null
    name: null
    url: null
    created_at: null
---
# GraphQL CEP 

Query any CEP (Brasil) using GraphQL

Test it here: https://graphql-cep-liimjftpnr.now.sh

![graphql-cep](screenshot/graphql-cep.png)

## Command

#### Setup
```bash
npm install
```
#### Develop
```bash
npm run watch
```

#### Production
```bash
# first compile the code
npm run build

# run graphql compiled server
npm start
```

### Flow
```bash
npm run flow
```

Or
```bash
flow
```

### Schema
Take a look on the [Schema](https://github.com/sibelius/graphql-cep/blob/master/data/schema.graphql)

Based on [graphql-dataloader-boilerplate](https://github.com/sibelius/graphql-dataloader-boilerplate)
