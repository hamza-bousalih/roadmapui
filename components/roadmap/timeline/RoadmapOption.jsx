import RoadmapAction from "@/components/roadmap/timeline/RoadmapAction";

export default function RoadmapOption({data}) {
    return <>
        <div className="option-card">
            <h3 className="option-card__title">{data.title}</h3>
            <p className="option-card__desc">{data.description}</p>
            <div className="actions">
                <RoadmapAction data={data.start}/>
            </div>
        </div>
    </>
}
