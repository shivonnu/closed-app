require 'rails_helper'

RSpec.describe "Lists", type: :system do
  before do
    @user = FactoryBot.create(:user)
    @check_list = Faker::Lorem.sentence
  end
  context 'チェックリスト編集ができるとき'do
    it 'ログインしたユーザーはチェックリスト編集ができる' do
      # ログインする
      visit new_user_session_path
      fill_in 'user_email', with: @user.email
      fill_in 'user_password', with: @user.password
      find('input[name="commit"]').click
      # チェックリスト編集へのリンクがあることを確認する
      expect(page).to have_content('チェックリストを編集する')
      # チェックリスト編集ページに移動する
      visit new_list_path
      # フォームに情報を入力する
      fill_in 'check_list', with: @check_list
      # 送信するとListモデルのカウントが1上がることを確認する
      expect{
        find('input[name="commit"]').click
      }.to change { List.count }.by(1)
      # トップページに遷移することを確認する
      expect(current_path).to eq root_path
      # トップページに遷移する
      visit root_path
      # トップページには先ほど投稿した内容のチェックリストが存在することを確認する
      expect(page).to have_content(@check_list)
    end
  end
  context 'チェックリスト編集ができないとき'do
    it 'ログインしていないとチェックリスト編集ページに遷移できない' do
      # トップページに遷移する
      visit root_path
      # チェックリスト編集ぺージへのリンクがない
      expect(page).to have_no_content('チェックリストを編集する')
    end
  end
end