const ConfirmJadwal= ()=>{
    return(
        <section className="Home">
    <div classname="sidebar">
      <div classname="logo">
        <img src="image/uclinic.png" alt="UNKLAB CLINIC Logo" />
      </div>
      <div classname="menu">
        <a href="#" classname="menu-item">
          <img src="image/jadwal.png" alt="Jadwal Icon" />
          Jadwal
        </a>
        <a href="#" classname="menu-item">
          <img src="image/medis.png" alt="Rekam Medis Icon" />
          Rekam Medis
        </a>
      </div>
    </div>
    <div classname="content">
      <div classname="header">
        <h2>Konfirmasi Jadwal</h2>
      </div>
      <div classname="schedule-list">
        <div classname="schedule-item">
          <div classname="schedule-info">
            <h3>Richard Lahea</h3>
            <p>Keluhan Sakit</p>
          </div>
          <div classname="schedule-action">
            <button>Atur Jadwal</button>
            <p>14:32 WITA</p>
          </div>
        </div>
        <div classname="schedule-item">
          <div classname="schedule-info">
            <h3>Richard Lahea</h3>
            <p>Keluhan Sakit</p>
          </div>
          <div classname="schedule-action">
            <button>Atur Jadwal</button>
            <p>14:32 WITA</p>
          </div>
        </div>
        <div classname="schedule-item">
          <div classname="schedule-info">
            <h3>Richard Lahea</h3>
            <p>Keluhan Sakit</p>
          </div>
          <div classname="schedule-action">
            <button>Atur Jadwal</button>
            <p>14:32 WITA</p>
          </div>
        </div>
        <div classname="schedule-item completed">
          <div classname="schedule-info">
            <h3>Richard Lahea</h3>
            <p>Keluhan Sakit</p>
          </div>
          <div classname="schedule-action">
            <button>Terjadwal</button>
            <p>14:32 WITA</p>
          </div>
        </div>
      </div>
    </div>

</section>
    )
};
export default ConfirmJadwal;