class AddFoodAttributesToEntry < ActiveRecord::Migration
  def change
    add_column :entries, :food_name, :string
    add_column :entries, :food_description, :string
    add_column :entries, :food_quantity, :string
  end
end
