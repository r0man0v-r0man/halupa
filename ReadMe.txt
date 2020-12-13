docker
docker build -t romanovdocker/halupa-api . --no-cache 
docker build -t romanovdocker/halupa-spa . --no-cache
docker run --rm -d -p 5000:5000/tcp -v /var/www/db:/var/www/db romanovdocker/halupa-api:latest 
docker run --rm -d -p 4000:80/tcp   romanovdocker/halupa-spa:latest 

dotnet ef:
dotnet ef database update -p dal -s api
dotnet ef database drop -p dal -s api
dotnet ef migrations add first -p dal -s api   