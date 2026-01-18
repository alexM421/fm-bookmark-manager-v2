import { useLocation } from "react-router-dom"
import useHandleClickOutside from "../../hooks/useHandleClickOutside"
import { useState } from "react"
import { useRef } from "react"
import data from "../../../data.json"

export type bookmark = {
    id: string
    title: string
    url: string
    favicon: string
    description: string
    tags: string[]
    pinned: boolean
    isArchived: boolean
    visitCount: number
    createdAt: string
    lastVisited: string | null
}

export default function useBookmarksData({ search }: { search: string }) {

    const { bookmarks }: { bookmarks: bookmark[] } = data

    const [sortBy, setSortBy] = useState<string>("most-recent")
    const [showSortOptions, setShowSortOptions] = useState<boolean>(false)

    //handle the sort options click outside
    const sortOptionsRef = useRef<HTMLDivElement>(null)
    const sortButtonRef = useRef<HTMLButtonElement>(null)
    useHandleClickOutside(sortOptionsRef, () => setShowSortOptions(false), sortButtonRef)

    //handle the sort option click
    const handleOptionClick = (option: string) => {
        setSortBy(option)
        setShowSortOptions(false)
    }

    //check if the bookmarks should be filtered by archive
    const { pathname } = useLocation()
    const archive = pathname === "/archived"
    let filteredBookmarks = bookmarks.filter((bookmark) => {
        return bookmark.isArchived === archive
    })
    

    //and then search
    filteredBookmarks = filteredBookmarks.filter((bookmark) => {
        return bookmark.title.toLowerCase().includes(search.toLowerCase())
    })

    //sort the bookmarks
    filteredBookmarks = filteredBookmarks.sort((a, b) => {
        if(sortBy === "most-recent"){
            return new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime()
        } else if(sortBy === "recently-visited"){
            return new Date(b.lastVisited || "").getTime() - new Date(a.lastVisited || "").getTime()
        } else if(sortBy === "most-visited"){
            return b.visitCount - a.visitCount
        }else{
            return 0
        }
    })

    return { 
        showSortOptions, setShowSortOptions, 
        sortButtonRef, sortOptionsRef, 
        handleOptionClick, 
        sortBy, 
        filteredBookmarks
    }
}