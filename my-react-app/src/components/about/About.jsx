import React from "react"
const About = ()=>{
    return (
        <>
        <section className="aboutSection">
            <div className="container2">
               
            <h2 className="aboutHeading">About <span style={{color:"var(--mainColor)"}}>Me</span></h2>
            </div>
            <div className="about-img">
                <img src="/src/assets/about.jpg" alt="" />
                <span className="circle-spin"></span>
            </div>
                <div className="aboutContainer">
                    <h3>FullStack Web Developer</h3>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus maiores sequi perferendis laboriosam sit assumenda minima voluptatum voluptate id ab ad quod aperiam accusantium totam quasi non cumque, similique quae?</p>
                    <div className="btn-box ">
                        <a href="#">Read More</a>
                    </div>
                </div>
        </section>
        </>
    )
}
export default About