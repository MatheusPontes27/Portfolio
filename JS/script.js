

function copyEmail() {
    const email= "matheusemmanuel71@gmail.com";
    navigator.clipboard.writeText(email).then(() => {
        alert("Email copied to clipboard!");
    }).catch(err =>{
        console.error("Failed to copy email:", err);
    });
}