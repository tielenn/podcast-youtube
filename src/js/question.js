export class Question {
    static create(question) {
        return fetch('https://podcast2-fa69e.firebaseio.com/mishaquestion.json', {
            method: 'POST',
            body: JSON.stringify(question),
            headers: {
                'Content-Type': 'application/json'
            }
        })
            .then(response => response.json())
            .then(data => console.log(data))
    }
}