"use client"

import { MenuIcon } from "lucide-react"
import dynamic from "next/dynamic"
import { useState } from "react"

/* The sheet (Base UI dialog) is only downloaded when the menu is first opened. */
const MobileMenu = dynamic(() => import("./mobile-menu"), { ssr: false })

/** Below `xl` the header nav collapses into a sheet. */
export function MobileNav() {
  const [open, setOpen] = useState(false)
  const [loaded, setLoaded] = useState(false)

  return (
    <>
      <button
        type="button"
        aria-label="Open menu"
        aria-haspopup="dialog"
        aria-expanded={open}
        onClick={() => {
          setLoaded(true)
          setOpen(true)
        }}
        className="grid size-11 place-items-center rounded-md text-paper transition-colors hover:bg-white/10 xl:hidden"
      >
        <MenuIcon className="size-6" />
      </button>
      {loaded && <MobileMenu open={open} onOpenChange={setOpen} />}
    </>
  )
}
