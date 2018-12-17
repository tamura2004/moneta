class Statement < ApplicationRecord
  belongs_to :account

  scope :balance, -> { order(updated_at: "DESC").first.total }
end
