import { useRef, useEffect, MouseEvent, useState } from "react";
import { useDispatch, useSelector } from "../hooks/redux";
import { createFace } from "../store/face/actions";
import { Vertex } from "../structures/vertex";

const normalizeCoordinates = (
  ctx: CanvasRenderingContext2D,
  mouseX: number,
  mouseY: number
): { x: number; y: number } => {
  const boundingBox: DOMRect = ctx.canvas.getBoundingClientRect();

  const x =
    (mouseX - boundingBox.left) * (ctx.canvas.width / boundingBox.width);
  const y =
    (mouseY - boundingBox.top) * (ctx.canvas.height / boundingBox.height);

  return { x, y };
};

const clearCanvas = (ctx: CanvasRenderingContext2D) => {
  const ch = ctx.canvas.height;
  const cw = ctx.canvas.width;

  ctx.clearRect(0, 0, cw, ch);
};

function drawLine(ctx: CanvasRenderingContext2D, p1: Vertex, p2: Vertex) {
  ctx.beginPath();
  ctx.moveTo(p1.x, p1.y);
  ctx.lineTo(p2.x, p2.y);
  ctx.stroke();
}

function drawAllShapes(ctx: CanvasRenderingContext2D, shapes: Vertex[]) {
  //vertexes[n], this.vertexes[(n + 1) % this.vertexes.length
  shapes.forEach((_, idx, arr) => {
    drawLine(ctx, arr[idx], arr[(idx + 1) % arr.length]);
  });
}

function Canvas(): JSX.Element {
  const dispatch = useDispatch();

  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [drawing, setDrawing] = useState<Boolean>(false);
  const vertexes: Vertex[] = useSelector((state) => state.face);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (canvas) {
      const context = canvas.getContext("2d");
      if (context) {
        context.lineWidth = 1;
      }
    }
  }, []);

  useEffect(() => {
    console.log(vertexes);
  }, [vertexes]);

  const handleDraw = (evt: MouseEvent) => {
    if (!drawing) return;

    const canvas = canvasRef.current;

    if (canvas) {
      const context = canvas.getContext("2d");

      if (context) {
        clearCanvas(context);
        drawAllShapes(context, vertexes);

        const { x, y } = normalizeCoordinates(
          context,
          evt.clientX,
          evt.clientY
        );

        const p2 = new Vertex(x, y, 0);
        drawLine(context, vertexes[vertexes.length - 1], p2);
      }
    }
  };

  const handleMouseDown = (evt: MouseEvent) => {
    const canvas = canvasRef.current;

    setDrawing(true);

    if (canvas) {
      const context = canvas.getContext("2d");

      if (context) {
        const { x, y } = normalizeCoordinates(
          context,
          evt.clientX,
          evt.clientY
        );

        dispatch(createFace(new Vertex(x, y, 0)));
      }
    }
  };

  const handleMouseUp = (evt: MouseEvent) => {
    const canvas = canvasRef.current;
    if (canvas) {
      const context = canvas.getContext("2d");

      if (context) {
        const { x, y } = normalizeCoordinates(
          context,
          evt.clientX,
          evt.clientY
        );

        if (drawing) {
          dispatch(createFace(new Vertex(x, y, 0)));
        }
      }
    }

    setDrawing(false);
  };

  return (
    <div
      tabIndex={0}
      className="bg-gray-300 h-full focus:bg-gray-400 transition-all
            duration-500 ease-linear"
    >
      <canvas
        id="canvas"
        ref={canvasRef}
        className="h-full w-full"
        onMouseDown={handleMouseDown}
        onMouseUp={handleMouseUp}
        onMouseMove={handleDraw}
      />
    </div>
  );
}

export default Canvas;
