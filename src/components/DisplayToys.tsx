
import { FC } from "react";
import Toys from "../models/Toys";
import SingleToys from "./SingleToys";

interface DisplayToysProps {
    toysList: Toys[];
    updateToys: (newToys: Toys) => void;
    deleteToys: (id: number) => void;
}

const DisplayToys: FC<DisplayToysProps> = ({ toysList, updateToys, deleteToys }) => {
    return (
        <div className="container">
            {
                toysList.map(toy => {
                    return <SingleToys key={toy.id} toy={toy} updateToys={updateToys} deleteToys={deleteToys} />
                })
            }
        </div>
    )
}

export default DisplayToys;