class Overrides::RegistrationsController < DeviseTokenAuth::RegistrationsController
  def create
    result = JSON.parse(super)
    if user = User.find_by(id: result["data"]["id"])
      user.update(username: params[:username])
    end
  end
end
