import { Metadata } from 'next'
import { Button } from 'ui'
import Item from '@/components/Item'
import 'styles/styles.css'

export default async function Home() {
  return (
    <main>
      <h1 className="px-2 py-4 text-4xl md:text-5xl test w-sm"> App Router</h1>
      <Button> TEST </Button>
      <Item />
    </main>
  )
}

export const metadata: Metadata = {
  title: 'Title',
  description: ''
}
