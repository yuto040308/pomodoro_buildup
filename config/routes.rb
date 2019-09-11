Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html

  # homeコントローラ関連
  get     "/"                           => "times#top",                as: "top"
end
