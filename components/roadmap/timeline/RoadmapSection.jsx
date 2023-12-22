import RoadmapOptions from "@/components/roadmap/timeline/RoadmapOptions";

export default function RoadmapSection() {
    return <>
        <section className="roadmap-section">
            <div className="roadmap-section__icon current">
                {/*<CheckIcon/>*/}
            </div>
            <RoadmapOptions/>
        </section>
    </>
}
