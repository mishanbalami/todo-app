
//props is object
export default function Button(props) {
    const handleClick=()=>{
        alert('hello')
    }
    return(
        <button onClick={handleClick} className="px-3 py-2 bg-green-600 text-white rounded text-sm font-medium">{props.title}</button>
    )
}
