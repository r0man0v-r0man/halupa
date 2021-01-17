docker
docker build -t romanovdocker/halupa-api . --no-cache 
docker build -t romanovdocker/halupa-spa . --no-cache
docker run --rm -d -p 5000:5000/tcp -v /var/www/db:/var/www/db -v /var/www/images:/var/www/images romanovdocker/halupa-api:latest 
docker run --rm -d -p 4000:80/tcp   romanovdocker/halupa-spa:latest 

dotnet ef:
dotnet ef database update -p dal -s api
dotnet ef database drop -p dal -s api
dotnet ef migrations add first -p dal -s api   

figma
https://www.figma.com/file/4LBwVEXBn0AHrUdssQhlQy/halupa?node-id=0%3A1