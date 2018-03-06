# config valid for current version and patch releases of Capistrano
lock "~> 3.10.1"

set :application, "buchabuddy"
set :repo_url, "git@github.com:buchabuddy/buchabuddy.git"

ask :branch, `git rev-parse --abbrev-ref HEAD`.chomp

set :deploy_to, "/home/deploy/buchabuddy"

append :linked_files, "config/database.yml", "config/secrets.yml", "./.secrets"

append :linked_dirs, "log", "tmp/pids", "tmp/cache", "tmp/sockets", "public/system", "vendor/bundle", "public/uploads"

# Default value for default_env is {}
# set :default_env, { path: "/opt/ruby/bin:$PATH" }

# Default value for local_user is ENV['USER']
# set :local_user, -> { `git config user.name`.chomp }

# Default value for keep_releases is 5
# set :keep_releases, 5

# Uncomment the following to require manually verifying the host key before first deploy.
# set :ssh_options, verify_host_key: :secure
