import 'bootstrap-icons/font/bootstrap-icons.css'

function setIcon(icon, className) {
    return `bi bi-${icon} ${className}`
}

function RoadmapIcon({className}) {
    return <i className={setIcon("map-fill", className)}></i>
}

function CheckIcon({className}) {
    return <i className={setIcon("check", className)}></i>
}

function CheckCircleIcon({className}) {
    return <i className={setIcon("check2-circle", className)}></i>
}

function FullScreenIcon({className}) {
    return <i className={setIcon("fullscreen", className)}></i>
}

function FullScreenExitIcon({className}) {
    return <i className={setIcon("fullscreen-exit", className)}></i>
}

function GoeAltIcon({className}) {
    return <i className={setIcon("geo-alt", className)}></i>
}

function GoeAltFillIcon({className}) {
    return <i className={setIcon("geo-alt-fill", className)}></i>
}

function CodeSlashIcon({className}) {
    return <i className={setIcon("code-slash", className)}></i>
}

function TerminalIcon({className}) {
    return <i className={setIcon("terminal", className)}></i>
}

function BookIcon({className}) {
    return <i className={setIcon("book", className)}></i>
}


function PencilSquareIcon({className}) {
    return <i className={setIcon("pencil-square", className)}></i>
}

function CheckSquareIcon({className}) {
    return <i className={setIcon("check2-square", className)}></i>
}

function PenIcon({className}) {
    return <i className={setIcon("pen", className)}></i>
}

function TvIcon({className}) {
    return <i className={setIcon("tv", className)}></i>
}

function TextLeftIcon({className}) {
    return <i className={setIcon("text-left", className)}></i>
}

export {RoadmapIcon};
export {CheckIcon, CheckCircleIcon};
export {FullScreenIcon, FullScreenExitIcon};
export {GoeAltIcon, GoeAltFillIcon};
export {CodeSlashIcon, TerminalIcon, BookIcon, PencilSquareIcon, CheckSquareIcon, PenIcon, TvIcon, TextLeftIcon}
