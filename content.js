function captureArea() {
    chrome.storage.sync.get(['x', 'y', 'width', 'height'], (data) => {
        const { x, y, width, height } = data;

        chrome.tabs.captureVisibleTab(null, { format: 'png' }, (dataUrl) => {
            const img = new Image();
            img.onload = () => {
                const canvas = document.createElement('canvas');
                canvas.width = width;
                canvas.height = height;
                const ctx = canvas.getContext('2d');
                ctx.drawImage(img, -x, -y);
                const croppedDataUrl = canvas.toDataURL('image/png');

                // You can now use croppedDataUrl as needed, such as downloading it
                const link = document.createElement('a');
                link.href = croppedDataUrl;
                link.download = 'capture.png';
                link.click();
            };
            img.src = dataUrl;
        });
    });
}

captureArea();