let inCellular = ($network.v4.primaryInterface === "pdp_ip0");
if (inCellular)
{
  let url = 'https://www.speedtest.net/api/ios-config.php';
  $done($httpClient.get(url));
}
else
{
  $done();
}
