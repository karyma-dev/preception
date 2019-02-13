import React from 'react'

const Testimonial = ({ quote, quoter, job }) => (
  <div className='testinomal-section-part'>
    <q className='testinomal-section-part--quote'>
      <em>{ quote }</em>
    </q>
    <div className="line-orange line-orange-testimonial" />
    <p className='testinomal-section-part--quoter'>
      { quoter } - { job }
    </p>

  </div>

)

export default Testimonial