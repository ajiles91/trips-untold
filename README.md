# Trips Unplanned
Trips Unplanned is a fullstack app that helps users to plan a trip to major cities with weather, restaurants and info for local attractions.

# Technologies Used:
HTML, CSS, React.js, Node.js, Express.js, PostgreSQL

# Important Links:
Live Link: https://ajiles91-trips-unplanned-app.now.sh/
Client Repo: https://github.com/ajiles91/trips-unplanned

# Screenshots:
![trips-unplanned-main-page](screenshots/trips-unplanned-main-page.jpg)
![trips-unplanned-attractions-page](screenshots/trips-unplanned-attractions-page.jpg)
![trips-unplanned-food-page](screenshots/trips-unplanned-food-page.jpg)
![trips-unplanned-weather-page](screenshots/trips-unplanned-weather-page.jpg)

# API Documentation:
The comments/recommendations section has an API with one endpoint /api/comments.  GET /api/cpmments retrieves all the stored comments and displays them on the main page - stored as an array of objects
## Properties of Each Object
-id:12 (number, generated when posted in database)
-username:Fake Name (string)
-comment:Comments about App or Recommendation(string)

POST /api/comments - user submits their name and comment and/or recommendation
## Properties
-id:12 (number, generated when posted in database)
-username:Fake Name (string)
-comment:Comments about App or Recommendation(string)

