export default function Navbar(){
}

function NavbarList(){
    return(
        <nav>
            <NavbarList/>
            <Button title ="Download App"/>
        </nav>
    )
}
    const navList = [
        {
            text:"Home",
            path:"/home",
        },
        {
            text:"product",
            path:"/product",
        },
    ];
    return(
        <ul>
            {navList.map((item) => {
                return(
                    <li>
                        <a href={item.path}>{item.text}</a>
                    </li>
                )
                
            }
        </ul>
    )
}