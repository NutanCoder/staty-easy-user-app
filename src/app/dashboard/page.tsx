"use client";

import FavoriteContacts from "@/components/dashboard/FavoriteContacts";
import MarketInsights from "@/components/dashboard/MarketInsights";
import QuickActions from "@/components/dashboard/QuickActions";
import RecentActivity from "@/components/dashboard/RecentActivity";
import RecentlyViewed from "@/components/dashboard/RecentlyViewed";
import SavedSearches from "@/components/dashboard/SavedSearches";
import UpcomingViewings from "@/components/dashboard/UpcomingViewings";
import { supabaseClient } from "@/lib/supabaseClient";
import { useEffect, useState } from "react";

// Mock data for activities
const mockActivities = [
  {
    id: "1",
    type: "message" as const,
    title: "New message from John Doe",
    description: "Interested in viewing the property this weekend",
    timestamp: "2 hours ago",
    link: "/chat/1",
  },
  {
    id: "2",
    type: "property_view" as const,
    title: "Property Viewing Scheduled",
    description: "Modern Apartment in Downtown - Saturday at 2 PM",
    timestamp: "1 day ago",
    link: "/properties/1",
  },
  {
    id: "3",
    type: "property_update" as const,
    title: "Price Update",
    description: "Suburban Family Home price reduced by $25,000",
    timestamp: "2 days ago",
    link: "/properties/2",
  },
];

// Mock data for recently viewed properties
const mockRecentlyViewed = [
  {
    id: "3",
    title: "Luxury Penthouse Suite",
    price: 1200000,
    imageUrl: `https://picsum.photos/1200/600?random=${Math.floor(
      Math.random() * 1000
    )}`,
    viewedAt: "1 hour ago",
    status: "active" as const,
    location: "Downtown",
    address_line1: "123 Main St",
    address_line2: "Apt 4B",
    city: "New York",
    state: "NY",
    postal_code: "10001",
  },
  {
    id: "4",
    title: "Cozy Studio Apartment",
    price: 250000,
    imageUrl: `https://picsum.photos/1200/600?random=${Math.floor(
      Math.random() * 1000
    )}`,
    viewedAt: "3 hours ago",
    status: "active" as const,
    location: "Downtown",
    address_line1: "123 Main St",
    address_line2: "Apt 4B",
    city: "New York",
    state: "NY",
    postal_code: "10001",
  },
];

// Mock data for saved searches
const mockSavedSearches = [
  {
    id: "1",
    name: "Downtown Apartments",
    criteria: {
      location: "Downtown",
      minPrice: 300000,
      maxPrice: 600000,
      propertyType: "Apartment",
      bedrooms: 2,
    },
    alertEnabled: true,
    matchCount: 5,
    lastChecked: "2 hours ago",
  },
  {
    id: "2",
    name: "Suburban Houses",
    criteria: {
      location: "Suburbs",
      minPrice: 500000,
      maxPrice: 1000000,
      propertyType: "House",
      bedrooms: 3,
    },
    alertEnabled: false,
    matchCount: 8,
    lastChecked: "1 day ago",
  },
];

// Mock data for market trends
const mockMarketTrends = [
  {
    area: "Downtown",
    priceChange: 5.2,
    averagePrice: 550000,
    listingsDelta: 12,
    daysOnMarket: 15,
  },
  {
    area: "Suburbs",
    priceChange: -2.1,
    averagePrice: 750000,
    listingsDelta: -5,
    daysOnMarket: 25,
  },
  {
    area: "Waterfront",
    priceChange: 8.5,
    averagePrice: 1200000,
    listingsDelta: 20,
    daysOnMarket: 10,
  },
];

// Mock data for favorite contacts
const mockContacts = [
  {
    id: "1",
    name: "John Smith",
    role: "Senior Agent",
    imageUrl: `https://picsum.photos/200?random=${Math.floor(Math.random() * 1000)}`,
    rating: 4.8,
    properties: 45,
    responseTime: "< 1 hour",
  },
  {
    id: "2",
    name: "Sarah Johnson",
    role: "Property Manager",
    imageUrl: `https://picsum.photos/200?random=${Math.floor(Math.random() * 1000)}`,
    rating: 4.9,
    properties: 32,
    responseTime: "2 hours",
  },
];

// Mock data for upcoming viewings
const mockViewings = [
  {
    id: "1",
    propertyId: "1",
    propertyTitle: "Modern Downtown Loft",
    propertyImage: `https://picsum.photos/400/300?random=${Math.floor(Math.random() * 1000)}`,
    date: "Tomorrow",
    time: "2:00 PM",
    agentName: "John Smith",
    status: "confirmed" as const,
    location: "123 Downtown Ave",
  },
  {
    id: "2",
    propertyId: "2",
    propertyTitle: "Suburban Family Home",
    propertyImage: `https://picsum.photos/400/300?random=${Math.floor(Math.random() * 1000)}`,
    date: "Next Tuesday",
    time: "3:30 PM",
    agentName: "Sarah Johnson",
    status: "pending" as const,
    location: "456 Suburb Street",
  },
];

export default function DashboardPage() {
  const [user, setUser] = useState<any>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const getUser = async () => {
      const {
        data: { user },
      } = await supabaseClient.auth.getUser();
      setUser(user);
      setLoading(false);
    };

    getUser();
  }, []);

  if (loading) {
    return (
      <div className="flex justify-center items-center h-[calc(100vh-4rem)]">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-500"></div>
      </div>
    );
  }

  if (!user) {
    return (
      <div className="flex justify-center items-center h-[calc(100vh-4rem)]">
        <p className="text-lg text-gray-600">
          Please log in to view your dashboard.
        </p>
      </div>
    );
  }

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="mb-8">
        <h1 className="text-2xl font-bold text-gray-900">Dashboard</h1>
        <p className="mt-1 text-sm text-gray-500">Welcome back, {user.email}</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8">
        <div className="lg:col-span-2">
          <QuickActions />
        </div>
        <div>
          <RecentActivity activities={mockActivities} />
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8">
        <div className="lg:col-span-2">
          <RecentlyViewed properties={mockRecentlyViewed} />
        </div>
        <div>
          <SavedSearches searches={mockSavedSearches} />
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8">
        <div className="lg:col-span-2">
          <UpcomingViewings viewings={mockViewings} />
        </div>
        <div>
          <MarketInsights trends={mockMarketTrends} />
        </div>
      </div>

      <div className="mb-8">
        <FavoriteContacts contacts={mockContacts} />
      </div>
    </div>
  );
}
