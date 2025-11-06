import Header from "../components/Header"
import Entry from "../components/Entry"
import data from "./data"
 
export default function App() {
  const entryElements = data.map(entry => {
    return (
      <Entry 
        key={entry.id}
        {...entry}
      />
    )
  })

  return (
    <>
      <Header />
      <main className="container">
        {entryElements}
      </main>
    </>
  )
}

    //   <Commit 
    //     punchline="It's hard to explain puns to kleptomaniacs because they always take things literally."
    //     upvotes={1}
    //     downvotes={2}
    //     isPun={true}
    //     commit={[
    //       {author:"",text:"",title:""},
    //       {author:"",text:"",title:""},
    //       {author:"",text:"",title:""}
    //     ]}
    //   />