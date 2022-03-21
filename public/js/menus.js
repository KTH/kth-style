/* eslint-disable  func-names */
/* eslint-disable  no-var */
/* eslint-disable  vars-on-top */
/* eslint-disable  no-use-before-define */
/* eslint-disable  no-plusplus */
/* eslint-disable  no-undef */

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
  /*
   * Make the main menu sticky
   */
  var maxScrollPos = document.body.scrollHeight - document.querySelector('footer').clientHeight
  var minScrollPos = 260

  function handleMainMenu(scrollPos) {
    if (scrollPos > minScrollPos) {
      if (scrollPos < maxScrollPos) {
        mainMenu.style.marginTop = scrollPos - 260 + 'px'
      } else {
        mainMenu.style.marginTop = maxScrollPos - 260 + 'px'
      }
    } else {
      mainMenu.style.marginTop = 0
    }
  }
  if (mainMenu) {
    var lastKnownScrollPosition = 0
    var ticking = false
    window.addEventListener('scroll', () => {
      lastKnownScrollPosition = window.scrollY
      if (!ticking) {
        window.requestAnimationFrame(() => {
          handleMainMenu(lastKnownScrollPosition)
          ticking = false
        })
        ticking = true
      }
    })
  }
})
