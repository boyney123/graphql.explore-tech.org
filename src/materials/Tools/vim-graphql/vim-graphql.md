---
path: '/materials/vim-graphql'
type: 'GitHub'
img: './screenshot.png'
material:
  title: 'vim-graphql'
  url: 'https://github.com/jparise/vim-graphql'
  github_url: 'https://github.com/jparise/vim-graphql'
  subscribers_count: '5'
  stargazers_count: '192'
  tags: ['graphql','graphql-schema','vim']
  subtitle: 'A Vim plugin that provides GraphQL file detection, syntax highlighting, and indentation.'
  clone_url: 'https://github.com/jparise/vim-graphql.git'
  ssh_url: 'git@github.com:jparise/vim-graphql.git'
  pushed_at: '2019-02-14T00:43:56Z'
  updated_at: '2019-02-14T04:35:46Z'
  author:
    name: 'jparise'
    avatar: 'https://avatars1.githubusercontent.com/u/10311?v=4'
    github_url: 'https://github.com/jparise'
  latestRelease:
    tag_name: '1.1'
    name: '1.1'
    url: 'https://github.com/jparise/vim-graphql/releases/tag/1.1'
    created_at: '2017-09-03T18:36:11Z'
---
# GraphQL for Vim

This is a [Vim](http://www.vim.org/) plugin that provides [GraphQL][gql] file
detection, syntax highlighting, and indentation. It currently targets the
[October 2016 draft specification][spec].

## Installation

### Using [Plug][]

1. Add `Plug 'jparise/vim-graphql'` to `~/.vimrc`
2. `vim +PluginInstall +qall`

### Using [Vundle][]

1. Add `Plugin 'jparise/vim-graphql'` to `~/.vimrc`
2. `vim +PluginInstall +qall`

### Using [Pathogen][]

1. `cd ~/.vim/bundle`
2. `git clone https://github.com/jparise/vim-graphql.git`

## Syntax Highlighting

Complete syntax highlighting is enable for the `graphql` [filetype][]. This
filetype is automatically selected for file names ending in `.graphql`,
`.graphqls`, and `.gql`.

[filetype]: http://vimdoc.sourceforge.net/htmldoc/filetype.html

## JavaScript / TypeScript Support

When the [vim-javascript](https://github.com/pangloss/vim-javascript) or
[yats](https://github.com/HerringtonDarkholme/yats.vim) plugins are installed,
GraphQL syntax support in [ES2015 template literals][templates] is enabled.

[templates]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Template_literals#Tagged_templates

```javascript
const query = gql`
  {
    user(id: ${uid}) {
      firstName
      lastName
    }
  }
`;
```

The list of recognized tag names is defined by the `g:graphql_javascript_tags`
variable, which defaults to `['gql', 'graphql', 'Relay.QL']`.

## Testing

The test suite uses [Vader.vim][]. To run all of the tests from the command
line:

    $ make test

[gql]: http://graphql.org/
[spec]: https://facebook.github.io/graphql/October2016/
[Pathogen]: https://github.com/tpope/vim-pathogen
[Plug]: https://github.com/junegunn/vim-plug
[Vundle]: https://github.com/gmarik/vundle
[Vader.vim]: https://github.com/junegunn/vader.vim
