class CreateShowings < ActiveRecord::Migration
  def change
    create_table :showings do |t|
      t.string :timestamp
      t.references :movie, index: true
      t.references :cinema, index:true
      t.timestamps null: false
    end
  end
end
