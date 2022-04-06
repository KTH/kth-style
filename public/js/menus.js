/* eslint-disable  func-names */
/* eslint-disable  no-var */
/* eslint-disable  vars-on-top */
/* eslint-disable  no-use-before-define */
/* eslint-disable  no-plusplus */
/* eslint-disable  no-undef */
function klaroOnload() {
  var klaro = document.querySelector('div.klaro')
  if (!klaro || klaro.querySelector('a') === null) {
    return
  }
  if (klaro !== document.body.firstElementChild) {
    document.body.insertBefore(klaro, document.body.firstElementChild)
    klaro.querySelector('a').focus()
    document.body.style.overflowY = 'hidden'
  }
  const getNextFocusableElement = function (element, step) {
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

  const resetActiveLI = function (element) {
    var elements = Array.prototype.slice.call(klaro.querySelectorAll('li.active'))
    if (!elements) return null
    elements.forEach((e) => e.classList.remove('active'))
  }
  const handleKeydown = (event) => {
    if (!klaro || klaro.querySelector('a') === null) {
      window.removeEventListener('keydown', handleKeydown)
      document.body.style.overflowY = 'auto'
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

  const config = { childList: true, subtree: true }
  const callback = function (mutationsList, observer) {
    for (const mutation of mutationsList) {
      if (mutation.type === 'childList') {
        if (mutation.addedNodes.length > 0) {
          for (const node of mutation.addedNodes) {
            if (node.nodeType === 1) {
              if (node.classList.contains('cookie-modal')) {
                var inputs = Array.prototype.slice.call(node.querySelectorAll('input'))
                for (let input of inputs) {
                  input.setAttribute('tabindex', '0')
                }
                const activeInput = inputs.find((i) => !i.disabled)
                activeInput.parentElement.closest('li').classList.add('active')
                activeInput.focus()
              }
            }
          }
        } else if (mutation.removedNodes.length > 0) {
          for (const node of mutation.removedNodes) {
            if (node.nodeType === 1) {
              if (node.classList.contains('cn-body')) {
                window.removeEventListener('keydown', handleKeydown)
                document.body.style.overflowY = 'auto'
              }
            }
          }
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

window.addEventListener('load', () => {
  // If no mobile menu containers are present, skip it all togehter
  if (
    !document.getElementById('mobileMenuWrapper') ||
    !document.getElementById('mobileMenuList') ||
    !document.getElementById('mobileMenuContent') ||
    !document.getElementById('nav-icon')
  ) {
    return
  }
  var mainMenu = document.getElementById('mainMenu') // Get main menu
  var megaMenu = document.getElementById('megaMenu') // Get mega menu
  var secondaryMenu = document.querySelector('.secondaryMenu') // Get secondary menu

  if (!mainMenu && !megaMenu && !secondaryMenu) {
    document.getElementById('mobileMenuWrapper').style.display = 'none' // Hide mobile menu wrapper/container if there is no menus
  }

  if (mainMenu) {
    // For main menu items, copy a link if it exists, otherwise copy the link content
    createMobileMenuItems(mainMenu.querySelectorAll('li'), true)
  } else if (megaMenu) {
    // For mega menu items, copy only the the first alinks
    createMobileMenuItems(megaMenu.querySelectorAll('li'), false)
  }
  if (secondaryMenu) {
    createMobileMenuItemsForSecondaryMenu(secondaryMenu.querySelectorAll('li a'))
  }

  function createMobileMenuItems(menuItems, includeInline) {
    for (var i = 0; i < menuItems.length; i++) {
      var linkToCopy = menuItems[i].querySelector('a')
      if (linkToCopy || includeInline) {
        var listItem = document.createElement('li')
        listItem.className = menuItems[i].className !== '' ? menuItems[i].className : 'nav-item'
        if (linkToCopy) {
          var link = document.createElement('a')
          link.href = linkToCopy.href
          link.text = linkToCopy.text
          link.className = linkToCopy.className
          listItem.appendChild(link)
        } else if (includeInline) {
          listItem.innerHTML = menuItems[i].innerHTML
        }
        document.getElementById('mobileMenuList').appendChild(listItem)
      }
    }
  }

  function createMobileMenuItemsForSecondaryMenu(menuItems) {
    var secondaryMenuWrapper = document.createElement('li')
    secondaryMenuWrapper.className = 'secondaryMenuWrap'
    var secondaryMenuContainer = document.createElement('ul')
    secondaryMenuContainer.className = 'secondaryMenuContainer'

    for (var i = 0; i < menuItems.length; i++) {
      var link = document.createElement('a')
      link.className = 'secondaryMenu'
      link.href = menuItems[i].href
      link.text = menuItems[i].text
      if (menuItems[i].hreflang) {
        link.hreflang = menuItems[i].hreflang
      }
      var secondaryMenuListItem = document.createElement('li')
      secondaryMenuListItem.className = 'item nav-item secondaryItem'

      secondaryMenuListItem.appendChild(link)
      secondaryMenuContainer.appendChild(secondaryMenuListItem)
    }

    secondaryMenuWrapper.appendChild(secondaryMenuContainer)
    document.getElementById('mobileMenuList').appendChild(secondaryMenuWrapper)
  }

  // Mega menu icon toggler.
  document.getElementById('nav-icon').onclick = function () {
    if (document.body.style.overflow !== 'hidden') {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'initial'
    }

    document.getElementById('mobileMenuContent').classList.toggle('show')
    this.classList.toggle('open')
  }
})
