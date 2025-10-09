export async function GET() {
  return Response.json({ data: "hello from food" });
}
export async function POST() {
  return Response.json({ message: "hello from food post" });
}
