import { useState } from "react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/solid";
import logo from "@/assets/logo.png";
import Link from "./Link";
import { SelectedPage } from "@/shared/types";
import useMediaQuery from "@/hooks/useMediaQuery";
import ActionButton from "@/shared/ActionButton";

type Props = {
    selectedPage: SelectedPage;
    setSelectedPage: (value: SelectedPage) => void
};

const NavBar = ({ selectedPage, setSelectedPage }: Props) => {
    const [isToggled, setIsToggled] = useState<boolean>(false);

    const flexBetween = "flex items-center justify-between";
    const isAboveMedium = useMediaQuery("(min-width: 1060px)");

    return (
        <nav>
            <div className={`${flexBetween} fixed top-0 z-30 w-full py-6`}>
                <div className={`${flexBetween} mx-auto w-5/6`}>
                    <div className={`${flexBetween} w-full gap-16`}>
                        <div>
                            <img style={{ width: 110 }} src={logo} alt="logo" />
                            <div className="fz-2 text-lg font-bold">BodyRevolution</div>
                        </div>

                        {isAboveMedium ?
                            (<div className={`${flexBetween} w-full`}>
                                <div className={`${flexBetween} gap-8 text-sm`}>
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
                                    className="rounded-full bg-purple-300 p-2"
                                    onClick={() => { setIsToggled(!isToggled) }}
                                >
                                    <Bars3Icon className="h-6 w-6" />
                                </button>
                            )}
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default NavBar;
