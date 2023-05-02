/*import "./sidebar.css"
import {useEffect,useState} from "react"
import axios from "axios"
import { Link } from "react-router-dom";
export default function Slidebar() {
  const [cats,setCats]=useState([]);
  useEffect(()=>{
        const getCats=async ()=>{
               const res=await axios.get("http://localhost:5000/api/categories");
               setCats(res.data);
        }
        getCats();
  },[]);
  return (
    <div className="sidebar">
      <div className="sidebarItem">
 <span className="sidebarTitle">ABOUT ME</span>
 <img src="https://images.hdqwalls.com/wallpapers/thumb/the-black-adam-2023-12.jpg" alt="" />
 <p>Paragraphs are the building blocks of papers. Many students define paragraphs in terms of length: a paragraph is a group of at least five sentences, a paragraph is half a page long, etc. In reality, though, the unity and coherence of ideas among sentences is what constitutes a paragraph. A paragraph is defined as “a group of sentences or a single sentence that forms a unit” (Lunsford and Connors 116). Length and appearance do not determine whether a section in a paper is a paragraph. For instance, in some styles of writing, particularly journalistic styles, a paragraph can be just one sentence long. Ultimately, a paragraph is a sentence or group of sentences that support</p>
 </div>
 <div className="sidebarItems">
     <span className="sidebarTitle">Catgories</span>
         <ul className="sidebarList">
          {
            cats.map((c)=>{
              <Link to={`/?cat=${c.name}`} className="link">
              <li className="sidebarListItem">{c.name}</li>
              </Link>
            })
          }
         </ul>
 </div>
 <div className="sidebarItem">
     <span className="sidebarTitle">FOLLOW US</span>
     <div className="sidebarSocial">
     <i className="sidebarIcon fa-brands fa-square-facebook"></i>
     <i className="sidebarIcon fa-brands fa-square-twitter"></i>
     <i className="sidebarIcon fa-brands fa-square-pinterest"></i>
     <i className="sidebarIcon fa-brands fa-square-instagram"></i>
     </div>
 </div>
    </div>
  )
}
*/
import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./sidebar.css";

export default function Sidebar() {
  const [cats, setCats] = useState([]);

  useEffect(() => {
    const getCats = async () => {
      const res = await axios.get("http://localhost:5000/api/categories");
      setCats(res.data);
    };
    getCats();
  }, []);
  return (
    <div className="sidebar">
      <div className="sidebarItem">
        <span className="sidebarTitle">ABOUT ME</span>
        <img
          src="https://i.pinimg.com/236x/1e/3f/58/1e3f587572a7a7b20bbf1828595a1786--holiday-party-themes-holiday-gift-guide.jpg"
          alt=""
        />
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate qui
          necessitatibus nostrum illum reprehenderit.
        </p>
      </div>
      <div className="sidebarItem">
        <span className="sidebarTitle">CATEGORIES</span>
        <ul className="sidebarList">
          {cats.map((c) => (
            <Link to={`/?cat=${c.name}`} className="link">
            <li className="sidebarListItem">{c.name}</li>
            </Link>
          ))}
        </ul>
      </div>
      <div className="sidebarItem">
        <span className="sidebarTitle">FOLLOW US</span>
        <div className="sidebarSocial">
          <i className="sidebarIcon fab fa-facebook-square"></i>
          <i className="sidebarIcon fab fa-twitter-square"></i>
          <i className="sidebarIcon fab fa-pinterest-square"></i>
          <i className="sidebarIcon fab fa-instagram-square"></i>
        </div>
      </div>
    </div>
  );
}