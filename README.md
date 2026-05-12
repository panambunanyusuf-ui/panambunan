/* Fade In Animation */
.fade-in {
    animation: fadeIn 0.8s ease-out forwards;
    opacity: 0;
}

@keyframes fadeIn {
    from {
        opacity: 0;
        transform: translateY(20px);
    }
    to {
        opacity: 1;
        transform: translateY(0);
    }
}

.fade-in-delayed {
    animation: fadeIn 0.8s ease-out 0.3s forwards;
    opacity: 0;
}

/* Scale Animation */
.hover-scale {
    transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.hover-scale:hover {
    transform: scale(1.05);
    box-shadow: 0 10px 25px rgba(0, 0, 0, 0.2);
}

/* Float Animation */
.hover-float {
    transition: transform 0.3s ease;
    animation: float 3s ease-in-out infinite;
}

@keyframes float {
    0%, 100% {
        transform: translateY(0px);
    }
    50% {
        transform: translateY(-20px);
    }
}

.hover-float:hover {
    animation: none;
    transform: translateY(-10px);
}

/* Lift Animation */
.hover-lift {
    transition: all 0.3s cubic-bezier(0.34, 1.56, 0.64, 1);
}

.hover-lift:hover {
    transform: translateY(-15px);
    box-shadow: 0 20px 40px rgba(0, 0, 0, 0.2);
}

/* Pulse Animation */
.pulse {
    animation: pulse 2s infinite;
}

@keyframes pulse {
    0% {
        opacity: 1;
    }
    50% {
        opacity: 0.7;
    }
    100% {
        opacity: 1;
    }
}

/* Rotate Animation */
.rotate {
    animation: rotate 2s linear infinite;
}

@keyframes rotate {
    from {
        transform: rotate(0deg);
    }
    to {
        transform: rotate(360deg);
    }
}

/* Bounce Animation */
.bounce {
    animation: bounce 0.6s ease;
}

@keyframes bounce {
    0%, 100% {
        transform: translateY(0);
    }
    50% {
        transform: translateY(-10px);
    }
}

/* Slide In From Left */
.slide-in-left {
    animation: slideInLeft 0.6s ease-out forwards;
    opacity: 0;
}

@keyframes slideInLeft {
    from {
        opacity: 0;
        transform: translateX(-50px);
    }
    to {
        opacity: 1;
        transform: translateX(0);
    }
}

/* Slide In From Right */
.slide-in-right {
    animation: slideInRight 0.6s ease-out forwards;
    opacity: 0;
}

@keyframes slideInRight {
    from {
        opacity: 0;
        transform: translateX(50px);
    }
    to {
        opacity: 1;
        transform: translateX(0);
    }
}

/* Zoom In */
.zoom-in {
    animation: zoomIn 0.5s ease-out forwards;
    opacity: 0;
}

@keyframes zoomIn {
    from {
        opacity: 0;
        transform: scale(0.8);
    }
    to {
        opacity: 1;
        transform: scale(1);
    }
}

/* Stagger Animation for Lists */
.stagger-children > * {
    opacity: 0;
    animation: fadeIn 0.6s ease-out forwards;
}

.stagger-children > *:nth-child(1) {
    animation-delay: 0s;
}

.stagger-children > *:nth-child(2) {
    animation-delay: 0.1s;
}

.stagger-children > *:nth-child(3) {
    animation-delay: 0.2s;
}

.stagger-children > *:nth-child(n+4) {
    animation-delay: calc((var(--index, 0) - 3) * 0.1s);
}