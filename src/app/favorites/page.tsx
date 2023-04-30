import getCurrentUser from "../actions/getCurrentUser"
import getFavoriteListings from "../actions/getFavoriteListings"
import EmptyState from "../components/EmptyState"
import FavoritesClient from "./FavoritesClient"

const ListingPage = async () => {

  const currentUser = await getCurrentUser()
  const favorites = await getFavoriteListings()

  if ( favorites.length === 0 ) {
    <EmptyState 
      title="No favorites found"
      subtitle="Looks like you have no favorites listings"
    />
  }

  return (
    <FavoritesClient 
      listings={favorites}
      currentUser={currentUser}
    />
  )
}

export default ListingPage