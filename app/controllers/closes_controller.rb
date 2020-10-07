class ClosesController < ApplicationController
  before_action :move_to_index, except: [:edit]

  # def index
  #   @closess = Close.new
  #   @close = Close.find(params[:id])
  # end

  # def edit
  #   @close = Close.find(params[:id])
  # end

  # def show
  #   @close = Close.find(params[:id])
  # end

  def move_to_index
    unless user_signed_in?
      redirect_to action: :index
    end
  end
end
