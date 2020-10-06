Rails.application.routes.draw do
  get 'closes/index'
  root to: "closes#index"
end
