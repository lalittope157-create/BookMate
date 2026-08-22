import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";

import { Document, Page, pdfjs } from "react-pdf";

import "react-pdf/dist/Page/TextLayer.css";
import "react-pdf/dist/Page/AnnotationLayer.css";

import "./ReadBook.css";


// PDF worker
pdfjs.GlobalWorkerOptions.workerSrc =
    `//unpkg.com/pdfjs-dist@${pdfjs.version}/build/pdf.worker.min.mjs`;


function ReadBook() {

    const { id } = useParams();
    const navigate = useNavigate();

    const [book, setBook] = useState(null);

    const [loading, setLoading] = useState(true);

    const [error, setError] = useState("");

    const [numPages, setNumPages] = useState(0);

    const [pageNumber, setPageNumber] = useState(1);

    const [scale, setScale] = useState(1);


    // ==========================================
    // LOAD BOOK
    // ==========================================

    useEffect(() => {

        axios
            .get(`http://127.0.0.1:8000/books/${id}/`)
            .then((response) => {

                console.log(
                    "BOOK DATA:",
                    response.data
                );

                console.log(
                    "PDF:",
                    response.data.pdf_url
                );

                setBook(response.data);

                setLoading(false);

            })
            .catch((error) => {

                console.error(
                    "BOOK ERROR:",
                    error
                );

                setError(
                    "Unable to load this book."
                );

                setLoading(false);

            });

    }, [id]);


    // ==========================================
    // PDF SUCCESS
    // ==========================================

    const onDocumentLoadSuccess = ({
        numPages
    }) => {

        console.log(
            "PDF PAGES:",
            numPages
        );

        setNumPages(numPages);

        setPageNumber(1);

    };


    // ==========================================
    // PREVIOUS
    // ==========================================

    const previousPage = () => {

        setPageNumber(
            (current) =>
                Math.max(current - 1, 1)
        );

    };


    // ==========================================
    // NEXT
    // ==========================================

    const nextPage = () => {

        setPageNumber(
            (current) =>
                Math.min(
                    current + 1,
                    numPages
                )
        );

    };


    // ==========================================
    // ZOOM OUT
    // ==========================================

    const zoomOut = () => {

        setScale(
            (current) =>
                Math.max(
                    current - 0.1,
                    0.6
                )
        );

    };


    // ==========================================
    // ZOOM IN
    // ==========================================

    const zoomIn = () => {

        setScale(
            (current) =>
                Math.min(
                    current + 0.1,
                    2
                )
        );

    };


    // ==========================================
    // LOADING
    // ==========================================

    if (loading) {

        return (

            <div className="reader-loading">

                <div className="reader-loader"></div>

                <h2>
                    Opening your book...
                </h2>

                <p>
                    Preparing your reading experience 📖
                </p>

            </div>

        );

    }


    // ==========================================
    // ERROR
    // ==========================================

    if (error) {

        return (

            <div className="reader-error">

                <div>
                    ⚠️
                </div>

                <h2>
                    {error}
                </h2>

                <button
                    onClick={() =>
                        navigate("/books")
                    }
                >
                    ← Back to Library
                </button>

            </div>

        );

    }


    // ==========================================
    // NO BOOK
    // ==========================================

    if (!book) {

        return (

            <div className="reader-error">

                <h2>
                    Book not found
                </h2>

                <button
                    onClick={() =>
                        navigate("/books")
                    }
                >
                    ← Back to Library
                </button>

            </div>

        );

    }


    // ==========================================
    // NO PDF
    // ==========================================

    if (!book.pdf_url) {

        return (

            <div className="reader-error">

                <div>
                    📕
                </div>

                <h2>
                    PDF Not Available
                </h2>

                <p>
                    This book does not have a PDF.
                </p>

                <button
                    onClick={() =>
                        navigate(
                            `/books/${book.id}`
                        )
                    }
                >
                    ← Back to Book
                </button>

            </div>

        );

    }


    // ==========================================
    // MAIN READER
    // ==========================================

    return (

        <div className="reader-page">


            {/* HEADER */}

            <header className="reader-header">

                <button
                    className="reader-back"
                    onClick={() =>
                        navigate(
                            `/books/${book.id}`
                        )
                    }
                >
                    ← Back
                </button>


                <div className="reader-title">

                    <h1>
                        📖 {book.title}
                    </h1>

                    <p>
                        {book.author}
                    </p>

                </div>


                <div className="reader-actions">

                    <a
                        href={book.pdf_url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="reader-button"
                    >
                        ↗ Open PDF
                    </a>


                    <a
                        href={book.pdf_url}
                        download
                        className="reader-button"
                    >
                        ⬇ Download
                    </a>

                </div>

            </header>


            {/* TOOLBAR */}

            <div className="reader-toolbar">

                <div className="page-controls">

                    <button
                        onClick={previousPage}
                        disabled={
                            pageNumber <= 1
                        }
                    >
                        ◀
                    </button>


                    <span>
                        Page{" "}
                        <strong>
                            {pageNumber}
                        </strong>
                        {" "}of{" "}
                        <strong>
                            {numPages}
                        </strong>
                    </span>


                    <button
                        onClick={nextPage}
                        disabled={
                            pageNumber >=
                            numPages
                        }
                    >
                        ▶
                    </button>

                </div>


                <div className="zoom-controls">

                    <button
                        onClick={zoomOut}
                    >
                        −
                    </button>

                    <span>
                        {Math.round(
                            scale * 100
                        )}%
                    </span>

                    <button
                        onClick={zoomIn}
                    >
                        +
                    </button>

                </div>

            </div>


            {/* PDF */}

            <main className="pdf-container">

                <Document
                    file={book.pdf_url}
                    onLoadSuccess={
                        onDocumentLoadSuccess
                    }
                    onLoadError={(error) => {

                        console.error(
                            "PDF ERROR:",
                            error
                        );

                        setError(
                            "Unable to open PDF."
                        );

                    }}

                    loading={

                        <div className="pdf-loading">

                            <div className="reader-loader"></div>

                            <p>
                                Loading PDF...
                            </p>

                        </div>

                    }
                >

                    <Page
                        pageNumber={pageNumber}
                        scale={scale}
                        renderTextLayer={true}
                        renderAnnotationLayer={true}
                    />

                </Document>

            </main>

        </div>

    );

}

export default ReadBook;