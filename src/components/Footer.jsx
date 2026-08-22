import "./Footer.css";

function Footer() {
    return (
        <footer className="footer">

            <div className="footer-logo">
                📚 BookMate
            </div>

            <p>
                Discover. Read. Share.
            </p>

            <div className="footer-links">
                <a href="/">Home</a>
                <a href="/books">Books</a>
                <a href="/library">Library</a>
                <a href="/readers">Readers</a>
            </div>

            <div className="footer-line"></div>

            <p className="copyright">
                © 2026 BookMate. All Rights Reserved.
            </p>

        </footer>
    );
}

export default Footer;