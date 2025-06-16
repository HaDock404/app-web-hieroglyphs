import '../styles/main_stickers.css'

import { useState } from 'react';

function SocialCopyButton({link}) {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(link).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 1000);
    });
  };

  return (
    <div>
      <button className='social-button-copy' onClick={handleCopy}>
        
      </button>
      {copied && <div className="copied-message">Copied</div>}
    </div>
  );
}

export default SocialCopyButton;
