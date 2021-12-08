import { useState } from "react"

const AlimentsForm = props => {
    const [data] = useState(props.data)


    const submit = e => {
      alert(data)
      e.preventDefault()
      fetch('http://localhost:8000/renseignerAliments/', {
        method: 'GET',
        body: JSON.stringify({ data }),
        //body : JSON.stringify({ data }),
        headers: { 'Content-Type': 'application/json' },
      })
        .then(res => res.json())
        //.then(json => setUser(json.user))
    }

    return (
        <form onSubmit={submit}>
            <input type = "text" name = "aliments"/>
            <input type = "submit" name = "send"/>
        </form>
    )
}

export default AlimentsForm;