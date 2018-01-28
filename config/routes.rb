Rails.application.routes.draw do
  devise_for :users
  root to: 'bucha_buddy#index'
end
