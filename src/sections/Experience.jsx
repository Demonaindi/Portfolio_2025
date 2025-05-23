
import { workExperiences } from "../constants"

const Experience = () => {
    return (
        <section className="c-space mb-[6rem]" id="Experience">
            <div className="w-full text-white-600">
                <h3 className="head-text">Mi experiencia laboral</h3>
            </div>

            <div className="work-container">
              
                <div className="work-content">
                    <div className="sm:py-10 py-5 sm:px-5 px-2.5">
                        {workExperiences.map(({ id, name, pos, duration, title, icon }) => (
                            <div key={id} className="work-content_container group">
                                <div className="flex flex-col h-full justify-start items-center py-2">
                                    <div className="work-content_logo">
                                        <img src={icon} alt="logo" className="w-full h-full bg-white-800 rounded-full" />
                                    </div>
                                    <div className="work-content_bar" />
                                </div>

                                <div className="sm:p-5 px-2.5 py-5">
                                    <p className="font-bold text-white-800">{name}</p>
                                    <p className="text-sm mb-5 text-gray-300">{pos}</p>
                                    <p className="text-sm mb-5 text-gray-300">{duration}</p>
                                    <p className="group-hover:text-white transition ease-in-out duration-500 text-gray-300">{title}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Experience