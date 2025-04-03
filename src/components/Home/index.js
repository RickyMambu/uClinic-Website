const Home = () => {
    return(
<section className="Home">
<div className="wireframe">
  <div className="sidebar">
    <div className="logo">
      <img src="path/to/unklab_clinic_logo.png" alt="UNKLAB CLINIC Logo" />
    </div>
    <div className="menu">
      <a href="#" className="menu-item">
        <img src="path/to/jadwal_icon.png" alt="Jadwal Icon" />
        Jadwal
      </a>
      <a href="#" className="menu-item">
        <img src="path/to/rekam_medis_icon.png" alt="Rekam Medis Icon" />
        Rekam Medis
      </a>
    </div>
  </div>
  <div className="content">
    <h1>Welcome</h1>
  </div>
</div>
</section>
    )
};


export default Home