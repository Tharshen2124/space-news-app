import Head from 'next/head'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import styles from '@component/styles/Home.module.css'
import { Flex, Heading } from '@chakra-ui/react'
const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
      <Flex height="100vh" alignItems="center" justifyContent="center">
        <Flex direction="column" background="gray.100" p={12} rounded={6}>
          <Heading>
            Hello
          </Heading>

        </Flex>

      </Flex>
    </>
  )
}
