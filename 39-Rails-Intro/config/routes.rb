Rails.application.routes.draw do
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
  
  # RESTful routes - 7 routes
  # http_method url, to: "controller#action"
  get "/owners", to: "owners#index"

  
end
