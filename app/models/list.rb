class List < ApplicationRecord
  belongs_to :user, optional: true
  belongs_to :close, optional: true
end
