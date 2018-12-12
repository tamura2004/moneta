Faker::Config.locale = :ja

Bank.seed do |s|
  s.id = 1
  s.number = "0001"
  s.name = Faker::Address.city_prefix + Faker::Name.last_name + '銀行'
end

Bank.seed do |s|
  s.id = 2
  s.number = "0002"
  s.name = Faker::Address.city_prefix + Faker::Name.last_name + "信用金庫"
end

