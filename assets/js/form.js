const apiURL = "https://trimx-singapore-development.onrender.com/api/dre";

function bookAt99ButtonSubmit() {
    console.log("hi");
    const phone = document.getElementById("phone").value;
    const email = document.getElementById("email").value;
    const name = document.getElementById("name").value;

    fetch(apiURL, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ phone: phone, email: email, name: name }),
    })
    .then((response) => {
        if (response.status === 200) {
            console.log("success");
            // Redirect to the specified URL on success
            window.location.href = "thankyou.php";
        } else {
            response.json().then((data) => {
                console.log("error");
            });
        }
    })
    .catch((error) => {
        console.log(error.message);
    });
}
