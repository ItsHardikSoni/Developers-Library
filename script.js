// Script for Navigation Toggle
document.querySelector('.menu-toggle').addEventListener('click', () => {
    document.querySelector('nav').classList.toggle('open');
});

// Script for Next button and Previous Button
document.addEventListener('DOMContentLoaded', function () {
    const prevButton = document.getElementById('prevButton');
    const nextButton = document.getElementById('nextButton');

    // Array of page names
    const pages = ['C-ch1.html', 'C-ch1.1.html', 'C-ch1.2.html', 'C-ch1.3.html', 'C-ch1.4.html', 'C-ch1.5.html', 'C-ch1.6.html', 'C-ch1.7.html', 'C-ch2.html', 'C-ch2.1.html', 'C-ch2.2.html', 'C-ch2.3.html', 'C-ch2.4.html', 'C-ch2.5.html', 'C-ch3.html', 'C-ch3.1.html', 'C-ch3.2.html', 'C-ch3.3.html', 'C-ch3.4.html', 'C-ch4.html', 'C-ch4.1.html', 'C-ch4.2.html', 'C-ch4.3.html', 'C-ch4.4.html', 'C-ch4.5.html', 'C-ch4.6.html', 'C-ch4.7.html', 'C-ch5.html', 'C-ch5.1.html', 'C-ch6.html', 'C-ch6.1.html', 'C-ch6.2.html', 'C-ch6.3.html', 'C-ch6.4.html', 'C-ch6.5.html', 'C-ch6.6.html', 'error.html', ];

    // Function to get the current page index from the URL
    function getCurrentPageIndex() {
        const path = window.location.pathname;
        const pageName = path.split('/').pop();
        return pages.indexOf(pageName);
    }

    // Function to navigate to a given page index
    function navigateToPage(pageIndex) {
        if (pageIndex >= 0 && pageIndex < pages.length) {
            window.location.href = pages[pageIndex];
        }
    }

    // Get the current page index
    const currentPageIndex = getCurrentPageIndex();

    // Set up the event listeners for the buttons
    prevButton.addEventListener('click', function () {
        if (currentPageIndex > 0) {
            navigateToPage(currentPageIndex - 1);
        }
    });

    nextButton.addEventListener('click', function () {
        if (currentPageIndex < pages.length - 1) {
            navigateToPage(currentPageIndex + 1);
        }
    });
});