/* import Link from 'next/link' */
'use client'
import { Header } from './components/Header'
import { SearchBox } from './components/searchBox'
import React, { useState } from 'react'
import { Countries } from './components/Countries'

export default function HomaPage (data) {
  console.log(data)
  const countriesData = data

  const [country] = useState(countriesData)
  const [searchField, setSearchField] = useState('')
  const [region, setRegion] = useState('')

  // Search and searhByRegion Function >>
  const filterCountries = country.filter(country =>
    searchField
      ? country.name.common
        .toLowerCase()
        .includes(searchField.toLocaleLowerCase())
      : country.region.toLowerCase().includes(region.toLocaleLowerCase())
  )
  // for smooth scroll

  return (
    <><Header />
      <main className='container grid' id='flags'>
        <SearchBox
          apiData={data}
          search={e => setSearchField(e.target.value)}
          searchByRegion={e => setRegion(e.target.value)}
        />
        <Countries countries={filterCountries} />
        {/* <article className='card'>
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
            /* <Link href='/details'>Details</Link>
          </div>
        </article> */}

      </main>
    </>
  )
}

export async function getServerSideProps () {
  const res = await fetch('https://restcountries.com/v3.1/all')
  const data = await res.json()

  return {
    props: { data }
  }
}
