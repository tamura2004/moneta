# ソースコードの中から、v-tile-titleなどvuetifyのコンポーネントを
# 探して表示する

require "pathname"
require "kconv"
require "set"

$dic = Set.new

Pathname("src").find do |path|
  next unless path.file?

  path.each_line do |line|
    line.force_encoding('UTF-8')
    line = line.scrub('?')
    line.chomp.split(/[\s\(]/).each do |word|
      if word =~ /^v\-[\w\-]+$/
        $dic.add(word)
      end
    end
  end
end
p $dic.to_a.sort
