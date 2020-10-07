class ApplicationController < ActionController::Base
  protect_from_forgery with: :exception
  before_action :configre_permitted_parameters, if: :devise_controller?

  private
  def configre_permitted_parameters
    devise_parameter_sanitizer.permit(:sign_up, keys: [:store_name])
  end
end
