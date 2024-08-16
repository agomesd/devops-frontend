import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import Body from "./components/Body";
import Header from "./components/Header";

function App() {
  const queryClient = new QueryClient();
  return (
    <QueryClientProvider client={queryClient}>
      <div className="flex flex-col w-full h-screen bg-slate-950">
        <Header />
        <div className="flex-1 ">
          <Body />
        </div>
      </div>
    </QueryClientProvider>
  );
}

export default App;
