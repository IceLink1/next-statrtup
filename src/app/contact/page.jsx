import React from 'react'
import Head from 'next/head'
import MainLayout from '@/components/MainLayout'

export const metadata = {
  title: "ICELINK | Contact",
};

export default function page() {
  return (
    <MainLayout>
    <Head>
      <title>ICELINK | Contact</title>
    </Head>
    <div className="pt-16">
        contact
    </div>
    </MainLayout>
  )
}
