class CreateCustomers < ActiveRecord::Migration[5.2]
  def change
    create_table :customers do |t|
      t.string :num
      t.string :name
      t.string :login_id
      t.string :hashed_password
      t.references :branch, foreign_key: true

      t.timestamps
    end
  end
end
