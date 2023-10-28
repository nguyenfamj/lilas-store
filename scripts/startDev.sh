source ~/.nvm/nvm.sh
nvm use
wait

#/bin/sh
echo "Compose database for Strapi API"
docker-compose up -d

echo "Container db is up and running"

wait

npm run dev
