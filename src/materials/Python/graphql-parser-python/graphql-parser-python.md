---
path: '/materials/graphql-parser-python'
type: 'GitHub'
img: './screenshot.png'
material:
  title: 'graphql-parser-python'
  url: 'https://github.com/tallstreet/graphql-parser-python'
  github_url: 'https://github.com/tallstreet/graphql-parser-python'
  subscribers_count: '0'
  stargazers_count: '4'
  tags: ['']
  subtitle: 'A GraphQL parser for python'
  clone_url: 'https://github.com/tallstreet/graphql-parser-python.git'
  ssh_url: 'git@github.com:tallstreet/graphql-parser-python.git'
  pushed_at: '2015-08-30T09:29:53Z'
  updated_at: '2018-09-17T06:15:21Z'
  author:
    name: 'tallstreet'
    avatar: 'https://avatars0.githubusercontent.com/u/5437?v=4'
    github_url: 'https://github.com/tallstreet'
  latestRelease:
    tag_name: null
    name: null
    url: null
    created_at: null
---
# graphql for Python

 This uses the python bindings for [libgraphqlparser](https://github.com/graphql/libgraphqlparser) to generate a GraphQL parser which generates a python data-structure 

# Usage  

```
git clone https://github.com/tallstreet/graphql-parser-python.git
cd graphql-parser-python
git submodule init
git submodule update
cd libgraphqlparser
cmake .
make
cp libgraphqlparser.* ..
./example_run.py
export PYTHONPATH=$PYTHONPATH:.
python test/graphql_test.py
```
