"use client";
import { useState, useEffect } from "react";
import { CgSidebar, CgSidebarRight } from "react-icons/cg";
import { GiBookmarklet } from "react-icons/gi";
import { AiOutlineHome } from "react-icons/ai";
import { BiBookOpen } from "react-icons/bi";
import { MdOutlineAssignment } from "react-icons/md";
import { FiFileText } from "react-icons/fi";
import { CiCalendar } from "react-icons/ci";
import { IoNotificationsOutline, IoSettingsOutline } from "react-icons/io5";
import Link from "next/link";
import { usePathname } from "next/navigation";

const Links = [
  { id: 0, label: "home", icon: <AiOutlineHome />, path: "/dashboard" },
  { id: 1, label: "Courses", icon: <BiBookOpen />, path: "/dashboard/courses" },
  {
    id: 2,
    label: "Assignments",
    icon: <MdOutlineAssignment />,
    path: "/dashboard/assignments",
  },
  { id: 3, label: "Files", icon: <FiFileText />, path: "/dashboard/files" },
  { id: 4, label: "Schedule", icon: <CiCalendar />, path: "/dashboard/schedule" },
  {
    id: 5,
    label: "Notifications",
    icon: <IoNotificationsOutline />,
    path: "/dashboard/notifications",
  },
  { id: 6, label: "Settings", icon: <IoSettingsOutline />, path: "/dashboard/settings" },
];

const Sidebar = () => {
  const pathName = usePathname()
  console.log(pathName)
  
  const [isExpanded, setIsExpanded] = useState(true);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 768) {
        setIsExpanded(false);
      }
    };
    window.addEventListener("resize", handleResize);
    handleResize();
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <aside className="relative bg-primary h-screen flex flex-col border-r border-primary-light">
      {/* Toggle Button */}
      <button
        className="hidden md:block absolute bottom-50 right-0 p-2 bg-primary-light rounded-l-md text-white cursor-pointer"
        onClick={() => setIsExpanded(!isExpanded)}
      >
        <span className="text-lg">
          {isExpanded ? <CgSidebar /> : <CgSidebarRight />}
        </span>
      </button>

      <div
        className={`transition-all duration-300 ease-in-out ${
          isExpanded ? "w-64" : "w-20"
        }`}
      >
        {/* Logo */}
        <div className="flex items-center space-x-2 p-6 justify-center">
          <span className="text-primary bg-background p-2 rounded-md text-xl">
            <GiBookmarklet />
          </span>
          {isExpanded && (
            <span className="text-white text-lg font-semibold">
              My Dashboard
            </span>
          )}
        </div>

        {/* Navigation */}
        <div className="flex flex-col gap-2">
          {Links.map((item) => (
            <Link key={item.id} href={item.path}>
              <div
                title={item.label}
                className={`flex items-center space-x-2 p-2 hover:bg-primary-light rounded-md transition-all duration-300 ease-in-out ${
                  isExpanded ? "justify-start" : "justify-center"
                } ${pathName === item.path ? "bg-primary-light" : ""} `}
              >
                <span className="text-white text-lg">{item.icon}</span>
                {isExpanded && (
                  <span className="text-white text-sm font-semibold capitalize">
                    {item.label}
                  </span>
                )}
              </div>
            </Link>
          ))}
        </div>

        {/* User Info */}
        <div
          className={`absolute bottom-5 w-full ${
            isExpanded ? "px-4" : "px-0"
          } `}
        >
          <div className="flex items-center justify-center space-x-3 p-4 bg-primary-light rounded-md text-white">
            <div className="w-10 h-10 rounded-full bg-gray-300"></div>
            {isExpanded && (
              <div>
                <p className="text-sm font-semibold">User one</p>
                <p className="text-xs text-gray-300">Computer Science</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </aside>
  );
};

export default Sidebar;
