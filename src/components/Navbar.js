import React, { useState } from "react";
import "./Navbar.css";

const Navbar = () => {
  const [hoveredLink, setHoveredLink] = useState(null);

  const handleMouseEnter = (link) => {
    setHoveredLink(link);
  };

  const handleMouseLeave = () => {
    setHoveredLink(null);
  };

  const linkStyle = (link) => ({
    color: hoveredLink === link ? "#00d9ff" : "#fff",
    textDecoration: "none",
    fontWeight: "bold",
    margin: "0 10px",
    transition: "color 0.3s ease",
  });

  // Composant pour la rubrique Formation -->
  const EpitechLinks = () => {
    const links = [{ name: "Epitech", url: "https://www.epitech.eu" }];

    return (
      <div
        className="formation-links"
        onMouseEnter={() => handleMouseEnter("Formation")}
        onMouseLeave={handleMouseLeave}
      >
        <h3>Formation :</h3>
        <ul>
          {links.map((link, index) => (
            <li key={index}>
              <a
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                style={linkStyle(link.name)}
              >
                {link.name}
              </a>
            </li>
          ))}
        </ul>
      </div>
    );
  };

  // Composant pour la rubrique Contact -->
  const SocialLinks = () => {
    const links = [
      { name: "Github", url: "https://github.com/leolcde" },
      { name: "Instagram", url: "https://www.instagram.com/leo_lcde/" },
      { name: "LinkedIn", url: "https://www.linkedin.com/in/l%C3%A9o-lacordaire-b9087b347/" },
    ];

    return (
      <div
        className="social-links"
        onMouseEnter={() => handleMouseEnter("Contact")}
        onMouseLeave={handleMouseLeave}
      >
        <h3>Suivez-moi sur :</h3>
        <ul>
          {links.map((link, index) => (
            <li key={index}>
              <a
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                style={linkStyle(link.name)}
              >
                {link.name}
              </a>
            </li>
          ))}
        </ul>
      </div>
    );
  };

  // Composant pour la rubrique Profil -->
  const CvLink = () => (
    <div
      className="cv-link"
      onMouseEnter={() => handleMouseEnter("Profil")}
      onMouseLeave={handleMouseLeave}
    >
      <h3>Profil :</h3>
      <ul>
        <li>
          <a
            href="https://publuu.com/flip-book/775928/1719219"
            target="_blank"
            rel="noopener noreferrer"
            style={linkStyle("CV")}
          >
            Mon_CV
          </a>
        </li>
      </ul>
    </div>
  );

  return (
    <nav className="navbar">
      <ul className="navbar-links">
        {["Accueil", "Profil", "Formation", "Contact"].map((link, index) => (
          <li
            key={index}
            onMouseEnter={() => handleMouseEnter(link)}
            onMouseLeave={handleMouseLeave}
          >
            <a
              href={`/${link.toLowerCase().replace(" ", "")}`}
              style={linkStyle(link)}
            >
              {link}
            </a>
            {link === "Profil" && hoveredLink === "Profil" && <CvLink />}
            {link === "Contact" && hoveredLink === "Contact" && <SocialLinks />}
            {link === "Formation" && hoveredLink === "Formation" && <EpitechLinks />}
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Navbar;
