import Link from 'next/link'

export function Flags () {
  return (
    <main className='container grid' id='flags'>
      <article className='card'>
        Una imagen va aqui
        <div className='cardContent'>
          <p>
            <b>Population:</b>
          </p>
          <p>
            <b>Region:</b>
          </p>
          <p>
            <b>Capital:</b>
          </p>
          <Link href='/about'> Details </Link>
        </div>
      </article>
    </main>
  )
}
