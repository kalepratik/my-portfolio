# Resume Folder

This folder contains the resume source and outputs.

## Workflow (author in Markdown → site auto‑generates)
1. Edit `resume.md` (source of truth)
2. Build `resume.html` from the markdown
3. Convert `resume.html` to `resume.pdf`
4. Commit the three files (`resume.md`, `resume.html`, `resume.pdf`)

You can use `auto_convert_simple.py` to generate the PDF from HTML locally.

## Files
```
resume/
├── resume.md            # Source (Markdown)
├── resume.html          # Built from markdown
├── resume.pdf           # Exported PDF (downloaded by the website)
├── auto_convert_simple.py
├── convert_resume.bat
└── CONVERT_TO_PDF.md
```

## Notes
- The website links to `resume/resume.pdf` for the download button
- Keep the PDF under ~5MB for fast download on GitHub Pages
