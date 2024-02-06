import { createRootRoute, Link, Outlet } from '@tanstack/react-router'
import { TanStackRouterDevtools } from '@tanstack/router-devtools'
import { Footer } from '../components/Footer'
import { Header } from '../components/Header'
import React from 'react'
import '@mantine/core/styles.css';
import { MantineProvider } from '@mantine/core'

export const Route = createRootRoute({
  component: () => (
    <MantineProvider>
      <div className="p-2 flex gap-2">
        <Link to="/" className="[&.active]:font-bold">
          Home
        </Link>{' '}
        <Link to="/about" className="[&.active]:font-bold">
          About
        </Link>
      </div>
      <hr />
      <Header />
      <Outlet />
      <Footer />
      <TanStackRouterDevtools />
    </MantineProvider>
  ),
})