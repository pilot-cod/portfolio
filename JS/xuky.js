// File: JS/xuly.js

document.addEventListener("DOMContentLoaded", function() {
    var toggleButton = document.getElementById("personal-info-toggle");
    var form = document.getElementById("personal-info-form");

    toggleButton.addEventListener("click", function() {
        if (form.style.display === "none") {
            form.style.display = "block";
        } else {
            form.style.display = "none";
        }
    });
});

document.addEventListener("DOMContentLoaded", function() {
    var toggleButton = document.getElementById("personal-info-toggle");
    var form = document.getElementById("personal-info-form");
    var closeBtn = document.getElementById("close-form"); // Lấy thẻ button với id là "close-form"

    toggleButton.addEventListener("click", function() {
        form.style.display = "block"; // Hiển thị form
    });

    closeBtn.addEventListener("click", function() {
        form.style.display = "none"; // Ẩn form khi nút "Close" được nhấp
    });
});

