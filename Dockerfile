# 🐳 Dockerfile برای Blazor WebAssembly

# مرحله Build
FROM mcr.microsoft.com/dotnet/sdk:7.0 AS build
WORKDIR /src

# کپی فایل‌های Solution و Project
COPY ["JsonViewer.Blazor.sln", "./"]
COPY ["src/Component/Component.csproj", "src/Component/"]
COPY ["src/Blazor.Demo/Blazor.Demo.csproj", "src/Blazor.Demo/"]

# Restore پکیج‌ها
RUN dotnet restore "JsonViewer.Blazor.sln"

# کپی بقیه فایل‌ها
COPY . .

# Build پروژه
WORKDIR "/src/src/Blazor.Demo"
RUN dotnet build "Blazor.Demo.csproj" -c Release -o /app/build

# Publish
FROM build AS publish
RUN dotnet publish "Blazor.Demo.csproj" -c Release -o /app/publish /p:UseAppHost=false

# مرحله نهایی - استفاده از nginx برای سرو کردن
FROM nginx:alpine AS final
WORKDIR /usr/share/nginx/html

# کپی فایل‌های Publish شده
COPY --from=publish /app/publish/wwwroot .

# کپی فایل پیکربندی nginx
COPY nginx.conf /etc/nginx/nginx.conf

EXPOSE 80
EXPOSE 443

CMD ["nginx", "-g", "daemon off;"]

