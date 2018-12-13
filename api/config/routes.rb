Rails.application.routes.draw do
  resources :banks
  resources :branches
  resources :customers
  
  resources :accounts do
    resources :statements
  end

  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
