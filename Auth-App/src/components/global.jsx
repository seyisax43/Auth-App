// all components
import { Outlet, NavLink, useNavigate, useLocation, Navigate } from "react-router-dom"
import AuthConsumer from "../hooks/auth"
import Route from "../routes/route";



export const HomePage = () => {
    const [authed, dispatch] = AuthConsumer();
    console.log(authed)
    return(
        <main >
            
        <h1 style={{ backgroundColor:"yellow",
                    borderRadius: "10px"}}>Authentication</h1>
                    <Nav></Nav>

        <div style={{ backgroundColor:"",
                    borderRadius: "10px",
                    display:"flex",
                    justifyContent:"center",
                    padding:3}}>
            
        <Outlet/>
        </div>          
        
        </main>
    )
}

export const LoginPage = () => {
    const [authed,dispatch] = AuthConsumer();
   
    let navigate = useNavigate()

    return(
        <div>

        <h1>This is the login page</h1>
        <button
        onClick={() =>{
            dispatch({type:"login"})
            navigate('/dashboard', {replace:true})

        }}
        >Login</button>
        </div>
    )
}



export const HomeContent = () => {
    return(
        <div>

        <h1>Home Content Component</h1>
        </div>
    )
}

export const Nav = () => {
    const[{ auth }] = AuthConsumer()
    let [{ children }] = Route
    

    function ActiveLink(props){
        return<NavLink 
        style={({isActive}) =>{
            return{
                color:isActive?'red':''
            };
        }}
        {...props}
        />
    }
    return(
        <nav style={{display:"flex",
        justifyContent:"center",
        gap:15,
        backgroundColor:"skyblue",
        borderRadius: "5px"
        }}>
            <ActiveLink to={'/'} >Home</ActiveLink>
            {
                children.map((value,i)=>(
                value.RouteName && value.protected === auth ? <ActiveLink key={i} to={value.path} >{value.RouteName}</ActiveLink>:false

                ))
            }
            {/* <ActiveLink to={'/'} >Home</ActiveLink>
            <ActiveLink to={'/login'}>Login</ActiveLink>
            {
                auth?(
                    <>
                    <ActiveLink to={'/dashboard'}>Dashboard</ActiveLink>
                    <ActiveLink to={'/settings'}>Settings</ActiveLink>
                    </>
                ):<></>
            } */}
           
        </nav>
    )
}

export const Dashboard = () => {
    const [,dispatch] = AuthConsumer();
    let navigate = useNavigate()
  
    return(
        <div>

        <h1>This is the Dashboard Component</h1>
        <button
        onClick={() =>{
            dispatch({type:'logout'})
            navigate('/login', {replace:true})

        }}
        >Logout</button>
        </div>
    )
}

export const Settings = () => {
    const [,dispatch] = AuthConsumer();
    let navigate = useNavigate()
  
    return(
        <div>

        <h1>This is Settings Component</h1>
        <button
        onClick={() =>{
            dispatch({type:'logout'})
            navigate('/login', {replace:true})

        }}
        >Logout</button>
        </div>
    )
}

export function RequiredAuth({children}){
    const[authed] = AuthConsumer()
    const locaton = useLocation()
    return authed.auth === true?(
        children
    ): (
        <Navigate to={"/login"} replace state={{path:location.pathname}}></Navigate>
    );
}