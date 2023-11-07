import { Link } from 'react-router-dom';
const RouteTest = () => {
  return (
    <>
      <Link to={'/'}>List</Link>
      <br />
      <Link to={'/product/:id'}>Product</Link>
      <br />
      <Link to={'/new'}>New</Link>
      <br />
      <Link to={'/edit?id=10'}>Edit</Link>
      <br />
    </>
  );
};
export default RouteTest;
