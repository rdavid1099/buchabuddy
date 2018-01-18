class AngularController < ApplicationController
  before_action :require_login

  def show
  end

  private
  def require_login
    redirect_to welcome_index_path
  end
end
