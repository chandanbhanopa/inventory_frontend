import React from 'react';
import '../css/dashboard.css';


function Dashboard() {
  return (
    <div className="d-flex h-100">
        <div id="sidebar" className="text-white d-flex flex-column sidebar">
            <div className="d-flex align-items-center justify-content-center h-20 border-secondary py-3">
                <img src="https://storage.googleapis.com/a1aa/image/Jg3eMHZ4sIylj8_hp-FCwBqtmS6L0H27L-n2_D7ph1Q.jpg"
                    alt="Logo" className="rounded-circle" height="40" width="40" />
                <span className="ms-2 fs-4 fw-bold">Inventory</span>
            </div>
            <div className="d-flex flex-column align-items-center mt-4">
                <img src="https://storage.googleapis.com/a1aa/image/K155lSZz5ZLd3FEk38rGuNDC7pyxLX6JJTZLRzW6buE.jpg"
                    alt="User profile picture" className="rounded-circle" height="80" width="80" />
                <span className="mt-2 fs-5">Rahul Sharma</span>
            </div>

            <nav className="mt-4 flex-grow-1">
                <a href="index.html" className="d-flex align-items-center active text-white">
                    <i className="fas fa-tachometer-alt me-3"></i> Dashboard
                </a>
                <a href="#masterMenu" className="d-flex align-items-center" data-bs-toggle="collapse">
                    <i className="fas fa-folder me-3"></i> Master <i className="fas fa-chevron-down ms-auto"></i>
                </a>
                <div id="masterMenu" className="collapse submenu">
                    <a href="#" className="d-flex align-items-center">
                        <i className="fas fa-users me-3"></i> Users
                    </a>
                    <a href="#" className="d-flex align-items-center">
                        <i className="fas fa-cogs me-3"></i> Settings
                    </a>
                </div>
                <a href="FrmMaster.html" className="d-flex align-items-center">
                    <i className="fas fa-shopping-cart me-3"></i> Orders
                </a>

                <a href="#productsMenu" className="d-flex align-items-center" data-bs-toggle="collapse">
                    <i className="fas fa-box me-3"></i> Products <i className="fas fa-chevron-down ms-auto"></i>
                </a>
                <div id="productsMenu" className="collapse submenu">
                    <a href="#" className="d-flex align-items-center">
                        <i className="fas fa-plus me-3"></i> Add Product
                    </a>
                    <a href="#" className="d-flex align-items-center">
                        <i className="fas fa-list me-3"></i> Product List
                    </a>
                </div>
                <a href="#" className="d-flex align-items-center">
                    <i className="fas fa-tags me-3"></i> Pricing
                </a>
                <a href="#" className="d-flex align-items-center">
                    <i className="fas fa-chart-line me-3"></i> Analytics
                </a>
            </nav>

        </div>
        
        <div id="content" className="flex-grow-1 d-flex flex-column content">
        
            <header id="head_master"
                className="d-flex align-items-center justify-content-between bg-white p-3 border-bottom">
                <div className="d-flex align-items-center">
                    <button id="menu-toggle" className="btn toggle-btn">
                        <i className="fas fa-bars fs-4"></i>
                    </button>
                </div>
                <div className="d-flex align-items-center">
                    <button className="btn btn-outline-secondary mx-2">
                        <i className="fas fa-bell"></i>
                    </button>

                    <button className="btn btn-outline-secondary mx-2">
                        <i className="fas fa-cog"></i>
                    </button>
                    <img src="https://storage.googleapis.com/a1aa/image/K155lSZz5ZLd3FEk38rGuNDC7pyxLX6JJTZLRzW6buE.jpg"
                        alt="User profile picture" className="rounded-circle" height="40" width="40" />
                </div>
            </header>
            
            <div className="flex-grow-1 p-4">

                <div className="row g-3 mb-4">
            
                    <div className="col-md-6 col-lg-3">
                        <div className="card p-4 rounded shadow hover:shadow-xl transition-shadow duration-300">
                            <div className="d-flex justify-content-between align-items-center">
                                <div>
                                    <h2 className="h5 font-weight-bold text-dark">Total Sales</h2>
                                    <p className="text-muted">Monthly Overview</p>
                                </div>
                                <div className="text-primary display-4">
                                    <i className="fas fa-chart-line"></i>
                                </div>
                            </div>

                        </div>
                    </div>
            
                    <div className="col-md-6 col-lg-3">
                        <div className="card p-4 rounded shadow hover:shadow-xl transition-shadow duration-300">
                            <div className="d-flex justify-content-between align-items-center">
                                <div>
                                    <h2 className="h5 font-weight-bold text-dark">New Users</h2>
                                    <p className="text-muted">Monthly Overview</p>
                                </div>
                                <div className="text-success display-4">
                                    <i className="fas fa-user-plus"></i>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-6 col-lg-3">
                        <div className="card p-4 rounded shadow hover:shadow-xl transition-shadow duration-300">
                            <div className="d-flex justify-content-between align-items-center">
                                <div>
                                    <h2 className="h5 font-weight-bold text-dark">Active Projects</h2>
                                    <p className="text-muted">Current Status</p>
                                </div>
                                <div className="text-warning display-4">
                                    <i className="fas fa-tasks"></i>
                                </div>
                            </div>
                        </div>
                    </div>
            
                    <div className="col-md-6 col-lg-3">
                        <div className="card p-4 rounded shadow hover:shadow-xl transition-shadow duration-300">
                            <div className="d-flex justify-content-between align-items-center">
                                <div>
                                    <h2 className="h5 font-weight-bold text-dark">Support Tickets</h2>
                                    <p className="text-muted">Monthly Overview</p>
                                </div>
                                <div className="text-danger display-4">
                                    <i className="fas fa-life-ring"></i>
                                </div>
                            </div>
                        </div>
                    </div>
            
                    <div className="col-md-6 col-lg-3">
                        <div className="card p-4 rounded shadow hover:shadow-xl transition-shadow duration-300">
                            <div className="d-flex justify-content-between align-items-center">
                                <div>
                                    <h2 className="h5 font-weight-bold text-dark">Revenue</h2>
                                    <p className="text-muted">Monthly Overview</p>
                                </div>
                                <div className="text-purple display-4">
                                    <i className="fas fa-dollar-sign"></i>
                                </div>
                            </div>
                        </div>
                    </div>
            
                    <div className="col-md-6 col-lg-3">
                        <div className="card p-4 rounded shadow hover:shadow-xl transition-shadow duration-300">
                            <div className="d-flex justify-content-between align-items-center">
                                <div>
                                    <h2 className="h5 font-weight-bold text-dark">Completed Tasks</h2>
                                    <p className="text-muted">Monthly Overview</p>
                                </div>
                                <div className="text-teal display-4">
                                    <i className="fas fa-check-circle"></i>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="row g-3">
                    <div className="col-lg-8">
                        <div className="bg-white p-3 rounded shadow chart_box">
                            <h2 className="fs-5 fw-semibold mb-3">Monthly Progress Report</h2>
                            <img src="https://storage.googleapis.com/a1aa/image/DJmhlKF9helSpA4Kz0vugKUISWad6ofO82rmsC01wl4.jpg"
                                alt="Monthly Progress Report Chart" className="img-fluid" />
                        </div>
                    </div>
                    <div className="col-lg-4">
                        <div className="bg-white p-3 rounded shadow">
                            <h2 className="fs-5 fw-semibold mb-3">Today's Report</h2>
                            <div className="text-secondary">
                                <p className="mb-2">Today's Report: <span className="float-end">TK</span></p>
                                <p className="mb-2">Total Sales: <span className="float-end">$0.00</span></p>
                                <p>Total Purchase: <span className="float-end">$0.00</span></p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  );
}

export default Dashboard;
