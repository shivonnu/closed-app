FactoryBot.define do
  factory :list do
    check_list              {Faker::Name.last_name}
  end
end