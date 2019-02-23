import example from '../../icons/example.svg'
import tools from '../../icons/tools.svg'
import javascript from '../../icons/javascript.svg'
import relay from '../../icons/relay.svg'
import hammer from '../../icons/hammer.svg'
import ruby from '../../icons/ruby.svg'
import php from '../../icons/php.png'
import python from '../../icons/python.png'
import dotnet from '../../icons/dotnet.svg'
import elixir from '../../icons/elixir.png'
import go from '../../icons/go.svg'
import java from '../../icons/java.png'
import scala from '../../icons/scala.png'
import sql from '../../icons/sql.png'
import julia from '../../icons/julia.png'

import map from './'

describe('icon-to-category', () => {
  it('should map the correct Category to the correct icon', () => {
    expect(map.Tools).toEqual(hammer);
    expect(map.Examples).toEqual(example);
    expect(map.Javascript).toEqual(javascript);
    expect(map.Relay).toEqual(relay);
    expect(map.Ruby).toEqual(ruby);
    expect(map.Php).toEqual(php);
    expect(map.Python).toEqual(python);
    expect(map.Dotnet).toEqual(dotnet);
    expect(map.Elixir).toEqual(elixir);
    expect(map.Go).toEqual(go);
    expect(map.Java).toEqual(java);
    expect(map.Scala).toEqual(scala);
    expect(map.Sql).toEqual(sql);
    expect(map.Julia).toEqual(julia);
  })
})
