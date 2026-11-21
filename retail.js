const retailTemplateTabs = document.querySelectorAll(".dynamic-tabs .tab-btn");

retailTemplateTabs.forEach((tab) => {
    tab.addEventListener("click", () => {
        retailTemplateTabs.forEach((item) => item.classList.remove("active"));
        tab.classList.add("active");
    });
});
