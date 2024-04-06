document.addEventListener('DOMContentLoaded', function() {
    // JavaScript code here
    document.getElementById('loginForm').addEventListener('submit', function(event) {
        event.preventDefault(); // Prevent default form submission behavior

        // Redirect to the specified URL
        window.location.href = 'https://brs-bookmaniac-login.auth.us-east-1.amazoncognito.com/login?client_id=5anmt25o8cqml90jui8s52k27t&response_type=token&scope=email+openid+phone&redirect_uri=https%3A%2F%2Fbookmaniac-bucket.s3.amazonaws.com%2Fview_book.html';
    
    });
    

});
