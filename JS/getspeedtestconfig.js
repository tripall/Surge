let ssidMatched = ($network.wifi.ssid === 'Kun_Dorm_5G' || $network.wifi.ssid === 'Kun_Dorm');
if (ssidMatched)
{
  $done();
}
else
{
  let url = 'https://www.speedtest.net/api/ios-config.php';
  $done($httpClient.get(url));
}
