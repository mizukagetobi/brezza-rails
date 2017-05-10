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

ActiveRecord::Schema.define(version: 20170509040320) do

  create_table "benefits", force: :cascade do |t|
    t.string   "description"
    t.string   "title1"
    t.string   "desc1"
    t.string   "icon1"
    t.string   "title2"
    t.string   "desc2"
    t.string   "icon2"
    t.string   "title3"
    t.string   "desc3"
    t.string   "icon3"
    t.string   "title4"
    t.string   "desc4"
    t.string   "icon4"
    t.datetime "created_at",  null: false
    t.datetime "updated_at",  null: false
  end

  create_table "mensajes", force: :cascade do |t|
    t.string   "nombre"
    t.string   "correo"
    t.text     "mensaje"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  create_table "testimonials", force: :cascade do |t|
    t.text     "quote"
    t.string   "autor"
    t.string   "date"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  create_table "whoares", force: :cascade do |t|
    t.string   "description"
    t.string   "brezzastory"
    t.string   "mission"
    t.string   "vision"
    t.string   "history"
    t.datetime "created_at",  null: false
    t.datetime "updated_at",  null: false
  end

end
