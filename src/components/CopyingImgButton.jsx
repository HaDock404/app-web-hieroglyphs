import React, { useRef, useState } from 'react';


function CopyingImgButton({ link, name }) {
    const imageUrl = link;
    const [copied, setCopied] = useState(false);

    const handleCopy = async () => {
    try {
      const response = await fetch(imageUrl);
      const blob = await response.blob();
      await navigator.clipboard.write([
        new ClipboardItem({ [blob.type]: blob })
        
      ]);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (error) {
      alert("Error:" + error.message);
    }
  };

    return (
        <button onClick={handleCopy} className="modal-placement-button-copying-img-content-stickers">
            {copied ? "Copied" : "Copy"}
        </button>
    );
}

export default CopyingImgButton