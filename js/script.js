function formatText() {
    let text = document.getElementById("inputText").value;

    const processedText = text
        .replace(/\d+\n\d{2}:\d{2}:\d{2}\.\d{3} --> \d{2}:\d{2}:\d{2}\.\d{3}\n/g, "")
        .replace(/\d+\n/g, "")
        .replace(/\d{2}:\d{2}:\d{2}\.\d{3}\n/g, "")
        .replace(/\n\s*\n/g, "\n\n");

    const blob = new Blob([processedText], { type: 'application/vnd.openxmlformats-officedocument.wordprocessingml.document' });
    const fileName = 'transcricao.docx';

    const downloadButton = document.createElement('button');
    downloadButton.innerText = 'Baixar Transcrição';
    downloadButton.onclick = function() {
        saveAs(blob, fileName);
        alert('Transcrição pronta para download!');
    };

    const resultDiv = document.getElementById("result");
    resultDiv.innerHTML = "";
    resultDiv.appendChild(downloadButton);
}