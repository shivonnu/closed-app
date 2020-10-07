FactoryBot.define do
  factory :user do
    store_name            {"美味しいお店一号店"}
    email                 {"kkk@gmail.com"}
    password              {"00000000"}
    password_confirmation {password}
  end
end