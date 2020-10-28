docker
docker build -t romanovdocker/halupa-api . --no-cache
docker run --rm -p 5000:80/tcp -d romanovdocker/halupa-api:latest
docker run --rm -p 4000:80/tcp -d romanovdocker/halupa-spa:latest

dotnet ef:
dotnet ef database update -p dal -s api
dotnet ef database drop -p dal -s api
dotnet ef migrations add first -p dal -s api