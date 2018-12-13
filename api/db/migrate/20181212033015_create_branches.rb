class CreateBranches < ActiveRecord::Migration[5.2]
  def change
    create_table :branches do |t|
      t.string :num
      t.string :name
      t.references :bank, foreign_key: true

      t.timestamps
    end
  end
end
