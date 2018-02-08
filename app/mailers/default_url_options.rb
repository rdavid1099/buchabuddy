module DefaultUrlOptions
  def default_url_options
    {
      :host => host,
      :port => port
    }
  end

private
  def host
    'localhost'
  end

  def port
    5000
  end
end
