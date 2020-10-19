Rails.application.routes.draw do
  devise_for :users
  resources :closes, only: [:index, :show, :create, :new]
  resources :lists, only: [:new, :create]

  get 'closes/index'
  root to: "closes#index"
  
end
