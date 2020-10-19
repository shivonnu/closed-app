class ClosesController < ApplicationController
  before_action :authenticate_user!, only: [:new]
  before_action :set_list, only: [:index, :show, :new, :create]

  def index
    @close = Close.order("created_at desc")
    @closes = Close.new
  end
 
  def show
    @close = Close.order("created_at desc")
    @closes = Close.new
  end

  def new
    @close = Close.order("created_at desc")
    @closes = Close.new
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
  def close_list
    @close = Close.order("created_at desc")   
  end

 private
 def close_params
  params.permit(:number_of_people).merge(user_id: current_user.id)
 end
end
