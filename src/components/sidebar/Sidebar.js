import React from 'react'
import { Link } from 'react-router-dom'
import './Sidebar.css'

function Sidebar({ children }) {
    return (
        <div className='sidebar'>
            <ul className='sidebar-menu'>
                <Link to={'/'}>
                    <li className='mt-5'>Dashboard</li>
                </Link>
                <Link to={'/category'} >
                    <li className='mt-2'>Category</li>
                </Link>
                <Link to={'/subcategory'} >
                    <li className='mt-2'>Subcategory</li>
                </Link>
                <Link to={'/packing'} >
                    <li className='mt-2'>Packing</li>
                </Link>
            </ul>
            <div className='col-lg-12'>
                <main>{children}</main>
            </div>
        </div>
    )
}

export default Sidebar