const View = {
    render({minutes, seconds}) {
        document.body.innerHTML = `
        <p>Next post in:</p>
        <span>${minutes}:${seconds}</span>
        `;
    }
}

export { View }