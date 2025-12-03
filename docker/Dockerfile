# 🐳 Dockerfile for Blazor WebAssembly

# Build Stage
FROM mcr.microsoft.com/dotnet/sdk:7.0 AS build
WORKDIR /src

# Copy Solution and Project files
COPY ["JsonViewer.Blazor.sln", "./"]
COPY ["src/Component/Component.csproj", "src/Component/"]
COPY ["src/Blazor.Demo/Blazor.Demo.csproj", "src/Blazor.Demo/"]

# Restore packages
RUN dotnet restore "JsonViewer.Blazor.sln"

# Copy remaining files
COPY . .

# Build project
WORKDIR "/src/src/Blazor.Demo"
RUN dotnet build "Blazor.Demo.csproj" -c Release -o /app/build

# Publish Stage
FROM build AS publish
RUN dotnet publish "Blazor.Demo.csproj" -c Release -o /app/publish /p:UseAppHost=false

# Final Stage - Use nginx to serve
FROM nginx:alpine AS final
WORKDIR /usr/share/nginx/html

# Copy published files
COPY --from=publish /app/publish/wwwroot .

# Copy nginx configuration file
COPY docker/nginx.conf /etc/nginx/nginx.conf

EXPOSE 80
EXPOSE 443

CMD ["nginx", "-g", "daemon off;"]

