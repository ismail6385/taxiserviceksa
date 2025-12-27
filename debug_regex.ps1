
$f = "d:\taxiksa\app\routes\jeddah-alula\page.tsx"
$c = Get-Content $f -Raw
Write-Host "Checking $f"

if ($c -match "canonical") { Write-Host "Has Canonical text" }

$pattern = "canonical:\s*'https://taxiserviceksa\.com/([^']+)(?<!/)'"
$m = [regex]::Match($c, $pattern)
if ($m.Success) {
    Write-Host "Regex Match Found: $($m.Value)"
}
else {
    Write-Host "Regex Failed for pattern: $pattern"
    # Try simpler
    $simpler = "canonical:\s*'https://taxiserviceksa\.com/([^']+)'"
    $m2 = [regex]::Match($c, $simpler)
    if ($m2.Success) {
        Write-Host "Simpler Regex Matched: $($m2.Value)"
        Write-Host "Value captured: $($m2.Groups[1].Value)"
        if ($m2.Groups[1].Value.EndsWith("/")) {
            Write-Host "Ends with slash (Reason for failure)"
        }
        else {
            Write-Host "Does not end with slash (Why did original fail?)"
        }
    }
}
