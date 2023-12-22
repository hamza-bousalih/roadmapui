import {CheckCircleIcon} from "@/components/icons";

export default function RoadmapAction({clasName}) {
    return <>
        <div className={"action " + clasName}>
            <span className="action__title">Action 1</span>
            <div className="icons">
                {clasName === "done" && <CheckCircleIcon/>}
                <i className="bi bi-square"></i>
            </div>
        </div>
    </>
}
