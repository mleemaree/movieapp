json.cinemas @cinemas do |cinema|
  json.id cinema.id
  json.name cinema.name
  json.location cinema.location
end

json.movies @movies do |movie|
  json.id movie.id
  json.poster movie.poster
  json.title movie.title
  json.rating movie.rating
  json.user_rating movie.user_rating
  json.length movie.length
  json.actor movie.actor
  json.country movie.country
  json.genre movie.genre
  json.summary movie.summary
  json.trailer movie.trailer
  json.language movie.language
  json.clip movie.clip
end

json.showings @showings do |showing|
  json.id showing.id
  json.timestamp showing.timestamp
  json.movie_id showing.movie_id
  json.cinema_id showing.cinema_id
end