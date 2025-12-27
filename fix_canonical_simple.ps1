
$files = Get-ChildItem -Path "d:\taxiksa\app" -Recurse -Filter "page.tsx"
Write-Host "Scanning $($files.Count) files..."

foreach ($file in $files) {
    if ($file.FullName -like "*[city]*") { continue }

    $content = Get-Content $file.FullName -Raw
    $pattern = "canonical:\s*'https://taxiserviceksa\.com/([^']+)(?<!/)'"
    
    if ($content -match $pattern) {
        $replacement = "canonical: 'https://taxiserviceksa.com/`$1/'"
        $newContent = $content -replace $pattern, $replacement
        Set-Content -Path $file.FullName -Value $newContent
        Write-Host "Fixed $($file.FullName)"
    }
}
