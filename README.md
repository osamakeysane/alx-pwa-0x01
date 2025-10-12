# ALX Project 0x14 — API Explorer & Movies App

## API Overview
The application will use the **MoviesDatabase API** (for example, the TMDb — The Movie Database API) to fetch movie data (titles, details, images, genres) and display them in the web app.  
The API offers endpoints for searching, discovering by filters (year, genre), getting movie details, and retrieving related assets (images, credits).
## Version
The MoviesDatabase API (TMDb) version used is **v3** (as documented). :contentReference[oaicite:0]{index=0}
## Available Endpoints
Below are some of the key endpoints you are likely to use (these come from TMDb’s API). :contentReference[oaicite:1]{index=1}

| Endpoint | Description / Use |
| `GET /movie/popular` | Fetch a list of popular movies |
| `GET /search/movie` | Search for movies by a keyword (query) |
| `GET /movie/{movie_id}` | Get detailed information about a particular movie by its ID | :contentReference[oaicite:2]{index=2} |
| `GET /movie/{movie_id}/credits` | Get cast & crew information (actors, directors, etc.) | :contentReference[oaicite:3]{index=3} |
| `GET /movie/{movie_id}/images` | Fetch images (posters, backdrops) for that movie | :contentReference[oaicite:4]{index=4} |
| `GET /discover/movie` | Discover or filter movies by year, genre, or popularity | :contentReference[oaicite:5]{index=5} |

You might also see endpoints like:
- `/genre/movie/list` — to list all genres and their IDs
- `/trending/{media_type}/{time_window}` — to get trending movies or TV shows
- `/configuration` — to get base URLs for images, sizes, etc.

## Request and Response Format

### Request Format

- The API uses **HTTP GET** method for most read operations.
- Requests must include your **API key** (as a query parameter or header, depending on the endpoint).
- You may supply query parameters like `page`, `year`, `with_genres`, `query`, etc.

**Example request to search movies:**
GET https://api.themoviedb.org/3/search/movie

?api_key=YOUR_API_KEY
&query=Inception
&page=1


### Response Format

Responses are typically JSON objects. They often wrap the data in an envelope like `{ results: [ … ], page: 1, total_pages: 100, total_results: 2000 }`.

**Example response (simplified) for search:**
```json
{
  "page": 1,
  "results": [
    {
      "id": 27205,
      "title": "Inception",
      "release_date": "2010-07-15",
      "poster_path": "/ljsZTbVsrQSqZgWeep2B1QiDKuh.jpg",
      "genre_ids": [28, 12, 878]
    },
    {
      "id": 299536,
      "title": "Avengers: Infinity War",
      "release_date": "2018-04-25",
      "poster_path": "/7WsyChQLEftFiDOVTGkv3hFpyyt.jpg",
      "genre_ids": [28, 12, 878]
    }
    // … more movies
  ],
  "total_pages": 500,
  "total_results": 10000
}
**Example response for movie details (GET /movie/{movie_id}):
{
  "id": 27205,
  "title": "Inception",
  "overview": "Dom Cobb is a skilled thief …",
  "release_date": "2010-07-15",
  "genres": [
    { "id": 28, "name": "Action" },
    { "id": 878, "name": "Science Fiction" }
  ],
  "runtime": 148,
  "poster_path": "/ljsZTbVsrQSqZgWeep2B1QiDKuh.jpg",
  "backdrop_path": "/8ZTVqvKDQ8emSGUEMjsS4yHAwrp.jpg",
  "vote_average": 8.3,
  "vote_count": 36565,
  "credits": {
    "cast": [ /* array of cast objects */ ],
    "crew": [ /* array of crew objects */ ]
  }
}

