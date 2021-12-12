import Layout from 'components/Layout'
import { useRouter } from 'next/router'
import { useEffect, useState } from 'react'

export default function NotFound404Page() {
  const router = useRouter()
  const [count, setCount] = useState(5)

  useEffect(() => {
    const countdown = setInterval(() => {
      setCount((c) => c - 1)
    }, 1000)

    setTimeout(() => {
      router.push('/')
    }, count * 1000)

    return () => clearInterval(countdown)
  }, [])

  return (
    <Layout title='404 Page Not Found'>
      <h1>
        404 <br /> Page Not Found
      </h1>
      <p>Redirecting back to home page in {count}s</p>
    </Layout>
  )
}
