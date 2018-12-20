class Account < ApplicationRecord
  belongs_to :branch
  has_many :statements
end
