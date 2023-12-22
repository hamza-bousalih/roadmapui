import {RoadmapIcon} from "@/components/icons"
import "@/styles/roadmap/roadmap-details.css"
import RoadmapSection from "@/components/roadmap/timeline/RoadmapSection";

export default function RoadmapPage({params: {roadmapId}}) {
    return <>
        <div className="roadmap">
            <div className="aside"></div>
            <main>
                <section className="roadmap__detail">
                    <RoadmapIcon className="roadmap__icon"/>
                    <h2 className="roadmap__title">Roadmap Title</h2>
                    <p className="roadmap__desc">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris ex odio, tempor sit amet augue id, malesuada ultricies leo. Vestibulum
                        ultrices elit sit amet efficitur semper. In iaculis suscipit elit in vulputate. Ut a dictum orci. Nunc mollis sapien laoreet felis aliquam blandit.
                        Nunc at tellus vel sem consequat malesuada ut molestie odio. Suspendisse potenti .
                    </p>
                </section>

                <RoadmapSection/>
                <RoadmapSection/>
                <RoadmapSection/>
                <RoadmapSection/>
                <RoadmapSection/>
                <RoadmapSection/>
            </main>
        </div>
    </>
}
