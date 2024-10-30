document.addEventListener("DOMContentLoaded", function() {
    const text = `"Always code as if the guy who ends up maintaining your code will be a violent psychopath who knows where you live." - Martin Golding`;
    const typingEffect = document.getElementById("typing-effect");
    let index = 0;

    function typeText() {
        if (index < text.length) {
            typingEffect.textContent += text.charAt(index);
            index++;
            setTimeout(typeText, 100);
        } else {
            typingEffect.classList.remove("cursor");
        }
    }

    typeText();
});
