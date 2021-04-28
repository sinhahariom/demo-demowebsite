import './LeftNav.scss';
import {useState} from 'react';

const LeftNav = () => {
    const [navOptions] = useState([
        {
            "id":1,
            "title":"My Apps",
            "icon":"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 48 48' width='96px' height='96px'%3E%3Cpath fill='%23bdbdbd' d='M23.933 2L3 9.285 6.308 36.408 23.955 46 41.693 36.278 45 9.156z'/%3E%3Cpath fill='%23b71c1c' d='M42.818 10.527L24 4.135 24 43.695 39.832 35.017z'/%3E%3Cpath fill='%23dd2c00' d='M23.941 4.115L5.181 10.644 8.168 35.143 23.951 43.721 24 43.695 24 4.135z'/%3E%3Cpath fill='%23bdbdbd' d='M24 5.996L24 15.504 32.578 34 36.987 34z'/%3E%3Cpath fill='%23eee' d='M11.013 34L15.422 34 24 15.504 24 5.996z'/%3E%3Cpath fill='%23bdbdbd' d='M24 24H30V28H24z'/%3E%3Cpath fill='%23eee' d='M18 24H24V28H18z'/%3E%3C/svg%3E"
        },
        {
            "id":2,
            "title":"My Personal Info",
            "icon":"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 48 48' width='96px' height='96px'%3E%3Cpath fill='%23bdbdbd' d='M23.933 2L3 9.285 6.308 36.408 23.955 46 41.693 36.278 45 9.156z'/%3E%3Cpath fill='%23b71c1c' d='M42.818 10.527L24 4.135 24 43.695 39.832 35.017z'/%3E%3Cpath fill='%23dd2c00' d='M23.941 4.115L5.181 10.644 8.168 35.143 23.951 43.721 24 43.695 24 4.135z'/%3E%3Cpath fill='%23bdbdbd' d='M24 5.996L24 15.504 32.578 34 36.987 34z'/%3E%3Cpath fill='%23eee' d='M11.013 34L15.422 34 24 15.504 24 5.996z'/%3E%3Cpath fill='%23bdbdbd' d='M24 24H30V28H24z'/%3E%3Cpath fill='%23eee' d='M18 24H24V28H18z'/%3E%3C/svg%3E"
        },
        {
            "id":3,
            "title":"Pricing",
            "icon":"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 48 48' width='96px' height='96px'%3E%3Cpath fill='%23bdbdbd' d='M23.933 2L3 9.285 6.308 36.408 23.955 46 41.693 36.278 45 9.156z'/%3E%3Cpath fill='%23b71c1c' d='M42.818 10.527L24 4.135 24 43.695 39.832 35.017z'/%3E%3Cpath fill='%23dd2c00' d='M23.941 4.115L5.181 10.644 8.168 35.143 23.951 43.721 24 43.695 24 4.135z'/%3E%3Cpath fill='%23bdbdbd' d='M24 5.996L24 15.504 32.578 34 36.987 34z'/%3E%3Cpath fill='%23eee' d='M11.013 34L15.422 34 24 15.504 24 5.996z'/%3E%3Cpath fill='%23bdbdbd' d='M24 24H30V28H24z'/%3E%3Cpath fill='%23eee' d='M18 24H24V28H18z'/%3E%3C/svg%3E"
        },
        {
            "id":4,
            "title":"Addons",
            "icon":"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 48 48' width='96px' height='96px'%3E%3Cpath fill='%23bdbdbd' d='M23.933 2L3 9.285 6.308 36.408 23.955 46 41.693 36.278 45 9.156z'/%3E%3Cpath fill='%23b71c1c' d='M42.818 10.527L24 4.135 24 43.695 39.832 35.017z'/%3E%3Cpath fill='%23dd2c00' d='M23.941 4.115L5.181 10.644 8.168 35.143 23.951 43.721 24 43.695 24 4.135z'/%3E%3Cpath fill='%23bdbdbd' d='M24 5.996L24 15.504 32.578 34 36.987 34z'/%3E%3Cpath fill='%23eee' d='M11.013 34L15.422 34 24 15.504 24 5.996z'/%3E%3Cpath fill='%23bdbdbd' d='M24 24H30V28H24z'/%3E%3Cpath fill='%23eee' d='M18 24H24V28H18z'/%3E%3C/svg%3E"
        },
        {
            "id":5,
            "title":"Settings",
            "icon":"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 48 48' width='96px' height='96px'%3E%3Cpath fill='%23bdbdbd' d='M23.933 2L3 9.285 6.308 36.408 23.955 46 41.693 36.278 45 9.156z'/%3E%3Cpath fill='%23b71c1c' d='M42.818 10.527L24 4.135 24 43.695 39.832 35.017z'/%3E%3Cpath fill='%23dd2c00' d='M23.941 4.115L5.181 10.644 8.168 35.143 23.951 43.721 24 43.695 24 4.135z'/%3E%3Cpath fill='%23bdbdbd' d='M24 5.996L24 15.504 32.578 34 36.987 34z'/%3E%3Cpath fill='%23eee' d='M11.013 34L15.422 34 24 15.504 24 5.996z'/%3E%3Cpath fill='%23bdbdbd' d='M24 24H30V28H24z'/%3E%3Cpath fill='%23eee' d='M18 24H24V28H18z'/%3E%3C/svg%3E"
        },
        {
            "id":6,
            "title":"Contact Center",
            "icon":"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 48 48' width='96px' height='96px'%3E%3Cpath fill='%23bdbdbd' d='M23.933 2L3 9.285 6.308 36.408 23.955 46 41.693 36.278 45 9.156z'/%3E%3Cpath fill='%23b71c1c' d='M42.818 10.527L24 4.135 24 43.695 39.832 35.017z'/%3E%3Cpath fill='%23dd2c00' d='M23.941 4.115L5.181 10.644 8.168 35.143 23.951 43.721 24 43.695 24 4.135z'/%3E%3Cpath fill='%23bdbdbd' d='M24 5.996L24 15.504 32.578 34 36.987 34z'/%3E%3Cpath fill='%23eee' d='M11.013 34L15.422 34 24 15.504 24 5.996z'/%3E%3Cpath fill='%23bdbdbd' d='M24 24H30V28H24z'/%3E%3Cpath fill='%23eee' d='M18 24H24V28H18z'/%3E%3C/svg%3E"
        },
        {
            "id":7,
            "title":"About Us",
            "icon":"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 48 48' width='96px' height='96px'%3E%3Cpath fill='%23bdbdbd' d='M23.933 2L3 9.285 6.308 36.408 23.955 46 41.693 36.278 45 9.156z'/%3E%3Cpath fill='%23b71c1c' d='M42.818 10.527L24 4.135 24 43.695 39.832 35.017z'/%3E%3Cpath fill='%23dd2c00' d='M23.941 4.115L5.181 10.644 8.168 35.143 23.951 43.721 24 43.695 24 4.135z'/%3E%3Cpath fill='%23bdbdbd' d='M24 5.996L24 15.504 32.578 34 36.987 34z'/%3E%3Cpath fill='%23eee' d='M11.013 34L15.422 34 24 15.504 24 5.996z'/%3E%3Cpath fill='%23bdbdbd' d='M24 24H30V28H24z'/%3E%3Cpath fill='%23eee' d='M18 24H24V28H18z'/%3E%3C/svg%3E"
        },
        {
            "id":8,
            "title":"More",
            "icon":"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 48 48' width='96px' height='96px'%3E%3Cpath fill='%23bdbdbd' d='M23.933 2L3 9.285 6.308 36.408 23.955 46 41.693 36.278 45 9.156z'/%3E%3Cpath fill='%23b71c1c' d='M42.818 10.527L24 4.135 24 43.695 39.832 35.017z'/%3E%3Cpath fill='%23dd2c00' d='M23.941 4.115L5.181 10.644 8.168 35.143 23.951 43.721 24 43.695 24 4.135z'/%3E%3Cpath fill='%23bdbdbd' d='M24 5.996L24 15.504 32.578 34 36.987 34z'/%3E%3Cpath fill='%23eee' d='M11.013 34L15.422 34 24 15.504 24 5.996z'/%3E%3Cpath fill='%23bdbdbd' d='M24 24H30V28H24z'/%3E%3Cpath fill='%23eee' d='M18 24H24V28H18z'/%3E%3C/svg%3E"
        },
    ]);

    const [toggleLeftNav,setToggleLeftNav] = useState(false);
    
    const toggleEvent = () =>{
        setToggleLeftNav(!toggleLeftNav);
    }

    return ( 
        
       <div className="left-nav-parent-wrapper">
            { toggleLeftNav && <div className="left-nav-wrapper">
                <div className="logo-wrapper">
                    <img alt="NA" src="data:image/svg+xml,%3Csvg id='Layer_1' enable-background='new 0 0 512 512' height='512' viewBox='0 0 512 512' width='512' xmlns='http://www.w3.org/2000/svg'%3E%3Cg%3E%3Cg%3E%3Ccircle cx='256' cy='256' fill='%23ffb54a' r='256'/%3E%3C/g%3E%3Cpath d='m506.325 309.771-151.263-151.263s-140.551 2.262-175.296 2.262l-34.544 232.737 126.432 118.003c115.921-6.995 211.022-91.118 234.671-201.739z' fill='%23f9880d'/%3E%3Cg%3E%3Cpath d='m268.085 393.507h-122.863v-275.014h122.863c63.242 0 114.693 51.452 114.693 114.694v45.626c0 63.242-51.451 114.694-114.693 114.694zm-64.863-58h64.863c31.261 0 56.693-25.433 56.693-56.694v-45.626c0-31.261-25.433-56.694-56.693-56.694h-64.863z' fill='%23f8fffb'/%3E%3C/g%3E%3Cg%3E%3Cpath d='m268.08 118.49h-12.08v58h12.08c31.27 0 56.7 25.44 56.7 56.7v45.62c0 31.26-25.43 56.7-56.7 56.7h-12.08v58h12.08c63.25 0 114.7-51.45 114.7-114.7v-45.62c0-63.25-51.45-114.7-114.7-114.7z' fill='%23d8d8d8'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E"></img>
                </div>
                <span className="span">sinhahariom1@gmail.com</span>
                {navOptions.map((data)=>(
                    <div className="nav-options-wrapper" key={data.id}>
                        <img alt="NA" src={data.icon} ></img>
                        <span>{data.title}</span>
                    </div>
                ))
                }
            </div>
            }
            <div className="nav-toggle-bar">
                <button className="bar" onClick={toggleEvent}></button>
            </div>
       </div>
     );
}
 
export default LeftNav;