*Brewmap* is a simple way to build an interactive map with visited breweries. It uses custom static API generator written in PHP to deliver a blazing fast backend. 

## Usage
Install frontend dependencies and build application:
`docker-compose run gui`

Install backend dependencies and rebuild static API endpoints:
`docker-compose run api`

Serve built frontend:
`docker-compose up -d server`

### Development
Run frontend in development mode:
`docker-compose up gui-dev`