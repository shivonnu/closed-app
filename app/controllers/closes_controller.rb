class ClosesController < ApplicationController
  before_action :authenticate_user!, only: [:new]
  before_action :set_list, only: [:index, :show, :create]
 
  def index
    @closes = Close.new
  end
 
  def show
    @close = Close.order("created_at desc").limit(100)
  end

  def create
    @closes = Close.new(close_params)
    if  
      @closes.save
      redirect_to root_path
    else
      flash.now
      render :index
    end
  end
 
  def set_list
    @list = List.order("created_at desc").limit(1)
  end

 private
 def close_params
  params.permit(:number_of_people).merge(user_id: current_user.id)
 end
end
