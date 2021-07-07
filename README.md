# vxlan_persistence

Disable icmp unreachable from iptables: 
sudo iptables -I OUTPUT -p icmp --icmp-type destination-unreachable -j DROP. 
gleaned from: https://serverfault.com/questions/522709/disable-icmp-unreachable-replies. 

Install zeek:   
https://docs.zeek.org/en/master/install.html. 

Epel enabled on ec2 linux  
https://aws.amazon.com/premiumsupport/knowledge-center/ec2-enable-epel/


Use netcat to get traffic to the vs. 
https://www.linuxtechi.com/nc-ncat-command-examples-linux-systems/

while true; do cat aliases | nc -u 10.245.1.223 4789; sleep 1; done   
Where aliases is flat file…   
Crude but gets the job done'ish. 

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
  
