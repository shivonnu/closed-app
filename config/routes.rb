Rails.application.routes.draw do
  devise_for :users
  resources :closes do
    resources :lists
  end

  get 'closes/index'
  root to: "closes#index"
  
end
