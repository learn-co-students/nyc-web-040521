Rails.application.routes.draw do
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
  resources :toys, only: [:index, :create, :destroy, :update]

  get "/toyDetails", to: "toys#details"
  get "/toyMostLikes/:likes", to: "toys#mostLikes"
end
