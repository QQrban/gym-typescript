import { useState } from "react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/solid";
import logo from "@/assets/logo.png";
import Link from "./Link";
import { SelectedPage } from "@/shared/types";
import useMediaQuery from "@/hooks/useMediaQuery";
import ActionButton from "@/shared/ActionButton";

type Props = {
    isTop: boolean,
    selectedPage: SelectedPage;
    setSelectedPage: (value: SelectedPage) => void
};

const NavBar = ({ isTop, selectedPage, setSelectedPage }: Props) => {
    const [isToggled, setIsToggled] = useState<boolean>(false);

    const flexBetween = "flex items-center justify-between";
    const isAboveMedium = useMediaQuery("(min-width: 1060px)");

    const navBg = isTop ? "" : "bg-red-950 drop-shadow"

    return (
        <nav>
            <div className={`${navBg} ${flexBetween} fixed top-0 z-30 w-full py-2`}>
                <div className={`${flexBetween} mx-auto w-5/6`}>
                    <div className={`${flexBetween} w-full gap-16`}>
                        <div>
                            <img style={{ width: 55, margin: '0 auto' }} src={logo} alt="logo" />
                            <div className="text-lg font-bold">BeastGYM</div>
                        </div>

                        {isAboveMedium ?
                            (<div className={`${flexBetween} w-full`}>
                                <div className={`${flexBetween} gap-8 uppercase font-bold tracking-wides`}>
                                    <Link
                                        page="Home"
                                        selectedPage={selectedPage}
                                        setSelectedPage={setSelectedPage}
                                    />

                                    <Link
                                        page="Benefits"
                                        selectedPage={selectedPage}
                                        setSelectedPage={setSelectedPage}
                                    />
                                    <Link
                                        page="Our Classes"
                                        selectedPage={selectedPage}
                                        setSelectedPage={setSelectedPage}
                                    />
                                    <Link
                                        page="Contact"
                                        selectedPage={selectedPage}
                                        setSelectedPage={setSelectedPage}
                                    />
                                </div>
                                <div className={`${flexBetween} gap-8`}>
                                    <p>Sign In</p>
                                    <ActionButton setSelectedPage={setSelectedPage}>Become a member</ActionButton>
                                </div>
                            </div>) : (
                                <button
                                    className="rounded-full bg-red-500 p-2"
                                    onClick={() => { setIsToggled(!isToggled) }}
                                >
                                    <Bars3Icon className="h-6 w-6" />
                                </button>
                            )}
                    </div>
                </div>
            </div>

            {!isAboveMedium && isToggled && (
                <div className="fixed right-0 bottom-0 z-40 h-full w-[300px] bg-red-800 drop-shadow-xl transition-all">
                    <div className="flex justify-end p-12">
                        <button onClick={() => setIsToggled(!isToggled)}>
                            <XMarkIcon className="h-8 w-8" />
                        </button>
                    </div>
                    <div className="flex flex-col uppercase font-bold items-center gap-3 text-3xl">
                        <Link
                            page="Home"
                            selectedPage={selectedPage}
                            setSelectedPage={setSelectedPage}
                        />

                        <Link
                            page="Benefits"
                            selectedPage={selectedPage}
                            setSelectedPage={setSelectedPage}
                        />
                        <Link
                            page="Our Classes"
                            selectedPage={selectedPage}
                            setSelectedPage={setSelectedPage}
                        />
                        <Link
                            page="Contact"
                            selectedPage={selectedPage}
                            setSelectedPage={setSelectedPage}
                        />
                    </div>
                </div>
            )}
        </nav>
    );
};

export default NavBar;
