import { Outlet, Link } from "react-router-dom";
export default function TestNav(params) {
  return (
    <div>
      <Link to="/innexts/"><a>home</a></Link>
      <Link to="/innexts/second"><a>second</a></Link>
      <Outlet></Outlet>
    </div>
  );
}
