Rails.application.routes.draw do
  devise_for :users
  resources :closes 
  resources :lists
  
  get 'closes/index'
  root to: "closes#index"
  
end
