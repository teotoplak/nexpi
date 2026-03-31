# Agent Instructions

## Visual Verification Required

After making any CSS or layout changes, always verify the result visually using the browser skill:

1. **Desktop**: Take a screenshot of the affected section at full width
2. **Mobile**: Take a screenshot at mobile viewport (390px wide) to verify responsive layout

Use the browser skill to open the local file:
```
browse open "file:///Users/teo/src/nexpi-landing/index.html#<section-id>"
browse screenshot /tmp/verify-desktop.png
```

Do not consider a visual change complete until you have confirmed it looks correct in both screenshots and reported back to the user with the visual evidence.
