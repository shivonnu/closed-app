class ClosesController < ApplicationController
  before_action :authenticate_user!, only: [:new]
  before_action :set_list, only: [:index, :show, :new]

  def index
  end
 
  def show
  end

  def new
    @closes = List.new
  end

  def create
    @closes = List.new(list_params)
    if 
      @closes.save
      redirect_to root_path
    else
      flash.now
      render :new
    end
  end
 

  def set_list
    @list = List.order("created_at desc").limit(1)
  end

 private
 def list_params
  params.permit(:check_list).merge(user_id: current_user.id)
 end
end
