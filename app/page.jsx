import { Button } from "@/components/ui/button";
import { FiDownload } from "react-icons/fi";

const Home = () => {
  return (
    <section className="h-full">
      <div className="container mx-auto h-full">
        <div className="flex flex-col xl:flex-row items-center justify-between xl:pt-8 xl:pb-24">
          {/* text */}
          <div className="text-center xl:text-left">
            <span>Software Developer</span>
            <h1 className="h1">
              Hello I&lsquo;m  <br /> <span>Reyna May Roma</span>
            </h1>
          </div>
          {/* photo */}
          <div>photo</div>
        </div>
      </div>
    </section>
  )
}

export default Home