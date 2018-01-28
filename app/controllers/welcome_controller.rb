class WelcomeController < ApplicationController
  def index
    @devise_mapping ||= Devise.mappings[:user]
  end
end
