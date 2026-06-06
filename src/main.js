import './style.css'

// ── Hamburger menu toggle ──
const burger = document.getElementById('burger')
const mobileMenu = document.getElementById('mobile-menu')

burger?.addEventListener('click', () => {
  mobileMenu.classList.toggle('hidden')
})

// Close menu when a link is tapped
mobileMenu?.querySelectorAll('a').forEach(link => {
  link.addEventListener('click', () => mobileMenu.classList.add('hidden'))
})
