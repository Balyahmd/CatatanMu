import React from "react";
import { Link } from "react-router-dom";

function PageNotFound() {
  return (
    <section className="page-notFound">
      <h2>404</h2>
      <p>Maaf Halaman tidak ditemukan 😋😋😋</p>
      <Link to={"/"}>Kembali Ke halaman Home</Link>
    </section>
  );
}

export default PageNotFound;
