require 'rails_helper'
RSpec.describe User, type: :model do
  before do
    @user = FactoryBot.build(:user)
  end
  describe 'ユーザー新規登録' do
    it "全て入力されていれば登録できる" do
      expect(@user).to be_valid
    end
    it "store_nameが空だと登録できない" do
      @user.store_name = "" 
      @user.valid?
      expect(@user.errors.full_messages).to include("店名を入力してください")
    end
    it "emailが空では登録できない" do
      @user.email = ""
      @user.valid?
      expect(@user.errors.full_messages).to include("Eメールを入力してください")
    end
    it "重複したemailが存在する場合登録できない" do
      @user.save
      another_user = FactoryBot.build(:user, email: @user.email)
      another_user.valid?
     expect(another_user.errors.full_messages).to include("Eメールはすでに存在します")
    end
    it "emailに@が無い場合登録できない" do
      @user.email = "aaaaaa.com"  
      @user.valid?
      expect(@user.errors.full_messages).to include("Eメールは不正な値です")
    end
    it "passwordが空では登録できない" do
      @user.password = ""  
      @user.valid?
      expect(@user.errors.full_messages).to include("パスワードを入力してください", "パスワード（確認用）とパスワードの入力が一致しません")
    end
    it "passwordが存在してもpassword_confirmationが空では登録できない" do
      @user.password_confirmation = ""
      @user.valid?
      expect(@user.errors.full_messages).to include("パスワード（確認用）とパスワードの入力が一致しません")
    end
  end
end