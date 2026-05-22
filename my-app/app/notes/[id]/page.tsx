import Link from "next/link";

const notes = {
  "1": {
    title: "Board",
    body: "This page can hold project ideas, inspiration, or planning notes.",
    image: "public/stickies/blue.png"
  },
  "2": {
    title: "Timeline",
    body: "This page can hold tasks, deadlines, and reminders.",
    image: "public/stickies/green.png"
  },
  "3": {
    title: "Financials",
    body: "This page can hold helpful links, docs, and references.",
    image: "public/stickies/orange.png"
  },
  "4": {
    title: "The Gilman Scholarship",
    body: "Click here for more information on the Gilman Scholarship!",
    image: "public/stickies/pink.png"
  },
  "5": {
    title: "Academics",
    body: "Learn more about how you can integrate academics and professional experience into your trip abroad.",
    image: "public/stickies/purple.png"
  },
  "6": {
    title: "FAQ",
    body: "Here you can find tips, tricks, and frequently asked questions.",
    image: "public/stickies/yellow.png"
  }
};

export default async function NotePage({
    params,
  }: {
    params: Promise<{ id: string }>;
  }) {
    const { id } = await params;
    const note = notes[id as keyof typeof notes];

  if (!note) {
    return (
      <main className="min-h-screen p-10">
        <h1 className="text-3xl font-bold">Note not found</h1>
        <Link href="/" className="mt-6 inline-block underline">
          Back to board
        </Link>
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-amber-50 p-10">
      <Link href="/" className="underline">
        ← Back to board
      </Link>

      <article className="mt-8 max-w-2xl rounded-lg bg-yellow-200 p-8 shadow-lg">
        <h1 className="text-4xl font-bold">{note.title}</h1>
        <p className="mt-6 text-lg">{note.body}</p>
      </article>
    </main>
  );
}