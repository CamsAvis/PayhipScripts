# CSS
$COMBINED_CSS_PATH = "$PSScriptRoot\combined_css.css"
New-Item -ItemType File -Path $COMBINED_CSS_PATH -Force | Out-Null
Get-ChildItem -Path "$PSScriptRoot/src/css" -Filter *.css -File -Recurse `
	| Sort-Object Name `
	| ForEach-Object {
    Get-Content $_.FullName | Add-Content -Path $COMBINED_CSS_PATH
    Add-Content -Path $COMBINED_CSS_PATH -Value "`r`n"
	}

# HTML
$COMBINED_HTML_PATH = "$PSScriptRoot\combined_html.html"
New-Item -ItemType File -Path $COMBINED_HTML_PATH -Force | Out-Null

# Add other links
Get-Content "$PSScriptRoot/src/html/includes.html" | Set-Content -Path $COMBINED_HTML_PATH

Add-Content -Path $COMBINED_HTML_PATH -Value "<script>`r`n"
Get-ChildItem -Path "$PSScriptRoot/src/js" -Filter *.js -File -Recurse `
	| Sort-Object Name `
	| ForEach-Object {
    Get-Content $_.FullName | Add-Content -Path $COMBINED_HTML_PATH
    Add-Content -Path $COMBINED_HTML_PATH -Value "`r`n"
	}
Add-Content -Path $COMBINED_HTML_PATH -Value "</script>"