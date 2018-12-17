Rails.application.routes.draw do
  resources :banks
  resources :branches
  resources :customers
  
  resources :accounts do
    resources :statements
    get '/account_to/:to/amount/:amount/transfer', to: 'statements#transfer', as: 'transfer'
    get '/balance', to: 'statements#balance', as: 'balance'
  end

  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
