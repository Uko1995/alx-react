 export function getFullYear() {
    return new Date().getFullYear();
}

export function getFooterCopy(isIndex) {
    return isIndex ? (
        <p>Holberton School</p>
    ) : (
        <p>Holberton School main dashboard</p>
    );
}