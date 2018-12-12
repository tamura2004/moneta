CUSTOMER_PER_BRANCH = 3
id = 1

Branch.all.each_with_index do |branch, i|
  CUSTOMER_PER_BRANCH.times do |j|
    login_id = sprintf("a%06d", id)
    Customer.seed do |s|
      s.id = id
      s.number = sprintf("%d%05d", i+1, j+1)
      s.name = Faker::Name.name
      s.login_id = login_id
      s.hashed_password = Digest::MD5.hexdigest(login_id + "0")
    end
    id += 1
  end
end
