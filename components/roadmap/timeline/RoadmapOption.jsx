import RoadmapAction from "@/components/roadmap/timeline/RoadmapAction";

export default function RoadmapOption() {
    return <>
        <div className="option-card">
            <h3 className="option-card__title">Option 1</h3>
            <p className="option-card__desc">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris ex odio, tempor sit amet
                augue id, malesuada ultricies leo.
            </p>
            <div className="actions">
                <RoadmapAction clasName="done"/>
            </div>
        </div>
    </>
}
