# stock-recording

Abandonné, car documentation de faible qualité et authentification moins simple que dans loopback3 et flask-restx.

## Dev
    yohan@y1:~$ sudo apt-get -y install npm nodejs
    yohan@y1:~$ mkdir ~/.npm-global
    yohan@y1:~$ npm config set prefix '~/.npm-global'
    yohan@y1:~$ echo "PATH=~/.npm-global/bin:$PATH" >> ~/.profile 
    yohan@y1:~$ npm install -g @loopback/cli
    yohan@y1:~$ lb4 app
    yohan@y1:~$ cd stock-recording
    yohan@y1:~/stock-recording$ lb4 model
    yohan@y1:~/stock-recording$ lb4 datasource
    yohan@y1:~/stock-recording$ lb4 repository
    yohan@y1:~/stock-recording$ lb4 controller
    yohan@y1:~/stock-recording$ npm install --save @loopback/authentication

## Deploy
    yohan@y1:~/stock-recording$ rsync -itrlpgovDHzP --delete-after ./ ovh1:/home/yohan/repository/stock-recording/ 

## Setup
    [yohan@ovh1 repository]$ cd stock-recording
    [yohan@ovh1 stock-recording]$ sudo docker exec -it mysql-server bash
    root@42ebf0d5ad35:/# mysql -u root -p
    MariaDB [(none)]> CREATE USER 'stock-recording'@'%' IDENTIFIED BY 'FIXME';
    MariaDB [(none)]> CREATE DATABASE IF NOT EXISTS stock_recording;
    MariaDB [(none)]> GRANT ALL PRIVILEGES ON stock_recording.* TO 'stock-recording'@'%' IDENTIFIED BY 'FIXME';
    MariaDB [(none)]> quit
    root@42ebf0d5ad35:/# exit

## Run
    [yohan@ovh1 stock-recording]$ sudo docker-compose up -d --build
    [yohan@ovh1 stock-recording]$ sudo docker exec stock-recording npm run migrate

## Références

https://medium.com/@iqbaldjulfri/role-based-authentication-with-jwt-in-loopback-4-4f9ab63daa52
https://www.freecodecamp.org/news/build-restful-api-with-authentication-under-5-minutes-using-loopback-by-expressjs-no-programming-31231b8472ca/
[![LoopBack](https://github.com/strongloop/loopback-next/raw/master/docs/site/imgs/branding/Powered-by-LoopBack-Badge-(blue)-@2x.png)](http://loopback.io/)
