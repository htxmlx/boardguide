'use client'

import { Button } from '@/components/ui/button'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { Post, Rating } from '@prisma/client'
import { useState } from 'react'
import { Card } from '@/components/common/card'

interface PostWithReviews extends Post {
  ratings: Rating[] // Assuming 'ratings' is the field name for reviews
}

export default function CardContainer({ data }: { data: PostWithReviews[] }) {
  const [filteredData, setFilteredData] = useState(data)
  const [selectedCampus, setSelectedCampus] = useState('All')

  const handleFilter = (campus: string) => {
    setSelectedCampus(campus)
    if (campus === 'All') {
      setFilteredData(data)
    } else {
      setFilteredData(data.filter((post) => post.closeTo === campus))
    }
  }

  const hasPosts = filteredData.length > 0

  return (
    <section className='w-full px-4 py-8 md:px-8 md:py-12'>
      {/* Filter Buttons */}
      <div className='flex flex-wrap justify-center gap-2 mb-4'>
        <Button
          onClick={() => handleFilter('All')}
          variant={selectedCampus === 'All' ? 'default' : 'outline'}
          className='flex-1 md:flex-initial'
        >
          All
        </Button>
        <Button
          onClick={() => handleFilter('west')}
          variant={selectedCampus === 'west' ? 'default' : 'outline'}
          className='flex-1 md:flex-initial'
        >
          West Campus
        </Button>
        <Button
          onClick={() => handleFilter('main')}
          variant={selectedCampus === 'main' ? 'default' : 'outline'}
          className='flex-1 md:flex-initial'
        >
          Main Campus
        </Button>
      </div>

      {/* Tabs */}
      <Tabs defaultValue='new' className='w-full'>
        <TabsList className='flex flex-wrap justify-center gap-2 mb-5'>
          <TabsTrigger value='new' className='flex-1 text-center'>
            New
          </TabsTrigger>
          <TabsTrigger value='prices' className='flex-1 text-center'>
            Best Prices
          </TabsTrigger>
        </TabsList>

        {/* New Posts Tab */}
        <TabsContent value='new'>
          {hasPosts ? (
            <div className='grid grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-x-4 gap-y-5'>
              {filteredData.map((post) => (
                <Card key={post.id} {...post} />
              ))}
            </div>
          ) : (
            <div className='text-center text-gray-500'>No posts available.</div>
          )}
        </TabsContent>

        {/* Best Prices Tab */}
        <TabsContent value='prices'>
          {hasPosts ? (
            <div className='grid grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-x-4 gap-y-5'>
              {filteredData
                .slice()
                .sort((a, b) => a.price - b.price)
                .map((post) => (
                  <Card key={post.id} {...post} />
                ))}
            </div>
          ) : (
            <div className='text-center text-gray-500'>No posts available.</div>
          )}
        </TabsContent>
      </Tabs>
    </section>
  )
}
