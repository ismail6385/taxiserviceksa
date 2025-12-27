
$files = Get-ChildItem -Path "d:\taxiksa\app" -Recurse -Filter "page.tsx"
Write-Host "Scanning $($files.Count) files..."

foreach ($file in $files) {
    if ($file.FullName -like "*[city]*") { continue }

    $content = Get-Content $file.FullName -Raw
    $pattern = "canonical:\s*'https://taxiserviceksa\.com/([^']+)'"
    
    # Use scriptblock for replacement logic
    $newContent = [regex]::Replace($content, $pattern, {
            param($match)
            $urlPart = $match.Groups[1].Value
        
            # If it doesn't end with slash, add it
            if (-not $urlPart.EndsWith("/")) {
                return "canonical: 'https://taxiserviceksa.com/$urlPart/'"
            }
            return $match.Value
        })
    
    if ($content -ne $newContent) {
        Set-Content -Path $file.FullName -Value $newContent
        Write-Host "Fixed $($file.FullName)"
    }
}
