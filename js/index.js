document.getElementById('btn-submit').addEventListener('click', function(){

    // const button = document.getElementById()

    const email = document.getElementById('user-email');
    const textEmail = email.value;
    // console.log(textEmail)
    if(!textEmail){
        alert('Email must be provide');
        return;
    }
    if(!textEmail.includes('@') || !textEmail.endsWith('.com')){
        alert('Invalid : try Again');
        return;
    }
    
    const password = document.getElementById('user-password');
    const textPassword = password.value;
    
    if(textPassword.length < 8){
        alert('Password must be at least 8 characters long');
        return;
        
    }
    
    location.href = 'index2.html';
})



