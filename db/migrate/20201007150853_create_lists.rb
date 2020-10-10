class CreateLists < ActiveRecord::Migration[6.0]
  def change
    create_table :lists do |t|
      t.text :check_list, null: false
      t.integer :user_id, null: false, foreign_key: :true
      t.timestamps
    end
  end
end
