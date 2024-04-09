/* eslint-disable  no-var */
/* eslint-disable  vars-on-top */
/* eslint-disable  no-use-before-define */
function klaroOnload() {
  var klaro = document.querySelector('#klaro div.klaro')
  function noVisibleKlaro() {
    return !klaro || window.getComputedStyle(klaro).display === 'none' || klaro.querySelector('a') === null
  }
  if (noVisibleKlaro()) {
    return
  }
  if (klaro !== document.body.firstElementChild) {
    document.body.insertBefore(klaro, document.body.firstElementChild)
  }

  const getNextFocusableElement = function _getNextFocusableElement(element, step) {
    var elements = Array.prototype.slice.call(
      klaro.querySelectorAll('a:not([disabled]), button:not([disabled]), input:not([disabled])')
    )
    if (!elements) return null

    elements = elements.filter((e) => window.getComputedStyle(e).display !== 'none')
    for (var i = 0; i < elements.length; i++) {
      if (elements[i] === element) {
        if (i < elements.length - step) {
          return elements[i + step]
        }
        return elements[0]
      }
    }
    return elements[0]
  }

  const resetActiveLI = function _resetActiveLI() {
    var elements = Array.prototype.slice.call(klaro.querySelectorAll('li.active'))
    if (!elements) return
    elements.forEach((e) => e.classList.remove('active'))
  }
  // eslint-disable-next-line no-shadow
  const handleKeydown = (event) => {
    if (noVisibleKlaro()) {
      window.removeEventListener('keydown', handleKeydown)
      return
    }
    if (event.key === 'Tab') {
      const nextElement = getNextFocusableElement(event.target, event.shiftKey ? -1 : 1)
      if (nextElement) {
        event.preventDefault()
        nextElement.focus()
        resetActiveLI()
        if (nextElement.tagName === 'INPUT') {
          nextElement.parentElement.closest('li').classList.add('active')
        }
      }
    } else if (event.key === 'Escape') {
      const closeButton = klaro.querySelector('div.klaro .cookie-modal button.hide')
      if (closeButton) {
        closeButton.click()
      }
    }
  }
  window.addEventListener('keydown', handleKeydown)

  const config = { childList: true, subtree: true, attributes: true }
  const callback = function _callback(mutationsList) {
    for (const mutation of mutationsList) {
      if (mutation.type === 'childList') {
        if (mutation.addedNodes.length > 0) {
          for (const node of mutation.addedNodes) {
            if (node.nodeType === 1) {
              if (node.classList.contains('cookie-modal')) {
                var inputs = Array.prototype.slice.call(node.querySelectorAll('input'))
                for (const input of inputs) {
                  input.setAttribute('tabindex', '0')
                }
              }
            }
          }
        } else if (mutation.removedNodes.length > 0) {
          for (const node of mutation.removedNodes) {
            if (node.nodeType === 1) {
              if (node.classList.contains('cn-body') || node.classList.contains('cookie-modal')) {
                window.removeEventListener('keydown', handleKeydown)
              }
            }
          }
        }
      } else if (mutation.attributeName === 'style') {
        if (window.getComputedStyle(klaro).getPropertyValue('display') === 'none') {
          window.removeEventListener('keydown', handleKeydown)
        }
      }
    }
  }

  const observer = new MutationObserver(callback)
  observer.observe(klaro, config)
}

window.addEventListener('load', () => {
  klaroOnload()
})

function stickyMainMenu() {
  if (!document.querySelector('#mainMenu ul.nav.nav-list')) return

  function isInViewport(element) {
    if (!element) return false
    const rect = element.getBoundingClientRect()

    return (
      rect.top >= 0 &&
      rect.left >= 0 &&
      rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
      rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    )
  }

  if (isInViewport(document.querySelector('#mainMenu ul.nav.nav-list:last-of-type')?.lastElementChild)) {
    document.querySelector('#mainMenu').classList.add('sticky-menu')
  } else {
    document.querySelector('#mainMenu').classList.remove('sticky-menu')
  }
}
window.addEventListener('load', stickyMainMenu)
window.addEventListener('resize', stickyMainMenu)
