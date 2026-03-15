$files = Get-ChildItem -Recurse -Include *.jsx,*.js -Path src -File
$missing = @()
$generic = @()
$genericWords = @('logo','image','img','hero','banner','slika','photo','placeholder')

foreach ($f in $files) {
  $txt = Get-Content $f.FullName -Raw
  $tags = [regex]::Matches($txt, '<img\b[\s\S]*?>', [System.Text.RegularExpressions.RegexOptions]::IgnoreCase)

  foreach ($m in $tags) {
    $tag = $m.Value

    if ($tag -notmatch 'alt\s*=') {
      $missing += "$($f.FullName) :: $($tag.Substring(0, [Math]::Min(120, $tag.Length)))"
      continue
    }

    $val = ''
    $m1 = [regex]::Match($tag, 'alt\s*=\s*"([^"]*)"', [System.Text.RegularExpressions.RegexOptions]::IgnoreCase)
    if ($m1.Success) {
      $val = $m1.Groups[1].Value
    } else {
      $m2 = [regex]::Match($tag, "alt\s*=\s*'([^']*)'", [System.Text.RegularExpressions.RegexOptions]::IgnoreCase)
      if ($m2.Success) { $val = $m2.Groups[1].Value }
    }

    $val = $val.Trim().ToLower()
    if ($val -eq '' -or $genericWords -contains $val) {
      $generic += "$($f.FullName) :: alt='$val' :: $($tag.Substring(0, [Math]::Min(120, $tag.Length)))"
    }
  }
}

Write-Output "missing_alt=$($missing.Count)"
Write-Output "generic_alt=$($generic.Count)"

if ($missing.Count -gt 0) {
  Write-Output '--- Missing alt (first 20) ---'
  $missing | Select-Object -First 20
}

if ($generic.Count -gt 0) {
  Write-Output '--- Generic alt (first 20) ---'
  $generic | Select-Object -First 20
}
