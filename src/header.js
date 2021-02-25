import skull from '../src/img/skull.svg'
const Header = () => {
  return (
    <header>
      <div className="logo">
        <img src={skull} alt="logo" />
        <p>
          drum
          <br />
          machine
        </p>
      </div>
    </header>
  )
}

export default Header
