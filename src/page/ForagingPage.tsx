interface props {
    type: "Forest" | "Town" | "Beach" | "BusStop" | "Mountain" | "Railroad" | "Backwoods";
}

export const ForagingPage = ({ type }: props) => {
    return (
        <section className="bg-[#FFCB7B] min-h-screen pt-10 pb-4" >
            <img src={`assets/foraging_location_img/${type}.png`} className="m-auto w-[90vw] border-board" />
        </section>
    )
}