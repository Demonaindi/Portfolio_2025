import Globe from "react-globe.gl";
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
                    <div className="grid-container ">
                        <img src="assets/AnimeFace.jpeg" alt="grid-1" className="h-52 w-42 mt-10 place-self-center object-contain rounded-full" />

                        <div className="mt-10">
                            <p className="grid-headtext">Demian Onaindi</p>
                            <p className="grid-subtext">Líder Técnico especializado en diagnóstico electrónico avanzado y gestión integral de soporte técnico para los 5 entornos operativos de TEXA (CAR, TRUCK, OHW, BIKE y MARINE). Perfil complementado con sólida formación en desarrollo de software, adquisición de datos, monitoreo en tiempo real y continuidad operativa.
                            </p>
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
                            <img src="assets/SQL.png" alt="grid-2" className="h-10 w-fit" />
                        </div>

                        <div className="mt-28">
                            <p className="grid-headtext">Habilidades</p>
                            <p className="grid-subtext">
                                Diagnóstico electrónico vehicular avanzado (CAN-Bus / SAE J1939, Euro 5/6), liderazgo técnico L2/L3, capacitación y masterclasses. Desarrollo de software para sistemas de escritorio, web y servicios industriales, bases de datos relacionales e integración de APIs en tiempo real.
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
                                    text: 'San Nicolás de los Arroyos, Buenos Aires',
                                }]}
                            />
                        </div>
                        <div>
                            <p className="grid-headtext">San Nicolás de los Arroyos, Argentina</p>
                            <p className="grid-subtext">Base en Buenos Aires con capacidad de trabajo remoto y cobertura técnica regional. Idiomas: Español (nativo) e Inglés (intermedio / hábil).</p>
                        </div>
                    </div>
                </div>

                <div className="xl:col-span-2 xl:row-span-2">
                    <div className="grid-container">
                        <img src="assets/grid3.png" alt="grid-3" className="w-full sm:h-[266px] h-fit object-contain" />

                        <div>
                            <p className="grid-headtext">Educación y capacitaciones</p>
                            <p className="grid-subtext">
                                UTN - FRSN: Técnico Universitario en Programación (en curso). Instructor TEXA / Sabecort Sport (10/2026): Masterclass Sistemas de Postratamiento EURO 5 y EURO 6. Microsoft Learn (08/2023 – 10/2023): análisis, diseño de sistemas y POO. AlgoSTEM Inc. (2023): Python Intermediate Level.
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
                            <p className="text-center text-white-600 text-sm">+54 9 336 434 2637</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default About
