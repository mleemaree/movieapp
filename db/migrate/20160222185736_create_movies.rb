class CreateMovies < ActiveRecord::Migration
  def change
    create_table :movies do |t|
      t.string :poster
      t.string :title
      t.float :rating
      t.float :user_rating
      t.string :length
      t.text :actor
      t.text :summary
      t.string :genre
      t.string :country
      t.string :trailer
      t.string :language
      t.string :clip
      t.string :country

      t.timestamps null: false
    end
  end
end
