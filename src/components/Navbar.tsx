import React from "react";
import pfpImage from "../../public/pfp.png"
import { cn } from "../utils/utils";

interface navBarProps extends React.ButtonHTMLAttributes<HTMLButtonElement>{

}


const Navbar = React.forwardRef<HTMLElement, navBarProps>(({className}, ref) => {
    return <nav className={cn("flex items-center h-20 bg-slate-900", className)} ref={ref}>
    <a href="/" className={"pr-5"}>
        <img src={pfpImage} alt="pfp" className="size-20"/>
    </a>
    <a href="/about" className="text-white bg-[#192441] hover:bg-[#3F51B5] font-medium rounded-lg text-sm mx-5 px-8 py-2.5 mr-2">About</a>
    <a href="/projects" className="text-white bg-[#192441] hover:bg-[#3F51B5] font-medium rounded-lg text-sm mx-5 px-8 py-2.5 mr-2">Projects</a>
</nav>
})

Navbar.displayName = "Navbar"
export default Navbar;
// <!-- frame: navbar -->
// <div class="frame navbar-343b5b2cf2be">
//   <!-- rect: pfp -->
//   <div class="shape rect pfp-343b5b2cf2c2">
//   </div>
//   <!-- frame: Board -->
//   <div class="frame board-343b5b2cf2c1">
//     <!-- text: About -->
//     <div class="shape text about-343b5b2cf2c5">
//       <div class="text-node-html" id="html-text-node-1819f59b-ea7b-801e-8004-343b5b2cf2c5" data-x="217" data-y="167">
//         <div class="root rich-text root-0" style="display:flex;white-space:break-spaces;align-items:flex-start" xmlns="http://www.w3.org/1999/xhtml">
//           <div class="paragraph-set root-0-paragraph-set-0">
//             <p class="paragraph root-0-paragraph-set-0-paragraph-0" dir="auto"><span class="text-node root-0-paragraph-set-0-paragraph-0-text-0" style="color:rgba(255, 255, 255, 1);text-transform:none;line-break:auto;overflow-wrap:initial;white-space:pre;text-rendering:geometricPrecision;caret-color:rgba(255, 255, 255, 1);text-decoration:none;--font-id:sourcesanspro;--fills:[[&quot;^ &quot;,&quot;~:fill-color&quot;,&quot;#ffffff&quot;,&quot;~:fill-opacity&quot;,1]];letter-spacing:0px;font-size:36px;font-family:&quot;sourcesanspro&quot;;font-style:normal;font-weight:400">About</span></p>
//           </div>
//         </div>
//       </div>
//     </div>
//   </div>
//   <!-- frame: Board -->
//   <div class="frame board-343b5b2cf2c0">
//     <!-- text: Projects -->
//     <div class="shape text projects-343b5b2cf2c4">
//       <div class="text-node-html" id="html-text-node-1819f59b-ea7b-801e-8004-343b5b2cf2c4" data-x="444" data-y="167">
//         <div class="root rich-text root-0" style="display:flex;white-space:break-spaces;align-items:flex-start" xmlns="http://www.w3.org/1999/xhtml">
//           <div class="paragraph-set root-0-paragraph-set-0">
//             <p class="paragraph root-0-paragraph-set-0-paragraph-0" dir="auto"><span class="text-node root-0-paragraph-set-0-paragraph-0-text-0" style="color:rgba(255, 255, 255, 1);text-transform:none;line-break:auto;overflow-wrap:initial;white-space:pre;text-rendering:geometricPrecision;caret-color:rgba(255, 255, 255, 1);text-decoration:none;--font-id:sourcesanspro;--fills:[[&quot;^ &quot;,&quot;~:fill-color&quot;,&quot;#ffffff&quot;,&quot;~:fill-opacity&quot;,1]];letter-spacing:0px;font-size:36px;font-family:&quot;sourcesanspro&quot;;font-style:normal;font-weight:400">Projects</span></p>
//           </div>
//         </div>
//       </div>
//     </div>
//   </div>
// </div>
