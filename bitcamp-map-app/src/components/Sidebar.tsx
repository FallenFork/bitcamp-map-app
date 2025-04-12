"use client";


import Link from "next/link";


export default function Sidebar() {
 return (
   <div className="space-y-6x">
     <div>
       <h3 className="text-xl font-semibold mb-3 text-blue-400">Connect With Us</h3>
       <ul className="space-y-5 text-base">
         <li>
           <div className="font-medium text-gray-700">Wesley Lau</div>
           <div className="flex space-x-4 mt-1">
             <Link
               href="https://www.linkedin.com/in/WesleyLauMD/"
               className="text-gray-600 hover:text-primary hover:underline"
               target="_blank"
               rel="noopener noreferrer"
             >
               LinkedIn
             </Link>
             <a
               href="mailto:wesleylau0524@gmail.com"
               className="text-gray-600 hover:text-primary hover:underline"
             >
               Email
             </a>
           </div>
         </li>
        
         <li>
           <div className="font-medium text-gray-700">Jason Li</div>
           <div className="flex space-x-4 mt-1">
             <Link
               href="https://www.linkedin.com/in/jason-li433/"
               className="text-gray-600 hover:text-primary hover:underline"
               target="_blank"
               rel="noopener noreferrer"
             >
               LinkedIn
             </Link>
             <a
               href="mailto:lijason433@gmail.com"
               className="text-gray-600 hover:text-primary hover:underline"
             >
               Email
             </a>
           </div>
         </li>
        
         <li>
           <div className="font-medium text-gray-700">Alex Moulton</div>
           <div className="flex space-x-4 mt-1">
             <Link
               href="https://www.linkedin.com/in/alex-moulton-8041a3309/"
               className="text-gray-600 hover:text-primary hover:underline"
               target="_blank"
               rel="noopener noreferrer"
             >
               LinkedIn
             </Link>
             <a
               href="mailto:acmoultn@gmail.com"
               className="text-gray-600 hover:text-primary hover:underline"
             >
               Email
             </a>
           </div>
         </li>
        
         <li>
           <div className="font-medium text-gray-700">Konstantinos Paparrizos</div>
           <div className="flex space-x-4 mt-1">
             <Link
               href="https://www.linkedin.com/in/kostas-paparrizos/"
               className="text-gray-600 hover:text-primary hover:underline"
               target="_blank"
               rel="noopener noreferrer"
             >
               LinkedIn
             </Link>
             <a
               href="mailto:kostas.paparrizos@gmail.com"
               className="text-gray-600 hover:text-primary hover:underline"
             >
               Email
             </a>
           </div>
         </li>
       </ul>
     </div>
    
     <div className="pt-2">
       <h3 className="text-xl font-semibold mb-3 text-blue-400">Social Media</h3>
       <ul className="space-y-2 text-base">
         <li>
           <Link
             href="https://www.instagram.com/travelerobc25/"
             className="text-gray-600 hover:text-primary hover:underline"
             target="_blank"
             rel="noopener noreferrer"
           >
             Follow Travelero on Instagram!
           </Link>
         </li>
       </ul>
     </div>
   </div>
 );
}
