import {CheckCircleIcon, FullScreenIcon} from "@/components/icons";

export default function RoadmapAction({data}) {
    return <>
        <div className="action">
            <span className="action__title">Action 1</span>
            <div className="icons">
                {/*{clasName === "done" && <CheckCircleIcon/>}*/}
                <FullScreenIcon/>
            </div>
        </div>
        {data?.next && <RoadmapAction data={data.next} />}
    </>
}
