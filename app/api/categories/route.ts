export async function GET() {
  const categories = ["dishes", "main", "pizza"];
  return Response.json({ data: "hello from food" });
}
export async function POST(req: Request) {
  const body = await req.json();
  console.log(body);
  return Response.json({ message: "hello from food post" });
}
