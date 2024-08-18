import { Post, Rating } from '@prisma/client'
import { BedSingle, Heart, ShowerHead } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import { Badge } from '../ui/badge'

interface CardProps extends Post {
  ratings: Rating[] // Ensure reviews are included
}

export function Card(post: CardProps) {
  // Calculate the average rating if there are any reviews
  const averageRating = post.ratings.length
    ? post.ratings.reduce((sum, review) => sum + review.stars, 0) /
      post.ratings.length
    : 0

  return (
    <Link key={post.id} href={`/details?id=${post.id}`}>
      <div className='space-y-1 block'>
        <div className='relative aspect-square'>
          <Image src={post.images[0]} fill alt='image' />
        </div>
        <div className='space-x-1'>
          <Badge className='text-xs' variant='secondary'>
            <ShowerHead className='size-4 mr-1' /> {post.bathroom} bath
          </Badge>
          <Badge className='text-xs' variant='secondary'>
            <BedSingle className='size-4 mr-2' /> {post.bedroom} bed
          </Badge>
        </div>
        <div className='text-sm'>
          <h3 className='font-medium'>{post.title}</h3>
          <div className='flex justify-between items-center'>
            <p className='font-bold'>₱{post.price.toLocaleString()}</p>
            {post.ratings.length > 0 && (
              <div className='flex items-center space-x-1'>
                <Heart className='text-red-500 fill-red-500 size-4' />
                <span>{averageRating.toFixed(1)}</span>{' '}
                {/* Display average rating */}
              </div>
            )}
          </div>
        </div>
      </div>
    </Link>
  )
}
