# config valid for current version and patch releases of Capistrano
lock "~> 3.10.1"

set :application, "buchabuddy"
set :repo_url, "git@github.com:buchabuddy/buchabuddy.git"

# ask :branch, `git rev-parse --abbrev-ref HEAD`.chomp

set :deploy_to, "/home/deploy/buchabuddy"

append :linked_files, "config/database.yml", "config/secrets.yml", "./.secrets"

append :linked_dirs, "log", "tmp/pids", "tmp/cache", "tmp/sockets", "public/system", "vendor/bundle", "public/uploads"

namespace :deploy do
  task :check_write_permissions do
    on roles(:all) do |host|
      if test("[ -w #{fetch(:deploy_to)} ]")
        info "#{fetch(:deploy_to)} is writable on #{host}"
      else
        error "#{fetch(:deploy_to)} is not writable on #{host}"
      end
    end
  end

  before :starting, :check_write_permissions
end
