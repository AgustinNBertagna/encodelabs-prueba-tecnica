DEFAULT_PORT=4000
DEFAULT_DB_NAME="encodelabs"
DEFAULT_DB_USER="root"
DEFAULT_DB_PASSWORD="1234"

echo "Ingrese las variables de entorno (o presione Enter para usar los valores por defecto):"

read -p "Ingrese el puerto que utilizara el servidor Apollo [${DEFAULT_PORT}]: " PORT
PORT=${PORT:-$DEFAULT_PORT}

read -p "Ingrese el nombre de la base de datos [${DEFAULT_DB_NAME}]: " DB_NAME
DB_NAME=${DB_NAME:-$DEFAULT_DB_NAME}

read -p "Ingrese el username de la base de datos [${DEFAULT_DB_USER}]: " DB_USER
DB_USER=${DB_USER:-$DEFAULT_DB_USER}

read -p "Ingrese la password de la base de datos [${DEFAULT_DB_PASSWORD}]: " DB_PASSWORD
DB_PASSWORD=${DB_PASSWORD:-$DEFAULT_DB_PASSWORD}

DB_URI="mongodb://${DB_USER}:${DB_PASSWORD}@mongodb:27017/"

cat <<EOF > .env
PORT=${PORT}
DB_NAME=${DB_NAME}
DB_USER=${DB_USER}
DB_PASSWORD=${DB_PASSWORD}
DB_URI=${DB_URI}
EOF

cleanup() {
  echo "Removiendo contenedores y volumenes..."
  docker compose down
}

trap cleanup INT TERM

docker compose up

wait
