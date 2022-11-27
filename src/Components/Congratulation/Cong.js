import React from 'react'
import { Link } from 'react-router-dom'
import './Cong.css'
import {MdDoneOutline} from 'react-icons/md'



function Cong() {
  return (
    <section className="cong">
      <div className="container">
        <div className="row justify-content-center">
          <div className="congPop px-5 col-md-5 col-10">
            <h3>Thank you</h3>
            <p className='text-center fs-5 fw-bold'>Your purchase has been completed successfully. Thank you</p>
            <Link className="back" to="/">
              Go Back
            </Link>
            <div className='done'>
                <MdDoneOutline className='doneIcon'/>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Cong