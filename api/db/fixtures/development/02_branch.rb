BRANCH_PER_BANK = 3
id = 1

Bank.all.each_with_index do |bank, i|
  BRANCH_PER_BANK.times do |j|
    Branch.seed do |s|
      s.id = id
      s.bank_id = bank.id
      s.number = sprintf("%03d", j+100)
      s.name = Faker::Address.city_prefix + Faker::Name.last_name + '支店'
    end
    id += 1
  end
end

