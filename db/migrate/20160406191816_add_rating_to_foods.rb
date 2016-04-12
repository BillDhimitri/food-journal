class AddRatingToFoods < ActiveRecord::Migration
  def change
    add_column :foods, :rating, :integer
  end
end
