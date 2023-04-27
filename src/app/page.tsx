import { Listing } from "@prisma/client";
import getListings from "./actions/getListings";
import Container from "./components/Container";
import EmptyState from "./components/EmptyState";
import ListingCard from "./components/Listings/ListingCard";
import getCurrentUser from "./actions/getCurrentUser";

export default async function Home() {

  const listings = await getListings()
  const currentUser = await getCurrentUser()

  if (listings.length === 0) {
    return (
      <EmptyState title="No exact matches" subtitle="Try changing or moving some of your filters" showReset/>
    )
  }

  return (
     <Container>
        <div className="
          pt-24 
          grid 
          grid-cols-1 
          sm:grid-cols-2
          md:grid-cols-3
          lg:grid-cols-4
          xl:grid-cols-5
          2xl:grid-cols-6
          gap-8
        ">
          {listings.map((listing: Listing) => {
            return (
              <>
                <ListingCard
                  key={listing.id}
                  currentUser={currentUser}
                  data={listing}
                />
              </>
            )
          })}
        </div>
      </Container>
  )
}
