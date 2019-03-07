require "active_support"
require "active_support/inflector"
require "fileutils"

WORDS = %w(home icon btn card list form dialog)

WORDS.each do |word|
  puts "import #{word.titleize} from '@/views/#{word.titleize}.vue';"
  FileUtils.touch("src/views/#{word.titleize}.vue")
end

puts <<-"EOD"
export default new Router({
  routes: [
EOD

WORDS.each do |word|
  puts <<-"EOD"
    {
      path: '/#{word}',
      component: #{word.titleize},
    },
  EOD
end

puts <<-"EOD"
  ],
});
EOD
