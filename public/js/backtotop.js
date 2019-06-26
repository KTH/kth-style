/* eslint-disable  func-names */
/* eslint-disable  no-var */

window.addEventListener('load', function() {
  /**
   * Back to top link
   */
  var backToTopButton = document.querySelector('#back-to-top')
  var lastKnownScrollPosition = 0
  var ticking = false

  backToTopButton.addEventListener('click', function() {
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

  window.addEventListener('scroll', function() {
    lastKnownScrollPosition = window.scrollY
    if (!ticking) {
      window.requestAnimationFrame(function() {
        handleBackToTop(lastKnownScrollPosition)
        ticking = false
      })
      ticking = true
    }
  })
})
