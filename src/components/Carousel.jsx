import React from 'react'
import image1 from '../assets/img/02.jpg'
import image2 from '../assets/img/03.jpg'
import '../css/carousel.css'

const Carousel = () => {
  return (
    <>
        <div id="carouselExampleFade" className="carousel slide carousel-fade" data-bs-ride="carousel">
  <div className="carousel-inner container-carousel">
    <div className="carousel-item active">
      <img src={image1} className="d-block w-100" alt="../"/>
    </div>
    <div className="carousel-item">
      <img src={image2} className="d-block w-100" alt="..."/>
    </div>
  </div>
  <div className="overlay">
    <div className='h-100 d-flex flex-column align-items center justify-content-center p-3 text-white'>
        <h3 className='text-center'>97i, conoce al robot que hara tu vida mas facil</h3>
        <button className='btn btn-outline-white btn-lg'>Ver mas</button>
    </div>
  </div>
  {/* <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="prev">
    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Previous</span>
  </button>
  <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="next">
    <span className="carousel-control-next-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Next</span>
  </button> */}
</div>
    </>
  );
}

export default Carousel