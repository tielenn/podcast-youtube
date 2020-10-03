export function isValid(value) {
    return value.length >= 10;
}

export function createModal(title, content) {
    const modal = document.createElement('div');
    modal.classList.add('modal');
    modal.insertAdjacentHTML('afterbegin', `
        <div class="modal-overlay">
            <div class="modal-window">
                <h1>${title}</h1>
                <div class="modal-content">${content}</div>
            </div>
        </div>
    `)
    document.body.appendChild(modal)

}
