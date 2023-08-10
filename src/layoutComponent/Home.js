import React from 'react';
import {featureData} from '../data/Data';
import Features from './Features';
import { NavLink, Outlet } from 'react-router-dom';
import ReviewSlide from './ReviewSlide';
import Brands from './Brands';

const Home = () => {
  const activeStyle={
    color:'orange',
    borderBottom: '1px solid orange',
  }
  return (
    <div>
      {/*....Corousel...*/}
      
      <div id="carouselExample" className="carousel slide">
        <div className="carousel-inner">
          <div className="carousel-item active">
            <div className='hero-corousel' style={{}}>
              <img src="/images/watch.jpg" className="d-block vw-100 corousel-img" style={{top: '-600px'}} alt="..." />
              <div className='carousel-text' style={{}}>
                <h5 className='carousel-h5'>Has just arrived!</h5>
                <h1 className='carousel-h1'>Huge Summer Collection</h1>
                <p className='carousel-p'>Swimwear, Tops, Shorts, Sunglasses and much more...</p>
                <button className='shop-now-btn' style={{}}><NavLink to=""></NavLink>SHOP NOW<i class="bi bi-arrow-right"></i></button>
              </div>
            </div>
          </div>
          <div className="carousel-item">
            <div className='hero-corousel' style={{}}>
              <img src="/images/bag.jpg" className="d-block vw-100 corousel-img" style={{top: '-1000px'}} alt="..." />
              <div className='carousel-text' style={{}}>
                <h5 className='carousel-h5'>Has just arrived!</h5>
                <h1 className='carousel-h1'>Huge Summer Collection</h1>
                <p className='carousel-p'>Swimwear, Tops, Shorts, Sunglasses and much more...</p>
                <button className='shop-now-btn' style={{}}><NavLink to=""></NavLink>SHOP NOW<i class="bi bi-arrow-right"></i></button>
              </div>
            </div>
          </div>
          <div className="carousel-item">
            <div className='hero-corousel' style={{}}>
              <img src="/images/watch1.jpg" className="d-block vw-100 corousel-img" style={{top: '-900px'}} alt="..." />
              <div className="carousel-text" style={{}}>
                <h5 className='carousel-h5'>Has just arrived!</h5>
                <h1 className='carousel-h1'>Huge Summer Collection</h1>
                <p className='carousel-p'>Swimwear, Tops, Shorts, Sunglasses and much more...</p>
                <button className='shop-now-btn' style={{}}><NavLink to=""></NavLink>SHOP NOW<i class="bi bi-arrow-right"></i></button>
              </div>
            </div>
          </div>
        </div>
        <button className="carousel-control-prev" type="button" data-bs-target="#carouselExample" data-bs-slide="prev">
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button className="carousel-control-next" type="button" data-bs-target="#carouselExample" data-bs-slide="next">
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
      
      <div className="container" style={{marginTop:"20px", marginBottom:"15vh", paddingBottom: "1em", borderBottom: "1px solid grey"}}>
        <div className="row">
          {featureData.map(feature=> <Features feature={feature} />)}
        </div>
      </div>
      <div className="container-lg">
      <div className="text-center">
        <p>NEW COLLECTION</p>
        <h1>Best Picks 2023</h1>
        <p style={{margin:'2em 0'}}>Stay cool and stylish with our collection of breathable linen shirts, dresses, and shorts for ultimate comfort, discover<br />all you need for picture-perfect vacation.</p>
      </div>
      <div className="container" style={{marginTop: '10vh', marginBottom:'15vh'}}>
        <div className="row justify-content-evenly">
          <div className="col-4 hover-img" style={{height: "60vh", position:"relative", display:"grid", placeItems:"center", overflow:"hidden"}}>
            <img src="/images/womens dress.jpg" className="d-block w-100" style={{height:"auto", position:"absolute" }} alt="..." />
            <button className='shop-now-btn' style={{position: 'absolute'}}><NavLink to=""></NavLink>SHOP NOW<i class="bi bi-arrow-right"></i></button>
          </div>
          <div className="col-7 hover-img" style={{height: "60vh", position:"relative", display:"grid", placeItems:"center", overflow:"hidden"}}>
            <img src="/images/watch1.jpg" className="d-block w-100" style={{height:"auto", position:"absolute" }} alt="..." />
            <button className='shop-now-btn' style={{position: 'absolute'}}><NavLink to=""></NavLink>SHOP NOW<i class="bi bi-arrow-right"></i></button>
          </div>
        </div>
        <div className="row justify-content-evenly" style={{marginTop:"2em", marginBottom:"2em"}}>
          <div className="col-7 hover-img" style={{height: "60vh", position:"relative", display:"grid", placeItems:"center", overflow:"hidden"}}>
            <img src="/images/jordon.jpg" className="d-block w-100" style={{height:"auto", position:"absolute" }} alt="..." />
            <button className='shop-now-btn' style={{position: 'absolute'}}><NavLink to=""></NavLink>SHOP NOW<i class="bi bi-arrow-right"></i></button>
          </div>
          <div className="col-4 hover-img" style={{height: "60vh", position:"relative", display:"grid", placeItems:"center", overflow:"hidden"}}>
            <img src="/images/shirt3.jpg" className="d-block w-100" style={{height:"auto", position:"absolute" }} alt="..." />
            <button className='shop-now-btn' style={{position: 'absolute'}}><NavLink to=""></NavLink>SHOP NOW<i class="bi bi-arrow-right"></i></button>
          </div>
        </div>
      </div>
      </div>
      <div className="container text-center">
        <div className="row">
          <h1 className="col-12">Top month Sellers</h1>
        </div>
        <div className="row justify-content-center mt-3">
          <NavLink to="/" className="col-auto px-2 mx-2 custom-nav" style= {({isActive})=> isActive? activeStyle: null}>Men</NavLink>
          <NavLink to="/women" className="col-auto px-2 mx-2 custom-nav" style= {({isActive})=> isActive? activeStyle: null}>Women</NavLink>
          <NavLink to="/kids" className="col-auto px-2 mx-2 custom-nav" style= {({isActive})=> isActive? activeStyle: null}>kids</NavLink>
        </div>
      </div>
      <div>
        <Outlet />
      </div>
      <div className="text-center" style={{marginTop:"4em"}}>
        <p className='carousel-h5 mb-3'>Discover more</p>
        <div className='discover-container'>
          <img src='/images/summer.jpg' className='discover-img' alt="..." />
          <h1 className='text-start' style={{position: 'absolute', bottom: '45%', left: '15%'}}>Get -50% from<br /> Summer Collection</h1>
          <button className='shop-now-btn' style={{position: 'absolute', bottom:'35%', left:'15%'}}><NavLink to=""></NavLink>Shop Now <i class="bi bi-arrow-right"></i></button>
        </div>
      </div>
      <ReviewSlide />
      <Brands />
    </div>
  )
}

export default Home;
