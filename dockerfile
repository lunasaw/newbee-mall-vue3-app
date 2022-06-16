FROM nginx
  
MAINTAINER luna

VOLUME ["~/newbee-mall-app/dist","/usr/share/nginx/html"]
  
RUN rm /etc/nginx/conf.d/default.conf
  
ADD default.conf /etc/nginx/conf.d/

#  npm run build
#  scp  dockerfile root@isluna.ml:/root/newbee-mall-app
#  scp   default.conf root@isluna.ml:/root/newbee-mall-app/  
#  scp -r  ./dist root@isluna.ml:/root/newbee-mall-app/  
# 