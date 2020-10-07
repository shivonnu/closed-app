class AddStoreNameToUsers < ActiveRecord::Migration[6.0]
  def change
    add_column :users, :store_name, :string,  null:false
  end
end
