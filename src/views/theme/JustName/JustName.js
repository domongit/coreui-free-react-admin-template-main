import React from 'react';

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
    CCarouselItem,
  } from '@coreui/react'
  import houseboatImg from 'src//assets/images/houseBoat.jpg'
  import anandhamLogo from 'src/assets/images/ResortLogo2.jpg'
  import menuitem1 from 'src/assets/images/menuPage1.jpg'
  import menuitem2 from 'src/assets/images/menuPage2.jpg'
  import menuitem3 from 'src/assets/images/menuPage3.jpg'
const JustName = () => {
return( 
    <CCard className="mb-4">
    <CCardBody>
     
      <CRow>
      <CCol xs={12}>
        <CCard className="mb-4">
          {/* <CCardHeader>
            <strong>Carousel</strong> <small>Slide only</small>
          </CCardHeader> */}
          <CCardBody>
            <p className="text-medium-emphasis small">Welcome To Anandam resorts</p>
            
              <CCarousel>
                <CCarouselItem>
                  <img className="d-block w-50" src={menuitem1} alt="slide 1" />
                  <CCarouselCaption className="d-none d-md-block">
                    <h5>First Menu</h5>
                    <p>please call us</p>
                </CCarouselCaption>
                </CCarouselItem>
                <CCarouselItem>
                  <img className="d-block w-50" src={menuitem2} alt="slide 2" />
                  <CCarouselCaption className="d-none d-md-block">
                    <h5>second Menu</h5>
                    <p>please call us</p>
                </CCarouselCaption>
                </CCarouselItem>
                <CCarouselItem>
                  <img className="d-block w-50" src={menuitem3} alt="slide 3" />
                  <CCarouselCaption className="d-none d-md-block">
                    <h5>Third Menu</h5>
                    <p>please call us</p>
                </CCarouselCaption>
                </CCarouselItem>
              </CCarousel>
         
          </CCardBody>
        </CCard>
      </CCol>
      </CRow>
    </CCardBody>
    </CCard>
)
}
export default JustName
