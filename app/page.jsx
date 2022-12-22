/* import Link from 'next/link' */
export default function HomaPage () {
  return (
    <><header className='container filter-content margin-y'>
      <form className='form-search' id='form'>
        <i className='fa-solid fa-magnifying-glass' />
        <input type='text' placeholder='Enter Country' id='inputForm' />
      </form>
      <div className='custom-select'>
        <select>
          <option value=''>Filter by region</option>
          <option value=''>All</option>
          <option value='Africa'>Africa</option>
          <option value='Americas'>America</option>
          <option value='Asia'>Asia</option>
          <option value='Europe'>Europe</option>
          <option value='Oceania'>Oceania</option>
        </select>
      </div>
      </header>
      <main className='container grid' id='flags'>
        <article className='card'>
          <p>Una imagen va aqui</p>
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
            {/* <Link href='/details'>Details</Link> */}
          </div>
        </article>
      </main>
    </>
  )
}
