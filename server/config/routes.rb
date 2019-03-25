Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html

  resources :users, only: [:index, :show, :create]
  resources :posts, only: [:index, :show, :create]

  post '/like', to: 'posts#add_like'

end
