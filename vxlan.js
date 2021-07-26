var client_id_str = "-";
var client_id_hash = "-";

function getClientId(s) {
    s.on('upload', function (data, flags) {
      if ( data.length != 0 ) {
        client_id_hash = (data.charCodeAt(31) + data.charCodeAt(34) + data.charCodeAt(38) + data.charCodeAt(43) + data.charCodeAt(45)).toString()
        // client_id_hash is the sum of the first bytes of the source IP, source port, protocol, destination IP, destination port - converted to a string value
        // from the encapsulated IP packet

        client_id_str = require('crypto').createHash('md5').update(client_id_hash).digest('base64url')
        //client_id_str is the md5 one-way hash of the client_id_hash value
        s.done();
      }

});
}

function setClientId(s) {
    return client_id_str;
}
