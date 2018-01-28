# bundle exec sidekiq -q default -q mailers to start Sidekiq server

class MailerJob < ApplicationJob
  queue_as :default

  def perform(*args)
  end
end
