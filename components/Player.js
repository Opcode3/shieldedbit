
export default function Player() {
    // probs: data: {poster, sources: [], types: []}
  return (
    <div className="w-full flex flex-col bg-black md:h-[500px] overflow-hidden">
        <video className="h-full" controls>
            <source src="/assets/videos/openProject.mp4" type='video/mp4'/>
            Your browser does not support html video tag
        </video>
    </div>
  )
}
