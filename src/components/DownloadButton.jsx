import React, { useRef, useState } from 'react';


function DownloadButton({ link, name }) {
    const imageUrl = link;
    const [copied, setCopied] = useState(false);

    const handleDownload = () => {
        const link = document.createElement("a");
        link.href = imageUrl;
        link.download = "test.png";
        link.setAttribute("download", name || "image.png");
        link.setAttribute("target", "_blank");
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
    };

    return (
        <button onClick={handleDownload} className="modal-placement-button-download-content-stickers">
            {copied ? "Downloaded" : "Download"}
        </button>
    );
}

export default DownloadButton