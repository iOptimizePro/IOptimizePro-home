SET IMAGE_NAME=iopp_home
docker build -t %IMAGE_NAME% .
docker run -d -p 80:80 %IMAGE_NAME%
