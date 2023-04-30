import useMediaQuery from "@/hooks/useMediaQuery";
import { SelectedPage } from "@/shared/types";
import { motion } from "framer-motion";
import HText from "@/shared/HText";
import smoke from "@/assets/smoke1.png";
import claw from "@/assets/claw-gal.png";
import rhino from "@/assets/rhino.png";
import eagle from "@/assets/tiger.png";
import bgcircle from "@/assets/bg-circle-gal.png";
import Carousel from "./Carousel";

type Props = {
    setSelectedPage: (value: SelectedPage) => void
}

const Gallery = ({ setSelectedPage }: Props) => {

    const isAboveMedium = useMediaQuery("(min-width:1060px)");


    return (
        <section id="gallery" className="w-full py-20 border-y-8  border-red-700 relative">

            <motion.div
                onViewportEnter={() => setSelectedPage(SelectedPage.Gallery)}
            >
                <div
                    className="mx-auto w-5/6 relative"
                >
                    <div className="text-center ">
                        <HText>
                            Beast<span className="text-red-600"> Gallery</span>
                        </HText>

                    </div>
                    <motion.div
                        className="flex flex-col md:flex-row gap-16 items-center justify-center md:w-4/6 mx-auto"
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, amount: 0.5 }}
                        transition={{ delay: 0.2, duration: 0.5 }}
                        variants={{
                            hidden: { opacity: 0, x: -50 },
                            visible: { opacity: 1, x: 0 }
                        }}
                    >
                        <div className="shrink-0 w-[300px] md:w-96 sm:w-96 xs:w-96 relative">
                            <img className="relative z-10 brightness-125" src={rhino} alt="rhino" />
                            <img className="absolute top-0 z-0 opacity-10 brightness-75" src={bgcircle} alt="bg" />
                        </div>
                        {isAboveMedium &&
                            <div className="shrink-0 w-[300px] md:w-96 sm:w-96 xs:w-96 relative">
                                <img className="relative z-10 brightness-125" src={eagle} alt="eagle" />
                                <img className="absolute top-0 z-0 opacity-10 brightness-75" src={bgcircle} alt="bg" />
                            </div>
                        }
                    </motion.div>
                    <Carousel />
                </div>
            </motion.div>
            <div className="absolute brightness-200 rotate-180 top-0 right-0 z-0">
                <img src={smoke} alt="bg-element" />
            </div>
            <div className="absolute bottom-0 left-0 z-0 ">
                <img src={claw} alt="bg-element" />
            </div>
        </section>
    )
}

export default Gallery;