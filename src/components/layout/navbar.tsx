import styled from 'styled-components'

const Navbar = () => {
  return (
    <Header>
      <Slogan>THE PLANETS</Slogan>
      <Nav>
        <Ul>
          <Li>mercury</Li>
          <Li>venus</Li>
          <Li>earth</Li>
          <Li>mars</Li>
          <Li>jupiter</Li>
          <Li>saturn</Li>
          <Li>uranus</Li>
          <Li>neptune</Li>
        </Ul>
      </Nav>
    </Header>
  )
}

const Header = styled.header`
  height: 5.3125rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-left: 2rem;
  padding-right: 2.5rem;
  border-bottom: 1px solid rgba(255, 255, 255, 0.2);
`

const Slogan = styled.div`
  font-family: 'Antonio Medium';
  font-size: 1.75rem;
  line-height: 2.25rem;
  letter-spacing: -1.05px;
`

const Nav = styled.nav``

const Ul = styled.ul`
  display: flex;
  gap: 2rem;
`

const Li = styled.li`
  font-family: 'Spartan Bold';
  text-transform: uppercase;
  font-size: 0.6875rem;
  line-height: 1.5625rem;
  letter-spacing: 1px;
`

export default Navbar
