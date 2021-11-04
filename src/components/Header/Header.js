import React from 'react';
import styled from 'styled-components/macro';
import { Menu, Search, User } from 'react-feather';

import { QUERIES } from '../../constants';

import MaxWidthWrapper from '../MaxWidthWrapper';
import Logo from '../Logo';
import Button from '../Button';

const Header = () => {
  return (
    <header>
      <SuperHeader>
        <Row>
          <ActionGroup>
            <button>
              <Search size={24} />
            </button>
            <button>
              <Menu size={24} />
            </button>
          </ActionGroup>
          <ActionGroup>
            <button>
              <User size={24} />
            </button>
          </ActionGroup>
        </Row>
      </SuperHeader>
      <MainHeader>
        <MenuAndSearch>
          <button>
            <Search size={24} />
          </button>
          <button>
            <Menu size={24} />
          </button>
        </MenuAndSearch >
        <Logo />
        <Subscribe>
          <Button>Subscribe</Button>
          <StyledLink href="/">Already a subscriber?</StyledLink>
        </Subscribe>
      </MainHeader>
    </header>
  );
};

const SuperHeader = styled.div`
  padding: 16px 0;
  background: var(--color-gray-900);
  color: white;

  @media ${QUERIES.laptopAndUp} {
    display: none;
  }
`;

const Row = styled(MaxWidthWrapper)`
  display: flex;
  justify-content: space-between;
`;

const Subscribe = styled.div`
  display: none;

  @media ${QUERIES.laptopAndUp} {
    display: revert;
    position: relative;
    justify-self: end;
  }
`
const StyledLink = styled.a`
  display: none;

  @media ${QUERIES.laptopAndUp} {
    position: absolute;
    display: revert;
    margin-top: 8px;
    width: 100%;
    text-align: center;
    font-style: italic;
    font-size: .85rem;
    text-decoration: underline;
  }
`

const ActionGroup = styled.div`
  display: flex;
  gap: 24px;

  /*
    FIX: Remove the inline spacing that comes with
    react-feather icons.
  */
  svg {
    display: block;
  }
`;

const MenuAndSearch = styled(ActionGroup)`
  display: none;

  @media ${QUERIES.laptopAndUp} {
    display: flex;
  }
`


const MainHeader = styled(MaxWidthWrapper)`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 32px;
  margin-bottom: 48px;

  @media ${QUERIES.tabletAndUp} {
    margin-top: 48px;
    margin-bottom: 72px;
  }

  @media ${QUERIES.laptopAndUp} {
    display: grid;
    grid-template-columns: 1fr auto 1fr;
    margin-top: 16px;
    margin-bottom: 72px;
  }
`;

export default Header;
