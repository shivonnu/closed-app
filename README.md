# README
<img width="1761" alt="スクリーンショット 2020-10-12 15 50 37" src="https://user-images.githubusercontent.com/69893922/95714159-c38d8880-0ca2-11eb-8041-0bf550cf15ff.png">

## アプリケーション名
Closed-App

## アプリケーション概要
ガスと鍵を閉店時に従業員全員が確認してボタンを押すことで合意して退勤し、
閉め忘れを防ぐことを目指したチェックアプリです。

## URL
https://closed-app.herokuapp.com/

## テスト用アカウント

- メールアドレス

nana@gmail.com

- パスワード

nanano123

## 利用方法

- 新規登録

店の名前、email,パスワードを入力してログインします。

- ログイン
email、パスワードでログインします。

## 目指した課題解決
- チェック表する欄が小さくて老眼の人が読めない

- サインだけを仕事にしていて実際のチェックをしていない

- 鍵とガス開いてると罰金各１万円だが２回既にやっている

- 信頼できる人がいると皆やらなくて早く帰りたがる

## 洗い出した要件

- ボタンを押して決められた人数になったらOKが出る

## 実装した機能についてのGIFと説明
一人ずつ確認したチェックをボタンでできます。
チェックリストを左側に見やすく出しておけます。
![105b4fd1fce85426962e3bcc70053475](https://user-images.githubusercontent.com/69893922/95713234-2716b680-0ca1-11eb-9ecb-5145b082edaa.gif)
![9f72017bee911fb8a53f748b1063faf0](https://user-images.githubusercontent.com/69893922/95714170-c5efe280-0ca2-11eb-922e-5f5a9ab220b2.gif)

## 実装予定の機能

- 人数変更機能

- 人数カウントで閉店メッセージを出す

- 閉店した日付のログが残る

## データベース設計

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
| user_id          | integer | null: false, foreign_key: :true |

### Association
- belongs_to :user
- has_one :list

## Listsテーブル

| Column     | Type    | Options                         |
| ---------- | ------- | ------------------------------- |
| check_list | text    |                                 |
| user_id    | integer | null: false, foreign_key: :true |

### Association
- belongs_to :user
- belongs_to :close

## ローカルでの動作方法

ruby 2.6.5p114 (2019-10-01 revision 67812) [x86_64-darwin19]

Rails 6.0.3.3


gh repo clone shivonnu/closed-app

ターミナルのフォルダを展開してもいいところで上記URLを実行して
githubのリポジトリからクローンをダウンロードしてください。
bundle install、gemインストール、rails db:create、rails db:migrate、
rails sを実行しhttp://localhost:3000/にアクセスして下さい。
