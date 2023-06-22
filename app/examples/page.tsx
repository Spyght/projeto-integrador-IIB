import Link from 'next/link'

export default function BasicPage() {
  return (
    <div>
      <h1>Examples</h1>
      <Link href="/">Basic</Link>
      <br />
      <Link href="/name_mixing">Name Type Mixing</Link>
      <br />
      <Link href="/selectable">Selectable</Link>
    </div>
  )
}