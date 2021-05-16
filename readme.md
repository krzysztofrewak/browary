*Brewmap* is a simple way to build an interactive map with visited breweries. It uses custom static API generator written in PHP to deliver a blazing fast backend. 

## Usage
Install backend dependencies and build static API endpoints:
`docker-compose exec php composer install`
`docker-compose exec php php backend/index.php`

Serve built frontend:
`docker-compose exec node npm install`
`docker-compose exec node npm run build`

### Development
Run frontend in development mode:
`docker-compose exec node npm run serve`
