class Close < ApplicationRecord
  belongs_to :user
  belongs_to :list, optional: true
end
