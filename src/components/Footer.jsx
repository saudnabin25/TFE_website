import React from "react";

export default function Footer(){
  return (
    <footer className="border-t bg-white">
      <div className="container-max py-8 text-sm text-gray-600 flex items-center justify-between">
        <div className="font-bold text-brand">YourNonprofit</div>
        <div>© {new Date().getFullYear()} All rights reserved.</div>
      </div>
    </footer>
  )
}
