const greetings = [
  "Hi",
  "Hello",
  "Hey there",
  "Welcome",
  "Hola",
  "Salut"
];

const randomGreeting = () => greetings[Math.floor(Math.random() * greetings.length)];

export default function HomePage() {
  const greeting = randomGreeting();

  return (
    <main>
      <div className="pulse" aria-hidden="true" />
      <h1>{greeting}!</h1>
      <p>
        You&apos;ve reached an autonomous Next.js app that instantly responds with a warm
        hello.
      </p>
    </main>
  );
}
