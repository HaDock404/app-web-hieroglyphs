import { useState } from "react";

function CopyButton({ text }) {
    const [copied, setCopied] = useState(false);

    const handleCopy = async () => {
        try {
        await navigator.clipboard.writeText(text);
        setCopied(true);
        setTimeout(() => setCopied(false), 2000); // Réinitialise après 2s
        } catch (err) {
        console.error("Erreur lors de la copie :", err);
        }
    };

    return (
        <button onClick={handleCopy} className="modal-placement-button-copy-content">
            {copied ? "Copied" : "Copy"}
        </button>
    );
}

export default CopyButton