Rails.application.routes.draw do
  resources :statements
  resources :accounts
  resources :customers
  resources :branches
  resources :banks
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
