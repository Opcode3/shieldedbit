import { UserProvider } from '../components/dashboard/UserProvider'
import '../styles/globals.css'
import '../styles/user.globals.css'

function MyApp({ Component, pageProps }) {
  return (
    <UserProvider>
      <Component {...pageProps} />
    </UserProvider>
     )
}

export default MyApp
