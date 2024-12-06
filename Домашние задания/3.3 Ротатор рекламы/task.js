document.addEventListener("DOMContentLoaded", () => {
    const rotators = document.querySelectorAll(".rotator");

    rotators.forEach(rotator => {
        const cases = rotator.querySelectorAll(".rotator__case");
        let activeIndex = 0;

        const rotate = () => {
            cases[activeIndex].classList.remove("rotator__case_active");

            activeIndex = (activeIndex + 1) % cases.length;

            const nextCase = cases[activeIndex];
            nextCase.classList.add("rotator__case_active");

            nextCase.style.color = nextCase.dataset.color;

            setTimeout(rotate, nextCase.dataset.speed || 1000);
        };

        cases[activeIndex].style.color = cases[activeIndex].dataset.color;
        setTimeout(rotate, cases[activeIndex].dataset.speed || 1000);
    });
});
