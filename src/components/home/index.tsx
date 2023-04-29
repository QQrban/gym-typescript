import useMediaQuery from "@/hooks/useMediaQuery";
import { SelectedPage } from "@/shared/types";
import ActionButton from "@/shared/ActionButton";
import people from "@/assets/home-people.png";
import bgcircle from "@/assets/back-circle.png";
import AnchorLink from "react-anchor-link-smooth-scroll";
import sponsorAdidas from "@/assets/sponsorAdidas.png"
import sponsorBaseball from "@/assets/sponsorBaseball.png"
import sponsorPepsi from "@/assets/sponsorPepsi.png"
import sponsorSteadyGo from "@/assets/sponsorSteadyGo.png"
import sponsorRace from "@/assets/sponsorRace.png"
import smoke from "@/assets/smoke1.png";

type Props = {
    setSelectedPage: (value: SelectedPage) => void
}

const Home = ({ setSelectedPage }: Props) => {

    const isAboveMedium = useMediaQuery("(min-width:1060px)");

    return (
        <section
            id="home"
            className="gap-16 py-10 md:h-full"
        >
            <div className="flex md:flex-row flex-col mx-auto w-5/6 items-center justify-center md:h-5/6 relative">
                <div className="z-10 mt-10 md:mt-25 md:basis-3/5  flex flex-col items-center md:items-start md:order-1 order-2">
                    <div className="w-5/6 md:text-left text-center">
                        <h2
                            className="text-4xl md:text-7xl text-transparent"
                            style={{ WebkitTextStroke: '1px white' }}
                        >
                            BODY
                            <div className="mt-3">REVOLUTION</div>
                        </h2>
                        <p className="leading-7 mt-5 text-base md:text-xl sm:text-lg xs:text-lg">Achieve your fitness goals with our state-of-the-art gym and expert trainers. Our dynamic workout programs and supportive community will help you unleash your potential and make progress towards your ideal self</p>
                    </div>
                    <div className="flex items-center gap-8 mt-5">
                        <ActionButton setSelectedPage={setSelectedPage}>
                            Join Now
                        </ActionButton>
                        <AnchorLink
                            className="text-sm font-bold text-purple-100 hover:text-purple-400"
                            onClick={() => setSelectedPage(SelectedPage.Contact)}
                            href={`#${SelectedPage.Contact}`}
                        >
                            <div>Learn More</div>
                        </AnchorLink>
                    </div>
                </div>
                <div className="relative md:mt-0 -mt-5 sm:-mt-14 xs:-mt-20 md:order-2 order-1">
                    <div className="absolute z-5 w-[250px] md:w-[350px] sm:w-[350px] xs:w-[350px] top-[50%] left-[50%] -translate-y-1/2 -translate-x-1/2">
                        <img src={bgcircle} alt="background-element" />
                    </div>
                    <div className="z-10 relative">
                        <img src={people} alt="people" />
                    </div>
                </div>
                <div className="absolute rotate-180 brightness-200">
                    <img src={smoke} alt="bg-element" />
                </div>
            </div>
            {isAboveMedium && (
                <div className="mt-7 relative">
                    <div className="flex gap-16 items-center justify-center bg-purple-300 p-2">
                        <div className="w-28">
                            <img src={sponsorAdidas} alt="sponsor-adidas" />
                        </div>
                        <div className="w-28">
                            <img src={sponsorBaseball} alt="sponsor-baseball" />
                        </div>
                        <div className="w-32">
                            <img src={sponsorPepsi} alt="sponsor-pepsi" />
                        </div>
                        <div className="w-32">
                            <img src={sponsorSteadyGo} alt="sponsor-steady" />
                        </div>
                        <div className="w-32">
                            <img src={sponsorRace} alt="sponsor-race" />
                        </div>
                    </div>
                </div>
            )}
        </section>
    )
}

export default Home;