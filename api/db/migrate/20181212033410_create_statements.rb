class CreateStatements < ActiveRecord::Migration[5.2]
  def change
    create_table :statements do |t|
      t.date :date
      t.string :kind
      t.integer :amount
      t.string :memo
      t.integer :total
      t.references :account, foreign_key: true

      t.timestamps
    end
  end
end
