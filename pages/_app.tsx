import Layout from '@/components/Layout'
import Modal from '@/components/Modal'
import { Toaster } from 'react-hot-toast'
import {SessionProvider} from 'next-auth/react'
import LoginModal from '@/components/modals/LoginModal'
import RegisterModal from '@/components/modals/RegisterModal'
import '@/styles/globals.css'
import type { AppProps } from 'next/app'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <SessionProvider session={pageProps.session}>
    {/* <Modal actionLabel='Submit' isOpen title="Test Modal" />  */} {/* Testing the modal component */}
    <Toaster />
      <RegisterModal />
      <LoginModal />
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </SessionProvider>
  )
}
