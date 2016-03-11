class CreateCinemas < ActiveRecord::Migration
  def change
    create_table :cinemas do |t|
      t.string :name
      t.string :location
      t.string :cinema_id

      t.timestamps null: false
    end
  end
end
