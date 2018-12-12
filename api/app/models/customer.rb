class Customer < ApplicationRecord
  belongs_to :branch
  has_many :accounts
end
