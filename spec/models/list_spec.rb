require 'rails_helper'

RSpec.describe List, type: :model do
  before do
    @list = FactoryBot.build(:list)
  end
  describe 'チェックリスト登録' do
    it "入力されていれば登録できる" do
      expect(@list).to be_valid
    end
    it "チェックリストが空では登録できない" do
      @list.check_list = ""
      @list.valid?
      expect(@list.errors.full_messages).to include("チェックリストを入力してください")
    end
  end
end