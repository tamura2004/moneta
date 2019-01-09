Rails.application.routes.draw do
  scope :api do
    resources :banks
    resources :branches
    
    resources :accounts do
      resources :statements
      get '/account_to/:to/amount/:amount/transfer', to: 'statements#transfer', as: 'transfer'
      get '/balance', to: 'accounts#balance', as: 'balance'
    end
  end
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
