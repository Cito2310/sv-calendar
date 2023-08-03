interface props {
    type: "Forest" | "Town" | "Beach" | "BusStop" | "Mountain" | "Railroad";
}

export const PathVillagePage = ({ type }: props) => {
    return (
        <section className="bg-[#FFCB7B] min-h-screen pt-10 pb-4" >
            <img src={`assets/path_village_img/${type}.png`} className="m-auto w-[90vw] border-board" />
        </section>
    )
}