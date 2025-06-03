document.addEventListener("DOMContentLoaded", function() {
    // Make buttons animate on hover
    let buttons = document.querySelectorAll('.link-btn');
    buttons.forEach(button => {
        button.addEventListener("mouseover", function() {
            button.style.transform = "scale(1.05)";
        });
        button.addEventListener("mouseout", function() {
            button.style.transform = "scale(1)";
        });
    });
});



  window.onclick = function(event) {
        const modals = ['membershipForm', 'electionForm'];
        modals.forEach(id => {
            const modal = document.getElementById(id);
            if (event.target === modal) {
                modal.style.display = "none";
            }
        });
    };