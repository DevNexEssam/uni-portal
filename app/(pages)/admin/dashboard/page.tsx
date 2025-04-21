"use client";
// import AdminLayout from '@/components/admin/AdminLayout';
import StatsCards from "@/components/admin/StatsCards";
import QuickActions from "@/components/admin/QuickActions";
import RecentActivity from "@/components/admin/RecentActivity";

export default function AdminDashboard() {
  return (
    <>
      <StatsCards />
      <QuickActions />
      <RecentActivity />
    </>
  );
}
