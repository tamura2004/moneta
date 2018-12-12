class Account < ApplicationRecord
  belongs_to :customer
  has_many :statements
end
