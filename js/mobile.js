/**
 * IPLogger - Mobile Navigation Enhancements
 * JavaScript for improving mobile experience
 */

// Mobile tab navigation enhancement
document.addEventListener('DOMContentLoaded', function() {
  // Tab scroll into view on mobile
  const tabsNav = document.querySelector('.nav-tabs');
  const tabItems = document.querySelectorAll('.nav-tabs .nav-item');
  
  if (tabsNav && tabItems.length > 0) {
    // Function to scroll active tab into view
    function scrollActiveTabIntoView() {
      if (window.innerWidth <= 768) {
        const activeTab = document.querySelector('.nav-tabs .nav-link.active');
        if (activeTab) {
          const activeTabRect = activeTab.getBoundingClientRect();
          const navTabsRect = tabsNav.getBoundingClientRect();
          
          // Check if active tab is not fully visible
          if (activeTabRect.left < navTabsRect.left || activeTabRect.right > navTabsRect.right) {
            // Calculate the scroll position to center the active tab
            const scrollLeft = activeTab.offsetLeft - (tabsNav.offsetWidth / 2) + (activeTab.offsetWidth / 2);
            tabsNav.scrollTo({
              left: scrollLeft,
              behavior: 'smooth'
            });
          }
        }
      }
    }
    
    // Scroll active tab into view when tabs are shown
    document.querySelectorAll('[data-bs-toggle="tab"]').forEach(tab => {
      tab.addEventListener('shown.bs.tab', scrollActiveTabIntoView);
    });
    
    // Initial scroll on page load
    setTimeout(scrollActiveTabIntoView, 100);
    
    // Handle touch swipe for tab navigation
    let touchStartX = 0;
    let touchEndX = 0;
    
    tabsNav.addEventListener('touchstart', function(e) {
      touchStartX = e.changedTouches[0].screenX;
    }, { passive: true });
    
    tabsNav.addEventListener('touchend', function(e) {
      touchEndX = e.changedTouches[0].screenX;
      handleSwipe();
    }, { passive: true });
    
    function handleSwipe() {
      const threshold = 50; // Minimum swipe distance
      if (touchEndX < touchStartX - threshold) {
        // Swiped left - go to next tab
        const activeTab = document.querySelector('.nav-tabs .nav-link.active');
        const activeTabItem = activeTab.closest('.nav-item');
        const nextTabItem = activeTabItem.nextElementSibling;
        
        if (nextTabItem) {
          const nextTab = nextTabItem.querySelector('.nav-link');
          if (nextTab) {
            nextTab.click();
          }
        }
      } else if (touchEndX > touchStartX + threshold) {
        // Swiped right - go to previous tab
        const activeTab = document.querySelector('.nav-tabs .nav-link.active');
        const activeTabItem = activeTab.closest('.nav-item');
        const prevTabItem = activeTabItem.previousElementSibling;
        
        if (prevTabItem) {
          const prevTab = prevTabItem.querySelector('.nav-link');
          if (prevTab) {
            prevTab.click();
          }
        }
      }
    }
  }
  
  // Form usability enhancements
  const shorturlInput = document.getElementById('shorturl');
  const urlButton = document.getElementById('urlbutton');
  
  if (shorturlInput && urlButton) {
    shorturlInput.addEventListener('keypress', function(e) {
      if (e.key === 'Enter') {
        e.preventDefault();
        urlButton.click();
      }
    });
  }
  
  const findanipInput = document.getElementById('findanip');
  const findanipButton = document.getElementById('findanipbutton');
  
  if (findanipInput && findanipButton) {
    findanipInput.addEventListener('keypress', function(e) {
      if (e.key === 'Enter') {
        e.preventDefault();
        findanipButton.click();
      }
    });
  }
  
  // Auto-focus on input field when switching tabs
  const tabLinks = document.querySelectorAll('[data-bs-toggle="tab"]');
  tabLinks.forEach(tab => {
    tab.addEventListener('shown.bs.tab', function(e) {
      if (e.target.id === 'tab-generate') {
        setTimeout(() => shorturlInput?.focus(), 300);
      } else if (e.target.id === 'tab-ip') {
        setTimeout(() => findanipInput?.focus(), 300);
      }
    });
  });
  
  // Enhance fade-in animations for mobile
  function animateOnScroll() {
    const animatedEls = document.querySelectorAll('.fade-in-up, .fade-in-left, .fade-in-right');
    animatedEls.forEach(el => {
      const rect = el.getBoundingClientRect();
      if (rect.top < window.innerHeight - 60) {
        el.classList.add('visible');
      }
    });
  }
  
  // Initial animation check
  animateOnScroll();
  
  // Re-check animations on scroll and resize
  window.addEventListener('scroll', animateOnScroll);
  window.addEventListener('resize', animateOnScroll);
  
  // Fix input zooming issues on mobile
  const viewportMeta = document.querySelector('meta[name="viewport"]');
  if (viewportMeta && /iPhone|iPad|iPod|Android/i.test(navigator.userAgent)) {
    viewportMeta.setAttribute('content', 'width=device-width, initial-scale=1, maximum-scale=1, user-scalable=0');
  }
});
