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
import { useSession } from "next-auth/react";

const Links = [
  { id: 0, label: "home", icon: <AiOutlineHome />, path: "/student/dashboard" },
  {
    id: 1,
    label: "Courses",
    icon: <BiBookOpen />,
    path: "/student/dashboard/courses",
  },
  {
    id: 2,
    label: "Assignments",
    icon: <MdOutlineAssignment />,
    path: "/student/dashboard/assignments",
  },
  {
    id: 3,
    label: "Files",
    icon: <FiFileText />,
    path: "/student/dashboard/files",
  },
  {
    id: 4,
    label: "Schedule",
    icon: <CiCalendar />,
    path: "/student/dashboard/schedule",
  },
  {
    id: 5,
    label: "Notifications",
    icon: <IoNotificationsOutline />,
    path: "/student/dashboard/notifications",
  },
  {
    id: 6,
    label: "Settings",
    icon: <IoSettingsOutline />,
    path: "/student/dashboard/settings",
  },
];

const Sidebar = () => {
  const { data: session, status } = useSession();
  const pathName = usePathname();
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
          className={`absolute bottom-5 w-full ${isExpanded ? "px-4" : "px-0"}`}
        >
            {isExpanded && (
          <div className="flex items-center justify-center space-x-3 p-4 bg-primary-light rounded-md text-white">
            <div className="w-10 h-10 rounded-full bg-gray-300" />
            <div>
                {session?.user?.name ? (
                  <>
                    <p className="text-sm font-semibold">{session.user.name}</p>
                    <p className="text-xs text-gray-300">{session.user.academicId}</p>
                  </>
                ) : (
                  <p className="text-sm font-semibold">ضيف</p>
                )}
              </div>
          </div>
            )}
        </div>
      </div>
    </aside>
  );
};

export default Sidebar;
