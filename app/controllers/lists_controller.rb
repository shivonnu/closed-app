class ListsController < ApplicationController
  before_action :authenticate_user!, only: [:new]

  def new
    @list = List.order("created_at desc").limit(1)
    @lists = List.new
  end

  def create
    @lists = List.new(list_params)
    if 
      @lists.valid?
      @lists.save
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
