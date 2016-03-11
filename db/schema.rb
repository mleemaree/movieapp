# encoding: UTF-8
# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# Note that this schema.rb definition is the authoritative source for your
# database schema. If you need to create the application database on another
# system, you should be using db:schema:load, not running all the migrations
# from scratch. The latter is a flawed and unsustainable approach (the more migrations
# you'll amass, the slower it'll run and the greater likelihood for issues).
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema.define(version: 20160222190445) do

  # These are extensions that must be enabled in order to support this database
  enable_extension "plpgsql"

  create_table "cinemas", force: :cascade do |t|
    t.string   "name"
    t.string   "location"
    t.string   "cinema_id"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  create_table "movies", force: :cascade do |t|
    t.string   "poster"
    t.string   "title"
    t.float    "rating"
    t.float    "user_rating"
    t.string   "length"
    t.text     "actor"
    t.text     "summary"
    t.string   "genre"
    t.string   "country"
    t.string   "trailer"
    t.string   "language"
    t.string   "clip"
    t.datetime "created_at",  null: false
    t.datetime "updated_at",  null: false
  end

  create_table "showings", force: :cascade do |t|
    t.string   "timestamp"
    t.integer  "movie_id"
    t.integer  "cinema_id"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  add_index "showings", ["cinema_id"], name: "index_showings_on_cinema_id", using: :btree
  add_index "showings", ["movie_id"], name: "index_showings_on_movie_id", using: :btree

end
