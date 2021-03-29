import Brand from "../Components/Homepage/Brand";
import CourseTutorials from "../Components/Homepage/Course-Tutorials";
import Facilities from "../Components/Homepage/Facilities";
import FeatureCat from "../Components/Homepage/Feature-cat";
import FeatureCourse from "../Components/Homepage/Feature-Course";
import Hero from "../Components/Homepage/Hero";
import Trip from "../Components/Homepage/Trip";

export default function Home() {
  return (
    <>
      <Hero />
      <Trip />
      <FeatureCourse />
      <FeatureCat />
      <Facilities />
      <CourseTutorials />
      <Brand />
    </>
  )
}
