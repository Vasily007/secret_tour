"use strict";

window.addEventListener('DOMContentLoaded', () => {
    // Tabs
    const tabsParent = document.querySelector(".tour__img-row");
    const tabs = document.querySelectorAll(".column__img");
    const imgContent = document.querySelector(".tour__img");

    function changeImg(img) {
        imgContent.src = img.src;
    }

    function hideTabContent() {
        tabs.forEach((tab) => {
            tab.classList.remove('column__img-active');
        });
    }

    function showTabContent(index) {
        tabs[index].classList.add('column__img-active');
    }

    hideTabContent();
    
    tabsParent.addEventListener('click', (event) => {
        const target = event.target;

        if (target && target.classList.contains('column__img')) {
            tabs.forEach((tab, index) => {
                if (target == tab) {
                    hideTabContent();
                    showTabContent(index);
                    changeImg(tab);
                }
            });
        }
    });
});