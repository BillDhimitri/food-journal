class CreateEntries < ActiveRecord::Migration
  def change
    create_table :entries do |t|
      t.datetime :eaten_at
      t.integer :count
      t.references :food, index: true, foreign_key: true

      t.timestamps null: false
    end
  end
end
