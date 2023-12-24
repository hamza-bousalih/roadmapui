import {RoadmapIcon} from "@/components/icons"
import "@/styles/roadmap/roadmap-details.css"
import RoadmapSection from "@/components/roadmap/timeline/RoadmapSection";
import Service from "@/services"
import RoadmapData from "@/services/data";

export default async function RoadmapPage({params: {roadmapId}}) {
    let roadmap;
    await Service.Roadmap.findById(roadmapId)
        .then(data => roadmap = data)
        .catch(err => console.log(err));

    return <>
        {roadmap && <div className="roadmap">
            <div className="aside"></div>
            <main>
                <section className="roadmap__detail">
                    <RoadmapIcon className="roadmap__icon"/>
                    <h2 className="roadmap__title">{roadmap.title}</h2>
                    <p className="roadmap__desc">{roadmap.description}</p>
                </section>

                <RoadmapSection data={roadmap.start}/>
            </main>
        </div>}
    </>
}
