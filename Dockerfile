FROM microsoft/aspnetcore:2
WORKDIR /app
COPY Template/DotnetTemplate/published  ./
ENTRYPOINT ["dotnet","DotnetTemplate.dll"]