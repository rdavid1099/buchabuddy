class User < ApplicationRecord
  devise :database_authenticatable, :registerable, :lockable,
         :recoverable, :rememberable, :trackable, :validatable, :confirmable

  validate :password_complexity

  def password_complexity
    if password.present? && !password.match(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d). /)
      errors.add :password, "must include at least one lowercase letter, one uppercase letter, and one digit"
    end
  end

   def send_devise_notification(notification, *args)
     devise_mailer.send(notification, self, *args).deliver_later
   end
end
