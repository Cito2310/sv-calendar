interface props {
    type: "Forest" | "Town" | "Beach" | "BusStop" | "Mountain" | "Railroad";
}

export const PathVillagePage = ({ type }: props) => {
    return (
        <>

        <img src={`assets/path_village_img/${type}.png`} className="w-screen" />
        </>
    )
}