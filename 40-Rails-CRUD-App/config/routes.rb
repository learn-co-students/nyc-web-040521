Rails.application.routes.draw do
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
  
  # RESTful routes - 7 routes
  # http_method url, to: "controller#action"
  # list of all owners
  get "/owners", to: "owners#index"

  # # information of an individual owner
  get "/owners/:id", to: "owners#show"
  # get "/owners/:user_name", to: "owners#show"

  # add an owner
  post "/owners", to: "owners#create"

  # update an owner
  patch "/owners/:id", to: "owners#update"

  # delete an owner
  delete "/owners/:id", to: "owners#destroy"

  # resources :owners, only: [:index, :show, :create, :update, :delete]



  
end
