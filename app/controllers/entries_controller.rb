class EntriesController < ApplicationController

  #before_filter :authenticate_user!, only: [:create, :destroy]

  def index
   respond_with Entry.where(user_id: current_user.id).load
  end

  def create
    respond_with Entry.create(entry_params.merge(user_id: current_user.id))
  end

  def show
    respond_with Entry.find(params[:id])
  end

  def destroy
    entry = Entry.find(params[:id])
    entry.destroy
    respond_with Entry.all
  end

  private
  def entry_params
    params.require(:entry).permit( :eaten_at, :quantity, :food_name, :food_description)
  end
end
