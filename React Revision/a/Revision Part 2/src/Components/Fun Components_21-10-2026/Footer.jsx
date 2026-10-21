function Footer() {
    let year = new Date().getFullYear()
    return (
        <footer>
            <p>© {year} TeamSync. All rights reserved.</p>
        </footer>
    )
}

export default Footer