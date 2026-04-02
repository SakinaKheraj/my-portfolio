import { WindowControlls } from '#components';
import WindowWrapper from '#hoc/WindowWrapper'
import useMobile from '#hooks/useMobile';
import { Download } from 'lucide-react';
import React from 'react'
import { Document, Page, pdfjs } from 'react-pdf';

import 'react-pdf/dist/Page/AnnotationLayer.css';
import 'react-pdf/dist/Page/TextLayer.css';
pdfjs.GlobalWorkerOptions.workerSrc = new URL(
    'pdfjs-dist/build/pdf.worker.min.mjs',
    import.meta.url,
).toString();

// ── Mobile: resume download + inline preview ──────────────────────────────
const ResumeMobile = () => {
    return (
        <div className="px-4 pt-4 pb-8 space-y-4">
            {/* Download CTA */}
            <a
                href="/files/resume.pdf"
                download
                className="flex items-center justify-between px-5 py-4 bg-gray-900 text-white rounded-2xl active:opacity-80 touch-manipulation"
            >
                <div className="flex items-center gap-3">
                    <div className="size-10 bg-white/10 rounded-xl flex items-center justify-center">
                        <Download size={20} className="text-white" />
                    </div>
                    <div>
                        <p className="text-sm font-bold">Download Resume</p>
                        <p className="text-xs text-gray-400">Resume.pdf</p>
                    </div>
                </div>
            </a>

            {/* Inline PDF */}
            <div className="rounded-2xl overflow-hidden border border-gray-100 shadow-sm">
                <div className="bg-gray-50 px-4 py-2 border-b border-gray-100 flex items-center justify-between">
                    <span className="text-xs font-medium text-gray-500">Resume.pdf</span>
                    <span className="text-xs text-gray-400">Page 1</span>
                </div>
                <div className="overflow-x-auto bg-white p-2">
                    <Document file="/files/resume.pdf">
                        <Page
                            pageNumber={1}
                            width={Math.min(window.innerWidth - 48, 600)}
                            renderTextLayer
                            renderAnnotationLayer
                        />
                    </Document>
                </div>
            </div>
        </div>
    );
};

// ── Desktop: original unchanged ───────────────────────────────────────────
const ResumeDesktop = () => {
    return (
        <>
            <div id='window-header'>
                <WindowControlls target="resume" />
                <h2>Resume.pdf</h2>

                <a href="/files/resume.pdf"
                    download className='cursor-pointer'
                    title='Download Resume'>
                    <Download className='icon' />
                </a>
            </div>
            <Document file="/files/resume.pdf">
                <Page
                    pageNumber={1}
                    renderTextLayer
                    renderAnnotationLayer
                />
            </Document>
        </>
    );
};

const Resume = (props) => {
    const isMobile = useMobile();
    return isMobile ? <ResumeMobile {...props} /> : <ResumeDesktop {...props} />;
};

const ResumeWindow = WindowWrapper(Resume, "resume");
export default ResumeWindow;