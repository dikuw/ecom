import PropTypes from 'prop-types';

import Header from './Header';

export default function Page({ children }) {
  return (
    <div>
      <Header />
      <h2>page component</h2>
      { children }
    </div>
  );
}

Page.prototypes = {
  children: PropTypes.any,
};