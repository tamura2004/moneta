STATEMENTS_PER_ACCOUNT = 10

KIND = ['入', '出']
MEMO_OUT = [
  '東京ガス',
  '東京電力',
  '水道局',
  '電話料金',
  'クレジットカード'
]
MEMO_IN = [
  '振込',
  '給与'
]
id = 1

Account.all.each do |account|
  date = nil
  total = nil
  STATEMENTS_PER_ACCOUNT.times do |i|
    if i == 0
      date = (rand(30)+10).days.before.to_date
      total = rand(90000) + 10000
    end
    date += rand(3)
    amount = rand(9000) + 1000
    kind = KIND.sample
    if kind == '入'
      total += amount
      memo = MEMO_IN.sample
    else
      total -= amount
      memo = MEMO_OUT.sample
    end

    Statement.seed do |s|
      s.id = id
      s.date = date
      s.kind = kind
      s.amount = amount
      s.memo = memo
      s.total = total
      s.account_id = account.id
    end
    id += 1
  end
end
