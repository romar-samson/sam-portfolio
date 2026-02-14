import Threads from "./components/Threads"

function App() {
  return (
    <>
      <Threads
        className="fixed inset-0 w-full h-full -z-10"
        color={[1, 1, 1]}
        amplitude={1}
        distance={0}
        enableMouseInteraction
      />
    </>
  )
}

export default App
