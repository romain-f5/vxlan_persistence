# vxlan_persistence

If the upstreams are not configured to accept udp traffic on port 4789, disable icmp unreachable from iptables on the servers: 
sudo iptables -I OUTPUT -p icmp --icmp-type destination-unreachable -j DROP. 
gleaned from: https://serverfault.com/questions/522709/disable-icmp-unreachable-replies. 

This provides a working NGINX configuration and initial NGINX Java Script to process,load-balance and persist vxlan traffic to multiple upstream servers.

----
Mirroring:  
Mirroring target. 
https://docs.aws.amazon.com/vpc/latest/mirroring/traffic-mirroring-target.html#create-traffic-mirroring-target
  

Mirroring session:
https://docs.aws.amazon.com/vpc/latest/mirroring/traffic-mirroring-session.html#create-traffic-mirroring-session. 

---   
NGINX Resources used for this code:   
http://nginx.org/en/docs/stream/ngx_stream_js_module.html. 
https://nginx.org/en/docs/njs/reference.html#s_on. 
https://www.nginx.com/blog/nginx-plus-iot-load-balancing-mqtt/#mqtt-session-persistence. 
  
