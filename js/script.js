gsap.registerPlugin(ScrollTrigger);

document.addEventListener("DOMContentLoaded", () => {


    gsap.from(".hero__title", {
        y: 80,
        opacity: 0,
        duration: 1.5,
        ease: "power2.out"
    });

    gsap.from(".hero__image", {
        y: 60,
        opacity: 0,
        duration: 1.5,
        delay: 0.3,
        ease: "power2.out"
    });

    gsap.from(".hero__question-block", {
        y: 30,
        opacity: 0,
        duration: 1,
        delay: 0.8,
        ease: "power2.out"
    });



    const burger = document.querySelector(".burger");
    const nav = document.querySelector(".header__nav");
    const links = document.querySelectorAll(".header__nav a");

    burger.addEventListener("click", () => {
        burger.classList.toggle("active");
        nav.classList.toggle("active");

        if (nav.classList.contains("active")) {
            gsap.fromTo(".header__list li",
                {
                    y: 80,
                    opacity: 0
                },
                {
                    y: 0,
                    opacity: 1,
                    duration: 0.8,
                    stagger: 0.08,
                    ease: "power3.out"
                }
            );
        }
    });

    links.forEach(link => {
        link.addEventListener("click", (e) => {

            const target = link.getAttribute("href");

            if (target === "#hero" && window.scrollY < 100) {
                nav.classList.remove("active");
                burger.classList.remove("active");
                return;
            }

            e.preventDefault();

            nav.classList.remove("active");
            burger.classList.remove("active");

            setTimeout(() => {
                document.querySelector(target).scrollIntoView({
                    behavior: "smooth"
                });
            }, 300);

        });
    });








    const bottles = document.querySelector(".bottles-hover");
    const bottlesVideo = document.querySelector(".bottles-video");

    if (bottles && bottlesVideo) {
        bottlesVideo.pause();

        bottles.addEventListener("mouseenter", () => {
            bottlesVideo.currentTime = 0;
            bottlesVideo.play();
        });

        bottles.addEventListener("mouseleave", () => {
            bottlesVideo.pause();
            bottlesVideo.currentTime = 0;
        });
    }


    ScrollTrigger.create({
        trigger: ".bottles-video",
        start: "top 75%",
        end: "bottom 25%",
        onEnter: () => {
            bottlesVideo.currentTime = 0;
            bottlesVideo.play();
        },
        onLeave: () => {
            bottlesVideo.pause();
            bottlesVideo.currentTime = 0;
        },
        onEnterBack: () => {
            bottlesVideo.currentTime = 0;
            bottlesVideo.play();
        },
        onLeaveBack: () => {
            bottlesVideo.pause();
            bottlesVideo.currentTime = 0;
        },
    });




});


const galleryContainer = document.querySelector(".gallery");

if (galleryContainer) {
    const galleryItems = galleryContainer.querySelectorAll(".gallery-item");
    const indicator = document.querySelector(".indicator");

    const isMobile = () => window.innerWidth <= 630;

    const getDefaultFlex = () => {
        return isMobile() ? "0 1 10px" : "0 1 20px";
    };

    const getHoverFlex = () => {
        return isMobile() ? "1 1 220px" : "1 1 400px";
    };

    const updateGalleryItems = (activeItem) => {
        galleryItems.forEach((item) => {
            item.style.flex = item === activeItem ? getHoverFlex() : getDefaultFlex();
        });
    };

    updateGalleryItems(galleryItems[0]);

    galleryItems.forEach((item) => {
        item.addEventListener("mouseenter", () => {
            if (isMobile()) return;
            updateGalleryItems(item);
        });

        item.addEventListener("click", () => {
            if (!isMobile()) return;
            updateGalleryItems(item);
        });
    });

    galleryContainer.addEventListener("pointermove", (e) => {
        const rect = galleryContainer.getBoundingClientRect();

        if (!isMobile()) {
            if (!indicator) return;

            indicator.style.left = `${e.clientX - rect.left}px`;
            return;
        }

        const x = e.clientX - rect.left;
        const index = Math.floor((x / rect.width) * galleryItems.length);

        const activeIndex = Math.max(0, Math.min(index, galleryItems.length - 1));
        updateGalleryItems(galleryItems[activeIndex]);
    });

    window.addEventListener("resize", () => {
        updateGalleryItems(galleryItems[0]);
    });
}


gsap.registerPlugin(ScrollTrigger);

gsap.fromTo(
    ".quote-title",
    {
        opacity: 0,
        y: 80,
    },
    {
        opacity: 1,
        y: 0,
        duration: 1,
        ease: "power3.out",
        scrollTrigger: {
            trigger: ".quote-section",
            start: "top 70%",
            toggleActions: "play none none reverse",
        },
    }
);

gsap.fromTo(
    ".quote-cig-left",
    {
        opacity: 0,
        x: -300,
    },
    {
        opacity: 1,
        x: 0,
        duration: 1.2,
        ease: "power3.out",
        scrollTrigger: {
            trigger: ".quote-section",
            start: "top 70%",
            toggleActions: "play none none reverse",
        },
    }
);

gsap.fromTo(
    ".quote-cig-right",
    {
        opacity: 0,
        x: 300,
    },
    {
        opacity: 1,
        x: 0,
        duration: 1.2,
        ease: "power3.out",
        scrollTrigger: {
            trigger: ".quote-section",
            start: "top 70%",
            toggleActions: "play none none reverse",
        },
    }
);

gsap.from(".footer-bottle-left", {
    x: -500,
    rotate: -20,
    opacity: 0,
    duration: 1.6,
    ease: "power4.out",
    scrollTrigger: {
        trigger: ".footer-cta",
        start: "top 80%"
    }
});

gsap.from(".footer-bottle-right", {
    x: 500,
    rotate: 20,
    opacity: 0,
    duration: 1.6,
    ease: "power4.out",
    scrollTrigger: {
        trigger: ".footer-cta",
        start: "top 80%"
    }
});


