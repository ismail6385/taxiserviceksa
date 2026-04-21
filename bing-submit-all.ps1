$apiKey = "c7c37d7de2554b7bbb1d97b5ba9c6bd6"
$siteUrl = "https://taxiserviceksa.com"
$base = "d:\Taxi KSA\taxiksa\app\(main)"

# Auto-discover all page URLs from filesystem
$allUrls = @()

# Get all directories that have a page.tsx file (these are actual pages)
$pages = Get-ChildItem -Path $base -Recurse -Filter "page.tsx" -File
foreach ($p in $pages) {
    $dirPath = $p.DirectoryName
    # Get relative path by removing the base
    $rel = $dirPath.Substring($base.Length)
    $rel = $rel.Replace("\", "/")
    if ([string]::IsNullOrEmpty($rel)) { $rel = "" }
    # Skip dynamic routes like [city], admin, sitemaps, feed
    if ($rel -match "\[" -or $rel -match "admin" -or $rel -match "sitemap" -or $rel -match "feed") { continue }
    $url = "https://taxiserviceksa.com" + $rel + "/"
    $allUrls += $url
}

# Remove duplicates and already-submitted URLs
$alreadySubmitted = @(
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

$remaining = $allUrls | Where-Object { $_ -notin $alreadySubmitted } | Select-Object -Unique

Write-Host "============================================" -ForegroundColor Cyan
Write-Host " Bing Webmaster - Submit ALL Remaining URLs" -ForegroundColor Cyan  
Write-Host "============================================" -ForegroundColor Cyan
Write-Host "Total pages found : $($allUrls.Count)" -ForegroundColor Yellow
Write-Host "Already submitted : $($alreadySubmitted.Count)" -ForegroundColor Yellow
Write-Host "Remaining to send : $($remaining.Count)" -ForegroundColor Green

# Show first 5 URLs for debug
Write-Host "`nSample URLs:" -ForegroundColor DarkGray
$remaining | Select-Object -First 5 | ForEach-Object { Write-Host "  $_" -ForegroundColor DarkGray }

# Submit in batches of 100 (Bing API limit per request)
$batchSize = 100
$batches = [System.Math]::Ceiling($remaining.Count / $batchSize)
$totalSent = 0

for ($i = 0; $i -lt $batches; $i++) {
    $start = $i * $batchSize
    $batch = $remaining[$start..([Math]::Min($start + $batchSize - 1, $remaining.Count - 1))]
    
    Write-Host "`nBatch $($i+1)/$batches - Submitting $($batch.Count) URLs..." -ForegroundColor Yellow

    $body = @{
        siteUrl = $siteUrl
        urlList = $batch
    } | ConvertTo-Json -Depth 3

    try {
        $response = Invoke-WebRequest `
            -Uri "https://ssl.bing.com/webmaster/api.svc/json/SubmitUrlbatch?apikey=$apiKey" `
            -Method POST `
            -ContentType "application/json; charset=utf-8" `
            -Body $body `
            -UseBasicParsing

        Write-Host "  OK - HTTP $($response.StatusCode)" -ForegroundColor Green
        $totalSent += $batch.Count
    } catch {
        Write-Host "  FAILED: $($_.Exception.Message)" -ForegroundColor Red
        if ($_.Exception.Response) {
            $sr = New-Object System.IO.StreamReader($_.Exception.Response.GetResponseStream())
            Write-Host "  Body: $($sr.ReadToEnd())" -ForegroundColor DarkRed
        }
    }
    
    Start-Sleep -Seconds 1
}

Write-Host "`n============================================" -ForegroundColor Green
Write-Host " DONE! $totalSent URLs submitted!" -ForegroundColor Green
Write-Host "============================================" -ForegroundColor Green

# Check remaining quota
try {
    $q = Invoke-RestMethod -Uri "https://ssl.bing.com/webmaster/api.svc/json/GetUrlSubmissionQuota?siteUrl=$siteUrl&apikey=$apiKey" -Method GET -UseBasicParsing
    Write-Host "Remaining Daily : $($q.d.DailyQuota)" -ForegroundColor Cyan
    Write-Host "Remaining Monthly: $($q.d.MonthlyQuota)" -ForegroundColor Cyan
} catch {}
