# README

## Usersテーブル

| Column               | Type    | Options     |
| -------------------- | ------- | ----------- |
| store_name           | text    | null: false |
| email                | string  | null: false |
| encrypted_password   | string  | null: false |
| reset_password_token | string  | null: false |

### Association
- has_many :closes
- has_one :list

## Closesテーブル

| Column           | Type    | Options                         |
| ---------------- | ------- | ------------------------------- |
| number_of_people | integer | null: false                     |
| user_id          | string  | null: false, foreign_key: :true |

### Association
- belongs_to :user
- has_one :list

## Listsテーブル

| Column     | Type    | Options                         |
| ---------- | ------- | ------------------------------- |
| check_list | text    |                                 |
| user_id    | string  | null: false, foreign_key: :true |

### Association
- belongs_to :user
- belongs_to :close