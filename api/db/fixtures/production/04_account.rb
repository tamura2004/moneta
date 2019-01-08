ACCOUT_PER_BRANCH = 3
id = 1

Branch.all.each_with_index do |branch, i|
  login_id = sprintf("a%06d", id)
  ACCOUT_PER_BRANCH.times do |j|
    Account.seed do |s|
      s.id = id
      s.name = Faker::Name.name
      s.kind = "普通"
      s.num = sprintf("%04d%02d", 1000 + id, j)
      s.branch_id = branch.id
      s.login_id = login_id
      s.hashed_password = Digest::MD5.hexdigest(login_id + "0")
    end
    id += 1
  end
end
