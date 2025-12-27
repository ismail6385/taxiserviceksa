
$root = "d:\taxiksa\app"
$files = Get-ChildItem -Path $root -Recurse -Filter "page.tsx"

foreach ($file in $files) {
    $content = Get-Content $file.FullName -Raw
    $original = $content
    
    # 1. Handle Dynamic [city] page (JS backticks)
    # Pattern: canonical: `https://taxiserviceksa.com/locations/${city.slug}`
    # Note: In PowerShell string, backtick is escape. To match literal backtick in regex, we just use backtick? 
    # Actually, in regex string ` is just `.
    # But in the PowerShell string literal below, I must escape ` as ``.
    
    # Matching: canonical: `https://taxiserviceksa.com/locations/${city.slug}`
    # Regex: canonical:\s*`https://taxiserviceksa\.com/locations/\$\{city\.slug\}`
    
    $dynamicPattern = "canonical:\s*`https://taxiserviceksa\.com/locations/\$\{city\.slug\}`"
    if ($content -match $dynamicPattern) {
         # Replace with trailing slash
         $content = $content -replace $dynamicPattern, "canonical: ``https://taxiserviceksa.com/locations/`${city.slug}/``"
    }
    
    # 2. Handle standard static pages (Single quotes)
    # Pattern: canonical: 'https://taxiserviceksa.com/...'
    # Regex: canonical:\s*'https://taxiserviceksa\.com/([^']+)(?<!/)'
    # Replacement: canonical: 'https://taxiserviceksa.com/$1/'
    
    $staticPattern = "canonical:\s*'https://taxiserviceksa\.com/([^']+)(?<!/)'"
    # Note: backtick before $1 for capture group reference in PowerShell double string
    $staticReplacement = "canonical: 'https://taxiserviceksa.com/`$1/'"
    
    $content = $content -replace $staticPattern, $staticReplacement
    
    if ($content -ne $original) {
        Set-Content -Path $file.FullName -Value $content
        Write-Host "Updated $($file.Name)"
    }
}
