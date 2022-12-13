import React,{useState} from 'react'
import {FaDev} from "react-icons/fa"
import {BiMessageRoundedDots} from "react-icons/bi"
import {IoMdNotificationsOutline} from "react-icons/io"
import {FiSearch} from "react-icons/fi"
const  Navigation = () => {
  const[showMenu,setshowMenu]=  useState(false);
  const toggle = () =>{
    setshowMenu(!showMenu)
  }
  return (
   <header className="header">
    <div class="headerContainer">

      <div class="headerContainer__hambargerMenu"></div>
    <a href="https://dev.to/" className='headerContainer__logo'>
<FaDev size="3.12rem"/>
</a>

<div class="headerContainer__searchBox">
  <form >
    <input type="text" placeholder='Search...' aria-label="search"/>
  </form>
  </div>

  <div class="headerContainer__right">
    <button>Write Post</button>
    <i class="hidden-search">
<FiSearch/>
    </i>
    <i>
    <BiMessageRoundedDots/>
    </i>
    <i>
      <IoMdNotificationsOutline/>
    </i>
    <span onClick={toggle}>
      <img src="https://picsum.photos/200" alt="profile pic"/>
    </span>
  </div>

</div>
{/* hover header menu */}
<div className={showMenu?"dropdown-menu":"dropdown-menu-close"}>
<ul>
  <li>
    <a href="/profile"></a>
    <div class="u-name">Vishwanath</div>
    <small class="u-name-id">@vishwanath</small>
  </li>
  <li onClick={toggle}>
    <a href="/dashboard">Dashboard</a>
  </li>
  <li onClick={toggle}>
    <a href="/post">Write post</a>
  </li>
  <li onClick={toggle}>
    <a href="/list">Reading List</a>
  </li>
  <li onClick={toggle}>
    <a href="/settings">Settings</a>
  </li>
  <li onClick={toggle}>
    <a href="/signout">Signout</a>
  </li>
</ul>
</div>
   </header>
  )
}

export default Navigation