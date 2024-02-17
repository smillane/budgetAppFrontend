import { createRootRoute, Outlet } from '@tanstack/react-router'
import { TanStackRouterDevtools } from '@tanstack/router-devtools'
import { Footer } from '../components/Footer'
import { Header } from '../components/Header'
import '@mantine/core/styles.css';
import { MantineProvider } from '@mantine/core'

export const Route = createRootRoute({
  component: () => (
    <MantineProvider>
      <Header />
      <Outlet />
      <Footer />
      <TanStackRouterDevtools />
    </MantineProvider>
  ),
})