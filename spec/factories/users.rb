FactoryBot.define do
  factory :user do
    store_name              {Faker::Name.last_name}
    email                 {Faker::Internet.free_email}
    password              {Faker::Internet.password}
    password_confirmation {password}
  end
end