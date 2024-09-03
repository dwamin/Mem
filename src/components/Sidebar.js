import React from 'react';
import { Link } from 'react-router-dom';
import './Sidebar.css';

const years = [2012, 2013, 2014, 2015, 2016, 2017, 2018, 2019, 2020, 2021, 2022, 2023, '2024~'];

function Sidebar() {
  return (
    <div className="sidebar">
      <button className="sidebar-toggle">☰</button>
      <nav className="sidebar-menu">
        {years.map(year => (
          <Link key={year} to={`/year/${year}`} className="year-button">
            {year}
          </Link>
        ))}
      </nav>
    </div>
  );
}

export default Sidebar;
