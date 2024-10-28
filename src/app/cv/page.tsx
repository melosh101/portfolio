"use client"
import {Worker, Viewer} from "@react-pdf-viewer/core";
// Import the styles
import '@react-pdf-viewer/core/lib/styles/index.css';

const Cv = () => {
    return (
        <Worker workerUrl="https://unpkg.com/pdfjs-dist@3.4.120/build/pdf.worker.min.js">
            <Viewer fileUrl={"/CV.pdf"}/>
        </Worker>
    )
}

export default Cv;