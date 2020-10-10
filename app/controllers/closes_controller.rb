class ClosesController < ApplicationController
  before_action :authenticate_user!, only: [:new]

  def index
    @list = List.all.order("created_at desc").limit(1)
  end
 
  def show
    @list = List.all.order("created_at desc").limit(1)
  end

  def new
    @closes = List.new
    @list = List.all.order("created_at desc").limit(1)
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

 
 private
 def list_params
  params.permit(:check_list).merge(user_id: current_user.id)
 end
end
