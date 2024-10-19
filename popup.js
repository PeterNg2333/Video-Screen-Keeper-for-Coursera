document.getElementById('save').addEventListener('click', () => {
    const x = document.getElementById('x').value;
    const y = document.getElementById('y').value;
    const width = document.getElementById('width').value;
    const height = document.getElementById('height').value;

    chrome.storage.sync.set({ x, y, width, height }, () => {
        alert('Capture area saved!');
    });
});