Rails.application.routes.draw do
  resources :users
  namespace 'api' do
    namespace 'v1' do
      resources :users
    end
  end
end