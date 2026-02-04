
// cleaned imports

const projects = [
  { title: "video-call", description: "peer-to-peer webRTC based video call app with websocket signaling", link: "https://github.com/karthxk07/video-chat" },
  { title: "chatX", description: "real time guest authentication based chat room app using websockets(socket.io) ", link: "https://github.com/karthxk07/chatx" },

];

const OtherProjects = () => {
  return (
    <section className="py-20 px-4 md:px-8 bg-black/20">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-4xl font-bold mb-12">other projects... </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-white/5 p-6 rounded-2xl border border-white/10 text-left"
            ><div className='inline-flex gap-x-3 items-center'>

                <h3 className="text-xl font-bold mb-2">{project.title}</h3><p><a href={project.link} className='text-blue-600'>gituhb</a></p>
              </div>
              <p className="text-gray-400">{project.description}</p>
            </div>
          ))}
          <div
            className="bg-white/5 p-6 col-span-2 rounded-2xl border border-white/10 text-left"
          >
            <h3 className="text-2xl font-bold mb-2 bg-gradient-to-r from-yellow-400 via-stone-200 from-10% via-30% to-50% to-yellow-300  text-transparent bg-clip-text">Image restoration model (Samsung PRISM)</h3>
            <p className="text-gray-400">improved upon a image restoration moodel to optimize it for edge devices as part of my Samsung PRISM internship, implemented a u-net model - KBNet with a fourier channel attention to reduce computation cost while mainting satisfactory results</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OtherProjects;