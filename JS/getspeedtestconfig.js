let inWifi = ($network.v4.primaryInterface === "en0");
if (inWifi)
{
  $done();
}
else
{
  let url = 'https://www.speedtest.net/api/ios-config.php';
  $done($httpClient.get(url));
}
