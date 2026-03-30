import fs from 'fs'
import path from 'path'

const root = process.cwd()
const srcPagesDir = path.join(root, 'src', 'pages')

function walkDir(dir, callback) {
  fs.readdirSync(dir).forEach(f => {
    let dirPath = path.join(dir, f)
    let isDirectory = fs.statSync(dirPath).isDirectory()
    isDirectory ? walkDir(dirPath, callback) : callback(dirPath)
  })
}

const files = []
walkDir(srcPagesDir, (filePath) => {
  if (filePath.endsWith('.jsx')) {
    files.push(filePath)
  }
})

const issues = []
const warnings = []

for (const abs of files) {
  const relFile = path.relative(root, abs).replace(/\\/g, '/')
  const content = fs.readFileSync(abs, 'utf8')

  const h1Matches = [...content.matchAll(/<h1[\s>]/g)]
  const h2Matches = [...content.matchAll(/<h2[\s>]/g)]
  const h3Matches = [...content.matchAll(/<h3[\s>]/g)]

  const h1Count = h1Matches.length
  
  if (h1Count === 0) {
    if (!relFile.includes('blog/BlogPage.jsx') && !relFile.includes('NotFoundPage.jsx')) {
      warnings.push(`${relFile}: Missing <h1> tag`)
    }
  } else if (h1Count > 1) {
    issues.push(`${relFile}: Multiple <h1> tags found (${h1Count})`)
  }

  const firstH1 = h1Count > 0 ? h1Matches[0].index : Infinity
  const firstH2 = h2Matches.length > 0 ? h2Matches[0].index : Infinity
  const firstH3 = h3Matches.length > 0 ? h3Matches[0].index : Infinity

  if (firstH2 < firstH1 && firstH1 !== Infinity && h1Count > 0) {
    warnings.push(`${relFile}: <h2> appears before <h1>`)
  }
  if (firstH3 < firstH2 && firstH2 !== Infinity && h2Matches.length > 0) {
    warnings.push(`${relFile}: <h3> appears before <h2>`)
  }
}

const report = {
  generatedAt: new Date().toISOString(),
  pagesChecked: files.length,
  issuesCount: issues.length,
  warningsCount: warnings.length,
  issues,
  warnings
}

const reportPath = path.join(root, 'seo-heading-audit-report.json')
fs.writeFileSync(reportPath, JSON.stringify(report, null, 2), 'utf8')

console.log('Heading audit complete')
console.log(`Pages checked: ${report.pagesChecked}`)
console.log(`Issues: ${report.issuesCount}`)
console.log(`Warnings: ${report.warningsCount}`)

if (issues.length > 0) {
  console.log('\nIssues:')
  issues.forEach(i => console.log(`- ${i}`))
}
if (warnings.length > 0) {
  console.log('\nWarnings:')
  warnings.forEach(w => console.log(`- ${w}`))
}
