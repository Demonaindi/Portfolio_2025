const VideoPreview = () => {
  return (
    <section className="c-space mb-[6rem]" id="Proyectos">
      <div className="w-full mb-8 text-white">
        <h3 className="head-text">Mis proyectos</h3>
      </div>
      <div className="relative w-full max-w-4xl mx-auto overflow-hidden rounded-2xl shadow-lg group">
        <video
          src="../assets/winehouse.mkv"
          autoPlay
          loop
          muted
          className="w-full h-[30rem] object-cover transition-all blur-sm"
        />
        <div className="absolute inset-0 flex items-center justify-center opacity-100">
          <p className="text-white text-3xl font-semibold bg-black/50 px-4 py-2 rounded-lg">
            Próximamente
          </p>
        </div>
      </div>
    </section>
  );
};

export default VideoPreview;
