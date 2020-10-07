class Close < ApplicationRecord
  belongs_to :user
  has_one :list, optional: true
end
