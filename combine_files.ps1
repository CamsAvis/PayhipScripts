# CSS
$COMBINED_CSS_PATH = "$PSScriptRoot\combined_css.css"
New-Item -ItemType File -Path $COMBINED_CSS_PATH -Force | Out-Null
Get-ChildItem -Path "$PSScriptRoot/src/" -Filter *.css -File -Recurse `
	| Sort-Object Name `
	| ForEach-Object {
    Get-Content $_.FullName | Add-Content -Path $COMBINED_CSS_PATH
    Add-Content -Path $COMBINED_CSS_PATH -Value "`r`n"
	}

# HTML
$COMBINED_HTML_PATH = "$PSScriptRoot\combined_html.html"
New-Item -ItemType File -Path $COMBINED_HTML_PATH -Force | Out-Null

# Add other links
Add-Content -Path $COMBINED_HTML_PATH -Value @"
<link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined" />
<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.7.1/jquery.min.js"></script>
"@

Add-Content -Path $COMBINED_HTML_PATH -Value "<script>`r`n"
Get-ChildItem -Path "$PSScriptRoot/src/js" -Filter *.js -File -Recurse `
	| Sort-Object Name `
	| ForEach-Object {
    Get-Content $_.FullName | Add-Content -Path $COMBINED_HTML_PATH
    Add-Content -Path $COMBINED_HTML_PATH -Value "`r`n"
	}
Add-Content -Path $COMBINED_HTML_PATH -Value "</script>"