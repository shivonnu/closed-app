# README

## Usersテーブル

| Column      | Type    | Options     |
| ----------- | ------- | ----------- |
| store_name  | string  | null: false |
| email       | string  | null: false |
| pass_word   | string  | null: false |

### Association
- has_many :closes

## Closesテーブル

| Column           | Type    | Options     |
| ---------------- | ------- | ----------- |
| number_of_people | integer | null: false |
| date             | string  | null: false |

### Association
- belongs_to :user