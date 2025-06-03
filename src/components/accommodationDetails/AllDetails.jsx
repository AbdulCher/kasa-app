
import AccommodationTitles from "./AccommodationTitles.jsx";
import Tags from "./Tags.jsx";
import HostInfos from "./HostInfos.jsx";
import Collapse from "../collapse/Collapse.jsx";
import "./AllDetails.css"

export default function AccommodationDetails({ card }) {
    return (
        <>
        <div className="accommodation-infos">
            <div className="div-title-tag">
                <AccommodationTitles card={card}/>
                <Tags card={card}/>
            </div>
            <HostInfos card={card}/>
        </div>
        <div className="carrousel-collapses">
            <Collapse title="Description" content={card.description} />
            <Collapse title="Équipements" content={card.equipments} />
        </div>
        </>
    )
}