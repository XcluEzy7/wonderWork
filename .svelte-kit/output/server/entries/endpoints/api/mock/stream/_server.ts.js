import fs from "fs";
import path from "path";
const GET = async ({ request }) => {
  const range = request.headers.get("range");
  if (!range) {
    return new Response("Range header required", { status: 416 });
  }
  const videoPath = path.resolve("./static/video.mp4");
  if (!fs.existsSync(videoPath)) {
    return new Response("Video file not found", { status: 404 });
  }
  const stat = fs.statSync(videoPath);
  const fileSize = stat.size;
  const CHUNK_SIZE = 1e6;
  const matches = range.match(/bytes=(\d+)-(\d+)?/);
  if (!matches) {
    return new Response("Invalid Range header", { status: 400 });
  }
  const start = parseInt(matches[1], 10);
  const end = matches[2] ? parseInt(matches[2], 10) : Math.min(start + CHUNK_SIZE, fileSize - 1);
  const headers = {
    "Content-Range": `bytes ${start}-${end}/${fileSize}`,
    "Accept-Ranges": "bytes",
    "Content-Length": `${end - start + 1}`,
    "Content-Type": "video/mp4",
    "Content-Disposition": 'inline; filename="video.mp4"'
  };
  const nodeStream = fs.createReadStream(videoPath, { start, end });
  const webStream = new ReadableStream({
    start(controller) {
      nodeStream.on(
        "data",
        (chunk) => controller.enqueue(new Uint8Array(chunk))
      );
      nodeStream.on("end", () => controller.close());
      nodeStream.on("error", (err) => controller.error(err));
    },
    cancel() {
      nodeStream.destroy();
    }
  });
  return new Response(webStream, {
    status: 206,
    headers
  });
};
export {
  GET
};
