
function formatText(text) {
    text = text.replace(/\n/g, ' ').replace(/\./g, '.').replace(/\s+/g, ' ').trim();
    text = '<p>' + text + '</p>';
    return text;
}

export default formatText;