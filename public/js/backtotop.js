/* eslint-disable  func-names */
/* eslint-disable  no-var */

window.addEventListener('load', () => {
  /**
   * Back to top link
   */
  var lastKnownScrollPosition = 0
  var ticking = false
  var backToTopButton = document.querySelector('#back-to-top')
  if (!backToTopButton) {
    backToTopButton = document.createElement('div')
    backToTopButton = document.body.appendChild(backToTopButton)
    backToTopButton.id = 'back-to-top'
    backToTopButton.setAttribute('role', 'link')
    backToTopButton.setAttribute('aria-hidden', 'true')

    if (document.documentElement.lang === 'sv-SE') {
      backToTopButton.innerText = 'Till sidans topp'
    } else {
      backToTopButton.innerText = 'To page top'
    }

    const pageFooter = document.querySelector('body > footer')
    if (pageFooter) {
      // Insert back to top button before footer
      pageFooter.parentNode.insertBefore(backToTopButton, pageFooter)
    }
  }
  // Scroll to top when clicking the button
  backToTopButton.addEventListener('click', function () {
    window.scrollTo({ top: 0, behavior: 'smooth' })
    this.classList.toggle('show')
    this.setAttribute('aria-hidden', true)
  })

  function handleBackToTop(scrollPos) {
    if (scrollPos > 200) {
      backToTopButton.classList.add('show')
      backToTopButton.removeAttribute('aria-hidden')
    } else {
      backToTopButton.classList.remove('show')
      backToTopButton.setAttribute('aria-hidden', true)
    }
  }

  window.addEventListener('scroll', () => {
    lastKnownScrollPosition = window.scrollY
    if (!ticking) {
      window.requestAnimationFrame(() => {
        handleBackToTop(lastKnownScrollPosition)
        ticking = false
      })
      ticking = true
    }
  })
})
