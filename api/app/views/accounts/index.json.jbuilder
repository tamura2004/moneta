json.array! @accounts do |account|
  json.extract! account, :id, :name, :kind, :num, :branch_id
end
