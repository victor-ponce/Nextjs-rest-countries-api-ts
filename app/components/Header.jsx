export function Header () {
  return (
    <header class='container filter-content margin-y'>
      <form class='form-search' id='form'>
        <i class='fa-solid fa-magnifying-glass' />
        <input type='text' placeholder='Enter Country' id='inputForm' />
      </form>
      <div class='custom-select'>
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
  )
}
