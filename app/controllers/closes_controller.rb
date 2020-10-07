class ClosesController < ApplicationController
  before_action :move_to_index, except: [:edit]

  def index
    @close = current_user.id
  end
 
  def show
    @close = current_user.id
  end

  def new
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

  def move_to_index
    unless user_signed_in?
      redirect_to action: :index
    end
  end

 private
 def list_params
  params.permit(:check_list).merge(user_id: [current_user.id])
end
end
