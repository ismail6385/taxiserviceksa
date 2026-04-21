
$apiKey = "c7c37d7de2554b7bbb1d97b5ba9c6bd6"
$siteHost = "taxiserviceksa.com"

$urls = @(
  "https://taxiserviceksa.com/",
  "https://taxiserviceksa.com/booking/",
  "https://taxiserviceksa.com/about/",
  "https://taxiserviceksa.com/contact/",
  "https://taxiserviceksa.com/gallery/",
  "https://taxiserviceksa.com/faq/",
  "https://taxiserviceksa.com/calculator/",
  "https://taxiserviceksa.com/ask-question/",
  "https://taxiserviceksa.com/routes/",
  "https://taxiserviceksa.com/guides/",
  "https://taxiserviceksa.com/services/airport-transfers/",
  "https://taxiserviceksa.com/services/business-taxi/",
  "https://taxiserviceksa.com/services/city-tours/",
  "https://taxiserviceksa.com/services/corporate-travel/",
  "https://taxiserviceksa.com/services/event-transport/",
  "https://taxiserviceksa.com/services/family-taxi/",
  "https://taxiserviceksa.com/services/gps-taxi/",
  "https://taxiserviceksa.com/services/haramain-train-transfers/",
  "https://taxiserviceksa.com/services/heritage-tours/",
  "https://taxiserviceksa.com/services/intercity/",
  "https://taxiserviceksa.com/services/madinah-ziyarat/",
  "https://taxiserviceksa.com/services/taxi-in-jeddah/",
  "https://taxiserviceksa.com/services/taxi-in-makkah/",
  "https://taxiserviceksa.com/services/taxi-in-tabuk/",
  "https://taxiserviceksa.com/services/tours/",
  "https://taxiserviceksa.com/services/umrah-transport/",
  "https://taxiserviceksa.com/services/wheelchair-taxi/",
  "https://taxiserviceksa.com/services/ziyarat-tours/",
  "https://taxiserviceksa.com/locations/jeddah/",
  "https://taxiserviceksa.com/locations/riyadh/",
  "https://taxiserviceksa.com/locations/madinah/",
  "https://taxiserviceksa.com/locations/dammam/",
  "https://taxiserviceksa.com/locations/taif/",
  "https://taxiserviceksa.com/locations/al-khobar/",
  "https://taxiserviceksa.com/locations/dhahran/",
  "https://taxiserviceksa.com/locations/tabuk/",
  "https://taxiserviceksa.com/guides/avoid-taxi-scams/",
  "https://taxiserviceksa.com/guides/currency/",
  "https://taxiserviceksa.com/guides/haram-gates-access/",
  "https://taxiserviceksa.com/guides/international/",
  "https://taxiserviceksa.com/guides/jeddah-airport-guide/",
  "https://taxiserviceksa.com/guides/madinah-food/",
  "https://taxiserviceksa.com/guides/madinah-prayer-times/",
  "https://taxiserviceksa.com/guides/makkah-prayer-times/",
  "https://taxiserviceksa.com/guides/packing-for-umrah/",
  "https://taxiserviceksa.com/guides/saudi-sim-cards/",
  "https://taxiserviceksa.com/guides/umrah-etiquette/",
  "https://taxiserviceksa.com/routes/jeddah-madinah/",
  "https://taxiserviceksa.com/routes/jeddah-makkah/",
  "https://taxiserviceksa.com/routes/jeddah-riyadh/",
  "https://taxiserviceksa.com/routes/jeddah-taif/",
  "https://taxiserviceksa.com/routes/jeddah-dubai/",
  "https://taxiserviceksa.com/routes/jeddah-doha/",
  "https://taxiserviceksa.com/routes/jeddah-kuwait/",
  "https://taxiserviceksa.com/routes/jeddah-bahrain/",
  "https://taxiserviceksa.com/routes/jeddah-amman/",
  "https://taxiserviceksa.com/routes/jeddah-abu-dhabi/",
  "https://taxiserviceksa.com/routes/jeddah-muscat/",
  "https://taxiserviceksa.com/routes/jeddah-sharjah/",
  "https://taxiserviceksa.com/routes/jeddah-alula/",
  "https://taxiserviceksa.com/routes/madinah-jeddah/",
  "https://taxiserviceksa.com/routes/madinah-makkah/",
  "https://taxiserviceksa.com/routes/madinah-riyadh/",
  "https://taxiserviceksa.com/routes/madinah-dubai/",
  "https://taxiserviceksa.com/routes/madinah-abu-dhabi/",
  "https://taxiserviceksa.com/routes/makkah-jeddah/",
  "https://taxiserviceksa.com/routes/makkah-madinah/",
  "https://taxiserviceksa.com/routes/makkah-riyadh/",
  "https://taxiserviceksa.com/routes/makkah-taif/",
  "https://taxiserviceksa.com/routes/riyadh-jeddah/",
  "https://taxiserviceksa.com/routes/riyadh-madinah/",
  "https://taxiserviceksa.com/routes/riyadh-dammam/",
  "https://taxiserviceksa.com/routes/riyadh-dubai/",
  "https://taxiserviceksa.com/routes/riyadh-abu-dhabi/",
  "https://taxiserviceksa.com/routes/riyadh-doha/",
  "https://taxiserviceksa.com/routes/riyadh-kuwait/",
  "https://taxiserviceksa.com/routes/riyadh-bahrain/",
  "https://taxiserviceksa.com/routes/bahrain-jeddah/",
  "https://taxiserviceksa.com/routes/bahrain-riyadh/",
  "https://taxiserviceksa.com/routes/bahrain-madinah/",
  "https://taxiserviceksa.com/routes/bahrain-makkah/",
  "https://taxiserviceksa.com/routes/bahrain-dammam/",
  "https://taxiserviceksa.com/routes/dubai-jeddah/",
  "https://taxiserviceksa.com/routes/dubai-madinah/",
  "https://taxiserviceksa.com/routes/dubai-makkah/",
  "https://taxiserviceksa.com/routes/dubai-riyadh/",
  "https://taxiserviceksa.com/routes/dubai-dammam/",
  "https://taxiserviceksa.com/routes/doha-jeddah/",
  "https://taxiserviceksa.com/routes/doha-madinah/",
  "https://taxiserviceksa.com/routes/doha-makkah/",
  "https://taxiserviceksa.com/routes/doha-riyadh/",
  "https://taxiserviceksa.com/routes/doha-dammam/",
  "https://taxiserviceksa.com/routes/abu-dhabi-jeddah/",
  "https://taxiserviceksa.com/routes/abu-dhabi-madinah/",
  "https://taxiserviceksa.com/routes/abu-dhabi-makkah/",
  "https://taxiserviceksa.com/routes/abu-dhabi-riyadh/",
  "https://taxiserviceksa.com/routes/abu-dhabi-dammam/",
  "https://taxiserviceksa.com/routes/dammam-bahrain/",
  "https://taxiserviceksa.com/routes/dammam-kuwait/",
  "https://taxiserviceksa.com/routes/dammam-doha/",
  "https://taxiserviceksa.com/routes/dammam-dubai/",
  "https://taxiserviceksa.com/routes/dammam-abu-dhabi/"
)

