import Image from "next/image";
import Link from "next/link";

const notes = [
  { id: "1", 
    title: "Board", 
    image: "/images/stickies/blue.png",
    rotate: "-rotate-2"
  },
  { id: "2", 
    title: "Timeline", 
    image: "/images/stickies/green.png",
    rotate: "rotate-1"
  },
  { id: "3",
    title: "Financials", 
    image: "/images/stickies/orange.png",
    rotate: "-rotate-1"
  },
  { id: "4",
    title: "The Gilman Scholarship", 
    image: "/images/stickies/pink.png",
    rotate: "rotate-2"
  },
  { id: "5", 
    title: "Academics", 
    image: "/images/stickies/purple.png",
    rotate: "-rotate-3"
  },
  { id: "6", 
    title: "FAQ", 
    image: "/images/stickies/yellow.png",
    rotate: "rotate-1"
  }
];

export default function Home() {
  return (
    <main className="min-h-screen bg-amber-50 p-10">
      <h1 className="mb-10 text-4xl font-bold">Bulletin Board</h1>

      <div className="grid gap-8 sm:grid-cols-2 md:grid-cols-3">
        {notes.map((note) => (
          <Link
            key={note.id}
            href={`/notes/${note.id}`}
            className="relative block h-72 w-72 ${note.rotate} drop-shadow-xl transition duration-300 hover:scale-105 hover:rotate-0 hover:drop-shadow-2xl`}"
          >
            {/* Sticky Note Image */}
            <Image
              src={note.image}
              alt={note.title}
              fill
              className="object-contain"
            />

            {/* Text Overlay */}
            <div className='absolute inset-0 flex flex-col items-center justify-center p-8 text-center ${note.rotate}'>
              <h2 className="text-2xl font-bold text-gray-800">
                {note.title}
              </h2>

              <p className="mt-4 text-sm text-gray-700">
                Click to open this note
              </p>
            </div>
          </Link>
        ))}
      </div>
    </main>
  );
}
