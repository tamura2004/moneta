class CreateAccounts < ActiveRecord::Migration[5.2]
  def change
    create_table :accounts do |t|
      t.string :name
      t.string :kind
      t.string :num
      t.string :login_id
      t.string :hashed_password
      t.references :branch, foreign_key: true

      t.timestamps
    end
  end
end
