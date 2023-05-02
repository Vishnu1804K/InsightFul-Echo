import "./header.css"

export default function Header() {
  return (
    <div className="header">
      <div className="headerTitles">
         <span className="headerTitleSm">Content is Anything that add value to your Life</span>
         <span className="headerTitleLg">BlogHub</span>
      </div>
      <img src="https://cdn2.unrealengine.com/14br-junior-key-art-newsheader-1920x1080-616278997.jpg" alt="" className="headerImg" />
    </div>
  )
}
