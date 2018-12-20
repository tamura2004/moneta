json.extract! @account, :id, :name, :kind, :num, :login_id, :hashed_password, :branch_id
json.branch @account.branch
json.bank @account.branch.bank
json.balance @account.statements.balance
