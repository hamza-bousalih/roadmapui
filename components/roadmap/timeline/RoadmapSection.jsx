import RoadmapOption from "@/components/roadmap/timeline/RoadmapOption";

export default function RoadmapSection({show}) {
    return <>
        <section className="roadmap-section">
            <div className="roadmap-section__icon current">
                {/*<CheckIcon/>*/}
            </div>
            <div className="options">
                <RoadmapOption/>
                <RoadmapOption/>
                <RoadmapOption/>
            </div>
        </section>
        {/*{show && <RoadmapSection show={false}/>}*/}
    </>
}
