module DefaultUrlOptions
  def default_url_options
    {
      :host => host,
      :port => port
    }
  end

private
  def host
    ENV['RAILS_ENV'] == 'development' ? 'localhost' : 'http://buchabuddy.com'
  end

  def port
    5000 if ENV['RAILS_ENV'] == 'development'
  end
end
