import React from 'react'
import { NavLink } from 'react-bootstrap'

export const Footer = () => {
  return (
    <div>
      <div class="container">
  <footer class="py-3 my-4">
    <ul class="nav justify-content-center border-bottom pb-3 mb-3">
      <li class="nav-item"><NavLink href="#" class="nav-link px-2 text-muted">Home</NavLink></li>
      <li class="nav-item"><NavLink href="#" class="nav-link px-2 text-muted">Features</NavLink></li>
      <li class="nav-item"><NavLink href="#" class="nav-link px-2 text-muted">Pricing</NavLink></li>
      <li class="nav-item"><NavLink href="#" class="nav-link px-2 text-muted">FAQs</NavLink></li>
      <li class="nav-item"><NavLink href="#" class="nav-link px-2 text-muted">About</NavLink></li>
    </ul>
    <p class="text-center text-muted">© 2023 Company, Inc</p>
  </footer>
</div>
    </div>
  )
}
