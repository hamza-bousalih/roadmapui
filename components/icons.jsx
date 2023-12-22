import 'bootstrap-icons/font/bootstrap-icons.css'

function RoadmapIcon({className}) {
    return <i className={"bi bi-map-fill " + className}></i>
}
function CheckIcon({className}) {
    return <i className={"bi bi-check " + className}></i>
}
function CheckCircleIcon({className}) {
    return <i className={"bi bi-check-circle " + className}></i>
}

export {RoadmapIcon, CheckIcon, CheckCircleIcon};
