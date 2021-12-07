import { PureComponent, useState } from "react"

const UserForm = props => {
    const [user,setUser] = useState({})
  
    const submit = e => {
      console.log(JSON.stringify( user ));
      e.preventDefault()
      fetch('http://localhost:8000/setUserInfo/', {
        method: 'POST',
        body: JSON.stringify( user ),
        headers: { 'Content-Type': 'application/json' },
      })
        .then(res => res.json())
        .then(json => setUser(json.user))
    }

  
    return (
      <form onSubmit={submit}>
        

        
        <input
          type="text"
          name="age"
          onChange={e => setUser({ ...user, age: e.target.value })}
        />

        <input
          type="text"
          name="poids"
          onChange={e => setUser({ ...user, poids: e.target.value })}
        />

        <input
          type="text"
          name="taille"
          onChange={e => setUser({ ...user, taille: e.target.value })}
        />

      <input
          type="text"
          name="sexe"
          onChange={e => setUser({ ...user, sexe: e.target.value })}
        />

      <input
          type="text"
          name="objectif"
          onChange={e => setUser({ ...user, objectif: e.target.value })}
        />
  
  
        <input type="submit" name="Sign Up" />
      </form>
    )
  }

  export default UserForm;