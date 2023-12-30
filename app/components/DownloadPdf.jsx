import React from 'react';

import { IconArrowBarToDown } from "@tabler/icons";

function DownloadPDF() {
    const pdfUrl = '/pdf/david_onofre_flutter.pdf'; // Ruta relativa al archivo PDF en la carpeta "public"

    const handleDownload = () => {
        // Crea un enlace temporal y haz clic en él para iniciar la descarga del PDF.
        const a = document.createElement('a');
        a.href = pdfUrl;
        a.download = 'david_onofre_cv.pdf';
        document.body.appendChild(a);
        a.click();
        document.body.removeChild(a);
    };

    return (
        <div>
            <button rel="noreferrer" className="bg-[var(--bg-buttons)] text-[var(--text-buttons)] rounded flex items-center gap-2 justify-center h-16 w-56 hover:scale-110" onClick={handleDownload}><IconArrowBarToDown className="h-6 w-6" />
                Descargar CV </button>
        </div>
    );
}

export default DownloadPDF;





