class Movie < ActiveRecord::Base
  after_initialize :default_values
  has_many :showings, dependent: :destroy
  has_many :cinemas, :through => :showings
  validates :title, presence: true
  validates :country, presence: true
  validates :rating, numericality: true
  validates :user_rating, numericality: true

  private
    def default_values
      self.language ||= "English"
    end
end
