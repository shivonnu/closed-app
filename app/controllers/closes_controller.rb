class ClosesController < ApplicationController
  before_action :move_to_index, except: [:edit]

  def index
    
    @close = Close.find_by(id: params[:id])
  end
  def edit
    @close = Close.find_by(id: params[:id])
  end

  def show
    @close = Close.find_by(id: params[:id])
  end

  def move_to_index
    unless user_signed_in?
      redirect_to action: :index
    end
  end
end
