import { DropdownNavbar } from "./DropdownNavbar"

export const TopBar = () => {
    return (
        <nav className="fixed w-screen flex bg-gray-900 text-white px-3 z-40">
            <DropdownNavbar basePath="/pathVillage" label="Path Village" options={[
                { label: "Beach", path: "/Beach" },
                { label: "Bus Stop", path: "/BusStop" },
                { label: "Forest", path: "/Forest" },
                { label: "Mountain", path: "/Mountain" },
                { label: "Railroad", path: "/Railroad" },
                { label: "Town", path: "/Town" },
            ]} />

            <DropdownNavbar basePath="/foraging" label="Foraging" options={[
                { label: "Backwoods", path: "/Backwoods" },
                { label: "Beach", path: "/Beach" },
                { label: "Bus Stop", path: "/BusStop" },
                { label: "Forest", path: "/Forest" },
                { label: "Mountain", path: "/Mountain" },
                { label: "Railroad", path: "/Railroad" },
                { label: "Town", path: "/Town" },
            ]} />

            <DropdownNavbar basePath="/crops" label="Crops" />
        </nav>
    )
}