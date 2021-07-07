var client_id_str = "-";
var proto = "0"; // protocol number - 1 for icmp, 6 for tcp etc.
var ip01 = "0"; // 1st octet of ip address in source
var ip02 = "0"; // 1st octet of ip address in dest

function getClientId(s) {
    s.on('upload', function (data, flags) {
      if ( data.length != 0 ) {
        proto = data.charCodeAt(31);
        ip01 = data.charCodeAt(34);
        ip02 = data.charCodeAt(38);

        client_id_str = ip01 + ip02 + proto // sum en guise of the a one way hash to have same source/dest/proto (back and forth)
        // eg if out going is going from 10.x.x.x to 75.x.x.x.via tcp, the sum will be 91 and the same for the reply traffic
        // going from 75.x.x.x to 10.x.x.x. via tcp.
        // s.off('upload');
        s.done();
      }

});
}

function setClientId(s) {
    return client_id_str;
}