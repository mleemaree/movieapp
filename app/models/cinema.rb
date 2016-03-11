class Cinema < ActiveRecord::Base
  has_many :showings
  has_many :movies, :through => :showings
  validates :name, presence: true
  validates :name, uniqueness: true
  validates :location, presence: true
end
