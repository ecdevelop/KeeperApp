import React from 'react';

function Footer() {
  const date = new Date();
  let year = date.getFullYear();
  console.log(year);

  return (
    <div className="footer">
      <p> © Copyright {year}</p>
    </div>
  );
}

export default Footer;
