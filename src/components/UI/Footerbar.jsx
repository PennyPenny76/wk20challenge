/* eslint-disable react/prop-types */
// eslint-disable-next-line react/prop-types
export default function Footer({ links }) {
  return (
    <nav className="navbar navbar-expand-lg bg-secondary">
      <div className="container-fluid">
        <div className="collapse navbar-collapse justify-content-center" id="navbarSupportedContent">
          <ul className="navbar-nav mb-2 mb-lg-0">
          {links.map((link, index) => (
              <li key={index} className="nav-item mx-2">
                {link}
              </li>
             ))}
          </ul>
        </div>
      </div>
    </nav>
  );
}
