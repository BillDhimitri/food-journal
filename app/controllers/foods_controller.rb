class FoodsController < ApplicationController

  #before_filter :authenticate_user!, only: [:create, :destroy, :edit]

  def index
    respond_with Food.all
  end

  def create
    respond_with Food.create(food_params.merge(user_id: current_user.id))
  end

  def show
    respond_with Food.find(params[:id])
  end

  def destroy
    food = Food.find(params[:id])
    food.destroy
    respond_with Food.all
  end

  def edit
    respond_with Food.find(params[:id])
  end

  def update
    respond_with Food.find(params[:id]).update_attributes(food_params)
  end
     
  private
  def food_params
    params.require(:food).permit(:name, :description, :rating)
  end
end
