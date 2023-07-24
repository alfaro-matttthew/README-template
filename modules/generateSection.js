function generateSection(title, content) {
    if(!content) {
        return '';
    }
    else {
        return `
## ${title}

---

${content}
`
    }
}

module.exports = generateSection