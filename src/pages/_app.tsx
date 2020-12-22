import 'tailwindcss/tailwind.css';
import '../styles/global.css';
import { AppProps } from 'next/app';
import { ValidationsProvider, UserProvider } from '../contexts'

function MyApp ({ Component, pageProps }: AppProps) {
  return (
    <UserProvider>
      <ValidationsProvider>
        <Component { ...pageProps } />
      </ValidationsProvider>
    </UserProvider>
  )
}

export default MyApp