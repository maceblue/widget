<?php

$fritzbox_ip = "192.168.178.1";
$tr64_port = "49000";
$host1 = '7E:4B:AD:48:56:90'; //C
$host2 = 'E2:CE:88:9A:24:86'; //D

// SOAP Abfrage:
$client = new SoapClient(null, array('location' => "http://" . $fritzbox_ip . ":" . $tr64_port . "/upnp/control/hosts",
    'uri' => "urn:dslforum-org:service:Hosts:1",
    'soapaction' => "urn:dslforum-org:service:Hosts:1#GetSpecificHostEntry",
    'noroot' => False
));

$NumberOfHosts = $client->GetHostNumberOfEntries();

if (!(is_soap_fault($NumberOfHosts))) {
    for ($i = 0; $i < $NumberOfHosts; $i++) {
        $host = $client->GetGenericHostEntry(new SoapParam($i, 'NewIndex'));
        if ($host['NewMACAddress'] == $host1) {
            if ($host['NewActive'] == 1) {
                print 'C1';
            } else {
                print 'C0';
            }
        }
        if ($host['NewMACAddress'] == $host2) {
            if ($host['NewActive'] == 1) {
                print 'D1';
            } else {
                print 'D0';
            }
        }
    }
} else {
	print 'soap_fault';
}
// http://192.168.178.1:49000/upnp/control/hosts