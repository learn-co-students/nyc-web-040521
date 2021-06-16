Rails.application.routes.draw do
  # namespace :api do
  #   namespace :v1 do
  #     resources :dogs
  #   end
  # end
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
  namespace :api do
    namespace :v1 do 
      resources :instructors, only: [:index, :show, :create, :update, :destroy]
      resources :students, only: [:index]
      # resources :users, only: [:create]
      post "/signup", to: "users#create"
      post "/login", to: "users#login"
    end
  end

  # /instructors
  # /api/v1/instructors
  
end
