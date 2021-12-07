import { useState } from "react"

const UserForm = props => {
    const [data] = useState(props.data)
  
    const submit = e => {
      alert(data)
      e.preventDefault()
      fetch('http://localhost:8000/setUserInfo/', {
        method: 'POST',
        body: JSON.stringify({ data }),
        //body : JSON.stringify({ data }),
        headers: { 'Content-Type': 'application/json' },
      })
        .then(res => res.json())
        //.then(json => setUser(json.user))
    }
  
    return (
      <form onSubmit={submit}>
        <input
          type="text"
          name="age"
          //value={user.name}
          //onChange={e => setUser({ ...user, name: e.target.value })}
        />

        <input
          type="text"
          name="poids"
         // value={user.email}
          //onChange={e => setUser({ ...user, email: e.target.value })}
        />

        <input
          type="text"
          name="taille"
         // value={user.email}
          //onChange={e => setUser({ ...user, email: e.target.value })}
        />

      <input
          type="text"
          name="sexe"
         // value={user.email}
          //onChange={e => setUser({ ...user, email: e.target.value })}
        />

      <input
          type="text"
          name="objectif"
         // value={user.email}
          //onChange={e => setUser({ ...user, email: e.target.value })}
        />
  
  
        <input type="submit" name="Sign Up" />
      </form>
    )
  }

  export default UserForm;