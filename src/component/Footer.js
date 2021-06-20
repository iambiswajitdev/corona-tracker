import React from "react";

const Footer = () => {
  const emoji = " ❤️";
  return (
    <div>
      <h3 className="footer">
        Made with {emoji} by Biswajit Mondal @ {new Date().getFullYear()} .
        Built with React JS
      </h3>
    </div>
  );
};

export default Footer;
