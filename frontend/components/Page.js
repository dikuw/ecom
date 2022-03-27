import PropTypes from 'prop-types';

export default function Page({ children }) {
  return <div>
    <h2>page component</h2>
    { children }
  </div>
}

Page.prototypes = {
  children: PropTypes.arrayOf(PropTypes.node),
};