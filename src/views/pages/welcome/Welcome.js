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
  CCarouselItem,
} from '@coreui/react'
import houseboatImg from 'src//assets/images/houseBoat.jpg'
import anandhamLogo from 'src/assets/images/ResortLogo2.jpg'

const Welcome=()=>{
    return (
    <CCard className="mb-4">
    <CCardBody>
      {/* <CRow>
        <CCol sm={5}>
          <h4 id="traffic" className="card-title mb-0">
            Traffic
          </h4>
          <div className="small text-medium-emphasis">January - July 2021</div>
        </CCol>
        <CCol sm={7} className="d-none d-md-block">
          <CButton color="primary" className="float-end">
           
          </CButton>
 
        </CCol>
      </CRow> */}
      <CRow>
      <CCol xs={12}>
        <CCard className="mb-4">
          {/* <CCardHeader>
            <strong>Carousel</strong> <small>Slide only</small>
          </CCardHeader> */}
          <CCardBody>
            <p className="text-medium-emphasis large">Welcome To Anandam resorts</p>
            
              <CCarousel>
                <CCarouselItem>
                  <img className="d-block w-50" src={anandhamLogo} alt="slide 1" />
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


export default Welcome
