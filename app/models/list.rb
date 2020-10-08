class List < ApplicationRecord
  has_many :users, through: :closes
  has_many :closes
end
