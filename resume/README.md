# Resume Folder

This folder contains the resume source and outputs.

## Workflow (Update MD → Convert to HTML → Convert to PDF)

### 1. Steps to Follow

1. **Update `resume.md`** (source of truth)
   - Edit the markdown file with latest content
   - Ensure all project titles match exactly with website projects
   - Keep experience, skills, and education up to date

2. **Convert to HTML**
   - Manually create/update `resume.html` from the markdown
   - Apply Scandinavian design principles (see guidelines below)
   - Ensure proper styling and layout

3. **Convert to PDF**
   - Run `python auto_convert_simple.py` to generate PDF
   - Verify the PDF looks professional and compact
   - Check that content fits well without unnecessary page breaks

4. **Commit all files**
   - Commit `resume.md`, `resume.html`, and `resume.pdf`
   - Push to the appropriate branch

## 2. HTML Design Guidelines

### Scandinavian Design Principles
- **Minimalistic aesthetic** with clean, simple design
- **Generous white space** but compact for PDF
- **Subtle color palette**: grays (#f7fafc, #e2e8f0, #718096)
- **No flashy colors** - professional and elegant

### Typography
- **Font family**: Inter, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto
- **Font weights**: 300 for name, 400-500 for content
- **Letter spacing**: -1px for name, 1px for section titles
- **Line height**: 1.6 for body, 1.3-1.4 for content

### Layout Structure
- **Header**: Left-aligned with name, title, and contact info
- **Sections**: Bordered cards with subtle backgrounds (#f7fafc)
- **Experience**: Nested structure with company → role → bullets
- **Projects**: Cards with titles matching website exactly
- **Skills**: 2-column grid with categorized skills
- **Education & Languages**: Simple card layouts

### Color Scheme
- **Primary text**: #1a202c (dark gray)
- **Secondary text**: #4a5568 (medium gray)
- **Muted text**: #718096 (light gray)
- **Borders**: #e2e8f0 (very light gray)
- **Backgrounds**: #f7fafc (off-white)

### Spacing Guidelines
- **Page margins**: 0.5in for PDF optimization
- **Section margins**: 15px between sections
- **Section padding**: 12px internal padding
- **Item margins**: 8-12px between items
- **Compact design** to fit more content per page

## 3. PDF Conversion Guidelines

### File Optimization
- **Target file size**: Under 200KB for fast download
- **Page count**: Optimize for 2-3 pages maximum
- **Print-friendly**: Ensure good appearance when printed

### Page Break Management
- **Remove `page-break-inside: avoid`** to allow natural flow
- **Optimize margins**: 0.5in for maximum content space
- **Compact spacing**: Reduce margins and padding for PDF
- **Font sizes**: 8-9pt for print, 10-11pt for screen

### Print-Specific Styling
```css
@media print {
    body { font-size: 8pt; line-height: 1.2; }
    .section { margin-bottom: 10px; padding: 8px; }
    .experience-item { margin-bottom: 8px; padding: 6px; }
    .project-item { margin-bottom: 6px; padding: 5px; }
}
```

### Content Consistency
- **Project titles**: Must match website exactly for search functionality
- **Experience dates**: Keep current and accurate
- **Skills**: Update to reflect latest technologies
- **Links**: Ensure all portfolio links work correctly

### Quality Checks
- **No unnecessary page breaks** between related content
- **Consistent formatting** across all sections
- **Professional appearance** suitable for job applications
- **Fast loading** on GitHub Pages

## Files
```
resume/
├── resume.md            # Source (Markdown)
├── resume.html          # Built from markdown with Scandinavian design
├── resume.pdf           # Exported PDF (downloaded by the website)
├── auto_convert_simple.py  # Python script for HTML to PDF conversion
├── convert_resume.bat   # Windows batch file for conversion
└── CONVERT_TO_PDF.md    # Additional conversion notes
```

## Notes
- The website links to `resume/resume.pdf` for the download button
- Keep the PDF under ~200KB for fast download on GitHub Pages
- Always test the PDF locally before committing
- Maintain consistency between website projects and resume projects
