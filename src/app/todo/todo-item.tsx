export default function TodoItem(props) {
  return(
     <li>
      <input 
      type="Checkbox"
      checked={props.completed}
       value={props.completed}
       onChange={()=>props.toggleCompleted(props.id)}
       />
    <h6>{props.text}</h6>
    <p>{props.description}</p>
  </li>
  )
}


