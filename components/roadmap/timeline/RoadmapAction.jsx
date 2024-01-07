import {CheckCircleIcon, FullScreenIcon} from "@/components/utils/icons";

export default function RoadmapAction({data}) {
    return <>
        <div className="action">
            <span className="action__title">{data?.title}</span>
            <div className="icons">
                {/*{clasName === "done" && <CheckCircleIcon/>}*/}
                <FullScreenIcon className="pointer"/>
            </div>
        </div>
        {data?.next && <RoadmapAction data={data.next} />}
    </>
}
