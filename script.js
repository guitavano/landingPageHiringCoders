const form = document.getElementById('form-dados')

form.addEventListener("submit", (e) => {
    e.preventDefault()
    let nome = document.getElementById('nome').value
    let email = document.getElementById('email').value
    let data = {
        nome,
        email
    }

    let convertData = JSON.stringify(data)

    localStorage.setItem('lead', convertData)

    document.getElementById('nome').value = ""
    document.getElementById('email').value = ""
})

//JQuery para efeito deslizante no anchor
var page = $("html, body");
var animationDuration = 1000;
$(".anchor").click(function () {
    page.animate({
        scrollTop: $($.attr(this, 'href')).offset().top
    }, animationDuration);
    return false;
});
