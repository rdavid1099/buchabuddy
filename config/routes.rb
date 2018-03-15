Rails.application.routes.draw do
  mount_devise_token_auth_for 'User', at: 'auth', controllers: {
    registrations: 'overrides/registrations'
  }

  root to: 'bucha_buddy#index'
  get '*unmatched_route' => 'bucha_buddy#index'
end
