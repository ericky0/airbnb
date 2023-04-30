import prisma from '@/app/libs/prismadb'
import { SafeListing } from '../types'

export interface IListingParams {
  userId?: string
}

export default async function getListings(
  params: IListingParams
) {
  try {
    const { userId } = params
    
    let query: any = {}

    if (userId) {
      query.userId = userId
    }

    const listings = await prisma.listing.findMany({
      where: query,
      orderBy: {
        createdAt: 'desc'
      }
    })



    const safeListing: SafeListing[] = listings.map((listing) => {
      return {
        ...listing,
        createdAt: listing.createdAt.toISOString()
      }
    })

    return safeListing
  } catch (error: any) {
    throw new Error(error)
  }
}