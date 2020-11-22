#use bionic cause from another images won't connect to sql
#FROM mcr.microsoft.com/dotnet/core/aspnet:3.1.9-bionic AS base

FROM mcr.microsoft.com/dotnet/sdk:5.0 AS base
WORKDIR /app
#FROM mcr.microsoft.com/dotnet/core/sdk:3.1 AS build
FROM mcr.microsoft.com/dotnet/sdk:5.0 AS build
WORKDIR /src
# Copy csproj and restore as distinct layers
COPY halupa.sln .
COPY api/api.csproj ./api/
COPY DAL/DAL.csproj ./DAL/
COPY BLL/BLL.csproj ./BLL/

RUN dotnet restore

COPY . .

WORKDIR /src/api/
RUN dotnet build -c Release -o /app/build
FROM build AS publish
RUN dotnet publish -c Release -o /app/publish

FROM base AS final
WORKDIR /app
COPY --from=publish /app/publish .
ENTRYPOINT ["dotnet", "api.dll"]