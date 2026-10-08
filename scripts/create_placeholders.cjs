const fs = require('fs');
const path = require('path');

const publicDir = path.join(__dirname, '..', 'public');

// 1. Create valid resume.pdf placeholder
const pdf = `%PDF-1.4
1 0 obj
<<
  /Type /Catalog
  /Pages 2 0 R
>>
endobj
2 0 obj
<<
  /Type /Pages
  /Kids [3 0 R]
  /Count 1
>>
endobj
3 0 obj
<<
  /Type /Page
  /Parent 2 0 R
  /MediaBox [0 0 612 792]
  /Resources <<
    /Font <<
      /F1 <<
        /Type /Font
        /Subtype /Type1
        /BaseFont /Helvetica-Bold
      >>
      /F2 <<
        /Type /Font
        /Subtype /Type1
        /BaseFont /Helvetica
      >>
    >>
  >>
  /Contents 4 0 R
>>
endobj
4 0 obj
<<
  /Length 285
>>
stream
BT
/F1 22 Tf
50 720 Td
(Nived Krishna - Software Engineer) Tj
/F2 13 Tf
0 -30 Td
(Frontend Engineer | React & TypeScript | ~4 Years Experience) Tj
0 -25 Td
(Enterprise & Maritime Software Specialization) Tj
/F2 11 Tf
0 -40 Td
([RESUME PLACEHOLDER - Replace public/resume.pdf with your actual PDF]) Tj
ET
endstream
endobj
xref
0 5
0000000000 65535 f 
0000000009 00000 n 
0000000062 00000 n 
0000000121 00000 n 
0000000366 00000 n 
trailer
<<
  /Size 5
  /Root 1 0 R
>>
startxref
702
%%EOF`;

fs.writeFileSync(path.join(publicDir, 'resume.pdf'), pdf);
console.log('Generated public/resume.pdf');

// 2. Create SVG OpenGraph preview card
const ogSvg = `<svg xmlns="http://www.w3.org/2000/svg" width="1200" height="630" viewBox="0 0 1200 630" fill="none">
  <rect width="1200" height="630" fill="#F8F6F0"/>
  <!-- Paper dot grid -->
  <pattern id="dots" width="30" height="30" patternUnits="userSpaceOnUse">
    <circle cx="2" cy="2" r="1.5" fill="#222222" fill-opacity="0.12"/>
  </pattern>
  <rect width="1200" height="630" fill="url(#dots)"/>
  
  <!-- Sketch card border -->
  <rect x="60" y="60" width="1080" height="510" rx="12" fill="#FFFFFF" stroke="#222222" stroke-width="4"/>
  
  <!-- Corner accents -->
  <circle cx="80" cy="80" r="4" fill="#D9532F"/>
  <circle cx="95" cy="80" r="4" fill="#FEF08A" stroke="#222222" stroke-width="1.5"/>
  <circle cx="110" cy="80" r="4" fill="#A7F3D0" stroke="#222222" stroke-width="1.5"/>
  
  <!-- Header / Badge -->
  <rect x="160" y="140" width="280" height="36" rx="6" fill="#FEF08A" stroke="#222222" stroke-width="2"/>
  <text x="175" y="164" font-family="'Plus Jakarta Sans', monospace, sans-serif" font-size="16" font-weight="bold" fill="#171717" letter-spacing="2">
    PORTFOLIO &amp; CASE STUDIES
  </text>
  
  <!-- Main Name Title -->
  <text x="160" y="260" font-family="'Plus Jakarta Sans', system-ui, sans-serif" font-size="76" font-weight="900" fill="#171717" letter-spacing="-1">
    NIVED KRISHNA
  </text>
  
  <!-- Role -->
  <text x="160" y="325" font-family="'Plus Jakarta Sans', system-ui, sans-serif" font-size="34" font-weight="700" fill="#D9532F" letter-spacing="1">
    SOFTWARE ENGINEER &middot; FRONTEND
  </text>
  
  <!-- Hand-drawn underline below role -->
  <path d="M 160 345 C 340 340, 600 348, 800 342" stroke="#222222" stroke-width="3.5" stroke-linecap="round"/>
  
  <!-- Tech badges -->
  <text x="160" y="420" font-family="'Plus Jakarta Sans', monospace, sans-serif" font-size="24" font-weight="600" fill="#5F5F5F">
    React &bull; TypeScript &bull; JavaScript &bull; UI Engineering &bull; ~4 Yrs Exp
  </text>
  
  <text x="160" y="475" font-family="'Plus Jakarta Sans', system-ui, sans-serif" font-size="20" fill="#171717">
    Flagship: ShipPro PMS &middot; Maritime Fleet Planned Maintenance System
  </text>
  
  <!-- Right decorative doodle arrow & star -->
  <path d="M 980 200 C 980 230, 995 245, 1030 250 C 995 255, 980 270, 980 300 C 980 270, 965 255, 930 250 C 965 245, 980 230, 980 200 Z" fill="#D9532F"/>
  <path d="M 920 450 C 970 420, 1020 380, 1050 330" stroke="#222222" stroke-width="3" stroke-linecap="round"/>
  <path d="M 1030 320 C 1045 325, 1055 330, 1050 330 C 1050 345, 1045 360, 1040 370" stroke="#222222" stroke-width="3" stroke-linecap="round"/>
</svg>`;

fs.writeFileSync(path.join(publicDir, 'og-preview.svg'), ogSvg);
console.log('Generated public/og-preview.svg');
