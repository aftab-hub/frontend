
const Home = ()=>{


    return(
        <>
        <section className="homeContainer">
        <div className="container">
        <h1  style={{fontWeight: "bold", color : "#ededed", fontSize: "4vmax"}}>Hi, I'm Jocab Aiden</h1>
        <div className="text-animate"><h3>FullStack Web Developer</h3></div>
        <p style={{color : "#ededed", fontSize : "2.9vh",letterSpacing: "1.5px"}}>I'm passionate and aspiring FullStack Web Developer with eagerness of learning new things that enhance my Knowldge and skills in Software development.</p>
        <div className="btnContainer">
            <button className="btn" >Hire Me</button>
            <button className="btn" >Let's Talk</button>
        </div>

        <div className="homeIcons" >
            <a href="#"><i className='bx bxl-facebook rounded' ></i></a>
            <a href="#"><i className='bx bxl-instagram rounded'></i></a>
            <a href="#"><i className='bx bxl-linkedin rounded' ></i></a>
        </div>
            </div>
            <div className="background-imgHover"></div>
        </section>
          
        </>
    )
}

export default Home