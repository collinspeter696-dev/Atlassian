const telecomIndustryTabs = document.querySelectorAll(".industry-tabs .tab-btn");

telecomIndustryTabs.forEach((tab) => {
    tab.addEventListener("click", () => {
        telecomIndustryTabs.forEach((item) => item.classList.remove("active"));
        tab.classList.add("active");
    });
});
