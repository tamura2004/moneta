ACCOUT_PER_CUSTOMER = 3
id = 1

Customer.all.each do |customer|
  ACCOUT_PER_CUSTOMER.times do |j|
    Account.seed do |s|
      s.id = id
      s.customer_id = customer.id
      s.num = sprintf("%04d%02d", 1000 + id, j)
      s.kind = "普通"
    end
    id += 1
  end
end
