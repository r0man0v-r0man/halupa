docker
docker build -t romanovdocker/halupa:release . --no-cache
docker run --rm -p 80:80/tcp -d romanovdocker/halupa:release

dotnet ef:
dotnet ef database update -p dal -s api