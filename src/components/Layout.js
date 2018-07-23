/* eslint no-unused-expressions:0 */

import React from 'react';
import { StaticQuery } from 'gatsby';
import styled, { ThemeProvider, injectGlobal } from 'styled-components';
import SEO from '../components/SEO';
import theme from '../../config/Theme';
import { media } from '../utils/media';

injectGlobal`
  ::selection {
    color: ${theme.bg};
    background: ${theme.primary};
  }
  body {
    background: ${theme.bg};
    color: ${theme.default};
    @media ${media.phone} {
      font-size: 14px;
    }
  }
  a {
    color: ${theme.dark};
    text-decoration: none;
    transition: all ${theme.transitionTime};
  }
  a:hover {
    color: ${theme.primary};
  }
  h1, h2, h3, h4 {
    color: ${theme.dark};
  }
  blockquote {
    font-style: italic;
    position: relative;
  }

  blockquote:before {
    content: "";
    position: absolute;
    background: ${theme.primary};
    height: 100%;
    width: 6px;
    margin-left: -1.6rem;
  }
  label {
    margin-bottom: .5rem;
    color: ${theme.dark};
  }
  input, textarea {
    border-radius: .5rem;
    border: none;
    background: rgba(0, 0, 0, 0.05);
    padding: .25rem 1rem;
    &:focus {
      outline: none;
    }
  }
`;

const Footer = styled.footer`
  text-align: center;
  color: ${theme.white};
  padding: 3rem 0;
`;

const WebsiteLink = styled.a`
  text-align: center;
  color: ${theme.white};
`;

const Layout = props => {
  const { children } = props;
  return (
    <StaticQuery
      query={graphql`
        query LayoutQuery {
          site {
            siteMetadata {
              buildTime
            }
          }
        }
      `}
      render={data => (
        <ThemeProvider theme={theme}>
          <React.Fragment>
            <SEO />
            {children}
            <Footer>
              &copy; 2018 by Mokkapps. All rights reserved. <br />
              <WebsiteLink href="https://www.mokkapps.de">Mokkapps Website</WebsiteLink> <br />
            </Footer>;
          </React.Fragment>
        </ThemeProvider>
      )}
    />
  );
};

export default Layout;
