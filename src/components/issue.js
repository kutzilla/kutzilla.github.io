import React from "react"

const Issue = () => {
    return (
        <div
        style={{
          fontStyle: `italic`,
        }}
        >
            <p>Fehler gefunden? Dann zögere nicht mich darauf <a href="https://github.com/kutzilla/kutzilla.github.io/issues/new">hinzuweisen</a>!<br />
            Der Quellcode und die Beiträge dieses Blogs sind Open Source auf <a href="https://github.com/kutzilla/kutzilla.github.io/tree/develop/content/blog">GitHub</a> verfügbar.</p>
        </div>
    )
}

export default Issue