
$apiKey = "c7c37d7de2554b7bbb1d97b5ba9c6bd6"
$siteUrl = "https://taxiserviceksa.com"

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
  "https://taxiserviceksa.com/routes/dammam-doha/"
)

# Trim to exactly 100
$urls = $urls | Select-Object -First 100

Write-Host "============================================" -ForegroundColor Cyan
Write-Host " Bing Webmaster URL Submission API" -ForegroundColor Cyan
Write-Host "============================================" -ForegroundColor Cyan
Write-Host "URLs to submit: $($urls.Count)" -ForegroundColor Yellow

# Step 1: Check remaining daily quota
Write-Host "`nChecking daily quota..." -ForegroundColor Yellow
try {
    $quotaUrl = "https://ssl.bing.com/webmaster/api.svc/json/GetUrlSubmissionQuota?siteUrl=$siteUrl&apikey=$apiKey"
    $quota = Invoke-RestMethod -Uri $quotaUrl -Method GET -UseBasicParsing
    Write-Host "Daily Quota  : $($quota.d.DailyQuota)" -ForegroundColor Green
    Write-Host "Monthly Quota: $($quota.d.MonthlyQuota)" -ForegroundColor Green
    Write-Host ""
} catch {
    Write-Host "Could not check quota: $($_.Exception.Message)" -ForegroundColor DarkYellow
    Write-Host "Proceeding anyway..." -ForegroundColor DarkYellow
}

# Step 2: Submit URLs in batch (max 100 per request for Bing Webmaster API)
Write-Host "Submitting $($urls.Count) URLs to Bing Webmaster API..." -ForegroundColor Yellow

$submitUrl = "https://ssl.bing.com/webmaster/api.svc/json/SubmitUrlbatch?apikey=$apiKey"

$body = @{
    siteUrl = $siteUrl
    urlList = $urls
} | ConvertTo-Json -Depth 3

try {
    $response = Invoke-WebRequest `
        -Uri $submitUrl `
        -Method POST `
        -ContentType "application/json; charset=utf-8" `
        -Body $body `
        -UseBasicParsing

    Write-Host "`n============================================" -ForegroundColor Green
    Write-Host " SUCCESS!" -ForegroundColor Green
    Write-Host "============================================" -ForegroundColor Green
    Write-Host "HTTP Status: $($response.StatusCode) $($response.StatusDescription)" -ForegroundColor Green
    Write-Host "Response   : $($response.Content)" -ForegroundColor Green
    Write-Host "`n$($urls.Count) URLs submitted via Bing Webmaster API!" -ForegroundColor Cyan
} catch {
    $statusCode = $_.Exception.Response.StatusCode.value__
    Write-Host "`n============================================" -ForegroundColor Red
    Write-Host " ERROR (HTTP $statusCode)" -ForegroundColor Red
    Write-Host "============================================" -ForegroundColor Red
    Write-Host $_.Exception.Message -ForegroundColor Red
    
    if ($_.Exception.Response) {
        $reader = New-Object System.IO.StreamReader($_.Exception.Response.GetResponseStream())
        $errorBody = $reader.ReadToEnd()
        Write-Host "Response: $errorBody" -ForegroundColor Red
    }
}

# Step 3: Check remaining quota after submission
Write-Host "`nChecking remaining quota..." -ForegroundColor Yellow
try {
    $quotaUrl = "https://ssl.bing.com/webmaster/api.svc/json/GetUrlSubmissionQuota?siteUrl=$siteUrl&apikey=$apiKey"
    $quota = Invoke-RestMethod -Uri $quotaUrl -Method GET -UseBasicParsing
    Write-Host "Remaining Daily : $($quota.d.DailyQuota)" -ForegroundColor Cyan
    Write-Host "Remaining Monthly: $($quota.d.MonthlyQuota)" -ForegroundColor Cyan
} catch {
    Write-Host "Could not check remaining quota." -ForegroundColor DarkYellow
}

Write-Host "`nDone!" -ForegroundColor Green
