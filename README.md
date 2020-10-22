# README
![b957fe5bffaeb37c3f5ca8cf54bb0037](https://user-images.githubusercontent.com/69893922/96835736-f09a2200-147e-11eb-83bd-5dc16a0afc13.gif)

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

- 閉店人数を変更できる

- ボタンを押して決められた人数になったらOKが出る

- OKの合図が出たらログが残り、後日チェックを実施しているか確認できる

## 実装した機能についてのGIFと説明
一人ずつ確認したチェックをボタンでできます。
チェックリストを左側に見やすく出しておけます。
![7f9615eb9768014d91e3e66144feebe2](https://user-images.githubusercontent.com/69893922/96835744-f263e580-147e-11eb-850c-4dd738a89fa2.gif)
<img width="1133" alt="スクリーンショット 2020-10-22 15 54 33" src="https://user-images.githubusercontent.com/69893922/96835756-f6900300-147e-11eb-91dc-d9ea04cda77c.png">
全員マルにするとログが残ります。

## 実装予定の機能

- 人数変更機能

- 人数カウントで閉店メッセージを出す

- 閉店した日付のログが残る

## データベース設計

## Usersテーブル

| Column      | Type    | Options     |
| ----------- | ------- | ----------- |
| store_name  | string  | null: false |
| email       | string  | null: false |
| pass_word   | string  | null: false |

### Association
-  has_many :closes
-  has_many :lists, through: :users

## Closesテーブル

| Column           | Type    | Options                         |
| ---------------- | ------- | ------------------------------- |
| number_of_people | integer | null: false                     |
| user_id          | integer | null: false, foreign_key: :true |

### Association
-  belongs_to :user
-  belongs_to :list, optional: true

## Listsテーブル

| Column     | Type    | Options                         |
| ---------- | ------- | ------------------------------- |
| check_list | text    |                                 |
| user_id    | integer | null: false, foreign_key: :true |

### Association
-  has_many :users, through: :closes
-  has_many :closes

## ローカルでの動作方法

ruby 2.6.5p114 (2019-10-01 revision 67812) [x86_64-darwin19]

Rails 6.0.3.3


gh repo clone shivonnu/closed-app

ターミナルのフォルダを展開してもいいところで上記URLを実行して
githubのリポジトリからクローンをダウンロードしてください。
bundle install、gemインストール、rails db:create、rails db:migrate、
rails sを実行しhttp://localhost:3000/にアクセスして下さい。
