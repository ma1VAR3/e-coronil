import React from 'react'

const Home =()=>{
    return(
        <div>
        
        <header>
        <div id="carouselExampleCaptions" class="carousel slide" data-ride="carousel">
            <ol class="carousel-indicators">
                <li data-target="#carouselExampleCaptions" data-slide-to="0" class="active"></li>
                <li data-target="#carouselExampleCaptions" data-slide-to="1"></li>
                <li data-target="#carouselExampleCaptions" data-slide-to="2"></li>
            </ol>
            <div class="carousel-inner">
                <div class="carousel-item active">
                    <img src="https://ec.europa.eu/programmes/creative-europe/sites/default/files/covid19-cdc-unsplash.jpg" class="d-block w-100" alt="img 1"/>
                    <div class="carousel-caption d-none d-md-block">
                        <h2>Corona is bad</h2>
                        <p>Yes.</p>
                    </div>
                </div>
                <div class="carousel-item">
                    <img src="https://images.indianexpress.com/2020/03/Ramdas-Athawale-go-corona-video-1024.jpg" class="d-block w-100" alt="img 2"/>
                    <div class="carousel-caption d-none d-md-block">
                        <h2>Stay at home</h2>
                        <p>Yes.</p>
                    </div>
                </div>
                <div class="carousel-item">
                    <img src="https://2zadtx2dccrd43bc0r18hhqj-wpengine.netdna-ssl.com/wp-content/uploads/sites/8/2020/02/protective-face-mask_G_1206378610-860x573.jpg" class="d-block w-100" alt="img 3"/>
                    <div class="carousel-caption d-none d-md-block">
                        <h2>Wear mask</h2>
                        <p>Yes.</p>
                    </div>
                </div>
            </div>
            <a class="carousel-control-prev" href="#carouselExampleCaptions" role="button" data-slide="prev">
                <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                <span class="sr-only">Previous</span>
            </a>
            <a class="carousel-control-next" href="#carouselExampleCaptions" role="button" data-slide="next">
                <span class="carousel-control-next-icon" aria-hidden="true"></span>
                <span class="sr-only">Next</span>
            </a>
        </div>
        </header>
        
        <br></br>
        <br></br>
        <br></br>
        
        
        <section class="main">
            <div class="container mt-2">
                <h1 class="text-center mb-4 p-4 text-secondary">News</h1>
                <div class="row">
                    <div class="card-columns">
                        <div class="card shadow border-0">
                            <img class="card-img-top" src="https://m.hindustantimes.com/rf/image_size_444x250/HT/p2/2020/10/09/Pictures/medical-syringe-illustration-bottles-labeled-sticker-vaccine_8d881c32-09fa-11eb-9735-285f94a4b56e.jpg" alt="Card image cap"/>
                            <div class="card-body">
                                <h5 class="card-title">EU seals new deal, no Oxford vaccine side effects reported in India</h5>
                                <p class="card-text">The European Commission has sealed a deal with Johnson & Johnson for the supply of its potential Covid-19 vaccine for up to 400 million people.</p>
                                <footer class="blockquote-footer">
                                    <small class="text-muted">Source <cite title="Source Title">hindustantimes.com</cite></small>
                                </footer>                            
                            </div>
                        </div>
            
                        <div class="card shadow border-0">
                            <img class="card-img-top" src="https://c.ndtvimg.com/2020-10/2e9fb018_bloomberg-coronavirus_625x300_09_October_20.jpg"/>
                            <div class="card-body">
                                <h5 class="card-title">Even Mild COVID-19 Infections Can Leave People Sick for Months: Study</h5>
                                <p class="card-text">Two-thirds of patients who had a mild-to-moderate case of Covid-19 reported symptoms 60 days after falling ill, when more than a third still felt sick or in a worse condition than when their coronavirus infection began.</p>
                                <footer class="blockquote-footer">
                                    <small class="text-muted">Source <cite title="Source Title">ndtv.com</cite></small>
                                </footer> 
                            </div>
                        </div>

                        <div class="card shadow border-0">
                            <img class="card-img-top" src="https://s3.india.com/wp-content/uploads/2018/08/19navratri-dandiya-garba.jpg"/>
                            <div class="card-body">
                                <h5 class="card-title">No Garba Due to Coronavirus, Gujarat Government Issues SOPs For Navratri 2020</h5>
                                <p class="card-text">No garba event will be permitted in Gujarat during Navratri, starting from October 17, the state government said on Friday.</p>
                                <footer class="blockquote-footer">
                                    <small class="text-muted">Source <cite title="Source Title">india.com</cite></small>
                                </footer> 
                            </div>
                        </div>
                    </div>
                </div>
            </div> 
        </section>
        
        <br></br>
        <br></br>
        <br></br>
        
        <blockquote class="blockquote text-center">
            <p class="mb-0">This is best website ever</p>
            <footer class="blockquote-footer">by <cite title="Source Title">Team Unagi</cite></footer>
        </blockquote>
        
        <br></br>
        <br></br>
        <br></br>
        
        <div class="container contact">
            <div class="row">
                <div class="col-md-3">
                    <div class="contact-info">
                        <img src="https://image.ibb.co/kUASdV/contact-image.png" alt="image"/>
                        <h2>Contact Us</h2>
                        <h4>We would love to hear from you !</h4>
                    </div>
                </div>
                <div class="col-md-9">
                    <div class="contact-form">
                        <div class="form-group">
                        <label class="control-label col-sm-2" for="fname">First Name:</label>
                        <div class="col-sm-10">          
                            <input type="text" class="form-control" id="fname" placeholder="Enter First Name" name="fname"/>
                        </div>
                        </div>
                        <div class="form-group">
                        <label class="control-label col-sm-2" for="lname">Last Name:</label>
                        <div class="col-sm-10">          
                            <input type="text" class="form-control" id="lname" placeholder="Enter Last Name" name="lname"/>
                        </div>
                        </div>
                        <div class="form-group">
                        <label class="control-label col-sm-2" for="email">Email:</label>
                        <div class="col-sm-10">
                            <input type="email" class="form-control" id="email" placeholder="Enter email" name="email"/>
                        </div>
                        </div>
                        <div class="form-group">
                        <label class="control-label col-sm-2" for="comment">Comment:</label>
                        <div class="col-sm-10">
                            <textarea class="form-control" rows="5" id="comment"></textarea>
                        </div>
                        </div>
                        <div class="form-group">        
                        <div class="col-sm-offset-2 col-sm-10">
                            <button type="submit" class="btn btn-black">Submit</button>
                        </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <br></br>
        <br></br>
        <br></br>
        </div>
    )
}

export default Home;