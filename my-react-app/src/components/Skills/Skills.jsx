const Skills = ()=>{

    return(
        <>
        <section className="skills">
            <div className="skills-container">

          <h2>My <span>Skills</span></h2>
          <div className="skills-row">

            <div className="skills-column">
                <h3 className="title">Fronted Development</h3>
                <div className="skills-box">
                    <div className="skills-content">

                        <div className="progress">
                            <h3>HTML <span>70%</span></h3>
                            <div className="bar"><span></span></div>
                        </div>
                        <div className="progress">
                            <h3>CSS <span>60%</span></h3>
                            <div className="bar"><span></span></div>
                        </div>
                        <div className="progress">
                            <h3>JavaScript <span>60%</span></h3>
                            <div className="bar"><span></span></div>
                        </div>
                        <div className="progress">
                            <h3>React js <span>55%</span></h3>
                            <div className="bar"><span></span></div>
                        </div>
                        <div className="progress">
                            <h3>Bootstrap <span>45%</span></h3>
                            <div className="bar"><span></span></div>
                        </div>
                        <div className="progress">
                            <h3>Git & GitHub <span>60%</span></h3>
                            <div className="bar"><span></span></div>
                        </div>
                       
                    </div>
                </div>
            </div>
            <div className="skills-column">
                <h3 className="title">Backend Development</h3>
                <div className="skills-box">
                    <div className="skills-content">

                        <div className="progress">
                            <h3>Node Js <span>65%</span></h3>
                            <div className="bar"><span></span></div>
                        </div>
                        <div className="progress">
                            <h3>Express Js <span>67%</span></h3>
                            <div className="bar"><span></span></div>
                        </div>
                        <div className="progress">
                            <h3>MongoDB <span>60%</span></h3>
                            <div className="bar"><span></span></div>
                        </div>
                        <div className="progress">
                            <h3>Postman <span>50%</span></h3>
                            <div className="bar"><span></span></div>
                        </div>
                            {/* <div className="progress">
                                <h3> <span>70%</span></h3>
                                <div className="bar"><span></span></div>
                            </div>
                            <div className="progress">
                                <h3> <span>70%</span></h3>
                                <div className="bar"><span></span></div>
                            </div>
                            */}
                       
                    </div>
                </div>
            </div>
          </div>
            </div>
        </section>
        </>
    )
}
export default Skills;