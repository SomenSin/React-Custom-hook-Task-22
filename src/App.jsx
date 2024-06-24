import PropBox from "./PropBox";
import { useFetch } from "./useFetch";

function App() {
  const { data, isPending, error } = useFetch('https://jsonplaceholder.typicode.com/posts');
  return (
    <>
      {error && <h1 style={{ textAlign: "center", marginTop: "200px" }}>Error: {error}</h1>}
      {isPending && (
        <h1 style={{ textAlign: "center", marginTop: "200px" }}>Loading...</h1>
      )}

      {!isPending && !error && <PropBox cardInfo={data} />}
    </>
  );
}

export default App;
