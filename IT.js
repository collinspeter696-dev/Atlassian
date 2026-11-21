const itSolutionTabs = document.querySelectorAll(".solutions-tabs .tab-btn");

itSolutionTabs.forEach((tab) => {
    tab.addEventListener("click", () => {
        itSolutionTabs.forEach((item) => item.classList.remove("active"));
        tab.classList.add("active");
    });
});