Write-Host "Total URLs to submit: $($urls.Count)" -ForegroundColor Cyan

$body = @{
    host        = $siteHost
    key         = $apiKey
    keyLocation = "https://taxiserviceksa.com/$apiKey.txt"
    urlList     = $urls
} | ConvertTo-Json -Depth 3

Write-Host "`nSending to Bing IndexNow API..." -ForegroundColor Yellow

try {
    $response = Invoke-WebRequest `
        -Uri "https://api.indexnow.org/indexnow" `
        -Method POST `
        -ContentType "application/json" `
        -Body $body `
        -UseBasicParsing

    Write-Host "`n✅ SUCCESS!" -ForegroundColor Green
    Write-Host "HTTP Status : $($response.StatusCode) $($response.StatusDescription)" -ForegroundColor Green
    Write-Host "Response    : $($response.Content)" -ForegroundColor Green
    Write-Host "`n$($urls.Count) URLs submitted to Bing for indexing!" -ForegroundColor Cyan
} catch {
    Write-Host "`n❌ ERROR!" -ForegroundColor Red
    Write-Host $_.Exception.Message -ForegroundColor Red
    if ($_.Exception.Response) {
        $reader = New-Object System.IO.StreamReader($_.Exception.Response.GetResponseStream())
        Write-Host "Response: $($reader.ReadToEnd())" -ForegroundColor Red
    }
}
