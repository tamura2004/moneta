STATEMENTS_PER_ACCOUNT = 3

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
  '利息',
  '配当金',
  '給与'
]
id = 1

Account.all.each do |account|
  date = nil
  total = nil
  STATEMENTS_PER_ACCOUNT.times do |i|
    if i == 0
      date = (rand(30)+10).days.before.to_date
      total = rand(100)*1_000 + 100_000
    end
    date += rand(10)
    amount = rand(100)*100 + 100
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
