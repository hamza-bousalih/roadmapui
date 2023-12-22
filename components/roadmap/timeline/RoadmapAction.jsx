import {CheckCircleIcon, FullScreenIcon} from "@/components/icons";

export default function RoadmapAction({clasName, show = true}) {
    return <>
        <div className={"action " + clasName}>
            <span className="action__title">Action 1</span>
            <div className="icons">
                {clasName === "done" && <CheckCircleIcon/>}
                <FullScreenIcon/>
            </div>
        </div>
        {show && <RoadmapAction show={false} />}
    </>
}
