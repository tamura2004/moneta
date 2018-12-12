class Branch < ApplicationRecord
  belongs_to :bank
  has_many :customers
end
