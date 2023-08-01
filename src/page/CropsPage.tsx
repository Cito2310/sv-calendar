import { useState, useEffect } from 'react';
import { DataCrop } from "../types/dataCrop";
import { CardCrop } from "../components/CardCrop";

export const CropsPage = () => {
    const [crops, setCrops] = useState<DataCrop[]>([]);

    useEffect(() => {
      fetch("data/dataCrops.json").then(
        async resp => { setCrops( await resp.json() ) }
      )
    }, [])

    return (
        <div className="flex flex-wrap m-3 gap-3">
            {
                crops.map( crop => <CardCrop key={ crop.name } dataCrop={ crop } /> )
            }
        </div>
    )
}