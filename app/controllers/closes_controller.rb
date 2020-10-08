class ClosesController < ApplicationController
  before_action :authenticate_user!, only: [:new]

  def index
    @lists = List.order("created_at desc").limit(1)
  end
 
  def show
    @close = current_user.id
    @lists = List.order("created_at desc").limit(1)
  end

  def new
    @lists = List.order("created_at desc").limit(1)
    @closes = List.new
    @close = current_user.id
  end

  def create
    @close = current_user.id
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
  params.permit(:check_list).merge(user_id: [current_user.id])
end
end
