export default function Profile(){
    const person = {
        name:'john',
        age:22,
        email:'john@gmail.com',
        nationality:"US",
        location:"Canada"
    }
    return(

        <div> 
        <h1>Name:{person.name}</h1>
        <h1>Age:{person.age}</h1>
        <h1>Email{person.email}</h1>
        <h1>Nationality:{person.nationality}</h1>
        <h1>Location:{person.location}</h1>

        </div>
    )
    }
        
