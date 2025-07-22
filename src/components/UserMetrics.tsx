import React, { useEffect, useState } from 'react'
import { UsersIcon, StarIcon, EyeIcon } from 'lucide-react'
export const UserMetrics = () => {
  const [visitorCount, setVisitorCount] = useState<number>(10000)
  const [isNewVisitor, setIsNewVisitor] = useState<boolean>(false)
  useEffect(() => {
    // Function to check and update visitor count
    const updateVisitorCount = () => {
      // Get stored values from localStorage
      const storedCount = localStorage.getItem('visitorCount')
      const lastVisitTime = localStorage.getItem('lastVisitTime')
      const visitorId = localStorage.getItem('visitorId')
      const currentTime = new Date().getTime()
      const uniqueId = `visitor-${currentTime}-${Math.random().toString(36).substring(2, 9)}`
      // Initialize count if not exists
      let count = storedCount ? parseInt(storedCount) : 10000
      // Check if this is a new visitor or if the last visit was more than 24 hours ago
      const isNew =
        !visitorId ||
        (lastVisitTime &&
          currentTime - parseInt(lastVisitTime) > 24 * 60 * 60 * 1000)
      if (isNew) {
        // Increment count for new visitors
        count += 1
        localStorage.setItem('visitorCount', count.toString())
        localStorage.setItem('lastVisitTime', currentTime.toString())
        localStorage.setItem('visitorId', uniqueId)
        setIsNewVisitor(true)
      }
      setVisitorCount(count)
    }
    updateVisitorCount()
    // Add a small delay to show the animation effect for new visitors
    const timer = setTimeout(() => {
      setIsNewVisitor(false)
    }, 3000)
    return () => clearTimeout(timer)
  }, [])
  return (
    <div className="mt-12 bg-white/90 backdrop-blur-sm rounded-lg shadow-lg p-6 border border-[#A2CBFF]">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="flex items-center">
          <div className="w-14 h-14 bg-[#1E3A8A]/10 rounded-full flex items-center justify-center mr-4">
            <UsersIcon className="w-7 h-7 text-[#1E3A8A]" />
          </div>
          <div>
            <div className="text-sm text-gray-600 font-medium">
              Happy Customers
            </div>
            <div className="text-3xl font-bold text-[#1E3A8A]">1,500+</div>
            <div className="text-xs text-green-600 font-medium">
              ↑ 12% this month
            </div>
          </div>
        </div>
        <div className="flex items-center">
          <div className="w-14 h-14 bg-[#1E3A8A]/10 rounded-full flex items-center justify-center mr-4">
            <StarIcon className="w-7 h-7 text-[#1E3A8A]" />
          </div>
          <div>
            <div className="text-sm text-gray-600 font-medium">
              Customer Reviews
            </div>
            <div className="text-3xl font-bold text-[#1E3A8A]">250+</div>
            <div className="flex items-center">
              <div className="flex mr-1">
                {[...Array(5)].map((_, i) => (
                  <StarIcon
                    key={i}
                    className="w-3 h-3 text-yellow-500 fill-yellow-500"
                  />
                ))}
              </div>
              <span className="text-xs text-gray-600">4.8/5</span>
            </div>
          </div>
        </div>
        <div className="flex items-center">
          <div
            className={`w-14 h-14 bg-[#1E3A8A]/10 rounded-full flex items-center justify-center mr-4 ${isNewVisitor ? 'animate-pulse' : ''}`}
          >
            <EyeIcon className="w-7 h-7 text-[#1E3A8A]" />
          </div>
          <div>
            <div className="text-sm text-gray-600 font-medium">
              Website Visitors
            </div>
            <div
              className={`text-3xl font-bold text-[#1E3A8A] transition-all duration-500 ${isNewVisitor ? 'scale-110' : ''}`}
            >
              {visitorCount.toLocaleString()}+
            </div>
            <div className="text-xs text-green-600 font-medium">
              {isNewVisitor ? 'New visitor!' : '↑ 8% this week'}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
