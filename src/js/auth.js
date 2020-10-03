export function getAuthForm() {
    return `
        <form id="auth-form">
            <div class="form-container">
                <label for="uname"><b>Username</b></label>
                <input id="email" type="text" placeholder="Enter Username" name="uname" required>
                
                <label for="psw"><b>Password</b></label>
                <input id="password" type="password" placeholder="Enter Password" name="psw" required>
                    
                <button class="button-auth" type="submit">Login</button>
                <button type="button" class="cancel-btn">Cancel</button>
            </div>
          
        </form>
    `
}

export function logInWithEmailAndPassword(email, password) {
    const apiKey = 'AIzaSyDMk8-CV2gCviyVUUE8wDY4l5XkQydYvds'
    return fetch(`https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=${apiKey}`, {
        method: 'POST',
        body: JSON.stringify({
            email,
            password,
            returnSecureToken: true
        }),
        headers: {
            'Content-Type': 'application/json'
        }
    })
        .then(res => res.json())
        .then(data => data.idToken)
}