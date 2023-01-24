import styled from 'styled-components'
import data from '../../data.json'
import HamburgerIcon from '../../assets/icon-hamburger.svg'

const Navbar = () => {
  return (
    <Header>
      <Slogan>THE PLANETS</Slogan>
      <MobileMenuButton>
        <img src={HamburgerIcon} alt="" />
      </MobileMenuButton>
      <Nav>
        <Ul>
          {data.map((planet) => {
            return (
              <Li key={planet.name} planet={planet.name}>
                {planet.name}
              </Li>
            )
          })}
        </Ul>
      </Nav>
    </Header>
  )
}

const Header = styled.header`
  height: 5.3125rem;
  display: flex;
  justify-content: space-between;
  padding-left: 1.5rem;
  padding-right: 1.5rem;
  border-bottom: 1px solid rgba(255, 255, 255, 0.2);
  @media (min-width: 1000px) {
    padding-left: 2rem;
    padding-right: 2.5625rem;
  }
`

const Slogan = styled.div`
  font-family: 'Antonio Medium';
  font-size: 1.75rem;
  line-height: 2.25rem;
  letter-spacing: -1.05px;
  padding-top: 22px;
`

const Nav = styled.nav`
  display: none;
  @media (min-width: 1000px) {
    display: block;
  }
`

const MobileMenuButton = styled.div`
  display: flex;
  align-items: center;
  opacity: 0.25;
  @media (min-width: 1000px) {
    display: none;
  }
`

const Ul = styled.ul`
  display: flex;
  gap: 2.0625rem;
`

const Li = styled.li<{ planet: string }>`
  padding-top: 33px;
  font-family: 'Spartan';
  text-transform: uppercase;
  font-size: 0.6875rem;
  line-height: 1.5625rem;
  letter-spacing: 1px;
  opacity: 0.75;

  &:hover {
    cursor: pointer;
    border-top: 4px solid
      ${({ theme, planet }) => theme.colors[planet.toLowerCase()]};
    padding-top: 29px;
    opacity: 1;
  }
`

export default Navbar
