class CreateCloses < ActiveRecord::Migration[6.0]
  def change
    create_table :closes do |t|
      t.integer :number_of_people, null: false
      t.integer :user_id, null: false, foreign_key: :true
      t.timestamps
    end
  end
end
