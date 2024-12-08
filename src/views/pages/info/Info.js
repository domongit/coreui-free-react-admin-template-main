import React from 'react'

import {
  CAvatar,
  CButton,
  CButtonGroup,
  CCard,
  CCardBody,
  CCardFooter,
  CCardHeader,
  CCol,
  CProgress,
  CRow,
  CTable,
  CTableBody,
  CTableDataCell,
  CTableHead,
  CTableHeaderCell,
  CTableRow,
    CCarousel,
  CCarouselCaption,
  CCarouselItem ,
  CContainer
 
} from '@coreui/react'

import { DocsLink } from 'src/components'

const Info=()=>{
return (
  
    <CCard className="mb-4">
     
    <CCardBody>
      <CContainer className="py-5" fluid>
        <h2 className="display-5 fw-bold">About this House</h2>
        <p className="col-md-8 fs-4">
        Welcome to our humble abode! Nestled within luscious greenery and minutes away from the relaxing beach waves, kick your sandals and find peaceful moments in this home away from yours.
        </p>
        <p>
        </p>
        <p>P.S. Remember your breakfast is on us. Enjoy hot breakfast and coffee and tea complimentary with your stay.
        </p>
      </CContainer>
      <CRow className="align-items-md-stretch">
        <CCol md={6}>
          <div className="h-100 p-5 text-white bg-dark rounded-3">
            <h2>The space</h2>
            <p>
            Our very first home, built by my parents in the late 90s.
            </p>
            <p>
            The house has a living room, 2 bedrooms and attached bathrooms with all modern amenities, a dining room, a kitchen and a storage space. The kitchen can be made accessible if needed.  
            </p>
         
          </div>
        </CCol>
        <CCol md={6}>
        <div className="h-100 p-5 text-white bg-dark rounded-3">
            <h2>Other things to note</h2>
            <p>
            You are in the heart of Alappuzha, the perfect balance between the Indian ocean on your west and backwaters on your east
            </p>
             <p>
             Let us help you plan an amazing day at the backwaters with an amazing houseboat ride.
             </p>
             <p>
             As always with the ocean as our backyard, let us help you plan amazing seafood lunches and dinners and seaside attraction.

             </p>
             <p>
                
Please contact the host family for all details.
             </p>
          </div>
        </CCol>
      </CRow>
    </CCardBody>
  </CCard>
)
}
export default Info