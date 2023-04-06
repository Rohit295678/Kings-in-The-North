import React from 'react'
import './Home.css'
import { NavLink } from 'react-router-dom';


function Home() {
    const token = localStorage.getItem("token");
    console.log(token);

  return (
      <>
      <div id="carouselExampleCaptions" className="carousel slide carousel-fade" data-bs-ride="carousel">
        <div className="carousel-indicators">
            <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" className="active"
                aria-current="true" aria-label="Slide 1"></button>
            <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1"
                aria-label="Slide 2"></button>
            <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2"
                aria-label="Slide 3"></button>
        </div>
    
        <div className="carousel-inner">
            <div className="carousel-item active">
                <img src="https://source.unsplash.com/1400x400?doctors" className="d-block w-100 img-fluid" alt="..."/>
                <div className="carousel-caption d-none d-md-block">
                    <h2>Welcome to MEDcentre</h2>
                    <p>Get your appointment fixed within minutes</p>
                </div>
            </div>
            <div className="carousel-item">
                <img src="https://source.unsplash.com/1400x400?medical" className="d-block w-100 img-fluid" alt="tech"/>
                <div className="carousel-caption d-none d-md-block">
                    <h2>The Best Medical Website</h2>
                    <p>Technology News, Development and Trends</p>
                </div>
            </div>
            <div className="carousel-item">
                <img src="https://source.unsplash.com/1400x400?hospitals" className="d-block w-100 img-fluid"
                    alt="..."/>
                <div className="carousel-caption d-none d-md-block">
                    <h2>TrustWorthy Website</h2>
                    <p>Technology News, Development and Trends</p>
                </div>
            </div>
        </div>
        <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions"
            data-bs-slide="prev">
            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Previous</span>
        </button>
        <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions"
            data-bs-slide="next">
            <span className="carousel-control-next-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Next</span>
        </button>
    </div>
   {token &&<div className="container text-center">
      <button className='btn btn-primary my-4'><NavLink to='/doctors' style={{color:'white',textDecoration:'none'}}>Make An Appointment</NavLink></button>
   </div>}
    <div className="container my-4">
        <div className="row mb-2">
            <div className="col-md-6">
                <div
                    className="row g-0 border rounded overflow-hidden flex-md-row mb-4 shadow-sm h-md-250 position-relative bg-light">
                    <div className="col p-4 d-flex flex-column position-static">
                        <h3 className="d-inline-block mb-2 text-primary">Neurologist</h3>
            
                        <div className="mb-1 text-muted">Symptom</div>
                        <p className="card-text mb-auto">These are specialists in the nervous system, which includes the brain, spinal cord, and nerves. They treat strokes, break brain and spinal tumors...</p>
                        <a href="https://www.urmc.rochester.edu/highland/departments-centers/neurology/what-is-a-neurologist.aspx#:~:text=A%20doctor%20who%20specializes%20in,Headache%20disorders" target="blank" className="stretched-link">Continue reading</a>
                    </div>
                    <div className="col-auto d-none d-lg-block">
                        <img className="bd-placeholder-img" width="200" height="250"
                            src="https://bansalhospital.com/wp-content/uploads/2020/09/Neurology-1.jpg"/>
                    </div>
                </div>
            </div>
    
            <div className="col-md-6">
                <div
                    className="row g-0 border rounded overflow-hidden flex-md-row mb-4 shadow-sm h-md-250 position-relative bg-light">
                    <div className="col p-4 d-flex flex-column position-static">
                        <h3 className="d-inline-block mb-2 text-success">Cardiologist</h3>
                        <div className="mb-1 text-muted">Symptom</div>
                        <p className="mb-auto">They’re experts on the heart and blood vessels. You might see them for heart failure, a heart attack, high blood pressure, or an irregular heartbeat...</p>
                        <a href="https://my.clevelandclinic.org/health/articles/21983-cardiologist#:~:text=A%20cardiologist%20is%20a%20physician,Request%20an%20Appointment" className="stretched-link">Continue reading</a>
                    </div>
                    <div className="col-auto d-none d-lg-block">
                        <img className="bd-placeholder-img" width="200" height="250"
                            src="https://www.concilio.com/wp-content/uploads/cardiologie-concilio-votre-conciergerie-medicale_718x452.jpg"/>
                    </div>
                </div>
            </div>
            <div className="col-md-6 ">
                <div
                    className="row g-0 border rounded overflow-hidden flex-md-row mb-4 shadow-sm h-md-250 position-relative bg-light">
                    <div className="col p-4 d-flex flex-column position-static">
                        <h4 className="d-inline-block mb-2 text-warning">Dermatologist</h4>
                        <div className="mb-1 text-muted">Symptom</div>
                        <p className="mb-auto">A dermatologist is a medical doctor who specializes in conditions that affect the skin, hair, and nails. Whether it's rashes, wrinkles, psoriasis, or..</p>
                        <a href="https://www.aad.org/public/fad/what-is-a-derm#:~:text=A%20dermatologist%20is%20a%20medical,skin%20is%20an%20incredible%20organ." className="stretched-link">Continue reading</a>
                    </div>
                    <div className="col-auto d-none d-lg-block">
                        <img className="bd-placeholder-img" width="200" height="250"
                            src="https://source.unsplash.com/510x700?dermatologist"/>
                    </div>
                </div>
            </div>
            <div className="col-md-6">
                <div
                    className="row g-0 border rounded overflow-hidden flex-md-row mb-4 shadow-sm h-md-250 position-relative bg-light">
                    <div className="col p-4 d-flex flex-column position-static">
                        <h4 className="d-inline-block mb-2 text-danger">Gynecologist</h4>
                        <div className="mb-1 text-muted">Symptom</div>
                        <p className="mb-auto">A gynecologist is a doctor who specializes in treatment of diseases in the reproductive organs. A gynecologist is basically concerned with maintaining a...</p>
                        <a href="https://www.apolloclinic.com/blog/the-benefits-of-approaching-a-gynecologist-for-gynecology-disorders/#:~:text=A%20gynecologist%20is%20a%20doctor,specializing%20in%20pregnancy%20and%20childbirth." className="stretched-link">Continue reading</a>
                    </div>
                    <div className="col-auto d-none d-lg-block">
                        <img className="bd-placeholder-img" width="200" height="250"
                            src="https://source.unsplash.com/510x700?gynecologist"/>
                    </div>
                </div>
            </div>
            <div className="col-md-6">
                <div
                    className="row g-0 border rounded overflow-hidden flex-md-row mb-4 shadow-sm h-md-250 position-relative bg-light">
                    <div className="col p-4 d-flex flex-column position-static">
                        <h4 className="d-inline-block mb-2 text-primary">Dentist</h4>
                        <div className="mb-1 text-muted">Symptom</div>
                        <p className="card-text mb-auto">A dentist, also known as a dental surgeon, is a health care professional who specializes in dentistry (the diagnosis, prevention, management...</p>
                        <a href="https://en.wikipedia.org/wiki/Dentist" className="stretched-link">Continue reading</a>
                    </div>
                    <div className="col-auto d-none d-lg-block">
                        <img className="bd-placeholder-img" width="200" height="250"
                            src="https://source.unsplash.com/510x700?dentist"/>
                    </div>
                </div>
            </div>
            <div className="col-md-6">
                <div
                    className="row g-0 border rounded overflow-hidden flex-md-row mb-4 shadow-sm h-md-250 position-relative bg-light">
                    <div className="col p-4 d-flex flex-column position-static">
                        <h4 className="d-inline-block mb-2 text-primary">Surgeon</h4>
                        <div className="mb-1 text-muted">Symptom</div>
                        <p className="card-text mb-auto">In modern medicine, a surgeon is a medical doctor who performs surgery. Although there are different traditions in different times and places, a modern...</p>
                        <a href="https://en.wikipedia.org/wiki/Surgeon" className="stretched-link">Continue reading</a>
                    </div>
                    <div className="col-auto d-none d-lg-block">
                        <img className="bd-placeholder-img" width="200" height="250"
                            src="https://source.unsplash.com/510x700?surgeon"/>
                    </div>
                </div>
            </div>
            <div className="col-md-6">
                <div
                    className="row g-0 border rounded overflow-hidden flex-md-row mb-4 shadow-sm h-md-250 position-relative bg-light">
                    <div className="col p-4 d-flex flex-column position-static">
                        <h5 className="d-inline-block mb-2 text-primary">Ophthalmology</h5>
                        <div className="mb-1 text-muted">Symptom</div>
                        <p className="card-text mb-auto">Ophthalmology is the specialized field of medicine that focuses on the health of the eye. It includes the anatomy, physiology and diseases that may affect the..</p>
                        <a href="https://www.news-medical.net/health/Ophthalmology.aspx#:~:text=Ophthalmology%20is%20the%20specialized%20field,in%20health%20and%20in%20illness." className="stretched-link">Continue reading</a>
                    </div>
                    <div className="col-auto d-none d-lg-block">
                        <img className="bd-placeholder-img" width="200" height="250"
                            src="https://source.unsplash.com/510x700?ophthalmology"/>
                    </div>
                </div>
            </div>
            <div className="col-md-6">
                <div
                    className="row g-0 border rounded overflow-hidden flex-md-row mb-4 shadow-sm h-md-250 position-relative bg-light">
                    <div className="col p-4 d-flex flex-column position-static">
                        <h4 className="d-inline-block mb-2 text-primary">Pediatrics</h4>
                        <div className="mb-1 text-muted">Symptom</div>
                        <p className="card-text mb-auto">Pediatrics is the branch of medicine dealing with the health and medical care of infants, children, and adolescents from birth up to the age of 18...</p>
                        <a href="https://www.news-medical.net/health/What-is-Pediatrics.aspx#:~:text=Pediatrics%20is%20the%20branch%20of,iatros%20%3D%20doctor%20or%20healer)." className="stretched-link">Continue reading</a>
                    </div>
                    <div className="col-auto d-none d-lg-block">
                        <img className="bd-placeholder-img" width="200" height="250"
                            src="https://source.unsplash.com/510x700?pediatrics"/>
                    </div>
                </div>
            </div>
    </div>
    </div>
    <footer className="text-light" style={{backgroundColor: 'black'}}>
  <div className="container py-3">
    <div className="row">
      <div className="col-md-4 my-2">
        <h5>Company</h5>
        <p>About Us</p>
        <p>Careers</p>
      </div>
      <div className="col-md-4 my-2">
        <h5>Need Help?</h5>
        <p>Visit HelpCenter</p>
        <p>Share Feedback</p>
      </div>
      <div className="col-md-4 my-2">
        <h5>View Website in</h5>
        <p>English</p>
      </div>
    </div>
    <hr/>
    <p className="text-center">Copyright &copy; 2023.All Rights Are Reserved</p>
    <span className="text-center mx-2">Term of Use</span>
    <span className="text-center mx-2">Private Policy</span>
    <span className="text-center mx-2">FAQ</span>
    <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRZZaypJ9gLlWdjgFSFIETDdx0AnWZdE5mRoQ&usqp=CAU' style={{marginLeft: '90%',width: '15%',height: '15%'}} alt=''/>


  </div>
</footer>
    </>
  )
}

export default Home
