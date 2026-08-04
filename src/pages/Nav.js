import React, { useState } from "react";
import logo from "../images/wapparels_logo.jpeg";
import { Link } from "react-router-dom";
import { HashLink } from "react-router-hash-link";
import "../pages/Nav.css";

const PROFILE_URL = "/WapparelsPDF.pdf";

const Nav = () => {
  const [filteredData, setFilteredData] = useState([]);
  const [wordEntered, setWordEntered] = useState("");

  const data = [
    { title: "About Us", goto: "/#aboutus", target: "" },
    { title: "Our Profile", goto: PROFILE_URL, target: "_blank" },
    { title: "Products", goto: "/productgallery", target: "" },
    { title: "Facilities", goto: "/#facilities", target: "" },
    { title: "Our Clients", goto: "/#ourclients", target: "" },
    { title: "Our Leaders", goto: "/meettheteam", target: "" },
    { title: "Careers", goto: "/career", target: "" },
  ];

  const handleFilter = (event) => {
    const searchWord = event.target.value;
    setWordEntered(searchWord);

    if (searchWord === "") {
      setFilteredData([]);
      return;
    }

    setFilteredData(
      data.filter((value) =>
        value.title.toLowerCase().includes(searchWord.toLowerCase()),
      ),
    );
  };

  const handleSelect = () => {
    setFilteredData([]);
    setWordEntered("");
  };

  return (
    <div className="sticky z-10 -mb-[75px]">
      <div className="navbar font-Nunito">
        <div className="navbar-start">
          <div className="dropdown">
            <label
              tabIndex={0}
              className="btn btn-ghost text-white lg:hidden"
              aria-label="Open navigation menu"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </label>
            <ul
              tabIndex={0}
              className="menu menu-compact dropdown-content mt-3 w-52 rounded-box bg-base-100 p-2 shadow"
            >
              <li>
                <HashLink smooth to="/#aboutus">
                  About Us
                </HashLink>
              </li>
              <li>
                <a href={PROFILE_URL} target="_blank" rel="noopener noreferrer">
                  Our Profile
                </a>
              </li>
              <li>
                <HashLink smooth to="/productgallery">
                  Products
                </HashLink>
              </li>
              <li>
                <HashLink smooth to="/#facilities">
                  Facilities
                </HashLink>
              </li>
              <li>
                <HashLink smooth to="/#ourclients">
                  Our Clients
                </HashLink>
              </li>
              <li>
                <Link to="/meettheteam">Our Leaders</Link>
              </li>
              <li>
                <Link to="/career">Careers</Link>
              </li>
            </ul>
          </div>

          <Link to="/" className="btn btn-ghost normal-case text-xl text-white">
            <img
              className="me-1 w-12 rounded-full"
              src={logo}
              alt="W. Apparels Ltd. logo"
            />
            W. Apparels Ltd.
          </Link>
        </div>

        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1 font-bold text-white">
            <li className="rounded-xl hover:bg-[rgba(1,1,1,0.7)] hover:text-[#b8b8b8]">
              <HashLink smooth to="/#aboutus">
                About Us
              </HashLink>
            </li>
            <li className="rounded-xl hover:bg-[rgba(1,1,1,0.7)] hover:text-[#b8b8b8]">
              <a href={PROFILE_URL} target="_blank" rel="noopener noreferrer">
                Our Profile
              </a>
            </li>
            <li className="rounded-xl hover:bg-[rgba(1,1,1,0.7)] hover:text-[#b8b8b8]">
              <HashLink smooth to="/productgallery">
                Products
              </HashLink>
            </li>
            <li className="rounded-xl hover:bg-[rgba(1,1,1,0.7)] hover:text-[#b8b8b8]">
              <HashLink smooth to="/#facilities">
                Facilities
              </HashLink>
            </li>
            <li className="rounded-xl hover:bg-[rgba(1,1,1,0.7)] hover:text-[#b8b8b8]">
              <HashLink smooth to="/#ourclients">
                Our Clients
              </HashLink>
            </li>
            <li className="rounded-xl hover:bg-[rgba(1,1,1,0.7)] hover:text-[#b8b8b8]">
              <Link to="/meettheteam">Our Leaders</Link>
            </li>
            <li className="rounded-xl hover:bg-[rgba(1,1,1,0.7)] hover:text-[#b8b8b8]">
              <Link to="/career">Careers</Link>
            </li>
          </ul>
        </div>

        <div className="navbar-end">
          <div className="searchBox1 mt-3 flex flex-wrap items-center justify-center">
            <input
              className="searchInput1"
              type="search"
              name="site-search"
              placeholder="Search"
              aria-label="Search website navigation"
              value={wordEntered}
              onChange={handleFilter}
            />
            <button
              className="searchButton1 flex items-center justify-center"
              type="button"
              aria-label="Search"
            >
              <i className="material-icons">search</i>
            </button>

            {filteredData.length !== 0 && (
              <div className="Result1 basis-full rounded">
                {filteredData.slice(0, 15).map((value) =>
                  value.target === "_blank" ? (
                    <a
                      key={value.title}
                      className="Item1 ps-5"
                      onClick={handleSelect}
                      href={value.goto}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      {value.title}
                    </a>
                  ) : (
                    <HashLink
                      key={value.title}
                      className="Item1 ps-5"
                      onClick={handleSelect}
                      smooth
                      to={value.goto}
                    >
                      {value.title}
                    </HashLink>
                  ),
                )}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Nav;
