<style>
body {
      position: relative;
    
  }
  .affix {
      top:0;
      width: 100%;
      z-index: 9999 !important;
  }
  .navbar {
      margin-bottom: 0px;
  }

  .affix ~ .container-fluid {
     position: relative;
     top: 50px;
  
  }
  #section1 {
    padding-top:50px;
    min-height:570px;
    max-height: auto;
    color: #fff;
    background-color: #737373;
}
  #section2 {
    padding-top:50px;
    min-height:700px;
    color: #fff;
    background-color: #4d4d4d;
}
  #section3 {
    height:100px;
    color: #fff;
    background-color: #262626;
    overflow: hidden;
}
#section4 {
    padding-top:13px;
    min-height:50px;
    max-height: 80px;
    color: #fff;
    background-color: #000000;
    text-align: center;

}

h1 {
  font-size: 2.5em;
  
}

#aboutme {
  background-color: #737373;
  border: none;
}

#headshot {
  background-color: #737373;
  border: none;
  
}


#photo1 {
  max-height: 400px;
  padding-top: 30px;
}
.portfolio img {
  max-height: 30%;
}

.portfolio-well {
 background-color: #4d4d4d;
 border: none;
}

ul {
  list-style: none;
  
}



i {
  text-align: center;
  float: left;
  padding: 35px 20px 20px 0;
}

#statement {
  padding-top: 12px;
  font-size: 1.3em;
  background: #262626;
  border: none;
  color: #FFFFFF;
}

@media screen and (max-width: 480px) {
  #container, #header, #content, #footer {
    float: none;
    width: auto;
  }
 #subtitle, #share, #slider, #sidebar{
    display:none;
  }
  p{ font-size: 1.4em; }
}

.navbar-fixed-top li a:hover {
    color: #444444;
    font-weight: bold;
    font-size: 18px;
}

.portfolio-well img:hover {
    background-color: #AEABA4;
    color: #ffffff;
    opacity: 0.5;
    filter: alpha(opacity=50);
  filter: gray; /* IE6-9 */
  filter: grayscale(1); /* Microsoft Edge and Firefox 35+ */
  -webkit-filter: grayscale(1); /* Google Chrome, Safari 6+ & Opera 15+ */
}

</style>


<link href="//maxcdn.bootstrapcdn.com/font-awesome/4.2.0/css/font-awesome.min.css" rel="stylesheet">

<body data-spy="scroll" data-target=".navbar" data-offset="50">

<nav class="navbar navbar-inverse navbar-fixed-top">
  <div class="container-fluid">
    <div class="navbar-header">
        <button type="button" class="navbar-toggle" data-toggle="collapse" data-target="#myNavbar">
          <span class="icon-bar"></span>
          <span class="icon-bar"></span>
          <span class="icon-bar"></span>
      </button>
      <a class="navbar-brand" href="#">Spencer Arias - Front End Developer</a>
    </div>
    <div>
      <div class="collapse navbar-collapse" id="myNavbar">
        <ul class="nav navbar-nav">
          <li><a href="#section1">About Me</a></li>
          <li><a href="#section2">Portfolio</a></li>
          <li><a href="#section3">Contact</a></li>
         
        </ul>
      </div>
    </div>
  </div>
</nav>

<div id="section1" class="container-fluid">
  <h1>About me</h1>
  <div class="row">
     <div class="col-md-6">
  <div class="well" id="aboutme">
  <p>Hello, my name is Spencer and I am a Composer who has decided to learn how to code to expand my knowledge base. I am having a lot of fun. Keep an eye out below at my portfolio, as I keep woking on Free Code Camp. Actively looking for oppurtunities!</p> 

</div></div>
        <div class="col-md-6">
  <div class="well" id="headshot">
    <img src="http://media.virbcdn.com/cdn_images/resize_1024x1024/24/84791dede0387dff-Arias1.jpg" id="photo1"></img>
  </div>
</div>
  </div>
  </div>
<div id="section2" class="container-fluid">
  <h1>Portfolio</h1>
  <p>There are projects I have worked on using freecodecamp, as well as acting as the webmaster for.</p>
  
  <div class="portfolio">
    <div class="row">
    <div class="col-md-6">

      <div class="well portfolio-well">
   <a href="http://codepen.io/slarias/full/rLbamx/" target='_blank'><img src="https://github.com/slarias/Portfolio/blob/master/Weather%20App.png?raw=true" class="img-responsive" alt ="Weather App"></img></a>
      </div>
    </div>
    <div class="col-md-6">

      <div class="well portfolio-well" >
        <a href="http://codepen.io/slarias/full/xOBaOA/" target='_blank'><img src="https://github.com/slarias/Portfolio/blob/master/Music%20Quote.png?raw=true" class="img-responsive" alt="Random Music Quotes"></img></a>
      </div>
    </div>
  </div>
    
    <div class="row">
    <div class="col-md-6">

      <div class="well portfolio-well" >
   <a href="http://codepen.io/slarias/full/rLqqgx/" target='_blank'><img src="https://github.com/slarias/Portfolio/blob/master/Screen%20Shot%202016-08-06%20at%208.57.44%20PM.png?raw=true" class="img-responsive" alt="Chopin Tribute Page"></img></a>
      </div>
    </div>
    <div class="col-md-6">

      <div class="well portfolio-well" id="right-well">
        <a href="http://SpencerAriasMusic.com" target='_blank'><img src="https://github.com/slarias/Portfolio/blob/master/Screen%20Shot%202016-08-06%20at%209.01.53%20PM.png?raw=true" class="img-responsive" alt="Composer Website"></img></a>
      </div>
    </div>
  </div>
    <div class="row">
    <div class="col-md-6">

      <div class="well portfolio-well">
   <a href="http://aepexcontemporary.org" target="_blank"><img src="https://github.com/slarias/Portfolio/blob/master/Screen%20Shot%202016-08-06%20at%209.06.45%20PM.png?raw=true" class="img-responsive" alt="ÆPEX Contemporary Performance"></img></a>
      </div>
    </div>
    <div class="col-md-6">

      <div class="well portfolio-well">
        <a href="#"><img src="https://github.com/slarias/Portfolio/blob/master/Work%20in%20Progress.png?raw=true" class="img-responsive" alt="Coming Soon!"></img></a>
      </div>
    </div>
  </div>
</div>
</div>
</div>
<div id="section3" class="container-fluid">
  
  
  
  <ul class="social">
          	
                 <ul class="social">
                   <li><a href="https://twitter.com/SpencerArias" target='_blank'><i class="fa fa-twitter fa-3x" id="Tw"></i></li>
<li><a href="https://www.facebook.com/sarias" target='_blank'><i class="fa fa-facebook fa-3x" id="fb"></i></li>
<li><a href="https://www.linkedin.com/in/spencerarias" target='_blank'><i class="fa fa-linkedin fa-3x" id="li"></i></li>
<li><a href="mailto:slarias@me.com" id="em"><i class="fa fa-envelope fa-3x"></i></li>
<li><a href="http://www.SpencerAriasMusic.com" target='_blank'><i class="fa fa-music fa-3x" id="ws"></i></a></li>
                    		
        </ul>
    </div>
  
   
      
    </div>
    </div>
  
  <div id="section4" class="container-fluid">
  <p>©Copyright 2016 - <a href="https://codepen.io/slarias/full/YWBQdL/" target='_blank'>Spencer Arias</p>
  </div>
</div>
 </div>
</div>


</body>
</html>
