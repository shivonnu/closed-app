class ListsController < ApplicationController
  before_action :authenticate_user!, only: [:new]
  before_action :set_list, only: [:new]

  def new
    @lists = List.new
  end

  def create
    @lists = List.new(list_params)
    if 
      @lists.save
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
