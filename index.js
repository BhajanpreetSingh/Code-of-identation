document.addEventListener('DOMContentLoaded', function() {
    const copyButton = document.querySelector('.copy-button');
    const lockButton = document.querySelector('.lock-button');
    const codeContainer = document.querySelector('.code-container');

    copyButton.addEventListener('click', function() {
        const code = codeContainer.innerText;
        copyToClipboard(code);
    });

    lockButton.addEventListener('click', function() {
        codeContainer.classList.toggle('locked');
        lockButton.textContent = codeContainer.classList.contains('locked') ? 'Unlock' : 'Lock';
    });

    function copyToClipboard(text) {
        const textArea = document.createElement('textarea');
        textArea.value = text;
        document.body.appendChild(textArea);
        textArea.select();
        document.execCommand('copy');
        document.body.removeChild(textArea);
    }
});
