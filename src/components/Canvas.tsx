function Canvas(): JSX.Element {
  return (
    <div
      tabIndex={0}
      className="bg-gray-300 h-full focus:bg-gray-400 transition-all
            duration-500 ease-linear"
    >
      <canvas id="canvas" className="h-full w-full" />
    </div>
  );
}

export default Canvas;
