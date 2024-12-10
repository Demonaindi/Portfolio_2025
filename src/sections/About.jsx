import Globe from "react-globe.gl";
import Button from "../components/Button";
import { useState } from "react";
const About = () => {
    const [hasCopied, setHasCopied] = useState(false);
    const handleCopy = () => {
        navigator.clipboard.writeText("demianonaindi919@gmail.com");
        setHasCopied(true);

        setTimeout(() => {
            setHasCopied(false);
        }, 2000);

    }

    return (
        <section className="c-space xl:-mb-28 md:my-10 sm:my-12 my-8" id="About" >
            <div className="grid xl:grid-cols-3 xl:grid-rows-5 md:grid-cols-2 grid-cols-1 gap-5 h-full">
                <div className="col-span-1 xl:row-span-2">
                    <div className="grid-container justify-center">
                        <img src="assets/AnimeFace.jpeg" alt="grid-1" className="h-44 w-42 place-self-center object-contain rounded-full" />

                        <div className="mt-12">
                            <p className="grid-headtext">Demian Onaindi</p>
                            <p className="grid-subtext">Con más de 3 años en el campo de la programacion, estudiando y trabajando en proyectos logre obtener habilidades solidas para desarrollar sistemas completos desde 0</p>
                        </div>
                    </div>
                </div>

                <div className="col-span-1 xl:row-span-2">
                    <div className="grid-container">
                        <div className="grid grid-cols-3 gap-5 ml-8 mt-8 -mb-6 place-content-center">
                            <img src="assets/typescript.png" alt="grid-2" className="h-10 w-fit" />
                            <img src="assets/ReactLogo.png" alt="grid-2" className="h-10 w-fit" />
                            <img src="assets/AngularLogo.png" alt="grid-2" className="h-10 w-fit" />
                            <img src="assets/github.svg" alt="grid-2" className="h-10 w-fit" />
                            <img src="assets/javascript.png" alt="grid-2" className="h-10 w-fit" />
                            <img src="assets/blenderLogo.png" alt="grid-2" className="h-10 w-fit" />
                            <img src="assets/3D.png" alt="grid-2" className="h-12 w-fit" />
                            <img src="assets/Csharp.png" alt="grid-2" className="h-10 ml-4 w-fit" />
                            <img src="assets/tailwindcss.png" alt="grid-2" className="h-10 w-fit" />
                        </div>

                        <div className="mt-28">
                            <p className="grid-headtext">Habilidades</p>
                            <p className="grid-subtext">
                                Me especializo en el desarrollo de sistemas utilizando Angular y C#
                                con un enfoque especial en automatizacion industrial y 3D
                            </p>
                        </div>
                    </div>
                </div>

                <div className="col-span-1 xl:row-span-2">
                    <div className="grid-container">
                        <div className="rounded-3xl w-full sm:h-[300px] h-fit flex justify-center items-center">
                            <Globe
                                height={326}
                                width={326}
                                backgroundColor="rgba(0, 0, 0, 0)"
                                backgroundImageOpacity={0.5}
                                showAtmosphere
                                showGraticules
                                globeImageUrl="//unpkg.com/three-globe/example/img/earth-day.jpg"
                                bumpImageUrl="//unpkg.com/three-globe/example/img/earth-topology.png"
                                labelsData={[{
                                    lat: -33.3335,
                                    lng: -60.2110,
                                    text: 'Argentina, San nicolas de los arroyos',
                                }]}
                            />
                        </div>
                        <div>
                            <p className="grid-headtext">Capacidad de trabajar en cualquier zona horaria</p>
                            <p className="grid-subtext">Con base en argentina y opcion de trabajo remoto a nivel global</p>
                        </div>
                    </div>
                </div>

                <div className="xl:col-span-2 xl:row-span-2">
                    <div className="grid-container">
                        <img src="assets/grid3.png" alt="grid-3" className="w-full sm:h-[266px] h-fit object-contain" />

                        <div>
                            <p className="grid-headtext">Mi pasion por programar</p>
                            <p className="grid-subtext">
                                Disfruto enfrentarme a desafios que ponen a prueba mis habilidades y me impulsan a crecer. Cada proyecto es una oportunidad para superar limites, adquirir nuevos conocimientos y encontrar soluciones innovadoras que marquen la diferencia.
                            </p>
                        </div>
                    </div>
                </div>

                <div className="xl:col-span-1 xl:row-span-2">
                    <div className="grid-container">
                        <img
                            src="assets/grid4.png"
                            alt="grid-4"
                            className="w-full md:h-[306px] sm:h-[276px] h-fit object-cover sm:object-top"
                        />

                        <div className="space-y-2">
                            <p className="grid-subtext text-center">Contactame</p>
                            <div className="copy-container" onClick={handleCopy}>
                                <img src={hasCopied ? 'assets/tick.svg' : 'assets/copy.svg'} alt="copy" />
                                <p className="lg:text-1xl md:text-xl font-medium text-gray_gradient text-white">demianonaindi919@gmail.com</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default About