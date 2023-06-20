import { useState } from "react";
import { useNavigate } from "react-router-dom";
function Header(){
  let navigate = useNavigate();
  const [logined,setlogined] = useState(localStorage.getItem("logined"));
  return(
<div id="headerwrap">
      <header>
        <div class='icon' onClick={()=>{navigate('/')}}>
          <img src='./images/headericon.png' ></img>
        </div>
        <div class="buttons">
          <div class="buttonscon">
            <div class='buttonscon2'>
              <div id="langcon">
                <div id = "langearth">
                  <svg width="16" height="16" viewBox = "0 0 16 16" fill="none"
                  xmlns = "https://www.w3.org/2000/svg">
                  <path fill-rule = "evenodd" clip-rule="evenodd" d="M 8 14.5 C 8.23033 14.5 8.84266 14.2743 9.48679 12.986 C 9.76293 12.4337 9.99973 11.7621 10.1748 11 H 5.8252 C 6.00027 11.7621 6.23707 12.4337 6.51321 12.986 C 7.15734 14.2743 7.76967 14.5 8 14.5 Z M 5.57762 9.5 C 5.52716 9.02077 5.5 8.51911 5.5 8 C 5.5 7.48089 5.52716 6.97923 5.57762 6.5 H 10.4224 C 10.4728 6.97923 10.5 7.48089 10.5 8 C 10.5 8.51911 10.4728 9.02077 10.4224 9.5 H 5.57762 Z M 11.7092 11 C 11.4822 12.1217 11.1317 13.117 10.6914 13.9184 C 12.0137 13.3161 13.0987 12.2837 13.7678 11 H 11.7092 Z M 14.3261 9.5 H 11.9298 C 11.9759 9.01412 12 8.51269 12 8 C 12 7.48731 11.9759 6.98588 11.9298 6.5 H 14.3261 C 14.4398 6.98152 14.5 7.48373 14.5 8 C 14.5 8.51627 14.4398 9.01848 14.3261 9.5 Z M 4.0702 9.5 H 1.67393 C 1.56019 9.01848 1.5 8.51627 1.5 8 C 1.5 7.48373 1.56019 6.98152 1.67393 6.5 H 4.0702 C 4.02411 6.98588 4 7.48731 4 8 C 4 8.51269 4.02411 9.01412 4.0702 9.5 Z M 2.23221 11 H 4.29076 C 4.51779 12.1217 4.86832 13.117 5.30864 13.9184 C 3.98635 13.3161 2.90128 12.2837 2.23221 11 Z M 5.8252 5 H 10.1748 C 9.99973 4.23793 9.76293 3.56626 9.48679 3.01397 C 8.84266 1.72571 8.23033 1.5 8 1.5 C 7.76967 1.5 7.15734 1.72571 6.51321 3.01397 C 6.23707 3.56626 6.00027 4.23793 5.8252 5 Z M 11.7092 5 H 13.7678 C 13.0987 3.71627 12.0137 2.68389 10.6914 2.08162 C 11.1317 2.88302 11.4822 3.8783 11.7092 5 Z M 5.30864 2.08162 C 4.86832 2.88302 4.51779 3.8783 4.29076 5 H 2.23221 C 2.90128 3.71628 3.98635 2.68389 5.30864 2.08162 Z M 8 0 C 12.4183 0 16 3.58172 16 8 C 16 12.4183 12.4183 16 8 16 C 3.58172 16 0 12.4183 0 8 C 0 3.58172 3.58172 0 8 0 Z"
                   fill = "currentColor"></path>
                </svg>
                </div>
                <select>
                  <option>한국어</option>
                </select>
              </div>
              <div id="logincon" >
                {
                  logined===null?
                (<div class='button loginbutton' onClick={()=>{navigate('/login')}} >
                  로그인
                </div>):(<div class = 'button logoutbutton' onClick={()=>{localStorage.removeItem('logined');
              window.location.replace('/')}}>로그아웃</div>)
}
              </div>
            </div>
          </div>

        </div>
      </header>
    </div>
  );
  }
  export default Header;