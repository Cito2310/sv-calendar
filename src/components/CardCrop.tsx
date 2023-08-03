import { DataCrop } from "../types/dataCrop"
import { capitalizeText } from "../helpers/capitalizeText";

interface props {
    dataCrop: DataCrop
}

export const CardCrop = ({ dataCrop }: props) => {
    const { growDays, name, priceSell, regrowth, season, seedPrice, type } = dataCrop;

    const capitalizeName = capitalizeText( name );
    const nameToImage = capitalizeName.split(" ").join("_");

    const sellPrices = {
        regular: priceSell,
        silver: Math.floor(priceSell * 1.25),
        gold: Math.floor(priceSell * 1.50),
        iridium: Math.floor(priceSell * 2),
    }

    const preservesJar = Math.floor( 2 * priceSell + 50 );
    const keg = Math.floor( type === "fruit" ? 3 * priceSell : 2.25 * priceSell );



    return (
        <li className="min-w-[240px] flex-1 border-board list-none">
            <div className="bg-[#FFCB7B] p-2 pb-3 text-[0.8rem]">
                <div className="flex gap-1">
                    <img src={`assets/crops_img/${nameToImage}.png`} />

                    <div>
                        <h2 className="font-medium text-base">{capitalizeName}</h2>
                        <p>Type: { type }</p>
                    </div>
                </div>

                <div className="ml-1">
                    <h3 className="font-medium mt-1">Season</h3>
                    <div className="flex flex-row">
                        <img className={`h-7 ${!season.fall && "filter-season-desactive"}`} src="assets/season_img/Fall.png" />
                        <img className={`h-7 ${!season.winter && "filter-season-desactive"}`} src="assets/season_img/Winter.png" />
                        <img className={`h-7 ${!season.summer && "filter-season-desactive"}`} src="assets/season_img/Summer.png" />
                        <img className={`h-7 ${!season.spring && "filter-season-desactive"}`} src="assets/season_img/Spring.png" />
                    </div>

                    <div className="mt-2 h-14">
                        <p>Seed price: { seedPrice }</p>
                        <p>Days to grow: { growDays }</p>
                        { regrowth ? <p className="">Days to regrowth: { regrowth }</p> : null }
                    </div>

                    <h3 className="font-medium mt-1">Sell Prices</h3>
                    <table>
                        <tbody>
                            <tr>
                                <td>Regular :</td>
                                <td className="pl-2">{ sellPrices.regular }</td>
                            </tr>
                            <tr>
                                <td>Silver :</td>
                                <td className="pl-2">{ sellPrices.silver }</td>
                            </tr>
                            <tr>
                                <td>Gold :</td>
                                <td className="pl-2">{ sellPrices.gold }</td>
                            </tr>
                            <tr>
                                <td>Iridium :</td>
                                <td className="pl-2">{ sellPrices.iridium }</td>
                            </tr>
                        </tbody>
                    </table>

                    <h3 className="font-medium mt-1">Artisan sell prices</h3>
                    <p>Preserves jar: { preservesJar }</p>
                    <p>Keg: { keg }</p>
                </div>
            </div>
        </li>
    )
}