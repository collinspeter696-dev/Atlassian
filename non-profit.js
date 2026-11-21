const nonprofitToolTabs = document.querySelectorAll(".tools-tabs .tab-btn");
const nonprofitToolsFrame = document.querySelector(".tools-frame");

nonprofitToolTabs.forEach((tab) => {
    tab.addEventListener("click", () => {
        nonprofitToolTabs.forEach((item) => item.classList.remove("active"));
        tab.classList.add("active");
    });
});

function resizeToolsFrame() {
    if (!nonprofitToolsFrame || !nonprofitToolsFrame.contentWindow) {
        return;
    }

    try {
        const frameDocument = nonprofitToolsFrame.contentDocument || nonprofitToolsFrame.contentWindow.document;
        const frameHeight = Math.max(
            frameDocument.body.scrollHeight,
            frameDocument.documentElement.scrollHeight
        );

        nonprofitToolsFrame.style.height = `${frameHeight + 8}px`;
    } catch (error) {
        nonprofitToolsFrame.style.height = "";
    }
}

if (nonprofitToolsFrame) {
    nonprofitToolsFrame.addEventListener("load", () => {
        resizeToolsFrame();
        window.setTimeout(resizeToolsFrame, 250);
    });
    window.addEventListener("resize", resizeToolsFrame);
}
