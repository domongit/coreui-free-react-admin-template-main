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
  const styles = {
    margin: 'auto'  
  };

const Menu=()=>{
    return (
    <CCard className="mb-4">
    <CCardBody>
     
      <CRow>
      <CCol xs={12}>
        <CCard className="mb-4" style={styles}>
          {/* <CCardHeader>
            <strong>Carousel</strong> <small>Slide only</small>
          </CCardHeader> */}
          <CCardBody>
          
            
              <CCarousel controls  >
                <CCarouselItem>
                  <img  style={{ maxHeight: '500px', objectFit: 'contain' }} className="d-block w-75" src={menuitem1} alt="slide 1" />
                </CCarouselItem>
                <CCarouselItem>
                  <img style={{ maxHeight: '500px', objectFit: 'contain' }} className="d-block w-75" src={menuitem2} alt="slide 1" />
                </CCarouselItem>
                <CCarouselItem>
                  <img  style={{ maxHeight: '500px', objectFit: 'contain' }}className="d-block w-75" src={menuitem3} alt="slide 1" />
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
 
export default Menu
