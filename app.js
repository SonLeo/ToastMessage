function showSuccessToast() {
    toast({
        title: 'Success',
        message: 'Your request has been sent successfully',
        type: 'success',
        duration: 3000
    });
}

function showInfoToast() {
    toast({
        title: 'Info',
        message: 'This is an info toast',
        type: 'info',
        duration: 3000
    });
}

function showWarningToast() {
    toast({
        title: 'Warning',
        message: 'This is a warning toast',
        type: 'warning',
        duration: 3000
    });
}

function showErrorToast() {
    toast({
        title: 'Error',
        message: 'Something went wrong',
        type: 'error',
        duration: 3000
    })
}

// Toast functions
function toast({ title = "", message = "", type = "info", duration = 3000 }) {
    const main = document.getElementById("toast-container");
    if (main) {
        const toast = document.createElement("div");
        const delay = (duration / 1000).toFixed(2);
        const timeOut = 1;
        const autoRemoveTime = duration + timeOut * 1000;
        const icons = {
            info: "fas fa-info-circle",
            success: "fas fa-check-circle",
            warning: "fas fa-exclamation-triangle",
            error: "fas fa-times-circle"
        }
        const icon = icons[type];

        toast.classList.add("toast", `toast--${type}`);
        toast.style.animation = `slideInLeft 1s ease, fadeOut ${timeOut}s linear ${delay}s forwards`;
        toast.innerHTML = `
            <div class="toast__icon">
                <i class="${icon}"></i>
            </div>
            <div class="toast__body">
                <h3 class="toast__title">${title}</h3>
                <p class="toast__message">${message}</p>
            </div>
            <div class="toast__close">
                <i class="fas fa-times"></i>
            </div>
        `;
        main.appendChild(toast);

        // Auto remove toast
        const autoRemoveId = setTimeout(function() {
            main.removeChild(toast);
        }, autoRemoveTime);

        // Remove toast when user clicks
        toast.onclick = function(e) {
            if (e.target.closest(".toast__close")) {
                main.removeChild(toast);
                clearTimeout(autoRemoveId);
            }
        }
    }
}